import {isEsc} from './utils/is-esc.js';
import {body} from './fullscreen-picture.js';
import {getUniqueArray} from './utils/getUniqueArray.js';

const uploadInput = document.querySelector('.img-upload__input');
const textHashtags = document.querySelector('.text__hashtags');
const textDescription = document.querySelector('.text__description');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const imgUploadClose = document.querySelector('.img-upload__cancel');

const resetInputValue = function () {
  uploadInput.value = '';
  textHashtags.value = '';
  textDescription.value = '';
};

const isActiveElement = function () {
  if (document.activeElement === textDescription
    || document.activeElement === textHashtags) {
    return false;
  }
  return true;
};

const closeImgUpload = function () {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  imgUploadClose.removeEventListener('click',closeImgUpload);
  resetInputValue();
};

const pressEsc = function (evt) {
  if (isEsc(evt) && isActiveElement()) {
    evt.preventDefault();
    imgUploadOverlay.classList.add('hidden');
    body.classList.remove('modal-open');
    imgUploadClose.removeEventListener('click',closeImgUpload);
    document.removeEventListener('keydown',pressEsc);
    resetInputValue();
  }
};

const validateHashtag = function () {
  const hashtags = textHashtags.value.split(' ');
  const re = /^#[A-Za-zА-Яа-я0-9]{1,19}$/;
  const errors = [];
  let newHashtagsArray = [];

  hashtags.forEach((element) => {
    if (element[0] !== '#') {
      errors.push('Хэш-тег начинается с символа # (решётка)');
    }
    if (!(re.test(element))) {
      errors.push('После решетки могут быть только буквы и/или цифры.\nМаксимальная длина - 20 символов, включая решётку');
    }
    newHashtagsArray.push(element.toLowerCase());
    if (newHashtagsArray.length > 5){
      errors.push('Нельзя указать больше пяти хэш-тегов');
    }
  });
  newHashtagsArray = getUniqueArray(newHashtagsArray);
  textHashtags.value = newHashtagsArray.join(' ');
  textHashtags.setCustomValidity(errors.join('. \n'));
};

const openUploadForm = function () {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  imgUploadClose.addEventListener('click',closeImgUpload);
  document.addEventListener('keydown',pressEsc);
};

uploadInput.addEventListener('change',openUploadForm);
textHashtags.addEventListener('input',validateHashtag);

