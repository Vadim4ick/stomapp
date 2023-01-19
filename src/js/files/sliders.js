/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Scrollbar } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import "swiper/css";

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов
function bildSliders() {
  //BildSlider
  let sliders = document.querySelectorAll(
    '[class*="__swiper"]:not(.swiper-wrapper)'
  );
  if (sliders) {
    sliders.forEach((slider) => {
      slider.parentElement.classList.add("swiper");
      slider.classList.add("swiper-wrapper");
      for (const slide of slider.children) {
        slide.classList.add("swiper-slide");
      }
    });
  }
}
// Инициализация слайдеров
function initSliders() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  // Перечень слайдеров
  if (document.querySelector(".slider-banner__slider")) {
    new Swiper(".slider-banner__slider", {
      // Подключаем модули слайдера
      // для конкретного случая
      //modules: [Navigation, Pagination],
      /*
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
      speed: 800,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,
      // Dotts
      //pagination: {
      //	el: '.slider-quality__pagging',
      //	clickable: true,
      //},
      // Arrows
      // navigation: {
      //   nextEl: ".about__more .more__item_next",
      //   prevEl: ".about__more .more__item_prev",
      // },
      /*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      on: {
        init: function (swiper) {
          const allSlides = document.querySelector(".fraction-controll__all"); //забираем в константу число общего кол-ва слайдов
          const allSlidesItems = document.querySelectorAll(
            ".slider-banner__slide:not(.swiper-slide-duplicate)"
          );
          allSlides.innerHTML = allSlidesItems.length; //выводим в HTML общее количество слайдов в числе
          // console.log(swiper); //смотрим в консоли swiper и ищем нужные цифры
        },

        slideChange: function (swiper) {
          const currentSlide = document.querySelector(
            ".fraction-controll__current"
          ); //забираем в константу число текущего слайда
          currentSlide.innerHTML = swiper.realIndex + 1; //выводим активный слайд + 1(т.к. начало с нуля)
          // console.log(swiper); //смотрим в консоли swiper и ищем нужные цифры
        },
      },
    });
  }

  if (window.matchMedia("(max-width: 991.98px)").matches) {
    if (document.querySelector(".orders__slider")) {
      new Swiper(".orders__slider", {
        // Подключаем модули слайдера
        // для конкретного случая
        //modules: [Navigation, Pagination],
        /*
        effect: 'fade',
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        */
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 12,
        // autoHeight: true,
        speed: 800,
        //touchRatio: 0,
        //simulateTouch: false,
        // loop: true,
        //preloadImages: false,
        //lazy: true,
        // Dotts
        //pagination: {
        //	el: '.slider-quality__pagging',
        //	clickable: true,
        //},
        // Arrows
        // navigation: {
        //   nextEl: ".about__more .more__item_next",
        //   prevEl: ".about__more .more__item_prev",
        // },

        breakpoints: {
          320: {
            slidesPerView: 1.05,
            spaceBetween: 12,
          },
          400: {
            slidesPerView: 1.1,
          },
          450: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
        },
        on: {},
      });
    }
  }

  if (document.querySelector(".work-how__slider")) {
    new Swiper(".work-how__slider", {
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Scrollbar],

      observer: true,
      spaceBetween: 10,
      speed: 800,
      allowTouchMove: false,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
      navigation: {
        nextEl: ".work-how__btn .btn",
      },

      on: {
        init: function (swiper) {
          if (window.matchMedia("(min-width: 991.98px)").matches) {
            const currentItem = document.querySelectorAll(".step-work__item");
            currentItem.forEach((el) => {
              el.classList.remove("active");
            });
            currentItem[swiper.activeIndex].classList.add("active");
          }
          if (window.matchMedia("(max-width: 991.98px)").matches) {
            const allSlides = document.querySelector(
              ".work-how__steps_mobile span"
            );
            allSlides.innerHTML = ` ${swiper.activeIndex + 1}`;
          }
        },
        slideChange: function (swiper) {
          if (window.matchMedia("(min-width: 991.98px)").matches) {
            const currentItem = document.querySelectorAll(".step-work__item");
            currentItem.forEach((el) => {
              el.classList.remove("active");
            });
            currentItem[swiper.realIndex].classList.add("active");
          }
          if (window.matchMedia("(max-width: 991.98px)").matches) {
            const allSlides = document.querySelector(
              ".work-how__steps_mobile span"
            );
            allSlides.innerHTML = ` ${swiper.activeIndex + 1}`;
          }
        },
        slideNextTransitionEnd: function (swiper) {
          const btn = document.querySelector(".work-how__btn .btn");
          if (btn.classList.contains("swiper-button-disabled")) {
            // btn.classList.remove("swiper-button-disabled");
            btn.removeAttribute("disabled");
            document
              .querySelector(".work-how__btns .btn")
              .addEventListener("click", (e) => {
                swiper.slideTo(0);
              });
          }
        },
      },
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить
  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  // initSlidersScroll();
});
