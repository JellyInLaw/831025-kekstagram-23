const URL = 'https://23.javascript.pages.academy/kekstagram';

const getData = function (renderPictures,onImgFilters,showRenderError) {
  fetch(`${URL  }/data`)
    .then((response) => response.json())
    .then((data) => {
      renderPictures(data);
      onImgFilters(data);
    }).catch(() => {showRenderError();});
};

const setData = function (onSuccess,showUploadSucces,showUploadError,formData) {
  fetch(URL,
    {
      method: 'POST',
      body: formData,
      type:'multipart/form-data',
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess();
      showUploadSucces();
    }
    else {
      showUploadError();
    }
  })
    .catch(() => {showUploadError();});
};

export {getData,setData};
