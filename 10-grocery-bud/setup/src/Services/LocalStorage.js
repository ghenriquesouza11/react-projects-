export const setItem = (keyName, item) => {
  localStorage.setItem(keyName, JSON.stringify(item));
};

export const getItem = (keyName) => {
  const item = JSON.parse(localStorage.getItem(keyName));
  if (item === null) {
    return [];
  }
  return item;
};
