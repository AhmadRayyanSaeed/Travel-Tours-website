$(document).ready(function () {

    $('.se9-slider').slick({

        slidesToShow: 3,
        slidesToScroll: 1,

        arrows: false,
        dots: true,

        autoplay: true,
        autoplaySpeed: 3000,

        infinite: true,
        swipe: true,
        pauseOnHover: false,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });

});