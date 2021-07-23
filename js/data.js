const getData = function (URL,onSucces,onError) {
  fetch(`${URL  }/data`)
    .then((response) => response.json())
    .then((data) => {
      onSucces(data);
    }).catch(() => {
      onError('render-error');
    });
};

const setData = function (URL,onSuccess,onError,data) {
  fetch(URL,
    {
      method: 'POST',
      body: data,
      type:'multipart/form-data',
    },
  ).then((response) => {
    if (response.ok) {
      onSuccess('success');
    }
    else {
      onError('error');
    }
  })
    .catch(() => {
      onError('error');
    });
};

export {getData,setData};
