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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_Bio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Bio */ \"./src/components/pages/Bio.js\");\n/* harmony import */ var _pages_404__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/404 */ \"./src/components/pages/404.js\");\n/* harmony import */ var _Works__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Works */ \"./src/components/Works.js\");\n/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Work */ \"./src/components/Work.js\");\n/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Nav */ \"./src/components/Nav.js\");\n\n\n\n\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    props.initialData.isBrowser = props.isBrowser || false;\n    props.initialData.isMobile = props.isMobile || false;\n    this.state = props.initialData;\n  }\n\n  onResize() {// this.setState({\n    //   width: window.innerWidth,\n    //   height: window.innerHeight\n    // });\n  }\n\n  componentDidUpdate(prevProps) {\n    if (this.props.location !== prevProps.location) {\n      this.onRouteChanged();\n    }\n  }\n\n  onRouteChanged() {\n    if (this.props.isBrowser) {\n      // Scroll to top\n      window.scrollTo(0, 0);\n    }\n  }\n\n  render() {\n    const worksSeo = this.state.works.map(w => w.seo);\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], {\n      onChange: this.onRouterChange\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n      exact: true,\n      path: \"/\",\n      component: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Works__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        works: this.state.works\n      })\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n      path: \"/work/:seo\",\n      component: router => {\n        const requestedWork = router.match.params.seo;\n\n        if (worksSeo.indexOf(requestedWork) > -1) {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Work__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n            router: router,\n            works: this.state.works,\n            isDetail: true,\n            isBrowser: this.props.isBrowser,\n            isMobile: this.props.isMobile\n          });\n        } else {\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_404__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null);\n        }\n      }\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n      exact: true,\n      path: \"/bio\",\n      component: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Bio__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        html: this.state.pages.bio\n      })\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n      component: _pages_404__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      contactHtml: this.state.pages.contact\n    }));\n  }\n\n}\n\nApp.propTypes = {\n  initialData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_3__[\"withRouter\"])(App));\n\n//# sourceURL=webpack:///./src/components/App.js?");

/***/ }),

/***/ "./src/components/Nav.js":
/*!*******************************!*\
  !*** ./src/components/Nav.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass Nav extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      current: '',\n      open: false\n    };\n    this.toggleNav = this.toggleNav.bind(this);\n  }\n\n  componentDidMount() {\n    // Render email address\n    const emailLink = $('.rj4kj325jn88dJ3HwwlP')[0];\n\n    if (emailLink) {\n      let email = emailLink.rel.replace('/', '@').replace('*', '.');\n      const part = ['m', 'a', 'i', 'l', 't', 'o', ':'];\n      emailLink.href = part.join('') + email;\n      $(emailLink).text(email);\n    }\n  }\n\n  toggleNav() {\n    this.setState({\n      open: !this.state.open\n    });\n  }\n\n  updateBackClass(path) {\n    return path === '/' ? 'hide' : '';\n  }\n\n  render() {\n    const {\n      location\n    } = this.props;\n    const path = location.pathname;\n    const btnClasses = ' py-1 px-1 py-md-2 px-md-1 svg-wrapper';\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", {\n      id: \"nav\",\n      className: this.state.open ? 'open' : null\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"ui d-flex justify-content-end py-1 px-1 py-md-2 px-md-2\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      className: this.updateBackClass(path) + btnClasses + ' back',\n      to: \"/\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n      className: \"svg-icon\",\n      xmlns: \"http://www.w3.org/2000/svg\",\n      viewBox: \"0 0 50 50\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"polygon\", {\n      points: \"40,5.8 34.3,0 10,25 34.3,50 40,44.2 21.4,25\"\n    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: btnClasses + ' switch',\n      onClick: this.toggleNav\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n      className: \"svg-icon\",\n      xmlns: \"http://www.w3.org/2000/svg\",\n      viewBox: \"0 0 50 50\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M50,28.57H28.57V50H21.43V28.57H0V21.43H21.43V0h7.14V21.43H50Z\"\n    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"popup\",\n      onClick: this.toggleNav\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"row no-gutters py-md-4 px-md-4 px-2 py-2\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"col-12 col-md-8\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      className: \"link\",\n      to: \"/\"\n    }, \"Work\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n      className: \"link\",\n      to: \"/bio\"\n    }, \"Bio\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"contact\",\n      dangerouslySetInnerHTML: {\n        __html: this.props.contactHtml\n      }\n    })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"cover\",\n      onClick: this.toggleNav\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_router__WEBPACK_IMPORTED_MODULE_2__[\"withRouter\"])(Nav));\n\n//# sourceURL=webpack:///./src/components/Nav.js?");

/***/ }),

/***/ "./src/components/Work.js":
/*!********************************!*\
  !*** ./src/components/Work.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _work_ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./work/ListItem */ \"./src/components/work/ListItem.js\");\n/* harmony import */ var _work_Detail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work/Detail */ \"./src/components/work/Detail.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\nclass Work extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  render() {\n    if (this.props.isDetail) {\n      const seo = this.props.router.match.params.seo;\n      const work = this.props.works.find(w => w.seo === seo);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_work_Detail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _extends({\n        seo: seo,\n        data: work\n      }, this.props));\n    } else {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_work_ListItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], this.props);\n    }\n  }\n\n}\n\nWork.propTypes = {\n  isDetail: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  router: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,\n  works: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\n\n//# sourceURL=webpack:///./src/components/Work.js?");

/***/ }),

/***/ "./src/components/Works.js":
/*!*********************************!*\
  !*** ./src/components/Works.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Work__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Work */ \"./src/components/Work.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst Works = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"row no-gutters py-md-4 px-md-4 px-2 py-2 px-sm-4\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  id: \"works\",\n  className: \"col-12 col-md-8\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"spacer\"\n}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"inner row\"\n}, props.works.map(work => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Work__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({\n    key: work.uid\n  }, work, {\n    isDetail: false\n  }));\n}))));\n\nWorks.propTypes = {\n  works: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Works);\n\n//# sourceURL=webpack:///./src/components/Works.js?");

/***/ }),

/***/ "./src/components/pages/404.js":
/*!*************************************!*\
  !*** ./src/components/pages/404.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Page = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  id: \"page404\",\n  className: \"container-fluid\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"row align-items-center h-100\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  className: \"col-12\"\n}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n  className: \"title text-center\"\n}, \"404 | Not found\"))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\n\n//# sourceURL=webpack:///./src/components/pages/404.js?");

/***/ }),

/***/ "./src/components/pages/Bio.js":
/*!*************************************!*\
  !*** ./src/components/pages/Bio.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Bio = props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n  id: \"bio\",\n  className: \"page\",\n  dangerouslySetInnerHTML: {\n    __html: props.html\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bio);\n\n//# sourceURL=webpack:///./src/components/pages/Bio.js?");

/***/ }),

