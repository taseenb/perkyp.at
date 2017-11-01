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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
  port: env.PORT || 8888,
  host: env.HOST || '0.0.0.0'
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ListItem = __webpack_require__(27);
const Detail = __webpack_require__(28);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// require('source-map-support').install()
const config = __webpack_require__(2);
const app = __webpack_require__(9);
const debug = __webpack_require__(5)('app:www');
const http = __webpack_require__(30);

const port = normalizePort(config.port);
app.set('port', port);

const server = http.createServer(app);

server.listen(app.get('port'));
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
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
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const config = __webpack_require__(2);
const express = __webpack_require__(4);
const compression = __webpack_require__(10);
// const debug = require('debug')('app:main')// Site router
const siteRouter = __webpack_require__(11);

const app = express();

app.set('port', process.env.PORT || 8088);

app.enable('trust proxy'); // needed to correctly detext http or https in requests

app.set('view engine', 'ejs');

if (config.env === 'production') {
  app.use(compression());
  // app.enable('view cache')
}

// Static files
app.use('/assets', express.static('public/assets'));

// React app (routing is managed by React router, including 404)
app.use('/', siteRouter);

module.exports = app;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const config = __webpack_require__(2);
const express = __webpack_require__(4);
const debug = __webpack_require__(5)('app:site');

// Data
const initialData = __webpack_require__(12);

// React
const React = __webpack_require__(0);
const ReactDOMServer = __webpack_require__(22);
const StaticRouter = __webpack_require__(6).StaticRouter;
const App = __webpack_require__(23);

// Router
const router = express.Router();
router.get('*', (req, res) => {
  const context = {};

  const initialMarkup = ReactDOMServer.renderToString(React.createElement(
    StaticRouter,
    { location: req.url, context: context },
    React.createElement(App, { initialData: initialData })
  ));

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    // Add the requested id if present
    initialData.requestedId = req.params.id;

    // Add url and path information

    // Base url
    const protocol = req.protocol; // protocol = http or https
    const hostname = req.headers.host; // hostname = 'localhost:8080'
    const path = req.path; // pathname = '/MyApp'
    const url = protocol + '://' + hostname + '/';

    debug(url, context);

    initialData.protocol = protocol;
    initialData.hostname = hostname;
    initialData.path = path;
    initialData.url = url;

    res.render('index', {
      initialMarkup,
      initialData,
      bundle: config.env === 'production' ? 'bundle.min.js' : 'bundle.js',
      styles: config.env === 'production' ? 'style.min.css' : 'style.css'
    });
    res.end();
  }
});

module.exports = router;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const works = __webpack_require__(13);
const pages = __webpack_require__(19);

module.exports = {
  title: 'Perky Pat',
  metaKeywords: 'key1, key2, key3',
  metaDescription: 'Description here.',
  ogTitle: 'Perky Pat Designs',
  ogDescription: 'Description here.',
  works: works,
  pages: pages
};

