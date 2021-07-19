import {body} from '../fullscreen-picture.js';
import { isEsc } from './is-esc.js';

const template = document.querySelector('#success');
const successModal = template.content.cloneNode(true).querySelector('.success');

const showUploadSucces = function () {
  body.appendChild(successModal);
  body.classList.add('modal-open');
  const closeButton =  successModal.querySelector('.success__button');
  body.addEventListener('click',(evt) => {

    if (evt.target.classList.contains('success') || evt.target === closeButton) {
      body.removeChild(successModal);
      body.classList.remove('modal-open');
    }

  },
  );
  document.addEventListener(
    'keydown',(evt) => {
      if (isEsc(evt)) {
        body.removeChild(successModal);
        body.classList.remove('modal-open');
      }
    },
  );
};

export {showUploadSucces};
