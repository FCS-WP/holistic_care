<?php

/**
 * Contact Message dynamic block render template.
 *
 * @var array $attributes Block attributes.
 */

$section_title       = wp_kses_post($attributes['sectionTitle'] ?? '');
$section_description = wp_kses_post($attributes['sectionDescription'] ?? '');
$contacts            = $attributes['contacts'] ?? [];
$form_title          = wp_kses_post($attributes['formTitle'] ?? '');
$recipient_email     = sanitize_email($attributes['recipientEmail'] ?? '');
$name_label          = esc_html($attributes['nameLabel'] ?? '');
$name_placeholder    = esc_attr($attributes['namePlaceholder'] ?? '');
$phone_label         = esc_html($attributes['phoneLabel'] ?? '');
$phone_placeholder   = esc_attr($attributes['phonePlaceholder'] ?? '');
$email_label         = esc_html($attributes['emailLabel'] ?? '');
$email_placeholder   = esc_attr($attributes['emailPlaceholder'] ?? '');
$subject_label       = esc_html($attributes['subjectLabel'] ?? '');
$subject_placeholder = esc_html($attributes['subjectPlaceholder'] ?? '');
$message_label       = esc_html($attributes['messageLabel'] ?? '');
$message_placeholder = esc_attr($attributes['messagePlaceholder'] ?? '');
$button_text         = esc_html($attributes['buttonText'] ?? '');
$force_full_width    = !isset($attributes['forceFullWidth']) ? true : !empty($attributes['forceFullWidth']);

if (!is_array($contacts)) {
	$contacts = [];
}

$render_icon = static function ($type): string {
	switch ($type) {
		case 'whatsapp':
			return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.7 19.2l.5-3.1A7.5 7.5 0 1 1 19.5 9a7.5 7.5 0 0 1-10.9 6.7l-1.9.5z"></path><path d="M9.5 8.8c.2-.4.4-.4.6-.4h.5c.2 0 .4 0 .5.4l.6 1.4c.1.2.1.4 0 .6l-.4.6c-.1.2 0 .4.1.6.5.8 1.2 1.5 2.1 2 .2.1.4.2.6.1l.6-.4c.2-.1.4-.1.6 0l1.4.6c.4.2.4.3.4.5v.5c0 .2 0 .4-.4.6-.4.2-1 .4-1.6.3a6.4 6.4 0 0 1-5.4-5.4c-.1-.6 0-1.2.3-1.6z"></path></svg>';
		case 'email':
			return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16v10H4z"></path><path d="M4 8l8 6 8-6"></path></svg>';
		case 'address':
			return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11z"></path><circle cx="12" cy="10" r="2.4"></circle></svg>';
		case 'phone':
		default:
			return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.8 3.9c1.5-.9 3 .2 3.8 1.8l.8 1.6c.4.8 0 1.8-.8 2.3l-1 .7c-.3.2-.4.7-.2 1 .9 1.7 2.4 3.2 4.1 4.1.3.2.8.1 1-.2l.7-1c.5-.8 1.5-1.2 2.3-.8l1.6.8c1.6.8 2.7 2.3 1.8 3.8-.8 1.2-2.1 1.9-3.6 1.8C10 20.3 3.7 14 3 7.5c-.1-1.4.6-2.8 1.8-3.6z"></path></svg>';
	}
};

$resolve_href = static function ($type, $value): string {
	$raw_value = trim((string) $value);

	switch ($type) {
		case 'phone':
			return 'tel:' . preg_replace('/[^0-9+]/', '', $raw_value);
		case 'whatsapp':
			return 'https://wa.me/' . preg_replace('/[^0-9]/', '', $raw_value);
		case 'email':
			return 'mailto:' . sanitize_email($raw_value);
		default:
			return '';
	}
};

$wrapper_config = [
	'class' => $force_full_width ? 'alignfull az-force-fullwidth' : '',
];

$wrapper_attributes = get_block_wrapper_attributes($wrapper_config);

$name_id = wp_unique_id('az-contact-name-');
$phone_id = wp_unique_id('az-contact-phone-');
$email_id = wp_unique_id('az-contact-email-');
$subject_id = wp_unique_id('az-contact-subject-');
$message_id = wp_unique_id('az-contact-message-');
$honeypot_id = wp_unique_id('az-contact-website-');
$recipient_signature = !empty($recipient_email) ? hash_hmac('sha256', $recipient_email, wp_salt('auth')) : '';
?>

