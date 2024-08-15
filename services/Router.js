const initialize = () => {
  // Prevent default state and add the route when using the anchor tags in the index.html
  document.querySelectorAll('a.navlink').forEach(a => {
    a.addEventListener('click', event => {
      event.preventDefault();

      const path = event.target.getAttribute('href');
      Router.go(path);
    });

    // Event handler for URL changes like the going back button
    window.addEventListener('popstate', event => {
      Router.go(event.state.path, false);
    });

    // Check the initial URL
    Router.go(location.pathname);
  });
}

const navigateTo = (path, addToHistory = true) => {
  if (addToHistory) {
    history.pushState({ path }, null, path);
  }

  let pageElement = null;
  switch (path) {
    case '/':
      pageElement = document.createElement('h1');
      pageElement.textContent = 'Menu';
      break;
    case '/order':
      pageElement = document.createElement('h1');
      pageElement.textContent = 'Your Order';
      break;
    default:
      if (path.startsWith('/product/')) {
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Details';

        const paramId = path.substring(path.lastIndexOf('/') + 1);
        pageElement.dataset.id = paramId;
      }
  }

  // clean and append pageElement to the current main
  if (pageElement) {
    let mainCache = document.querySelector('main');
    mainCache.innerHTML = '';
    mainCache.appendChild(pageElement);

    window.scrollX = 0;
    window.scrollY = 0;
  }
}

const Router = {
  init: initialize,
  go: navigateTo,
}

export default Router;
