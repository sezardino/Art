const modals = (trigerSelector, modalSelector, closeBtnSelector, timeOut = false, closeClickOverlay = true ) => {

  const trigers = document.querySelectorAll(trigerSelector),
        modal = document.querySelector(modalSelector),
        closeBtn = modal.querySelector(closeBtnSelector),
        windows = document.querySelectorAll('[data-modal]');
  let activity;

  const openModal = () => {
    modal.classList.add('show', 'animated', 'fadeIn');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    activity = true;



    modal.addEventListener('click', function(evt) {
      if (evt.target.classList.contains(modalSelector.slice(1)) && closeClickOverlay) {
        closeModal();
      }
    });
  };

  const closeModal = () => {
    windows.forEach(item => {
      modal.classList.remove('show');
      item.classList.add('hidden');
    });
    modal.classList.remove('show');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  };

  const onTrigerClick = (evt) => {
    evt.preventDefault();
    activity = true;

    if (evt.target.classList.contains('fixed-gift')) {
      evt.target.classList.add('hidden');
    }

    windows.forEach(item => {
      modal.classList.remove('show');
      item.classList.add('hidden');
    });
    openModal();
  };

  const onCloseBtnClick = (evt) => {
    evt.preventDefault();
    closeModal();
  };

  const openModalTimer = (time) => {
    if (timeOut) {

      setTimeout(() => {
        let modalShow;
        windows.forEach((window) => {
          if(window.classList.contains('show')) {
            return (modalShow = true);
          }
        });
        if(!modalShow) {
          openModal();
        }
      }, time);}
  };
  openModalTimer(500000);

  const openGiftPopup = () => {
    document.querySelector('.popup-gift').classList.add('show');
    document.body.style.overflow = 'hidden';
    activity = true;
    document.querySelector('.fixed-gift').classList.add('hidden')
  };

  const onWindowScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      let nowHeight = window.pageYOffset + document.documentElement.clientHeight;
      if(!activity && (nowHeight >= totalHeight)) {
        openGiftPopup();
      }
  };



  trigers.forEach(triger => triger.addEventListener('click', onTrigerClick));
  closeBtn.addEventListener('click', onCloseBtnClick);
  window.addEventListener('scroll', onWindowScroll);
};

export default modals;
