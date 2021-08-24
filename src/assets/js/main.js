(function ($) {
    "use strict";

    $(".bar").click(function(){
        $(".sidebar-menu, .bar").toggleClass("active");
    });

    $('.outline-slide-active').owlCarousel({
        loop:true,
        margin:100,
        nav:true,
        items: 3,
        center: true,
        margin: 100,
        nav: true,
        dot:false,
        navText:['<i class="far fa-angle-left"></i>','<i class="far fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            767:{
                margin:40,
            },
            992:{
                margin:40,
            },
            1250:{
                margin:100,
            }
        }
    })


    
})(jQuery);