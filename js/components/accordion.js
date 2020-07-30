const accordion = () => {
  const heading = document.querySelectorAll('.accordion-heading'),
        slides = document.querySelectorAll('.accordion-block');

  const showSlide = (index) => {
    heading.forEach((item) => {
      item.classList.remove('ui-accordion-header-active');
    });
    slides.forEach((item) => {
      item.classList.add('hidden', 'animated', 'fadeInUp');
    });
    heading[index].classList.add('ui-accordion-header-active');
    slides[index].classList.remove('hidden');
    slides[index].classList.add('show');
  };

  showSlide(0);

  heading.forEach((item, index) => {
    item.addEventListener('click', function() {
      showSlide(index);
    });
  });
};

export default accordion;
