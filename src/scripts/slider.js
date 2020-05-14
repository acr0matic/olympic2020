/* global Swiper */

var SwiperBooksContainer = document.querySelector(".swiper-books");
var SwiperLecturesContainer = document.querySelector(".swiper-lectures");

if (SwiperBooksContainer) {
  let SwiperBooks = new Swiper(SwiperBooksContainer, {
    // Optional parameters
    slidesPerView: 2,
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination-books",
    },

    navigation: {
      nextEl: ".swiper-books-next",
      prevEl: ".swiper-books-prev",
    },

    breakpoints: {
      320: {
        spaceBetween: 20,
      },

      720: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  SwiperBooks.init();
  CheckContollers(SwiperBooks, SwiperBooksContainer);
}

if (SwiperLecturesContainer) {
  let SwiperLectures = new Swiper(SwiperLecturesContainer, {
    slidesPerView: 2,
    spaceBetween: 30,

    pagination: {
      el: ".swiper-pagination-lectures",
    },

    navigation: {
      nextEl: ".swiper-lectures-next",
      prevEl: ".swiper-lectures-prev",
    },

    breakpoints: {
      320: {
        spaceBetween: 20,
      },

      720: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });

  SwiperLectures.init();
  CheckContollers(SwiperLectures, SwiperLecturesContainer);
}

function CheckContollers(slider, container) {
  let mediaQuery = window.matchMedia("(max-width: 425px)");

  let slideCount = slider.slides.length;

  let leftArrow = container.querySelector(".swiper-button-prev");
  let rightArrow = container.querySelector(".swiper-button-next");
  let pagination = container.querySelector(".swiper-pagination");

  if (!mediaQuery.matches)
    if (slideCount == 4) {
      leftArrow.style.display = "none";
      rightArrow.style.display = "none";
      pagination.style.display = "none";
    }
}
