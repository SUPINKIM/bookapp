import { getBookdata } from './book.js';

const body = document.querySelector('body');
const search = body.querySelector('form'),
  input = search.querySelector('input');

function getMatch(e) {
  e.preventDefault();
  let targetLocal = input.value;
  input.value = '';
  if (targetLocal) {
    return getBookdata(targetLocal);
  } else {
    search.parentNode.classList.add('notice');
    setTimeout(() => {
      search.parentNode.classList.remove('notice');
    }, 1000);
  }
}

export default getMatch;
