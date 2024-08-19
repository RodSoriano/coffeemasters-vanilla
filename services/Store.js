const Store = {
  menu: null,
  cart: [],
};

const proxyStore = new Proxy(Store, {
  set: (target, property, value) => {
    target[property] = value;

    if (property === 'menu') {
      window.dispatchEvent(new Event('menu-updated', { detail: value }));
    }

    if (property === 'cart') {
      window.dispatchEvent(new Event('cart-updated', { detail: value }));
    }

    return true;
  },
});

export default proxyStore;
