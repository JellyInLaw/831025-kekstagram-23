import {isEsc} from './utils/is-esc.js';
import {body} from './fullscreen-picture.js';

const uploadInput = document.querySelector('.img-upload__label');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadClose = document.querySelector('.img-upload__cancel');

const closeImgUpload = function () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadClose.removeEventListener('click',closeImgUpload);
};

const pressEsc = function (evt) {
  if (isEsc(evt)) {
    evt.preventDefault();
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    imgUploadClose.removeEventListener('click',closeImgUpload);
    document.removeEventListener('keydown',pressEsc);
  }
};

const openUploadForm = function (evt){
  evt.preventDefault();
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  imgUploadClose.addEventListener('click',closeImgUpload);
  document.addEventListener('keydown',pressEsc);
};

uploadInput.addEventListener('click',openUploadForm);


