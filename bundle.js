/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./global-assets/fonts/spacetime-regular.ttf */ "./src/global-assets/fonts/spacetime-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./global-assets/fonts/Monoround.otf */ "./src/global-assets/fonts/Monoround.otf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  /* colors */
  --gray-5: hsla(0, 0%, 35%, 1);
  --gray-4: hsla(0, 0%, 50%, 1);
  --gray-3: hsla(0, 0%, 65%, 1);
  --gray-2: hsla(0, 0%, 80%, 1);
  --gray-1: hsla(0, 0%, 95%, 1);
  --links: #ff3300;

  /* fonts */
  --footer-font-size: 1.1rem;
  --header-font-size: 2.5rem;

  /* border radius */
  --br-sm: 5px;
  --br-md: 10px;
  --br-lg: 15px;

  /* spacing */
  --space-sm: 5px;
  --space-md: 15px;
  --space-lg: 25px;

  /* utility */
  --marginSpace: 0.3rem;
}

@font-face {
  font-family: "SpaceTime";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: "MonoRound";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: MonoRound, sans-serif;
}

#app {
  height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
/* header */
header {
  background-color: var(--gray-3);
  font-family: SpaceTime, sans-serif;
  display: grid;
  text-align: center;
  padding: 1rem 0 1.3rem 0;
}

header div {
  font-size: var(--header-font-size);
}

/* main */
main {
  background-color: var(--gray-1);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: minmax(15rem, 1fr) 5fr;
}

/* control panel */
@keyframes slide-in {
  from {
    transform: translateX(-100%);
    visibility: hidden;
  }
  to {
    transform: translateX(0%);
    visibility: visible;
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0%);
    visibility: visible;
  }
  to {
    transform: translateX(-100%);
    visibility: hidden;
  }
}

#control-panel-container {
  background-color: var(--gray-2);
  display: grid;
  justify-content: space-evenly;
  align-content: space-between;
  padding: var(--space-lg);
  font-size: 1.2rem;
  z-index: 10;
  grid-row: 1/2;
  grid-column: 1/2;

  visibility: visible;
}

#control-panel-exit-container {
  text-align: center;
  cursor: pointer;
}

#control-panel-exit-container img:hover {
  scale: 1.1;
}

#control-panel-exit-container img:active {
  scale: 1;
}

.control-input {
  width: 100%;
  color: black;
  font-family: inherit;
  font-size: inherit;
  cursor: pointer;
}

button.control-input {
  padding-top: 0.25rem;
  border-radius: var(--br-sm);
}

.control-input-group {
  text-align: center;
  display: flex;
  flex-direction: column;
}

.control-input-label {
  display: block;
  text-align: center;
}

.control-input-group .control-input-label {
  margin-top: var(--space-sm);
}

/* grid */
#grid-container {
  height: 100%;
  padding: var(--space-lg);
  grid-template-rows: max-content 1fr;
  display: grid;
  grid-row: 1/2;
  grid-column: 1/-1;
  z-index: 0;
}

#control-icon {
  height: 4rem;
  cursor: pointer;
  border: 3px solid black;
  padding: var(--space-sm);
  border-radius: var(--br-md);
}

#control-icon:hover {
  scale: 1.1;
}

#control-icon:active {
  scale: 1;
}

#grid {
  background-color: blue;
  height: 70vh;
  aspect-ratio: 1;
  justify-self: center;
  align-self: center;
}

/* footer */
footer {
  background-color: var(--gray-5);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  color: white;

  padding: 2rem;

  font-size: var(--footer-font-size);
}

footer img {
  height: calc(var(--footer-font-size) - 0.1rem);
}

footer a {
  margin-left: var(--marginSpace);
}

@keyframes github-hover-in {
  from {
    rotate: 0deg;
    scale: 1;
  }
  to {
    rotate: 720deg;
    scale: 1.2;
  }
}
@keyframes github-hover-out {
  from {
    rotate: 720deg;
    scale: 1.2;
  }
  to {
    rotate: 0deg;
    scale: 1;
  }
}

footer img:active {
  scale: 1;
}

.top-link:visited {
  color: var(--links);
}

.top-link:visited {
  color: var(--links);
}

/* utility classes */
.removed {
  display: none;
}

.hidden {
  visibility: hidden;
}

