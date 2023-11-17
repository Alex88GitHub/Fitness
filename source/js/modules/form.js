import Pristine from '../vendor/pristine';

const VALID_NAME_SYMBOLS = /[a-zа-яё]/i;
const VALID_NUMBER_SYMBOLS = /^[0-9]{1,}$/;
const VALID_NAME_ERROR_MESSAGE = 'Введите имя кириллицей или латиницей';
const VALID_NUMBER_ERROR_MESSAGE = 'Введите цифры номера без пробелов и спецсимволов';

const formElement = document.querySelector('.form');
const inputNameElement = formElement.querySelector('.input[name=name]');
const inputPhoneElement = formElement.querySelector('.input[name=phone]');

const pristine = new Pristine(
    formElement, {classTo: 'test', errorTextParent: 'test', errorTextClass: 'test-error'}, false);

const hasValidName = (value) => {
  return VALID_NAME_SYMBOLS.test(value);
};

pristine.addValidator(
    inputNameElement,
    hasValidName,
    VALID_NAME_ERROR_MESSAGE
);

const hasValidPhone = (value) => {
  return VALID_NUMBER_SYMBOLS.test(value);
};

pristine.addValidator(
    inputPhoneElement,
    hasValidPhone,
    VALID_NUMBER_ERROR_MESSAGE
);

formElement.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
