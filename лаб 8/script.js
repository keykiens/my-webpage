// ===== ToDo =====

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

const filterAll = document.getElementById("filterAll");
const filterCompleted = document.getElementById("filterCompleted");
const filterUncompleted = document.getElementById("filterUncompleted");

let tasks = [];
let currentFilter = "all";

if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    renderTasks();
}

addTaskBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return;

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();

    taskInput.value = "";
});

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = "";

    let filteredTasks = tasks;

    if (currentFilter === "completed") {
        filteredTasks = tasks.filter(t => t.completed);
    } else if (currentFilter === "uncompleted") {
        filteredTasks = tasks.filter(t => !t.completed);
    }

    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        if (task.completed) li.classList.add("completed");

        const span = document.createElement("span");
        span.textContent = task.text;

        span.addEventListener("click", () => {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Удалить";
        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

filterAll.addEventListener("click", () => {
    currentFilter = "all";
    setActiveFilter(filterAll);
    renderTasks();
});

filterCompleted.addEventListener("click", () => {
    currentFilter = "completed";
    setActiveFilter(filterCompleted);
    renderTasks();
});

filterUncompleted.addEventListener("click", () => {
    currentFilter = "uncompleted";
    setActiveFilter(filterUncompleted);
    renderTasks();
});

function setActiveFilter(activeBtn) {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    activeBtn.classList.add("active");
}

// ===== БУРГЕР-МЕНЮ =====

const burgerCheckbox = document.getElementById("burger-checkbox");
const menuList = document.querySelector(".menu-list");
const menuItems = document.querySelectorAll(".menu-item");

burgerCheckbox.addEventListener("change", () => {
    if (burgerCheckbox.checked) {
        menuList.classList.add("menu-open");
    } else {
        menuList.classList.remove("menu-open");
    }
});

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        burgerCheckbox.checked = false;
        menuList.classList.remove("menu-open");
    });
});
