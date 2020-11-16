let bookSlider = $('#bookSlider');

bookSlider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: false,
    responsive: [
        {
          breakpoint: 691,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
            breakpoint: 400,
            settings: {
              slidesToShow: 1.1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }

        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});

$("#bookArrowPrev").on("click", function(event) {
    event.preventDefault();

    bookSlider.slick('slickPrev');
});

$("#bookArrowNext").on("click", function(event) {
    event.preventDefault();

    bookSlider.slick('slickNext');
});


// Partners Slider
let partnersSlider = $("#partnersSlider");

partnersSlider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false
});


let filterMobileSlider = $("#filterMobileSlider");

filterMobileSlider.slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    dots: false
});