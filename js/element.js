function setElement() {
  const bookArray = document.querySelector('.bookList');
  const listBox = document.createElement('ul');
  bookArray.appendChild(listBox);
}

export { setElement };
