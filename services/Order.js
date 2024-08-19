import { getProductById } from "./Menu.js";

export const addToCart = async (id) => {
  const product = await getProductById(id);
  const results = app.store.cart.filter(productInCart => productInCart.product.id === id);

  if (results.length == 1) {
    app.store.cart = app.store.cart.map((productInCart) => {
      return productInCart.product.id == id
        ? { ...productInCart, quantity: productInCart.quantity + 1 }
        : productInCart;
    });
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
  }
};

export const removeFromCart = async (id) => {
  app.store.cart = app.store.cart.filter((productInCart) => productInCart.product.id != id);
};