/***/ "./src/components/work/Detail.js":
/*!***************************************!*\
  !*** ./src/components/work/Detail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_create_cover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/create-cover */ \"./src/utils/create-cover.js\");\n/* harmony import */ var _utils_create_cover__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils_create_cover__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vimeo/player */ \"@vimeo/player\");\n/* harmony import */ var _vimeo_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_vimeo_player__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nclass Detail extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      seo: props.seo,\n      data: props.data\n    };\n\n    if (this.props.isBrowser) {\n      this.updatesize = this.updatesize.bind(this);\n      this.toggleZoom = this.toggleZoom.bind(this);\n    }\n  }\n\n  componentWillUnmount() {\n    if (this.props.isBrowser) {\n      window.removeEventListener('resize', this.updatesize);\n      this.disableImageZoom();\n      this.removeVimeoEvents();\n      this.removeIframeEvents();\n    }\n  }\n\n  componentDidMount() {\n    if (this.props.isBrowser) {\n      // Cache DOM elements\n      this.$el = $(`#${this.props.data.seo}`);\n      this.$head = this.$el.find('.head');\n      this.$icons = this.$head.find('.icons'); // Remove autoplay video on mobile (on iphone they start in fullscreen even if hidden)\n\n      if (this.props.isMobile) {\n        const videos = document.querySelectorAll(`#${this.props.seo} video[autoplay]`);\n        videos.forEach(v => v.remove());\n      } // Add resize and update sizes\n\n\n      window.addEventListener('resize', this.updatesize);\n      this.updatesize(); // Cache elements\n\n      this.covers = document.querySelectorAll(`#${this.props.seo} .cover`); // fullscreen cover\n      // Update sizes for cover elements (if there is any)\n\n      this.updateCovers(); // Init zoom\n\n      this.enableImageZoom(); // Init Vimeo\n\n      this.setupVimeo(); // Init icons (fullscreen)\n\n      this.setupIcons();\n    }\n  }\n\n  setupVimeo() {\n    const $vimeos = this.$el.find('.vimeo-iframe');\n    this.players = [];\n    $vimeos.each((i, el) => {\n      this.players[i] = new _vimeo_player__WEBPACK_IMPORTED_MODULE_3___default.a(el);\n    }); // Events\n\n    this.players.forEach((player, i) => {\n      player.on('play', () => {\n        this.players.forEach((p, j) => {\n          if (j !== i) p.pause();\n        });\n      });\n    });\n    this.updatePlayersSize();\n  }\n\n  removeVimeoEvents() {\n    if (this.players) {\n      this.players.forEach((player, i) => {\n        player.off('play');\n      });\n    }\n  }\n\n  setupIcons() {\n    // Fullscreen\n    const $fullscreenBtn = this.$icons.find('.fullscreen-icon');\n    $fullscreenBtn.on('click', e => {\n      $(e.currentTarget).closest('.head').toggleClass('fullscreen');\n    });\n  }\n\n  removeIframeEvents() {\n    this.$icons.find('.fullscreen-icon').off('click');\n  }\n\n  enableImageZoom() {\n    const $images = $(`#${this.props.seo} .image`);\n    this.$images = $images;\n    $images.each((i, image) => {\n      const $image = $(image);\n      if ($image.hasClass('no-zoom')) return;\n\n      if ($image.find('.row-zoom').length && $image.find('.col-zoom').length) {\n        $image.find('.img').on('click', this.toggleZoom);\n      }\n    });\n  }\n\n  disableImageZoom() {\n    this.$images.off('click', this.toggleZoom);\n  }\n\n  toggleZoom(e) {\n    const $el = $(e.currentTarget).closest('.image');\n    const $row = $el.find('.row-zoom');\n    const $col = $el.find('.col-zoom');\n    const zoomed = $el.hasClass('zoomed'); // Copy the row-zoom and col-zoom classes to a temporary data attribute\n    // And copy from data attributes back to the element to restore original size\n\n    if (zoomed) {\n      $row.removeClass().addClass($el.data('row-zoom'));\n      $col.removeClass().addClass($el.data('col-zoom'));\n      $el.removeClass('zoomed');\n    } else {\n      $el.data('row-zoom', $row.attr('class'));\n      $el.data('col-zoom', $col.attr('class'));\n      $row.removeClass().addClass('row-zoom');\n      $col.removeClass().addClass('col-zoom');\n      $el.addClass('zoomed');\n    }\n  }\n\n  updateCovers() {\n    if (this.covers) {\n      this.covers.forEach((el, i) => {\n        const $el = $(el);\n        const $parent = $el.parent();\n        const w = $el.data('width') || el.width || $el.width(); // original element width\n\n        const h = $el.data('height') || el.height || $el.width(); // original element height\n\n        const parentW = $parent.width();\n        const parentH = $parent.height(); // Get cover size and position\n\n        const cover = _utils_create_cover__WEBPACK_IMPORTED_MODULE_2___default()(parentW, parentH, w, h); // Save original size\n\n        $el.data('width', w);\n        $el.data('height', h); // Apply cover size and position to video element\n\n        $el.css(cover);\n\n        if (el instanceof HTMLImageElement || el instanceof HTMLVideoElement || el instanceof HTMLCanvasElement) {\n          el.width = cover.width;\n          el.height = cover.height;\n        }\n      });\n    }\n  }\n\n  updatePlayersSize() {\n    this.players.forEach((player, i) => {\n      player.ready().then(() => {\n        player.getVideoWidth().then(w => {\n          player.getVideoHeight().then(h => {\n            const $player = $(player.element);\n            const ratio = w / h;\n            const width = $($player).width();\n            $($player).height(width / ratio);\n          });\n        });\n      });\n    });\n  }\n\n  updatesize() {\n    // $('.head').height(window.innerHeight)\n    // Resize vimeos - update height, depending on width\n    if (this.players) {\n      this.updatePlayersSize();\n    }\n\n    if (this.covers) {\n      this.updateCovers();\n    }\n  }\n\n  render() {\n    const seo = this.props.seo;\n    const data = this.props.data;\n    const cssClass = data.template === 'default' ? 'default' : null;\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      id: `${seo}`,\n      className: `detail ${cssClass}`,\n      dangerouslySetInnerHTML: {\n        __html: this.props.data.detail\n      }\n    });\n  }\n\n}\n\nDetail.propTypes = {\n  seo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Detail);\n\n//# sourceURL=webpack:///./src/components/work/Detail.js?");

/***/ }),

/***/ "./src/components/work/ListItem.js":
/*!*****************************************!*\
  !*** ./src/components/work/ListItem.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst ListItem = props => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n    to: `/work/${props.seo}`,\n    id: `item-${props.seo}`,\n    className: \"list-item col-12 col-sm-6 col-xl-4 mb-2 mb-md-4\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"image-wrapper\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: `assets/work/${props.seo}/${props.preview}`\n  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"details\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"name\"\n  }, props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"intro\"\n  }, props.intro)));\n};\n\nListItem.propTypes = {\n  seo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  preview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  intro: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListItem);\n\n//# sourceURL=webpack:///./src/components/work/ListItem.js?");

/***/ }),

/***/ "./src/data/initialData.js":
/*!*********************************!*\
  !*** ./src/data/initialData.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _works__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./works */ \"./src/data/works.js\");\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages */ \"./src/data/pages.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  title: 'Perky Pat',\n  metaKeywords: 'Esteban, Almiron, London, freelance, front end, frontend, begatto kitchen, perky pat, perky pat designs ltd, free lance, developer, javascript, coder, creative, artist, programmer, contractor, three.js, webgl, canvas, senior, installation, interactive, experienced, expert, art, generative, technology, designer, site, website, web, design, site, web development, jquery, html, html5, css, css3, interactive, webdesign, portfolio',\n  metaDescription: 'Digital artist, front end developer',\n  ogTitle: 'Perky Pat',\n  ogDescription: 'Art, code',\n  ogImage: 'assets/main.jpg',\n  works: _works__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  pages: _pages__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack:///./src/data/initialData.js?");

/***/ }),

/***/ "./src/data/pages.js":
/*!***************************!*\
  !*** ./src/data/pages.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst pages = {\n  bio: __webpack_require__(/*! ./pages/bio.html */ \"./src/data/pages/bio.html\"),\n  contact: __webpack_require__(/*! ./pages/contact.html */ \"./src/data/pages/contact.html\")\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (pages);\n\n//# sourceURL=webpack:///./src/data/pages.js?");

/***/ }),

