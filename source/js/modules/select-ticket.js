const period = document.querySelectorAll('.time-list-item');
const priceValueElement = document.querySelectorAll('.visits-item__price-title');
const typeTicketElement = document.querySelectorAll('.visits-item__title');
const priceWrapperElement = document.querySelectorAll('.visits-item__price-wrapper');



priceWrapperElement.forEach((element) => {
  let style = getComputedStyle(element, ':before').content;
  console.log(style);
});


export const getPrice = (element) => {
  if (element === '1 месяц') {
    typeTicketElement.forEach((typeElement, index) => {
      if (typeElement.textContent === 'С тренером') {
        priceValueElement[index].textContent = '5000';
        priceWrapperElement[index].style.padding = '54px 18px 6px';
      }

      if (typeElement.textContent === 'Дневной') {
        priceValueElement[index].textContent = '1700';
        priceWrapperElement[index].style.padding = '54px 18px 6px';
      }

      if (typeElement.textContent === 'Полный день') {
        priceValueElement[index].textContent = '2700';
        priceWrapperElement[index].style.padding = '54px 18px 6px';
      }
    });
  }

  if (element === '6 месяцев') {
    typeTicketElement.forEach((typeElement, index) => {
      if (typeElement.textContent === 'С тренером') {
        priceValueElement[index].textContent = '30000';
        priceWrapperElement[index].style.padding = '54px 3px 6px';
      }

      if (typeElement.textContent === 'Дневной') {
        priceValueElement[index].textContent = '10200';
        priceWrapperElement[index].style.padding = '54px 3px 6px';
      }

      if (typeElement.textContent === 'Полный день') {
        priceValueElement[index].textContent = '16200';
        priceWrapperElement[index].style.padding = '54px 3px 6px';
      }
    });
  }

  if (element === '12 месяцев') {
    typeTicketElement.forEach((typeElement, index) => {
      if (typeElement.textContent === 'С тренером') {
        priceValueElement[index].textContent = '60000';
        priceWrapperElement[index].style.padding = '54px 3px 6px';
      }

      if (typeElement.textContent === 'Дневной') {
        priceValueElement[index].textContent = '20400';
        priceWrapperElement[index].style.padding = '54px 3px 6px';
      }

      if (typeElement.textContent === 'Полный день') {
        priceValueElement[index].textContent = '32400';
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
