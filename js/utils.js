// Функция генерации случайного числа в заданном диапазоне
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция генерации случайного элемента из массива
export function getRandomElement(array) {
    return array[getRandomInt(0, array.length - 1)];
}