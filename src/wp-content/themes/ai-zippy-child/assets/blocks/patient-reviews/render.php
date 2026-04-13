<?php

/**
 * Patient Reviews dynamic block render template.
 *
 * @var array $attributes Block attributes.
 */

$section_label    = esc_html($attributes['sectionLabel'] ?? '');
$title            = wp_kses_post($attributes['title'] ?? '');
$force_full_width = !isset($attributes['forceFullWidth']) ? true : !empty($attributes['forceFullWidth']);
$reviews          = $attributes['reviews'] ?? [];

if (!is_array($reviews)) {
	$reviews = [];
}

$review_count = count($reviews);
$heading_id = !empty($title) ? wp_unique_id('az-reviews-title-') : '';

$wrapper_config = [
	'class' => $force_full_width ? 'alignfull az-force-fullwidth' : '',
];

if (!empty($heading_id)) {
	$wrapper_config['aria-labelledby'] = $heading_id;
}

$wrapper_attributes = get_block_wrapper_attributes($wrapper_config);
?>

<section <?php echo $wrapper_attributes; ?>>
	<div class="az-child-reviews__inner">
		<?php if (!empty($section_label)) : ?>
			<p class="az-child-reviews__eyebrow"><?php echo $section_label; ?></p>
		<?php endif; ?>

		<?php if (!empty($title)) : ?>
			<h2 id="<?php echo esc_attr($heading_id); ?>" class="az-child-reviews__title"><?php echo $title; ?></h2>
		<?php endif; ?>

		<div class="az-child-reviews__grid js-az-child-reviews-slider mt-5" data-review-count="<?php echo esc_attr($review_count); ?>">
			<?php foreach ($reviews as $review) : ?>
				<?php
				$name    = esc_html($review['name'] ?? '');
				$content = esc_html($review['content'] ?? '');
				$image   = esc_url($review['imageUrl'] ?? '');
				?>
				<article class="az-child-reviews__card">
					<div class="az-child-reviews__avatar-wrap">
						<?php if (!empty($image)) : ?>
							<img class="az-child-reviews__avatar" src="<?php echo $image; ?>" alt="" loading="lazy" />
						<?php else : ?>
							<div class="az-child-reviews__avatar az-child-reviews__avatar--placeholder"></div>
						<?php endif; ?>
					</div>

					<?php if (!empty($name)) : ?>
						<h3 class="az-child-reviews__name"><?php echo $name; ?></h3>
					<?php endif; ?>

					<?php if (!empty($content)) : ?>
						<p class="az-child-reviews__content"><?php echo $content; ?></p>
					<?php endif; ?>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>
