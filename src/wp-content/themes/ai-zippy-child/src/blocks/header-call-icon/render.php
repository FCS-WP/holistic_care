<?php

/**
 * Header Call Us Icon dynamic block render template.
 *
 * @var array $attributes Block attributes.
 */

$phone_number = trim(preg_replace('/[^0-9+\-\s().]/', '', (string) ($attributes['phoneNumber'] ?? '+6565134757')));
$phone_href = preg_replace('/[^0-9+]/', '', $phone_number);
$aria_label = trim((string) ($attributes['ariaLabel'] ?? __('Call Us', 'ai-zippy-child')));

if ($phone_href === '') {
	return;
}

if ($aria_label === '') {
	$aria_label = __('Call Us', 'ai-zippy-child');
}

$wrapper_attributes = get_block_wrapper_attributes([
	'class'      => 'az-child-site-header__icon az-child-site-header__icon--call',
	'href'       => 'tel:' . $phone_href,
	'aria-label' => $aria_label . ' ' . $phone_number,
]);
?>

<a <?php echo $wrapper_attributes; ?>>
	<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><path d="M5.3 3.8C7 2.8 8.7 4.1 9.4 5.5l.8 1.6c.4.9 0 2-.8 2.5l-1 .7c-.3.2-.4.7-.2 1.1 1.2 2.2 3 4 5.3 5.2.4.2.9.1 1.1-.2l.7-1c.5-.8 1.6-1.2 2.5-.8l1.6.8c1.5.7 2.8 2.4 1.7 4.1-.9 1.4-2.5 2.2-4.2 2-8.5-.9-15.3-7.7-16.1-16.2-.2-1.6.6-3.2 2-4.2z"></path></svg>
</a>
