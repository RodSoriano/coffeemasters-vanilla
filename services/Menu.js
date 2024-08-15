import Api from './Api.js';

export const loadData = async () => {
  app.store.menu = await Api.fetchMenu();
};
