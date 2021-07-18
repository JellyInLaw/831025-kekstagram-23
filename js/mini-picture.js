const pictures = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const pictureTemplate = document.querySelector('#picture');


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

};

export {renderPictures};
