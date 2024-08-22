import { addToCart } from '../services/Order.js';
import BaseComponent from './BaseComponent.js';

export default class ProductItem extends BaseComponent {
  constructor() {
    super();
  }

  connectedCallback() {
    const template = document.getElementById('product-item-template');
    const content = template.content.cloneNode(true);

    this.appendChild(content);

    const product = JSON.parse(this.dataset.product);

    // create the product item
    // @TODO: need refactoring
    this.querySelector('h4').textContent = product.name;
    this.querySelector('p.price').textContent = `$${product.price.toFixed(2)}`;
    this.querySelector('img').src = `data/images/${product.image}`;
    this.querySelector('img').alt = product.name;

    this.querySelector('a').addEventListener('click', event => {
      if (event.target.tagName.toLowerCase() === 'button') {
        addToCart(product.id);
      } else {
        app.router.go(`/product/${product.id}`);
      }

      event.preventDefault();
    });
  }
}

customElements.define('product-item', ProductItem);
