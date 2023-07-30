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

    setTasks(tasks);
    refreshList();
}

    function refreshList() {
        //todo sort items

        tasks_container.innerHTML = "";

        for (const task of tasks) {
            const taskElement = task_template.contentEditable.cloneNode(true);
            
        }
        
    }


console.log(tasks);

// function addTask() {
//     let taskElement = document.querySelector("task");
//     taskElement.innerHTML = ""
// }