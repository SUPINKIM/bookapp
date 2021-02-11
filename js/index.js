import Router from './router.js';
import getMatch from './search.js';
import Map from './map.js';

const pages = [{ page: Map, path: 'map' }];

function init() {
  const search = document.querySelector('form'),
    mapbox = document.querySelector('.mapbox'),
    mapbtn = document.getElementById('Map');

  search.addEventListener('submit', getMatch, false);
  mapbtn.addEventListener(
    'click',
    (e) => {
      mapbox.classList.remove('hidden');
    },
    false
  );

  const about = { Map };
  const router = new Router({ pages });
}

init();
