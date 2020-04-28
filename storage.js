const STORAGE_ITEMS = 'storage-items';

function storageAdd(itemList) {
  localStorage.setItem(STORAGE_ITEMS, JSON.stringify(itemList));
}

function storageRemove(id) {
  let itemList = storageGetAll();
  itemList = itemList.filter(item => item.id !== id);
  storageAdd(itemList);
}

function storageGetAll() {
  let data = localStorage.getItem(STORAGE_ITEMS);
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
}