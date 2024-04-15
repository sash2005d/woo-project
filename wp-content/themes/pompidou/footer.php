<footer class="container-fluid ">
      
<div class="footer-wraper container flex-row justify-space-between">
            <div class="first widget-area ">
              <a href="<?php echo esc_url( home_url() );?>">
                <?php dynamic_sidebar( 'footer-widget-area-one' ); ?>
              </a>
            </div>
    
            <div class="second quarter widget-area">
              <?php dynamic_sidebar( 'footer-widget-area-two' ); ?>
            </div>
    
            <div class="third widget-area">
              <?php dynamic_sidebar( 'footer-widget-area-three' ); ?>
            </div>
    
            <div class="fourth widget-area">
              <?php dynamic_sidebar( 'footer-widget-area-four' ); ?>
            </div>
         
</div>
    </footer>



<?php wp_footer(); ?>
</body>
</html>