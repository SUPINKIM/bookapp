import { getBookdata } from './book.js';

async function getMatch(e) {
  e.preventDefault();
  const targetLocal = document.getElementById('searchBar').value;
  return getBookdata(targetLocal);
}

export default getMatch;
