<?php

/**
 * Location Map dynamic block render template.
 *
 * @var array $attributes Block attributes.
 */

$section_label    = wp_kses_post($attributes['sectionLabel'] ?? '');
$title            = wp_kses_post($attributes['title'] ?? '');
$description      = wp_kses_post($attributes['description'] ?? '');
$address          = wp_kses_post($attributes['address'] ?? '');
$support_text     = wp_kses_post($attributes['supportText'] ?? '');
$button_text      = esc_html($attributes['buttonText'] ?? '');
$map_url          = trim((string) ($attributes['mapUrl'] ?? ''));
$force_full_width = !isset($attributes['forceFullWidth']) ? true : !empty($attributes['forceFullWidth']);

$build_embed_url = static function (string $url, string $address): string {
	if (empty($url) && empty($address)) {
		return '';
	}

	if (!empty($url)) {
		$sanitized = esc_url_raw($url);
		$parts = wp_parse_url($sanitized);
		$host = strtolower($parts['host'] ?? '');
		$path = $parts['path'] ?? '';
		$query = [];

		if (!empty($parts['query'])) {
			parse_str($parts['query'], $query);
		}

		if (strpos($host, 'google.') !== false || strpos($host, 'maps.app.goo.gl') !== false) {
			if (strpos($path, '/maps/embed') !== false || (($query['output'] ?? '') === 'embed')) {
				return $sanitized;
			}

			if (!empty($query['q'])) {
				return 'https://www.google.com/maps?q=' . rawurlencode((string) $query['q']) . '&output=embed';
			}

			if (!empty($query['query'])) {
				return 'https://www.google.com/maps?q=' . rawurlencode((string) $query['query']) . '&output=embed';
			}

			if (preg_match('#/place/([^/?]+)#', $path, $matches)) {
				return 'https://www.google.com/maps?q=' . rawurlencode(urldecode((string) $matches[1])) . '&output=embed';
			}
		}
	}

	if (!empty($address)) {
		return 'https://www.google.com/maps?q=' . rawurlencode(wp_strip_all_tags($address)) . '&output=embed';
	}

	return '';
};

$map_embed_url = $build_embed_url($map_url, (string) $address);
$map_link_url = !empty($map_url) ? esc_url($map_url) : (!empty($address) ? esc_url('https://www.google.com/maps/search/?api=1&query=' . rawurlencode(wp_strip_all_tags($address))) : '');

$wrapper_config = [
	'class' => $force_full_width ? 'alignfull az-force-fullwidth' : '',
];

$wrapper_attributes = get_block_wrapper_attributes($wrapper_config);
?>

<section <?php echo $wrapper_attributes; ?>>
	<div class="az-child-location-map__inner">
		<div class="az-child-location-map__map-card">
			<?php if (!empty($map_embed_url)) : ?>
				<iframe
					class="az-child-location-map__map-frame"
					src="<?php echo esc_url($map_embed_url); ?>"
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					title="Clinic Location Map"
					allowfullscreen
				></iframe>
			<?php else : ?>
				<div class="az-child-location-map__map-placeholder">
					<div class="az-child-location-map__map-placeholder-grid"></div>
					<div class="az-child-location-map__map-placeholder-copy">Add a Google Maps URL to display your map here.</div>
				</div>
			<?php endif; ?>

			<div class="az-child-location-map__info-card">
				<?php if (!empty($section_label)) : ?>
					<p class="az-child-location-map__eyebrow"><?php echo $section_label; ?></p>
				<?php endif; ?>

				<?php if (!empty($title)) : ?>
					<h2 class="az-child-location-map__title"><?php echo $title; ?></h2>
				<?php endif; ?>

				<?php if (!empty($description)) : ?>
					<p class="az-child-location-map__description"><?php echo $description; ?></p>
				<?php endif; ?>

				<?php if (!empty($address)) : ?>
					<div class="az-child-location-map__address-card">
						<div class="az-child-location-map__pin" aria-hidden="true">
							<svg viewBox="0 0 24 24"><path d="M12 21s6-5.5 6-11a6 6 0 1 0-12 0c0 5.5 6 11 6 11z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>
						</div>
						<div class="az-child-location-map__address-copy">
							<div class="az-child-location-map__address-label">Clinic Address</div>
							<div class="az-child-location-map__address"><?php echo $address; ?></div>
						</div>
					</div>
				<?php endif; ?>

				<?php if (!empty($support_text)) : ?>
					<p class="az-child-location-map__support"><?php echo $support_text; ?></p>
				<?php endif; ?>

				<?php if (!empty($map_link_url)) : ?>
					<a class="az-child-location-map__button" href="<?php echo $map_link_url; ?>" target="_blank" rel="noopener noreferrer"><?php echo $button_text; ?></a>
				<?php endif; ?>
			</div>
		</div>
	</div>
</section>
