// 1. Определение целого числа
function isInteger(num) {
    return typeof num === "number" && Number.isInteger(num);
}

// 2. Преобразование строки в нижний регистр
function toLower(str) {
    return str.toLowerCase();
}

// 3. Обратное значение
function toggle(value) {
    return -value;
}

// 4. Получение всех ключей объекта
function getKeys(obj) {
    return Object.keys(obj).join(",");
}

// 5. Создание массива из чисел
function createArray(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

// 6. Вывод всех элементов массива в консоль
function logElements(array) {
    array.forEach(element => console.log(element));
}

// 7. Извлечение первых букв строк
function getFirstLetters(array) {
    return array.map(str => str[0]);
}