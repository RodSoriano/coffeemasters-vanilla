import Store from './services/Store.js';
import Router from './services/Router.js';
import { loadData } from './services/Menu.js';

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
  app.router.init();
  loadData();
});
