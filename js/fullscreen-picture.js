import {isEsc} from './utils/is-esc.js';

const body = document.body;
const pictures = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const socialCommentCount = document.querySelector('.social__comment-count');
const commentsCount = document.querySelector('.comments-count');

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

const getCountOfComment = function (countAll) {
  const countVisibleComment = document.querySelector('.social__comments').children.length;

  socialCommentCount.firstChild.textContent = `${countVisibleComment  } из `;
  commentsCount.textContent = countAll;
};

const isMoreCommentsVisible = function (value,button) {
  if (!value) {
    button.classList.add('hidden');
  }
};

const getComment = function (commentsList,commentsToPush) {

  const comments = commentsToPush;

  comments.forEach((element) => {
    const comment = document.createElement('li');
    comment.classList.add('social__comment');

    const avatar = document.createElement('img');
    avatar.src = element.avatar;
    avatar.classList.add('social__picture');
    avatar.alt = 'Аватар комментатора фотографии';
    avatar.width = 35;
    avatar.height = 35;

    comment.appendChild(avatar);

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = element.message;

    comment.appendChild(commentText);

    commentsList.appendChild(comment);
  });
};

// открывает просмотр фотографии
const openBigPicture = function (picture,data) {

  if (picture.target.classList.contains('picture__img')) {
    bigPicture.classList.remove('hidden');

    body.classList.add('modal-open');

    closeButton.addEventListener('click',closeButtonHandler);
    document.addEventListener('keydown',closeButtonHandlerEscape);

    // заполняет URL
    const picturesCollection = document.querySelectorAll('.picture');
    const arrPictureColl = Array.from(picturesCollection);
    const link = picture.target.parentNode;
    const index = arrPictureColl.indexOf(link);
    const childNodes = bigPicture.querySelector('.big-picture__img').children[0];
    childNodes.src = data[index].url;

    //подписывает описание фотографии
    const socialCaption = bigPicture.querySelector('.social__caption');
    socialCaption.textContent = data[index].description;

    // заполняет лайки
    const countLikes = bigPicture.querySelector('.likes-count');
    countLikes.textContent = data[index].likes;

    // выводит комментарии
    const commentsList = document.querySelector('.social__comments');
    commentsList.textContent = '';
    const moreCommentButton = document.querySelector('.comments-loader');
    moreCommentButton.classList.add('hidden');

    const commentsToPush = data[index].comments.slice();

    let startIndex = 0;

    if (commentsToPush.length <= 5) {
      getComment(commentsList,commentsToPush);
      getCountOfComment(commentsToPush.length);
    }

    if (commentsToPush.length > 5) {

      const moreCommentButtonHandler = function() {

        if (commentsToPush.slice(startIndex,commentsToPush.length).length <= 5) {
          getComment(commentsList,commentsToPush.slice(startIndex,commentsToPush.length));
          isMoreCommentsVisible(false,moreCommentButton);
          moreCommentButton.removeEventListener('click',moreCommentButtonHandler);
          getCountOfComment(commentsToPush.length);
        }

        if (commentsToPush.slice(startIndex,commentsToPush.length).length > 5) {
          getComment(commentsList,commentsToPush.slice(startIndex,startIndex + 5));
          isMoreCommentsVisible(true,moreCommentButton);
          startIndex += 5;
          getCountOfComment(commentsToPush.length);
        }

      };
      moreCommentButton.classList.remove('hidden');
      getComment(commentsList,commentsToPush.slice(startIndex,5));
      getCountOfComment(commentsToPush.length);
      startIndex += 5;
      moreCommentButton.addEventListener('click',moreCommentButtonHandler);
    }
  }
};

export {body,pictures,openBigPicture};

