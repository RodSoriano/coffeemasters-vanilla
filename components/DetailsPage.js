import BaseComponent from './BaseComponent.js';

export class DetailsPage extends BaseComponent {
  constructor() {
    super();
    let styles = document.createElement('style');

    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(styles);

    this.loadCSS(styles, './components/DetailsPage.css');
  }

  connectedCallback() {
    const template = document.getElementById('details-page-template');
    const content = template.content.cloneNode(true);
    this.root.appendChild(content);
  }
}

customElements.define('details-page', DetailsPage);
