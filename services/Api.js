const Api = {
  url: '/data/menu.json',
  fetchMenu: async () => {
    const response = await fetch(Api.url);
    return await response.json();
  },
};

export default Api;
