import proxyStore from './services/Store.js';
import Router from './services/Router.js';
import { loadData } from './services/Menu.js';

// import web components
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import { MenuPage } from './components/MenuPage.js';

window.app = {};
app.store = proxyStore;
app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
  app.router.init();
  loadData();
});