/***/ }),
/* 13 */
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
  detail: __webpack_require__(14),
  template: 'base' // can be 'base' or null (default is null)
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
  detail: __webpack_require__(15),
  template: 'base' // can be 'base' or null (default is null)
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
  detail: __webpack_require__(16),
  template: 'base' // can be 'base' or null (default is null)
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
  detail: __webpack_require__(17),
  template: 'base' // can be 'base' or null (default is null)
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
  detail: __webpack_require__(18),
  template: 'base' // can be 'base' or null (default is null)
}];

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\">\n    <div class=\"head rel-fullscreen\">\n        <!-- <div class=\"cover abs-percent-fullscreen\"></div> -->\n        <div class=\"shadow abs-percent-fullscreen\"></div>\n        <div class=\"border abs-percent-fullscreen\"></div>\n\n        <div class=\"bg\" style=\"background-image:url(/assets/works/the-hunt/main.jpg)\"></div>\n\n        <div class=\"credits\">\n            <strong>The hunt</strong> (2017)\n            <br> 3D generative never-ending animation\n            <br> WebGL, Three.js, GLSL\n        </div>\n\n        <div class=\"scroll-down\">\n            <svg class='svg-icon white-chevron' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>\n                <polygon points='40,5.8 34.3,0 10,25 34.3,50 40,44.2 21.4,25' />\n            </svg>\n        </div>\n    </div>\n\n    <div class=\"inner inner-container\">\n        <div class=\"text\">\n            <div class=\"inner\">\n                <span class=\"title\">The hunt</span>\n\n                <span class=\"year\">2017</span>\n\n                <div class=\"description\">\n                    Abstract 3D animation. Octahedron hunted by lines. Three.js / WebGL, GLSL, perlin noise.\n                    <br>\n                    <br>\n                </div>\n\n                <span class=\"link\">\n                    <a href=\"https://the-hunt.surge.sh\" target=\"_blank\">Link</a>\n                </span>\n\n            </div>\n        </div>\n\n        <div class=\"images\">\n            <div class=\"art image\">\n                <img src='../assets/works/the-hunt/main.jpg'>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\">\n    <div class=\"head rel-fullscreen\">\n        <div class=\"shadow abs-percent-fullscreen\"></div>\n        <div class=\"border abs-percent-fullscreen\"></div>\n\n        <div class=\"bg bg-align-left bg-align-bottom\" style=\"background-image:url(/assets/works/the-airport-of-the-future/bg.jpg)\"></div>\n\n        <div class=\"credits\">\n            <strong>The airport of the future</strong> (2016)\n            <br> Design:\n            <a href=\"https://guardianlabs.theguardian.com/\">The Guardian Labs</a>\n            <br> Illustration:\n            <a href=\"http://www.samchivers.com/\">Sam Chivers</a>\n            <br> Code + 2D animation: Esteban Almiron\n        </div>\n\n        <div class=\"scroll-down\">\n            <svg class='svg-icon white-chevron' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>\n                <polygon points='40,5.8 34.3,0 10,25 34.3,50 40,44.2 21.4,25' />\n            </svg>\n        </div>\n    </div>\n\n    <div class=\"inner inner-container\">\n\n        <div class=\"text\">\n            <div class=\"inner\">\n                <span class=\"title\">The airport of the future</span>\n                <!-- 2016 -->\n                <div class=\"description\">\n                    Designed by\n                    <a href=\"https://guardianlabs.theguardian.com/\">The Guardian Labs</a>, this web application shows animated visions of a possible airport of the future. I created a series of interactive 2D animations from the absurdly beautiful illustrations by\n                    <a href=\"http://www.samchivers.com/\">Sam Chivers</a>, with a 70s sci-fi taste.\n                </div>\n            </div>\n        </div>\n\n        <div class=\"images\">\n\n            <div class=\"art vimeo \">\n                <iframe id=\"vimeo-184683860\" class=\"vimeo-iframe\" src=\"//player.vimeo.com/video/184683860\" width=\"751\" height=\"422\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\" style=\"width: 751px; height: 422px;\" data-ready=\"true\"></iframe>\n            </div>\n\n            <div class=\"art vimeo last\">\n                <iframe id=\"vimeo-184684957\" class=\"vimeo-iframe\" src=\"//player.vimeo.com/video/184684957\" width=\"751\" height=\"751\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\" style=\"width: 751px; height: 751px;\" data-ready=\"true\"></iframe>\n            </div>\n\n        </div>\n    </div>\n\n</div>"

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\">\n\n    <div class=\"head\">\n        <div class=\"shadow abs-percent-fullscreen\"></div>\n\n        <div class=\"border abs-percent-fullscreen\"></div>\n\n        <!-- <div class=\"header\">\n            <h1 class=\"white\">Fan Beat\n                <span>2015</span>\n            </h1>\n\n            <div class=\"description\">\n                Designed by\n                <a href=\"http://www.studio-output.com/\" target=\"_blank\">Studio Output</a> (London) and\n                <a href=\"http://www.field.io/\" target=\"_blank\">Field.io</a> (London), Fan Beat is an installation for concerts based on a wall projection and a large touch screen. The installation visualizes the social interactions as generative creatures (metaballs) during the concert.\n            </div>\n        </div> -->\n\n        <div class=\"video-container\">\n            <video class=\"video-cover\" autoplay loop src=\"/assets/works/fan-beat/wall-HD.mp4\" width=\"1920\" height=\"1072\"></video>\n        </div>\n        \n        <!-- <div class=\"bg abs-percent-fullscreen bg-align-left bg-align-bottom\" style=\"background-image:url(/assets/works/fan-beat/bg.jpg)\"></div> -->\n\n        <div class=\"credits\">\n            <!-- <strong>Fan Beat</strong> (2015) -->\n            <!-- <br>  -->\n            Agency:\n            <a href=\"http://www.studio-output.com/\" target=\"_blank\">Studio Output</a> +\n            <a href=\"http://www.field.io/\" target=\"_blank\">Field.io</a>\n            <br> Credits:\n            <a href=\"http://jocabola.com\" target=\"_blank\">Jocabola</a>, Riccardo Cambiassi\n        </div>\n\n        <div class=\"scroll-down\">\n            <svg class='svg-icon white-chevron' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>\n                <polygon points='40,5.8 34.3,0 10,25 34.3,50 40,44.2 21.4,25' />\n            </svg>\n        </div>\n    </div>\n\n    <div class=\"inner inner-container\">\n\n        <div class=\"images\">\n\n            <div class=\"art vimeo\">\n                <iframe id=\"vimeo-151087915\" class=\"vimeo-iframe\" src=\"//player.vimeo.com/video/151087915\" width=\"751\" height=\"422\" frameborder=\"0\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\" style=\"width: 751px; height: 422px;\" data-ready=\"true\"></iframe>\n            </div>\n\n        </div>\n\n        <div class=\"text\">\n            <div class=\"inner\">\n                <span class=\"title\">Fan Beat</span>\n\n                <!-- <span class=\"year\">2016</span> -->\n\n                <div class=\"description\">\n                    Designed by\n                    <a href=\"http://www.studio-output.com/\" target=\"_blank\">Studio Output</a> (London) and\n                    <a href=\"http://www.field.io/\" target=\"_blank\">Field.io</a> (London), Fan Beat is an installation for concerts based on a wall projection and a large touch screen. The installation visualizes the social interactions as generative creatures (metaballs) during the concert.\n                    <br>\n                    <br> Metaballs animations:\n                    <a href=\"http://jocabola.com\" target=\"_blank\">Jocabola</a>\n                    <br>\n                    <br> Agencies:\n                    <a href=\"http://www.studio-output.com/\" target=\"_blank\">Studio Output</a> +\n                    <a href=\"http://www.studio-output.com/\" target=\"_blank\">Field.io</a>\n                </div>\n\n                <span class=\"link\">\n                    <a href=\"http://www.studio-output.com/case_study/sap-live-nation-fanbeat/\">More info</a>\n                </span>\n\n            </div>\n        </div>\n\n\n\n    </div>\n\n</div>"

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<div class=\"inner inner-container\">\n    <div class=\"text\">\n        <div class=\"inner\">\n            <span class=\"title\">Pride & Prejudice</span>\n\n            <span class=\"year\">2016</span>\n\n            <div class=\"description\">\n                Designed by\n                <a href=\"http://signal-noise.co.uk/\" target=\"_blank\">Signal Noise</a>, this application shows data collected by\n                <a href=\"http://www.economist.com/\" target=\"_blank\">The Economist</a>, for an international event in support of LGBT rights:\n                <a href=\"http://prideandprejudice.economist.com/research/\" target=\"_blank\">Pride &amp; Prejudice</a>.\n                <br> The most interesting part of the work is a long interactive\n                <a href=\"https://en.wikipedia.org/wiki/Streamgraph\" target=\"\" _blank=\"\">streamgraph</a> that spans across many screens.\n                <br> The second video shows the streamgraph in its early stage.\n                <br>\n                <br> Agency:\n                <a href=\"http://signal-noise.co.uk/\" target=\"_blank\">Signal Noise</a>, London\n                <br>\n                <br>\n            </div>\n\n            <span class=\"link\">\n                <a href=\"https://d1xso9gob5fu6y.cloudfront.net/\" target=\"_blank\">Link</a>\n            </span>\n\n        </div>\n    </div>\n\n    <div class=\"images\">\n        <div class=\"art image\">\n            <img src='../assets/works/pride-prejudice/main.jpg'>\n        </div>\n    </div>\n</div>"

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer\">\n    <div class=\"head rel-fullscreen\">\n        <iframe src=\"/assets/works/w152/iframe/index.html\" frameBorder=\"0\"></iframe>\n\n        <div class=\"border abs-percent-fullscreen\"></div>\n        <div class=\"shadow abs-percent-fullscreen\"></div>\n\n        <div class=\"credits\">\n            <strong>Industrial Facility w152</strong> (2016)\n            <br> Agency: La Moulade\n            <br> Design:\n            <a href=\"http://www.wastberg.com/\" target=\"_blank\">Wästberg</a>\n            <br> Animation:\n            <a href=\"http://www.mickeyandjohnny.com/johnny/\" target=\"_blank\">Johnny Kelly</a>\n            <br> Code: Esteban Almiron\n        </div>\n\n        <div class=\"scroll-down\">\n            <svg class='svg-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>\n                <polygon points='40,5.8 34.3,0 10,25 34.3,50 40,44.2 21.4,25' />\n            </svg>\n        </div>\n    </div>\n\n    <div class=\"inner inner-container\">\n        <div class=\"text\">\n            <div class=\"inner\">\n                <span class=\"title\">Industrial Facility w152</span>\n\n                <span class=\"year\">2015</span>\n\n                <div class=\"description\">\n                    Single page application based on a long scroll that triggers interactive frame by frame animations.\n                    <br> The lamp was designed by\n                    <a href=\"http://www.industrialfacility.co.uk/\" target=\"_blank\">Industrial Facility</a> and\n                    <a href=\"http://www.wastberg.com/\" target=\"_blank\">Wästberg</a>.\n\n                    <br>\n                    <br> Animation + Illustration:\n                    <a href=\"http://www.mickeyandjohnny.com/johnny/\" target=\"_blank\">Johnny Kelly</a>, London\n                    <br>\n                    <br> Agency: La Moulade, London\n                    <br>\n                    <br>\n                </div>\n\n                <span class=\"link\">\n                    <a href=\"https://www.wastberg.com/collections/w152-busby/about/\" target=\"_blank\">More info</a>\n                </span>\n\n            </div>\n        </div>\n\n        <div class=\"images\">\n            <div class=\"art image\">\n                <img src='../assets/works/w152/main.jpg'>\n            </div>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  bio: __webpack_require__(20),
  contact: __webpack_require__(21)
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<div class='inner inner-container'>\n  <!-- <h1 className='title'>Bio.</h1> -->\n  <br /> My name is Esteban. I explore visual arts and computational design, mostly through front end, web technologies.\n  <br /> In 2005 I graduated in art and cinema studies at the University of Bologna, Italy. Today I create interactive applications in collaboration with creative studios, designers and artists.\n  <br />\n  <br />\n  <h2>Tech</h2>\n  If you have a project and wonder if I could help, these are the tools and techniques that I use: Javascript, Three.js / WebGL, canvas 2D, D3.js, Node, most typical tools (Babel, Webpack, Gulp, etc) and some frameworks (Backbone and React).\n  <br />\n  <br />\n  <h2>WORK</h2>\n  In the last years I have worked with:\n  <ul>\n    <li>\n      <a href='http://www.field.io/' target='_blank'>Field.io, London</a>\n    </li>\n    <li>\n      <a href='http://www.theguardian.com/uk/' target='_blank'>The Guardian, London</a>\n    </li>\n    <li>\n      <a href='http://signal-noise.co.uk/' target='_blank'>Signal | Noise, London</a>\n      <ul>\n        <li>The Economist</li>\n      </ul>\n    </li>\n    <li>\n      <a href='http://www.toasterltd.com/' target='_blank'>Toaster, London</a>\n      <ul>\n        <li>Google</li>\n      </ul>\n    </li>\n    <li>\n      <a href='http://www.artificialrome.com/' target='_blank'>Artificial Rome, Berlin</a>\n      <ul>\n        <li>Siemens, Sennheiser</li>\n      </ul>\n    </li>\n    <li>\n      <a href='http://www.agencepoupeesrusses.com/' target='_blank'>Poupées Russes, Paris</a>\n      <ul>\n        <li>Guerlain, Dior</li>\n      </ul>\n    </li>\n    <li>\n      La Moulade, London\n      <ul>\n        <li>\n          <a href='http://www.christianlouboutin.com/' target='_blank'>Christian Louboutin</a>,\n          <a href='http://www.industrialfacility.com/' target='_blank'>Industrial Facility</a>,\n          <a href='http://www.wastberg.com/' target='_blank'>Wastberg</a>\n        </li>\n      </ul>\n    </li>\n    <li>\n      <a href='http://www.mazarine.com/' target='_blank'>Mazarine Digital, Paris</a>\n      <ul>\n        <li>Chanel, Dior, Caroll, Carven, Biotherm, Club Med, etc.</li>\n      </ul>\n    </li>\n    <li>\n      <a href='http://www.betc-life.com/fr/' target='_blank'>BETC, Paris</a>\n      <ul>\n        <li>Peugeot, Canal +, Pages Jaunes, Sixt, etc.</li>\n      </ul>\n    </li>\n    <li>\n      <a href='http://www.buzzman.fr/' target='_blank'>Buzzman, Paris</a>\n      <ul>\n        <li>Microsoft Bing, MTV, Cannes Lions, etc.</li>\n      </ul>\n    </li>\n\n    <li>\n      <a href='http://www.heineken.fr/' target='_blank'>Heineken France, Paris</a>\n    </li>\n    <li>\n      <a href='http://www.alaincharlesperrot.com/' target='_blank'>Alain Charles Perrot, Architecte - Paris</a>\n    </li>\n    <li>\n      <a href='http://www.mademoisellechapeaux.com/' target='_blank'>Mademoiselle Chapeaux - Paris</a>\n    </li>\n    <li>\n      <a href='http://www.galeriecharlot.com/' target='_blank'>Galerie Charlot - Paris</a>\n    </li>\n    <li>\n      <a href='http://www.ponctuelle.fr/' target='_blank'>Ponctuelle Light Design - Paris</a>\n    </li>\n    <li>\n      <a href='http://www.dancityfestival.com/' target='_blank'>Dancity Festival - Italy</a>\n    </li>\n  </ul>\n</div>"

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<strong>Esteban ALMIRON</strong>\n<br>\nLondon\n<br>\n<br>\n<a href=\"#\" rel=\"mail/perkyp*at\" class=\"rj4kj325jn88dJ3HwwlP\"></a>\n<br>\n<a href=\"https://twitter.com/perkyp_at\">@perkyp_at</a> (NEW)\n<br>\n<a href=\"https://www.linkedin.com/in/estebanalmiron\" target=\"_blank\">Linkedin</a>"

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

