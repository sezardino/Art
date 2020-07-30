const hoverEffect = () => {
  const bloks = document.querySelectorAll('.sizes-block');

  const onWrapperMouseEnter = (evt) => {
    const target = evt.target;
    const img = target.querySelector('img');
    img.src = img.src.slice(0, -4) + '-1.png';
    const p = target.querySelectorAll('p:not(.sizes-hit)');
    p.forEach((item) => {
      item.classList.add('hidden');
      item.classList.remove('show');
    });
  };

  const onWrapperMouseLeave = (evt) => {
    const target = evt.target;
    const img = target.querySelector('img');
    img.src = img.src.slice(0, -6) + '.png';
    const p = target.querySelectorAll('p:not(.sizes-hit)');
    p.forEach((item) => {
      item.classList.add('show');
      item.classList.remove('hidden');
    });
  };

  bloks.forEach((block) => {
    block.addEventListener('mouseenter', (evt) => onWrapperMouseEnter(evt));
    block.addEventListener('mouseleave', (evt) => onWrapperMouseLeave(evt));
  });

};

export default hoverEffect;
