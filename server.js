/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const env = process.env;

module.exports = {
  env: env.NODE_ENV || 'development',
  // port: env.PORT || 7777,
  port: 7777, //  process.env.PORT in Heroku is used by NGINX!
  host: env.HOST || '0.0.0.0'
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ListItem = __webpack_require__(19);
const Detail = __webpack_require__(20);

class Work extends _react2.default.Component {
  render() {
    if (this.props.isDetail) {
      const seo = this.props.router.match.params.seo;
      const work = this.props.works.find(w => w.seo === seo);

      return _react2.default.createElement(Detail, _extends({ seo: seo, data: work }, this.props));
    } else {
      return _react2.default.createElement(ListItem, this.props);
    }
  }
}

Work.propTypes = {
  isDetail: _propTypes2.default.bool.isRequired,
  router: _propTypes2.default.object,
  works: _propTypes2.default.array
};

module.exports = Work;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// require('source-map-support').install()
const config = __webpack_require__(2);
const app = __webpack_require__(10);
const debug = __webpack_require__(3)('app:www');
const http = __webpack_require__(38);
const fs = __webpack_require__(39);

const port = normalizePort(config.port);
app.set('port', port);

const server = http.createServer(app);

server.listen(app.get('port'));
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error; //
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  console.log(error.code);

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);

  // NGINX configuration
  if (process.env.DYNO) {
    console.log('This is on Heroku..!');
    fs.openSync('/tmp/app-initialized', 'w');
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const config = __webpack_require__(2);
const state = __webpack_require__(6);
const express = __webpack_require__(7);
const compression = __webpack_require__(11);
const path = __webpack_require__(12);
const debug = __webpack_require__(3)('app:main'); // Site router
const siteRouter = __webpack_require__(13);

// Data
const initialData = __webpack_require__(26);

const app = express();

app.set('port', process.env.PORT || 8088);

app.enable('trust proxy'); // needed to correctly detext http or https in requests

app.set('view engine', 'ejs');
var viewPath = path.resolve(__dirname, 'src/server/views');
app.set('views', viewPath);

if (config.env === 'production') {
  app.use(compression());
  // app.enable('view cache')
}

/**
 * Setup the state for the current request.
 * Check for query string '?invalidate=1' to change the state
 * in order to invalidate the cache on static files.
 */
app.use((req, res, next) => {
  // Update state with the initial state
  Object.keys(initialData).forEach(k => {
    state[k] = initialData[k];
  });

  // Invalidate cache
  if (req.query.invalidate === '1') {
    state.invalidateCache = true;
    debug('cache invalidation enabled');
    setTimeout(() => {
      state.invalidateCache = false;
      debug('cache invalidation disabled');
    }, 10000);
  }

  next();
});

// Static files w cache
app.use('/favicon.ico', express.static('public/favicon.ico'));
app.use('/assets', express.static('public/assets'));

// React app (routing is managed by React router, including 404)
app.use('/', siteRouter);

module.exports = app;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const config = __webpack_require__(2);
const state = __webpack_require__(6);
const express = __webpack_require__(7);
const debug = __webpack_require__(3)('app:site');

// Data
// const initialData = require('../../data/initialData')

// React
const React = __webpack_require__(0);
const ReactDOMServer = __webpack_require__(14);
const StaticRouter = __webpack_require__(4).StaticRouter;
const App = __webpack_require__(15);

// Router
const router = express.Router();
router.get('*', (req, res) => {
  const context = {};

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    // Add the requested id if present
    state.requestedId = req.params.id;

    // Base url
    const protocol = req.protocol; // protocol = http or https
    const hostname = req.headers.host; // hostname = 'localhost:8080'
    const path = req.path; // pathname = '/MyApp'
    const url = protocol + '://' + hostname + '/';

    // Is it a work?
    const worksNames = state.works.map(w => w.seo);
    let workId = req.url.indexOf('/work/') > -1 ? req.url.replace('/work/', '') : null;
    workId = workId && worksNames.indexOf(workId) > -1 ? workId : null;
    const workIdx = workId && worksNames.indexOf(workId);
    const workData = workId ? state.works[workIdx] : null;

    // Is it a static page?
    const pagesNames = Object.keys(state.pages);
    let pageId = path.replace('/', '');
    pageId = pageId && pagesNames.indexOf(pageId) > -1 ? pageId : null;

    // Get the right ogImage
    let ogImage = state.ogImage;
    if (workId) {
      ogImage = `assets/work/${workData.seo}/main.jpg`;
    } else if (pageId) {
      ogImage = `assets/pages/${pageId}/main.jpg`;
    }

    debug(url, workId, pageId, context);

    // Update state with current request
    state.protocol = protocol;
    state.hostname = hostname;
    state.path = path;
    state.url = url;
    state.workId = workId;
    state.description = workId ? workData.intro : state.ogDescription;
    state.workName = workId ? workData.name + ' - ' : '';
    state.pageId = pageId;
    state.ogImage = ogImage;

    const initialMarkup = ReactDOMServer.renderToString(React.createElement(
      StaticRouter,
      { location: req.url, context: context },
      React.createElement(App, { initialData: state })
    ));

    res.render('index', {
      initialMarkup,
      initialData: state,
      bundle: config.env === 'production' ? 'bundle.min.js' : 'bundle.js',
      styles: config.env === 'production' ? 'style.min.css' : 'style.css'
    });
    res.end();
  }
});

module.exports = router;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(5);

var _reactRouter = __webpack_require__(4);

var _Bio = __webpack_require__(16);

var _Bio2 = _interopRequireDefault(_Bio);

var _ = __webpack_require__(17);

var _2 = _interopRequireDefault(_);

var _Works = __webpack_require__(18);

var _Works2 = _interopRequireDefault(_Works);

var _Work = __webpack_require__(8);

var _Work2 = _interopRequireDefault(_Work);

var _Nav = __webpack_require__(25);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class App extends _react2.default.Component {
  constructor(props) {
    super(props);

    props.initialData.isBrowser = props.isBrowser || false;
    props.initialData.isMobile = props.isMobile || false;

    this.state = props.initialData;
  }

  onResize() {
    // this.setState({
    //   width: window.innerWidth,
    //   height: window.innerHeight
    // });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    if (this.props.isBrowser) {
      // Scroll to top
      window.scrollTo(0, 0);
    }
  }

  render() {
    const worksSeo = this.state.works.map(w => w.seo);

    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouterDom.Switch,
        { onChange: this.onRouterChange },
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: () => _react2.default.createElement(_Works2.default, { works: this.state.works }) }),
        _react2.default.createElement(_reactRouterDom.Route, {
          path: '/work/:seo',
          component: router => {
            const requestedWork = router.match.params.seo;

            if (worksSeo.indexOf(requestedWork) > -1) {
              return _react2.default.createElement(_Work2.default, {
                router: router,
                works: this.state.works,
                isDetail: true,
                isBrowser: this.props.isBrowser,
                isMobile: this.props.isMobile
              });
            } else {
              return _react2.default.createElement(_2.default, null);
            }
          }
        }),
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/bio', component: () => _react2.default.createElement(_Bio2.default, { html: this.state.pages.bio }) }),
        _react2.default.createElement(_reactRouterDom.Route, { component: _2.default })
      ),
      _react2.default.createElement(_Nav2.default, { contactHtml: this.state.pages.contact })
    );
  }
}

App.propTypes = {
  initialData: _propTypes2.default.object.isRequired
};

module.exports = (0, _reactRouter.withRouter)(App);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const React = __webpack_require__(0);

const Bio = props => React.createElement('div', { id: 'bio', className: 'page', dangerouslySetInnerHTML: { __html: props.html } });

module.exports = Bio;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Page = props => _react2.default.createElement(
  'div',
  { id: 'page404', className: 'container-fluid' },
  _react2.default.createElement(
    'div',
    { className: 'row align-items-center h-100' },
    _react2.default.createElement(
      'div',
      { className: 'col-12' },
      _react2.default.createElement(
        'h1',
        { className: 'title text-center' },
        '404 | Not found'
      )
    )
  )
);

