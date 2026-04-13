<?php

defined('ABSPATH') || exit;

/**
 * Remove the archive prefix from the WooCommerce shop page title.
 */
function ai_zippy_child_remove_shop_archive_title_prefix(array $parsed_block): array
{
    if (is_admin()) {
        return $parsed_block;
    }

    if (($parsed_block['blockName'] ?? '') !== 'core/query-title') {
        return $parsed_block;
    }

    if (!function_exists('is_shop') || !is_shop()) {
        return $parsed_block;
    }

    $parsed_block['attrs']['showPrefix'] = false;

    return $parsed_block;
}
add_filter('render_block_data', 'ai_zippy_child_remove_shop_archive_title_prefix', 20);
