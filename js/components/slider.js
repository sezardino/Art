const slider = (slidesSelector, direction, prev, next) => {
  const slides = document.querySelectorAll(slidesSelector);
  let slideIndex = 1,
      pause;

  const showSlides = (n) => {
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    slides.forEach((slide) => {
      slide.classList.add('hidden', 'animated');
    });

    slides[slideIndex - 1].classList.remove('hidden');
  };
  showSlides(slideIndex);

  const plusSlide = (n) => {
    showSlides(slideIndex +=n);
  };

  try {
    const nextSlide = document.querySelector(next),
          prevSlide = document.querySelector(prev);

    nextSlide.addEventListener('click', () => {
      plusSlide(1);
      slides[slideIndex - 1].classList.remove('slideInRight');
      slides[slideIndex - 1].classList.add('slideInLeft');
    });
    prevSlide.addEventListener('click', () => {
      plusSlide(-1);
      slides[slideIndex - 1].classList.remove('slideInLeft');
      slides[slideIndex - 1].classList.add('slideInRight');
    });
  } catch(error) {}

  const autoplay = () => {
    if (direction === 'vertical') {
      pause = setInterval(() => {
        plusSlide(1);
        slides[slideIndex - 1].classList.add('slideInDown');
      }, 3000);
    } else {
      pause = setInterval(() => {
        plusSlide(1);
        slides[slideIndex - 1].classList.remove('slideInRight');
        slides[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }

  };
  autoplay();

  slides[0].parentNode.addEventListener('mouseenter', () => clearInterval(pause));
  slides[0].parentNode.addEventListener('mouseleave', () => autoplay());



};

export default slider;
