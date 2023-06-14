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
  const controlPanel = document.querySelector("#control-panel-container");
  const slideIn = function () {
    // const controlPanel = document.querySelector("#control-panel-container");
    controlPanel.style.animation = "slide-in .75s forwards";
    controlPanel["data-isVisible"] = true;
  };
  const slideOut = function () {
    // const controlPanel = document.querySelector("#control-panel-container");
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
    const { innerWidth } = e.target;
    if (innerWidth <= 1150) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUtBQThEO0FBQzFHLDRDQUE0QyxtSkFBc0Q7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksY0FBYyxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sZ0NBQWdDLGtEQUFrRCxrQ0FBa0Msa0NBQWtDLGtDQUFrQyxrQ0FBa0MscUJBQXFCLGdEQUFnRCwrQkFBK0IsMENBQTBDLGtCQUFrQixrQkFBa0IsdUNBQXVDLHFCQUFxQixxQkFBcUIsNkNBQTZDLEdBQUcsZ0JBQWdCLCtCQUErQiw4REFBOEQsR0FBRyxnQkFBZ0IsK0JBQStCLHNEQUFzRCxHQUFHLE9BQU8sMkJBQTJCLGNBQWMsZUFBZSxHQUFHLFVBQVUsdUNBQXVDLEdBQUcsVUFBVSxrQkFBa0Isa0JBQWtCLHNDQUFzQyxHQUFHLHdCQUF3QixvQ0FBb0MsdUNBQXVDLGtCQUFrQix1QkFBdUIsNkJBQTZCLEdBQUcsZ0JBQWdCLHVDQUF1QyxHQUFHLHNCQUFzQixvQ0FBb0Msa0JBQWtCLDRCQUE0QixrREFBa0QsR0FBRyw4Q0FBOEMsVUFBVSxtQ0FBbUMseUJBQXlCLEtBQUssUUFBUSxnQ0FBZ0MsMEJBQTBCLEtBQUssR0FBRywwQkFBMEIsVUFBVSxnQ0FBZ0MsMEJBQTBCLEtBQUssUUFBUSxtQ0FBbUMseUJBQXlCLEtBQUssR0FBRyw4QkFBOEIsb0NBQW9DLGtCQUFrQixrQ0FBa0MsaUNBQWlDLDZCQUE2QixzQkFBc0IsZ0JBQWdCLGtCQUFrQixxQkFBcUIsMEJBQTBCLEdBQUcsbUNBQW1DLHVCQUF1QixvQkFBb0IsR0FBRyw2Q0FBNkMsZUFBZSxHQUFHLDhDQUE4QyxhQUFhLEdBQUcsb0JBQW9CLGdCQUFnQixpQkFBaUIseUJBQXlCLHVCQUF1QixvQkFBb0IsR0FBRywwQkFBMEIseUJBQXlCLGdDQUFnQyxHQUFHLDBCQUEwQix1QkFBdUIsa0JBQWtCLDJCQUEyQixHQUFHLDBCQUEwQixtQkFBbUIsdUJBQXVCLEdBQUcsK0NBQStDLGdDQUFnQyxHQUFHLGlDQUFpQyxpQkFBaUIsNkJBQTZCLHdDQUF3QyxrQkFBa0Isa0JBQWtCLHNCQUFzQixlQUFlLEdBQUcsbUJBQW1CLGlCQUFpQixvQkFBb0IsNEJBQTRCLDZCQUE2QixnQ0FBZ0MsR0FBRyx5QkFBeUIsZUFBZSxHQUFHLDBCQUEwQixhQUFhLEdBQUcsV0FBVywyQkFBMkIsaUJBQWlCLG9CQUFvQix5QkFBeUIsdUJBQXVCLEdBQUcsMEJBQTBCLG9DQUFvQyxrQkFBa0IsZ0VBQWdFLDBCQUEwQixpQkFBaUIsb0JBQW9CLHlDQUF5QyxHQUFHLGdCQUFnQixtREFBbUQsR0FBRyxjQUFjLG9DQUFvQyxHQUFHLGdDQUFnQyxVQUFVLG1CQUFtQixlQUFlLEtBQUssUUFBUSxxQkFBcUIsaUJBQWlCLEtBQUssR0FBRywrQkFBK0IsVUFBVSxxQkFBcUIsaUJBQWlCLEtBQUssUUFBUSxtQkFBbUIsZUFBZSxLQUFLLEdBQUcsdUJBQXVCLGFBQWEsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcsdUJBQXVCLHdCQUF3QixHQUFHLHFDQUFxQyxrQkFBa0IsR0FBRyxhQUFhLHVCQUF1QixHQUFHLHFFQUFxRSxXQUFXLG1CQUFtQixLQUFLLDhCQUE4Qix5QkFBeUIsS0FBSyxHQUFHLHFCQUFxQjtBQUM5ck07QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM5UTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjhCO0FBQ0o7QUFDVzs7QUFFckM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxzQkFBc0IsbURBQU07QUFDNUIsc0JBQXNCLGlEQUFJO0FBQzFCLHNCQUFzQiwwREFBTTs7QUFFNUI7QUFDQTs7QUFFQSxpRUFBZSxHQUFHLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCbkI7QUFDaUQ7O0FBRXdCO0FBQ0U7O0FBRVI7QUFDRjtBQUNZO0FBQ1I7QUFDSjs7QUFFTjs7QUFFM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILHdCQUF3QixxRUFBTztBQUMvQix3QkFBd0Isb0ZBQWdCO0FBQ3hDLHdCQUF3QixxRkFBaUI7QUFDekMsd0JBQXdCLDhFQUFnQjtBQUN4Qyx3QkFBd0IsNkVBQWU7QUFDdkMsd0JBQXdCLG1GQUFxQjtBQUM3Qyx3QkFBd0IsK0VBQWlCO0FBQ3pDLHdCQUF3Qiw2RUFBZTtBQUN2Qyx3QkFBd0Isc0VBQWdCOztBQUV4QztBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pDZ0I7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFNBQVMsZ0RBQVE7QUFDakIsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCd0I7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0Msa0NBQWtDO0FBQ3RFOztBQUVBLDhCQUE4QixpRUFBSyxNQUFNLDRCQUE0Qjs7QUFFckU7QUFDQSw2QkFBNkIsaUJBQWlCLElBQUksZ0JBQWdCO0FBQ2xFO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Qm9COztBQUVwRDtBQUNBOztBQUVBLCtCQUErQixrRUFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQm9COztBQUVwRDtBQUNBO0FBQ0EsK0JBQStCLGtFQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7O0FBRXBEO0FBQ0E7QUFDQSwrQkFBK0Isa0VBQU07QUFDckM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZm1COztBQUVwRDtBQUNBO0FBQ0EsK0JBQStCLGtFQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7O0FBRXBEO0FBQ0E7QUFDQSwrQkFBK0Isa0VBQU07QUFDckM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLHFCQUFxQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnlCOztBQUU5RDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsb0NBQW9DLHVFQUFXO0FBQy9DO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEI2Qjs7QUFFOUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxvQ0FBb0MsdUVBQVc7QUFDL0M7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QnVCOztBQUV2RDtBQUNBLG1FQUFtRTs7QUFFbkU7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0QsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLFNBQVMseURBQVU7QUFDbkI7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEM2Qjs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxTQUFTLGdEQUFlO0FBQ3hCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZHlCOztBQUVwRDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILDhEQUE4RCxZQUFZOztBQUUxRSx3QkFBd0Isb0VBQVc7QUFDbkM7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2Y3QjtBQUNBLGtFQUFrRTs7QUFFbEU7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWmlDO0FBQ0M7O0FBRXhEO0FBQ0EsK0RBQStEO0FBQy9EO0FBQ0E7QUFDQSxtQkFBbUIsc0VBQVk7QUFDL0IsbUJBQW1CLHNFQUFhOztBQUVoQztBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDYnBCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDTHRCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLGlFQUFlLFdBQVcsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDUDNCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1JyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBLFlBQVksYUFBYTtBQUN6QjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRG5DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDcUI7O0FBRXJCO0FBQ3VDOztBQUV2QztBQUM4RDs7QUFFOUQsMEJBQTBCLDJEQUFPOztBQUVqQztBQUNBLHNFQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9Db250cm9sUGFuZWwuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvRXhpdERpdi9FeGl0RGl2LmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL0dyaWRTaXplU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvYnV0dG9ucy9FcmFzZUJydXNoQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2J1dHRvbnMvRXJhc2VHcmlkQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2J1dHRvbnMvUmFpbmJvd01vZGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvYnV0dG9ucy9TaGFkZU1vZGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvYnV0dG9ucy9Ub2dnbGVHcmlkbGluZXNCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvY29sb3ItcGlja2Vycy9DYW52YXNDb2xvclBpY2tlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9jb2xvci1waWNrZXJzL1BhaW50Q29sb3JQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvR3JpZFNlY3Rpb24vQ29udHJvbEljb24vQ29udHJvbEljb24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9HcmlkU2VjdGlvbi9HcmlkQ29udGFpbmVyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL2Jhc2ljLWVsZW1lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL2Jhc2ljLWVsZW1lbnRzL0NvbG9yUGlja2VyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvYmFzaWMtZWxlbWVudHMvUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvbG9naWMvQW5pbWF0aW9uQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9nbG9iYWwtYXNzZXRzL2ZvbnRzL3NwYWNldGltZS1yZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZ2xvYmFsLWFzc2V0cy9mb250cy9Nb25vcm91bmQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAvKiBjb2xvcnMgKi9cbiAgLS1ncmF5LTU6IGhzbGEoMCwgMCUsIDM1JSwgMSk7XG4gIC0tZ3JheS00OiBoc2xhKDAsIDAlLCA1MCUsIDEpO1xuICAtLWdyYXktMzogaHNsYSgwLCAwJSwgNjUlLCAxKTtcbiAgLS1ncmF5LTI6IGhzbGEoMCwgMCUsIDgwJSwgMSk7XG4gIC0tZ3JheS0xOiBoc2xhKDAsIDAlLCA5NSUsIDEpO1xuICAtLWxpbmtzOiAjZmYzMzAwO1xuXG4gIC8qIGZvbnRzICovXG4gIC0tZm9vdGVyLWZvbnQtc2l6ZTogMS4xcmVtO1xuICAtLWhlYWRlci1mb250LXNpemU6IDIuNXJlbTtcblxuICAvKiBib3JkZXIgcmFkaXVzICovXG4gIC0tYnItc206IDVweDtcbiAgLS1ici1tZDogMTBweDtcbiAgLS1ici1sZzogMTVweDtcblxuICAvKiBzcGFjaW5nICovXG4gIC0tc3BhY2Utc206IDVweDtcbiAgLS1zcGFjZS1tZDogMTVweDtcbiAgLS1zcGFjZS1sZzogMjVweDtcblxuICAvKiB1dGlsaXR5ICovXG4gIC0tbWFyZ2luU3BhY2U6IDAuM3JlbTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlVGltZVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9Sb3VuZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBNb25vUm91bmQsIHNhbnMtc2VyaWY7XG59XG5cbiNhcHAge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG59XG4vKiBoZWFkZXIgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMyk7XG4gIGZvbnQtZmFtaWx5OiBTcGFjZVRpbWUsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAwIDEuM3JlbSAwO1xufVxuXG5oZWFkZXIgZGl2IHtcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkZXItZm9udC1zaXplKTtcbn1cblxuLyogbWFpbiAqL1xubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNXJlbSwgMWZyKSA1ZnI7XG59XG5cbi8qIGNvbnRyb2wgcGFuZWwgKi9cbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG4jY29udHJvbC1wYW5lbC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTIpO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgei1pbmRleDogMTA7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG5cbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuI2NvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2NvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXIgaW1nOmhvdmVyIHtcbiAgc2NhbGU6IDEuMTtcbn1cblxuI2NvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXIgaW1nOmFjdGl2ZSB7XG4gIHNjYWxlOiAxO1xufVxuXG4uY29udHJvbC1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uLmNvbnRyb2wtaW5wdXQge1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnItc20pO1xufVxuXG4uY29udHJvbC1pbnB1dC1ncm91cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNvbnRyb2wtaW5wdXQtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udHJvbC1pbnB1dC1ncm91cCAuY29udHJvbC1pbnB1dC1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLXNtKTtcbn1cblxuLyogZ3JpZCAqL1xuI2dyaWQtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMS8tMTtcbiAgei1pbmRleDogMDtcbn1cblxuI2NvbnRyb2wtaWNvbiB7XG4gIGhlaWdodDogNHJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ici1tZCk7XG59XG5cbiNjb250cm9sLWljb246aG92ZXIge1xuICBzY2FsZTogMS4xO1xufVxuXG4jY29udHJvbC1pY29uOmFjdGl2ZSB7XG4gIHNjYWxlOiAxO1xufVxuXG4jZ3JpZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIGhlaWdodDogNzB2aDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4vKiBmb290ZXIgKi9cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICBwYWRkaW5nOiAycmVtO1xuXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSk7XG59XG5cbmZvb3RlciBpbWcge1xuICBoZWlnaHQ6IGNhbGModmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSkgLSAwLjFyZW0pO1xufVxuXG5mb290ZXIgYSB7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW5TcGFjZSk7XG59XG5cbkBrZXlmcmFtZXMgZ2l0aHViLWhvdmVyLWluIHtcbiAgZnJvbSB7XG4gICAgcm90YXRlOiAwZGVnO1xuICAgIHNjYWxlOiAxO1xuICB9XG4gIHRvIHtcbiAgICByb3RhdGU6IDcyMGRlZztcbiAgICBzY2FsZTogMS4yO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGdpdGh1Yi1ob3Zlci1vdXQge1xuICBmcm9tIHtcbiAgICByb3RhdGU6IDcyMGRlZztcbiAgICBzY2FsZTogMS4yO1xuICB9XG4gIHRvIHtcbiAgICByb3RhdGU6IDBkZWc7XG4gICAgc2NhbGU6IDE7XG4gIH1cbn1cblxuZm9vdGVyIGltZzphY3RpdmUge1xuICBzY2FsZTogMTtcbn1cblxuLnRvcC1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogdmFyKC0tbGlua3MpO1xufVxuXG4udG9wLWxpbms6dmlzaXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1saW5rcyk7XG59XG5cbi8qIHV0aWxpdHkgY2xhc3NlcyAqL1xuLnJlbW92ZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4vKiBtZWRpYSBxdWVyaWVzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAjZ3JpZCB7XG4gICAgaGVpZ2h0OiA3MHZ3O1xuICB9XG4gICNjb250cm9sLXBhbmVsLWNvbnRhaW5lciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixnQkFBZ0I7O0VBRWhCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsMEJBQTBCOztFQUUxQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhOztFQUViLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7RUFFaEIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qiw0Q0FBdUQ7QUFDekQ7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQStDO0FBQ2pEOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGlDQUFpQztBQUNuQztBQUNBLFdBQVc7QUFDWDtFQUNFLCtCQUErQjtFQUMvQixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUEsU0FBUztBQUNUO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsNkNBQTZDO0FBQy9DOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSw0QkFBNEI7SUFDNUIsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLGdCQUFnQjs7RUFFaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUEsU0FBUztBQUNUO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixtQ0FBbUM7RUFDbkMsYUFBYTtFQUNiLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsK0JBQStCO0VBQy9CLGFBQWE7RUFDYiwyREFBMkQ7RUFDM0QscUJBQXFCO0VBQ3JCLFlBQVk7O0VBRVosYUFBYTs7RUFFYixrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixRQUFRO0VBQ1Y7RUFDQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0lBQ1osUUFBUTtFQUNWO0FBQ0Y7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBjb2xvcnMgKi9cXG4gIC0tZ3JheS01OiBoc2xhKDAsIDAlLCAzNSUsIDEpO1xcbiAgLS1ncmF5LTQ6IGhzbGEoMCwgMCUsIDUwJSwgMSk7XFxuICAtLWdyYXktMzogaHNsYSgwLCAwJSwgNjUlLCAxKTtcXG4gIC0tZ3JheS0yOiBoc2xhKDAsIDAlLCA4MCUsIDEpO1xcbiAgLS1ncmF5LTE6IGhzbGEoMCwgMCUsIDk1JSwgMSk7XFxuICAtLWxpbmtzOiAjZmYzMzAwO1xcblxcbiAgLyogZm9udHMgKi9cXG4gIC0tZm9vdGVyLWZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgLS1oZWFkZXItZm9udC1zaXplOiAyLjVyZW07XFxuXFxuICAvKiBib3JkZXIgcmFkaXVzICovXFxuICAtLWJyLXNtOiA1cHg7XFxuICAtLWJyLW1kOiAxMHB4O1xcbiAgLS1ici1sZzogMTVweDtcXG5cXG4gIC8qIHNwYWNpbmcgKi9cXG4gIC0tc3BhY2Utc206IDVweDtcXG4gIC0tc3BhY2UtbWQ6IDE1cHg7XFxuICAtLXNwYWNlLWxnOiAyNXB4O1xcblxcbiAgLyogdXRpbGl0eSAqL1xcbiAgLS1tYXJnaW5TcGFjZTogMC4zcmVtO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3BhY2VUaW1lXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2dsb2JhbC1hc3NldHMvZm9udHMvc3BhY2V0aW1lLXJlZ3VsYXIudHRmXFxcIik7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNb25vUm91bmRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZ2xvYmFsLWFzc2V0cy9mb250cy9Nb25vcm91bmQub3RmXFxcIik7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IE1vbm9Sb3VuZCwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2FwcCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcXG59XFxuLyogaGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMyk7XFxuICBmb250LWZhbWlseTogU3BhY2VUaW1lLCBzYW5zLXNlcmlmO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMCAxLjNyZW0gMDtcXG59XFxuXFxuaGVhZGVyIGRpdiB7XFxuICBmb250LXNpemU6IHZhcigtLWhlYWRlci1mb250LXNpemUpO1xcbn1cXG5cXG4vKiBtYWluICovXFxubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTVyZW0sIDFmcikgNWZyO1xcbn1cXG5cXG4vKiBjb250cm9sIHBhbmVsICovXFxuQGtleWZyYW1lcyBzbGlkZS1pbiB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG4jY29udHJvbC1wYW5lbC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0yKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbn1cXG5cXG4jY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIGltZzpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG5cXG4jY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lciBpbWc6YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4uY29udHJvbC1pbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5idXR0b24uY29udHJvbC1pbnB1dCB7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyLXNtKTtcXG59XFxuXFxuLmNvbnRyb2wtaW5wdXQtZ3JvdXAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jb250cm9sLWlucHV0LWxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udHJvbC1pbnB1dC1ncm91cCAuY29udHJvbC1pbnB1dC1sYWJlbCB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1zbSk7XFxufVxcblxcbi8qIGdyaWQgKi9cXG4jZ3JpZC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuI2NvbnRyb2wtaWNvbiB7XFxuICBoZWlnaHQ6IDRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXNtKTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyLW1kKTtcXG59XFxuXFxuI2NvbnRyb2wtaWNvbjpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG5cXG4jY29udHJvbC1pY29uOmFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuI2dyaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gIGhlaWdodDogNzB2aDtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS01KTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG5cXG4gIHBhZGRpbmc6IDJyZW07XFxuXFxuICBmb250LXNpemU6IHZhcigtLWZvb3Rlci1mb250LXNpemUpO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1mb290ZXItZm9udC1zaXplKSAtIDAuMXJlbSk7XFxufVxcblxcbmZvb3RlciBhIHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW5TcGFjZSk7XFxufVxcblxcbkBrZXlmcmFtZXMgZ2l0aHViLWhvdmVyLWluIHtcXG4gIGZyb20ge1xcbiAgICByb3RhdGU6IDBkZWc7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICByb3RhdGU6IDcyMGRlZztcXG4gICAgc2NhbGU6IDEuMjtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBnaXRodWItaG92ZXItb3V0IHtcXG4gIGZyb20ge1xcbiAgICByb3RhdGU6IDcyMGRlZztcXG4gICAgc2NhbGU6IDEuMjtcXG4gIH1cXG4gIHRvIHtcXG4gICAgcm90YXRlOiAwZGVnO1xcbiAgICBzY2FsZTogMTtcXG4gIH1cXG59XFxuXFxuZm9vdGVyIGltZzphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi50b3AtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbi50b3AtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbi8qIHV0aWxpdHkgY2xhc3NlcyAqL1xcbi5yZW1vdmVkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4vKiBtZWRpYSBxdWVyaWVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICNncmlkIHtcXG4gICAgaGVpZ2h0OiA3MHZ3O1xcbiAgfVxcbiAgI2NvbnRyb2wtcGFuZWwtY29udGFpbmVyIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3Rlci9Gb290ZXJcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiYXBwXCIsXG4gIH0pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKE1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiLy9Db21wb25lbnQgaW1wb3J0c1xuaW1wb3J0IEV4aXREaXYgZnJvbSBcIi4vY29udHJvbHMvRXhpdERpdi9FeGl0RGl2XCI7XG5cbmltcG9ydCBQYWludENvbG9yUGlja2VyIGZyb20gXCIuL2NvbnRyb2xzL2NvbG9yLXBpY2tlcnMvUGFpbnRDb2xvclBpY2tlclwiO1xuaW1wb3J0IENhbnZhc0NvbG9yUGlja2VyIGZyb20gXCIuL2NvbnRyb2xzL2NvbG9yLXBpY2tlcnMvQ2FudmFzQ29sb3JQaWNrZXJcIjtcblxuaW1wb3J0IEVyYXNlQnJ1c2hCdXR0b24gZnJvbSBcIi4vY29udHJvbHMvYnV0dG9ucy9FcmFzZUJydXNoQnV0dG9uXCI7XG5pbXBvcnQgRXJhc2VHcmlkQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xzL2J1dHRvbnMvRXJhc2VHcmlkQnV0dG9uXCI7XG5pbXBvcnQgVG9nZ2xlR3JpZGxpbmVzQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xzL2J1dHRvbnMvVG9nZ2xlR3JpZGxpbmVzQnV0dG9uXCI7XG5pbXBvcnQgUmFpbmJvd01vZGVCdXR0b24gZnJvbSBcIi4vY29udHJvbHMvYnV0dG9ucy9SYWluYm93TW9kZUJ1dHRvblwiO1xuaW1wb3J0IFNoYWRlTW9kZUJ1dHRvbiBmcm9tIFwiLi9jb250cm9scy9idXR0b25zL1NoYWRlTW9kZUJ1dHRvblwiO1xuXG5pbXBvcnQgR3JpZFNpemVTZWxlY3RvciBmcm9tIFwiLi9jb250cm9scy9HcmlkU2l6ZVNlbGVjdG9yXCI7XG5cbmNvbnN0IENvbnRyb2xQYW5lbCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiY29udHJvbC1wYW5lbC1jb250YWluZXJcIixcbiAgICBcImRhdGEtaXNWaXNpYmxlXCI6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChFeGl0RGl2KCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoUGFpbnRDb2xvclBpY2tlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKENhbnZhc0NvbG9yUGlja2VyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoRXJhc2VCcnVzaEJ1dHRvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKEVyYXNlR3JpZEJ1dHRvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFRvZ2dsZUdyaWRsaW5lc0J1dHRvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFJhaW5ib3dNb2RlQnV0dG9uKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoU2hhZGVNb2RlQnV0dG9uKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoR3JpZFNpemVTZWxlY3RvcigpKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFBhbmVsO1xuIiwiaW1wb3J0IEhpZGVJY29uIGZyb20gXCIuL2ljb25zL2V5ZS1oaWRlLnBuZ1wiO1xuXG5jb25zdCBFeGl0RGl2ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogXCJjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGljb24gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksIHtcbiAgICBpZDogXCJoaWRlLWNvbnRyb2wtcGFuZWwtaWNvblwiLFxuICAgIHNyYzogSGlkZUljb24sXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhpdERpdjtcbiIsImltcG9ydCBSYW5nZSBmcm9tIFwiLi4vLi4vYmFzaWMtZWxlbWVudHMvUmFuZ2VcIjtcblxuY29uc3QgR3JpZFNpemVTZWxlY3RvciA9ICgpID0+IHtcbiAgY29uc3QgY3VycmVudEdyaWRTaXplID0gMDtcblxuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKFxuICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1ncm91cFwiIH0pXG4gICk7XG5cbiAgY29uc3QgcmFuZ2UgPSBPYmplY3QuYXNzaWduKFJhbmdlKCksIHsgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIiB9KTtcblxuICBjb25zdCBsYWJlbCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlubmVyVGV4dDogYEdyaWQgc2l6ZTogJHtjdXJyZW50R3JpZFNpemV9IHggJHtjdXJyZW50R3JpZFNpemV9YCxcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1sYWJlbFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmFuZ2UpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkU2l6ZVNlbGVjdG9yO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQnV0dG9uXCI7XG5cbmNvbnN0IEVyYXNlQnJ1c2hCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG5cbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcImVyYXNlLWJydXNoLWJ1dHRvblwiLFxuICAgIGlubmVyVGV4dDogXCJFcmFzZVwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcmFzZUJydXNoQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQnV0dG9uXCI7XG5cbmNvbnN0IEVyYXNlR3JpZEJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcImVyYXNlLWdyaWQtYnV0dG9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIkVyYXNlIGdyaWRcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJhc2VHcmlkQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQnV0dG9uXCI7XG5cbmNvbnN0IFJhaW5ib3dNb2RlQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICBjb25zdCBidXR0b24gPSBPYmplY3QuYXNzaWduKEJ1dHRvbigpLCB7XG4gICAgaWQ6IFwicmFpbmJvdy1tb2RlLWJ1dHRvblwiLFxuICAgIGlubmVyVGV4dDogXCJSYWluYm93IG1vZGVcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFpbmJvd01vZGVCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9iYXNpYy1lbGVtZW50cy9CdXR0b25cIjtcblxuY29uc3QgU2hhZGVNb2RlQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICBjb25zdCBidXR0b24gPSBPYmplY3QuYXNzaWduKEJ1dHRvbigpLCB7XG4gICAgaWQ6IFwic2hhZGUtbW9kZS1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiU2hhZGUgbW9kZVwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGFkZU1vZGVCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9iYXNpYy1lbGVtZW50cy9CdXR0b25cIjtcblxuY29uc3QgVG9nZ2xlR3JpZGxpbmVzQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICBjb25zdCBidXR0b24gPSBPYmplY3QuYXNzaWduKEJ1dHRvbigpLCB7XG4gICAgaWQ6IFwidG9nZ2xlLWdyaWRsaW5lcy1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiVG9nZ2xlIGdyaWRsaW5lc1wiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVHcmlkbGluZXNCdXR0b247XG4iLCJpbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0NvbG9yUGlja2VyXCI7XG5cbmNvbnN0IENhbnZhc0NvbG9yUGlja2VyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1ncm91cFwiLFxuICB9KTtcbiAgY29uc3QgY29sb3JQaWNrZXIgPSBPYmplY3QuYXNzaWduKENvbG9yUGlja2VyKCksIHtcbiAgICBpZDogXCJjYW52YXMtY29sb3ItcGlja2VyXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgfSk7XG5cbiAgY29uc3QgbGFiZWwgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpbm5lclRleHQ6IFwiU2VsZWN0IGNhbnZhcyBjb2xvclwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0LWxhYmVsXCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvclBpY2tlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhc0NvbG9yUGlja2VyO1xuIiwiaW1wb3J0IENvbG9yUGlja2VyIGZyb20gXCIuLi8uLi8uLi9iYXNpYy1lbGVtZW50cy9Db2xvclBpY2tlclwiO1xuXG5jb25zdCBQYWludENvbG9yUGlja2VyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1ncm91cFwiLFxuICB9KTtcblxuICBjb25zdCBjb2xvclBpY2tlciA9IE9iamVjdC5hc3NpZ24oQ29sb3JQaWNrZXIoKSwge1xuICAgIGlkOiBcInBhaW50LWNvbG9yLXBpY2tlclwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaW5uZXJUZXh0OiBcIlNlbGVjdCBwYWludCBjb2xvclwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0LWxhYmVsXCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvclBpY2tlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhaW50Q29sb3JQaWNrZXI7XG4iLCJpbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiLi9sb2dvcy9naXRodWItbWFyay13aGl0ZS5wbmdcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiksIHt9KTtcblxuICBjb25zdCBjb3B5cmlnaHRDb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29weXJpZ2h0LWNvbnRhaW5lclwiLFxuICAgIGlubmVyVGV4dDogYMKpIENhcmxpbiBNaXRjaGVsbCAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gLFxuICB9KTtcblxuICBjb25zdCB0b3BDb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwidG9wLWF0dHJpYnV0aW9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIkluc3BpcmVkIGJ5XCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRvcExpbmsgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcInRvcC1saW5rXCIsXG4gICAgaW5uZXJUZXh0OiBcIlRoZSBPZGluIFByb2plY3RcIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIixcbiAgfSk7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksIHtcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jYXJsaW4tbWl0Y2hlbGwvZXRjaC1hLXNrZXRjaC13ZWJwYWNrLVRPUFwiLFxuICB9KTtcblxuICBjb25zdCBnaXRodWJJY29uID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLCB7XG4gICAgc3JjOiBHaXRIdWJJY29uLFxuICAgIGNsYXNzTmFtZTogXCJnaXRodWItaWNvblwiLFxuICB9KTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0Q29udGFpbmVyKTtcbiAgY29weXJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZCh0b3BDb250YWluZXIpO1xuICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQodG9wTGluayk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBDb250cm9sSWNvblBhdGggZnJvbSBcIi4vaWNvbnMvY29udHJvbHMucG5nXCI7XG5cbmNvbnN0IENvbnRyb2xJY29uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pY29uLWNvbnRhaW5lclwiLFxuICB9KTtcbiAgY29uc3QgaWNvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSwge1xuICAgIGlkOiBcImNvbnRyb2wtaWNvblwiLFxuICAgIHNyYzogQ29udHJvbEljb25QYXRoLFxuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbEljb247XG4iLCJpbXBvcnQgQ29udHJvbEljb24gZnJvbSBcIi4vQ29udHJvbEljb24vQ29udHJvbEljb25cIjtcblxuY29uc3QgR3JpZENvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiZ3JpZC1jb250YWluZXJcIixcbiAgfSk7XG5cbiAgY29uc3QgZ3JpZCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwgeyBpZDogXCJncmlkXCIgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKENvbnRyb2xJY29uKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRDb250YWluZXI7XG4iLCJjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCB7fSkpO1xuXG4gIGNvbnN0IHRpdGxlID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaW5uZXJUZXh0OiBcIkV0Y2gtQS1Ta2V0Y2hcIixcbiAgfSk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsXCI7XG5pbXBvcnQgR3JpZENvbnRhaW5lciBmcm9tIFwiLi9HcmlkU2VjdGlvbi9HcmlkQ29udGFpbmVyXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLCB7fSk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5pZCA9IFwidGVzdFwiO1xuICBtYWluLmFwcGVuZENoaWxkKENvbnRyb2xQYW5lbCgpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChHcmlkQ29udGFpbmVyKCkpO1xuXG4gIHJldHVybiBtYWluO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcbiIsImNvbnN0IEJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpKTtcbiAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImNvbnN0IENvbG9yUGlja2VyID0gKCkgPT4ge1xuICBjb25zdCBjb2xvclBpY2tlciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLCB7XG4gICAgdHlwZTogXCJjb2xvclwiLFxuICB9KTtcbiAgcmV0dXJuIGNvbG9yUGlja2VyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29sb3JQaWNrZXI7XG4iLCJjb25zdCBSYW5nZSA9ICgpID0+IHtcbiAgY29uc3QgcmFuZ2UgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSwge1xuICAgIHR5cGU6IFwicmFuZ2VcIixcbiAgfSk7XG5cbiAgcmV0dXJuIHJhbmdlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFuZ2U7XG4iLCJjb25zdCBBbmltYXRpb25Db250cm9sbGVyID0gKCkgPT4ge1xuICAvLyBnaXRodWItaWNvblxuICBPYmplY3QuYXNzaWduKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2l0aHViLWljb25cIiksIHtcbiAgICBvbm1vdXNlb3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdHlsZS5hbmltYXRpb24gPSBcImdpdGh1Yi1ob3Zlci1pbiAxcyBmb3J3YXJkc1wiO1xuICAgIH0sXG4gICAgb25tb3VzZW91dDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdHlsZS5hbmltYXRpb24gPSBcImdpdGh1Yi1ob3Zlci1vdXQgMXMgZm9yd2FyZHNcIjtcbiAgICB9LFxuICB9KTtcblxuICAvLyBjb250cm9sLXBhbmVsXG4gIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJvbC1wYW5lbC1jb250YWluZXJcIik7XG4gIGNvbnN0IHNsaWRlSW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250cm9sLXBhbmVsLWNvbnRhaW5lclwiKTtcbiAgICBjb250cm9sUGFuZWwuc3R5bGUuYW5pbWF0aW9uID0gXCJzbGlkZS1pbiAuNzVzIGZvcndhcmRzXCI7XG4gICAgY29udHJvbFBhbmVsW1wiZGF0YS1pc1Zpc2libGVcIl0gPSB0cnVlO1xuICB9O1xuICBjb25zdCBzbGlkZU91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBjb25zdCBjb250cm9sUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRyb2wtcGFuZWwtY29udGFpbmVyXCIpO1xuICAgIGNvbnRyb2xQYW5lbC5zdHlsZS5hbmltYXRpb24gPSBcInNsaWRlLW91dCAuNzVzIGZvcndhcmRzXCI7XG4gICAgY29udHJvbFBhbmVsW1wiZGF0YS1pc1Zpc2libGVcIl0gPSBmYWxzZTtcbiAgfTtcblxuICBPYmplY3QuYXNzaWduKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJvbC1pY29uXCIpLCB7XG4gICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgc2xpZGVJbigpO1xuICAgIH0sXG4gIH0pO1xuICBPYmplY3QuYXNzaWduKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlkZS1jb250cm9sLXBhbmVsLWljb25cIiksIHtcbiAgICBvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICBzbGlkZU91dCgpO1xuICAgIH0sXG4gIH0pO1xuXG4gIHdpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgeyBpbm5lcldpZHRoIH0gPSBlLnRhcmdldDtcbiAgICBpZiAoaW5uZXJXaWR0aCA8PSAxMTUwKSB7XG4gICAgICBzbGlkZU91dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIWNvbnRyb2xQYW5lbFtcImRhdGEtaXNWaXNpYmxlXCJdKSB7XG4gICAgICAgIHNsaWRlSW4oKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coY29udHJvbFBhbmVsW1wiZGF0YS1pc1Zpc2libGVcIl0pO1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uQ29udHJvbGxlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gc3R5bGVzaGVldHNcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5cbi8vIGxvZ2ljIG1hbmFnZXJzXG5pbXBvcnQgQW5pbWF0aW9uQ29udHJvbGxlciBmcm9tIFwiLi9sb2dpYy9BbmltYXRpb25Db250cm9sbGVyXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29udGVudCgpKTtcblxuLy8gaW5pdGlhbGl6ZSBzaW5nbGUtdXNlLWNvbnRyb2xsZXJzXG5BbmltYXRpb25Db250cm9sbGVyKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=