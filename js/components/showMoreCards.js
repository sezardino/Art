import {getData} from '../services/requests';

const showMoreCards = (button, cardsSelector, container) => {
  const trigger = document.querySelector(button),
        cards = document.querySelectorAll(cardsSelector),
        cardsContainer = document.querySelector(container),
        url = 'http://localhost:3000/styles';

  const renderCards = (arr) => {
    const items = arr.map(({src, title, link}) => {
      const html = () => {
        return (`<div class="animated fadeInUp col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1">
                  <div class=styles-block>
                    <img src='${src}' alt='${title}'>
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                  </div>
                </div>`);
      };
      cardsContainer.insertAdjacentHTML('beforeend', html());
    });

  };
  const onTriggerClick = function() {
    getData(url).then(res => renderCards(res));
    this.classList.add('hidden');
  };

  trigger.addEventListener('click', onTriggerClick);

  // cards.forEach((card) => card.classList.add('animated', 'fadeInUp'));

  // const onTriggerClick = () => {
  //   cards.forEach((card) => {
  //     card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
  //     card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
  //   });
  //   trigger.classList.add('hidden');
  // };

  // trigger.addEventListener('click', onTriggerClick);
};

export default showMoreCards;