/* media queries */
@media only screen and (max-width: 1000px) {
  #grid {
    height: 70vw;
  }
  #control-panel-container {
    visibility: hidden;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,6BAA6B;EAC7B,6BAA6B;EAC7B,6BAA6B;EAC7B,6BAA6B;EAC7B,6BAA6B;EAC7B,gBAAgB;;EAEhB,UAAU;EACV,0BAA0B;EAC1B,0BAA0B;;EAE1B,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;;EAEb,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,gBAAgB;;EAEhB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;EACxB,4CAAuD;AACzD;;AAEA;EACE,wBAAwB;EACxB,4CAA+C;AACjD;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;AACnC;AACA,WAAW;AACX;EACE,+BAA+B;EAC/B,kCAAkC;EAClC,aAAa;EACb,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,kCAAkC;AACpC;;AAEA,SAAS;AACT;EACE,+BAA+B;EAC/B,aAAa;EACb,uBAAuB;EACvB,6CAA6C;AAC/C;;AAEA,kBAAkB;AAClB;EACE;IACE,4BAA4B;IAC5B,kBAAkB;EACpB;EACA;IACE,yBAAyB;IACzB,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,yBAAyB;IACzB,mBAAmB;EACrB;EACA;IACE,4BAA4B;IAC5B,kBAAkB;EACpB;AACF;;AAEA;EACE,+BAA+B;EAC/B,aAAa;EACb,6BAA6B;EAC7B,4BAA4B;EAC5B,wBAAwB;EACxB,iBAAiB;EACjB,WAAW;EACX,aAAa;EACb,gBAAgB;;EAEhB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,oBAAoB;EACpB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,SAAS;AACT;EACE,YAAY;EACZ,wBAAwB;EACxB,mCAAmC;EACnC,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,wBAAwB;EACxB,2BAA2B;AAC7B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA,WAAW;AACX;EACE,+BAA+B;EAC/B,aAAa;EACb,2DAA2D;EAC3D,qBAAqB;EACrB,YAAY;;EAEZ,aAAa;;EAEb,kCAAkC;AACpC;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE;IACE,YAAY;IACZ,QAAQ;EACV;EACA;IACE,cAAc;IACd,UAAU;EACZ;AACF;AACA;EACE;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,YAAY;IACZ,QAAQ;EACV;AACF;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,oBAAoB;AACpB;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA,kBAAkB;AAClB;EACE;IACE,YAAY;EACd;EACA;IACE,kBAAkB;EACpB;AACF","sourcesContent":[":root {\n  /* colors */\n  --gray-5: hsla(0, 0%, 35%, 1);\n  --gray-4: hsla(0, 0%, 50%, 1);\n  --gray-3: hsla(0, 0%, 65%, 1);\n  --gray-2: hsla(0, 0%, 80%, 1);\n  --gray-1: hsla(0, 0%, 95%, 1);\n  --links: #ff3300;\n\n  /* fonts */\n  --footer-font-size: 1.1rem;\n  --header-font-size: 2.5rem;\n\n  /* border radius */\n  --br-sm: 5px;\n  --br-md: 10px;\n  --br-lg: 15px;\n\n  /* spacing */\n  --space-sm: 5px;\n  --space-md: 15px;\n  --space-lg: 25px;\n\n  /* utility */\n  --marginSpace: 0.3rem;\n}\n\n@font-face {\n  font-family: \"SpaceTime\";\n  src: url(\"./global-assets/fonts/spacetime-regular.ttf\");\n}\n\n@font-face {\n  font-family: \"MonoRound\";\n  src: url(\"./global-assets/fonts/Monoround.otf\");\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: MonoRound, sans-serif;\n}\n\n#app {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n/* header */\nheader {\n  background-color: var(--gray-3);\n  font-family: SpaceTime, sans-serif;\n  display: grid;\n  text-align: center;\n  padding: 1rem 0 1.3rem 0;\n}\n\nheader div {\n  font-size: var(--header-font-size);\n}\n\n/* main */\nmain {\n  background-color: var(--gray-1);\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: minmax(15rem, 1fr) 5fr;\n}\n\n/* control panel */\n@keyframes slide-in {\n  from {\n    transform: translateX(-100%);\n    visibility: hidden;\n  }\n  to {\n    transform: translateX(0%);\n    visibility: visible;\n  }\n}\n\n@keyframes slide-out {\n  from {\n    transform: translateX(0%);\n    visibility: visible;\n  }\n  to {\n    transform: translateX(-100%);\n    visibility: hidden;\n  }\n}\n\n#control-panel-container {\n  background-color: var(--gray-2);\n  display: grid;\n  justify-content: space-evenly;\n  align-content: space-between;\n  padding: var(--space-lg);\n  font-size: 1.2rem;\n  z-index: 10;\n  grid-row: 1/2;\n  grid-column: 1/2;\n\n  visibility: visible;\n}\n\n#control-panel-exit-container {\n  text-align: center;\n  cursor: pointer;\n}\n\n#control-panel-exit-container img:hover {\n  scale: 1.1;\n}\n\n#control-panel-exit-container img:active {\n  scale: 1;\n}\n\n.control-input {\n  width: 100%;\n  color: black;\n  font-family: inherit;\n  font-size: inherit;\n  cursor: pointer;\n}\n\nbutton.control-input {\n  padding-top: 0.25rem;\n  border-radius: var(--br-sm);\n}\n\n.control-input-group {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.control-input-label {\n  display: block;\n  text-align: center;\n}\n\n.control-input-group .control-input-label {\n  margin-top: var(--space-sm);\n}\n\n/* grid */\n#grid-container {\n  height: 100%;\n  padding: var(--space-lg);\n  grid-template-rows: max-content 1fr;\n  display: grid;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  z-index: 0;\n}\n\n#control-icon {\n  height: 4rem;\n  cursor: pointer;\n  border: 3px solid black;\n  padding: var(--space-sm);\n  border-radius: var(--br-md);\n}\n\n#control-icon:hover {\n  scale: 1.1;\n}\n\n#control-icon:active {\n  scale: 1;\n}\n\n#grid {\n  background-color: blue;\n  height: 70vh;\n  aspect-ratio: 1;\n  justify-self: center;\n  align-self: center;\n}\n\n/* footer */\nfooter {\n  background-color: var(--gray-5);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-items: center;\n  color: white;\n\n  padding: 2rem;\n\n  font-size: var(--footer-font-size);\n}\n\nfooter img {\n  height: calc(var(--footer-font-size) - 0.1rem);\n}\n\nfooter a {\n  margin-left: var(--marginSpace);\n}\n\n@keyframes github-hover-in {\n  from {\n    rotate: 0deg;\n    scale: 1;\n  }\n  to {\n    rotate: 720deg;\n    scale: 1.2;\n  }\n}\n@keyframes github-hover-out {\n  from {\n    rotate: 720deg;\n    scale: 1.2;\n  }\n  to {\n    rotate: 0deg;\n    scale: 1;\n  }\n}\n\nfooter img:active {\n  scale: 1;\n}\n\n.top-link:visited {\n  color: var(--links);\n}\n\n.top-link:visited {\n  color: var(--links);\n}\n\n/* utility classes */\n.removed {\n  display: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n/* media queries */\n@media only screen and (max-width: 1000px) {\n  #grid {\n    height: 70vw;\n  }\n  #control-panel-container {\n    visibility: hidden;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/components/Header.js");
/* harmony import */ var _Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main */ "./src/components/Main.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/Footer */ "./src/components/Footer/Footer.js");




const App = () => {
  const content = Object.assign(document.createElement("div"), {
    id: "app",
  });

  content.appendChild((0,_Header__WEBPACK_IMPORTED_MODULE_0__["default"])());
  content.appendChild((0,_Main__WEBPACK_IMPORTED_MODULE_1__["default"])());
  content.appendChild((0,_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"])());

  return content;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ }),

/***/ "./src/components/ControlPanel/ControlPanel.js":
/*!*****************************************************!*\
  !*** ./src/components/ControlPanel/ControlPanel.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _controls_ExitDiv_ExitDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controls/ExitDiv/ExitDiv */ "./src/components/ControlPanel/controls/ExitDiv/ExitDiv.js");
/* harmony import */ var _controls_color_pickers_PaintColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/color-pickers/PaintColorPicker */ "./src/components/ControlPanel/controls/color-pickers/PaintColorPicker.js");
/* harmony import */ var _controls_color_pickers_CanvasColorPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/color-pickers/CanvasColorPicker */ "./src/components/ControlPanel/controls/color-pickers/CanvasColorPicker.js");
/* harmony import */ var _controls_buttons_EraseBrushButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/buttons/EraseBrushButton */ "./src/components/ControlPanel/controls/buttons/EraseBrushButton.js");
/* harmony import */ var _controls_buttons_EraseGridButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/buttons/EraseGridButton */ "./src/components/ControlPanel/controls/buttons/EraseGridButton.js");
/* harmony import */ var _controls_buttons_ToggleGridlinesButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls/buttons/ToggleGridlinesButton */ "./src/components/ControlPanel/controls/buttons/ToggleGridlinesButton.js");
/* harmony import */ var _controls_buttons_RainbowModeButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controls/buttons/RainbowModeButton */ "./src/components/ControlPanel/controls/buttons/RainbowModeButton.js");
/* harmony import */ var _controls_buttons_ShadeModeButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controls/buttons/ShadeModeButton */ "./src/components/ControlPanel/controls/buttons/ShadeModeButton.js");
/* harmony import */ var _controls_GridSizeSelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./controls/GridSizeSelector */ "./src/components/ControlPanel/controls/GridSizeSelector.js");
//Component imports













