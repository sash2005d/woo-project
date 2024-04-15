<?php

/*
 * My custom Styles
 */
function pompidou_enqueue_styles() {
   
    //get gogole font icons
    wp_enqueue_style('google-icons','https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,-25');

    // Enqueue main.css from your theme's assets/css directory
    wp_enqueue_style( 'pompidou-main-style', get_template_directory_uri() . '/assets/css/main.css' );

}
add_action( 'wp_enqueue_scripts', 'pompidou_enqueue_styles' );



/*
 * My custom scripts
 */

function pompidou_enqueue_scripts() {
  
    // Enqueue Custom JS file
    wp_enqueue_script( 'custom-script', get_template_directory_uri() . '/assets/js/custom-script.js', array(), '1.0', true );
}
add_action( 'wp_enqueue_scripts', 'pompidou_enqueue_scripts' );



/**
 * Menu Registration
 *
 */

function pompidou_registrate_menu() {
  register_nav_menus( array(
    'header' => 'Header menu',
    'footer' => 'Footer menu'
  ) );
}
add_action( 'after_setup_theme', 'pompidou_registrate_menu' );


/**
 * Theme Support
 */
add_theme_support( 'post-thumbnails' );



/**
 * Tea News CPT
 */
function pompidou_about_tea_cpt () {
   
    
    $args = array(


        'label' => 'Tea News',
        'description'        => 'Tea Magazine',
        'public' => true,
        'show_ui' => true,
        'capability_type' => 'post',
        'rewrite'            => array( 'slug' => 'pompidou_tea_magazine' ),
        'hierarchical' => false,
        'has_archive'        => true,
        'query_var' => true,
        'show_in_rest'       => true, // for gutenberg
        'menu_icon' => 'dashicons-smiley',
        'taxonomies'  => array( 'category', 'post_tag'),
        'supports' => array(
          'title',
          'editor',
          'excerpts',
          'comments',
          'thumbnail',
          'author',
          'post-formats',
          'page-attributes',
        )
      );

      register_post_type('tea', $args);

}
add_action('init', 'pompidou_about_tea_cpt');



/**
 * Bugs Fixer - cannot connect CPT single
 */
function custom_template_include($template) {
    if (is_singular('tea')) {
        $new_template = locate_template(array('templates/single-tea.php'));
        if (!empty($new_template)) {
            return $new_template;
        }
    }
    return $template;
}
add_filter('template_include', 'custom_template_include');



/**
 * adding woocommerce support
 */

function pompidou_woocommerce_support() {
  add_theme_support( 'woocommerce' );
}



/**
 * Footer Wigets 
 */

 function pompidou_footer_widgets(){
  register_sidebar(array(
    'name'          => __( 'Footer Widget Area One', 'footerwidget' ),
    'id'            => 'footer-widget-area-one',
    'description'   => __( 'The first footer widget area', 'footerwidget' ),
    'before_widget' => '<div class="logo-widget">',
    'after_widget'  => '</div>',
  ));
  register_sidebar( array(
    'name'          => __( 'Footer Widget Area Two', 'footerwidget' ),
    'id'            => 'footer-widget-area-two',
    'description'   => __( 'The second footer widget area', 'footerwidget' ),
    'before_widget' => '<div class="footer-menu-widget">',
    'after_widget'  => '</div>',
    'before_title'  => '<h4 class="widget-title">',
    'after_title'   => '</h4>',
  ));
  register_sidebar( array(
    'name'          => __( 'Footer Widget Area Three', 'footerwidget' ),
    'id'            => 'footer-widget-area-three',
    'description'   => __( 'The third footer widget area', 'footerwidget' ),
    'before_widget' => '<div class="contact-widget">',
    'after_widget'  => '</div>',
    'before_title'  => '<h4 class="widget-title">',
    'after_title'   => '</h4>',
  ));
}
add_action( 'widgets_init', 'pompidou_footer_widgets' );



/**
 * 
 * Shortcode for blog main page 
 */


function pompidou_tea_shortcode(){
  $query = new WP_Query(array('post_type' => 'tea', 'posts_per_page' => 2, 'order' => 'asc'));
    while ($query->have_posts()) : $query->the_post(); ?>
        <article class="card flex-column justify-space-between ">
        <div>
             <a href="<?php the_permalink(); ?>"><?php the_post_thumbnail(); ?></a>
        </div>
        <a href="<?php the_permalink(); ?>">
             <h3><?php the_title(); ?></h3>
        </a>

    </article>
    <?php wp_reset_postdata(); ?>
  <?php
  endwhile;
  wp_reset_postdata();
}
// register shortcode
add_shortcode('tea-main', 'pompidou_tea_shortcode');


