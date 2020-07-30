import {postData} from '../services/requests';

const forms = () => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('input[type=file]');

  const messages = {
    loading: 'идет отправка',
    success: 'отправлено',
    error: 'ошибка',
    spiner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };

  const path = {
    questions: 'assets/question.php',
    design: 'assets/server.php'
  };

  const clearInputs = () => {
    inputs.forEach((input) => input.value = '');
    upload.forEach(item => item.previousElementSibling.textContent = 'Файл не выбран');
  };

  const onUploadChange = (evt) => {
    const sibling = evt.target.previousElementSibling;
    const arr = evt.target.files[0].name.split('.');
    const dots = arr[0].length > 8 ? '...' : '.';
    const name = arr[0].slice(0, 7) + dots + arr[1];
    sibling.textContent = name;
  };

  upload.forEach((input) => {
    input.addEventListener('change', onUploadChange);
  });

  form.forEach(element => {
    element.addEventListener('submit', (evt) => {
        evt.preventDefault();

      const statusMassage = document.createElement('div');
      const statusImg = document.createElement('img');
      statusMassage.classList.add('status');
      element.parentNode.append(statusMassage);
      element.parentNode.append(statusImg);
      element.classList.add('hide');
      statusMassage.textContent = messages.loading;
      statusImg.src = messages.spiner;

      const formData = new FormData(element);

      let api;

      if(element.closest('.popup-design') || element.closest('.design')) {
        api = path.design;
      } else {
        api = path.questions;
      }

      postData(api, formData)
        .then(response => {
          console.log(response);
          statusMassage.textContent = messages.success;
          statusImg.src = messages.ok;
          clearInputs();
        })
        .catch((er) => {
          statusMassage.textContent = messages.error;
          statusImg.src = messages.fail;
        })
        .finally(() => {
          setTimeout(() => {
            element.classList.remove('hide');
            statusMassage.remove();
            statusImg.remove();
          }, 8000);
        });
    });
  });
};

export default forms;
