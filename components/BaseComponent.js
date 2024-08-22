export default class BaseComponent extends HTMLElement {
  constructor() {
    super();
  }

  async loadCSS(styleElement, pathToCSSFile) {
    const request = await fetch(pathToCSSFile);
    const css = await request.text();
    styleElement.textContent = css;
  }
}
