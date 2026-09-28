export const getIdsFromLocalStorage = (storage) => {
  return JSON.parse(localStorage.getItem(storage)) || [];
};

export const setIdsToLocalStorage = (ids, storage) => {
  //   const cartIds = JSON.parse(localStorage.getItem(storage));

  localStorage.setItem(storage, JSON.stringify(ids));
};
