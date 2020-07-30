const calc = () => {
  const form = document.querySelector('.design');
  const selectInput = form.querySelectorAll('select');
  const totalPrice = form.querySelector('.calc-price');
  const promoInput = form.querySelector('.promocode');
  let promo,
      sum = 0;
  const calcPrice = function() {
    totalPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
    if(selectInput[0].value && selectInput[1].value) {
      sum = Math.round(selectInput[0].value * selectInput[1].value +
        selectInput[2].value) * (promo ? 0.3 : 1);
      totalPrice.textContent = sum;
    }
  };

  const onPromoInputInput = (evt) => {
    const promocode = 'IWANTPOPART';
    promo = evt.target.value === promocode ? true : false;
    calcPrice();
  };

  selectInput.forEach((input) => {
    input.addEventListener('change', () => {
      calcPrice();
    });
  });
  promoInput.addEventListener('input', onPromoInputInput);
  form.addEventListener('submit', function() {
    form.reset();
    totalPrice.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
  });
};

export default calc;
