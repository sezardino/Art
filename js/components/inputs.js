const phoneInputValidate = (selector) => {
  const phoneInputs = document.querySelectorAll(selector);

  const checkPhone = function() {
    let value = this.value;
    const validityMessage = 'Введите номер в формате +11 111 111 111';
    // if (value.matches(/\D/gi))
    this.setCustomValidity('');
    if(value[0] !== '+') {
      this.setCustomValidity(validityMessage);
    }

    const str = value.replace(/[a-z, а-яё]/gi, '');
    this.value = str;
  };

  phoneInputs.forEach((input) => {
    input.addEventListener('input', checkPhone);
  });
};

const textInputsCheck = (selector) => {
  const textInputs = document.querySelectorAll(selector);

  const checkText = function() {
    const value = this.value;

    const str = value.replace(/[^а-яё 0-9]/gi, '');
    this.value = str;
  };


  textInputs.forEach((input) => {
    input.addEventListener('input', checkText);
  });
};

export {phoneInputValidate, textInputsCheck};
