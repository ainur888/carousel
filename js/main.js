$(document).ready(function(){
    
//    owl-carousel start
    
    $('.owl-carousel').owlCarousel({
        margin:15,
        items:3,
        loop:true,
        autoplay:true,
        autoplayTimeout:2500,
        responsiveClass:true,
        responsiveRefreshRate:false,
        responsive : {
            0 : {
                items:1,
            },
            768 : {
                items:2,
            },
            991 : {
                items:3,
            },
            1200 : {
                items:3,
            },
            

        }
    });
    
//    owl-carosuel-end
    
    
    new WOW().init();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})