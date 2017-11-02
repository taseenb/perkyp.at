webpackHotUpdate(0,{

/***/ "./src/components/work/Detail.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createCover = __webpack_require__("./src/utils/createCover.js");

var _createCover2 = _interopRequireDefault(_createCover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Detail = function (_React$Component) {
  _inherits(Detail, _React$Component);

  function Detail(props) {
    _classCallCheck(this, Detail);

    var _this = _possibleConstructorReturn(this, (Detail.__proto__ || Object.getPrototypeOf(Detail)).call(this, props));

    _this.state = {
      seo: props.seo,
      data: props.data
    };

    if (_this.props.isBrowser) {
      _this.updatesize = _this.updatesize.bind(_this);
    }
    return _this;
  }

  _createClass(Detail, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.isBrowser) {
        window.removeEventListener('resize', this.updatesize);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.isBrowser) {
        window.addEventListener('resize', this.updatesize);
        this.updatesize();

        // Cache elements
        this.covers = document.querySelectorAll('#' + this.props.seo + ' .cover'); // fullscreen cover

        // Update sizes for cover elements (if there is any)
        this.updateCovers();
      }
    }
  }, {
    key: 'updateCovers',
    value: function updateCovers() {
      if (this.covers) {
        this.covers.forEach(function (el, i) {
          var $el = $(el);
          var $parent = $el.parent();
          var w = el.width || $el.width(); // original element width
          var h = el.height || $el.width(); // original element height
          var parentW = $parent.width();
          var parentH = $parent.height();
          console.log(parentW, parentH, w, h);

          // Get cover size and position
          var cover = (0, _createCover2.default)(parentW, parentH, w, h);

          // Apply cover size and position to video element
          $el.css(cover);
          if (el instanceof HTMLImageElement || el instanceof HTMLVideoElement || el instanceof HTMLCanvasElement) {
            el.width = cover.width;
            el.height = cover.height;
          }
        });
      }
    }
  }, {
    key: 'updatesize',
    value: function updatesize() {
      // $('.head').height(window.innerHeight)

      if (this.covers) {
        this.updateCovers();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var seo = this.props.seo;
      var data = this.props.data;
      var cssClass = data.template === 'default' ? 'default' : null;

      return _react2.default.createElement('div', {
        id: '' + seo,
        className: 'detail ' + cssClass,
        dangerouslySetInnerHTML: { __html: this.props.data.detail }
      });
    }
  }]);

  return Detail;
}(_react2.default.Component);

Detail.propTypes = {
  seo: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.object.isRequired
};

module.exports = Detail;

/***/ })

})