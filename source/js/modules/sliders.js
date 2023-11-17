export const jurySlider = () => {
  const sliderWrapper = document.querySelector('[data-slider="jury-slider"]');
  const buttonPrev = document.querySelector('[data-jury-button="prev-button"]');
  const buttonNext = document.querySelector('[data-jury-button="next-button"]');

  return new window.Swiper(sliderWrapper, {
    direction: 'horizontal',

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    loop: true,

    breakpoints: {
      1366: {
        slidesPerView: 4,
        spaceBetween: 40,
        allowTouchMove: 'false',
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 32,
        allowTouchMove: 'true',
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        allowTouchMove: 'true',
      },
    },
  });
};

export const reviewSlider = () => {
  const sliderWrapper = document.querySelector('[data-slider="reviews-slider"]');
  const buttonPrev = document.querySelector('[data-reviews-button="prev-button"]');
  const buttonNext = document.querySelector('[data-reviews-button="next-button"]');

  return new window.Swiper(sliderWrapper, {
    direction: 'horizontal',
    effect: 'fade',
    speed: 100,

    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    loop: false,
  });
};

export const initSliders = () => {
  jurySlider();
  reviewSlider();
};
