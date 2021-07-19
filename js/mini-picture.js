import {openBigPicture } from './fullscreen-picture.js';


const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const pictureTemplate = document.querySelector('#picture');

let clickHandler;

const clearPictures = function () {
  const visiblePictures = pictures.querySelectorAll('.picture');
  visiblePictures.forEach((elem) => {
    elem.remove();
  });
  pictures.removeEventListener('click',clickHandler);
};

const renderPictures = function (data) {
  data.forEach((elem,index) => {
    const template = pictureTemplate.cloneNode(true);
    const element = template.content.querySelector('.picture');
    element.href = data[index].url;
    element.querySelector('.picture__img').src = data[index].url;
    element.querySelector('.picture__likes').textContent = data[index].likes;
    element.querySelector('.picture__comments').textContent = data[index].comments.length;
    fragment.appendChild(element);
  });

  pictures.appendChild(fragment);

  clickHandler = (picture) => {
    openBigPicture(picture,data);
  };

  pictures.addEventListener('click',clickHandler);

};

export {renderPictures,clearPictures};
