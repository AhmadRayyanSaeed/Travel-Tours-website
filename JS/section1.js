$(document).ready(function () {

    $('.hero-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,

        arrows: false,
        dots: false,

        autoplay: true,
        autoplaySpeed: 3000,

        infinite: true,
        pauseOnHover: false,

        responsive: [
            {
                breakpoint: 1050,
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