// Импорт вспомогательных функций
import { getRandomInt, getRandomElement } from './utils.js';

// Массивы генерации случайных данных
export const descriptions = [
    'Закат на пляже',
    'Горный пейзаж',
    'Городской пейзаж',
    'Природа',
    'Животные',
    'Пейзаж',
    'Архитектура',
    'Люди',
    'Спорт',
    'Еда',
    'Путешествия',
    'Море',
    'Лес',
    'Гора',
    'Озеро',
    'Река',
    'Город',
    'Деревня',
    'Автомобили',
    'Мотоциклы',
    'Самолеты',
    'Корабли',
    'Поезда',
    'Велосипеды',
    'Скейтборды'
];

export const commentsTexts = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

export const names = [
    'Артём',
    'Мария',
    'Иван',
    'Елена',
    'Дмитрий',
    'Ольга',
    'Сергей',
    'Анна',
    'Александр',
    'Наталья',
    'Павел',
    'Ирина',
    'Николай',
    'Татьяна',
    'Виктор',
    'Людмила',
    'Михаил',
    'Екатерина',
    'Владимир',
    'София'
];

// Функция генерации случайного комментария
export function generateComment() {
    return {
        id: getRandomInt(1, 1000),
        avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
        message: getRandomElement(commentsTexts),
        name: getRandomElement(names)
    };
}

// Функция генерации массива фотографий
export function generatePhotos() {
    const photos = [];
    for (let i = 1; i <= 25; i++) {
        const comments = [];
        const commentsCount = getRandomInt(0, 30);
        for (let j = 0; j < commentsCount; j++) {
            comments.push(generateComment());
        }

        photos.push({
            id: i,
            url: `photos/${i}.jpg`,
            description: getRandomElement(descriptions),
            likes: getRandomInt(15, 200),
            comments: comments
        });
    }
    return photos;
}