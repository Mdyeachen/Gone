(function ($) {
    'use strict';
    
    
    $('.click_function').click(function () {
        $('body').toggleClass('dark-mode');
    });
    $('.click_function').click(function () {
        $(this).toggleClass('icon_show');
    });
    
    

    var slider_carousel = $('.menu-carousel.owl-carousel');
    slider_carousel.owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        dotsData: true,
        autoplayTimeout: 7000,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        mouseDrag: false,
        touchDrag: false,
        autoHeight: true
    });
    slider_carousel.on('translate.owl.carousel', function () {
        $('.menu-carousel-ite').removeClass('animate__animated animate__backInUp').css('opacity', '0');
    });
    slider_carousel.on('translated.owl.carousel', function () {
        $('.menu-carousel-ite').addClass('animate__animated animate__backInUp').css('opacity', '1');
    });



    $('.skill-item-one.circle,.skill-item-two.circle, .skill-item-three.circle, .skill-item-four.circle, .skill-item-five.circle, .skill-item-six.circle,.skill-item-seven.circle,.skill-item-eight.circle').circleProgress({
        size: 120,
        fill: {
            color: "#FFB400"
        }
    });



    $(".portfolio-items").isotope();
    $(".portfolio-menu li").on("click", function () {
        var selector = $(this).attr("data-filter");
        $(".portfolio-items .row").isotope({
            filter: selector
        });
    });

    $(".portfolio-media-section.owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        nav: false,
        dots: true,
        dotsData: false,
        loop: true,
        autoplayTimeout: 7000,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        mouseDrag: false,
        touchDrag: false,
    });

    $(window).scroll(function () {


    });

}(jQuery));
