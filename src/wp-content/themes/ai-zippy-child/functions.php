<?php

/**
 * AI Zippy Child Theme Functions
 *
 * Bootstrap file: auto-load all PHP files inside /inc.
 */

defined('ABSPATH') || exit;

$inc_dir = get_stylesheet_directory() . '/inc';

if (is_dir($inc_dir)) {
    $iterator = new RecursiveIteratorIterator(
        new RecursiveDirectoryIterator($inc_dir, FilesystemIterator::SKIP_DOTS)
    );

    $php_files = [];

    foreach ($iterator as $file) {
        if ($file->isFile() && strtolower($file->getExtension()) === 'php') {
            $php_files[] = $file->getPathname();
        }
    }

    sort($php_files);

    foreach ($php_files as $php_file) {
        require_once $php_file;
    }
}