/***/ "./src/data/pages/bio.html":
/*!*********************************!*\
  !*** ./src/data/pages/bio.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row no-gutters py-md-4 px-md-4 px-2 py-2\\\">\\n  <div class=\\\"col-12\\\">\\n\\n    <div class=\\\"row no-gutters\\\">\\n      <div class=\\\"col-12 col-sm-10 col-md-8 col-lg-6 col-xl-4\\\">\\n        <!-- <h1 className='title'>Bio</h1> -->\\n\\n        <h2>Bio</h2>\\n        \\n        <p class=\\\"sub\\\">\\n          Visual arts, computational design, front end development\\n        </p>\\n        <p>\\n          My name is Esteban. I am a freelance developer based in London. In 2005 I graduated in art and cinema studies at the University of Bologna, Italy. Today I create interactive applications in collaboration with creative studios, designers, artists.\\n        </p>\\n\\n        <h2>Tech</h2>\\n        <p>\\n          Javascript, Three.js / WebGL, canvas 2D, D3.js, Node, React, Backbone, Babel, Webpack, Gulp, etc.\\n        </p>\\n\\n        <h2>Clients & Partners</h2>\\n        <!-- In the last years I have worked with: -->\\n        <ul>\\n          <li>\\n            <a href='http://www.field.io/' target='_blank'>Field.io, London</a>\\n          </li>\\n          <li>\\n            <a href='http://www.theguardian.com/uk/' target='_blank'>The Guardian, London</a>\\n            <ul>\\n                <li>\\n                  Spotify, Nespresso, Paramount, Barclays, Natwest, Heathrow\\n                </li>\\n              </ul>\\n          </li>\\n          <li>\\n            <a href='http://signal-noise.co.uk/' target='_blank'>Signal | Noise, London</a>\\n            <ul>\\n              <li>The Economist</li>\\n            </ul>\\n          </li>\\n          <li>\\n            <a href='http://www.toasterltd.com/' target='_blank'>Toaster, London</a>\\n            <ul>\\n              <li>Google</li>\\n            </ul>\\n          </li>\\n          <li>\\n            <a href='http://www.artificialrome.com/' target='_blank'>Artificial Rome, Berlin</a>\\n            <ul>\\n              <li>Siemens, Sennheiser</li>\\n            </ul>\\n          </li>\\n          <li>\\n            <a href='http://www.agencepoupeesrusses.com/' target='_blank'>Poupées Russes, Paris</a>\\n            <ul>\\n              <li>Guerlain, Dior</li>\\n            </ul>\\n          </li>\\n          <li>\\n            La Moulade, London\\n            <ul>\\n              <li>\\n                <a href='http://www.christianlouboutin.com/' target='_blank'>Christian Louboutin</a>,\\n                <a href='http://www.industrialfacility.com/' target='_blank'>Industrial Facility</a>,\\n                <a href='http://www.wastberg.com/' target='_blank'>Wastberg</a>\\n              </li>\\n            </ul>\\n          </li>\\n          <li>\\n            <a href='http://www.mazarine.com/' target='_blank'>Mazarine Digital, Paris</a>\\n            <ul>\\n              <li>Chanel, Dior, Caroll, Carven, Biotherm, Club Med, etc.</li>\\n            </ul>\\n          </li>\\n          <li>\\n            <a href='http://www.betc-life.com/fr/' target='_blank'>BETC, Paris</a>\\n            <ul>\\n              <li>Peugeot, Canal +, Pages Jaunes, Sixt, etc.</li>\\n            </ul>\\n          </li>\\n          <li>\\n            <a href='http://www.buzzman.fr/' target='_blank'>Buzzman, Paris</a>\\n            <ul>\\n              <li>Microsoft Bing, MTV, Cannes Lions, etc.</li>\\n            </ul>\\n          </li>\\n\\n          <li>\\n            <a href='http://www.heineken.fr/' target='_blank'>Heineken France, Paris</a>\\n          </li>\\n          <li>\\n            <a href='http://www.alaincharlesperrot.com/' target='_blank'>Alain Charles Perrot, Architecte - Paris</a>\\n          </li>\\n          <li>\\n            <a href='http://www.mademoisellechapeaux.com/' target='_blank'>Mademoiselle Chapeaux - Paris</a>\\n          </li>\\n          <li>\\n            <a href='http://www.galeriecharlot.com/' target='_blank'>Galerie Charlot - Paris</a>\\n          </li>\\n          <li>\\n            <a href='http://www.ponctuelle.fr/' target='_blank'>Ponctuelle Light Design - Paris</a>\\n          </li>\\n          <li>\\n            <a href='http://www.dancityfestival.com/' target='_blank'>Dancity Festival - Italy</a>\\n          </li>\\n        </ul>\\n      </div>\\n    </div>\\n\\n  </div>\\n</div>\"\n\n//# sourceURL=webpack:///./src/data/pages/bio.html?");

/***/ }),

/***/ "./src/data/pages/contact.html":
/*!*************************************!*\
  !*** ./src/data/pages/contact.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<strong>Esteban ALMIRON</strong>\\n<br>\\nLondon E8\\n<br>\\n<br>\\n<a href=\\\"#\\\" rel=\\\"mail/perkyp*at\\\" class=\\\"rj4kj325jn88dJ3HwwlP\\\"></a>\\n<br>\\n<a href=\\\"https://github.com/taseenb\\\" target=\\\"_blank\\\">Github</a>\\n<br>\\n<a href=\\\"https://twitter.com/perkyp_at\\\" target=\\\"_blank\\\">Twitter</a>\\n<br>\\n<a href=\\\"https://www.linkedin.com/in/estebanalmiron\\\" target=\\\"_blank\\\">Linkedin</a>\"\n\n//# sourceURL=webpack:///./src/data/pages/contact.html?");

/***/ }),

/***/ "./src/data/work/fan-beat.html":
/*!*************************************!*\
  !*** ./src/data/work/fan-beat.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row no-gutters py-md-4 px-md-4 dark\\\">\\n    <div class=\\\"col-12\\\">\\n\\n        <div class=\\\"row no-gutters align-items-end\\\">\\n            <div class=\\\"col-12 col-md-8\\\">\\n\\n                <div class=\\\"head\\\">\\n                    <div class=\\\"shadow overlay abs-percent-fullscreen\\\"></div>\\n\\n                    <div class=\\\"icons\\\"></div>\\n\\n                    <div class=\\\"video-container\\\">\\n                        <video class=\\\"video cover\\\" autoplay muted loop src=\\\"/assets/work/fan-beat/wall-HD.mp4\\\" data-width=\\\"1920\\\" data-height=\\\"1072\\\"></video>\\n                    </div>\\n\\n                    <div class=\\\"bg video-fallback\\\" style=\\\"background-image:url(/assets/work/fan-beat/bg.jpg)\\\"></div>\\n                </div>\\n            </div>\\n\\n            <div class=\\\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\\\">\\n                <div class=\\\"credits\\\">\\n                    Agency:\\n                    <a href=\\\"http://www.studio-output.com/\\\" target=\\\"_blank\\\">Studio Output</a> +\\n                    <a href=\\\"http://www.field.io/\\\" target=\\\"_blank\\\">Field.io</a>\\n                    <br> Metaballs:\\n                    <a href=\\\"http://jocabola.com\\\" target=\\\"_blank\\\">Jocabola</a>\\n                    <br>\\n                    WebGL, Three.js, javascript, data visualisation (D3.js).\\n                </div>\\n            </div>\\n        </div>\\n\\n        <div class=\\\"row no-gutters mt-md-4\\\">\\n            <div class=\\\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\\\">\\n\\n                <div class=\\\"text\\\">\\n                    <div class=\\\"inner\\\">\\n                        <span class=\\\"title\\\">Fan Beat</span>\\n\\n                        <div class=\\\"description\\\">\\n                            Designed by\\n                            <a href=\\\"http://www.studio-output.com/\\\" target=\\\"_blank\\\">Studio Output</a> (London) and\\n                            <a href=\\\"http://www.field.io/\\\" target=\\\"_blank\\\">Field.io</a> (London), Fan Beat is an installation for concerts based on a wall projection and a large touch screen. The installation visualizes the social interactions as generative creatures (<a href=\\\"https://en.wikipedia.org/wiki/Metaballs\\\" target=\\\"_blank\\\">metaballs</a>) during the concert.\\n                            <br>\\n                            <br>\\n                            <span class=\\\"link\\\">\\n                                <a href=\\\"http://www.studio-output.com/case_study/sap-live-nation-fanbeat/\\\">More info</a>\\n                            </span>\\n                        </div>\\n\\n                    </div>\\n                </div>\\n\\n            </div>\\n\\n        </div>\\n    </div>\\n</div>\\n\\n\\n\\n\\n<div class=\\\"images\\\">\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/fan-beat/dashboard.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        The touchscreen: a companion app for the wall where people can find details and visualize data about the creatures and the social interactions they represent.\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/fan-beat/dashboard-overview.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        Data viz showing statistics, geographical origin, hashtags, etc.\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/fan-beat/dashboard-transition.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        The dashboard blur effect used for transitions.\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/fan-beat/dashboard-zoom.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        Creatures zoomed in.\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <!-- <div class=\\\"art vimeo\\\">\\n            <iframe id=\\\"vimeo-151087915\\\" class=\\\"vimeo-iframe\\\" src=\\\"//player.vimeo.com/video/151087915\\\" width=\\\"751\\\" height=\\\"422\\\" frameborder=\\\"0\\\" webkitallowfullscreen=\\\"\\\" mozallowfullscreen=\\\"\\\" allowfullscreen=\\\"\\\" style=\\\"width: 751px; height: 422px;\\\" data-ready=\\\"true\\\"></iframe>\\n        </div> -->\\n</div>\"\n\n//# sourceURL=webpack:///./src/data/work/fan-beat.html?");

/***/ }),

