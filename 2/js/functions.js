// Функция для проверки длины строки
function checkStringLength(str, maxLength) {
    return str.length <= maxLength;
}

// Функция для проверки, является ли строка палиндромом
function isPalindrome(str) {
    // Убираем пробелы и приводим к нижнему регистру
    str = str.replace(/\s+/g, '').toLowerCase();
    // Проверяем, является ли строка палиндромом
    return str === str.split('').reverse().join('');
}

// Тестирование функций
console.log(checkStringLength('проверяемая строка', 20)); // true
console.log(checkStringLength('проверяемая строка', 18)); // true
console.log(checkStringLength('проверяемая строка', 10)); // false

console.log(isPalindrome('топот')); // true
console.log(isPalindrome('ДовОд')); // true
console.log(isPalindrome('Кекс')); // false
console.log(isPalindrome('Лёша на полке клопа нашёл')); // true