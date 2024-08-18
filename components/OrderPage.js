export class OrderPage extends HTMLElement {
  constructor() {
    super();

    console.log('hola desde order page :D');
  }
}

customElements.define('order-page', OrderPage);
