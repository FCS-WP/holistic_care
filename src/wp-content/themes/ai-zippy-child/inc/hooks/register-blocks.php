<?php

defined('ABSPATH') || exit;

/**
 * Register dynamic blocks from child theme build output.
 *
 * Blocks are built from:
 * - src/wp-content/themes/ai-zippy-child/src/blocks/*
 * into:
 * - src/wp-content/themes/ai-zippy-child/assets/blocks/*
 */
function ai_zippy_child_register_blocks(): void
{
    $blocks_dir = get_stylesheet_directory() . '/assets/blocks';

    if (!is_dir($blocks_dir)) {
        return;
    }

    foreach (glob($blocks_dir . '/*/block.json') as $block_json) {
        register_block_type(dirname($block_json));
    }
}
add_action('init', 'ai_zippy_child_register_blocks', 20);
