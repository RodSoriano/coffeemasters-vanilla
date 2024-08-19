import BaseComponent from './BaseComponent.js';

export class OrderPage extends BaseComponent {
  #user = {
    name: '',
    phone: '',
    email: '',
  };

  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });

    const section = document.createElement('section');
    const styles = document.createElement('style');
    this.root.appendChild(section);
    this.root.appendChild(styles);

    this.loadCSS(styles, '/components/OrderPage.css');
  }

  render() {
    let section = this.root.querySelector('section');

    if (app.store.cart.length == 0) {
      section.innerHTML = `
        <p class="empty">Your order is empty</p>
      `;
    } else {
      let html = `
        <h2>Your Order</h2>
        <ul>
        </ul>
      `;
      section.innerHTML = html;

      const template = document.getElementById('order-form-template');
      const content = template.content.cloneNode(true);
      section.appendChild(content);

      let total = 0;

      for (let prodInCart of app.store.cart) {
        const item = document.createElement('cart-item');
        item.dataset.item = JSON.stringify(prodInCart);
        this.root.querySelector('ul').appendChild(item);

        total += prodInCart.quantity * prodInCart.product.price;
      }
      this.root.querySelector('ul').innerHTML += `
        <li>
          <p class="total">Total</p>
          <p class="price-total">$${total.toFixed(2)}</p>
        </li>
      `;
    }

    this.setFormBindings(this.root.querySelector('form'));
  }

  connectedCallback() {
    window.addEventListener('cart-updated', () => {
      this.render();
    });

    this.render();
  }

  setFormBindings(form) {
    // @TODO: need refactoring and send data to the server
    // clean UI and show a message to the user
    form.addEventListener('submit', event => {
      event.preventDefault();
      alert(`Thanks for your order ${this.#user.name}!`);
      this.#user.name = '';
      this.#user.phone = '';
      this.#user.email = '';

      app.store.cart = [];
    });

    // Set double data binding
    this.#user = new Proxy(this.#user, {
      set: (target, property, value) => {
        target[property] = value;
        form.elements[property].value = value;
        return true;
      }
    });

    Array.from(form.elements).forEach((element) => {
      element.addEventListener('change', () => {
        this.#user[element.name] = element.value;
      });
    });
  }
}

customElements.define('order-page', OrderPage);
