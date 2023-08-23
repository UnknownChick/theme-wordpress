<?php

$roots_includes = array(
	'/inc/hmr.php',
);

foreach($roots_includes as $file){
	if(!$filepath = locate_template($file)) {
		trigger_error("Error locating `$file` for inclusion!", E_USER_ERROR);
	}
	require_once $filepath;
}
unset($file, $filepath);

// Ajouter la prise en charge des images mises en avant
add_theme_support( 'post-thumbnails' );

// Ajouter automatiquement le titre du site dans l'en-tête du site
add_theme_support( 'title-tag' );

function register_assets() {
    // Déclarer le fichier style.css à la racine du thème
    wp_enqueue_style('style', get_stylesheet_uri(), array(), '1.0');
	wp_enqueue_style('style-dist', get_stylesheet_directory_uri().'/dist/style.css', array(), '1.0');
}
add_action( 'wp_enqueue_scripts', 'register_assets' );

var_dump(get_stylesheet_directory_uri());