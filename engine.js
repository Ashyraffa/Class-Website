// References from HTML
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask () {
    const taskText = todoInput.value.trim();
    if (taskText === "") return; // If input is empty then dont add

    const li = document.createElement('li');
    li.textContent = taskText; 



    todoList.appendChild(li);

    todoInput.value = "";

    saveTasks(); 
}
// Simpan kata-kata ke Local Storage:
function saveTasks () {
    const tasks = [];
    const taskItems = todoList.querySelectorAll('li');
    taskItems.forEach(item => {
        tasks.push(item.textContent.replace("X", "").trim());
    });

    localStorage.setItem('todos', JSON.stringify(tasks)); // Save to Local Storage
}

// Load the "kata-kata" from Local Storage to page:
function loadTasks () {
    const tasks = JSON.parse(localStorage.getItem('todos')) || [];
    tasks.forEach(taskText => {
        const li = document.createElement('li');
        li.textContent = taskText;
    })
}

// Event Listener for "Add" button:
addButton.addEventListener('click', addTask);

// Load existing tasks when the page loads:
window.onload = loadTasks;