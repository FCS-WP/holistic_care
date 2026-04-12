<?php

defined('ABSPATH') || exit;

/**
 * Enqueue child theme styles after parent.
 */
function ai_zippy_child_enqueue_assets(): void
{
    // Child theme custom styles (only if file exists)
    $child_css = get_stylesheet_directory() . '/assets/dist/css/style.css';
    $utility_css = get_stylesheet_directory() . '/assets/css/utilities.css';
    $header_css = get_stylesheet_directory() . '/assets/css/header.css';
    $footer_css = get_stylesheet_directory() . '/assets/css/footer.css';
    $form_js = get_stylesheet_directory() . '/assets/js/form-submit.js';
    $mobile_menu_js = get_stylesheet_directory() . '/assets/js/mobile-menu-fallback.js';

    if (file_exists($child_css)) {
        wp_enqueue_style(
            'ai-zippy-child-style',
            get_stylesheet_directory_uri() . '/assets/dist/css/style.css',
            ['ai-zippy-theme-css-0'],
            filemtime($child_css)
        );
    }

    if (file_exists($utility_css)) {
        wp_enqueue_style(
            'ai-zippy-child-utilities',
            get_stylesheet_directory_uri() . '/assets/css/utilities.css',
            [],
            filemtime($utility_css)
        );
    }

    if (file_exists($header_css)) {
        wp_enqueue_style(
            'ai-zippy-child-header',
            get_stylesheet_directory_uri() . '/assets/css/header.css',
            [],
            filemtime($header_css)
        );
    }

    if (file_exists($footer_css)) {
        wp_enqueue_style(
            'ai-zippy-child-footer',
            get_stylesheet_directory_uri() . '/assets/css/footer.css',
            [],
            filemtime($footer_css)
        );
    }

    if (file_exists($form_js)) {
        wp_enqueue_script(
            'ai-zippy-child-form-submit',
            get_stylesheet_directory_uri() . '/assets/js/form-submit.js',
            [],
            filemtime($form_js),
            true
        );

        wp_localize_script(
            'ai-zippy-child-form-submit',
            'aiZippyChildForms',
            [
                'restUrl'     => esc_url_raw(rest_url('ai-zippy-child/v1/forms/submit')),
                'sendingText' => __('Sending...', 'ai-zippy-child'),
                'successText' => __('Message sent successfully.', 'ai-zippy-child'),
                'errorText'   => __('Unable to send your message right now. Please try again later.', 'ai-zippy-child'),
            ]
        );
    }

    if (file_exists($mobile_menu_js)) {
        wp_enqueue_script(
            'ai-zippy-child-mobile-menu-fallback',
            get_stylesheet_directory_uri() . '/assets/js/mobile-menu-fallback.js',
            [],
            filemtime($mobile_menu_js),
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'ai_zippy_child_enqueue_assets', 20);
