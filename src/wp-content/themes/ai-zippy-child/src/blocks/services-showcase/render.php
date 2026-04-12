<?php

/**
 * Services Showcase dynamic block render template.
 *
 * @var array $attributes Block attributes.
 */

$section_label = esc_html($attributes['sectionLabel'] ?? '');
$cards         = $attributes['cards'] ?? [];
$force_full_width = !isset($attributes['forceFullWidth']) ? true : !empty($attributes['forceFullWidth']);

if (!is_array($cards)) {
	$cards = [];
}

$section_heading_id = !empty($section_label) ? wp_unique_id('az-services-heading-') : '';

$wrapper_config = [
	'class' => $force_full_width ? 'alignfull az-force-fullwidth' : '',
];

if (!empty($section_heading_id)) {
	$wrapper_config['aria-labelledby'] = $section_heading_id;
}

$wrapper_attributes = get_block_wrapper_attributes($wrapper_config);
?>

<section <?php echo $wrapper_attributes; ?>>
	<div class="az-child-services__inner">
		<?php if (!empty($section_label)) : ?>
			<h2 id="<?php echo esc_attr($section_heading_id); ?>" class="az-child-services__label"><?php echo $section_label; ?></h2>
		<?php endif; ?>

		<div class="az-child-services__grid">
			<?php foreach ($cards as $card) : ?>
				<?php
				$title   = esc_html($card['title'] ?? '');
				$caption = esc_html($card['caption'] ?? '');
				$image   = esc_url($card['imageUrl'] ?? '');
				$items   = isset($card['items']) && is_array($card['items']) ? $card['items'] : [];
				?>
				<article class="az-child-services__card">
					<?php if (!empty($title)) : ?>
						<h3 class="az-child-services__title"><?php echo $title; ?></h3>
					<?php endif; ?>

					<div class="az-child-services__media-wrap">
						<?php if (!empty($image)) : ?>
							<img class="az-child-services__media" src="<?php echo $image; ?>" alt="" loading="lazy" />
						<?php else : ?>
							<div class="az-child-services__media az-child-services__media--placeholder"></div>
						<?php endif; ?>
					</div>

					<?php if (!empty($caption)) : ?>
						<p class="az-child-services__caption"><?php echo $caption; ?></p>
					<?php endif; ?>

					<div class="az-child-services__detail-box">
						<?php foreach ($items as $item) : ?>
							<?php
							$item_title = esc_html($item['title'] ?? '');
							$item_desc  = esc_html($item['description'] ?? '');
							?>
							<div class="az-child-services__item">
								<?php if (!empty($item_title)) : ?>
									<h4 class="az-child-services__item-title"><?php echo $item_title; ?></h4>
								<?php endif; ?>
								<?php if (!empty($item_desc)) : ?>
									<p class="az-child-services__item-desc"><?php echo $item_desc; ?></p>
								<?php endif; ?>
							</div>
						<?php endforeach; ?>
					</div>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>
