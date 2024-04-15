<!DOCTYPE html>
<html lang="<?php language_attributes(); ?>">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?> >
<?php wp_body_open();?>
<!-- *
* Header Starts Here
* -->
<header id="top-nav">
    <a href="<?php echo esc_url( home_url() ); ?>" class="logo">
        <img src="<?php echo get_template_directory_uri() . '/assets/img/logo.webp'; ?>" alt="">
    </a>
    <nav>
        <?php
        wp_nav_menu( array(
        'menu'           => 'main',
        'theme_location' => '',
        'depth'          => 2,
        'fallback_cb'    => false
        ));
        ?>
    </nav>

   <a href="<?php  echo esc_url(get_permalink(wc_get_page_id('cart'))); ?>" id="cart-btn">
     <div class="cart">
     <span class="material-symbols-outlined">
         shopping_bag
     </span>
     <span>
         Your cart (<em>0</em>)
     </span>
    
    
     </div>
   </a>
</header>
  



