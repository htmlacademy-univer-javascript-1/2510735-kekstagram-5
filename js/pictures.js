import { arrayObjects } from './data.js';
const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const fragment = document.createDocumentFragment();
const renderPhoto = (photo) => {
  const element = pictureTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = photo.url;
  element.querySelector('.picture__likes').textContent = photo.likes;
  element.querySelector('.picture__comments').textContent = photo.comments.length;
  return element;
};
const renderPhotos = () => {
  arrayObjects.forEach((photo) => {
    fragment.appendChild(renderPhoto(photo));
  });
  pictures.appendChild(fragment);
};
export {renderPhotos};