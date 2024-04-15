<?php 

/**
 * Template Name: Simple Page Template
 * Template Post Type: page
 */

 get_header(); ?>

 <?php while(have_posts()) :the_post();?>
<section class="single-hero container-fluid flex-column" style="background-image: url('<?php echo wp_kses_post(get_field('imgcover')); ?>">
    <div class="container ">
         <h1><?php the_title();?></h1>
         
    </div>

</section>
<main class="container">
    <article class="page-content">
    <?php the_content();?>
    </article>
</main>


<?php endwhile; wp_reset_postdata(); ?>


<?php
get_footer();



