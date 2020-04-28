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

//unit-tests
function unitTest() {
  mockData = [{id: 1, name: 'my-name'}];
  storageAdd(mockData);
  newMockData = JSON.parse(localStorage.getItem('storage-items'));

  let condition = newMockData[0].id === mockData[0].id && newMockData[0].name === mockData[0].name;

  console.assert(condition, 'function storageAdd not work');
}

unitTest();