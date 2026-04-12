<?php

/**
 * Holistic Hero dynamic block render template.
 *
 * @var array $attributes Block attributes.
 */

$title              = nl2br(esc_html($attributes['title'] ?? ''));
$description        = esc_html($attributes['description'] ?? '');
$button_text        = esc_html($attributes['buttonText'] ?? '');
$button_url         = esc_url($attributes['buttonUrl'] ?? '#');
$open_in_new_tab    = !empty($attributes['openInNewTab']);
$background_image   = esc_url($attributes['backgroundImageUrl'] ?? '');
$overlay_raw        = isset($attributes['overlayOpacity']) ? (int) $attributes['overlayOpacity'] : 55;
$overlay_clamped    = max(0, min(100, $overlay_raw));
$overlay_opacity    = (string) ($overlay_clamped / 100);
$min_height_raw     = (string) ($attributes['minHeight'] ?? '78vh');
$valid_size_pattern = '/^([0-9]+(?:\.[0-9]+)?)(vh|vw|px|rem|em|%)$/';
$min_height         = preg_match($valid_size_pattern, $min_height_raw) ? $min_height_raw : '78vh';
$force_full_width   = !isset($attributes['forceFullWidth']) ? true : !empty($attributes['forceFullWidth']);

$style_parts = [
	'--az-child-hero-overlay-opacity:' . esc_attr($overlay_opacity),
	'--az-child-hero-min-height:' . esc_attr($min_height),
];

if (!empty($background_image)) {
	$style_parts[] = 'background-image:url(' . esc_url($background_image) . ')';
}

$wrapper_attributes = get_block_wrapper_attributes([
	'class' => $force_full_width ? 'alignfull az-force-fullwidth' : '',
	'style' => implode(';', $style_parts),
]);

$target = $open_in_new_tab ? ' target="_blank"' : '';
$rel    = $open_in_new_tab ? ' rel="noopener noreferrer"' : '';
?>

<div <?php echo $wrapper_attributes; ?>>
	<div class="az-child-hero__overlay"></div>
	<div class="az-child-hero__content">
		<?php if (!empty($title)) : ?>
			<h1 class="az-child-hero__title"><?php echo $title; ?></h1>
		<?php endif; ?>

		<?php if (!empty($description)) : ?>
			<p class="az-child-hero__description"><?php echo $description; ?></p>
		<?php endif; ?>

		<?php if (!empty($button_text)) : ?>
			<div class="az-child-hero__actions">
				<a class="az-child-hero__button" href="<?php echo $button_url; ?>"<?php echo $target; ?><?php echo $rel; ?>>
					<?php echo $button_text; ?>
				</a>
			</div>
		<?php endif; ?>
	</div>
</div>
