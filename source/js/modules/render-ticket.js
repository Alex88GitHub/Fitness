const period = document.querySelectorAll('.time-list-item');
const priceValueElement = document.querySelectorAll('.visits-item__price-title');
const typeTicketElement = document.querySelectorAll('.visits-item__title');
const priceWrapperElement = document.querySelectorAll('.visits-item__price-wrapper');
const priceBackgroundElement = document.querySelectorAll('.visits-item__background');

const pricePeriod = {
  withTrainer: {
    oneMonth: '5000',
    sixMonth: '30000',
    twelveMonth: '60000',
  },

  dayTime: {
    oneMonth: '1700',
    sixMonth: '10200',
    twelveMonth: '20400',
  },

  fullDay: {
    oneMonth: '2700',
    sixMonth: '16200',
    twelveMonth: '32400',
  },
};

export const getPrice = (element) => {
  if (element === '1 месяц') {
    typeTicketElement.forEach((typeElement, index) => {
      if (typeElement.textContent === 'С тренером') {
        priceValueElement[index].textContent = pricePeriod.withTrainer.oneMonth;
        priceBackgroundElement[index].style.left = '0';
        priceBackgroundElement[index].textContent = pricePeriod.withTrainer.oneMonth;
        priceWrapperElement[index].style.padding = '54px 18px 6px';
      }

      if (typeElement.textContent === 'Дневной') {
        priceValueElement[index].textContent = pricePeriod.dayTime.oneMonth;
        priceBackgroundElement[index].style.left = '0';
        priceBackgroundElement[index].textContent = pricePeriod.dayTime.oneMonth;
        priceWrapperElement[index].style.padding = '54px 18px 6px';
      }

      if (typeElement.textContent === 'Полный день') {
        priceValueElement[index].textContent = pricePeriod.fullDay.oneMonth;
        priceBackgroundElement[index].style.left = '0';
        priceBackgroundElement[index].textContent = pricePeriod.fullDay.oneMonth;
        priceWrapperElement[index].style.padding = '54px 18px 6px';
      }
    });
  }

  if (element === '6 месяцев') {
    typeTicketElement.forEach((typeElement, index) => {
      if (typeElement.textContent === 'С тренером') {
        priceValueElement[index].textContent = pricePeriod.withTrainer.sixMonth;
        priceBackgroundElement[index].style.left = '-26px';
        priceBackgroundElement[index].textContent = pricePeriod.withTrainer.sixMonth;
        priceWrapperElement[index].style.padding = '54px 3px 6px';
      }

      if (typeElement.textContent === 'Дневной') {
        priceValueElement[index].textContent = pricePeriod.dayTime.sixMonth;
        priceBackgroundElement[index].style.left = '-26px';
        priceBackgroundElement[index].textContent = pricePeriod.dayTime.sixMonth;
        priceWrapperElement[index].style.padding = '54px 3px 6px';
      }

      if (typeElement.textContent === 'Полный день') {
        priceValueElement[index].textContent = pricePeriod.fullDay.sixMonth;
        priceBackgroundElement[index].style.left = '-26px';
        priceBackgroundElement[index].textContent = pricePeriod.fullDay.sixMonth;
        priceWrapperElement[index].style.padding = '54px 3px 6px';
      }
    });
  }

  if (element === '12 месяцев') {
    typeTicketElement.forEach((typeElement, index) => {
      if (typeElement.textContent === 'С тренером') {
        priceValueElement[index].textContent = pricePeriod.withTrainer.twelveMonth;
        priceBackgroundElement[index].style.left = '-26px';
        priceBackgroundElement[index].textContent = pricePeriod.withTrainer.twelveMonth;
        priceWrapperElement[index].style.padding = '54px 3px 6px';
      }

      if (typeElement.textContent === 'Дневной') {
        priceValueElement[index].textContent = pricePeriod.dayTime.twelveMonth;
        priceBackgroundElement[index].style.left = '-26px';
        priceBackgroundElement[index].textContent = pricePeriod.dayTime.twelveMonth;
        priceWrapperElement[index].style.padding = '54px 3px 6px';
      }

      if (typeElement.textContent === 'Полный день') {
        priceValueElement[index].textContent = pricePeriod.fullDay.twelveMonth;
        priceBackgroundElement[index].style.left = '-26px';
        priceBackgroundElement[index].textContent = pricePeriod.fullDay.twelveMonth;
        priceWrapperElement[index].style.padding = '54px 3px 6px';
      }
    });
  }
};

const onPeriodClickHandler = (evt) => {
  period.forEach((element) => {
    element.classList.remove('is-active');
  });
  const target = evt.target;
  target.classList.add('is-active');
  getPrice(target.textContent);
};

period.forEach((element) => {
  element.addEventListener('click', onPeriodClickHandler);
});
