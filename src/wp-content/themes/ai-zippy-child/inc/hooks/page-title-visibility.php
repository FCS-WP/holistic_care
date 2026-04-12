<?php

defined('ABSPATH') || exit;

/**
 * Per-page meta key for hiding frontend page title.
 */
const AI_ZIPPY_CHILD_HIDE_PAGE_TITLE_META_KEY = 'ai_zippy_hide_page_title';

/**
 * Register page meta used by block editor sidebar toggle.
 */
function ai_zippy_child_register_page_title_visibility_meta(): void
{
    register_post_meta(
        'page',
        AI_ZIPPY_CHILD_HIDE_PAGE_TITLE_META_KEY,
        [
            'type' => 'boolean',
            'single' => true,
            'default' => false,
            'show_in_rest' => true,
            'auth_callback' => static function (): bool {
                return current_user_can('edit_pages');
            },
        ]
    );
}
add_action('init', 'ai_zippy_child_register_page_title_visibility_meta', 25);

/**
 * Enqueue page title visibility toggle in block editor.
 */
function ai_zippy_child_enqueue_page_title_visibility_editor_script(): void
{
    $script_path = get_stylesheet_directory() . '/assets/js/page-title-toggle.js';

    if (!file_exists($script_path)) {
        return;
    }

    wp_enqueue_script(
        'ai-zippy-child-page-title-toggle',
        get_stylesheet_directory_uri() . '/assets/js/page-title-toggle.js',
        ['wp-plugins', 'wp-edit-post', 'wp-element', 'wp-data', 'wp-components', 'wp-i18n'],
        filemtime($script_path),
        true
    );
}
add_action('enqueue_block_editor_assets', 'ai_zippy_child_enqueue_page_title_visibility_editor_script', 30);

/**
 * Hide core/post-title on frontend for pages with the toggle enabled.
 */
function ai_zippy_child_maybe_hide_page_title_block(string $block_content, array $block): string
{
    if (is_admin()) {
        return $block_content;
    }

    if (($block['blockName'] ?? '') !== 'core/post-title') {
        return $block_content;
    }

    if (!is_singular('page')) {
        return $block_content;
    }

    $post_id = get_queried_object_id();
    if ($post_id <= 0) {
        return $block_content;
    }

    $is_hidden = (bool) get_post_meta($post_id, AI_ZIPPY_CHILD_HIDE_PAGE_TITLE_META_KEY, true);
    if (!$is_hidden) {
        return $block_content;
    }

    return '';
}
add_filter('render_block', 'ai_zippy_child_maybe_hide_page_title_block', 20, 2);
