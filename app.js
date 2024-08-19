import proxyStore from './services/Store.js';
import Router from './services/Router.js';
import { loadData } from './services/Menu.js';

// import web components
import ProductItem from './components/ProductItem.js';
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

window.addEventListener('cart-updated', () => {
  const badge = document.getElementById('badge');
  const quantity = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);

  badge.textContent = quantity;
  badge.hidden = quantity == 0;
});