/***/ "./src/data/work/glabs.html":
/*!**********************************!*\
  !*** ./src/data/work/glabs.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row no-gutters py-md-4 px-md-4\\\">\\n    <div class=\\\"col-12\\\">\\n\\n        <div class=\\\"row no-gutters align-items-end\\\">\\n            <div class=\\\"col-12 col-md-8\\\">\\n\\n                <div class=\\\"head\\\">\\n                    <!-- <div class=\\\"shadow overlay abs-percent-fullscreen\\\"></div> -->\\n                    <!-- <div class=\\\"border overlay abs-percent-fullscreen\\\"></div> -->\\n\\n                    <div class=\\\"icons\\\"></div>\\n\\n                    <div class=\\\"bg bg-align-left bg-align-bottom\\\" style=\\\"background-image:url(/assets/work/glabs/main.jpg)\\\"></div>\\n                </div>\\n            </div>\\n\\n            <div class=\\\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\\\">\\n                <div class=\\\"credits\\\">\\n                    Design:\\n                    <a href=\\\"https://guardianlabs.theguardian.com/\\\">The Guardian Labs</a>\\n                </div>\\n            </div>\\n\\n        </div>\\n    </div>\\n\\n    <div class=\\\"row no-gutters mt-md-4\\\">\\n        <div class=\\\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\\\">\\n\\n            <div class=\\\"text\\\">\\n                <div class=\\\"inner\\\">\\n                    <span class=\\\"title\\\">The Guardian Labs</span>\\n                    <!-- 2016 -->\\n                    <div class=\\\"description\\\">\\n\\n                        <p>\\n                            Designed by\\n                            <a href=\\\"https://guardianlabs.theguardian.com/\\\">The Guardian Labs</a>, these responsive web pages contain subtle animations and interactive elements.\\n                        </p>\\n\\n                        <span class=\\\"link\\\">\\n                            <a href=\\\"/assets/work/glabs/pages/spotify/\\\">Spotify</a>\\n                        </span>\\n                        <br>\\n                        <span class=\\\"link\\\">\\n                            <a href=\\\"/assets/work/glabs/pages/history-of-coffee/\\\">History of coffee</a>\\n                        </span>\\n                        <br>\\n                        <span class=\\\"link\\\">\\n                            <a href=\\\"/assets/work/glabs/pages/airport-of-the-future/\\\">The airport of the future</a>\\n                        </span>\\n                        <br>\\n                        <span class=\\\"link\\\">\\n                            <a href=\\\"/assets/work/glabs/pages/downsizing/\\\">Downsizing</a>\\n                        </span>\\n\\n\\n                    </div>\\n                </div>\\n            </div>\\n\\n        </div>\\n\\n    </div>\\n</div>\\n\\n\\n<div class=\\\"images\\\">\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/glabs/spot.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        2017 in music (Spotify,\\n                        <a href=\\\"/assets/work/glabs/pages/spotify/\\\">link</a>).\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/glabs/coffee.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        The history of coffee (Nespresso,\\n                        <a href=\\\"/assets/work/glabs/pages/history-of-coffee/\\\">link</a>).\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/glabs/airport.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        The airport of the future (Heathrow,\\n                        <a href=\\\"/assets/work/glabs/pages/airport-of-the-future/\\\">link</a>).\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/glabs/down.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        If you were 13cm tall (Downsizing,\\n                        <a href=\\\"/assets/work/glabs/pages/downsizing/\\\">link</a>).\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n</div>\"\n\n//# sourceURL=webpack:///./src/data/work/glabs.html?");

/***/ }),

/***/ "./src/data/work/pride-prejudice.html":
/*!********************************************!*\
  !*** ./src/data/work/pride-prejudice.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row no-gutters py-md-4 px-md-4\\\">\\n    <div class=\\\"col-12\\\">\\n\\n        <div class=\\\"row no-gutters align-items-end\\\">\\n\\n            <div class=\\\"col-12 col-md-8\\\">\\n                <div class=\\\"head\\\">\\n                    <!-- <div class=\\\"shadow overlay abs-percent-fullscreen\\\"></div> -->\\n                    <div class=\\\"border overlay abs-percent-fullscreen\\\"></div>\\n\\n                    <!-- <div class=\\\"icons\\\">\\n                        <div class=\\\"fullscreen-icon\\\">\\n                            <img src=\\\"/assets/img/fullscreen-black-on.svg\\\" class=\\\"fullscreen-on\\\">\\n                            <img src=\\\"/assets/img/fullscreen-black-off.svg\\\" class=\\\"fullscreen-off\\\">\\n                        </div>\\n                    </div> -->\\n\\n                    <div class=\\\"bg\\\" style=\\\"background-image:url(/assets/work/pride-prejudice/main.jpg)\\\"></div>\\n\\n                    <!-- <div class=\\\"iframe-container\\\">\\n                            <iframe scrolling='no' class=\\\"iframe\\\" src=\\\"/assets/work/pride-prejudice/iframe/index.html\\\" frameBorder=\\\"0\\\"></iframe>\\n                        </div> -->\\n                </div>\\n            </div>\\n\\n            <div class=\\\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\\\">\\n                <div class=\\\"credits\\\">\\n                    <br> Agency:\\n                    <a href=\\\"http://signal-noise.co.uk/\\\" target=\\\"_blank\\\">Signal Noise</a>\\n                </div>\\n            </div>\\n\\n        </div>\\n\\n        <div class=\\\"row no-gutters mt-md-4\\\">\\n            <div class=\\\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\\\">\\n\\n                <div class=\\\"text\\\">\\n                    <div class=\\\"inner\\\">\\n                        <span class=\\\"title\\\">Pride & Prejudice</span>\\n\\n                        <span class=\\\"year\\\">2016</span>\\n\\n                        <div class=\\\"description\\\">\\n                            Designed by\\n                            <a href=\\\"http://signal-noise.co.uk/\\\" target=\\\"_blank\\\">Signal Noise</a>, this application shows survey data collected by\\n                            <a href=\\\"http://www.economist.com/\\\" target=\\\"_blank\\\">The Economist</a>, for an international event in support of LGBT rights:\\n                            <a href=\\\"http://prideandprejudice.economist.com/research/\\\" target=\\\"_blank\\\">Pride &amp; Prejudice</a>.\\n                            <br>The main focus of the project was the creation of an interactive\\n                            <a href=\\\"https://en.wikipedia.org/wiki/Streamgraph\\\" target=\\\"\\\" _blank=\\\"\\\">streamgraph</a> that spans across multiple screens.\\n                            <br>\\n                            <br>\\n                            <span class=\\\"link\\\">\\n                                <a href=\\\"https://d1xso9gob5fu6y.cloudfront.net/\\\" target=\\\"_blank\\\">Link</a>\\n                            </span>\\n                        </div>\\n\\n\\n                    </div>\\n                </div>\\n\\n            </div>\\n        </div>\\n    </div>\\n</div>\\n\\n<div class=\\\"images\\\">\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/pride-prejudice/streamgraph-1.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        A portion of the streamgraph representing a question from the survey (top) and the answers (left).\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/pride-prejudice/chart.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        Pie chart.\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/pride-prejudice/map.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        Interactive map.\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <!-- <div class=\\\"art vimeo row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <iframe id=\\\"vimeo-241347842\\\" class=\\\"vimeo-iframe\\\" src=\\\"//player.vimeo.com/video/159717148\\\" width=\\\"100%\\\" height=\\\"500\\\" frameborder=\\\"0\\\" webkitallowfullscreen=\\\"\\\" mozallowfullscreen=\\\"\\\" allowfullscreen=\\\"\\\" style=\\\"width: 100%; height: 500px;\\\" data-ready=\\\"true\\\"></iframe>\\n                    <div class=\\\"caption\\\">Streamgraph study</div>\\n                </div>\\n            </div>\\n        </div>\\n    </div> -->\\n</div>\"\n\n//# sourceURL=webpack:///./src/data/work/pride-prejudice.html?");

/***/ }),

