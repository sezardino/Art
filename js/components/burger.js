const burger = (burgerSelector, menuSelector) => {
  const burger = document.querySelector(burgerSelector),
        menu = document.querySelector(menuSelector);

  menu.classList.add('hidden');

  const onBurgerClick = () => {
    if(menu.classList.contains('hidden') && window.screen.availWidth < 992) {
      menu.classList.add('show');
      menu.classList.remove('hidden');
    } else {
      menu.classList.add('hidden');
      menu.classList.remove('show');
    }
  };

  const onWindowResize = () => {
    if (window.screen.availWidth > 992) {
      menu.classList.add('hidden');
      menu.classList.remove('show');
    }
  };

  burger.addEventListener('click', onBurgerClick);
  window.addEventListener('resize', onWindowResize);
};

export default burger;
