# todo
Ex03 To-Do List using JavaScript

Date:17.08.2026

Reg no : 212224040076
AIM
To create a To-do Application with all features using JavaScript.

ALGORITHM
STEP 1
Build the HTML structure (index.html).

STEP 2
Style the App (style.css).

STEP 3
Plan the features the To-Do App should have.

STEP 4
Create a To-do application using Javascript.

STEP 5
Add functionalities.

STEP 6
Test the App.

STEP 7
Open the HTML file in a browser to check layout and functionality.

STEP 8
Fix styling issues and refine content placement.

STEP 9
Deploy the website.

STEP 10
Upload to GitHub Pages for free hosting.

PROGRAM
```
HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo Application</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <div class="todo-container">

        <h1>My Todo List</h1>
        <p>Organize your tasks easily</p>

        <div class="input-box">
            <input type="text" id="taskInput" placeholder="Enter a task...">
            <button onclick="addTask()">Add</button>
        </div>

        <div class="filters">
            <button onclick="showTasks('all')">All</button>
            <button onclick="showTasks('active')">Active</button>
            <button onclick="showTasks('completed')">Completed</button>
        </div>

        <ul id="taskList"></ul>

        <div class="bottom">
            <span id="taskCount">0 tasks</span>
            <button onclick="clearCompleted()">Clear Completed</button>
        </div>

    </div>

    <script src="script.js"></script>

</body>
</html>

css

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #667eea, #764ba2);
}

.todo-container {
    width: 450px;
    background: white;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

h1 {
    text-align: center;
    color: #333;
}

p {
    text-align: center;
    color: #777;
    margin: 8px 0 25px;
}

.input-box {
    display: flex;
    gap: 10px;
}

.input-box input {
    flex: 1;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    outline: none;
}

.input-box button {
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    background: #667eea;
    color: white;
    cursor: pointer;
}

.filters {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 20px 0;
}

.filters button {
    padding: 8px 15px;
    border: none;
    border-radius: 6px;
    background: #eee;
    cursor: pointer;
}

.filters button:hover {
    background: #667eea;
    color: white;
}

ul {
    list-style: none;
}

li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px;
    margin-bottom: 10px;
    background: #f5f5f5;
    border-radius: 8px;
}

li span {
    flex: 1;
    margin-left: 10px;
}

.completed {
    text-decoration: line-through;
    color: #999;
}

.actions button {
    border: none;
    background: none;
    cursor: pointer;
    margin-left: 8px;
}

.edit {
    color: #667eea;
}

.delete {
    color: red;
}

.bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    font-size: 14px;
}

.bottom button {
    border: none;
    background: none;
    color: red;
    cursor: pointer;
}

js

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {

    let input = document.getElementById("taskInput");
    let text = input.value.trim();

    if (text === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    input.value = "";

    saveTasks();
    displayTasks(tasks);
}

function displayTasks(taskArray) {

    let list = document.getElementById("taskList");

    list.innerHTML = "";

    taskArray.forEach((task, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            <input type="checkbox"
                ${task.completed ? "checked" : ""}
                onchange="toggleTask(${index})">

            <span class="${task.completed ? "completed" : ""}">
                ${task.text}
            </span>

            <div class="actions">
                <button class="edit" onclick="editTask(${index})">
                    Edit
                </button>

                <button class="delete" onclick="deleteTask(${index})">
                    Delete
                </button>
            </div>
        `;

        list.appendChild(li);
    });

    updateCount();
}

function toggleTask(index) {

    tasks[index].completed = !tasks[index].completed;

    saveTasks();
    displayTasks(tasks);
}

function deleteTask(index) {

    tasks.splice(index, 1);

    saveTasks();
    displayTasks(tasks);
}

function editTask(index) {

    let newText = prompt("Edit your task:", tasks[index].text);

    if (newText !== null && newText.trim() !== "") {

        tasks[index].text = newText.trim();

        saveTasks();
        displayTasks(tasks);
    }
}

function showTasks(type) {

    if (type === "active") {

        displayTasks(
            tasks.filter(task => !task.completed)
        );

    } else if (type === "completed") {

        displayTasks(
            tasks.filter(task => task.completed)
        );

    } else {

        displayTasks(tasks);
    }
}

function clearCompleted() {

    tasks = tasks.filter(task => !task.completed);

    saveTasks();
    displayTasks(tasks);
}

function updateCount() {

    let activeTasks = tasks.filter(
        task => !task.completed
    ).length;

    document.getElementById("taskCount").innerText =
        activeTasks + " tasks remaining";
}

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}

displayTasks(tasks);
```
OUTPUT
![alt text](<Screenshot 2026-08-17 113728.png>)

RESULT
The program for creating To-do list using JavaScript is executed successfully.