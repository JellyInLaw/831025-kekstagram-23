import {body} from '../fullscreen-picture.js';
import {isEsc} from '../utils/utils.js';

const modalEscHandler = function (modal) {
  body.appendChild(modal);
  body.classList.add('modal-open');
  const closeButton =  modal.querySelector('.button');
  body.addEventListener('click',(evt) => {
    if (evt.target.classList.contains('error') || evt.target === closeButton) {
      body.removeChild(modal);
      body.classList.remove('modal-open');
    }
  },
  );
  document.addEventListener(
    'keydown',(evt) => {
      if (isEsc(evt)) {
        body.removeChild(modal);
        body.classList.remove('modal-open');
      }
    },
  );
};

const modalHandler = function (type) {
  if (type === 'error') {
    const template = document.querySelector('#error');
    const errorModal = template.content.cloneNode(true).querySelector('.error');
    modalEscHandler(errorModal);
  }

  if (type === 'render-error') {
    const template = document.querySelector('#render-error');
    const errorModal = template.content.cloneNode(true).querySelector('.error');
    modalEscHandler(errorModal);
  }

  if (type === 'success') {
    const template = document.querySelector('#success');
    const successModal = template.content.cloneNode(true).querySelector('.success');
    body.appendChild(successModal);
    body.classList.add('modal-open');
    modalEscHandler(successModal);
  }
};


export {modalHandler};
