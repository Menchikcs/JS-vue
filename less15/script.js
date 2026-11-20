let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let taskCounter = document.getElementById("taskCounter");

function updateCounter() {
    let count = taskList.querySelectorAll('li').length;
    taskCounter.textContent = count;
}

function addTask() {
    let text = taskInput.value.trim();
    if (text === "") {
        alert("Please enter a task");
        return;
    }
    let li = document.createElement("li");
    li.classList.add("task");

    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = text;

    let doneBtn = document.createElement("button");
    doneBtn.textContent = "done";

    doneBtn.addEventListener("click", () => {
        li.classList.toggle("done");
    });

    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.classList.add("edit-btn");

    editBtn.addEventListener("click", () => {
        let newText = prompt('Edit the task', span.textContent);
        if (newText === null) {
            return;
        }
        if (newText.trim() === "") {
            alert("Please enter a task");
            return;
        }
        span.textContent = newText.trim();
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        let answer = confirm("Are you sure you want to delete?");
        if (answer) {
            li.remove();
            updateCounter()
        }
    });

    li.append(span, doneBtn, editBtn, deleteBtn);
    taskList.appendChild(li);
    updateCounter()
    //taskList.append(li);
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);