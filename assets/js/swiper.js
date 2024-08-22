import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,

  pagination: {
    el: ".swiper-pagination-custom",
    type: "fraction",
  },

  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 48
    }
  }
});

const hotsSwiper = new Swiper('.hotsSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 48
    }
  }
});

const projectsSwiper = new Swiper('.projectsSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    768: {
      slidesPerView: 2
    },

    992: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: "row",
      },
    }
  }
});

const readSwiper = new Swiper('.readSwiper', {
  slidesPerView: 1,
  spaceBetween: 24,

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
      grid: {
        rows: 3,
      },
    },
  }
});