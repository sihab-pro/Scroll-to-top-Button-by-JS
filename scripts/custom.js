(function($){

    jQuery(document).ready(function(){


        jQuery(window).scroll(function(){

            var heightFromTop = jQuery(window).scrollTop();
    
            if( heightFromTop > 200){
                 jQuery(".scroll-to-top").fadeIn();
            }else{
                jQuery(".scroll-to-top").fadeOut();
            }
          });



          jQuery(".scroll-to-top a").on('click', function(){

           jQuery("html, body").animate({'scrollTop': 0}, 600)

            return false;
          })
    
    });

}(jQuery));