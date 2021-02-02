import { setElement } from './element.js';
import { About } from './about.js';
import { Router } from './routers.js';
import getMatch from './search.js';

const page = [{ page: About, path: `about` }];

function init() {
  setElement();

  const search = document.querySelector('.search');
  const searchBnt = document.querySelector('#searchBnt');

  search.addEventListener('submit', getMatch, false);
  searchBnt.addEventListener('click', getMatch, false);

  const about = { About };
  const router = new Router({ page });
}

init();
