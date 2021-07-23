import './data.js';
import './mini-picture.js';
import './fullscreen-picture.js';
import './form.js';
import './utils/show.js';
import './utils/show.js';
import './image-editing.js';
import './upload-picture.js';
import {modalHandler} from './utils/show.js';
import {renderPictures} from './mini-picture.js';
import {setUploadForm,closeImgUpload} from './form.js';
import {filterImages} from './img-fiters.js';
import { getData } from './data.js';

const URL = 'https://23.javascript.pages.academy/kekstagram';

const renderData = function (data) {
  renderPictures(data);
  filterImages(data);
};

getData(URL,renderData,modalHandler);

setUploadForm(closeImgUpload);

export {URL};
