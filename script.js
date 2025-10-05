const swiper = new Swiper('.wrapper', {
  loop: true,
  spaceBetween: 30,


//   Autoplay
  autoplay: {
    delay: 5000,
    disableOnIteraction: false,
    pauseOnMouseEnter: true,
  },

  // pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   Responsive breakpoints

  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    1024: {
        slidesPerView: 3,
    }
  }
});