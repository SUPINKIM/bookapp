class Router {
  nowPage = '';
  constructor({ page }) {
    this.section = document.getElementById('app');

    window.onhashchange = () => {
      this.page = page;
      this.nowPage = window.location.hash.replace('#', '');
      this.page[0].path = this.nowPage;
      const Page = this.page.find((p) => p.path === this.nowPage);
      const About = Page.page;
      const currentPage = new About();
      this.section.innerHTML = '';
      this.section.innerHTML += currentPage.render();
    };
  }
}

export { Router };
