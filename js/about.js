import { getBookInfo } from './book.js';

class About {
  constructor() {
    this.index = window.location.hash.indexOf(':');
    this.nowPage = window.location.hash.slice(this.index + 1);
  }

  render() {
    const bookInfo = getBookInfo();
    const about = document.getElementById('app');
    const listItem = document.createElement('div');
    listItem.classList.add('about');
    bookInfo
      .then((resolve) => {
        resolve.features.find((bookStore, index) => {
          if (index.toString() === this.nowPage) {
            if (bookStore.attributes.이름 !== null) {
              listItem.innerHTML += `<div>${bookStore.attributes.이름}</div>`;
            }
            if (bookStore.attributes.주소 !== null) {
              listItem.innerHTML += `<div>${bookStore.attributes.주소}</div>`;
            }
            if (bookStore.attributes.운영시간 !== null) {
              listItem.innerHTML += `<div>운영시간 : ${bookStore.attributes.운영시간}</div>`;
            }
            if (bookStore.attributes.전화번호 !== null) {
              listItem.innerHTML += `<div> 📞 ${bookStore.attributes.전화번호}</div>`;
            }
            if (bookStore.attributes.휴무일 !== null) {
              listItem.innerHTML += `<div>${bookStore.attributes.휴무일} 휴무</div>`;
            }
          }
        });
        about.appendChild(listItem);
      })
      .catch((reject) => new Error(reject));
    return `<div id="back"> <a href=""> 🔙 </a></div> `;
  }
}
export { About };
