<?php
/*
 * Template Name: Archive Tea
 */
get_header();
?>



<section class="single-hero container-fluid flex-column" >
    <div class="container ">
         <h1>Tea Blog</h1>
         
    </div>

</section>

<main class="container flex-row" id="arch-tea">
    <?php
while (have_posts()) : the_post(); ?>
        <article class="card flex-column ">
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
 
 ?>


</main>



<?php get_footer(); ?>
