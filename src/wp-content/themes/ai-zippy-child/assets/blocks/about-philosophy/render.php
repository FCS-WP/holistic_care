<?php

/**
 * About Philosophy dynamic block render template.
 *
 * @var array $attributes Block attributes.
 */

$section_label    = esc_html($attributes['sectionLabel'] ?? '');
$title            = wp_kses_post($attributes['title'] ?? '');
$description      = wp_kses_post($attributes['description'] ?? '');
$image_url        = esc_url($attributes['imageUrl'] ?? '');
$image_alt        = esc_attr($attributes['imageAlt'] ?? '');
$force_full_width = !isset($attributes['forceFullWidth']) ? true : !empty($attributes['forceFullWidth']);
$heading_id       = !empty($title) ? wp_unique_id('az-about-title-') : '';

$wrapper_config = [
	'class' => $force_full_width ? 'alignfull az-force-fullwidth' : '',
];

if (!empty($heading_id)) {
	$wrapper_config['aria-labelledby'] = $heading_id;
}

$wrapper_attributes = get_block_wrapper_attributes($wrapper_config);
?>

<section <?php echo $wrapper_attributes; ?>>
	<div class="az-child-about__inner">
		<div class="az-child-about__content">
			<?php if (!empty($section_label)) : ?>
				<p class="az-child-about__eyebrow"><?php echo $section_label; ?></p>
			<?php endif; ?>

			<?php if (!empty($title)) : ?>
				<h2 id="<?php echo esc_attr($heading_id); ?>" class="az-child-about__title"><?php echo $title; ?></h2>
			<?php endif; ?>

			<?php if (!empty($description)) : ?>
				<p class="az-child-about__description"><?php echo $description; ?></p>
			<?php endif; ?>
		</div>

		<div class="az-child-about__media-wrap">
			<div class="az-child-about__media-frame">
				<?php if (!empty($image_url)) : ?>
					<img class="az-child-about__media" src="<?php echo $image_url; ?>" alt="<?php echo $image_alt; ?>" loading="lazy" />
				<?php else : ?>
					<div class="az-child-about__media az-child-about__media--placeholder"></div>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>
