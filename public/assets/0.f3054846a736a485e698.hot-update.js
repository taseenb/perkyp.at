webpackHotUpdate(0,{

/***/ "./src/support.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _modernizr = __webpack_require__("./.modernizrrc");

var _modernizr2 = _interopRequireDefault(_modernizr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkSupport = function checkSupport(resolve, reject) {
  // Browser or Server?
  var isBrowser = typeof window !== 'undefined';

  if (isBrowser) {
    // Check if it's mobile
    _modernizr2.default.on('videoautoplay', function (result) {
      var isMobile = !result;
      if (window.innerWidth < 1024 && _modernizr2.default.touchevents) {
        isMobile = true;
      }
      if (isMobile) {
        document.documentElement.className += ' mobile';
      }

      resolve({ isMobile: isMobile, isBrowser: isBrowser });
    });
  } else {
    // Node
    resolve({ isMobile: false, isBrowser: false });
  }

  console.log('dsdsf');

  // Update vh on resize (fix for Safari ios)
  // window.addEventListener('resize', function () {
  //   const w = window.innerWidth
  //   const h = window.innerHeight
  //   $('.vh100').height(h)
  //   $('.vw100').height(w)
  //   $('.abs-fullscreen, .rel-fullscreen')
  //     .height(h)
  //     .width(w)
  // })
};

module.exports = new Promise(checkSupport);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(checkSupport, 'checkSupport', '/Users/Shared/htdocs/portfolios/perkypat-node-static/src/support.js');
}();

;

/***/ })

})