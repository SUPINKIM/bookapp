'use strict';

var _element = require('./element.js');

var _about = require('./about.js');

var _routers = require('./routers.js');

var _search = require('./search.js');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var page = [{ page: _about.About, path: 'about' }];

function init() {
  (0, _element.setElement)();

  var search = document.querySelector('.search');
  var searchBnt = document.querySelector('#searchBnt');

  search.addEventListener('submit', _search2.default, false);
  searchBnt.addEventListener('click', _search2.default, false);

  var about = { About: _about.About };
  var router = new _routers.Router({ page: page });
}

init();
