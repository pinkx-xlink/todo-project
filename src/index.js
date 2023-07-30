const tasks_container = document.getElementById("tasks");
const task_template = document.getElementById("taskTemplate");
const add_button = document.getElementById("add");

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
}

console.log(tasks);

// function addTask() {
//     let taskElement = document.querySelector("task");
//     taskElement.innerHTML = ""
// }