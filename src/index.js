const tasks_container = document.getElementById("tasks");
const task_template = document.getElementById("taskTemplate");
const add_button = document.getElementById("add");

function getTasks() {
  const value = localStorage.getTask("todo");
  
  console.log(value);
}


getTasks();

// function addTask() {
//     let taskElement = document.querySelector("task");
//     taskElement.innerHTML = ""
// }