module.exports = Page;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Work = __webpack_require__(8);

var _Work2 = _interopRequireDefault(_Work);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Works = props => _react2.default.createElement(
  'div',
  { className: 'row no-gutters py-md-4 px-md-4 px-2 py-2 px-sm-4' },
  _react2.default.createElement(
    'div',
    { id: 'works', className: 'col-12 col-md-8' },
    _react2.default.createElement('div', { className: 'spacer' }),
    _react2.default.createElement(
      'div',
      { className: 'inner row' },
      props.works.map(work => {
        return _react2.default.createElement(_Work2.default, _extends({ key: work.uid }, work, { isDetail: false }));
      })
    )
  )
);

Works.propTypes = {
  works: _propTypes2.default.array.isRequired
};

module.exports = Works;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ListItem = props => {
  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: `/work/${props.seo}`, id: `item-${props.seo}`, className: 'list-item col-12 col-sm-6 col-xl-4 mb-2 mb-md-4' },
    _react2.default.createElement(
      'span',
      { className: 'image-wrapper' },
      _react2.default.createElement('img', { src: `assets/work/${props.seo}/${props.preview}` })
    ),
    _react2.default.createElement(
      'span',
      { className: 'details' },
      _react2.default.createElement(
        'span',
        { className: 'name' },
        props.name
      ),
      _react2.default.createElement(
        'span',
        { className: 'intro' },
        props.intro
      )
    )
  );
};

ListItem.propTypes = {
  seo: _propTypes2.default.string.isRequired,
  preview: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  intro: _propTypes2.default.string.isRequired
};

module.exports = ListItem;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createCover = __webpack_require__(21);

var _createCover2 = _interopRequireDefault(_createCover);

var _player = __webpack_require__(22);

var _player2 = _interopRequireDefault(_player);

var _fullscreenSvg = __webpack_require__(23);

var _fullscreenSvg2 = _interopRequireDefault(_fullscreenSvg);

var _externalLinkSvg = __webpack_require__(24);

