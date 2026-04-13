<?php

/**
 * Header Search Icon dynamic block render template.
 *
 * @var array $attributes Block attributes.
 */

$search_url = trim((string) ($attributes['searchUrl'] ?? '/'));
$aria_label = trim((string) ($attributes['ariaLabel'] ?? __('Search', 'ai-zippy-child')));
$placeholder = trim((string) ($attributes['placeholder'] ?? __('Search...', 'ai-zippy-child')));
$button_text = trim((string) ($attributes['buttonText'] ?? __('Search', 'ai-zippy-child')));

if ($search_url === '') {
	$search_url = '/';
}

if ($search_url === '/?s=') {
	$search_url = '/';
}

if ($aria_label === '') {
	$aria_label = __('Search', 'ai-zippy-child');
}

if ($placeholder === '') {
	$placeholder = __('Search...', 'ai-zippy-child');
}

if ($button_text === '') {
	$button_text = __('Search', 'ai-zippy-child');
}

$search_href = preg_match('#^https?://#i', $search_url) ? $search_url : home_url($search_url);
$popup_id = wp_unique_id('az-header-search-');

$wrapper_attributes = get_block_wrapper_attributes([
	'class' => 'az-child-header-search',
]);
?>

<div <?php echo $wrapper_attributes; ?> data-az-header-search>
	<button class="az-child-site-header__icon az-child-site-header__icon--search" type="button" aria-label="<?php echo esc_attr($aria_label); ?>" aria-controls="<?php echo esc_attr($popup_id); ?>" aria-expanded="false" data-az-header-search-open>
		<svg viewBox="0 0 24 24" role="img" aria-hidden="true"><circle cx="11" cy="11" r="6.6"></circle><path d="M16 16l5 5"></path></svg>
	</button>

	<div class="az-child-header-search__popup" id="<?php echo esc_attr($popup_id); ?>" hidden data-az-header-search-popup>
		<button class="az-child-header-search__backdrop" type="button" aria-label="<?php esc_attr_e('Close search', 'ai-zippy-child'); ?>" data-az-header-search-close></button>
		<div class="az-child-header-search__dialog" role="dialog" aria-modal="true" aria-label="<?php echo esc_attr($aria_label); ?>">
			<button class="az-child-header-search__close" type="button" aria-label="<?php esc_attr_e('Close search', 'ai-zippy-child'); ?>" data-az-header-search-close>
				<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>
			</button>
			<form class="az-child-header-search__form" action="<?php echo esc_url($search_href); ?>" method="get" role="search">
				<label class="screen-reader-text" for="<?php echo esc_attr($popup_id); ?>-field"><?php echo esc_html($aria_label); ?></label>
				<input class="az-child-header-search__field" id="<?php echo esc_attr($popup_id); ?>-field" name="s" type="search" placeholder="<?php echo esc_attr($placeholder); ?>" data-az-header-search-input>
				<button class="az-child-header-search__submit" type="submit"><?php echo esc_html($button_text); ?></button>
			</form>
		</div>
	</div>
</div>
