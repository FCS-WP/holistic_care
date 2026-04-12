<?php

/**
 * FAQ Grid dynamic block render template.
 *
 * @var array $attributes Block attributes.
 */

$title            = wp_kses_post($attributes['title'] ?? '');
$items            = $attributes['items'] ?? [];
$force_full_width = !isset($attributes['forceFullWidth']) ? true : !empty($attributes['forceFullWidth']);

if (!is_array($items)) {
	$items = [];
}

$heading_id = !empty($title) ? wp_unique_id('az-faq-title-') : '';
$accordion_group = wp_unique_id('az-faq-group-');

$wrapper_config = [
	'class' => $force_full_width ? 'alignfull az-force-fullwidth' : '',
];

if (!empty($heading_id)) {
	$wrapper_config['aria-labelledby'] = $heading_id;
}

$wrapper_attributes = get_block_wrapper_attributes($wrapper_config);
?>

<section <?php echo $wrapper_attributes; ?>>
	<div class="az-child-faq__inner">
		<?php if (!empty($title)) : ?>
			<header class="az-child-faq__header">
				<h2 id="<?php echo esc_attr($heading_id); ?>" class="az-child-faq__title"><?php echo $title; ?></h2>
				<div class="az-child-faq__accent" aria-hidden="true"></div>
			</header>
		<?php endif; ?>

		<div class="az-child-faq__grid">
			<?php foreach ($items as $index => $item) : ?>
				<?php
				$question = wp_kses_post($item['question'] ?? '');
				$answer = wp_kses_post($item['answer'] ?? '');
				?>
				<?php if (!empty($question) || !empty($answer)) : ?>
					<details class="az-child-faq__item" name="<?php echo esc_attr($accordion_group); ?>"<?php echo 0 === $index ? ' open' : ''; ?>>
						<summary class="az-child-faq__summary">
							<span class="az-child-faq__question"><?php echo $question; ?></span>
							<span class="az-child-faq__toggle" aria-hidden="true">
								<svg viewBox="0 0 24 24"><path d="M7 10l5 5 5-5"></path></svg>
							</span>
						</summary>
						<?php if (!empty($answer)) : ?>
							<div class="az-child-faq__answer-wrap">
								<p class="az-child-faq__answer"><?php echo $answer; ?></p>
							</div>
						<?php endif; ?>
					</details>
				<?php endif; ?>
			<?php endforeach; ?>
		</div>
	</div>
</section>
