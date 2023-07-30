const ITEMS_CONTAINER = document.getElementById("tasks");
const ITEM_TEMPLATE = document.getElementById("taskTemplate");
const ADD_BUTTON = document.getElementById("add");

let Tasks = getTasks();

function getTasks() {
  const value = localStorage.getTask("todo-test") || "[]";
  
  return JSON.parse(value);
}

function setTasks(tasks) {
    const tasksJSON.stringify(tasks);

    localStorage.setTask("todo-test", tasksJson);
}

function addTask() {
    tasks.unshift({
        description: "",
        completed: false
    });

    setTasks(tasks);
    refreshList();
}

function refreshList() {
    //todo sort items

    ITEMS_CONTAINER.innerHTML = "";

    for (const task of tasks) {
        const taskElement = task_template.contentEditable.cloneNode(true);
        const descriptionInput = innerElement.querySelector(".task-description");
        const completeInput = innerElement.querySelector(".task-complete");

    descriptionInput.value = task.description;
    completeInput.checked = task.complete;

    ITEMS_CONTAINER.append(taskElement);
    }
}

ADD_BUTTON.addEventListener("click", () => {
    addTask();
});

refreshList();

// function addTask() {
//     let taskElement = document.querySelector("task");
//     taskElement.innerHTML = ""
// }