/***/ "./src/data/work/seda.html":
/*!*********************************!*\
  !*** ./src/data/work/seda.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row no-gutters py-md-4 px-md-4\\\">\\n    <div class=\\\"col-12\\\">\\n\\n        <div class=\\\"row no-gutters align-items-end\\\">\\n\\n            <div class=\\\"col-12 col-md-8\\\">\\n                <div class=\\\"head\\\">\\n                    <!-- <div class=\\\"shadow overlay abs-percent-fullscreen\\\"></div> -->\\n                    <!-- <div class=\\\"border overlay abs-percent-fullscreen\\\"></div> -->\\n\\n                    <!-- <div class=\\\"icons\\\">\\n                        <div class=\\\"fullscreen-icon\\\">\\n                            <img src=\\\"/assets/img/fullscreen-black-on.svg\\\" class=\\\"fullscreen-on\\\">\\n                            <img src=\\\"/assets/img/fullscreen-black-off.svg\\\" class=\\\"fullscreen-off\\\">\\n                        </div>\\n                    </div> -->\\n\\n                    <div class=\\\"bg\\\" style=\\\"background-image:url(/assets/work/seda/main.jpg)\\\"></div>\\n\\n                    <!-- <div class=\\\"iframe-container\\\">\\n                            <iframe scrolling='no' class=\\\"iframe\\\" src=\\\"/assets/work/pride-prejudice/iframe/index.html\\\" frameBorder=\\\"0\\\"></iframe>\\n                        </div> -->\\n                </div>\\n            </div>\\n\\n            <div class=\\\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\\\">\\n                <div class=\\\"credits\\\">\\n                    <br>\\n                    Design: <a href=\\\"http://infographics.com/\\\" target=\\\"_blank\\\">Tommy McCall</a>\\n                </div>\\n            </div>\\n\\n        </div>\\n\\n        <div class=\\\"row no-gutters mt-md-4\\\">\\n            <div class=\\\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\\\">\\n\\n                <div class=\\\"text\\\">\\n                    <div class=\\\"inner\\\">\\n                        <span class=\\\"title\\\">World economic development</span>\\n\\n                        <span class=\\\"year\\\">2018</span>\\n\\n                        <div class=\\\"description\\\">\\n                            Designed by\\n                            <a href=\\\"http://infographics.com/\\\" target=\\\"_blank\\\">Tommy McCall</a>, this application is an effort to represent global economic development. The user can explore a large dataset (10 years, 152 countries) using an interactive map, several filters and a compare function.\\n                            <br>\\n                            <br>\\n                            <span class=\\\"link\\\">\\n                                <a href=\\\"https://seda-dataviz.surge.sh/\\\" target=\\\"_blank\\\">Link</a>\\n                            </span>\\n                        </div>\\n\\n\\n                    </div>\\n                </div>\\n\\n            </div>\\n        </div>\\n    </div>\\n</div>\\n\\n<div class=\\\"images\\\">\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/seda/screenshot-1.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        Interactive table.\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/seda/screenshot-2.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        Interactive map and table.\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/seda/screenshot-3.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        Compare functionality.\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n</div>\"\n\n//# sourceURL=webpack:///./src/data/work/seda.html?");

/***/ }),

/***/ "./src/data/work/the-airport-of-the-future.html":
/*!******************************************************!*\
  !*** ./src/data/work/the-airport-of-the-future.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row no-gutters py-md-4 px-md-4\\\">\\n    <div class=\\\"col-12\\\">\\n\\n        <div class=\\\"row no-gutters align-items-end\\\">\\n            <div class=\\\"col-12 col-md-8\\\">\\n\\n                <div class=\\\"head\\\">\\n                    <div class=\\\"shadow overlay abs-percent-fullscreen\\\"></div>\\n                    <!-- <div class=\\\"border overlay abs-percent-fullscreen\\\"></div> -->\\n\\n                    <div class=\\\"icons\\\"></div>\\n\\n                    <div class=\\\"bg bg-align-left bg-align-bottom\\\" style=\\\"background-image:url(/assets/work/the-airport-of-the-future/bg.jpg)\\\"></div>\\n                </div>\\n            </div>\\n\\n            <div class=\\\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\\\">\\n                <div class=\\\"credits\\\">\\n                    Design:\\n                    <a href=\\\"https://guardianlabs.theguardian.com/\\\">The Guardian Labs</a>\\n                    <br> Illustrations:\\n                    <a href=\\\"http://www.samchivers.com/\\\">Sam Chivers</a>\\n                </div>\\n            </div>\\n\\n        </div>\\n    </div>\\n\\n    <div class=\\\"row no-gutters mt-md-4\\\">\\n        <div class=\\\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\\\">\\n\\n            <div class=\\\"text\\\">\\n                <div class=\\\"inner\\\">\\n                    <span class=\\\"title\\\">The airport of the future</span>\\n                    <!-- 2016 -->\\n                    <div class=\\\"description\\\">\\n                        Designed by\\n                        <a href=\\\"https://guardianlabs.theguardian.com/\\\">The Guardian Labs</a>, this web application shows animated visions of a possible airport of the future. \\n                        Working with 70s sci-fi styled illustrations I created a series of interactive 2D animations.\\n                        \\n                        <!-- I created a series of interactive 2D animations from some  illustrations made by\\n                        <a href=\\\"http://www.samchivers.com/\\\">Sam Chivers</a>, with a 70s sci-fi taste. -->\\n                        <br>\\n                        <br>\\n                        <span class=\\\"link\\\">\\n                            <a href=\\\"/assets/work/glabs/pages/airport-of-the-future/\\\">Link</a>\\n                        </span>\\n                    </div>\\n                </div>\\n            </div>\\n\\n        </div>\\n\\n    </div>\\n</div>\\n\\n\\n<div class=\\\"images\\\">\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-airport-of-the-future/page.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        The page on The Guardian website (now removed) with the main animation.\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-airport-of-the-future/scene-3-a.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        The landing scene (frame).\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-airport-of-the-future/scene-3-b.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        The landing scene (frame).\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-airport-of-the-future/sprite-demo.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        One of the spritesheets used to build the landing scene.\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-airport-of-the-future/scene-6.jpg\\\">\\n                    <div class=\\\"caption\\\">The taxi scene (frame).</div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art vimeo row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <iframe id=\\\"vimeo-241347842\\\" class=\\\"vimeo-iframe\\\" src=\\\"//player.vimeo.com/video/241347842\\\" width=\\\"100%\\\" height=\\\"500\\\" frameborder=\\\"0\\\" webkitallowfullscreen=\\\"\\\" mozallowfullscreen=\\\"\\\" allowfullscreen=\\\"\\\" style=\\\"width: 100%; height: 500px;\\\" data-ready=\\\"true\\\"></iframe>\\n                    <div class=\\\"caption\\\">Nature scene.</div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n</div>\"\n\n//# sourceURL=webpack:///./src/data/work/the-airport-of-the-future.html?");

/***/ }),

