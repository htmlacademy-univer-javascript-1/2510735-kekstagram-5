// thumbnail.js

import { renderBigPicture } from './bigPicture.js';

// Функция для отрисовки миниатюр
function renderThumbnails(photos) {
  const thumbnailsContainer = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

  photos.forEach(photo => {
    const thumbnailElement = pictureTemplate.cloneNode(true);
    const thumbnailImg = thumbnailElement.querySelector('.picture__img');
    const thumbnailComments = thumbnailElement.querySelector('.picture__comments');
    const thumbnailLikes = thumbnailElement.querySelector('.picture__likes');

    thumbnailImg.src = photo.url;
    thumbnailComments.textContent = photo.comments.length;
    thumbnailLikes.textContent = photo.likes;

    thumbnailElement.addEventListener('click', () => {
      renderBigPicture(photo);
    });

    thumbnailsContainer.appendChild(thumbnailElement);
  });
}

// Пример данных для миниатюр
const photos = [
  {
    url: 'img/photo1.jpg',
    likes: 10,
    comments: [
      { avatar: 'img/avatar1.svg', name: 'User1', message: 'Great photo!' },
      { avatar: 'img/avatar2.svg', name: 'User2', message: 'Nice shot!' }
    ],
    description: 'Beautiful landscape'
  },
  // Добавьте другие фотографии
];

// Отрисовка миниатюр
renderThumbnails(photos);