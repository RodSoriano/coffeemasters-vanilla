import BaseComponent from './BaseComponent.js';

export class MenuPage extends BaseComponent {
  constructor() {
    super();
    let styles = document.createElement('style');

    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(styles);

    this.loadCSS(styles, './components/MenuPage.css');
  }

  // when the component is attached to the DOM
  connectedCallback() {
    const template = document.getElementById('menu-page-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
  }
}

customElements.define('menu-page', MenuPage);
