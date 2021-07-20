import './data.js';
import './mini-picture.js';
import './fullscreen-picture.js';
import './form.js';
import './utils/show-error.js';
import './utils/show-succes.js';
import './image-editing.js';
import {showRenderError} from './utils/show-render-error.js';
import {renderPictures} from './mini-picture.js';
import {setUploadForm,closeImgUpload} from './form.js';
import {filterImages} from './img-fiters.js';
import { getData } from './data.js';

const URL = 'https://23.javascript.pages.academy/kekstagram';

const renderData = function (data) {
  renderPictures(data);
  filterImages(data);
};

getData(URL,renderData,showRenderError);

setUploadForm(closeImgUpload);

export {URL};
