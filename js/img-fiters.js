import { renderPictures,clearPictures } from './mini-picture.js';
import { shuffle } from './utils/getUniqueArray.js';

const imgFilters = document.querySelector('.img-filters');
const buttonDefault = imgFilters.querySelector('#filter-default');
const buttonRandom = imgFilters.querySelector('#filter-random');
const buttonDiscussed = imgFilters.querySelector('#filter-discussed');

const gerSort = function (data) {
  data.sort((aaa, bbb) => bbb.comments.length - aaa.comments.length);
  return data;
};

const onImgFilters = function (data) {
  imgFilters.classList.remove('img-filters--inactive');

  buttonDefault.classList.add('img-filters__button--active');

  imgFilters.addEventListener('click',(button) => {

    if (button.target.classList.contains('img-filters__button')) {

      buttonDefault.classList.remove('img-filters__button--active');
      buttonRandom.classList.remove('img-filters__button--active');
      buttonDiscussed.classList.remove('img-filters__button--active');

      if (button.target.id === 'filter-default') {
        buttonDefault.classList.add('img-filters__button--active');
        clearPictures();
        renderPictures(data);
      }

      if (button.target.id === 'filter-random') {
        buttonRandom.classList.add('img-filters__button--active');
        clearPictures();
        renderPictures(shuffle(data.slice()).slice(0,10));
      }

      if (button.target.id === 'filter-discussed') {
        buttonDiscussed.classList.add('img-filters__button--active');
        clearPictures();
        renderPictures(gerSort(data.slice()));
      }
    }
  });
};

export {onImgFilters};