/***/ "./src/data/work/the-code-of-nature-3d.html":
/*!**************************************************!*\
  !*** ./src/data/work/the-code-of-nature-3d.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row no-gutters py-md-4 px-md-4\\\">\\n    <div class=\\\"col-12\\\">\\n\\n        <div class=\\\"row no-gutters align-items-end\\\">\\n            <div class=\\\"col-12 col-md-8\\\">\\n                <div class=\\\"head\\\">\\n                    <!-- <div class=\\\"shadow overlay abs-percent-fullscreen\\\"></div> -->\\n                    <!-- <div class=\\\"border overlay abs-percent-fullscreen\\\"></div> -->\\n\\n                    <!-- <div class=\\\"external-link\\\">\\n                        <a href=\\\"/assets/work/pride-prejudice/iframe/index.html\\\" target=\\\"_blank\\\"></a>\\n                    </div> -->\\n\\n                    <div class=\\\"icons\\\">\\n                        <div class=\\\"fullscreen-icon\\\">\\n                            <img src=\\\"/assets/img/fullscreen-on.svg\\\" class=\\\"fullscreen-on\\\">\\n                            <img src=\\\"/assets/img/fullscreen-off.svg\\\" class=\\\"fullscreen-off\\\">\\n                        </div>\\n                    </div>\\n\\n                    <div class=\\\"bg\\\" style=\\\"background-image:url(/assets/work/the-code-of-nature-3d/flow-field.jpg)\\\"></div>\\n\\n                    <div class=\\\"iframe-container\\\">\\n                        <iframe scrolling='no' class=\\\"iframe\\\" src=\\\"https://taseenb.github.io/NOC3D-chapter6/NOC_6_06_PathFollowing_MeshLine/public/index.html?no-ui=1&demo-mode=1&show-grid=1&camera-distance=60\\\" frameBorder=\\\"0\\\"></iframe>\\n                    </div>\\n                </div>\\n            </div>\\n\\n\\n            <div class=\\\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\\\">\\n                <div class=\\\"credits\\\">\\n                    Book:\\n                    <a href=\\\"http://natureofcode.com/\\\">Nature of Code</a> by Daniel Shiffman\\n                    <br> WebGL / Three.js\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"row no-gutters mt-md-4\\\">\\n        <div class=\\\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\\\">\\n\\n            <div class=\\\"text\\\">\\n                <div class=\\\"inner\\\">\\n                    <span class=\\\"title\\\">The code of nature in 3D</span>\\n\\n                    <span class=\\\"year\\\">2017</span>\\n\\n                    <div class=\\\"description\\\">\\n                        Study of autonomous agents by recreating Daniel Shiffman's\\n                        <a href=\\\"http://natureofcode.com/\\\">Nature of Code</a> examples in 3D (the originals are in 2D).\\n                        <br>\\n                        <br>\\n                        <span class=\\\"link\\\">\\n                            <a href=\\\"https://taseenb.github.io/NOC3D-chapter6/\\\">Demos</a>\\n                        </span>\\n                        <br>\\n                        <span class=\\\"link\\\">\\n                            <a href=\\\"https://github.com/taseenb/NOC3D-chapter6\\\">Source code</a>\\n                        </span>\\n                    </div>\\n\\n                </div>\\n            </div>\\n        </div>\\n\\n    </div>\\n</div>\\n\\n\\n\\n<div class=\\\"images\\\">\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-code-of-nature-3d/follow-path.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        Follow path\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-code-of-nature-3d/flocking.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        Flocking\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-code-of-nature-3d/a-s.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        Alignment and separation\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-code-of-nature-3d/flow-field.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n                        Flow field\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n</div>\"\n\n//# sourceURL=webpack:///./src/data/work/the-code-of-nature-3d.html?");

/***/ }),

/***/ "./src/data/work/the-hunt.html":
/*!*************************************!*\
  !*** ./src/data/work/the-hunt.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row no-gutters py-md-4 px-md-4 dark\\\">\\n    <div class=\\\"col-12\\\">\\n\\n        <div class=\\\"row no-gutters align-items-end\\\">\\n            <div class=\\\"col-12 col-md-8\\\">\\n                <div class=\\\"head\\\">\\n                    <!-- <div class=\\\"shadow overlay abs-percent-fullscreen\\\"></div> -->\\n                    <!-- <div class=\\\"border overlay abs-percent-fullscreen\\\"></div> -->\\n\\n                    <!-- <div class=\\\"external-link\\\">\\n                        <a href=\\\"/assets/work/pride-prejudice/iframe/index.html\\\" target=\\\"_blank\\\"></a>\\n                    </div> -->\\n\\n                    <div class=\\\"icons\\\">\\n                        <div class=\\\"fullscreen-icon\\\">\\n                            <img src=\\\"/assets/img/fullscreen-on.svg\\\" class=\\\"fullscreen-on\\\">\\n                            <img src=\\\"/assets/img/fullscreen-off.svg\\\" class=\\\"fullscreen-off\\\">\\n                        </div>\\n                    </div>\\n\\n                    <div class=\\\"bg\\\" style=\\\"background-image:url(/assets/work/the-hunt/main.jpg)\\\"></div>\\n\\n                    <div class=\\\"iframe-container\\\">\\n                        <iframe scrolling='no' class=\\\"iframe\\\" src=\\\"/assets/work/the-hunt/iframe/index.html\\\" frameBorder=\\\"0\\\"></iframe>\\n                    </div>\\n                </div>\\n            </div>\\n\\n\\n            <div class=\\\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\\\">\\n                <div class=\\\"credits\\\">\\n                    3D real-time generative animation\\n                    <br> WebGL, Three.js, GLSL\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"row no-gutters mt-md-4\\\">\\n        <div class=\\\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\\\">\\n\\n            <div class=\\\"text\\\">\\n                <div class=\\\"inner\\\">\\n                    <span class=\\\"title\\\">The hunt</span>\\n\\n                    <span class=\\\"year\\\">2017</span>\\n\\n                    <div class=\\\"description\\\">\\n                        An octahedron is hunted by generative lines in an endless random movement. Abstract 3D animation (real-time).\\n                        <br>\\n                        <br>\\n                        <span class=\\\"link\\\">\\n                            <a href=\\\"https://the-hunt.surge.sh\\\">Watch</a>\\n                        </span>\\n                    </div>\\n\\n                </div>\\n            </div>\\n        </div>\\n\\n    </div>\\n</div>\\n\\n\\n\\n<div class=\\\"images\\\">\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-hunt/hunt-1.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-hunt/hunt-2.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-hunt/hunt-3.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src=\\\"/assets/work/the-hunt/hunt-4.jpg\\\">\\n                    <div class=\\\"caption\\\">\\n\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n</div>\"\n\n//# sourceURL=webpack:///./src/data/work/the-hunt.html?");

/***/ }),

