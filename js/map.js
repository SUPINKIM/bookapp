import { getBookInfo } from './book.js';

class Map {
  constructor() {
    //this.book = getBookInfo();
    //this.book.then((re) => console.log(re));
    this.container = document.getElementById('map');
    this.options = {
      center: new kakao.maps.LatLng(37.474746100000004, 126.6488051),
      level: 3,
    };
    this.map = new kakao.maps.Map(this.container, this.options);
  }

  render() {
    return '';
  }
}

export default Map;