var _externalLinkSvg2 = _interopRequireDefault(_externalLinkSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Detail extends _react2.default.Component {
  constructor(props) {
    super(props);

    this.state = {
      seo: props.seo,
      data: props.data
    };

    if (this.props.isBrowser) {
      this.updatesize = this.updatesize.bind(this);
      this.toggleZoom = this.toggleZoom.bind(this);
    }
  }

  componentWillUnmount() {
    if (this.props.isBrowser) {
      window.removeEventListener('resize', this.updatesize);

      this.disableImageZoom();

      this.removeVimeoEvents();
      this.removeIframeEvents();
    }
  }

  componentDidMount() {
    if (this.props.isBrowser) {
      // Cache DOM elements
      this.$el = $(`#${this.props.data.seo}`);
      this.$head = this.$el.find('.head');
      this.$icons = this.$head.find('.icons');

      // Remove autoplay video on mobile (on iphone they start in fullscreen even if hidden)
      if (this.props.isMobile) {
        const videos = document.querySelectorAll(`#${this.props.seo} video[autoplay]`);
        videos.forEach(v => v.remove());
      }

      // Add resize and update sizes
      window.addEventListener('resize', this.updatesize);
      this.updatesize();

      // Cache elements
      this.covers = document.querySelectorAll(`#${this.props.seo} .cover`); // fullscreen cover

      // Update sizes for cover elements (if there is any)
      this.updateCovers();

      // Init zoom
      this.enableImageZoom();

      // Init Vimeo
      this.setupVimeo();

      // Init icons (fullscreen)
      this.setupIcons();
    }
  }

  setupVimeo() {
    const $vimeos = this.$el.find('.vimeo-iframe');
    this.players = [];

    $vimeos.each((i, el) => {
      this.players[i] = new _player2.default(el);
    });

    // Events
    this.players.forEach((player, i) => {
      player.on('play', () => {
        this.players.forEach((p, j) => {
          if (j !== i) p.pause();
        });
      });
    });

    this.updatePlayersSize();
  }

  removeVimeoEvents() {
    if (this.players) {
      this.players.forEach((player, i) => {
        player.off('play');
      });
    }
  }

  setupIcons() {
    // Fullscreen
    const $fullscreenBtn = this.$icons.find('.fullscreen-icon');
    $fullscreenBtn.on('click', e => {
      $(e.currentTarget).closest('.head').toggleClass('fullscreen');
    });
  }

  removeIframeEvents() {
    this.$icons.find('.fullscreen-icon').off('click');
  }

  enableImageZoom() {
    const $images = $(`#${this.props.seo} .image`);
    this.$images = $images;

    $images.each((i, image) => {
      const $image = $(image);

      if ($image.hasClass('no-zoom')) return;

      if ($image.find('.row-zoom').length && $image.find('.col-zoom').length) {
        $image.find('.img').on('click', this.toggleZoom);
      }
    });
  }

  disableImageZoom() {
    this.$images.off('click', this.toggleZoom);
  }

  toggleZoom(e) {
    const $el = $(e.currentTarget).closest('.image');
    const $row = $el.find('.row-zoom');
    const $col = $el.find('.col-zoom');
    const zoomed = $el.hasClass('zoomed');

    // Copy the row-zoom and col-zoom classes to a temporary data attribute
    // And copy from data attributes back to the element to restore original size
    if (zoomed) {
      $row.removeClass().addClass($el.data('row-zoom'));
      $col.removeClass().addClass($el.data('col-zoom'));
      $el.removeClass('zoomed');
    } else {
      $el.data('row-zoom', $row.attr('class'));
      $el.data('col-zoom', $col.attr('class'));
      $row.removeClass().addClass('row-zoom');
      $col.removeClass().addClass('col-zoom');
      $el.addClass('zoomed');
    }
  }

  updateCovers() {
    if (this.covers) {
      this.covers.forEach((el, i) => {
        const $el = $(el);
        const $parent = $el.parent();
        const w = $el.data('width') || el.width || $el.width(); // original element width
        const h = $el.data('height') || el.height || $el.width(); // original element height
        const parentW = $parent.width();
        const parentH = $parent.height();

        // Get cover size and position
        const cover = (0, _createCover2.default)(parentW, parentH, w, h);

        // Save original size
        $el.data('width', w);
        $el.data('height', h);

        // Apply cover size and position to video element
        $el.css(cover);
        if (el instanceof HTMLImageElement || el instanceof HTMLVideoElement || el instanceof HTMLCanvasElement) {
          el.width = cover.width;
          el.height = cover.height;
        }
      });
    }
  }

  updatePlayersSize() {
    this.players.forEach((player, i) => {
      player.ready().then(() => {
        player.getVideoWidth().then(w => {
          player.getVideoHeight().then(h => {
            const $player = $(player.element);
            const ratio = w / h;
            const width = $($player).width();
            $($player).height(width / ratio);
          });
        });
      });
    });
  }

  updatesize() {
    // $('.head').height(window.innerHeight)

    // Resize vimeos - update height, depending on width
    if (this.players) {
      this.updatePlayersSize();
    }

    if (this.covers) {
      this.updateCovers();
    }
  }

  render() {
    const seo = this.props.seo;
    const data = this.props.data;
    const cssClass = data.template === 'default' ? 'default' : null;

    return _react2.default.createElement('div', {
      id: `${seo}`,
      className: `detail ${cssClass}`,
      dangerouslySetInnerHTML: { __html: this.props.data.detail }
    });
  }
}

Detail.propTypes = {
  seo: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.object.isRequired
};

module.exports = Detail;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Return position and size of element to cover the entire space of the parent.
 * Emulates css background-size: cover (but works with images, video or any dom element)
 */
const createCover = (parentW, parentH, w, h) => {
  const parentRatio = parentW / parentH;
  const ratio = w / h;
  let zoomRatio;
  let top, left, width, height;

  if (parentRatio > ratio) {
    // fill width
    zoomRatio = parentW / w;
    height = ~~(h * zoomRatio);
    top = ~~((parentH - height) / 2);
    left = 0;
    width = parentW;
  } else {
    // fill height
    zoomRatio = parentH / h;
    width = ~~(w * zoomRatio);
    left = ~~((parentW - width) / 2);
    top = 0;
    height = parentH;
  }

  return {
    top,
    left,
    width,
    height
  };
};

module.exports = createCover;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@vimeo/player");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = `
  <svg version="1.1" class="fullscreen-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
    <g class="fullscreen icon">
      <g>
        <path d="M23.3,1.4c0-0.4-0.3-0.7-0.7-0.7h-6.3c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h5.6l0,5.7c0,0.4,0.3,0.7,0.7,0.7
          c0.4,0,0.7-0.3,0.7-0.7L23.3,1.4C23.3,1.4,23.3,1.4,23.3,1.4C23.3,1.4,23.3,1.4,23.3,1.4z"/>
        <path class="border" d="M22.6,0.7c0.4,0,0.7,0.3,0.7,0.7c0,0,0,0,0,0c0,0,0,0,0,0l0,6.4c0,0.4-0.3,0.7-0.7,0.7
          c-0.4,0-0.7-0.3-0.7-0.7l0-5.7h-5.6c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7H22.6 M22.6,0h-6.3c-0.8,0-1.4,0.6-1.4,1.4
          c0,0.8,0.6,1.4,1.4,1.4h4.9l0,5c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4l0-6.4l0,0c0,0,0,0,0,0l0-0.1l0,0
          C23.9,0.6,23.3,0,22.6,0L22.6,0z"/>
      </g>
      <g>
        <path d="M7.8,0.7H1.4c0,0,0,0,0,0c0,0,0,0,0,0C1,0.7,0.7,1,0.7,1.4l0,6.4c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7l0-5.6h5.6
          c0.4,0,0.7-0.3,0.7-0.7C8.5,1,8.2,0.7,7.8,0.7z"/>
        <path class="border" d="M7.8,0.7c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7H2.1l0,5.6c0,0.4-0.3,0.7-0.7,0.7
          C1,8.5,0.7,8.2,0.7,7.8l0-6.4C0.7,1,1,0.7,1.4,0.7c0,0,0,0,0,0c0,0,0,0,0,0H7.8 M7.8,0H1.4h0H1.4l0,0C0.6,0,0,0.7,0,1.4l0,6.4
          c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4l0-4.9h4.9c0.8,0,1.4-0.6,1.4-1.4C9.2,0.6,8.6,0,7.8,0L7.8,0z"/>
      </g>
      <g>
        <path d="M7.7,21.9H2.1v-5.6c0-0.4-0.3-0.7-0.7-0.7s-0.7,0.3-0.7,0.7v6.3c0,0,0,0,0,0c0,0,0,0,0,0c0,0.4,0.3,0.7,0.7,0.7h6.3
          c0.4,0,0.7-0.3,0.7-0.7C8.4,22.2,8.1,21.9,7.7,21.9z"/>
        <path class="border" d="M1.4,15.5c0.4,0,0.7,0.3,0.7,0.7v5.6h5.6c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7H1.4
          c-0.4,0-0.7-0.3-0.7-0.7c0,0,0,0,0,0c0,0,0,0,0,0v-6.3C0.7,15.8,1,15.5,1.4,15.5 M1.4,14.8c-0.8,0-1.4,0.6-1.4,1.4v6.3v0.1l0,0
          C0,23.4,0.7,24,1.4,24h6.3c0.8,0,1.4-0.6,1.4-1.4c0-0.4-0.1-0.7-0.4-1c-0.3-0.3-0.6-0.4-1-0.4H2.8v-4.9
          C2.8,15.4,2.2,14.8,1.4,14.8L1.4,14.8z"/>
      </g>
      <g>
        <path d="M22.6,15.5c-0.4,0-0.7,0.3-0.7,0.7v5.6h-5.6c-0.4,0-0.7,0.3-0.7,0.7c0,0.4,0.3,0.7,0.7,0.7h6.3c0,0,0,0,0,0c0,0,0,0,0,0
          c0.4,0,0.7-0.3,0.7-0.7v-6.3C23.3,15.8,23,15.5,22.6,15.5z"/>
        <path class="border" d="M22.6,15.5c0.4,0,0.7,0.3,0.7,0.7v6.3c0,0.4-0.3,0.7-0.7,0.7c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0h-6.3
          c-0.4,0-0.7-0.3-0.7-0.7s0.3-0.7,0.7-0.7h5.6v-5.6C21.9,15.8,22.2,15.5,22.6,15.5 M22.6,14.8c-0.4,0-0.7,0.1-1,0.4
          c-0.3,0.3-0.4,0.6-0.4,1v4.9h-4.9c-0.8,0-1.4,0.6-1.4,1.4c0,0.8,0.6,1.4,1.4,1.4h6.3h0.1l0,0h0l0,0c0.7-0.1,1.3-0.7,1.3-1.4v-6.3
          c0-0.4-0.2-0.7-0.4-1C23.3,15,22.9,14.8,22.6,14.8L22.6,14.8z"/>
      </g>
    </g>

    <g class="exit-fullscreen icon">
      <g>
        <path d="M16.2,9.9h6.3c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7h-5.6V2.8c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v6.3
          c0,0,0,0,0,0c0,0,0,0,0,0C15.5,9.6,15.8,9.9,16.2,9.9z"/>
        <path class="border" d="M16.2,2.1c0.4,0,0.7,0.3,0.7,0.7v5.7h5.6c0,0,0,0,0,0c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-6.3
          c0,0,0,0,0,0c-0.4,0-0.7-0.3-0.7-0.7c0,0,0,0,0,0c0,0,0,0,0,0V2.8C15.5,2.4,15.8,2.1,16.2,2.1 M16.2,1.4c-0.8,0-1.4,0.6-1.4,1.4
          v6.3v0.1l0,0c0,0.3,0.2,0.7,0.4,0.9c0.3,0.3,0.6,0.4,1,0.4h6.3c0.8,0,1.4-0.6,1.4-1.4c0-0.8-0.6-1.4-1.4-1.4h-4.9V2.8
          C17.6,2,17,1.4,16.2,1.4L16.2,1.4z"/>
      </g>
      <g>
        <path d="M7.8,2.1c-0.4,0-0.7,0.3-0.7,0.7v5.6H1.4C1,8.5,0.7,8.8,0.7,9.2c0,0.4,0.3,0.7,0.7,0.7h6.3c0,0,0,0,0,0c0,0,0,0,0,0
          c0.4,0,0.7-0.3,0.7-0.7V2.8C8.5,2.4,8.2,2.1,7.8,2.1z"/>
        <path class="border" d="M7.8,2.1c0.4,0,0.7,0.3,0.7,0.7v6.3c0,0.4-0.3,0.7-0.7,0.7c0,0,0,0,0,0c0,0,0,0,0,0H1.4
          C1,9.9,0.7,9.6,0.7,9.2c0-0.4,0.3-0.7,0.7-0.7h5.7V2.8C7.1,2.4,7.4,2.1,7.8,2.1 M7.8,1.4L7.8,1.4L7.8,1.4C7,1.4,6.4,2,6.4,2.8v4.9
          H1.4C0.6,7.8,0,8.4,0,9.2s0.6,1.4,1.4,1.4h6.3h0.1l0,0c0.7,0,1.3-0.7,1.3-1.4V2.8C9.2,2,8.6,1.4,7.8,1.4L7.8,1.4z"/>
      </g>
      <g>
        <path d="M7.8,14.1H1.4c-0.4,0-0.7,0.3-0.7,0.7s0.3,0.7,0.7,0.7h5.6v5.7c0,0.4,0.3,0.7,0.7,0.7s0.7-0.3,0.7-0.7v-6.3c0,0,0,0,0,0
          c0,0,0,0,0,0C8.5,14.4,8.2,14.1,7.8,14.1z"/>
        <path class="border" d="M7.8,14.1c0.4,0,0.7,0.3,0.7,0.7c0,0,0,0,0,0c0,0,0,0,0,0v6.3c0,0.4-0.3,0.7-0.7,0.7c-0.4,0-0.7-0.3-0.7-0.7
          v-5.7H1.4c0,0,0,0,0,0c-0.4,0-0.7-0.3-0.7-0.7c0-0.4,0.3-0.7,0.7-0.7H7.8 M7.8,13.4H1.4C0.6,13.4,0,14,0,14.8
          c0,0.8,0.6,1.4,1.4,1.4h4.9v4.9c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4v-6.3v0v-0.1l0,0c0-0.3-0.2-0.7-0.4-0.9
          C8.5,13.6,8.1,13.4,7.8,13.4L7.8,13.4z"/>
      </g>
      <g>
        <path d="M22.6,14.1h-6.3c0,0,0,0,0,0c0,0,0,0,0,0c-0.4,0-0.7,0.3-0.7,0.7v6.3c0,0.4,0.3,0.7,0.7,0.7c0.4,0,0.7-0.3,0.7-0.7v-5.6
          h5.7c0.4,0,0.7-0.3,0.7-0.7S23,14.1,22.6,14.1z"/>
        <path class="border" d="M22.6,14.1c0.4,0,0.7,0.3,0.7,0.7c0,0.4-0.3,0.7-0.7,0.7h-5.7v5.6c0,0.4-0.3,0.7-0.7,0.7c0,0,0,0,0,0
          c-0.4,0-0.7-0.3-0.7-0.7v-6.3c0-0.4,0.3-0.7,0.7-0.7c0,0,0,0,0,0c0,0,0,0,0,0H22.6 M22.6,13.4L22.6,13.4L22.6,13.4h-6.3h0h-0.1
          l0,0c-0.7,0-1.3,0.7-1.3,1.4v6.3c0,0.8,0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4v-4.9h4.9c0.8,0,1.4-0.6,1.4-1.4
          C24,14,23.4,13.4,22.6,13.4L22.6,13.4z"/>
      </g>
    </g>
  </svg>
`;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = `
  <svg version="1.1" class="external-link-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
  <g>
  <g>
        <path d="M19.2,14.5h-0.9c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v4.3c0,0.6-0.2,1.1-0.6,1.5c-0.4,0.4-0.9,0.6-1.5,0.6H4.6
            c-0.6,0-1.1-0.2-1.5-0.6c-0.4-0.4-0.6-0.9-0.6-1.5V8c0-0.6,0.2-1.1,0.6-1.5C3.5,6.1,4,5.9,4.6,5.9H14c0.1,0,0.2,0,0.3-0.1
            c0.1-0.1,0.1-0.2,0.1-0.3V4.6c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1H4.6c-1.1,0-2,0.4-2.7,1.1C1.1,6.1,0.8,7,0.8,8v11.1
            c0,1.1,0.4,2,1.1,2.7C2.6,22.7,3.5,23,4.6,23h11.1c1.1,0,2-0.4,2.7-1.1c0.8-0.8,1.1-1.7,1.1-2.7v-4.3c0-0.1,0-0.2-0.1-0.3
            C19.4,14.5,19.3,14.5,19.2,14.5z"/>
        <path class="border" d="M14,4.2c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3v0.9c0,0.1,0,0.2-0.1,0.3c-0.1,0.1-0.2,0.1-0.3,0.1H4.6
            C4,5.9,3.5,6.1,3.1,6.5C2.7,6.9,2.5,7.4,2.5,8v11.1c0,0.6,0.2,1.1,0.6,1.5c0.4,0.4,0.9,0.6,1.5,0.6h11.1c0.6,0,1.1-0.2,1.5-0.6
            c0.4-0.4,0.6-0.9,0.6-1.5v-4.3c0-0.1,0-0.2,0.1-0.3c0.1-0.1,0.2-0.1,0.3-0.1h0.9c0.1,0,0.2,0,0.3,0.1c0.1,0.1,0.1,0.2,0.1,0.3
            v4.3c0,1.1-0.4,2-1.1,2.7c-0.8,0.8-1.7,1.1-2.7,1.1H4.6c-1.1,0-2-0.4-2.7-1.1c-0.8-0.8-1.1-1.7-1.1-2.7V8c0-1.1,0.4-2,1.1-2.7
            c0.8-0.8,1.7-1.1,2.7-1.1H14 M14,3.4H4.6c-1.3,0-2.4,0.5-3.3,1.4C0.5,5.7,0,6.8,0,8v11.1c0,1.3,0.5,2.4,1.4,3.3
            c0.9,0.9,2,1.4,3.3,1.4h11.1c1.3,0,2.4-0.5,3.3-1.4c0.9-0.9,1.4-2,1.4-3.3v-4.3c0-0.3-0.1-0.6-0.3-0.8c-0.2-0.2-0.5-0.3-0.8-0.3
            h-0.9c-0.3,0-0.6,0.1-0.8,0.3c-0.2,0.2-0.3,0.5-0.3,0.8v4.3c0,0.4-0.1,0.7-0.4,1c-0.3,0.3-0.6,0.4-1,0.4H4.6
            c-0.4,0-0.7-0.1-1-0.4c-0.3-0.3-0.4-0.6-0.4-1V8c0-0.4,0.1-0.7,0.4-1c0.3-0.3,0.6-0.4,1-0.4H14c0.3,0,0.6-0.1,0.8-0.3
            c0.2-0.2,0.3-0.5,0.3-0.8V4.6c0-0.3-0.1-0.6-0.3-0.8C14.7,3.5,14.4,3.4,14,3.4L14,3.4z"/>
  </g>
  <g>
        <path d="M24.5,2.7c-0.2-0.2-0.4-0.3-0.6-0.3H17c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.3,0.4-0.3,0.6c0,0.2,0.1,0.4,0.3,0.6l2.4,2.4
            L10.1,15c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.3l1.5,1.5c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2,0,0.3-0.1l8.7-8.7l2.4,2.4
            c0.2,0.2,0.4,0.3,0.6,0.3s0.4-0.1,0.6-0.3c0.2-0.2,0.3-0.4,0.3-0.6V3.3C24.7,3.1,24.7,2.9,24.5,2.7z"/>
        <path class="border" d="M23.9,2.5c0.2,0,0.4,0.1,0.6,0.3c0.2,0.2,0.3,0.4,0.3,0.6v6.9c0,0.2-0.1,0.4-0.3,0.6
            C24.3,11,24.1,11,23.9,11c-0.2,0-0.4-0.1-0.6-0.3l-2.4-2.4l-8.7,8.7c-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1l-1.5-1.5
            c-0.1-0.1-0.1-0.2-0.1-0.3c0-0.1,0-0.2,0.1-0.3l8.7-8.7l-2.4-2.4c-0.2-0.2-0.3-0.4-0.3-0.6c0-0.2,0.1-0.4,0.3-0.6
            c0.2-0.2,0.4-0.3,0.6-0.3H23.9 M23.9,1.7H17c-0.4,0-0.8,0.2-1.1,0.5c-0.3,0.3-0.5,0.7-0.5,1.1c0,0.4,0.2,0.8,0.5,1.1l1.8,1.8
            l-8.2,8.2c-0.2,0.2-0.4,0.5-0.4,0.8c0,0.3,0.1,0.6,0.4,0.8l1.5,1.5c0.2,0.2,0.5,0.4,0.8,0.4c0.3,0,0.6-0.1,0.8-0.4l8.2-8.2
            l1.8,1.8c0.3,0.3,0.7,0.5,1.1,0.5c0.4,0,0.8-0.2,1.1-0.5c0.3-0.3,0.5-0.7,0.5-1.1V3.3c0-0.4-0.2-0.8-0.5-1.1
            C24.7,1.9,24.3,1.7,23.9,1.7L23.9,1.7z"/>
  </g>
</g>
  </svg>
`;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(5);

var _reactRouter = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Nav extends _react2.default.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: '',
      open: false
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  componentDidMount() {
    // Render email address
    const emailLink = $('.rj4kj325jn88dJ3HwwlP')[0];
    if (emailLink) {
      let email = emailLink.rel.replace('/', '@').replace('*', '.');
      const part = ['m', 'a', 'i', 'l', 't', 'o', ':'];
      emailLink.href = part.join('') + email;
      $(emailLink).text(email);
    }
  }

  toggleNav() {
    this.setState({
      open: !this.state.open
    });
  }

  updateBackClass(path) {
    return path === '/' ? 'hide' : '';
  }

  render() {
    const { location } = this.props;
    const path = location.pathname;

    const btnClasses = ' py-1 px-1 py-md-2 px-md-1 svg-wrapper';

    return _react2.default.createElement(
      'nav',
      { id: 'nav', className: this.state.open ? 'open' : null },
      _react2.default.createElement(
        'div',
        { className: 'ui d-flex justify-content-end py-1 px-1 py-md-2 px-md-2' },
        _react2.default.createElement(
          _reactRouterDom.Link,
          { className: this.updateBackClass(path) + btnClasses + ' back', to: '/' },
          _react2.default.createElement(
            'svg',
            { className: 'svg-icon', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 50 50' },
            _react2.default.createElement('polygon', { points: '40,5.8 34.3,0 10,25 34.3,50 40,44.2 21.4,25' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: btnClasses + ' switch', onClick: this.toggleNav },
          _react2.default.createElement(
            'svg',
            { className: 'svg-icon', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 50 50' },
            _react2.default.createElement('path', { d: 'M50,28.57H28.57V50H21.43V28.57H0V21.43H21.43V0h7.14V21.43H50Z' })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'popup', onClick: this.toggleNav },
        _react2.default.createElement(
          'div',
          { className: 'row no-gutters py-md-4 px-md-4 px-2 py-2' },
          _react2.default.createElement(
            'div',
            { className: 'col-12 col-md-8' },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'link', to: '/' },
              'Work'
            ),
            _react2.default.createElement(
              _reactRouterDom.Link,
              { className: 'link', to: '/bio' },
              'Bio'
            ),
            _react2.default.createElement('div', {
              className: 'contact',
              dangerouslySetInnerHTML: { __html: this.props.contactHtml }
            })
          )
        )
      ),
      _react2.default.createElement('div', { className: 'cover', onClick: this.toggleNav })
    );
  }
}

module.exports = (0, _reactRouter.withRouter)(Nav);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const works = __webpack_require__(27);
const pages = __webpack_require__(35);

module.exports = {
  title: 'Perky Pat',
  metaKeywords: 'Esteban, Almiron, London, freelance, front end, frontend, begatto kitchen, perky pat, perky pat designs ltd, free lance, developer, javascript, coder, creative, artist, programmer, contractor, three.js, webgl, canvas, senior, installation, interactive, experienced, expert, art, generative, technology, designer, site, website, web, design, site, web development, jquery, html, html5, css, css3, interactive, webdesign, portfolio',
  metaDescription: 'Digital artist, front end developer',
  ogTitle: 'Perky Pat',
  ogDescription: 'Art, code',
  ogImage: 'assets/main.jpg',
  works: works,
  pages: pages
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = [{
  uid: 5153,
  seo: 'the-hunt',
  active: 1,
  name: 'The hunt',
  year: 2016,
  intro: 'Octahedron hunted by lines',
  preview: 'preview.jpg',
  image: 'main.jpg',
  vimeoId: null,
  iframe: 'https://the-hunt.surge.sh/',
  external: 'https://the-hunt.surge.sh/',
  detail: __webpack_require__(28),
  template: 'default' // can be 'default' or null (default is null)
}, {
  uid: 2803,
  seo: 'the-code-of-nature-3d',
  active: 1,
  name: 'The code of nature in 3D',
  year: 2017,
  intro: 'A study of autonomous agents',
  preview: 'preview.jpg',
  image: 'main.jpg',
  vimeoId: null,
  iframe: 'https://taseenb.github.io/NOC3D-chapter6/NOC_6_06_PathFollowing_MeshLine/public/index.html',
  external: 'https://taseenb.github.io/NOC3D-chapter6/NOC_6_06_PathFollowing_MeshLine/public/index.html',
  detail: __webpack_require__(29),
  template: 'default' // can be 'default' or null (default is null)
}, {
  uid: 3277,
  seo: 'fan-beat',
  active: 1,
  name: 'Fan Beat',
  year: 2016,
  intro: 'Interactive installation for concerts',
  preview: 'preview.jpg',
  image: 'main.jpg',
  vimeoId: null,
  detail: __webpack_require__(30),
  template: 'default' // can be 'default' or null (default is null)
}, {
  uid: 8742,
  seo: 'pride-prejudice',
  active: 1,
  name: 'Pride & Prejudice',
  year: 2016,
  intro: 'Looong interactive streamgraph',
  preview: 'preview.jpg',
  image: 'main.jpg',
  vimeoId: null,
  external: 'https://d1xso9gob5fu6y.cloudfront.net/',
  detail: __webpack_require__(31),
  template: 'default' // can be 'base' or null (default is null)
}, {
  uid: 4001,
  seo: 'glabs',
  active: 1,
  name: 'The Guardian Labs',
  year: 2016,
  intro: 'Interactive pages for editorial content',
  preview: 'preview.jpg',
  image: 'main.jpg',
  vimeoId: null,
  detail: __webpack_require__(32),
  template: 'default' // can be 'default' or null (default is null)
}, {
  uid: 4473,
  seo: 'the-airport-of-the-future',
  active: 1,
  name: 'The airport of the future',
  year: 2016,
  intro: 'Scroll based 2D animations',
  preview: 'preview.jpg',
  image: 'main.jpg',
  vimeoId: null,
  external: 'https://labs.theguardian.com/2016/heathrow-airport-of-the-future/',
  detail: __webpack_require__(33),
  template: 'default' // can be 'default' or null (default is null)
}, {
  uid: 7344,
  seo: 'w152',
  active: 1,
  name: 'Industrial Facility w152',
  year: 2016,
  intro: 'Scroll based 2D animations',
  preview: 'preview.jpg',
  image: 'main.jpg',
  vimeoId: null,
  detail: __webpack_require__(34),
  template: 'default' // can be 'default' or null (default is null)
}];

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters py-md-4 px-md-4 dark\">\n    <div class=\"col-12\">\n\n        <div class=\"row no-gutters align-items-end\">\n            <div class=\"col-12 col-md-8\">\n                <div class=\"head\">\n                    <!-- <div class=\"shadow overlay abs-percent-fullscreen\"></div> -->\n                    <!-- <div class=\"border overlay abs-percent-fullscreen\"></div> -->\n\n                    <!-- <div class=\"external-link\">\n                        <a href=\"/assets/work/pride-prejudice/iframe/index.html\" target=\"_blank\"></a>\n                    </div> -->\n\n                    <div class=\"icons\">\n                        <div class=\"fullscreen-icon\">\n                            <img src=\"/assets/img/fullscreen-on.svg\" class=\"fullscreen-on\">\n                            <img src=\"/assets/img/fullscreen-off.svg\" class=\"fullscreen-off\">\n                        </div>\n                    </div>\n\n                    <div class=\"bg\" style=\"background-image:url(/assets/work/the-hunt/main.jpg)\"></div>\n\n                    <div class=\"iframe-container\">\n                        <iframe scrolling='no' class=\"iframe\" src=\"/assets/work/the-hunt/iframe/index.html\" frameBorder=\"0\"></iframe>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\">\n                <div class=\"credits\">\n                    3D real-time generative animation\n                    <br> WebGL, Three.js, GLSL\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"row no-gutters mt-md-4\">\n        <div class=\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\">\n\n            <div class=\"text\">\n                <div class=\"inner\">\n                    <span class=\"title\">The hunt</span>\n\n                    <span class=\"year\">2017</span>\n\n                    <div class=\"description\">\n                        An octahedron is hunted by generative lines in an endless random movement. Abstract 3D animation (real-time).\n                        <br>\n                        <br>\n                        <span class=\"link\">\n                            <a href=\"https://the-hunt.surge.sh\">Watch</a>\n                        </span>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n\n<div class=\"images\">\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-hunt/hunt-1.jpg\">\n                    <div class=\"caption\">\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-hunt/hunt-2.jpg\">\n                    <div class=\"caption\">\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-hunt/hunt-3.jpg\">\n                    <div class=\"caption\">\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-hunt/hunt-4.jpg\">\n                    <div class=\"caption\">\n\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters py-md-4 px-md-4\">\n    <div class=\"col-12\">\n\n        <div class=\"row no-gutters align-items-end\">\n            <div class=\"col-12 col-md-8\">\n                <div class=\"head\">\n                    <!-- <div class=\"shadow overlay abs-percent-fullscreen\"></div> -->\n                    <!-- <div class=\"border overlay abs-percent-fullscreen\"></div> -->\n\n                    <!-- <div class=\"external-link\">\n                        <a href=\"/assets/work/pride-prejudice/iframe/index.html\" target=\"_blank\"></a>\n                    </div> -->\n\n                    <div class=\"icons\">\n                        <div class=\"fullscreen-icon\">\n                            <img src=\"/assets/img/fullscreen-on.svg\" class=\"fullscreen-on\">\n                            <img src=\"/assets/img/fullscreen-off.svg\" class=\"fullscreen-off\">\n                        </div>\n                    </div>\n\n                    <div class=\"bg\" style=\"background-image:url(/assets/work/the-code-of-nature-3d/flow-field.jpg)\"></div>\n\n                    <div class=\"iframe-container\">\n                        <iframe scrolling='no' class=\"iframe\" src=\"https://taseenb.github.io/NOC3D-chapter6/NOC_6_06_PathFollowing_MeshLine/public/index.html?no-ui=1&demo-mode=1&show-grid=1&camera-distance=60\" frameBorder=\"0\"></iframe>\n                    </div>\n                </div>\n            </div>\n\n\n            <div class=\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\">\n                <div class=\"credits\">\n                    Book:\n                    <a href=\"http://natureofcode.com/\">Nature of Code</a> by Daniel Shiffman\n                    <br> WebGL / Three.js\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"row no-gutters mt-md-4\">\n        <div class=\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\">\n\n            <div class=\"text\">\n                <div class=\"inner\">\n                    <span class=\"title\">The code of nature in 3D</span>\n\n                    <span class=\"year\">2017</span>\n\n                    <div class=\"description\">\n                        Study of autonomous agents by recreating Daniel Shiffman's\n                        <a href=\"http://natureofcode.com/\">Nature of Code</a> examples in 3D (the originals are in 2D).\n                        <br>\n                        <br>\n                        <span class=\"link\">\n                            <a href=\"https://taseenb.github.io/NOC3D-chapter6/\">Demos</a>\n                        </span>\n                        <br>\n                        <span class=\"link\">\n                            <a href=\"https://github.com/taseenb/NOC3D-chapter6\">Source code</a>\n                        </span>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n\n<div class=\"images\">\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-code-of-nature-3d/follow-path.jpg\">\n                    <div class=\"caption\">\n                        Follow path\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-code-of-nature-3d/flocking.jpg\">\n                    <div class=\"caption\">\n                        Flocking\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-code-of-nature-3d/a-s.jpg\">\n                    <div class=\"caption\">\n                        Alignment and separation\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-code-of-nature-3d/flow-field.jpg\">\n                    <div class=\"caption\">\n                        Flow field\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters py-md-4 px-md-4 dark\">\n    <div class=\"col-12\">\n\n        <div class=\"row no-gutters align-items-end\">\n            <div class=\"col-12 col-md-8\">\n\n                <div class=\"head\">\n                    <div class=\"shadow overlay abs-percent-fullscreen\"></div>\n\n                    <div class=\"icons\"></div>\n\n                    <div class=\"video-container\">\n                        <video class=\"video cover\" autoplay muted loop src=\"/assets/work/fan-beat/wall-HD.mp4\" data-width=\"1920\" data-height=\"1072\"></video>\n                    </div>\n\n                    <div class=\"bg video-fallback\" style=\"background-image:url(/assets/work/fan-beat/bg.jpg)\"></div>\n                </div>\n            </div>\n\n            <div class=\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\">\n                <div class=\"credits\">\n                    Agency:\n                    <a href=\"http://www.studio-output.com/\" target=\"_blank\">Studio Output</a> +\n                    <a href=\"http://www.field.io/\" target=\"_blank\">Field.io</a>\n                    <br> Metaballs:\n                    <a href=\"http://jocabola.com\" target=\"_blank\">Jocabola</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row no-gutters mt-md-4\">\n            <div class=\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\">\n\n                <div class=\"text\">\n                    <div class=\"inner\">\n                        <span class=\"title\">Fan Beat</span>\n\n                        <div class=\"description\">\n                            Designed by\n                            <a href=\"http://www.studio-output.com/\" target=\"_blank\">Studio Output</a> (London) and\n                            <a href=\"http://www.field.io/\" target=\"_blank\">Field.io</a> (London), Fan Beat is an installation for concerts based on a wall projection and a large touch screen. The installation visualizes the social interactions as generative creatures (<a href=\"https://en.wikipedia.org/wiki/Metaballs\" target=\"_blank\">metaballs</a>) during the concert.\n                            <br>\n                            <br> WebGL, Three.js, javascript, data visualisation (D3.js).\n                            <br>\n                            <br>\n                            <span class=\"link\">\n                                <a href=\"http://www.studio-output.com/case_study/sap-live-nation-fanbeat/\">More info</a>\n                            </span>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n\n\n<div class=\"images\">\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/fan-beat/dashboard.jpg\">\n                    <div class=\"caption\">\n                        The touchscreen: a companion app for the wall where people can find details and visualize data about the creatures and the social interactions they represent.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/fan-beat/dashboard-overview.jpg\">\n                    <div class=\"caption\">\n                        Data viz showing statistics, geographical origin, hashtags, etc.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/fan-beat/dashboard-transition.jpg\">\n                    <div class=\"caption\">\n                        The dashboard blur effect used for transitions.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/fan-beat/dashboard-zoom.jpg\">\n                    <div class=\"caption\">\n                        Creatures zoomed in.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <!-- <div class=\"art vimeo\">\n            <iframe id=\"vimeo-151087915\" class=\"vimeo-iframe\" src=\"//player.vimeo.com/video/151087915\" width=\"751\" height=\"422\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\" style=\"width: 751px; height: 422px;\" data-ready=\"true\"></iframe>\n        </div> -->\n</div>"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters py-md-4 px-md-4\">\n    <div class=\"col-12\">\n\n        <div class=\"row no-gutters align-items-end\">\n\n            <div class=\"col-12 col-md-8\">\n                <div class=\"head\">\n                    <!-- <div class=\"shadow overlay abs-percent-fullscreen\"></div> -->\n                    <div class=\"border overlay abs-percent-fullscreen\"></div>\n\n                    <!-- <div class=\"icons\">\n                        <div class=\"fullscreen-icon\">\n                            <img src=\"/assets/img/fullscreen-black-on.svg\" class=\"fullscreen-on\">\n                            <img src=\"/assets/img/fullscreen-black-off.svg\" class=\"fullscreen-off\">\n                        </div>\n                    </div> -->\n\n                    <div class=\"bg\" style=\"background-image:url(/assets/work/pride-prejudice/main.jpg)\"></div>\n\n                    <!-- <div class=\"iframe-container\">\n                            <iframe scrolling='no' class=\"iframe\" src=\"/assets/work/pride-prejudice/iframe/index.html\" frameBorder=\"0\"></iframe>\n                        </div> -->\n                </div>\n            </div>\n\n            <div class=\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\">\n                <div class=\"credits\">\n                    <br> Agency:\n                    <a href=\"http://signal-noise.co.uk/\" target=\"_blank\">Signal Noise</a>\n                </div>\n            </div>\n\n        </div>\n\n        <div class=\"row no-gutters mt-md-4\">\n            <div class=\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\">\n\n                <div class=\"text\">\n                    <div class=\"inner\">\n                        <span class=\"title\">Pride & Prejudice</span>\n\n                        <span class=\"year\">2016</span>\n\n                        <div class=\"description\">\n                            Designed by\n                            <a href=\"http://signal-noise.co.uk/\" target=\"_blank\">Signal Noise</a>, this application shows survey data collected by\n                            <a href=\"http://www.economist.com/\" target=\"_blank\">The Economist</a>, for an international event in support of LGBT rights:\n                            <a href=\"http://prideandprejudice.economist.com/research/\" target=\"_blank\">Pride &amp; Prejudice</a>.\n                            <br>The interesting part of the work is a long interactive\n                            <a href=\"https://en.wikipedia.org/wiki/Streamgraph\" target=\"\" _blank=\"\">streamgraph</a> that spans across several screens.\n                            <br>\n                            <br> Agency:\n                            <a href=\"http://signal-noise.co.uk/\" target=\"_blank\">Signal Noise</a>, London\n                            <br>\n                            <br>\n                            <span class=\"link\">\n                                <a href=\"https://d1xso9gob5fu6y.cloudfront.net/\" target=\"_blank\">Link</a>\n                            </span>\n                        </div>\n\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\"images\">\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/pride-prejudice/streamgraph-1.jpg\">\n                    <div class=\"caption\">\n                        A portion of the streamgraph representing a question from the survey (top) and the answers (left).\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/pride-prejudice/chart.jpg\">\n                    <div class=\"caption\">\n                        Pie chart.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/pride-prejudice/map.jpg\">\n                    <div class=\"caption\">\n                        Interactive map.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <!-- <div class=\"art vimeo row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <iframe id=\"vimeo-241347842\" class=\"vimeo-iframe\" src=\"//player.vimeo.com/video/159717148\" width=\"100%\" height=\"500\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\" style=\"width: 100%; height: 500px;\" data-ready=\"true\"></iframe>\n                    <div class=\"caption\">Streamgraph study</div>\n                </div>\n            </div>\n        </div>\n    </div> -->\n</div>"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters py-md-4 px-md-4\">\n    <div class=\"col-12\">\n\n        <div class=\"row no-gutters align-items-end\">\n            <div class=\"col-12 col-md-8\">\n\n                <div class=\"head\">\n                    <!-- <div class=\"shadow overlay abs-percent-fullscreen\"></div> -->\n                    <!-- <div class=\"border overlay abs-percent-fullscreen\"></div> -->\n\n                    <div class=\"icons\"></div>\n\n                    <div class=\"bg bg-align-left bg-align-bottom\" style=\"background-image:url(/assets/work/glabs/main.jpg)\"></div>\n                </div>\n            </div>\n\n            <div class=\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\">\n                <div class=\"credits\">\n                    Design:\n                    <a href=\"https://guardianlabs.theguardian.com/\">The Guardian Labs</a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"row no-gutters mt-md-4\">\n        <div class=\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\">\n\n            <div class=\"text\">\n                <div class=\"inner\">\n                    <span class=\"title\">The Guardian Labs</span>\n                    <!-- 2016 -->\n                    <div class=\"description\">\n\n                        <p>\n                            Designed by\n                            <a href=\"https://guardianlabs.theguardian.com/\">The Guardian Labs</a>, these simple, responsive web pages contain subtle animated or interactive elements.\n                        </p>\n\n                        <span class=\"link\">\n                            <a href=\"/assets/work/glabs/pages/spotify/\">Spotify</a>\n                        </span>\n                        <br>\n                        <span class=\"link\">\n                            <a href=\"/assets/work/glabs/pages/history-of-coffee/\">History of coffee</a>\n                        </span>\n                        <br>\n                        <span class=\"link\">\n                            <a href=\"/assets/work/glabs/pages/airport-of-the-future/\">The airport of the future</a>\n                        </span>\n                        <br>\n                        <span class=\"link\">\n                            <a href=\"/assets/work/glabs/pages/downsizing/\">Downsizing</a>\n                        </span>\n\n\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n\n<div class=\"images\">\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n\n                    <img class=\"img\" src=\"/assets/work/glabs/spot.jpg\">\n                    <div class=\"caption\">\n                        2017 in music (Spotify,\n                        <a href=\"/assets/work/glabs/pages/spotify/\">link</a>).\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/glabs/coffee.jpg\">\n                    <div class=\"caption\">\n                        The history of coffee (Nespresso,\n                        <a href=\"/assets/work/glabs/pages/history-of-coffee/\">link</a>).\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/glabs/airport.jpg\">\n                    <div class=\"caption\">\n                        The airport of the future (Heathrow,\n                        <a href=\"/assets/work/glabs/pages/airport-of-the-future/\">link</a>).\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/glabs/down.jpg\">\n                    <div class=\"caption\">\n                        If you were 13cm tall (Downsizing,\n                        <a href=\"/assets/work/glabs/pages/downsizing/\">link</a>).\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters py-md-4 px-md-4\">\n    <div class=\"col-12\">\n\n        <div class=\"row no-gutters align-items-end\">\n            <div class=\"col-12 col-md-8\">\n\n                <div class=\"head\">\n                    <div class=\"shadow overlay abs-percent-fullscreen\"></div>\n                    <!-- <div class=\"border overlay abs-percent-fullscreen\"></div> -->\n\n                    <div class=\"icons\"></div>\n\n                    <div class=\"bg bg-align-left bg-align-bottom\" style=\"background-image:url(/assets/work/the-airport-of-the-future/bg.jpg)\"></div>\n                </div>\n            </div>\n\n            <div class=\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\">\n                <div class=\"credits\">\n                    Design:\n                    <a href=\"https://guardianlabs.theguardian.com/\">The Guardian Labs</a>\n                    <br> Illustrations:\n                    <a href=\"http://www.samchivers.com/\">Sam Chivers</a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n\n    <div class=\"row no-gutters mt-md-4\">\n        <div class=\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\">\n\n            <div class=\"text\">\n                <div class=\"inner\">\n                    <span class=\"title\">The airport of the future</span>\n                    <!-- 2016 -->\n                    <div class=\"description\">\n                        Designed by\n                        <a href=\"https://guardianlabs.theguardian.com/\">The Guardian Labs</a>, this simple web application shows animated visions of a possible airport of the future. I created a series of interactive 2D animations from some beautiful illustrations made by\n                        <a href=\"http://www.samchivers.com/\">Sam Chivers</a>, with a 70s sci-fi taste.\n                        <br>\n                        <br>\n                        <span class=\"link\">\n                            <a href=\"/assets/work/glabs/pages/airport-of-the-future/\">Link</a>\n                        </span>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n\n<div class=\"images\">\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-airport-of-the-future/page.jpg\">\n                    <div class=\"caption\">\n                        The page on The Guardian website (now removed) with the main animation.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-airport-of-the-future/scene-3-a.jpg\">\n                    <div class=\"caption\">\n                        The landing scene (frame).\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-airport-of-the-future/scene-3-b.jpg\">\n                    <div class=\"caption\">\n                        The landing scene (frame).\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-airport-of-the-future/sprite-demo.jpg\">\n                    <div class=\"caption\">\n                        One of the spritesheets used to build the landing scene.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src=\"/assets/work/the-airport-of-the-future/scene-6.jpg\">\n                    <div class=\"caption\">The taxi scene (frame).</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"art vimeo row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <iframe id=\"vimeo-241347842\" class=\"vimeo-iframe\" src=\"//player.vimeo.com/video/241347842\" width=\"100%\" height=\"500\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\" style=\"width: 100%; height: 500px;\" data-ready=\"true\"></iframe>\n                    <div class=\"caption\">Nature scene.</div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters py-md-4 px-md-4\">\n    <div class=\"col-12\">\n\n        <div class=\"row no-gutters align-items-end\">\n            <div class=\"col-12 col-md-8\">\n\n                <div class=\"head\">\n                    <!-- <div class=\"shadow overlay abs-percent-fullscreen\"></div> -->\n\n                    <!-- <div class=\"icons\">\n                        <div class=\"fullscreen-icon\">\n                            <img src=\"/assets/img/fullscreen-on.svg\" class=\"fullscreen-on\">\n                            <img src=\"/assets/img/fullscreen-off.svg\" class=\"fullscreen-off\">\n                        </div>\n                    </div> -->\n\n                    <div class=\"iframe-container\">\n                        <iframe scrolling='no' class=\"iframe\" src=\"/assets/work/w152/iframe/index.html\" frameBorder=\"0\"></iframe>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\">\n                <div class=\"credits\">\n                    <br> Agency: La Moulade\n                    <br> Design:\n                    <a href=\"http://www.wastberg.com/\" target=\"_blank\">Wästberg</a>\n                    <br> Animation:\n                    <a href=\"http://www.mickeyandjohnny.com/johnny/\" target=\"_blank\">Johnny Kelly</a>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row no-gutters mt-md-4\">\n            <div class=\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\">\n\n                <div class=\"text\">\n                    <div class=\"inner\">\n                        <span class=\"title\">Industrial Facility w152</span>\n\n                        <!-- <span class=\"year\">2015</span> -->\n\n                        <div class=\"description\">\n                            To present a lamp designed by\n                            <a href=\"http://www.industrialfacility.co.uk/\" target=\"_blank\">Industrial Facility</a> and\n                            <a href=\"http://www.wastberg.com/\" target=\"_blank\">Wästberg</a>, we created a single page application with several frame by frame animations based on scroll interaction. You can try interacting with the image above.\n                            <br>\n                            <br>\n                            <span class=\"link\">\n                                <a href=\"https://www.wastberg.com/collections/w152-busby/about/\" target=\"_blank\">More info</a>\n                            </span>\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n\n\n<div class=\"images\">\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src='../assets/work/w152/scroll-parts.jpg'>\n                    <!-- <div class=\"caption\"></div> -->\n                </div>\n            </div>\n        </div>\n    </div>\n\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src='../assets/work/w152/main.jpg'>\n                    <!-- <div class=\"caption col-8 px-0\"></div> -->\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"art image row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <img class=\"img\" src='../assets/work/w152/scroll-techinfo.jpg'>\n                    <!-- <div class=\"caption\"></div> -->\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"art vimeo row no-gutters pb-2 pb-md-4\">\n        <div class=\"col\">\n            <div class=\"row-zoom row no-gutters px-2 px-md-4\">\n                <div class=\"col-zoom col-12 col-md-8\">\n                    <iframe id=\"vimeo-241331200\" class=\"vimeo-iframe\" src=\"//player.vimeo.com/video/241331200?color=ffffff&title=0&byline=0&portrait=0\" width=\"100%\" height=\"500\" style=\"width:100%;height:500px;\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n                    <div class=\"caption\">\n                        Screen capture of the scroll.\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  bio: __webpack_require__(36),
  contact: __webpack_require__(37)
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<div class=\"row no-gutters py-md-4 px-md-4 px-2 py-2\">\n  <div class=\"col-12\">\n\n    <div class=\"row no-gutters\">\n      <div class=\"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4\">\n        <!-- <h1 className='title'>Bio</h1> -->\n\n        <h2>Bio</h2>\n        \n        <p class=\"sub\">\n          Visual arts, computational design, front end development\n        </p>\n        <p>\n          My name is Esteban. I am a freelance developer based in London. In 2005 I graduated in art and cinema studies at the University of Bologna, Italy. Today I create interactive applications in collaboration with creative studios, designers, artists.\n        </p>\n\n        <h2>Tech</h2>\n        <p>\n          Javascript, Three.js / WebGL, canvas 2D, D3.js, Node, React, Backbone, Babel, Webpack, Gulp, etc.\n        </p>\n\n        <h2>Clients & Partners</h2>\n        <!-- In the last years I have worked with: -->\n        <ul>\n          <li>\n            <a href='http://www.field.io/' target='_blank'>Field.io, London</a>\n          </li>\n          <li>\n            <a href='http://www.theguardian.com/uk/' target='_blank'>The Guardian, London</a>\n            <ul>\n                <li>\n                  Spotify, Nespresso, Paramount, Barclays, Natwest, Heathrow\n                </li>\n              </ul>\n          </li>\n          <li>\n            <a href='http://signal-noise.co.uk/' target='_blank'>Signal | Noise, London</a>\n            <ul>\n              <li>The Economist</li>\n            </ul>\n          </li>\n          <li>\n            <a href='http://www.toasterltd.com/' target='_blank'>Toaster, London</a>\n            <ul>\n              <li>Google</li>\n            </ul>\n          </li>\n          <li>\n            <a href='http://www.artificialrome.com/' target='_blank'>Artificial Rome, Berlin</a>\n            <ul>\n              <li>Siemens, Sennheiser</li>\n            </ul>\n          </li>\n          <li>\n            <a href='http://www.agencepoupeesrusses.com/' target='_blank'>Poupées Russes, Paris</a>\n            <ul>\n              <li>Guerlain, Dior</li>\n            </ul>\n          </li>\n          <li>\n            La Moulade, London\n            <ul>\n              <li>\n                <a href='http://www.christianlouboutin.com/' target='_blank'>Christian Louboutin</a>,\n                <a href='http://www.industrialfacility.com/' target='_blank'>Industrial Facility</a>,\n                <a href='http://www.wastberg.com/' target='_blank'>Wastberg</a>\n              </li>\n            </ul>\n          </li>\n          <li>\n            <a href='http://www.mazarine.com/' target='_blank'>Mazarine Digital, Paris</a>\n            <ul>\n              <li>Chanel, Dior, Caroll, Carven, Biotherm, Club Med, etc.</li>\n            </ul>\n          </li>\n          <li>\n            <a href='http://www.betc-life.com/fr/' target='_blank'>BETC, Paris</a>\n            <ul>\n              <li>Peugeot, Canal +, Pages Jaunes, Sixt, etc.</li>\n            </ul>\n          </li>\n          <li>\n            <a href='http://www.buzzman.fr/' target='_blank'>Buzzman, Paris</a>\n            <ul>\n              <li>Microsoft Bing, MTV, Cannes Lions, etc.</li>\n            </ul>\n          </li>\n\n          <li>\n            <a href='http://www.heineken.fr/' target='_blank'>Heineken France, Paris</a>\n          </li>\n          <li>\n            <a href='http://www.alaincharlesperrot.com/' target='_blank'>Alain Charles Perrot, Architecte - Paris</a>\n          </li>\n          <li>\n            <a href='http://www.mademoisellechapeaux.com/' target='_blank'>Mademoiselle Chapeaux - Paris</a>\n          </li>\n          <li>\n            <a href='http://www.galeriecharlot.com/' target='_blank'>Galerie Charlot - Paris</a>\n          </li>\n          <li>\n            <a href='http://www.ponctuelle.fr/' target='_blank'>Ponctuelle Light Design - Paris</a>\n          </li>\n          <li>\n            <a href='http://www.dancityfestival.com/' target='_blank'>Dancity Festival - Italy</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<strong>Esteban ALMIRON</strong>\n<br>\nLondon E8\n<br>\n<br>\n<a href=\"#\" rel=\"mail/perkyp*at\" class=\"rj4kj325jn88dJ3HwwlP\"></a>\n<br>\n<a href=\"https://twitter.com/perkyp_at\" target=\"_blank\">Twitter</a>\n<br>\n<a href=\"https://www.linkedin.com/in/estebanalmiron\" target=\"_blank\">Linkedin</a>"

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
/******/ ]);