/***/ "./src/data/work/w152.html":
/*!*********************************!*\
  !*** ./src/data/work/w152.html ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"row no-gutters py-md-4 px-md-4\\\">\\n    <div class=\\\"col-12\\\">\\n\\n        <div class=\\\"row no-gutters align-items-end\\\">\\n            <div class=\\\"col-12 col-md-8\\\">\\n\\n                <div class=\\\"head\\\">\\n                    <!-- <div class=\\\"shadow overlay abs-percent-fullscreen\\\"></div> -->\\n\\n                    <!-- <div class=\\\"icons\\\">\\n                        <div class=\\\"fullscreen-icon\\\">\\n                            <img src=\\\"/assets/img/fullscreen-on.svg\\\" class=\\\"fullscreen-on\\\">\\n                            <img src=\\\"/assets/img/fullscreen-off.svg\\\" class=\\\"fullscreen-off\\\">\\n                        </div>\\n                    </div> -->\\n\\n                    <div class=\\\"iframe-container\\\">\\n                        <iframe scrolling='no' class=\\\"iframe\\\" src=\\\"/assets/work/w152/iframe/index.html\\\" frameBorder=\\\"0\\\"></iframe>\\n                    </div>\\n                </div>\\n            </div>\\n\\n            <div class=\\\"py-2 px-2 pl-md-2 pr-md-4 py-md-0 col-12 col-md-4\\\">\\n                <div class=\\\"credits\\\">\\n                    <br> Agency: La Moulade\\n                    <br> Design:\\n                    <a href=\\\"http://www.wastberg.com/\\\" target=\\\"_blank\\\">Wästberg</a>\\n                    <br> Animation:\\n                    <a href=\\\"http://www.mickeyandjohnny.com/johnny/\\\" target=\\\"_blank\\\">Johnny Kelly</a>\\n                </div>\\n            </div>\\n        </div>\\n\\n        <div class=\\\"row no-gutters mt-md-4\\\">\\n            <div class=\\\"py-2 px-2 px-md-0 py-md-0 col-12 col-md-8\\\">\\n\\n                <div class=\\\"text\\\">\\n                    <div class=\\\"inner\\\">\\n                        <span class=\\\"title\\\">Industrial Facility w152</span>\\n\\n                        <!-- <span class=\\\"year\\\">2015</span> -->\\n\\n                        <div class=\\\"description\\\">\\n                            To present a lamp designed by\\n                            <a href=\\\"http://www.industrialfacility.co.uk/\\\" target=\\\"_blank\\\">Industrial Facility</a> and\\n                            <a href=\\\"http://www.wastberg.com/\\\" target=\\\"_blank\\\">Wästberg</a>, a single page application was created. This consisted of several animations based on scroll interaction, similar to the demo above.\\n                            <br>\\n                            <br>\\n                            <span class=\\\"link\\\">\\n                                <a href=\\\"https://www.wastberg.com/collections/w152-busby/about/\\\" target=\\\"_blank\\\">More info</a>\\n                            </span>\\n                        </div>\\n\\n                    </div>\\n                </div>\\n\\n            </div>\\n        </div>\\n\\n    </div>\\n</div>\\n\\n\\n<div class=\\\"images\\\">\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src='../assets/work/w152/scroll-parts.jpg'>\\n                    <!-- <div class=\\\"caption\\\"></div> -->\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src='../assets/work/w152/main.jpg'>\\n                    <!-- <div class=\\\"caption col-8 px-0\\\"></div> -->\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"art image row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <img class=\\\"img\\\" src='../assets/work/w152/scroll-techinfo.jpg'>\\n                    <!-- <div class=\\\"caption\\\"></div> -->\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n    <div class=\\\"art vimeo row no-gutters pb-2 pb-md-4\\\">\\n        <div class=\\\"col\\\">\\n            <div class=\\\"row-zoom row no-gutters px-2 px-md-4\\\">\\n                <div class=\\\"col-zoom col-12 col-md-8\\\">\\n                    <iframe id=\\\"vimeo-241331200\\\" class=\\\"vimeo-iframe\\\" src=\\\"//player.vimeo.com/video/241331200?color=ffffff&title=0&byline=0&portrait=0\\\" width=\\\"100%\\\" height=\\\"500\\\" style=\\\"width:100%;height:500px;\\\" frameborder=\\\"0\\\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\\n                    <div class=\\\"caption\\\">\\n                        Screen capture of the scroll.\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </div>\\n\\n</div>\"\n\n//# sourceURL=webpack:///./src/data/work/w152.html?");

/***/ }),

/***/ "./src/data/works.js":
/*!***************************!*\
  !*** ./src/data/works.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst works = [{\n  uid: 5154,\n  seo: 'seda',\n  active: 1,\n  name: 'World economic development',\n  year: 2016,\n  intro: 'Interactive data visualisation',\n  preview: 'preview.jpg',\n  image: 'main.jpg',\n  vimeoId: null,\n  iframe: 'https://seda-dataviz.surge.sh/',\n  external: 'https://seda-dataviz.surge.sh/',\n  detail: __webpack_require__(/*! ./work/seda.html */ \"./src/data/work/seda.html\"),\n  template: 'default' // can be 'default' or null (default is null)\n\n}, {\n  uid: 5153,\n  seo: 'the-hunt',\n  active: 1,\n  name: 'The hunt',\n  year: 2016,\n  intro: 'Octahedron hunted by lines',\n  preview: 'preview.jpg',\n  image: 'main.jpg',\n  vimeoId: null,\n  iframe: 'https://the-hunt.surge.sh/',\n  external: 'https://the-hunt.surge.sh/',\n  detail: __webpack_require__(/*! ./work/the-hunt.html */ \"./src/data/work/the-hunt.html\"),\n  template: 'default' // can be 'default' or null (default is null)\n\n}, {\n  uid: 2803,\n  seo: 'the-code-of-nature-3d',\n  active: 1,\n  name: 'The code of nature in 3D',\n  year: 2017,\n  intro: 'A study of autonomous agents',\n  preview: 'preview.jpg',\n  image: 'main.jpg',\n  vimeoId: null,\n  iframe: 'https://taseenb.github.io/NOC3D-chapter6/NOC_6_06_PathFollowing_MeshLine/public/index.html',\n  external: 'https://taseenb.github.io/NOC3D-chapter6/NOC_6_06_PathFollowing_MeshLine/public/index.html',\n  detail: __webpack_require__(/*! ./work/the-code-of-nature-3d.html */ \"./src/data/work/the-code-of-nature-3d.html\"),\n  template: 'default' // can be 'default' or null (default is null)\n\n}, {\n  uid: 3277,\n  seo: 'fan-beat',\n  active: 1,\n  name: 'Fan Beat',\n  year: 2016,\n  intro: 'Interactive installation for concerts',\n  preview: 'preview.jpg',\n  image: 'main.jpg',\n  vimeoId: null,\n  detail: __webpack_require__(/*! ./work/fan-beat.html */ \"./src/data/work/fan-beat.html\"),\n  template: 'default' // can be 'default' or null (default is null)\n\n}, {\n  uid: 8742,\n  seo: 'pride-prejudice',\n  active: 1,\n  name: 'Pride & Prejudice',\n  year: 2016,\n  intro: 'Looong interactive streamgraph',\n  preview: 'preview.jpg',\n  image: 'main.jpg',\n  vimeoId: null,\n  external: 'https://d1xso9gob5fu6y.cloudfront.net/',\n  detail: __webpack_require__(/*! ./work/pride-prejudice.html */ \"./src/data/work/pride-prejudice.html\"),\n  template: 'default' // can be 'base' or null (default is null)\n\n}, {\n  uid: 4001,\n  seo: 'glabs',\n  active: 1,\n  name: 'The Guardian Labs',\n  year: 2016,\n  intro: 'Interactive pages for editorial content',\n  preview: 'preview.jpg',\n  image: 'main.jpg',\n  vimeoId: null,\n  detail: __webpack_require__(/*! ./work/glabs.html */ \"./src/data/work/glabs.html\"),\n  template: 'default' // can be 'default' or null (default is null)\n\n}, {\n  uid: 4473,\n  seo: 'the-airport-of-the-future',\n  active: 1,\n  name: 'The airport of the future',\n  year: 2016,\n  intro: 'Scroll based 2D animations',\n  preview: 'preview.jpg',\n  image: 'main.jpg',\n  vimeoId: null,\n  external: 'https://labs.theguardian.com/2016/heathrow-airport-of-the-future/',\n  detail: __webpack_require__(/*! ./work/the-airport-of-the-future.html */ \"./src/data/work/the-airport-of-the-future.html\"),\n  template: 'default' // can be 'default' or null (default is null)\n\n}, {\n  uid: 7344,\n  seo: 'w152',\n  active: 1,\n  name: 'Industrial Facility w152',\n  year: 2016,\n  intro: 'Scroll based 2D animations',\n  preview: 'preview.jpg',\n  image: 'main.jpg',\n  vimeoId: null,\n  detail: __webpack_require__(/*! ./work/w152.html */ \"./src/data/work/w152.html\"),\n  template: 'default' // can be 'default' or null (default is null)\n\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (works);\n\n//# sourceURL=webpack:///./src/data/works.js?");

/***/ }),

/***/ "./src/server/config.js":
/*!******************************!*\
  !*** ./src/server/config.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst env = process.env;\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  env: \"development\" || false,\n  // port: env.PORT || 7777,\n  port: 7777,\n  //  process.env.PORT in Heroku is used by NGINX!\n  host: env.HOST || '0.0.0.0'\n});\n\n//# sourceURL=webpack:///./src/server/config.js?");

/***/ }),

