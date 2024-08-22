import { getProductById } from '../services/Menu.js';
import { addToCart } from '../services/Order.js';
import BaseComponent from './BaseComponent.js';

export class DetailsPage extends BaseComponent {
  constructor() {
    super();

    this.root = this.attachShadow({ mode: 'open' });

    const template = document.getElementById('details-page-template');
    const content = template.content.cloneNode(true);
    const styles = document.createElement('style');
    this.root.appendChild(styles);
    this.root.appendChild(content);

    this.loadCSS(styles, '/components/DetailsPage.css');
  }

  async renderData() {
    if (this.dataset.productId) {
      this.product = await getProductById(this.dataset.productId);

      this.root.querySelector('h2').textContent = this.product.name;
      this.root.querySelector('img').src = `/data/images/${this.product.image}`;
      this.root.querySelector('.description').textContent = this.product.description;
      this.root.querySelector('.price').textContent = `$${this.product.price}`;

      this.root.querySelector('button').addEventListener('click', () => {
        addToCart(this.product.id);
        app.router.go('/order');
      });
    } else {
      alert('Invalid Product ID')
    }
  }

  connectedCallback() {
    this.renderData();
  }
}

customElements.define('details-page', DetailsPage);