const ControlPanel = () => {
  const container = Object.assign(document.createElement("div"), {
    id: "control-panel-container",
    "data-isVisible": true,
  });

  container.appendChild((0,_controls_ExitDiv_ExitDiv__WEBPACK_IMPORTED_MODULE_0__["default"])());
  container.appendChild((0,_controls_color_pickers_PaintColorPicker__WEBPACK_IMPORTED_MODULE_1__["default"])());
  container.appendChild((0,_controls_color_pickers_CanvasColorPicker__WEBPACK_IMPORTED_MODULE_2__["default"])());
  container.appendChild((0,_controls_buttons_EraseBrushButton__WEBPACK_IMPORTED_MODULE_3__["default"])());
  container.appendChild((0,_controls_buttons_EraseGridButton__WEBPACK_IMPORTED_MODULE_4__["default"])());
  container.appendChild((0,_controls_buttons_ToggleGridlinesButton__WEBPACK_IMPORTED_MODULE_5__["default"])());
  container.appendChild((0,_controls_buttons_RainbowModeButton__WEBPACK_IMPORTED_MODULE_6__["default"])());
  container.appendChild((0,_controls_buttons_ShadeModeButton__WEBPACK_IMPORTED_MODULE_7__["default"])());
  container.appendChild((0,_controls_GridSizeSelector__WEBPACK_IMPORTED_MODULE_8__["default"])());

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlPanel);


/***/ }),

/***/ "./src/components/ControlPanel/controls/ExitDiv/ExitDiv.js":
/*!*****************************************************************!*\
  !*** ./src/components/ControlPanel/controls/ExitDiv/ExitDiv.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_eye_hide_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/eye-hide.png */ "./src/components/ControlPanel/controls/ExitDiv/icons/eye-hide.png");


const ExitDiv = () => {
  const container = Object.assign(document.createElement("div"), {
    id: "control-panel-exit-container",
  });

  const icon = Object.assign(document.createElement("img"), {
    id: "hide-control-panel-icon",
    src: _icons_eye_hide_png__WEBPACK_IMPORTED_MODULE_0__,
  });

  container.appendChild(icon);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExitDiv);


/***/ }),

/***/ "./src/components/ControlPanel/controls/GridSizeSelector.js":
/*!******************************************************************!*\
  !*** ./src/components/ControlPanel/controls/GridSizeSelector.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_Range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic-elements/Range */ "./src/components/basic-elements/Range.js");


const GridSizeSelector = () => {
  const currentGridSize = 0;

  const container = Object.assign(
    document.createElement("div", { className: "control-input-group" })
  );

  const range = Object.assign((0,_basic_elements_Range__WEBPACK_IMPORTED_MODULE_0__["default"])(), { className: "control-input" });

  const label = Object.assign(document.createElement("div"), {
    innerText: `Grid size: ${currentGridSize} x ${currentGridSize}`,
    className: "control-input-label",
  });

  container.appendChild(range);
  container.appendChild(label);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridSizeSelector);


/***/ }),

/***/ "./src/components/ControlPanel/controls/buttons/EraseBrushButton.js":
/*!**************************************************************************!*\
  !*** ./src/components/ControlPanel/controls/buttons/EraseBrushButton.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic-elements/Button */ "./src/components/basic-elements/Button.js");


const EraseBrushButton = () => {
  const container = Object.assign(document.createElement("div"));

  const button = Object.assign((0,_basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "erase-brush-button",
    innerText: "Erase",
    className: "control-input",
  });

  container.appendChild(button);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EraseBrushButton);


/***/ }),

/***/ "./src/components/ControlPanel/controls/buttons/EraseGridButton.js":
/*!*************************************************************************!*\
  !*** ./src/components/ControlPanel/controls/buttons/EraseGridButton.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic-elements/Button */ "./src/components/basic-elements/Button.js");


const EraseGridButton = () => {
  const container = Object.assign(document.createElement("div"));
  const button = Object.assign((0,_basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "erase-grid-button",
    innerText: "Erase grid",
    className: "control-input",
  });

  container.appendChild(button);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EraseGridButton);


/***/ }),

/***/ "./src/components/ControlPanel/controls/buttons/RainbowModeButton.js":
/*!***************************************************************************!*\
  !*** ./src/components/ControlPanel/controls/buttons/RainbowModeButton.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic-elements/Button */ "./src/components/basic-elements/Button.js");


const RainbowModeButton = () => {
  const container = Object.assign(document.createElement("div"));
  const button = Object.assign((0,_basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "rainbow-mode-button",
    innerText: "Rainbow mode",
    className: "control-input",
  });

  container.appendChild(button);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RainbowModeButton);


/***/ }),

/***/ "./src/components/ControlPanel/controls/buttons/ShadeModeButton.js":
/*!*************************************************************************!*\
  !*** ./src/components/ControlPanel/controls/buttons/ShadeModeButton.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic-elements/Button */ "./src/components/basic-elements/Button.js");


const ShadeModeButton = () => {
  const container = Object.assign(document.createElement("div"));
  const button = Object.assign((0,_basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "shade-mode-button",
    innerText: "Shade mode",
    className: "control-input",
  });

  container.appendChild(button);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShadeModeButton);


/***/ }),

/***/ "./src/components/ControlPanel/controls/buttons/ToggleGridlinesButton.js":
/*!*******************************************************************************!*\
  !*** ./src/components/ControlPanel/controls/buttons/ToggleGridlinesButton.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic-elements/Button */ "./src/components/basic-elements/Button.js");


const ToggleGridlinesButton = () => {
  const container = Object.assign(document.createElement("div"));
  const button = Object.assign((0,_basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "toggle-gridlines-button",
    innerText: "Toggle gridlines",
    className: "control-input",
  });

  container.appendChild(button);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleGridlinesButton);


/***/ }),

/***/ "./src/components/ControlPanel/controls/color-pickers/CanvasColorPicker.js":
/*!*********************************************************************************!*\
  !*** ./src/components/ControlPanel/controls/color-pickers/CanvasColorPicker.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_ColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic-elements/ColorPicker */ "./src/components/basic-elements/ColorPicker.js");


const CanvasColorPicker = () => {
  const container = Object.assign(document.createElement("div"), {
    className: "control-input-group",
  });
  const colorPicker = Object.assign((0,_basic_elements_ColorPicker__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "canvas-color-picker",
    className: "control-input",
  });

  const label = Object.assign(document.createElement("div"), {
    innerText: "Select canvas color",
    className: "control-input-label",
  });

  container.appendChild(colorPicker);
  container.appendChild(label);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasColorPicker);


/***/ }),

/***/ "./src/components/ControlPanel/controls/color-pickers/PaintColorPicker.js":
/*!********************************************************************************!*\
  !*** ./src/components/ControlPanel/controls/color-pickers/PaintColorPicker.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_ColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic-elements/ColorPicker */ "./src/components/basic-elements/ColorPicker.js");