/***/ "./src/server/express-app.js":
/*!***********************************!*\
  !*** ./src/server/express-app.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/server/config.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/server/state.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _routes_site__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/site */ \"./src/server/routes/site.js\");\n/* harmony import */ var _data_initialData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/initialData */ \"./src/data/initialData.js\");\n\n\n\n\n\n\n // Data\n\n\nconst debug = debug__WEBPACK_IMPORTED_MODULE_5___default()('app:main'); // Site router\n\nconst app = express__WEBPACK_IMPORTED_MODULE_2___default()();\napp.set('port', process.env.PORT || 8088);\napp.enable('trust proxy'); // needed to correctly detext http or https in requests\n\napp.set('view engine', 'ejs');\nvar viewPath = path__WEBPACK_IMPORTED_MODULE_4___default.a.resolve(__dirname, 'src/server/views');\napp.set('views', viewPath);\n\nif (_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === 'production') {\n  app.use(compression__WEBPACK_IMPORTED_MODULE_3___default()()); // app.enable('view cache')\n}\n/**\n * Setup the state for the current request.\n * Check for query string '?invalidate=1' to change the state\n * in order to invalidate the cache on static files.\n */\n\n\napp.use((req, res, next) => {\n  // Update state with the initial state\n  Object.keys(_data_initialData__WEBPACK_IMPORTED_MODULE_7__[\"default\"]).forEach(k => {\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"][k] = _data_initialData__WEBPACK_IMPORTED_MODULE_7__[\"default\"][k];\n  }); // Invalidate cache\n\n  if (req.query.invalidate === '1') {\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].invalidateCache = true;\n    debug('cache invalidation enabled');\n    setTimeout(() => {\n      _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].invalidateCache = false;\n      debug('cache invalidation disabled');\n    }, 10000);\n  }\n\n  next();\n}); // Static files w cache\n\napp.use('/favicon.ico', express__WEBPACK_IMPORTED_MODULE_2___default.a.static('public/favicon.ico'));\napp.use('/robots.txt', express__WEBPACK_IMPORTED_MODULE_2___default.a.static('public/robots.txt'));\napp.use('/assets', express__WEBPACK_IMPORTED_MODULE_2___default.a.static('public/assets')); // React app (routing is managed by React router, including 404)\n\napp.use('/', _routes_site__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/server/express-app.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/server/config.js\");\n/* harmony import */ var _express_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express-app */ \"./src/server/express-app.js\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n// require('source-map-support').install()\n\n\n\n\n\nconst debug = debug__WEBPACK_IMPORTED_MODULE_2___default()('app:www');\nconst port = normalizePort(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n_express_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set('port', port);\nconst server = http__WEBPACK_IMPORTED_MODULE_3___default.a.createServer(_express_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nserver.listen(_express_app__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('port'));\nserver.on('error', onError);\nserver.on('listening', onListening);\n\nfunction onError(error) {\n  if (error.syscall !== 'listen') {\n    throw error; //\n  }\n\n  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;\n  console.log(error.code); // handle specific listen errors with friendly messages\n\n  switch (error.code) {\n    case 'EACCES':\n      console.error(bind + ' requires elevated privileges');\n      process.exit(1);\n\n    case 'EADDRINUSE':\n      console.error(bind + ' is already in use');\n      process.exit(1);\n\n    default:\n      throw error;\n  }\n}\n\nfunction normalizePort(val) {\n  const port = parseInt(val, 10);\n\n  if (isNaN(port)) {\n    // named pipe\n    return val;\n  }\n\n  if (port >= 0) {\n    // port number\n    return port;\n  }\n\n  return false;\n}\n\nfunction onListening() {\n  const addr = server.address();\n  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;\n  debug('Listening on ' + bind); // NGINX configuration\n\n  if (process.env.DYNO) {\n    console.log('This is on Heroku..!');\n    fs__WEBPACK_IMPORTED_MODULE_4___default.a.openSync('/tmp/app-initialized', 'w');\n  }\n}\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/routes/site.js":
/*!***********************************!*\
  !*** ./src/server/routes/site.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ \"./src/server/config.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state */ \"./src/server/state.js\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_App_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/App.js */ \"./src/components/App.js\");\n\n\n\n // Data\n// const initialData from '../../data/initialData')\n// React\n\n\n\n\n\nconst debug = debug__WEBPACK_IMPORTED_MODULE_3___default()('app:site'); // const StaticRouter = ReactRouter.StaticRouter\n// Router\n\nconst router = express__WEBPACK_IMPORTED_MODULE_2___default.a.Router();\nrouter.get('*', (req, res) => {\n  const context = {};\n\n  if (context.url) {\n    res.writeHead(301, {\n      Location: context.url\n    });\n    res.end();\n  } else {\n    // Add the requested id if present\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].requestedId = req.params.id; // Base url\n\n    const protocol = req.protocol; // protocol = http or https\n\n    const hostname = req.headers.host; // hostname = 'localhost:8080'\n\n    const path = req.path; // pathname = '/MyApp'\n\n    const url = protocol + '://' + hostname + '/'; // Is it a work?\n\n    const worksNames = _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].works.map(w => w.seo);\n    let workId = req.url.indexOf('/work/') > -1 ? req.url.replace('/work/', '') : null;\n    workId = workId && worksNames.indexOf(workId) > -1 ? workId : null;\n    const workIdx = workId && worksNames.indexOf(workId);\n    const workData = workId ? _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].works[workIdx] : null; // Is it a static page?\n\n    const pagesNames = Object.keys(_state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pages);\n    let pageId = path.replace('/', '');\n    pageId = pageId && pagesNames.indexOf(pageId) > -1 ? pageId : null; // Get the right ogImage\n\n    let ogImage = _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ogImage;\n\n    if (workId) {\n      ogImage = `assets/work/${workData.seo}/main.jpg`;\n    } else if (pageId) {\n      ogImage = `assets/pages/${pageId}/main.jpg`;\n    }\n\n    debug(url, workId, pageId, context); // Update state with current request\n\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].protocol = protocol;\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].hostname = hostname;\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].path = path;\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].url = url;\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].workId = workId;\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].description = workId ? workData.intro : _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ogDescription;\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].workName = workId ? workData.name + ' - ' : '';\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pageId = pageId;\n    _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ogImage = ogImage;\n    const initialMarkup = react_dom_server__WEBPACK_IMPORTED_MODULE_5___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_App_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      initialData: _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    })));\n    res.render('index', {\n      initialMarkup,\n      initialData: _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n      bundle: _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === 'production' ? 'bundle.min.js' : 'bundle.js',\n      styles: _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === 'production' ? 'style.min.css' : 'style.css'\n    });\n    res.end();\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/server/routes/site.js?");

/***/ }),

/***/ "./src/server/state.js":
/*!*****************************!*\
  !*** ./src/server/state.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack:///./src/server/state.js?");

/***/ }),

/***/ "./src/utils/create-cover.js":
/*!***********************************!*\
  !*** ./src/utils/create-cover.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Return position and size of element to cover the entire space of the parent.\n * Emulates css background-size: cover (but works with images, video or any dom element)\n */\nconst createCover = (parentW, parentH, w, h) => {\n  const parentRatio = parentW / parentH;\n  const ratio = w / h;\n  let zoomRatio;\n  let top, left, width, height;\n\n  if (parentRatio > ratio) {\n    // fill width\n    zoomRatio = parentW / w;\n    height = ~~(h * zoomRatio);\n    top = ~~((parentH - height) / 2);\n    left = 0;\n    width = parentW;\n  } else {\n    // fill height\n    zoomRatio = parentH / h;\n    width = ~~(w * zoomRatio);\n    left = ~~((parentW - width) / 2);\n    top = 0;\n    height = parentH;\n  }\n\n  return {\n    top,\n    left,\n    width,\n    height\n  };\n};\n\nmodule.exports = createCover;\n\n//# sourceURL=webpack:///./src/utils/create-cover.js?");

/***/ }),

/***/ "@vimeo/player":
/*!********************************!*\
  !*** external "@vimeo/player" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@vimeo/player\");\n\n//# sourceURL=webpack:///external_%22@vimeo/player%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });