<?php
/**
 * Plugin Name:       Static Custom Block
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       static-custom-group
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
// Register the Static Custom Paragraph block.
function register_static_custom_paragraph_block() {
	// Automatically load dependencies and version.
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/static-custom-paragraph/index.asset.php');

	wp_register_script(
		'static-custom-paragraph-block-editor',
		plugins_url('build/static-custom-paragraph/index.js', __FILE__),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type('your-namespace/static-custom-paragraph', array(
		'editor_script' => 'static-custom-paragraph-block-editor',
	));
}
add_action('init', 'register_static_custom_paragraph_block');

// Register the Group Block.
function register_static_block_group() {
	// Automatically load dependencies and version.
	$asset_file = include(plugin_dir_path(__FILE__) . 'build/static-custom-group/index.asset.php');

	wp_register_script(
		'static-custom-group-block-editor',
		plugins_url('build/static-custom-group/index.js', __FILE__),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type('your-namespace/group-block', array(
		'editor_script' => 'static-custom-group-block-editor'
	));
}
add_action('init', 'register_static_block_group');
