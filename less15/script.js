let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");
let taskCounter = document.getElementById("taskCounter");

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

    let editBtn = document.createElement("button");
    editBtn.textContent = "edit";
    editBtn.classList.add("edit-btn");

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("delete-btn");

    li.append(span, doneBtn, editBtn, deleteBtn);
    taskList.appendChild(li);
    //taskList.append(li);
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);