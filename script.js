const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const category = document.getElementById("category");
const taskContainer = document.getElementById("taskContainer");
const themeBtn = document.getElementById("themeBtn");

let id = 1;
console.log(taskInput.value);
console.log(taskInput.getAttribute("value"));

form.addEventListener("submit", function (e) {

    e.preventDefault();

    if (taskInput.value === "") {
        return;
    }

    const task = document.createElement("div");
    task.classList.add("task");

    task.setAttribute("data-id", id);
    task.setAttribute("data-status", "pending");
    task.setAttribute("data-category", category.value);

    const title = document.createElement("h3");
    const text = document.createTextNode(taskInput.value);
    title.appendChild(text);

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "Complete";
    completeBtn.className = "complete";

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.className = "edit";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "delete";

    task.append(title);
    task.append(completeBtn);
    task.append(editBtn);
    task.append(deleteBtn);

    // prepend()
    taskContainer.prepend(task);

    taskInput.value = "";

    id++;
});

// Event Delegation
taskContainer.addEventListener("click", function (e) {

    let task = e.target.parentElement;

    if (e.target.classList.contains("delete")) {
        // remove()
        task.remove();
    }

    if (e.target.classList.contains("complete")) {

        task.classList.toggle("completed");

        task.dataset.status = "completed";

        console.log(task.getAttribute("data-status"));
    }

    if (e.target.classList.contains("edit")) {

        let oldTitle = task.querySelector("h3");

        let input = document.createElement("input");

        input.value = oldTitle.innerText;

        oldTitle.replaceWith(input);

        input.addEventListener("blur", function () {

            let newTitle = document.createElement("h3");

            newTitle.innerText = input.value;

            input.replaceWith(newTitle);
        });

    }

});

// Theme Toggle
themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        document.body.dataset.theme = "dark";
    }
    else {
        document.body.dataset.theme = "light";
    }

    console.log(document.body.dataset.theme);

});

// Event Bubbling
document.getElementById("child").addEventListener("click", function () {
    console.log("Child");
});

document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent");
});

document.getElementById("grandparent").addEventListener("click", function () {
    console.log("Grandparent");
});

// Event Capturing
document.getElementById("grandparent").addEventListener("click", function () {
    console.log("Capturing Grandparent");
}, true);

document.getElementById("parent").addEventListener("click", function () {
    console.log("Capturing Parent");
}, true);

document.getElementById("child").addEventListener("click", function () {
    console.log("Capturing Child");
}, true);