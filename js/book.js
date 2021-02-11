function getBookInfo() {
  const url =
    'https://imap.incheon.go.kr/arcgis28/rest/services/IUIS/IncheonBookMap/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';

  const res = fetch(url)
    .then((resolve) => resolve.json())
    .catch((reject) => new Error(reject));

  return res;
}

function getBookdata(target) {
  const listbox = document.querySelector('.listbox'),
    resultbox = listbox.querySelector('.result-box'),
    listHead = listbox.querySelector('h3');

  listHead.innerHTML = '<div class="loading"></div>';

  while (resultbox.hasChildNodes()) {
    resultbox.removeChild(resultbox.firstChild);
  }

  const bookData = getBookInfo();
  bookData
    .then((resolve) => {
      listHead.innerText = `📚 검색하신 '${target}'에 대한 검색 결과입니다.`;

      resolve.features.forEach((bookStore, index) => {
        let listItems = document.createElement('div'),
          listItem = document.createElement('div');
        listItems.classList.add('card');
        listItems.classList.add('flex');

        listItem.classList.add('flex');
        listItem.classList.add('info');
        if (bookStore.attributes.구분.includes(target) && target !== '') {
          listItem.innerHTML += `<span">${bookStore.attributes.이름}</span>`;
          listItem.innerHTML += `<div class="btn btn-linenone"> ▼ </div>`;
          let about = document.createElement('div');
          about.classList.add('about');
          about.innerHTML += bookStore.attributes.운영시간
            ? `<div>운영시간 : ${bookStore.attributes.운영시간}</div>`
            : `<div>운영시간 정보 없음</div>`;
          about.innerHTML += bookStore.attributes.전화번호
            ? `<div>📞 ${bookStore.attributes.전화번호}</div>`
            : `<div>📞 번호 정보 없음</div>`;
          about.innerHTML += bookStore.attributes.휴무일
            ? `<div>${bookStore.attributes.휴무일} 휴무</div>`
            : `<div>휴무 정보 없음</div>`;
          about.classList.add('hidden');
          listItems.appendChild(listItem);
          listItems.appendChild(about);
          resultbox.appendChild(listItems);
        }
      });

      let searchResult = document.createElement('div');
      searchResult.classList.add('nothing');
      if (!resultbox.hasChildNodes()) {
        searchResult.innerHTML =
          '검색 결과가 없습니다. 다른 검색어를 입력해주세요.';
        resultbox.appendChild(searchResult);
      }

      const moreBtn = listbox.getElementsByClassName('btn');
      for (let i = 0; i < moreBtn.length; i++) {
        moreBtn[i].addEventListener(
          'click',
          (e) => {
            let findHidden = e.target.parentNode.nextElementSibling;
            findHidden.classList.toggle('hidden');
            e.target.innerText = e.target.innerText === '▼' ? '▲' : '▼';
          },
          false
        );
      }
    })
    .catch((reject) => new Error(reject));
}

export { getBookdata, getBookInfo };
