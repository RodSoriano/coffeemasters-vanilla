import BaseComponent from './BaseComponent.js';

export class OrderPage extends BaseComponent {
  constructor() {
    super();
    let styles = document.createElement('style');

    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(styles);

    this.loadCSS(styles, './components/OrderPage.css');
  }

  connectedCallback() { 
    const template = document.getElementById('order-form-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
  }
}

customElements.define('order-page', OrderPage);
