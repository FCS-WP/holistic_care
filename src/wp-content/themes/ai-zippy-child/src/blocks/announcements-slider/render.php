<?php

/**
 * Announcements Slider dynamic block render template.
 *
 * @var array $attributes Block attributes.
 */

$section_label = esc_html($attributes['sectionLabel'] ?? '');
$force_full_width = !isset($attributes['forceFullWidth']) ? true : !empty($attributes['forceFullWidth']);
$autoplay      = !empty($attributes['autoplay']);
$speed_raw     = isset($attributes['autoplaySpeed']) ? (int) $attributes['autoplaySpeed'] : 4500;
$autoplay_ms   = max(1000, min(12000, $speed_raw));
$slides        = $attributes['slides'] ?? [];

if (!is_array($slides)) {
	$slides = [];
}

$slider_config = wp_json_encode([
	'autoplay' => $autoplay,
	'autoplaySpeed' => $autoplay_ms,
]);

$section_heading_id = !empty($section_label) ? wp_unique_id('az-announce-heading-') : '';

$wrapper_config = [
	'class' => $force_full_width ? 'alignfull az-force-fullwidth' : '',
];

if (!empty($section_heading_id)) {
	$wrapper_config['aria-labelledby'] = $section_heading_id;
}

$wrapper_attributes = get_block_wrapper_attributes($wrapper_config);
?>

<section <?php echo $wrapper_attributes; ?>>
	<div class="az-child-announcement__inner">
		<?php if (!empty($section_label)) : ?>
			<h2 id="<?php echo esc_attr($section_heading_id); ?>" class="az-child-announcement__label"><?php echo $section_label; ?></h2>
		<?php endif; ?>

		<div class="az-child-announcement__slider-wrap py-3">
			<div class="az-child-announcement__slider js-az-child-announcement-slider" data-slider-config='<?php echo esc_attr($slider_config); ?>'>
				<?php foreach ($slides as $slide) : ?>
					<?php
					$title   = esc_html($slide['title'] ?? '');
					$content = esc_html($slide['content'] ?? '');
					?>
					<article class="az-child-announcement__slide">
						<?php if (!empty($title)) : ?>
							<h3 class="az-child-announcement__title"><?php echo $title; ?></h3>
						<?php endif; ?>
						<?php if (!empty($content)) : ?>
							<p class="az-child-announcement__content"><?php echo $content; ?></p>
						<?php endif; ?>
					</article>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>