var _Bio = __webpack_require__(24);

var _Bio2 = _interopRequireDefault(_Bio);

var _ = __webpack_require__(25);

var _2 = _interopRequireDefault(_);

var _Works = __webpack_require__(26);

var _Works2 = _interopRequireDefault(_Works);

var _Work = __webpack_require__(7);

var _Work2 = _interopRequireDefault(_Work);

var _Nav = __webpack_require__(29);

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

  onRouterChange(e) {
    console.log(e);
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouterDom.Switch,
        { onChange: this.onRouterChange },
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: () => _react2.default.createElement(_Works2.default, { works: this.state.works }) }),
        _react2.default.createElement(_reactRouterDom.Route, {
          path: '/work/:seo',
          component: router => _react2.default.createElement(_Work2.default, {
            router: router,
            works: this.state.works,
            isDetail: true,
            isBrowser: this.props.isBrowser,
            isMobile: this.props.isMobile
          })
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

module.exports = App;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const React = __webpack_require__(0);

const Bio = props => React.createElement('div', { id: 'bio', className: 'page', dangerouslySetInnerHTML: { __html: props.html } });

module.exports = Bio;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Page = props => _react2.default.createElement(
  'div',
  { id: '404', className: 'page' },
  _react2.default.createElement(
    'div',
    { className: 'absolute-center' },
    _react2.default.createElement(
      'h1',
      { className: 'title' },
      '404 | Not found'
    )
  )
);

module.exports = Page;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Work = __webpack_require__(7);

var _Work2 = _interopRequireDefault(_Work);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Works = props => _react2.default.createElement(
  'div',
  { id: 'works', className: 'grid' },
  _react2.default.createElement(
    'div',
    { className: 'inner inner-container' },
    props.works.map(work => {
      return _react2.default.createElement(_Work2.default, _extends({ key: work.uid }, work, { isDetail: false }));
    })
  )
);

Works.propTypes = {
  works: _propTypes2.default.array.isRequired
};

module.exports = Works;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ListItem = props => {
  return _react2.default.createElement(
    _reactRouterDom.Link,
    { to: `/work/${props.seo}`, id: `item-${props.seo}`, className: 'list-item' },
    _react2.default.createElement(
      'span',
      { className: 'image-wrapper' },
      _react2.default.createElement('img', { src: `assets/works/${props.seo}/${props.preview}` })
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

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
    }
  }

  componentWillUnmount() {
    if (this.props.isBrowser) {
      window.removeEventListener('resize', this.updatesize);
    }
  }

  componentDidMount() {
    if (this.props.isBrowser) {
      window.addEventListener('resize', this.updatesize);
      this.updatesize();
    }
  }

  updatesize() {
    $('.head').height(window.innerHeight);
    console.log(window.innerHeight);
  }

  render() {
    const seo = this.props.seo;
    const data = this.props.data;
    const cssClass = data.template === 'base' ? 'base' : null;

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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(3);

var _reactRouter = __webpack_require__(6);

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

    return _react2.default.createElement(
      'nav',
      { id: 'nav', className: this.state.open ? 'open' : null },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: this.updateBackClass(path) + ' back', to: '/' },
        _react2.default.createElement(
          'svg',
          { className: 'svg-icon', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 50 50' },
          _react2.default.createElement('polygon', { points: '40,5.8 34.3,0 10,25 34.3,50 40,44.2 21.4,25' })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'switch', onClick: this.toggleNav },
        _react2.default.createElement(
          'svg',
          { className: 'svg-icon', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 50 50' },
          _react2.default.createElement('path', { d: 'M50,28.57H28.57V50H21.43V28.57H0V21.43H21.43V0h7.14V21.43H50Z' })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'popup', onClick: this.toggleNav },
        _react2.default.createElement(
          'div',
          { className: 'inner' },
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
          _react2.default.createElement('div', { className: 'contact', dangerouslySetInnerHTML: { __html: this.props.contactHtml } })
        )
      ),
      _react2.default.createElement('div', { className: 'cover', onClick: this.toggleNav })
    );
  }
}

module.exports = (0, _reactRouter.withRouter)(Nav);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ })
/******/ ]);