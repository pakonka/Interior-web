$(document).ready(function () {
  $(".slider-box").slick({
    slidesToShow: 2,
    slidesToScroll: 2,

    infinite: true,

    arrows: true,

    autoplay: true,
    autoplaySpeed: 2000,

    dots: true,

    prevArrow: `
      <button type="button" class="slick-prev slick-arrow">
        <ion-icon name="chevron-back-outline"></ion-icon>
      </button>
    `,

    nextArrow: `
      <button type="button" class="slick-next slick-arrow">
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </button>
    `,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
