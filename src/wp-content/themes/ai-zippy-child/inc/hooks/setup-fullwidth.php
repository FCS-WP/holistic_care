<?php

defined('ABSPATH') || exit;

/**
 * Ensure align-wide/full styles are enabled for block rendering.
 */
function ai_zippy_child_enable_fullwidth_blocks(): void
{
    add_theme_support('align-wide');
}
add_action('after_setup_theme', 'ai_zippy_child_enable_fullwidth_blocks', 30);
