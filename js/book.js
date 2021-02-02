function getBookdata(target) {
  const url =
    'https://imap.incheon.go.kr/arcgis28/rest/services/IUIS/IncheonBookMap/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';

  const listBox = document.querySelector('ul');
  const result = document.querySelector('.result');
  result.classList.add('show');

  result.firstElementChild.innerText = `Loading...🔄`;

  while (listBox.hasChildNodes()) {
    listBox.removeChild(listBox.firstChild);
  }

  const res = fetch(url)
    .then((response) => response.json())
    .then((resolve) => {
      result.firstElementChild.innerText = `📚 검색하신 '${target}'에 대한 검색 결과입니다.`;

      resolve.features.forEach((bookStore, index) => {
        let listItem = document.createElement('li');
        if (bookStore.attributes.구분.includes(target) && target !== '') {
          listItem.innerHTML = `<a href="#about:${index}">${bookStore.attributes.이름}</a>`;
          listBox.appendChild(listItem);
        }
      });

      let searchResult = document.createElement('li');
      !listBox.hasChildNodes()
        ? (searchResult.innerHTML = `...검색 결과가 없습니다. 다른 검색어를 입력해주세요.`)
        : (searchResult.innerHTML = `...총 ${listBox.childElementCount}개 검색되었습니다. `);
      listBox.appendChild(searchResult);
    })
    .catch((error) => new Error(error));
}

function getBookInfo() {
  const url =
    'https://imap.incheon.go.kr/arcgis28/rest/services/IUIS/IncheonBookMap/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json';

  const res = fetch(url)
    .then((resolve) => resolve.json())
    .catch((reject) => new Error(reject));

  return res;
}

export { getBookdata, getBookInfo };
