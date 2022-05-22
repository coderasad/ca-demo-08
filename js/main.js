(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(1800).fadeOut("slow");
    });

    $(document).ready(function () {

        // Back to top btn
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        // Back to top btn animation
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 1500);
        });

        // Hamburger-menu
        $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        // video popup
        $('.play_icon').on('click', function () {
            $('.video_popup').toggleClass('open');
            $('.popup_body iframe').toggleClass('active');
            $('body').toggleClass('overflow-hidden')
        });

        $('.video_popup').on('click', function () {
            $('.video_popup').removeClass('open');
            $('.popup_body iframe').toggleClass('active');
            $('body').toggleClass('overflow-hidden')
        });

        $('.popup_body').on('click', function () {
            $('.video_popup').addClass('open');
        });


        // Aos Initialize
        AOS.init({
            duration: 1100,
        });

        // market slider Initialize
        $('.market-slider').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            nextArrow: '.market_area .next-slide',
            prevArrow: '.market_area .prev-slide',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

        // successStories slider Initialize
        $('.successStories-slider').slick({
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            nextArrow: '.successStories_area .next-slide',
            prevArrow: '.successStories_area .prev-slide',
        });

    });

})(jQuery);

(function ($) {
    "use strict";
    $(document).ready(function () {

        // Aos Initialize
        AOS.init({
            duration: 1100,
        });

        // magnificPopup Initialize
        $('.popup-youtube').magnificPopup({
            disableOn: false,
            type: 'iframe',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
        
    });

})(jQuery);