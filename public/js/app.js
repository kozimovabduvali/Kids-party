let swiper = new Swiper(".review-swiper", {
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 16,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
