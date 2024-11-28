// bigPicture.js

const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img img');
const likesCount = bigPicture.querySelector('.likes-count');
const commentsCount = bigPicture.querySelector('.comments-count');
const socialComments = bigPicture.querySelector('.social__comments');
const socialCaption = bigPicture.querySelector('.social__caption');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');

// Функция для отрисовки полноразмерного окна
function renderBigPicture(photoData) {
  bigPictureImg.src = photoData.url;
  likesCount.textContent = photoData.likes;
  commentsCount.textContent = photoData.comments.length;
  socialCaption.textContent = photoData.description;

  // Очищаем предыдущие комментарии
  socialComments.innerHTML = '';

  // Удаляем класс hidden у блоков счётчика комментариев и загрузки новых комментариев
  commentCount.classList.remove('hidden');
  commentsLoader.classList.remove('hidden');

  // Открываем окно
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');

  // Загрузка первых 5 комментариев
  loadComments(photoData.comments, 0, 5);
}

// Функция для загрузки комментариев
function loadComments(comments, startIndex, count) {
  const endIndex = startIndex + count;
  const shownComments = comments.slice(startIndex, endIndex);

  shownComments.forEach(comment => {
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

  // Обновляем счётчик показанных комментариев
  commentCount.textContent = `${endIndex} из ${comments.length} комментариев`;

  // Если все комментарии загружены, скрываем кнопку "Загрузить ещё"
  if (endIndex >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
}

// Обработчик загрузки новых комментариев
commentsLoader.addEventListener('click', () => {
  const currentComments = socialComments.children.length;
  loadComments(comments, currentComments, 5);
});

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