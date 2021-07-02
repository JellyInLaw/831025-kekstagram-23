import {photoDescriptions} from './utils/data.js';

const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const pictureTemplate = document.querySelector('#picture');

photoDescriptions.forEach((elem,index) => {
  const template = pictureTemplate.cloneNode(true);
  const element = template.content.querySelector('.picture');
  element.href = photoDescriptions[index].url;
  element.querySelector('.picture__img').src = photoDescriptions[index].url;
  element.querySelector('.picture__likes').textContent = photoDescriptions[index].likes;
  element.querySelector('.picture__comments').textContent = photoDescriptions[index].comments.length;
  fragment.appendChild(element);
});

pictures.appendChild(fragment);
