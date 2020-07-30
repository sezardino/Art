import modals from './components/modals';
import slider from './components/slider';
import forms from './components/forms';
import {phoneInputValidate, textInputsCheck} from './components/inputs';
import showMoreCards from './components/showMoreCards';
import calc from './components/calc';
import portfolio from './components/portfolio';
import hoverEffect from './components/hoverEffect';
import accordion from './components/accordion';
import burger from './components/burger';

document.addEventListener('DOMContentLoaded', () => {
  modals('.button-design', '.popup-design', '.popup-close');
  modals('.button-consultation', '.popup-consultation', '.popup-close', true);
  modals('.fixed-gift', '.popup-gift', '.popup-close');
  slider('.main-slider-item', 'vertical');
  slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
  forms();
  phoneInputValidate('[name=phone]');
  textInputsCheck('[name=name]');
  textInputsCheck('[name=message]');
  showMoreCards('.button-styles', '.styles-2', '.styles-container');
  calc();
  portfolio('.portfolio-menu', '[data-portfolio]', '.portfolio-block', '.portfolio-no');
  hoverEffect();
  accordion();
  burger('.burger', '.burger-menu');
});
