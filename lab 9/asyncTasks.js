// asyncTasks.js

const ratesDiv = document.getElementById('rates');
const updatedDiv = document.getElementById('updated');

// Асинхронная задача с задержкой
async function runTask(taskName, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${taskName} выполнена`);
        }, delay);
    });
}

// Запуск всех задач (для демонстрации в консоли)
async function runAllTasks() {
    const tasks = [
        { name: "Задача 1", time: 1000 },
        { name: "Задача 2", time: 800 },
        { name: "Задача 3", time: 600 }
    ];

    for (let task of tasks) {
        console.log(`Выполняется: ${task.name}...`);
        const result = await runTask(task.name, task.time);
        console.log(`✓ ${result}`);
    }

    console.log("Все задачи завершены!");
}

// Загрузка постов (демонстрация в консоли)
async function loadPosts() {
    console.log("Загрузка постов...");
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        const posts = await response.json();

        posts.forEach(post => {
            console.log("Пост:", post.title);
        });
    } catch (err) {
        console.error("Ошибка при загрузке постов:", err.message);
    }
}

// Загрузка курсов валют
async function loadExchangeRates() {
    ratesDiv.innerHTML = "Загрузка курсов...";
    updatedDiv.innerHTML = "";

    try {
        const response = await fetch('https://api.nbrb.by/exrates/rates?periodicity=0');
        const rates = await response.json();

        let tableHTML = `
            <table>
                <tr>
                    <th>Код</th>
                    <th>Единиц</th>
                    <th>Курс</th>
                </tr>
        `;

        rates.forEach(rate => {
            tableHTML += `
                <tr>
                    <td>${rate.Cur_Abbreviation}</td>
                    <td>${rate.Cur_Scale}</td>
                    <td>${rate.Cur_OfficialRate}</td>
                </tr>
            `;
        });

        tableHTML += '</table>';
        ratesDiv.innerHTML = tableHTML;

        const now = new Date();
        updatedDiv.textContent = `Обновлено: ${now.toLocaleString()}`;
    } catch (err) {
        ratesDiv.innerHTML = `<div style="color:red;">Ошибка: ${err.message}</div>`;
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    runAllTasks();
    loadPosts();
    loadExchangeRates();
});
