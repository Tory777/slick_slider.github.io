jQuery(document).ready(function () {

        $('.slider').slick({
            infinite: false,
            dots: true,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            rows: 2,
            appendArrows:'.slider-arrows',
            variableWidth: true,
            /*nextArrow: '<img src="images/next_arrow.png" class="slick-next" alt="Navigation button">',
            prevArrow: '<img src="images/prev_arrow.svg" class="slick-prev" alt="Navigation button">',
*/
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        rows: 2,

                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        rows: 2,
                    }
                },
                {
                    breakpoint: 375,
                    settings: {
                        vertical: true,
                        centerMode: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        rows: 1

                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]


        });


    });