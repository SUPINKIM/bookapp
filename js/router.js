class Router {
  nowPage = '';

  constructor({ pages }) {
    this.map = document.getElementById('map-box');

    window.onhashchange = () => {
      this.nowPage = window.location.hash.replace('#', '');

      const page = pages.find((page) => page.path === this.nowPage);
      const Page = page.page;
      const currentPage = new Page();

      this.map.append(currentPage.render());
    };
  }
}

export default Router;