const PaintColorPicker = () => {
  const container = Object.assign(document.createElement("div"), {
    className: "control-input-group",
  });

  const colorPicker = Object.assign((0,_basic_elements_ColorPicker__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "paint-color-picker",
    className: "control-input",
  });

  const label = Object.assign(document.createElement("div"), {
    innerText: "Select paint color",
    className: "control-input-label",
  });

  container.appendChild(colorPicker);
  container.appendChild(label);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaintColorPicker);


/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logos_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logos/github-mark-white.png */ "./src/components/Footer/logos/github-mark-white.png");


const Footer = () => {
  const footer = Object.assign(document.createElement("footer"), {});

  const copyrightContainer = Object.assign(document.createElement("div"), {
    className: "copyright-container",
    innerText: `© Carlin Mitchell ${new Date().getFullYear()}`,
  });

  const topContainer = Object.assign(document.createElement("div"), {
    className: "top-attribution",
    innerText: "Inspired by",
  });

  const topLink = Object.assign(document.createElement("a"), {
    className: "top-link",
    innerText: "The Odin Project",
    href: "https://www.theodinproject.com/",
  });

  const githubLink = Object.assign(document.createElement("a"), {
    href: "https://github.com/carlin-mitchell/etch-a-sketch-webpack-TOP",
  });

  const githubIcon = Object.assign(document.createElement("img"), {
    src: _logos_github_mark_white_png__WEBPACK_IMPORTED_MODULE_0__,
    className: "github-icon",
  });

  footer.appendChild(copyrightContainer);
  copyrightContainer.appendChild(githubLink);
  githubLink.appendChild(githubIcon);

  footer.appendChild(topContainer);
  topContainer.appendChild(topLink);

  return footer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./src/components/GridSection/ControlIcon/ControlIcon.js":
/*!***************************************************************!*\
  !*** ./src/components/GridSection/ControlIcon/ControlIcon.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_controls_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/controls.png */ "./src/components/GridSection/ControlIcon/icons/controls.png");


const ControlIcon = () => {
  const container = Object.assign(document.createElement("div"), {
    className: "control-icon-container",
  });
  const icon = Object.assign(document.createElement("img"), {
    id: "control-icon",
    src: _icons_controls_png__WEBPACK_IMPORTED_MODULE_0__,
  });
  container.appendChild(icon);
  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlIcon);


/***/ }),

/***/ "./src/components/GridSection/GridContainer.js":
/*!*****************************************************!*\
  !*** ./src/components/GridSection/GridContainer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ControlIcon_ControlIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlIcon/ControlIcon */ "./src/components/GridSection/ControlIcon/ControlIcon.js");


const GridContainer = () => {
  const container = Object.assign(document.createElement("div"), {
    id: "grid-container",
  });

  const grid = Object.assign(document.createElement("div"), { id: "grid" });

  container.appendChild((0,_ControlIcon_ControlIcon__WEBPACK_IMPORTED_MODULE_0__["default"])());
  container.appendChild(grid);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridContainer);


/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Header = () => {
  const header = Object.assign(document.createElement("header", {}));

  const title = Object.assign(document.createElement("div"), {
    innerText: "Etch-A-Sketch",
  });

  header.appendChild(title);

  return header;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ControlPanel_ControlPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlPanel/ControlPanel */ "./src/components/ControlPanel/ControlPanel.js");
/* harmony import */ var _GridSection_GridContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GridSection/GridContainer */ "./src/components/GridSection/GridContainer.js");



const Main = () => {
  const main = Object.assign(document.createElement("main"), {});
  const div = document.createElement("div");
  div.id = "test";
  main.appendChild((0,_ControlPanel_ControlPanel__WEBPACK_IMPORTED_MODULE_0__["default"])());
  main.appendChild((0,_GridSection_GridContainer__WEBPACK_IMPORTED_MODULE_1__["default"])());

  return main;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);


/***/ }),

/***/ "./src/components/basic-elements/Button.js":
/*!*************************************************!*\
  !*** ./src/components/basic-elements/Button.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Button = () => {
  const button = Object.assign(document.createElement("button"));
  return button;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ "./src/components/basic-elements/ColorPicker.js":
/*!******************************************************!*\
  !*** ./src/components/basic-elements/ColorPicker.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const ColorPicker = () => {
  const colorPicker = Object.assign(document.createElement("input"), {
    type: "color",
  });
  return colorPicker;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorPicker);


/***/ }),

/***/ "./src/components/basic-elements/Range.js":
/*!************************************************!*\
  !*** ./src/components/basic-elements/Range.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Range = () => {
  const range = Object.assign(document.createElement("input"), {
    type: "range",
  });

  return range;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Range);


/***/ }),

/***/ "./src/logic/AnimationController.js":
/*!******************************************!*\
  !*** ./src/logic/AnimationController.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const AnimationController = () => {
  // github-icon
  Object.assign(document.querySelector(".github-icon"), {
    onmouseover: function () {
      this.style.animation = "github-hover-in 1s forwards";
    },
    onmouseout: function () {
      this.style.animation = "github-hover-out 1s forwards";
    },
  });

  // control-panel

  const slideIn = function () {
    const controlPanel = document.querySelector("#control-panel-container");
    controlPanel.style.animation = "slide-in .75s forwards";
    controlPanel["data-isVisible"] = true;
  };
  const slideOut = function () {
    const controlPanel = document.querySelector("#control-panel-container");
    controlPanel.style.animation = "slide-out .75s forwards";
    controlPanel["data-isVisible"] = false;
  };

  Object.assign(document.querySelector("#control-icon"), {
    onclick: function () {
      slideIn();
    },
  });
  Object.assign(document.querySelector("#hide-control-panel-icon"), {
    onclick: function () {
      slideOut();
    },
  });

  window.onresize = function (e) {
    const controlPanel = document.querySelector("#control-panel-container");
    const { innerWidth } = e.target;
    if (innerWidth <= 1000) {
      slideOut();
    } else {
      if (!controlPanel["data-isVisible"]) {
        slideIn();
      }
    }
    console.log(controlPanel["data-isVisible"]);
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimationController);


/***/ }),

/***/ "./src/components/ControlPanel/controls/ExitDiv/icons/eye-hide.png":
/*!*************************************************************************!*\
  !*** ./src/components/ControlPanel/controls/ExitDiv/icons/eye-hide.png ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd66ed8a4a5d056ac784.png";

/***/ }),

/***/ "./src/components/Footer/logos/github-mark-white.png":
/*!***********************************************************!*\
  !*** ./src/components/Footer/logos/github-mark-white.png ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "925aa8e685ab0217bb34.png";

/***/ }),

/***/ "./src/components/GridSection/ControlIcon/icons/controls.png":
/*!*******************************************************************!*\
  !*** ./src/components/GridSection/ControlIcon/icons/controls.png ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "421261e7ed0be9eff638.png";

/***/ }),

/***/ "./src/global-assets/fonts/Monoround.otf":
/*!***********************************************!*\
  !*** ./src/global-assets/fonts/Monoround.otf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "653e573bd792326f1fbd.otf";

/***/ }),