<section <?php echo $wrapper_attributes; ?>>
	<div class="az-child-contact__inner">
		<div class="az-child-contact__aside">
			<?php if (!empty($section_title)) : ?>
				<h2 class="az-child-contact__title"><?php echo $section_title; ?></h2>
			<?php endif; ?>

			<?php if (!empty($section_description)) : ?>
				<p class="az-child-contact__description"><?php echo $section_description; ?></p>
			<?php endif; ?>

			<div class="az-child-contact__items">
				<?php foreach ($contacts as $contact) : ?>
					<?php
					$type = sanitize_key($contact['icon'] ?? 'phone');
					$label = esc_html($contact['label'] ?? '');
					$value = esc_html($contact['value'] ?? '');
					$href = $resolve_href($type, $contact['value'] ?? '');
					?>
					<div class="az-child-contact__item az-child-contact__item--<?php echo esc_attr($type); ?>">
						<div class="az-child-contact__item-icon">
							<?php echo $render_icon($type); ?>
						</div>
						<div class="az-child-contact__item-copy">
							<?php if (!empty($label)) : ?>
								<div class="az-child-contact__item-label"><?php echo $label; ?></div>
							<?php endif; ?>
							<?php if (!empty($value)) : ?>
								<div class="az-child-contact__item-value">
									<?php if (!empty($href)) : ?>
										<a href="<?php echo esc_url($href); ?>"><?php echo $value; ?></a>
									<?php else : ?>
										<?php echo $value; ?>
									<?php endif; ?>
								</div>
							<?php endif; ?>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>

		<div class="az-child-contact__form-card">
			<?php if (!empty($form_title)) : ?>
				<h3 class="az-child-contact__form-title"><?php echo $form_title; ?></h3>
			<?php endif; ?>

			<form class="az-child-contact__form" data-az-form="contact-message">
				<div class="az-child-contact__field-grid">
					<div class="az-child-contact__field">
						<label for="<?php echo esc_attr($name_id); ?>" class="az-child-contact__field-label"><?php echo $name_label; ?></label>
						<input id="<?php echo esc_attr($name_id); ?>" name="name" class="az-child-contact__field-control" type="text" placeholder="<?php echo $name_placeholder; ?>" required />
					</div>

					<div class="az-child-contact__field">
						<label for="<?php echo esc_attr($phone_id); ?>" class="az-child-contact__field-label"><?php echo $phone_label; ?></label>
						<input id="<?php echo esc_attr($phone_id); ?>" name="phone" class="az-child-contact__field-control" type="text" placeholder="<?php echo $phone_placeholder; ?>" />
					</div>

					<div class="az-child-contact__field az-child-contact__field--full">
						<label for="<?php echo esc_attr($email_id); ?>" class="az-child-contact__field-label"><?php echo $email_label; ?></label>
						<input id="<?php echo esc_attr($email_id); ?>" name="email" class="az-child-contact__field-control" type="email" placeholder="<?php echo $email_placeholder; ?>" required />
					</div>

					<div class="az-child-contact__field az-child-contact__field--full">
						<label for="<?php echo esc_attr($subject_id); ?>" class="az-child-contact__field-label"><?php echo $subject_label; ?></label>
						<select id="<?php echo esc_attr($subject_id); ?>" name="subject" class="az-child-contact__field-control">
							<option><?php echo $subject_placeholder; ?></option>
						</select>
					</div>

					<div class="az-child-contact__field az-child-contact__field--full">
						<label for="<?php echo esc_attr($message_id); ?>" class="az-child-contact__field-label"><?php echo $message_label; ?></label>
						<textarea id="<?php echo esc_attr($message_id); ?>" name="message" class="az-child-contact__field-control az-child-contact__field-control--textarea" placeholder="<?php echo $message_placeholder; ?>" required></textarea>
					</div>

					<input id="<?php echo esc_attr($honeypot_id); ?>" name="website" type="text" tabindex="-1" autocomplete="off" hidden aria-hidden="true" />
					<?php if (!empty($recipient_email) && is_email($recipient_email)) : ?>
						<input name="_recipient_email" type="hidden" value="<?php echo esc_attr($recipient_email); ?>" />
						<input name="_recipient_signature" type="hidden" value="<?php echo esc_attr($recipient_signature); ?>" />
					<?php endif; ?>
				</div>

				<button type="submit" class="az-child-contact__submit"><?php echo $button_text; ?></button>
				<div class="az-child-contact__form-status" data-az-form-status hidden aria-live="polite"></div>
			</form>
		</div>
	</div>
</section>
