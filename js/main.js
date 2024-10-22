// Импорт функций из других модулей
import { getRandomInt, getRandomElement } from './utils.js';
import { descriptions, commentsTexts, names, generateComment, generatePhotos } from './data.js';

// Генерация массива фотографий
const photos = generatePhotos();

console.log(photos);