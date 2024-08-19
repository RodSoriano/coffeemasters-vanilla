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

    window.addEventListener('menu-updated', () => this.render());
  }

  render() {
    if (app.store.menu) {
      // clear element before using it
      this.root.querySelector('#menu').innerHTML = '';

      for (let category of app.store.menu) {
        const categoryElement = document.createElement('li');
        // create <ul> html element with empty value
        categoryElement.innerHTML = `
          <h3>${category.name}</h3>
          <ul class="category">
          </ul>
        `;
        this.root.querySelector('#menu').appendChild(categoryElement);

        // create <li> html element and attach it into the <ul> element
        category.products.forEach(product => {
          const item =  document.createElement('product-item');
          // @TODO: need refactoring
          item.dataset.product = JSON.stringify(product);
          categoryElement.querySelector('ul').appendChild(item);
        });
      }
    } else {
      this.root.querySelector('.menu').innerHTML = 'Loading...';
    }
  }
}

customElements.define('menu-page', MenuPage);
