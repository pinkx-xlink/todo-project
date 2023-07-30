const ITEMS_CONTAINER = document.getElementById("items");
const ITEM_TEMPLATE = document.getElementById("itemTemplate");
const ADD_BUTTON = document.getElementById("add");

let Items = getItems();

function getItems() {
  const value = localStorage.getItem("todo-test") || "[]";
  
  return JSON.parse(value);
}

function setItems(items) {
    const itemsJSON.stringify(items);

    localStorage.setItem("todo-test", itemsJson);
}

function addItem() {
    items.unshift({
        description: "",
        completed: false
    });

    setItems(items);
    refreshList();
}

function refreshList() {
    //todo sort items

    ITEMS_CONTAINER.innerHTML = "";

    for (const item of items) {
        const itemElement = ITEM_TEMPLATE.contentEditable.cloneNode(true);
        const descriptionInput = innerElement.querySelector(".item-description");
        const completeInput = innerElement.querySelector(".item-complete");

    descriptionInput.value = item.description;
    completeInput.checked = item.complete;

    ITEMS_CONTAINER.append(itemElement);
    }
}

ADD_BUTTON.addEventListener("click", () => {
    addItem();
});

refreshList();

// function addTask() {
//     let taskElement = document.querySelector("task");
//     taskElement.innerHTML = ""
// }