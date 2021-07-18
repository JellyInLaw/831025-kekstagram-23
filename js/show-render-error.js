import {body} from './fullscreen-picture.js';
import { isEsc } from './utils/is-esc.js';

const template = document.querySelector('#render-error');
const errorModal = template.content.cloneNode(true).querySelector('.error');

const showRenderError = function () {
  body.appendChild(errorModal);
  body.classList.add('modal-open');
  const closeButton =  errorModal.querySelector('.error__button');
  body.addEventListener('click',(evt) => {

    if (evt.target.classList.contains('error') || evt.target === closeButton) {
      body.removeChild(errorModal);
      body.classList.remove('modal-open');
    }

  },
  );
  document.addEventListener(
    'keydown',(evt) => {
      if (isEsc(evt)) {
        body.removeChild(errorModal);
        body.classList.remove('modal-open');
      }
    },
  );
};

export {showRenderError};
