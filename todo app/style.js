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