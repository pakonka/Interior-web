$(document).ready(function () {
  $(".slider-box").slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeech: 100,
    prevArrow: `<button type='button' class='slick-prev pull-left slick-arrow'><ion-icon name="chevron-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right slick-arrow'><ion-icon name="chevron-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToShow: 1,
      },
    },
  });
});
