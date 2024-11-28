// bigPicture.js

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

// Функция для отрисовки полноразмерного окна
function renderBigPicture(photoData) {
  bigPictureImg.src = photoData.url;
  likesCount.textContent = photoData.likes;
  commentsCount.textContent = photoData.comments.length;
  socialCaption.textContent = photoData.description;

  // Очищаем предыдущие комментарии
  socialComments.innerHTML = '';

  // Добавляем новые комментарии
  photoData.comments.forEach(comment => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const commentPicture = document.createElement('img');
    commentPicture.classList.add('social__picture');
    commentPicture.src = comment.avatar;
    commentPicture.alt = comment.name;
    commentPicture.width = 35;
    commentPicture.height = 35;

    const commentText = document.createElement('p');
    commentText.classList.add('social__text');
    commentText.textContent = comment.message;

    commentElement.appendChild(commentPicture);
    commentElement.appendChild(commentText);
    socialComments.appendChild(commentElement);
  });

  // Скрываем блоки счётчика комментариев и загрузки новых комментариев
  const commentCount = bigPicture.querySelector('.social__comment-count');
  const commentsLoader = bigPicture.querySelector('.social__comments-loader');
  commentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  // Открываем окно
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

// Функция для закрытия окна
function closeBigPicture() {
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

// Обработчик закрытия окна по клику на кнопку
closeButton.addEventListener('click', closeBigPicture);

// Обработчик закрытия окна по нажатию клавиши Esc
document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
});

// Экспортируем функцию для отрисовки полноразмерного окна
export { renderBigPicture };