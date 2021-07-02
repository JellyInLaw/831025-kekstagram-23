import { photoDescriptions } from './utils/data.js';
import {isEsc} from './utils/is-esc.js';

const body = document.body;
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const picturesCollection = document.querySelectorAll('.picture');

const cancelTrancition = function (evt) {
  if (evt.target.classList.contains('picture__img')) {
    evt.preventDefault();
  }
};

const closeButtonHandler = function  () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  closeButton.removeEventListener('click',closeButtonHandler);
};

const closeButtonHandlerEscape = function (evt) {
  if (isEsc(evt)) {
    evt.preventDefault();
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', closeButtonHandlerEscape);
  }
};

pictures.addEventListener('click',cancelTrancition);

// открывает просмотр фотографии
pictures.addEventListener('click',(picture) => {

  if (picture.target.classList.contains('picture__img')) {
    bigPicture.classList.remove('hidden');

    body.classList.add('modal-open');

    closeButton.addEventListener('click',closeButtonHandler);
    document.addEventListener('keydown', closeButtonHandlerEscape);

    // прячет блоки счётчика комментариев и загрузки новых комментариев
    bigPicture.querySelector('.social__comment-count').classList.add('hidden');
    bigPicture.querySelector('.comments-loader').classList.add('hidden');

    // заполняет URL
    const arrPictureColl = Array.from(picturesCollection);
    const link = picture.target.parentNode;
    const index = arrPictureColl.indexOf(link);
    const childNodes = bigPicture.querySelector('.big-picture__img').children[0];
    childNodes.src = photoDescriptions[index].url;

    //подписывает описание фотографии
    const socialCaption = bigPicture.querySelector('.social__caption');
    socialCaption.textContent = photoDescriptions[index].description;

    // заполняет лайки
    const countLikes = bigPicture.querySelector('.likes-count');
    countLikes.textContent = photoDescriptions[index].likes;

    // заполняет колличество комментариев
    // const countComments = bigPicture.querySelector('.comments-count');
    // countComments.textContent = photoDescriptions[index].comments.length;

    // или так, не разобрался как надо именно
    const countComments = bigPicture.querySelector('.social__comment-count');
    countComments.textContent = '';
    countComments.textContent = `${photoDescriptions[index].comments.length  } из ${  photoDescriptions[index].comments.length}`;


    // создает и выводит новые комментарии
    const commentsList = bigPicture.querySelector('.social__comments');
    commentsList.textContent = '';
    const newCommentList = photoDescriptions[index].comments;

    newCommentList.forEach((element,jindex) => {
      const newElement = document.createElement('li');
      newElement.classList.add('social__comment');

      const newImg = document.createElement('img');
      newImg.classList.add('social__picture');
      newImg.src = photoDescriptions[index].comments[jindex].avatar;
      newImg.alt = photoDescriptions[index].comments[jindex].name;
      newImg.width = 35;
      newImg.height = 35;

      const newCommentText = document.createElement('p');
      newCommentText.classList.add('social__text');
      newCommentText.textContent = photoDescriptions[index].comments[jindex].message;

      newElement.appendChild(newImg);
      newElement.appendChild(newCommentText);
      commentsList.appendChild(newElement);
    });
  }
});

export {body};
