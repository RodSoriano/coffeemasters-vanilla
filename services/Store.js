const Store = {
  menu: null,
  cart: [],
};

const proxyStore = new Proxy(Store, {
  set: (target, property, value) => {
    target[property] = value;

    if (property === 'menu') {
      window.dispatchEvent(new Event('menu-updated'));
    }

    if (property === 'cart') {
      window.dispatchEvent(new Event('cart-updated'));
    }

    return true;
  },
  get: (target, property) => {
    return target[property];
  }
});

export default proxyStore;
