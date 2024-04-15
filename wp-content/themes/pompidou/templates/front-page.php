<?php 

/**
 * Template Name: Home 
 * Template Post Type: page
 */

get_header();
?>

<!-- Hero Section -->
<section class="hero container-fluid flex-column  align-center justify-center" style="background-image: url('<?php echo wp_kses_post(get_field('cover')); ?>">

    <h1>Unique Tea Experince</h1>
    <a href="<?php  echo esc_url(get_permalink(wc_get_page_id('shop'))); ?>" class="main-cta">Shop Now</a>


</section>



<main>
    <section class="container " id="last-news-home">
        <h2>Last News</h2>
    <div class="cards flex-row justify-space-between ">
        

    <?php echo do_shortcode("[tea-main]"); ?> 
    </div>


    
    
    </section>
</main>



<?php

get_footer();