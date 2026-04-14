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

$normalize_review_text = static function ($value): string {
	$text = wp_specialchars_decode((string) $value, ENT_QUOTES);
	$text = preg_replace('/<\s*br\s*\/?>/i', "\n", $text);
	$text = preg_replace('/<\/p>\s*<p[^>]*>/i', "\n\n", $text);
	$text = wp_strip_all_tags($text, true);
	$text = html_entity_decode($text, ENT_QUOTES, get_bloginfo('charset') ?: 'UTF-8');
	$text = preg_replace('/[ \t\r\n]+/', ' ', $text);

	return trim((string) $text);
};

$is_likely_long_review = static function (string $content): bool {
	if (function_exists('mb_strlen')) {
		return mb_strlen($content) > 155;
	}

	return strlen($content) > 155;
};

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
				$name       = esc_html($normalize_review_text($review['name'] ?? ''));
				$content    = $normalize_review_text($review['content'] ?? '');
				$image      = esc_url($review['imageUrl'] ?? '');
				$review_url = esc_url($review['reviewUrl'] ?? '');
				$card_classes = ['az-child-reviews__card'];

				if (!empty($review_url)) {
					$card_classes[] = 'az-child-reviews__card--has-review-link';
				}

				if (!empty($review_url) && $is_likely_long_review($content)) {
					$card_classes[] = 'az-child-reviews__card--is-overflowing';
				}
				?>
				<article class="<?php echo esc_attr(implode(' ', $card_classes)); ?>">
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
						<p class="az-child-reviews__content"><?php echo esc_html($content); ?></p>
					<?php endif; ?>

					<?php if (!empty($review_url)) : ?>
						<a class="az-child-reviews__read-more" href="<?php echo $review_url; ?>" target="_blank" rel="noopener noreferrer">Read more</a>
					<?php endif; ?>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>
