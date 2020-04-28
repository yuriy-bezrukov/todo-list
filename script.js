let itemList = [];
let counter = 0;
const elementInputField = document.querySelector('.todo-input-new-item');

function addItem(name) {
  let item = { name: name, id: counter++ };
  itemList.push(item);
  storageAdd(itemList);
  return item;
}

function clearInputField() {
  elementInputField.value = '';
}

function removeItem(id) {
  itemList = itemList.filter(item => item.id === id);
  storageRemove(id);
}

function onAddItem() {
  let name = elementInputField.value;
  addItemToDomAndList(name);
}

function addItemToDomAndList(name) {
  let item = addItem(name);
  addItemDom(item);
}

function addItemDom(item) {
  let template = `
    <div class="todo-item" data-item-id="${item.id}">
      <div class="todo-item__name">
        ${item.name}
      </div>
      <div class="todo-item__close" data-id="${item.id}">
        X
      </div>
    </div>`;
  let wrapperList = document.querySelector('.todo-items');
  wrapperList.innerHTML = template + wrapperList.innerHTML;
  clearInputField();
}

function removeItemDoom(id) {
  let toRemove = document.querySelector(`[data-item-id="${id}"]`);
  toRemove.remove();
}

document.querySelector('.todo-button-save').addEventListener("click", onAddItem);

document.addEventListener('click', function (e) {
  if (e.target && e.target.className === 'todo-item__close') {
    let id = e.target.dataset.id;
    removeItem(+id);
    removeItemDoom(id);
  }
});

function init() {
  storageGetAll().forEach(item => {
    addItemToDomAndList(item.name);
  });
}

init();
