import './mini-picture.js';
import './fullscreen-picture.js';
import './form.js';
import './image-editing.js';
import './show-error.js';
import './show-succes.js';
import {showRenderError} from './show-render-error.js';
import { renderPictures } from './mini-picture.js';
import {openBigPicture,pictures} from './fullscreen-picture.js';
import {setUploadForm,closeImgUpload} from './form.js';

fetch('https://23.javascript.pages.academy/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    renderPictures(data);

    pictures.addEventListener('click',(picture) => {

      openBigPicture(picture,data);

    });

  })
  .catch(()=>{showRenderError();});

setUploadForm(closeImgUpload);
