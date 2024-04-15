<?php
/*
 * Template Name: Single Tea
 */
get_header();
?>


<section class="single-hero container-fluid flex-column" id="single-header" >
    <div class="container ">
         <h1><?php the_title(); ?></h1>
         
    </div>
</section>
<main id="main-post-tea" class="flex-column container">
<div class="post-info">
   
</div>
<article>
    <?php echo get_the_content(); ?>
</article>
<div class="tags-wraper">
    <h3>Tags</h3>
    <?php the_tags(); ?>
 
        <h3>category:</h3>
        <?php echo the_category(',', '', get_the_ID()) ?>
    
</div>
</main>



<?php get_footer();?>