/***/ "./src/global-assets/fonts/spacetime-regular.ttf":
/*!*******************************************************!*\
  !*** ./src/global-assets/fonts/spacetime-regular.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca02b839730320bbed08.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _logic_AnimationController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/AnimationController */ "./src/logic/AnimationController.js");
// stylesheets


// components


// logic managers


document.body.appendChild((0,_components_App__WEBPACK_IMPORTED_MODULE_1__["default"])());

// initialize single-use-controllers
(0,_logic_AnimationController__WEBPACK_IMPORTED_MODULE_2__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUtBQThEO0FBQzFHLDRDQUE0QyxtSkFBc0Q7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksY0FBYyxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFB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LEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDakRuQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FCOztBQUVyQjtBQUN1Qzs7QUFFdkM7QUFDOEQ7O0FBRTlELDBCQUEwQiwyREFBTzs7QUFFakM7QUFDQSxzRUFBbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL0V4aXREaXYvRXhpdERpdi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9HcmlkU2l6ZVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2J1dHRvbnMvRXJhc2VCcnVzaEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9idXR0b25zL0VyYXNlR3JpZEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9idXR0b25zL1JhaW5ib3dNb2RlQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2J1dHRvbnMvU2hhZGVNb2RlQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2J1dHRvbnMvVG9nZ2xlR3JpZGxpbmVzQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2NvbG9yLXBpY2tlcnMvQ2FudmFzQ29sb3JQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvY29sb3ItcGlja2Vycy9QYWludENvbG9yUGlja2VyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0dyaWRTZWN0aW9uL0NvbnRyb2xJY29uL0NvbnRyb2xJY29uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvR3JpZFNlY3Rpb24vR3JpZENvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9iYXNpYy1lbGVtZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9iYXNpYy1lbGVtZW50cy9Db2xvclBpY2tlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL2Jhc2ljLWVsZW1lbnRzL1JhbmdlLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2xvZ2ljL0FuaW1hdGlvbkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZ2xvYmFsLWFzc2V0cy9mb250cy9zcGFjZXRpbWUtcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2dsb2JhbC1hc3NldHMvZm9udHMvTW9ub3JvdW5kLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLyogY29sb3JzICovXG4gIC0tZ3JheS01OiBoc2xhKDAsIDAlLCAzNSUsIDEpO1xuICAtLWdyYXktNDogaHNsYSgwLCAwJSwgNTAlLCAxKTtcbiAgLS1ncmF5LTM6IGhzbGEoMCwgMCUsIDY1JSwgMSk7XG4gIC0tZ3JheS0yOiBoc2xhKDAsIDAlLCA4MCUsIDEpO1xuICAtLWdyYXktMTogaHNsYSgwLCAwJSwgOTUlLCAxKTtcbiAgLS1saW5rczogI2ZmMzMwMDtcblxuICAvKiBmb250cyAqL1xuICAtLWZvb3Rlci1mb250LXNpemU6IDEuMXJlbTtcbiAgLS1oZWFkZXItZm9udC1zaXplOiAyLjVyZW07XG5cbiAgLyogYm9yZGVyIHJhZGl1cyAqL1xuICAtLWJyLXNtOiA1cHg7XG4gIC0tYnItbWQ6IDEwcHg7XG4gIC0tYnItbGc6IDE1cHg7XG5cbiAgLyogc3BhY2luZyAqL1xuICAtLXNwYWNlLXNtOiA1cHg7XG4gIC0tc3BhY2UtbWQ6IDE1cHg7XG4gIC0tc3BhY2UtbGc6IDI1cHg7XG5cbiAgLyogdXRpbGl0eSAqL1xuICAtLW1hcmdpblNwYWNlOiAwLjNyZW07XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTcGFjZVRpbWVcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNb25vUm91bmRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogTW9ub1JvdW5kLCBzYW5zLXNlcmlmO1xufVxuXG4jYXBwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xufVxuLyogaGVhZGVyICovXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMpO1xuICBmb250LWZhbWlseTogU3BhY2VUaW1lLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBncmlkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW0gMCAxLjNyZW0gMDtcbn1cblxuaGVhZGVyIGRpdiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLWZvbnQtc2l6ZSk7XG59XG5cbi8qIG1haW4gKi9cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTVyZW0sIDFmcikgNWZyO1xufVxuXG4vKiBjb250cm9sIHBhbmVsICovXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cblxuI2NvbnRyb2wtcGFuZWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0yKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHotaW5kZXg6IDEwO1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMS8yO1xuXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIGltZzpob3ZlciB7XG4gIHNjYWxlOiAxLjE7XG59XG5cbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIGltZzphY3RpdmUge1xuICBzY2FsZTogMTtcbn1cblxuLmNvbnRyb2wtaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbi5jb250cm9sLWlucHV0IHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyLXNtKTtcbn1cblxuLmNvbnRyb2wtaW5wdXQtZ3JvdXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250cm9sLWlucHV0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRyb2wtaW5wdXQtZ3JvdXAgLmNvbnRyb2wtaW5wdXQtbGFiZWwge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1zbSk7XG59XG5cbi8qIGdyaWQgKi9cbiNncmlkLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gIHotaW5kZXg6IDA7XG59XG5cbiNjb250cm9sLWljb24ge1xuICBoZWlnaHQ6IDRyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXNtKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnItbWQpO1xufVxuXG4jY29udHJvbC1pY29uOmhvdmVyIHtcbiAgc2NhbGU6IDEuMTtcbn1cblxuI2NvbnRyb2wtaWNvbjphY3RpdmUge1xuICBzY2FsZTogMTtcbn1cblxuI2dyaWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICBoZWlnaHQ6IDcwdmg7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLyogZm9vdGVyICovXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTUpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgcGFkZGluZzogMnJlbTtcblxuICBmb250LXNpemU6IHZhcigtLWZvb3Rlci1mb250LXNpemUpO1xufVxuXG5mb290ZXIgaW1nIHtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWZvb3Rlci1mb250LXNpemUpIC0gMC4xcmVtKTtcbn1cblxuZm9vdGVyIGEge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luU3BhY2UpO1xufVxuXG5Aa2V5ZnJhbWVzIGdpdGh1Yi1ob3Zlci1pbiB7XG4gIGZyb20ge1xuICAgIHJvdGF0ZTogMGRlZztcbiAgICBzY2FsZTogMTtcbiAgfVxuICB0byB7XG4gICAgcm90YXRlOiA3MjBkZWc7XG4gICAgc2NhbGU6IDEuMjtcbiAgfVxufVxuQGtleWZyYW1lcyBnaXRodWItaG92ZXItb3V0IHtcbiAgZnJvbSB7XG4gICAgcm90YXRlOiA3MjBkZWc7XG4gICAgc2NhbGU6IDEuMjtcbiAgfVxuICB0byB7XG4gICAgcm90YXRlOiAwZGVnO1xuICAgIHNjYWxlOiAxO1xuICB9XG59XG5cbmZvb3RlciBpbWc6YWN0aXZlIHtcbiAgc2NhbGU6IDE7XG59XG5cbi50b3AtbGluazp2aXNpdGVkIHtcbiAgY29sb3I6IHZhcigtLWxpbmtzKTtcbn1cblxuLnRvcC1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogdmFyKC0tbGlua3MpO1xufVxuXG4vKiB1dGlsaXR5IGNsYXNzZXMgKi9cbi5yZW1vdmVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogbWVkaWEgcXVlcmllcyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgI2dyaWQge1xuICAgIGhlaWdodDogNzB2dztcbiAgfVxuICAjY29udHJvbC1wYW5lbC1jb250YWluZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCOztFQUVoQixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDBCQUEwQjs7RUFFMUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTs7RUFFYixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0VBRWhCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUErQztBQUNqRDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7QUFDQSxXQUFXO0FBQ1g7RUFDRSwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBLFNBQVM7QUFDVDtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDZDQUE2QztBQUMvQzs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsNEJBQTRCO0lBQzVCLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixnQkFBZ0I7O0VBRWhCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBLFNBQVM7QUFDVDtFQUNFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsbUNBQW1DO0VBQ25DLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBLFdBQVc7QUFDWDtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELHFCQUFxQjtFQUNyQixZQUFZOztFQUVaLGFBQWE7O0VBRWIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osUUFBUTtFQUNWO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsY0FBYztJQUNkLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFFBQVE7RUFDVjtBQUNGOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLyogY29sb3JzICovXFxuICAtLWdyYXktNTogaHNsYSgwLCAwJSwgMzUlLCAxKTtcXG4gIC0tZ3JheS00OiBoc2xhKDAsIDAlLCA1MCUsIDEpO1xcbiAgLS1ncmF5LTM6IGhzbGEoMCwgMCUsIDY1JSwgMSk7XFxuICAtLWdyYXktMjogaHNsYSgwLCAwJSwgODAlLCAxKTtcXG4gIC0tZ3JheS0xOiBoc2xhKDAsIDAlLCA5NSUsIDEpO1xcbiAgLS1saW5rczogI2ZmMzMwMDtcXG5cXG4gIC8qIGZvbnRzICovXFxuICAtLWZvb3Rlci1mb250LXNpemU6IDEuMXJlbTtcXG4gIC0taGVhZGVyLWZvbnQtc2l6ZTogMi41cmVtO1xcblxcbiAgLyogYm9yZGVyIHJhZGl1cyAqL1xcbiAgLS1ici1zbTogNXB4O1xcbiAgLS1ici1tZDogMTBweDtcXG4gIC0tYnItbGc6IDE1cHg7XFxuXFxuICAvKiBzcGFjaW5nICovXFxuICAtLXNwYWNlLXNtOiA1cHg7XFxuICAtLXNwYWNlLW1kOiAxNXB4O1xcbiAgLS1zcGFjZS1sZzogMjVweDtcXG5cXG4gIC8qIHV0aWxpdHkgKi9cXG4gIC0tbWFyZ2luU3BhY2U6IDAuM3JlbTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwYWNlVGltZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9nbG9iYWwtYXNzZXRzL2ZvbnRzL3NwYWNldGltZS1yZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub1JvdW5kXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2dsb2JhbC1hc3NldHMvZm9udHMvTW9ub3JvdW5kLm90ZlxcXCIpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBNb25vUm91bmQsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNhcHAge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcbi8qIGhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMpO1xcbiAgZm9udC1mYW1pbHk6IFNwYWNlVGltZSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDAgMS4zcmVtIDA7XFxufVxcblxcbmhlYWRlciBkaXYge1xcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkZXItZm9udC1zaXplKTtcXG59XFxuXFxuLyogbWFpbiAqL1xcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0xKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1cmVtLCAxZnIpIDVmcjtcXG59XFxuXFxuLyogY29udHJvbCBwYW5lbCAqL1xcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuXFxuI2NvbnRyb2wtcGFuZWwtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMik7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICB6LWluZGV4OiAxMDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcblxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuXFxuI2NvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lciBpbWc6aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxuXFxuI2NvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXIgaW1nOmFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuLmNvbnRyb2wtaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLmNvbnRyb2wtaW5wdXQge1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ici1zbSk7XFxufVxcblxcbi5jb250cm9sLWlucHV0LWdyb3VwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udHJvbC1pbnB1dC1sYWJlbCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRyb2wtaW5wdXQtZ3JvdXAgLmNvbnRyb2wtaW5wdXQtbGFiZWwge1xcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2Utc20pO1xcbn1cXG5cXG4vKiBncmlkICovXFxuI2dyaWQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8tMTtcXG4gIHotaW5kZXg6IDA7XFxufVxcblxcbiNjb250cm9sLWljb24ge1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zbSk7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ici1tZCk7XFxufVxcblxcbiNjb250cm9sLWljb246aG92ZXIge1xcbiAgc2NhbGU6IDEuMTtcXG59XFxuXFxuI2NvbnRyb2wtaWNvbjphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbiNncmlkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxuXFxuICBwYWRkaW5nOiAycmVtO1xcblxcbiAgZm9udC1zaXplOiB2YXIoLS1mb290ZXItZm9udC1zaXplKTtcXG59XFxuXFxuZm9vdGVyIGltZyB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSkgLSAwLjFyZW0pO1xcbn1cXG5cXG5mb290ZXIgYSB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luU3BhY2UpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdpdGh1Yi1ob3Zlci1pbiB7XFxuICBmcm9tIHtcXG4gICAgcm90YXRlOiAwZGVnO1xcbiAgICBzY2FsZTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgcm90YXRlOiA3MjBkZWc7XFxuICAgIHNjYWxlOiAxLjI7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZ2l0aHViLWhvdmVyLW91dCB7XFxuICBmcm9tIHtcXG4gICAgcm90YXRlOiA3MjBkZWc7XFxuICAgIHNjYWxlOiAxLjI7XFxuICB9XFxuICB0byB7XFxuICAgIHJvdGF0ZTogMGRlZztcXG4gICAgc2NhbGU6IDE7XFxuICB9XFxufVxcblxcbmZvb3RlciBpbWc6YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4udG9wLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogdmFyKC0tbGlua3MpO1xcbn1cXG5cXG4udG9wLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogdmFyKC0tbGlua3MpO1xcbn1cXG5cXG4vKiB1dGlsaXR5IGNsYXNzZXMgKi9cXG4ucmVtb3ZlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLyogbWVkaWEgcXVlcmllcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAjZ3JpZCB7XFxuICAgIGhlaWdodDogNzB2dztcXG4gIH1cXG4gICNjb250cm9sLXBhbmVsLWNvbnRhaW5lciB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4vTWFpblwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXIvRm9vdGVyXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlkOiBcImFwcFwiLFxuICB9KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKEhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKEZvb3RlcigpKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsIi8vQ29tcG9uZW50IGltcG9ydHNcbmltcG9ydCBFeGl0RGl2IGZyb20gXCIuL2NvbnRyb2xzL0V4aXREaXYvRXhpdERpdlwiO1xuXG5pbXBvcnQgUGFpbnRDb2xvclBpY2tlciBmcm9tIFwiLi9jb250cm9scy9jb2xvci1waWNrZXJzL1BhaW50Q29sb3JQaWNrZXJcIjtcbmltcG9ydCBDYW52YXNDb2xvclBpY2tlciBmcm9tIFwiLi9jb250cm9scy9jb2xvci1waWNrZXJzL0NhbnZhc0NvbG9yUGlja2VyXCI7XG5cbmltcG9ydCBFcmFzZUJydXNoQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xzL2J1dHRvbnMvRXJhc2VCcnVzaEJ1dHRvblwiO1xuaW1wb3J0IEVyYXNlR3JpZEJ1dHRvbiBmcm9tIFwiLi9jb250cm9scy9idXR0b25zL0VyYXNlR3JpZEJ1dHRvblwiO1xuaW1wb3J0IFRvZ2dsZUdyaWRsaW5lc0J1dHRvbiBmcm9tIFwiLi9jb250cm9scy9idXR0b25zL1RvZ2dsZUdyaWRsaW5lc0J1dHRvblwiO1xuaW1wb3J0IFJhaW5ib3dNb2RlQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xzL2J1dHRvbnMvUmFpbmJvd01vZGVCdXR0b25cIjtcbmltcG9ydCBTaGFkZU1vZGVCdXR0b24gZnJvbSBcIi4vY29udHJvbHMvYnV0dG9ucy9TaGFkZU1vZGVCdXR0b25cIjtcblxuaW1wb3J0IEdyaWRTaXplU2VsZWN0b3IgZnJvbSBcIi4vY29udHJvbHMvR3JpZFNpemVTZWxlY3RvclwiO1xuXG5jb25zdCBDb250cm9sUGFuZWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlkOiBcImNvbnRyb2wtcGFuZWwtY29udGFpbmVyXCIsXG4gICAgXCJkYXRhLWlzVmlzaWJsZVwiOiB0cnVlLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoRXhpdERpdigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFBhaW50Q29sb3JQaWNrZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDYW52YXNDb2xvclBpY2tlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKEVyYXNlQnJ1c2hCdXR0b24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChFcmFzZUdyaWRCdXR0b24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChUb2dnbGVHcmlkbGluZXNCdXR0b24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChSYWluYm93TW9kZUJ1dHRvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFNoYWRlTW9kZUJ1dHRvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKEdyaWRTaXplU2VsZWN0b3IoKSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xQYW5lbDtcbiIsImltcG9ydCBIaWRlSWNvbiBmcm9tIFwiLi9pY29ucy9leWUtaGlkZS5wbmdcIjtcblxuY29uc3QgRXhpdERpdiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lclwiLFxuICB9KTtcblxuICBjb25zdCBpY29uID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLCB7XG4gICAgaWQ6IFwiaGlkZS1jb250cm9sLXBhbmVsLWljb25cIixcbiAgICBzcmM6IEhpZGVJY29uLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4aXREaXY7XG4iLCJpbXBvcnQgUmFuZ2UgZnJvbSBcIi4uLy4uL2Jhc2ljLWVsZW1lbnRzL1JhbmdlXCI7XG5cbmNvbnN0IEdyaWRTaXplU2VsZWN0b3IgPSAoKSA9PiB7XG4gIGNvbnN0IGN1cnJlbnRHcmlkU2l6ZSA9IDA7XG5cbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtZ3JvdXBcIiB9KVxuICApO1xuXG4gIGNvbnN0IHJhbmdlID0gT2JqZWN0LmFzc2lnbihSYW5nZSgpLCB7IGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIgfSk7XG5cbiAgY29uc3QgbGFiZWwgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpbm5lclRleHQ6IGBHcmlkIHNpemU6ICR7Y3VycmVudEdyaWRTaXplfSB4ICR7Y3VycmVudEdyaWRTaXplfWAsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtbGFiZWxcIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhbmdlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZFNpemVTZWxlY3RvcjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBFcmFzZUJydXNoQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJlcmFzZS1icnVzaC1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiRXJhc2VcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJhc2VCcnVzaEJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBFcmFzZUdyaWRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJlcmFzZS1ncmlkLWJ1dHRvblwiLFxuICAgIGlubmVyVGV4dDogXCJFcmFzZSBncmlkXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVyYXNlR3JpZEJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBSYWluYm93TW9kZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcInJhaW5ib3ctbW9kZS1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiUmFpbmJvdyBtb2RlXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhaW5ib3dNb2RlQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQnV0dG9uXCI7XG5cbmNvbnN0IFNoYWRlTW9kZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcInNoYWRlLW1vZGUtYnV0dG9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIlNoYWRlIG1vZGVcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hhZGVNb2RlQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQnV0dG9uXCI7XG5cbmNvbnN0IFRvZ2dsZUdyaWRsaW5lc0J1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcInRvZ2dsZS1ncmlkbGluZXMtYnV0dG9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIlRvZ2dsZSBncmlkbGluZXNcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlR3JpZGxpbmVzQnV0dG9uO1xuIiwiaW1wb3J0IENvbG9yUGlja2VyIGZyb20gXCIuLi8uLi8uLi9iYXNpYy1lbGVtZW50cy9Db2xvclBpY2tlclwiO1xuXG5jb25zdCBDYW52YXNDb2xvclBpY2tlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtZ3JvdXBcIixcbiAgfSk7XG4gIGNvbnN0IGNvbG9yUGlja2VyID0gT2JqZWN0LmFzc2lnbihDb2xvclBpY2tlcigpLCB7XG4gICAgaWQ6IFwiY2FudmFzLWNvbG9yLXBpY2tlclwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaW5uZXJUZXh0OiBcIlNlbGVjdCBjYW52YXMgY29sb3JcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1sYWJlbFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW52YXNDb2xvclBpY2tlcjtcbiIsImltcG9ydCBDb2xvclBpY2tlciBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQ29sb3JQaWNrZXJcIjtcblxuY29uc3QgUGFpbnRDb2xvclBpY2tlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtZ3JvdXBcIixcbiAgfSk7XG5cbiAgY29uc3QgY29sb3JQaWNrZXIgPSBPYmplY3QuYXNzaWduKENvbG9yUGlja2VyKCksIHtcbiAgICBpZDogXCJwYWludC1jb2xvci1waWNrZXJcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICB9KTtcblxuICBjb25zdCBsYWJlbCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlubmVyVGV4dDogXCJTZWxlY3QgcGFpbnQgY29sb3JcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1sYWJlbFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWludENvbG9yUGlja2VyO1xuIiwiaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIi4vbG9nb3MvZ2l0aHViLW1hcmstd2hpdGUucG5nXCI7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpLCB7fSk7XG5cbiAgY29uc3QgY29weXJpZ2h0Q29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1jb250YWluZXJcIixcbiAgICBpbm5lclRleHQ6IGDCqSBDYXJsaW4gTWl0Y2hlbGwgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YCxcbiAgfSk7XG5cbiAgY29uc3QgdG9wQ29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcInRvcC1hdHRyaWJ1dGlvblwiLFxuICAgIGlubmVyVGV4dDogXCJJbnNwaXJlZCBieVwiLFxuICB9KTtcblxuICBjb25zdCB0b3BMaW5rID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJ0b3AtbGlua1wiLFxuICAgIGlubmVyVGV4dDogXCJUaGUgT2RpbiBQcm9qZWN0XCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLCB7XG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vY2FybGluLW1pdGNoZWxsL2V0Y2gtYS1za2V0Y2gtd2VicGFjay1UT1BcIixcbiAgfSk7XG5cbiAgY29uc3QgZ2l0aHViSWNvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSwge1xuICAgIHNyYzogR2l0SHViSWNvbixcbiAgICBjbGFzc05hbWU6IFwiZ2l0aHViLWljb25cIixcbiAgfSk7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodENvbnRhaW5lcik7XG4gIGNvcHlyaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKTtcbiAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcExpbmspO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgQ29udHJvbEljb25QYXRoIGZyb20gXCIuL2ljb25zL2NvbnRyb2xzLnBuZ1wiO1xuXG5jb25zdCBDb250cm9sSWNvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaWNvbi1jb250YWluZXJcIixcbiAgfSk7XG4gIGNvbnN0IGljb24gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksIHtcbiAgICBpZDogXCJjb250cm9sLWljb25cIixcbiAgICBzcmM6IENvbnRyb2xJY29uUGF0aCxcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xJY29uO1xuIiwiaW1wb3J0IENvbnRyb2xJY29uIGZyb20gXCIuL0NvbnRyb2xJY29uL0NvbnRyb2xJY29uXCI7XG5cbmNvbnN0IEdyaWRDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlkOiBcImdyaWQtY29udGFpbmVyXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGdyaWQgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHsgaWQ6IFwiZ3JpZFwiIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDb250cm9sSWNvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkQ29udGFpbmVyO1xuIiwiY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwge30pKTtcblxuICBjb25zdCB0aXRsZSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlubmVyVGV4dDogXCJFdGNoLUEtU2tldGNoXCIsXG4gIH0pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsImltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4vQ29udHJvbFBhbmVsL0NvbnRyb2xQYW5lbFwiO1xuaW1wb3J0IEdyaWRDb250YWluZXIgZnJvbSBcIi4vR3JpZFNlY3Rpb24vR3JpZENvbnRhaW5lclwiO1xuXG5jb25zdCBNYWluID0gKCkgPT4ge1xuICBjb25zdCBtYWluID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKSwge30pO1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuaWQgPSBcInRlc3RcIjtcbiAgbWFpbi5hcHBlbmRDaGlsZChDb250cm9sUGFuZWwoKSk7XG4gIG1haW4uYXBwZW5kQ2hpbGQoR3JpZENvbnRhaW5lcigpKTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJjb25zdCBCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJjb25zdCBDb2xvclBpY2tlciA9ICgpID0+IHtcbiAgY29uc3QgY29sb3JQaWNrZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSwge1xuICAgIHR5cGU6IFwiY29sb3JcIixcbiAgfSk7XG4gIHJldHVybiBjb2xvclBpY2tlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yUGlja2VyO1xuIiwiY29uc3QgUmFuZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJhbmdlID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksIHtcbiAgICB0eXBlOiBcInJhbmdlXCIsXG4gIH0pO1xuXG4gIHJldHVybiByYW5nZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlO1xuIiwiY29uc3QgQW5pbWF0aW9uQ29udHJvbGxlciA9ICgpID0+IHtcbiAgLy8gZ2l0aHViLWljb25cbiAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdpdGh1Yi1pY29uXCIpLCB7XG4gICAgb25tb3VzZW92ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc3R5bGUuYW5pbWF0aW9uID0gXCJnaXRodWItaG92ZXItaW4gMXMgZm9yd2FyZHNcIjtcbiAgICB9LFxuICAgIG9ubW91c2VvdXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoaXMuc3R5bGUuYW5pbWF0aW9uID0gXCJnaXRodWItaG92ZXItb3V0IDFzIGZvcndhcmRzXCI7XG4gICAgfSxcbiAgfSk7XG5cbiAgLy8gY29udHJvbC1wYW5lbFxuXG4gIGNvbnN0IHNsaWRlSW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250cm9sLXBhbmVsLWNvbnRhaW5lclwiKTtcbiAgICBjb250cm9sUGFuZWwuc3R5bGUuYW5pbWF0aW9uID0gXCJzbGlkZS1pbiAuNzVzIGZvcndhcmRzXCI7XG4gICAgY29udHJvbFBhbmVsW1wiZGF0YS1pc1Zpc2libGVcIl0gPSB0cnVlO1xuICB9O1xuICBjb25zdCBzbGlkZU91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBjb250cm9sUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRyb2wtcGFuZWwtY29udGFpbmVyXCIpO1xuICAgIGNvbnRyb2xQYW5lbC5zdHlsZS5hbmltYXRpb24gPSBcInNsaWRlLW91dCAuNzVzIGZvcndhcmRzXCI7XG4gICAgY29udHJvbFBhbmVsW1wiZGF0YS1pc1Zpc2libGVcIl0gPSBmYWxzZTtcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJvbC1pY29uXCIpLCB7XG4gICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgc2xpZGVJbigpO1xuICAgIH0sXG4gIH0pO1xuICBPYmplY3QuYXNzaWduKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlkZS1jb250cm9sLXBhbmVsLWljb25cIiksIHtcbiAgICBvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICBzbGlkZU91dCgpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250cm9sLXBhbmVsLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCB7IGlubmVyV2lkdGggfSA9IGUudGFyZ2V0O1xuICAgIGlmIChpbm5lcldpZHRoIDw9IDEwMDApIHtcbiAgICAgIHNsaWRlT3V0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghY29udHJvbFBhbmVsW1wiZGF0YS1pc1Zpc2libGVcIl0pIHtcbiAgICAgICAgc2xpZGVJbigpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhjb250cm9sUGFuZWxbXCJkYXRhLWlzVmlzaWJsZVwiXSk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25Db250cm9sbGVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBzdHlsZXNoZWV0c1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcblxuLy8gbG9naWMgbWFuYWdlcnNcbmltcG9ydCBBbmltYXRpb25Db250cm9sbGVyIGZyb20gXCIuL2xvZ2ljL0FuaW1hdGlvbkNvbnRyb2xsZXJcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDb250ZW50KCkpO1xuXG4vLyBpbml0aWFsaXplIHNpbmdsZS11c2UtY29udHJvbGxlcnNcbkFuaW1hdGlvbkNvbnRyb2xsZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==