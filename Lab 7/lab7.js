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
    return Object.keys(obj).join(", ");
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


// -------------------
// Примеры вызова функций
// -------------------
console.log("1. isInteger:");
console.log(isInteger(5));       // true
console.log(isInteger("echkere"));     // false

console.log("\n2. toLower:");
console.log(toLower("HELLO WORLD")); // "hello world"

console.log("\n3. toggle:");
console.log(toggle(true));       // false
console.log(toggle(false));      // true

console.log("\n4. getKeys:");
console.log(getKeys({a:1, b:2, c:3})); // "a, b, c"

console.log("\n5. createArray:");
console.log(createArray(1, 5));  // [1,2,3,4,5]

console.log("\n6. logElements:");
logElements(["cat","dog","bird"]); // выводит каждое слово в консоль

console.log("\n7. getFirstLetters:");
console.log(getFirstLetters(["apple","banana","cherry"])); // ["a","b","c"]
