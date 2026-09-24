$('.se10-slider').slick({

    slidesToShow: 6,
    slidesToScroll: 1,

    arrows: true,
    dots: false,

    autoplay: true,
    autoplaySpeed: 3000,

    infinite: true,
    pauseOnHover: false,

    responsive: [

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }

    ]

});