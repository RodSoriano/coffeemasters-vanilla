import Api from './Api.js';

export const loadData = async () => {
  app.store.menu = await Api.fetchMenu();
};

export const getProductById = async (id) => {
  if (app.store.menu === null) {
    await loadData();
  }

  for (let category of app.store.menu) {
    const product = category.products.find(product => product.id == id);

    if (product) {
      return product;
    }
  }

  return null;
};
