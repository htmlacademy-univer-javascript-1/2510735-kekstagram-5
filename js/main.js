// Импорт функций из других модулей
import { getRandomInt, getRandomElement } from './utils.js';
import { descriptions, commentsTexts, names, generateComment, generatePhotos } from './data.js';
import {renderPhotos} from './pictures.js';

// Генерация массива фотографий
const photos = generatePhotos();

console.log(photos);

// Отрисовка миниатюр
renderPhotos();