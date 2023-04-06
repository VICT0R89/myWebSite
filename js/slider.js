
const slickFunction = () => {
  $('.sliderStick').slick({
    dots: false,
    infinite: true,
    autoplay: true,
		autoplaySpeed: 2000,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
    $('.sliderStick').slick('setOption', 'prevArrow', '<button type="button" class="slick-prev"><</button>', true);
    $('.sliderStick').slick('setOption', 'nextArrow', '<button type="button" class="slick-next">></button>', true);
}
