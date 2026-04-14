<?php

defined('ABSPATH') || exit;

/**
 * Register a shared REST endpoint for public-facing form submissions.
 */
function ai_zippy_child_register_form_submission_route(): void
{
	register_rest_route(
		'ai-zippy-child/v1',
		'/forms/submit',
		[
			'methods'             => WP_REST_Server::CREATABLE,
			'callback'            => 'ai_zippy_child_handle_form_submission',
			'permission_callback' => '__return_true',
		]
	);
}
add_action('rest_api_init', 'ai_zippy_child_register_form_submission_route');

/**
 * Sanitize arbitrary form payloads recursively.
 *
 * @param mixed $value Raw value.
 * @return mixed
 */
function ai_zippy_child_sanitize_form_value($value)
{
	if (is_array($value)) {
		return array_map('ai_zippy_child_sanitize_form_value', $value);
	}

	return sanitize_textarea_field((string) $value);
}

/**
 * Build plain-text email body from submitted fields.
 *
 * @param string $form_id Form identifier.
 * @param array  $fields  Sanitized fields.
 * @param array  $meta    Submission meta.
 * @return string
 */
function ai_zippy_child_build_form_email_body(string $form_id, array $fields, array $meta): string
{
	$lines   = [];
	$lines[] = 'Form ID: ' . $form_id;
	$lines[] = 'Submitted: ' . wp_date('Y-m-d H:i:s');

	if (!empty($meta['page_url'])) {
		$lines[] = 'Page: ' . esc_url_raw((string) $meta['page_url']);
	}

	$lines[] = '';
	$lines[] = 'Submitted fields:';

	foreach ($fields as $key => $value) {
		$label = ucwords(str_replace(['_', '-'], ' ', (string) $key));
		$lines[] = $label . ': ' . (is_scalar($value) ? (string) $value : wp_json_encode($value));
	}

	return implode("\n", $lines);
}

/**
 * Handle shared form submissions.
 *
 * @param WP_REST_Request $request REST request object.
 * @return WP_REST_Response|WP_Error
 */
function ai_zippy_child_handle_form_submission(WP_REST_Request $request)
{
	$params = $request->get_json_params();

	if (!is_array($params)) {
		return new WP_REST_Response(
			[
				'success' => false,
				'message' => __('Invalid form payload.', 'ai-zippy-child'),
			],
			400
		);
	}

	$form_id = sanitize_key($params['formId'] ?? '');
	$fields  = ai_zippy_child_sanitize_form_value($params['fields'] ?? []);
	$meta    = ai_zippy_child_sanitize_form_value($params['meta'] ?? []);

	if (empty($form_id) || !is_array($fields)) {
		return new WP_REST_Response(
			[
				'success' => false,
				'message' => __('Missing form configuration.', 'ai-zippy-child'),
			],
			400
		);
	}

	if (!empty($fields['website'])) {
		return new WP_REST_Response(
			[
				'success' => true,
				'message' => __('Message sent successfully.', 'ai-zippy-child'),
			],
			200
		);
	}

	$configured_recipient = '';

	if ('contact-message' === $form_id && !empty($fields['_recipient_email']) && !empty($fields['_recipient_signature'])) {
		$recipient_candidate = sanitize_email((string) $fields['_recipient_email']);
		$recipient_signature = (string) $fields['_recipient_signature'];
		$expected_signature = hash_hmac('sha256', $recipient_candidate, wp_salt('auth'));

		if (!empty($recipient_candidate) && is_email($recipient_candidate) && hash_equals($expected_signature, $recipient_signature)) {
			$configured_recipient = $recipient_candidate;
		}
	}

	unset($fields['_recipient_email'], $fields['_recipient_signature']);

	$required_fields = apply_filters(
		'ai_zippy_child_form_required_fields',
		[
			'contact-message' => ['name', 'email', 'message'],
		][$form_id] ?? [],
		$form_id,
		$fields,
		$meta
	);

	foreach ($required_fields as $required_field) {
		$required_key = sanitize_key((string) $required_field);

		if (empty(trim((string) ($fields[$required_key] ?? '')))) {
			return new WP_REST_Response(
				[
					'success' => false,
					'message' => __('Please complete all required fields.', 'ai-zippy-child'),
					'field'   => $required_key,
				],
				422
			);
		}
	}

	if (!empty($fields['email']) && !is_email((string) $fields['email'])) {
		return new WP_REST_Response(
			[
				'success' => false,
				'message' => __('Please enter a valid email address.', 'ai-zippy-child'),
				'field'   => 'email',
			],
			422
		);
	}

	$recipient = apply_filters(
		'ai_zippy_child_form_recipient',
		!empty($configured_recipient) ? $configured_recipient : get_option('admin_email'),
		$form_id,
		$fields,
		$meta
	);

	$subject = apply_filters(
		'ai_zippy_child_form_subject',
		sprintf(
			'[%s] %s',
			wp_specialchars_decode(get_bloginfo('name'), ENT_QUOTES),
			ucwords(str_replace(['-', '_'], ' ', $form_id)) . ' submission'
		),
		$form_id,
		$fields,
		$meta
	);

	$message = apply_filters(
		'ai_zippy_child_form_message',
		ai_zippy_child_build_form_email_body($form_id, $fields, is_array($meta) ? $meta : []),
		$form_id,
		$fields,
		$meta
	);

	$headers = ['Content-Type: text/plain; charset=UTF-8'];

	if (!empty($fields['email']) && is_email((string) $fields['email'])) {
		$reply_name = sanitize_text_field((string) ($fields['name'] ?? 'Website Visitor'));
		$headers[]  = sprintf('Reply-To: %s <%s>', $reply_name, sanitize_email((string) $fields['email']));
	}

	$mail_sent = wp_mail($recipient, $subject, $message, $headers);

	do_action('ai_zippy_child_form_submitted', $form_id, $fields, $meta, $mail_sent);
	do_action("ai_zippy_child_form_submitted_{$form_id}", $fields, $meta, $mail_sent);

	if (!$mail_sent) {
		return new WP_REST_Response(
			[
				'success' => false,
				'message' => __('Unable to send your message right now. Please try again later.', 'ai-zippy-child'),
			],
			500
		);
	}

	return new WP_REST_Response(
		[
			'success' => true,
			'message' => __('Message sent successfully.', 'ai-zippy-child'),
		],
		200
	);
}
