import Pristine from '../vendor/pristine';

const VALID_NAME_SYMBOLS = /^[a-zа-яё]{1,}$/i;
const VALID_PHONE_SYMBOLS = /^[0-9]{1,}$/;
// const MIN_COUNT_SYMBOLS = 1;
const VALID_NAME_ERROR_MESSAGE = 'Введите имя кириллицей или латиницей';
const VALID_PHONE_ERROR_MESSAGE = 'Введите цифры номера без пробелов и спецсимволов';
// const VALID_COUNT_ERROR_MESSAGE = 'Необходимо заполнить поле';

const formElement = document.querySelector('.form');

const inputNameElement = formElement.querySelector('.input[name=name]');
const inputPhoneElement = formElement.querySelector('.input[name=phone]');

const labelNameElement = inputNameElement.closest('label');
const labelPhoneElement = inputPhoneElement.closest('label');

const pristine = new Pristine(
    formElement,
    {
      classTo: 'form__label',
      errorClass: 'form__label--error',
      successClass: 'form__label--success',
      errorTextParent: 'form__label',
      errorTextClass: 'form__label--error',
    },
    false);

const hasValidName = (value) => {
  const isValid = VALID_NAME_SYMBOLS.test(value);
  if (!isValid) {
    labelNameElement.classList.add('form__label--error');
    labelNameElement.classList.remove('form__label--success');
  } else {
    labelNameElement.classList.remove('form__label--error');
    labelNameElement.classList.add('form__label--success');
  }
  return VALID_NAME_SYMBOLS.test(value);
};

pristine.addValidator(
    inputNameElement,
    hasValidName,
    VALID_NAME_ERROR_MESSAGE
);

const hasValidPhone = (value) => {
  const isValid = VALID_PHONE_SYMBOLS.test(value);
  if (!isValid) {
    labelPhoneElement.classList.add('form__label--error');
    labelPhoneElement.classList.remove('form__label--success');
  } else {
    labelPhoneElement.classList.remove('form__label--error');
    labelPhoneElement.classList.add('form__label--success');
  }
  return VALID_PHONE_SYMBOLS.test(value);
};

pristine.addValidator(
    inputPhoneElement,
    hasValidPhone,
    VALID_PHONE_ERROR_MESSAGE
);

formElement.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
