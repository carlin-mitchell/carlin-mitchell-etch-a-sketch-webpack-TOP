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

  /* canvas */
  --canvas-borders: 1px solid black;
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

.slide-in {
  animation: slide-in 0.75s forwards;
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

.slide-out {
  animation: slide-out 0.75s forwards;
}

#control-panel-container {
  visibility: visible;
  background-color: var(--gray-2);
  padding: var(--space-lg);
  font-size: 1.2rem;

  display: grid;
  justify-content: space-evenly;
  align-content: space-between;
  grid-row: 1/2;
  grid-column: 1/2;
  z-index: 10;
}

#control-panel-exit-container {
  cursor: pointer;
  text-align: center;
}
#control-panel-exit-container img:hover {
  scale: 1.1;
}
#control-panel-exit-container img:active {
  scale: 1;
}

.control-input {
  color: black;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  width: 100%;
}

button.control-input {
  border-radius: var(--br-sm);
  padding-top: 0.25rem;
}
button.control-input:hover {
  scale: 1.025;
}
button.control-input:active {
  scale: 1;
}

.control-input-group {
  text-align: center;
  display: flex;
  flex-direction: column;
}
.control-input-group .control-input-label {
  margin-top: var(--space-sm);
}
.control-input-label {
  display: block;
  text-align: center;
}

/* grid */
#canvas-container {
  height: 100%;
  padding: var(--space-lg);

  display: grid;
  grid-template-rows: max-content 1fr;
  grid-row: 1/2;
  grid-column: 1/-1;
  z-index: 0;
}

#canvas {
  background-color: var(--gray-1);
  border-left: var(--canvas-borders);
  border-top: var(--canvas-borders);
  display: grid;
  height: 70vh;
  aspect-ratio: 1;
  justify-self: center;
  align-self: center;
}

#control-icon {
  border: 3px solid black;
  border-radius: var(--br-md);
  cursor: pointer;
  height: 4rem;

  padding: var(--space-sm);
}
#control-icon:hover {
  scale: 1.1;
}
#control-icon:active {
  scale: 1;
}

.canvas-square {
  border-right: var(--canvas-borders);
  border-bottom: var(--canvas-borders);
  cursor: crosshair;
}

.no-borders {
  border: none;
}

.full-borders {
  border: var(--canvas-borders);
}

.canvas-square:hover {
  scale: 1.01;
  box-shadow: 0px 0px 0.3rem black;
}
.canvas-square:active {
  scale: 1;
}
/* footer */
footer {
  background-color: var(--gray-5);
  font-size: var(--footer-font-size);
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;
  color: white;
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
.github-hover-in {
  animation: github-hover-in 1s forwards;
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
.github-hover-out {
  animation: github-hover-out 1s forwards;
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
  #canvas {
    height: 70vw;
  }
  #control-panel-container {
    visibility: hidden;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,6BAA6B;EAC7B,6BAA6B;EAC7B,6BAA6B;EAC7B,6BAA6B;EAC7B,6BAA6B;EAC7B,gBAAgB;;EAEhB,WAAW;EACX,iCAAiC;EACjC,UAAU;EACV,0BAA0B;EAC1B,0BAA0B;;EAE1B,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;;EAEb,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,gBAAgB;;EAEhB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;EACxB,4CAAuD;AACzD;;AAEA;EACE,wBAAwB;EACxB,4CAA+C;AACjD;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;AACnC;AACA,WAAW;AACX;EACE,+BAA+B;EAC/B,kCAAkC;EAClC,aAAa;EACb,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,kCAAkC;AACpC;;AAEA,SAAS;AACT;EACE,+BAA+B;EAC/B,aAAa;EACb,uBAAuB;EACvB,6CAA6C;AAC/C;;AAEA,kBAAkB;AAClB;EACE;IACE,4BAA4B;IAC5B,kBAAkB;EACpB;EACA;IACE,yBAAyB;IACzB,mBAAmB;EACrB;AACF;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE;IACE,yBAAyB;IACzB,mBAAmB;EACrB;EACA;IACE,4BAA4B;IAC5B,kBAAkB;EACpB;AACF;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mBAAmB;EACnB,+BAA+B;EAC/B,wBAAwB;EACxB,iBAAiB;;EAEjB,aAAa;EACb,6BAA6B;EAC7B,4BAA4B;EAC5B,aAAa;EACb,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;AACA;EACE,UAAU;AACZ;AACA;EACE,QAAQ;AACV;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,2BAA2B;EAC3B,oBAAoB;AACtB;AACA;EACE,YAAY;AACd;AACA;EACE,QAAQ;AACV;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,cAAc;EACd,kBAAkB;AACpB;;AAEA,SAAS;AACT;EACE,YAAY;EACZ,wBAAwB;;EAExB,aAAa;EACb,mCAAmC;EACnC,aAAa;EACb,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,+BAA+B;EAC/B,kCAAkC;EAClC,iCAAiC;EACjC,aAAa;EACb,YAAY;EACZ,eAAe;EACf,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,2BAA2B;EAC3B,eAAe;EACf,YAAY;;EAEZ,wBAAwB;AAC1B;AACA;EACE,UAAU;AACZ;AACA;EACE,QAAQ;AACV;;AAEA;EACE,mCAAmC;EACnC,oCAAoC;EACpC,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,gCAAgC;AAClC;AACA;EACE,QAAQ;AACV;AACA,WAAW;AACX;EACE,+BAA+B;EAC/B,kCAAkC;EAClC,aAAa;EACb,aAAa;EACb,2DAA2D;EAC3D,qBAAqB;EACrB,YAAY;AACd;AACA;EACE,8CAA8C;AAChD;AACA;EACE,+BAA+B;AACjC;;AAEA;EACE;IACE,YAAY;IACZ,QAAQ;EACV;EACA;IACE,cAAc;IACd,UAAU;EACZ;AACF;AACA;EACE,sCAAsC;AACxC;;AAEA;EACE;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,YAAY;IACZ,QAAQ;EACV;AACF;AACA;EACE,uCAAuC;AACzC;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,oBAAoB;AACpB;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA,kBAAkB;AAClB;EACE;IACE,YAAY;EACd;EACA;IACE,kBAAkB;EACpB;AACF","sourcesContent":[":root {\n  /* colors */\n  --gray-5: hsla(0, 0%, 35%, 1);\n  --gray-4: hsla(0, 0%, 50%, 1);\n  --gray-3: hsla(0, 0%, 65%, 1);\n  --gray-2: hsla(0, 0%, 80%, 1);\n  --gray-1: hsla(0, 0%, 95%, 1);\n  --links: #ff3300;\n\n  /* canvas */\n  --canvas-borders: 1px solid black;\n  /* fonts */\n  --footer-font-size: 1.1rem;\n  --header-font-size: 2.5rem;\n\n  /* border radius */\n  --br-sm: 5px;\n  --br-md: 10px;\n  --br-lg: 15px;\n\n  /* spacing */\n  --space-sm: 5px;\n  --space-md: 15px;\n  --space-lg: 25px;\n\n  /* utility */\n  --marginSpace: 0.3rem;\n}\n\n@font-face {\n  font-family: \"SpaceTime\";\n  src: url(\"./global-assets/fonts/spacetime-regular.ttf\");\n}\n\n@font-face {\n  font-family: \"MonoRound\";\n  src: url(\"./global-assets/fonts/Monoround.otf\");\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: MonoRound, sans-serif;\n}\n\n#app {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n/* header */\nheader {\n  background-color: var(--gray-3);\n  font-family: SpaceTime, sans-serif;\n  display: grid;\n  text-align: center;\n  padding: 1rem 0 1.3rem 0;\n}\n\nheader div {\n  font-size: var(--header-font-size);\n}\n\n/* main */\nmain {\n  background-color: var(--gray-1);\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: minmax(15rem, 1fr) 5fr;\n}\n\n/* control panel */\n@keyframes slide-in {\n  from {\n    transform: translateX(-100%);\n    visibility: hidden;\n  }\n  to {\n    transform: translateX(0%);\n    visibility: visible;\n  }\n}\n\n.slide-in {\n  animation: slide-in 0.75s forwards;\n}\n\n@keyframes slide-out {\n  from {\n    transform: translateX(0%);\n    visibility: visible;\n  }\n  to {\n    transform: translateX(-100%);\n    visibility: hidden;\n  }\n}\n\n.slide-out {\n  animation: slide-out 0.75s forwards;\n}\n\n#control-panel-container {\n  visibility: visible;\n  background-color: var(--gray-2);\n  padding: var(--space-lg);\n  font-size: 1.2rem;\n\n  display: grid;\n  justify-content: space-evenly;\n  align-content: space-between;\n  grid-row: 1/2;\n  grid-column: 1/2;\n  z-index: 10;\n}\n\n#control-panel-exit-container {\n  cursor: pointer;\n  text-align: center;\n}\n#control-panel-exit-container img:hover {\n  scale: 1.1;\n}\n#control-panel-exit-container img:active {\n  scale: 1;\n}\n\n.control-input {\n  color: black;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: inherit;\n  width: 100%;\n}\n\nbutton.control-input {\n  border-radius: var(--br-sm);\n  padding-top: 0.25rem;\n}\nbutton.control-input:hover {\n  scale: 1.025;\n}\nbutton.control-input:active {\n  scale: 1;\n}\n\n.control-input-group {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n.control-input-group .control-input-label {\n  margin-top: var(--space-sm);\n}\n.control-input-label {\n  display: block;\n  text-align: center;\n}\n\n/* grid */\n#canvas-container {\n  height: 100%;\n  padding: var(--space-lg);\n\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  z-index: 0;\n}\n\n#canvas {\n  background-color: var(--gray-1);\n  border-left: var(--canvas-borders);\n  border-top: var(--canvas-borders);\n  display: grid;\n  height: 70vh;\n  aspect-ratio: 1;\n  justify-self: center;\n  align-self: center;\n}\n\n#control-icon {\n  border: 3px solid black;\n  border-radius: var(--br-md);\n  cursor: pointer;\n  height: 4rem;\n\n  padding: var(--space-sm);\n}\n#control-icon:hover {\n  scale: 1.1;\n}\n#control-icon:active {\n  scale: 1;\n}\n\n.canvas-square {\n  border-right: var(--canvas-borders);\n  border-bottom: var(--canvas-borders);\n  cursor: crosshair;\n}\n\n.no-borders {\n  border: none;\n}\n\n.full-borders {\n  border: var(--canvas-borders);\n}\n\n.canvas-square:hover {\n  scale: 1.01;\n  box-shadow: 0px 0px 0.3rem black;\n}\n.canvas-square:active {\n  scale: 1;\n}\n/* footer */\nfooter {\n  background-color: var(--gray-5);\n  font-size: var(--footer-font-size);\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-items: center;\n  color: white;\n}\nfooter img {\n  height: calc(var(--footer-font-size) - 0.1rem);\n}\nfooter a {\n  margin-left: var(--marginSpace);\n}\n\n@keyframes github-hover-in {\n  from {\n    rotate: 0deg;\n    scale: 1;\n  }\n  to {\n    rotate: 720deg;\n    scale: 1.2;\n  }\n}\n.github-hover-in {\n  animation: github-hover-in 1s forwards;\n}\n\n@keyframes github-hover-out {\n  from {\n    rotate: 720deg;\n    scale: 1.2;\n  }\n  to {\n    rotate: 0deg;\n    scale: 1;\n  }\n}\n.github-hover-out {\n  animation: github-hover-out 1s forwards;\n}\n\nfooter img:active {\n  scale: 1;\n}\n\n.top-link:visited {\n  color: var(--links);\n}\n\n.top-link:visited {\n  color: var(--links);\n}\n\n/* utility classes */\n.removed {\n  display: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n/* media queries */\n@media only screen and (max-width: 1000px) {\n  #canvas {\n    height: 70vw;\n  }\n  #control-panel-container {\n    visibility: hidden;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/components/CanvasSection/Canvas.js":
/*!************************************************!*\
  !*** ./src/components/CanvasSection/Canvas.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Canvas = () => {
  const canvas = Object.assign(document.createElement("div"), {
    id: "canvas",
  });
  return canvas;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Canvas);


/***/ }),

/***/ "./src/components/CanvasSection/CanvasContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/CanvasSection/CanvasContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ControlIcon_ControlIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ControlIcon/ControlIcon */ "./src/components/CanvasSection/ControlIcon/ControlIcon.js");
/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvas */ "./src/components/CanvasSection/Canvas.js");



const CanvasContainer = () => {
  const container = Object.assign(document.createElement("div"), {
    id: "canvas-container",
  });

  container.appendChild((0,_ControlIcon_ControlIcon__WEBPACK_IMPORTED_MODULE_0__["default"])());
  container.appendChild((0,_Canvas__WEBPACK_IMPORTED_MODULE_1__["default"])());

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasContainer);


/***/ }),

/***/ "./src/components/CanvasSection/CanvasSquare.js":
/*!******************************************************!*\
  !*** ./src/components/CanvasSection/CanvasSquare.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../logic/CanvasManager */ "./src/logic/CanvasManager.js");
/* harmony import */ var _logic_StateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../logic/StateManager */ "./src/logic/StateManager.js");



const CanvasSquare = (idNum) => {
  const square = Object.assign(document.createElement("div"), {
    id: `canvas-square-${idNum}`,
    className: "canvas-square",
    draggable: false,
    onmousedown: function (e) {
      e.preventDefault();
      _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_0__["default"].paintCanvasSquare(e);
    },
    ontouchstart: function (e) {
      _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_0__["default"].paintCanvasSquare(e);
    },

    onmouseover: function (e) {
      _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_0__["default"].paintCanvasSquare(e);
    },
    ontouchmove: function (e) {
      _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_0__["default"].paintCanvasSquare(e);
    },
  });
  square.style.backgroundColor = _logic_StateManager__WEBPACK_IMPORTED_MODULE_1__["default"].getCanvasBackgroundColor();
  return square;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasSquare);


/***/ }),

/***/ "./src/components/CanvasSection/ControlIcon/ControlIcon.js":
/*!*****************************************************************!*\
  !*** ./src/components/CanvasSection/ControlIcon/ControlIcon.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _icons_controls_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/controls.png */ "./src/components/CanvasSection/ControlIcon/icons/controls.png");


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
/* harmony import */ var _controls_buttons_EraseCanvasButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controls/buttons/EraseCanvasButton */ "./src/components/ControlPanel/controls/buttons/EraseCanvasButton.js");
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
  container.appendChild((0,_controls_buttons_EraseCanvasButton__WEBPACK_IMPORTED_MODULE_4__["default"])());
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
/* harmony import */ var _logic_appConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../logic/appConfig */ "./src/logic/appConfig.js");
/* harmony import */ var _logic_StateManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../logic/StateManager */ "./src/logic/StateManager.js");
/* harmony import */ var _logic_ControlManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../logic/ControlManager */ "./src/logic/ControlManager.js");






const GridSizeSelector = () => {
  let currentGridSize = _logic_StateManager__WEBPACK_IMPORTED_MODULE_2__["default"].getGridSize();

  const container = Object.assign(
    document.createElement("div", { className: "control-input-group" })
  );

  const range = Object.assign((0,_basic_elements_Range__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "grid-size-selector",
    className: "control-input",
    min: _logic_appConfig__WEBPACK_IMPORTED_MODULE_1__["default"].gridMin,
    max: _logic_appConfig__WEBPACK_IMPORTED_MODULE_1__["default"].gridMax,
    value: _logic_StateManager__WEBPACK_IMPORTED_MODULE_2__["default"].getGridSize(),
    oninput: function (e) {
      _logic_ControlManager__WEBPACK_IMPORTED_MODULE_3__["default"].setGridSize(e.target.value);
    },
  });

  const label = Object.assign(document.createElement("div"), {
    id: "grid-size-selector-label",
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
/* harmony import */ var _logic_ControlManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../logic/ControlManager */ "./src/logic/ControlManager.js");



const EraseBrushButton = () => {
  const container = Object.assign(document.createElement("div"));

  const button = Object.assign((0,_basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "erase-brush-button",
    innerText: "Erase",
    className: "control-input",
    onclick: function () {
      _logic_ControlManager__WEBPACK_IMPORTED_MODULE_1__["default"].setPaintColorToErase();
    },
  });

  container.appendChild(button);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EraseBrushButton);


/***/ }),

/***/ "./src/components/ControlPanel/controls/buttons/EraseCanvasButton.js":
/*!***************************************************************************!*\
  !*** ./src/components/ControlPanel/controls/buttons/EraseCanvasButton.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../basic-elements/Button */ "./src/components/basic-elements/Button.js");
/* harmony import */ var _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../logic/CanvasManager */ "./src/logic/CanvasManager.js");



const EraseCanvasButton = () => {
  const container = Object.assign(document.createElement("div"));
  const button = Object.assign((0,_basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "erase-grid-button",
    innerText: "Erase grid",
    className: "control-input",
    onclick: function () {
      _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_1__["default"].resetCanvas();
    },
  });

  container.appendChild(button);

  return container;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EraseCanvasButton);


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
    className: "control-input mode-button",
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
    className: "control-input mode-button",
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
/* harmony import */ var _logic_ControlManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../logic/ControlManager */ "./src/logic/ControlManager.js");



const ToggleGridlinesButton = () => {
  const container = Object.assign(document.createElement("div"));
  const button = Object.assign((0,_basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "toggle-gridlines-button",
    innerText: "Toggle gridlines",
    className: "control-input",
    onclick: function () {
      _logic_ControlManager__WEBPACK_IMPORTED_MODULE_1__["default"].toggleGridlines();
    },
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
/* harmony import */ var _logic_StateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../logic/StateManager */ "./src/logic/StateManager.js");
/* harmony import */ var _logic_ControlManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../logic/ControlManager */ "./src/logic/ControlManager.js");




const CanvasColorPicker = () => {
  const container = Object.assign(document.createElement("div"), {
    className: "control-input-group",
  });
  const colorPicker = Object.assign((0,_basic_elements_ColorPicker__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "canvas-color-picker",
    className: "control-input",
    value: _logic_StateManager__WEBPACK_IMPORTED_MODULE_1__["default"].getCanvasBackgroundColor(),
    oninput: function (e) {
      _logic_ControlManager__WEBPACK_IMPORTED_MODULE_2__["default"].setCanvasColor(e);
    },
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
/* harmony import */ var _logic_ControlManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../logic/ControlManager */ "./src/logic/ControlManager.js");



const PaintColorPicker = () => {
  const container = Object.assign(document.createElement("div"), {
    className: "control-input-group",
  });

  const colorPicker = Object.assign((0,_basic_elements_ColorPicker__WEBPACK_IMPORTED_MODULE_0__["default"])(), {
    id: "paint-color-picker",
    className: "control-input",
    oninput: function (e) {
      _logic_ControlManager__WEBPACK_IMPORTED_MODULE_1__["default"].setPaintColor(e);
    },
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
    innerText: "Pixel Artist",
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
/* harmony import */ var _CanvasSection_CanvasContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CanvasSection/CanvasContainer */ "./src/components/CanvasSection/CanvasContainer.js");



const Main = () => {
  const main = Object.assign(document.createElement("main"), {});
  const div = document.createElement("div");
  div.id = "test";
  main.appendChild((0,_ControlPanel_ControlPanel__WEBPACK_IMPORTED_MODULE_0__["default"])());
  main.appendChild((0,_CanvasSection_CanvasContainer__WEBPACK_IMPORTED_MODULE_1__["default"])());

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

/***/ "./src/logic/AnimationManager.js":
/*!***************************************!*\
  !*** ./src/logic/AnimationManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const AnimationManager = (() => {
  function applyAnimations() {
    Object.assign(document.querySelector(".github-icon"), {
      onmouseover: function () {
        this.classList.remove("github-hover-out");
        this.classList.add("github-hover-in");
      },
      onmouseout: function () {
        this.classList.remove("github-hover-in");
        this.classList.add("github-hover-out");
      },
    });

    // control-panel
    const controlPanel = document.querySelector("#control-panel-container");
    const slideIn = function () {
      // const controlPanel = document.querySelector("#control-panel-container");
      controlPanel.classList.remove("slide-out");
      controlPanel.classList.add("slide-in");
      controlPanel["data-isVisible"] = true;
    };
    const slideOut = function () {
      // const controlPanel = document.querySelector("#control-panel-container");
      controlPanel.classList.remove("slide-in");
      controlPanel.classList.add("slide-out");
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
    };
  }
  return { applyAnimations };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimationManager);


/***/ }),

/***/ "./src/logic/CanvasManager.js":
/*!************************************!*\
  !*** ./src/logic/CanvasManager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManager */ "./src/logic/StateManager.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities */ "./src/logic/utilities.js");
/* harmony import */ var _components_CanvasSection_CanvasSquare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CanvasSection/CanvasSquare */ "./src/components/CanvasSection/CanvasSquare.js");





const CanvasManager = (() => {
  function clearGrid() {
    const canvas = document.querySelector("#canvas");
    while (canvas.firstChild) {
      canvas.removeChild(canvas.firstChild);
    }
  }

  function paintCanvasSquare(e) {
    if (
      e.type === "mousedown" ||
      e.type === "touchstart" ||
      _StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].getLeftMouseButtonDown()
    ) {
      const square = e.target;
      square.style.backgroundColor = _StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].getPaintColor();
    }
  }

  function resetCanvas() {
    const canvasSquares = [...document.querySelectorAll(".canvas-square")];

    (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.setElementsBgColor)(
      canvasSquares,
      (0,_utilities__WEBPACK_IMPORTED_MODULE_1__.hexToRgbStr)(_StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].getCanvasBackgroundColor())
    );
  }

  function toggleGridlines() {
    const canvasSquares = [...document.querySelectorAll(".canvas-square")];
    const canvas = document.querySelector("#canvas");
    canvas.classList.toggle("full-borders");
    canvasSquares.forEach((square) => square.classList.toggle("no-borders"));
  }

  function updateGridSize() {
    const gridSize = _StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].getGridSize();
    const totalSquares = gridSize ** 2;
    const canvas = document.querySelector("#canvas");

    clearGrid();

    canvas.style["grid-template-rows"] = `repeat(${gridSize}, 1fr)`;
    canvas.style["grid-template-columns"] = `repeat(${gridSize}, 1fr)`;

    for (let idNum = 1; idNum <= totalSquares; idNum++) {
      const square = (0,_components_CanvasSection_CanvasSquare__WEBPACK_IMPORTED_MODULE_2__["default"])(idNum);
      canvas.appendChild(square);
    }
  }

  return { updateGridSize, paintCanvasSquare, resetCanvas, toggleGridlines };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CanvasManager);


/***/ }),

/***/ "./src/logic/ControlManager.js":
/*!*************************************!*\
  !*** ./src/logic/ControlManager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _logic_StateManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logic/StateManager */ "./src/logic/StateManager.js");
/* harmony import */ var _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logic/CanvasManager */ "./src/logic/CanvasManager.js");



const ControlManager = (() => {
  function setGridSize(value) {
    const gridSizeSelectorLabel = document.querySelector(
      "#grid-size-selector-label"
    );
    _logic_StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].setGridSize(value);
    gridSizeSelectorLabel.innerText = `Grid size: ${_logic_StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].getGridSize()} x ${_logic_StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].getGridSize()}`;
    _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_1__["default"].updateGridSize();
  }

  function setPaintColor(e) {
    const color = e.target.value;
    _logic_StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].setPaintColor(color);
  }

  function eraseGrid() {
    _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_1__["default"].resetCanvas();
  }

  function setPaintColorToErase() {
    _logic_StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].setPaintColor(_logic_StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].getCanvasBackgroundColor());
    document.querySelector("#paint-color-picker").value = _logic_StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].getPaintColor();
  }

  function setCanvasColor(e) {
    const color = e.target.value;
    _logic_StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].setCanvasBackgroundColor(color);
    _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_1__["default"].resetCanvas();
  }

  function toggleGridlines() {
    _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_1__["default"].toggleGridlines();
  }

  return {
    setGridSize,
    setPaintColor,
    eraseGrid,
    setCanvasColor,
    setPaintColorToErase,
    toggleGridlines,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlManager);


/***/ }),

/***/ "./src/logic/StateManager.js":
/*!***********************************!*\
  !*** ./src/logic/StateManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appConfig */ "./src/logic/appConfig.js");


const StateManager = (() => {
  let gridSize = _appConfig__WEBPACK_IMPORTED_MODULE_0__["default"].startingGridSize;
  const getGridSize = () => gridSize;
  const setGridSize = (value) => (gridSize = value);

  let canvasBackgroundColor = "#f2f2f2";
  const getCanvasBackgroundColor = () => canvasBackgroundColor;
  const setCanvasBackgroundColor = (color) => (canvasBackgroundColor = color);

  let paintColor = "#000";
  const getPaintColor = () => paintColor;
  const setPaintColor = (color) => (paintColor = color);

  let leftMouseButtonDown = false;
  const getLeftMouseButtonDown = () => leftMouseButtonDown;
  const setLeftMouseButtonDown = (value) => (leftMouseButtonDown = value);

  return {
    getLeftMouseButtonDown,
    setLeftMouseButtonDown,

    getGridSize,
    setGridSize,

    getCanvasBackgroundColor,
    setCanvasBackgroundColor,

    setPaintColor,
    getPaintColor,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StateManager);


/***/ }),

/***/ "./src/logic/appConfig.js":
/*!********************************!*\
  !*** ./src/logic/appConfig.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const config = {
  gridMin: 1,
  gridMax: 64,
  startingGridSize: 16,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);


/***/ }),

/***/ "./src/logic/utilities.js":
/*!********************************!*\
  !*** ./src/logic/utilities.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendLoremLines: () => (/* binding */ appendLoremLines),
/* harmony export */   disableElements: () => (/* binding */ disableElements),
/* harmony export */   enableElements: () => (/* binding */ enableElements),
/* harmony export */   getRandomRgbStr: () => (/* binding */ getRandomRgbStr),
/* harmony export */   getRgbStrFromValues: () => (/* binding */ getRgbStrFromValues),
/* harmony export */   getValuesFromRgbStr: () => (/* binding */ getValuesFromRgbStr),
/* harmony export */   hexToRgbStr: () => (/* binding */ hexToRgbStr),
/* harmony export */   rgbStrToFullHex: () => (/* binding */ rgbStrToFullHex),
/* harmony export */   setElementsBgColor: () => (/* binding */ setElementsBgColor),
/* harmony export */   shadeRgbStrByFactor: () => (/* binding */ shadeRgbStrByFactor)
/* harmony export */ });
//######################### EXPORTED UTILS ###########################
function hexToRgbStr(hex) {
  if (hex.length === 4) {
    hex = shortHexToFullHex(hex);
  }

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return getRgbStrFromValues(r, g, b);
}

function getRgbStrFromValues(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

function getRandomRgbStr() {
  const [randRed, randGreen, randBlue] = Array(3)
    .fill()
    .map((elem) => getRandInt(0, 256));
  return getRgbStrFromValues(randRed, randGreen, randBlue);
}

function getValuesFromRgbStr(rgbStr) {
  const [r, g, b] = rgbStr.match(/\d{1,3}/g);
  return { r: +r, g: +g, b: +b };
}

function rgbStrToFullHex(rgbStr) {
  const { r, g, b } = getValuesFromRgbStr(rgbStr);
  const [hexR, hexG, hexB] = [r, g, b].map((val) => valueToPaddedHex(val));
  return `#${hexR}${hexG}${hexB}`;
}

/**
 *Takes a single dom element or array of elements
 *and applies the specified background color to them
 *
 * @param {object} elementsArr a single element or array of elements
 * @param {string} rgbColorStr an rgb string formatted as: 'rgb(99, 255, 1)'
 * */
function setElementsBgColor(elementsArr, rgbColorStr) {
  if (typeof elementsArr !== "object") return;
  if (!Array.isArray(elementsArr)) {
    // if a single element is given, put it in an array
    elementsArr = [elementsArr];
  }
  elementsArr.forEach(
    (element) => (element.style.backgroundColor = rgbColorStr)
  );
}

function shadeRgbStrByFactor(rgbStr, factor) {
  const { r, g, b } = getValuesFromRgbStr(rgbStr);
  const [newR, newG, newB] = [r, g, b].map((val) => applyFactor(val));

  function applyFactor(value) {
    let newVal = value + factor;
    newVal = newVal < 0 ? 0 : newVal;
    newVal = newVal > 255 ? 255 : newVal;

    return newVal;
  }

  const newRgbStr = `rgb(${newR}, ${newG}, ${newB})`;

  return newRgbStr;
}

const appendLoremLines = (parent, numLines) => {
  for (let i = 0; i < numLines; i++) {
    const lorem = Object.assign(document.createElement("div"), {
      innerText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque rerum quasi nemo, officiis assumenda doloremque iure molestiae! Facere atque odio ipsa laudantium nihil alias, sit libero. Tenetur velit voluptatibus quam!",
    });
    parent.appendChild(lorem);
  }
};

const disableElements = (elementsArr) => {
  if (typeof elementsArr !== "object") return;
  if (!Array.isArray(elementsArr)) {
    // if a single element is given, put it in an array
    elementsArr = [elementsArr];
  }
  elementsArr.forEach((element) => {
    element.disabled = true;
  });
};

const enableElements = (elementsArr) => {
  if (typeof elementsArr !== "object") return;
  if (!Array.isArray(elementsArr)) {
    // if a single element is given, put it in an array
    elementsArr = [elementsArr];
  }
  elementsArr.forEach((element) => {
    element.disabled = false;
  });
};

//####################### NON EXPORTED UTILS #########################
/**
 *
 * @param {Number} min
 * @param {Number} max
 * @returns Number
 *
 * returns an integer between min (inclusive) and max (exclusive)
 */
function getRandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function shortHexToFullHex(shortHex) {
  const chunk1 = shortHex.slice(1, 2).repeat(2);
  const chunk2 = shortHex.slice(2, 3).repeat(2);
  const chunk3 = shortHex.slice(3, 4).repeat(2);

  return "#" + chunk1 + chunk2 + chunk3;
}

function valueToPaddedHex(value) {
  return value.toString(16).padStart(2, "0");
}


/***/ }),

/***/ "./src/components/CanvasSection/ControlIcon/icons/controls.png":
/*!*********************************************************************!*\
  !*** ./src/components/CanvasSection/ControlIcon/icons/controls.png ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "421261e7ed0be9eff638.png";

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
/* harmony import */ var _logic_AnimationManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic/AnimationManager */ "./src/logic/AnimationManager.js");
/* harmony import */ var _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logic/CanvasManager */ "./src/logic/CanvasManager.js");
/* harmony import */ var _logic_ControlManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logic/ControlManager */ "./src/logic/ControlManager.js");
/* harmony import */ var _logic_StateManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logic/StateManager */ "./src/logic/StateManager.js");
/* harmony import */ var _logic_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logic/utilities */ "./src/logic/utilities.js");
// stylesheets


// components


// logic managers







document.body.appendChild((0,_components_App__WEBPACK_IMPORTED_MODULE_1__["default"])());

_logic_AnimationManager__WEBPACK_IMPORTED_MODULE_2__["default"].applyAnimations();
_logic_CanvasManager__WEBPACK_IMPORTED_MODULE_3__["default"].updateGridSize();
_logic_ControlManager__WEBPACK_IMPORTED_MODULE_4__["default"].setGridSize(_logic_StateManager__WEBPACK_IMPORTED_MODULE_5__["default"].getGridSize());

window.onmousedown = function () {
  _logic_StateManager__WEBPACK_IMPORTED_MODULE_5__["default"].setLeftMouseButtonDown(true);
};

window.ontouchstart = function () {
  _logic_StateManager__WEBPACK_IMPORTED_MODULE_5__["default"].setLeftMouseButtonDown(true);
};

window.onmouseup = function () {
  _logic_StateManager__WEBPACK_IMPORTED_MODULE_5__["default"].setLeftMouseButtonDown(false);
};
window.ontouchend = function () {
  _logic_StateManager__WEBPACK_IMPORTED_MODULE_5__["default"].setLeftMouseButtonDown(false);
};

// disable mode buttons for now
[...document.querySelectorAll(".mode-button")].forEach((element) => {
  const currentText = element.innerText;
  element.innerText = currentText + " (coming soon)";
  element.disabled = true;
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUtBQThEO0FBQzFHLDRDQUE0QyxtSkFBc0Q7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUs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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDcUI7O0FBRXJCO0FBQ3VDOztBQUV2QztBQUN3RDtBQUNOO0FBQ0U7QUFDWDs7QUFFVzs7QUFFcEQsMEJBQTBCLDJEQUFPOztBQUVqQywrREFBZ0I7QUFDaEIsNERBQWE7QUFDYiw2REFBYyxhQUFhLDJEQUFLOztBQUVoQztBQUNBLEVBQUUsMkRBQUs7QUFDUDs7QUFFQTtBQUNBLEVBQUUsMkRBQUs7QUFDUDs7QUFFQTtBQUNBLEVBQUUsMkRBQUs7QUFDUDtBQUNBO0FBQ0EsRUFBRSwyREFBSztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ2FudmFzU2VjdGlvbi9DYW52YXMuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9DYW52YXNTZWN0aW9uL0NhbnZhc0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NhbnZhc1NlY3Rpb24vQ2FudmFzU3F1YXJlLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ2FudmFzU2VjdGlvbi9Db250cm9sSWNvbi9Db250cm9sSWNvbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9Db250cm9sUGFuZWwuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvRXhpdERpdi9FeGl0RGl2LmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL0dyaWRTaXplU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvYnV0dG9ucy9FcmFzZUJydXNoQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2J1dHRvbnMvRXJhc2VDYW52YXNCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvYnV0dG9ucy9SYWluYm93TW9kZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9idXR0b25zL1NoYWRlTW9kZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9idXR0b25zL1RvZ2dsZUdyaWRsaW5lc0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9jb2xvci1waWNrZXJzL0NhbnZhc0NvbG9yUGlja2VyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2NvbG9yLXBpY2tlcnMvUGFpbnRDb2xvclBpY2tlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvYmFzaWMtZWxlbWVudHMvQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvYmFzaWMtZWxlbWVudHMvQ29sb3JQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9iYXNpYy1lbGVtZW50cy9SYW5nZS5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9sb2dpYy9BbmltYXRpb25NYW5hZ2VyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2xvZ2ljL0NhbnZhc01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvbG9naWMvQ29udHJvbE1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvbG9naWMvU3RhdGVNYW5hZ2VyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2xvZ2ljL2FwcENvbmZpZy5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9sb2dpYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZ2xvYmFsLWFzc2V0cy9mb250cy9zcGFjZXRpbWUtcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2dsb2JhbC1hc3NldHMvZm9udHMvTW9ub3JvdW5kLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgLyogY29sb3JzICovXG4gIC0tZ3JheS01OiBoc2xhKDAsIDAlLCAzNSUsIDEpO1xuICAtLWdyYXktNDogaHNsYSgwLCAwJSwgNTAlLCAxKTtcbiAgLS1ncmF5LTM6IGhzbGEoMCwgMCUsIDY1JSwgMSk7XG4gIC0tZ3JheS0yOiBoc2xhKDAsIDAlLCA4MCUsIDEpO1xuICAtLWdyYXktMTogaHNsYSgwLCAwJSwgOTUlLCAxKTtcbiAgLS1saW5rczogI2ZmMzMwMDtcblxuICAvKiBjYW52YXMgKi9cbiAgLS1jYW52YXMtYm9yZGVyczogMXB4IHNvbGlkIGJsYWNrO1xuICAvKiBmb250cyAqL1xuICAtLWZvb3Rlci1mb250LXNpemU6IDEuMXJlbTtcbiAgLS1oZWFkZXItZm9udC1zaXplOiAyLjVyZW07XG5cbiAgLyogYm9yZGVyIHJhZGl1cyAqL1xuICAtLWJyLXNtOiA1cHg7XG4gIC0tYnItbWQ6IDEwcHg7XG4gIC0tYnItbGc6IDE1cHg7XG5cbiAgLyogc3BhY2luZyAqL1xuICAtLXNwYWNlLXNtOiA1cHg7XG4gIC0tc3BhY2UtbWQ6IDE1cHg7XG4gIC0tc3BhY2UtbGc6IDI1cHg7XG5cbiAgLyogdXRpbGl0eSAqL1xuICAtLW1hcmdpblNwYWNlOiAwLjNyZW07XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTcGFjZVRpbWVcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJNb25vUm91bmRcIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogTW9ub1JvdW5kLCBzYW5zLXNlcmlmO1xufVxuXG4jYXBwIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xufVxuLyogaGVhZGVyICovXG5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMpO1xuICBmb250LWZhbWlseTogU3BhY2VUaW1lLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBncmlkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW0gMCAxLjNyZW0gMDtcbn1cblxuaGVhZGVyIGRpdiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLWZvbnQtc2l6ZSk7XG59XG5cbi8qIG1haW4gKi9cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTVyZW0sIDFmcikgNWZyO1xufVxuXG4vKiBjb250cm9sIHBhbmVsICovXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuXG4uc2xpZGUtaW4ge1xuICBhbmltYXRpb246IHNsaWRlLWluIDAuNzVzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIH1cbn1cblxuLnNsaWRlLW91dCB7XG4gIGFuaW1hdGlvbjogc2xpZGUtb3V0IDAuNzVzIGZvcndhcmRzO1xufVxuXG4jY29udHJvbC1wYW5lbC1jb250YWluZXIge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTIpO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMS8yO1xuICB6LWluZGV4OiAxMDtcbn1cblxuI2NvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIGltZzpob3ZlciB7XG4gIHNjYWxlOiAxLjE7XG59XG4jY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lciBpbWc6YWN0aXZlIHtcbiAgc2NhbGU6IDE7XG59XG5cbi5jb250cm9sLWlucHV0IHtcbiAgY29sb3I6IGJsYWNrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b24uY29udHJvbC1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyLXNtKTtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG59XG5idXR0b24uY29udHJvbC1pbnB1dDpob3ZlciB7XG4gIHNjYWxlOiAxLjAyNTtcbn1cbmJ1dHRvbi5jb250cm9sLWlucHV0OmFjdGl2ZSB7XG4gIHNjYWxlOiAxO1xufVxuXG4uY29udHJvbC1pbnB1dC1ncm91cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250cm9sLWlucHV0LWdyb3VwIC5jb250cm9sLWlucHV0LWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2Utc20pO1xufVxuLmNvbnRyb2wtaW5wdXQtbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKiBncmlkICovXG4jY2FudmFzLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xuICBncmlkLXJvdzogMS8yO1xuICBncmlkLWNvbHVtbjogMS8tMTtcbiAgei1pbmRleDogMDtcbn1cblxuI2NhbnZhcyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMSk7XG4gIGJvcmRlci1sZWZ0OiB2YXIoLS1jYW52YXMtYm9yZGVycyk7XG4gIGJvcmRlci10b3A6IHZhcigtLWNhbnZhcy1ib3JkZXJzKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgaGVpZ2h0OiA3MHZoO1xuICBhc3BlY3QtcmF0aW86IDE7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbiNjb250cm9sLWljb24ge1xuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnItbWQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogNHJlbTtcblxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1zbSk7XG59XG4jY29udHJvbC1pY29uOmhvdmVyIHtcbiAgc2NhbGU6IDEuMTtcbn1cbiNjb250cm9sLWljb246YWN0aXZlIHtcbiAgc2NhbGU6IDE7XG59XG5cbi5jYW52YXMtc3F1YXJlIHtcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1jYW52YXMtYm9yZGVycyk7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLWNhbnZhcy1ib3JkZXJzKTtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG5cbi5uby1ib3JkZXJzIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZnVsbC1ib3JkZXJzIHtcbiAgYm9yZGVyOiB2YXIoLS1jYW52YXMtYm9yZGVycyk7XG59XG5cbi5jYW52YXMtc3F1YXJlOmhvdmVyIHtcbiAgc2NhbGU6IDEuMDE7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMC4zcmVtIGJsYWNrO1xufVxuLmNhbnZhcy1zcXVhcmU6YWN0aXZlIHtcbiAgc2NhbGU6IDE7XG59XG4vKiBmb290ZXIgKi9cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmZvb3RlciBpbWcge1xuICBoZWlnaHQ6IGNhbGModmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSkgLSAwLjFyZW0pO1xufVxuZm9vdGVyIGEge1xuICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luU3BhY2UpO1xufVxuXG5Aa2V5ZnJhbWVzIGdpdGh1Yi1ob3Zlci1pbiB7XG4gIGZyb20ge1xuICAgIHJvdGF0ZTogMGRlZztcbiAgICBzY2FsZTogMTtcbiAgfVxuICB0byB7XG4gICAgcm90YXRlOiA3MjBkZWc7XG4gICAgc2NhbGU6IDEuMjtcbiAgfVxufVxuLmdpdGh1Yi1ob3Zlci1pbiB7XG4gIGFuaW1hdGlvbjogZ2l0aHViLWhvdmVyLWluIDFzIGZvcndhcmRzO1xufVxuXG5Aa2V5ZnJhbWVzIGdpdGh1Yi1ob3Zlci1vdXQge1xuICBmcm9tIHtcbiAgICByb3RhdGU6IDcyMGRlZztcbiAgICBzY2FsZTogMS4yO1xuICB9XG4gIHRvIHtcbiAgICByb3RhdGU6IDBkZWc7XG4gICAgc2NhbGU6IDE7XG4gIH1cbn1cbi5naXRodWItaG92ZXItb3V0IHtcbiAgYW5pbWF0aW9uOiBnaXRodWItaG92ZXItb3V0IDFzIGZvcndhcmRzO1xufVxuXG5mb290ZXIgaW1nOmFjdGl2ZSB7XG4gIHNjYWxlOiAxO1xufVxuXG4udG9wLWxpbms6dmlzaXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1saW5rcyk7XG59XG5cbi50b3AtbGluazp2aXNpdGVkIHtcbiAgY29sb3I6IHZhcigtLWxpbmtzKTtcbn1cblxuLyogdXRpbGl0eSBjbGFzc2VzICovXG4ucmVtb3ZlZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oaWRkZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi8qIG1lZGlhIHF1ZXJpZXMgKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XG4gICNjYW52YXMge1xuICAgIGhlaWdodDogNzB2dztcbiAgfVxuICAjY29udHJvbC1wYW5lbC1jb250YWluZXIge1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCOztFQUVoQixXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsMEJBQTBCOztFQUUxQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhOztFQUViLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFn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Y0FBYztJQUNkLFVBQVU7RUFDWjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFFBQVE7RUFDVjtBQUNGO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBjb2xvcnMgKi9cXG4gIC0tZ3JheS01OiBoc2xhKDAsIDAlLCAzNSUsIDEpO1xcbiAgLS1ncmF5LTQ6IGhzbGEoMCwgMCUsIDUwJSwgMSk7XFxuICAtLWdyYXktMzogaHNsYSgwLCAwJSwgNjUlLCAxKTtcXG4gIC0tZ3JheS0yOiBoc2xhKDAsIDAlLCA4MCUsIDEpO1xcbiAgLS1ncmF5LTE6IGhzbGEoMCwgMCUsIDk1JSwgMSk7XFxuICAtLWxpbmtzOiAjZmYzMzAwO1xcblxcbiAgLyogY2FudmFzICovXFxuICAtLWNhbnZhcy1ib3JkZXJzOiAxcHggc29saWQgYmxhY2s7XFxuICAvKiBmb250cyAqL1xcbiAgLS1mb290ZXItZm9udC1zaXplOiAxLjFyZW07XFxuICAtLWhlYWRlci1mb250LXNpemU6IDIuNXJlbTtcXG5cXG4gIC8qIGJvcmRlciByYWRpdXMgKi9cXG4gIC0tYnItc206IDVweDtcXG4gIC0tYnItbWQ6IDEwcHg7XFxuICAtLWJyLWxnOiAxNXB4O1xcblxcbiAgLyogc3BhY2luZyAqL1xcbiAgLS1zcGFjZS1zbTogNXB4O1xcbiAgLS1zcGFjZS1tZDogMTVweDtcXG4gIC0tc3BhY2UtbGc6IDI1cHg7XFxuXFxuICAvKiB1dGlsaXR5ICovXFxuICAtLW1hcmdpblNwYWNlOiAwLjNyZW07XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGFjZVRpbWVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZ2xvYmFsLWFzc2V0cy9mb250cy9zcGFjZXRpbWUtcmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9Sb3VuZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9nbG9iYWwtYXNzZXRzL2ZvbnRzL01vbm9yb3VuZC5vdGZcXFwiKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogTW9ub1JvdW5kLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jYXBwIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbn1cXG4vKiBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0zKTtcXG4gIGZvbnQtZmFtaWx5OiBTcGFjZVRpbWUsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwIDEuM3JlbSAwO1xcbn1cXG5cXG5oZWFkZXIgZGl2IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIG1haW4gKi9cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNXJlbSwgMWZyKSA1ZnI7XFxufVxcblxcbi8qIGNvbnRyb2wgcGFuZWwgKi9cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxufVxcblxcbi5zbGlkZS1pbiB7XFxuICBhbmltYXRpb246IHNsaWRlLWluIDAuNzVzIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGUtb3V0IHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtb3V0IDAuNzVzIGZvcndhcmRzO1xcbn1cXG5cXG4jY29udHJvbC1wYW5lbC1jb250YWluZXIge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMik7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIGltZzpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG4jY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lciBpbWc6YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4uY29udHJvbC1pbnB1dCB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24uY29udHJvbC1pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ici1zbSk7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG59XFxuYnV0dG9uLmNvbnRyb2wtaW5wdXQ6aG92ZXIge1xcbiAgc2NhbGU6IDEuMDI1O1xcbn1cXG5idXR0b24uY29udHJvbC1pbnB1dDphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi5jb250cm9sLWlucHV0LWdyb3VwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29udHJvbC1pbnB1dC1ncm91cCAuY29udHJvbC1pbnB1dC1sYWJlbCB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1zbSk7XFxufVxcbi5jb250cm9sLWlucHV0LWxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBncmlkICovXFxuI2NhbnZhcy1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuI2NhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEpO1xcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLWNhbnZhcy1ib3JkZXJzKTtcXG4gIGJvcmRlci10b3A6IHZhcigtLWNhbnZhcy1ib3JkZXJzKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRyb2wtaWNvbiB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyLW1kKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogNHJlbTtcXG5cXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXNtKTtcXG59XFxuI2NvbnRyb2wtaWNvbjpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG4jY29udHJvbC1pY29uOmFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuLmNhbnZhcy1zcXVhcmUge1xcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1jYW52YXMtYm9yZGVycyk7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1jYW52YXMtYm9yZGVycyk7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLm5vLWJvcmRlcnMge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZnVsbC1ib3JkZXJzIHtcXG4gIGJvcmRlcjogdmFyKC0tY2FudmFzLWJvcmRlcnMpO1xcbn1cXG5cXG4uY2FudmFzLXNxdWFyZTpob3ZlciB7XFxuICBzY2FsZTogMS4wMTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMC4zcmVtIGJsYWNrO1xcbn1cXG4uY2FudmFzLXNxdWFyZTphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcbi8qIGZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb290ZXItZm9udC1zaXplKTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWZvb3Rlci1mb250LXNpemUpIC0gMC4xcmVtKTtcXG59XFxuZm9vdGVyIGEge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpblNwYWNlKTtcXG59XFxuXFxuQGtleWZyYW1lcyBnaXRodWItaG92ZXItaW4ge1xcbiAgZnJvbSB7XFxuICAgIHJvdGF0ZTogMGRlZztcXG4gICAgc2NhbGU6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIHJvdGF0ZTogNzIwZGVnO1xcbiAgICBzY2FsZTogMS4yO1xcbiAgfVxcbn1cXG4uZ2l0aHViLWhvdmVyLWluIHtcXG4gIGFuaW1hdGlvbjogZ2l0aHViLWhvdmVyLWluIDFzIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdpdGh1Yi1ob3Zlci1vdXQge1xcbiAgZnJvbSB7XFxuICAgIHJvdGF0ZTogNzIwZGVnO1xcbiAgICBzY2FsZTogMS4yO1xcbiAgfVxcbiAgdG8ge1xcbiAgICByb3RhdGU6IDBkZWc7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbn1cXG4uZ2l0aHViLWhvdmVyLW91dCB7XFxuICBhbmltYXRpb246IGdpdGh1Yi1ob3Zlci1vdXQgMXMgZm9yd2FyZHM7XFxufVxcblxcbmZvb3RlciBpbWc6YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4udG9wLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogdmFyKC0tbGlua3MpO1xcbn1cXG5cXG4udG9wLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogdmFyKC0tbGlua3MpO1xcbn1cXG5cXG4vKiB1dGlsaXR5IGNsYXNzZXMgKi9cXG4ucmVtb3ZlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLyogbWVkaWEgcXVlcmllcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAjY2FudmFzIHtcXG4gICAgaGVpZ2h0OiA3MHZ3O1xcbiAgfVxcbiAgI2NvbnRyb2wtcGFuZWwtY29udGFpbmVyIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3Rlci9Gb290ZXJcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiYXBwXCIsXG4gIH0pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKE1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiY29uc3QgQ2FudmFzID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogXCJjYW52YXNcIixcbiAgfSk7XG4gIHJldHVybiBjYW52YXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW52YXM7XG4iLCJpbXBvcnQgQ29udHJvbEljb24gZnJvbSBcIi4vQ29udHJvbEljb24vQ29udHJvbEljb25cIjtcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vQ2FudmFzXCI7XG5cbmNvbnN0IENhbnZhc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiY2FudmFzLWNvbnRhaW5lclwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoQ29udHJvbEljb24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDYW52YXMoKSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhc0NvbnRhaW5lcjtcbiIsImltcG9ydCBjYW52YXMgZnJvbSBcIi4uLy4uL2xvZ2ljL0NhbnZhc01hbmFnZXJcIjtcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vLi4vbG9naWMvU3RhdGVNYW5hZ2VyXCI7XG5cbmNvbnN0IENhbnZhc1NxdWFyZSA9IChpZE51bSkgPT4ge1xuICBjb25zdCBzcXVhcmUgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogYGNhbnZhcy1zcXVhcmUtJHtpZE51bX1gLFxuICAgIGNsYXNzTmFtZTogXCJjYW52YXMtc3F1YXJlXCIsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICBvbm1vdXNlZG93bjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNhbnZhcy5wYWludENhbnZhc1NxdWFyZShlKTtcbiAgICB9LFxuICAgIG9udG91Y2hzdGFydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNhbnZhcy5wYWludENhbnZhc1NxdWFyZShlKTtcbiAgICB9LFxuXG4gICAgb25tb3VzZW92ZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjYW52YXMucGFpbnRDYW52YXNTcXVhcmUoZSk7XG4gICAgfSxcbiAgICBvbnRvdWNobW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNhbnZhcy5wYWludENhbnZhc1NxdWFyZShlKTtcbiAgICB9LFxuICB9KTtcbiAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHN0YXRlLmdldENhbnZhc0JhY2tncm91bmRDb2xvcigpO1xuICByZXR1cm4gc3F1YXJlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzU3F1YXJlO1xuIiwiaW1wb3J0IENvbnRyb2xJY29uUGF0aCBmcm9tIFwiLi9pY29ucy9jb250cm9scy5wbmdcIjtcblxuY29uc3QgQ29udHJvbEljb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWljb24tY29udGFpbmVyXCIsXG4gIH0pO1xuICBjb25zdCBpY29uID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLCB7XG4gICAgaWQ6IFwiY29udHJvbC1pY29uXCIsXG4gICAgc3JjOiBDb250cm9sSWNvblBhdGgsXG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sSWNvbjtcbiIsIi8vQ29tcG9uZW50IGltcG9ydHNcbmltcG9ydCBFeGl0RGl2IGZyb20gXCIuL2NvbnRyb2xzL0V4aXREaXYvRXhpdERpdlwiO1xuXG5pbXBvcnQgUGFpbnRDb2xvclBpY2tlciBmcm9tIFwiLi9jb250cm9scy9jb2xvci1waWNrZXJzL1BhaW50Q29sb3JQaWNrZXJcIjtcbmltcG9ydCBDYW52YXNDb2xvclBpY2tlciBmcm9tIFwiLi9jb250cm9scy9jb2xvci1waWNrZXJzL0NhbnZhc0NvbG9yUGlja2VyXCI7XG5cbmltcG9ydCBFcmFzZUJydXNoQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xzL2J1dHRvbnMvRXJhc2VCcnVzaEJ1dHRvblwiO1xuaW1wb3J0IEVyYXNlQ2FudmFzQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xzL2J1dHRvbnMvRXJhc2VDYW52YXNCdXR0b25cIjtcbmltcG9ydCBUb2dnbGVHcmlkbGluZXNCdXR0b24gZnJvbSBcIi4vY29udHJvbHMvYnV0dG9ucy9Ub2dnbGVHcmlkbGluZXNCdXR0b25cIjtcbmltcG9ydCBSYWluYm93TW9kZUJ1dHRvbiBmcm9tIFwiLi9jb250cm9scy9idXR0b25zL1JhaW5ib3dNb2RlQnV0dG9uXCI7XG5pbXBvcnQgU2hhZGVNb2RlQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xzL2J1dHRvbnMvU2hhZGVNb2RlQnV0dG9uXCI7XG5cbmltcG9ydCBHcmlkU2l6ZVNlbGVjdG9yIGZyb20gXCIuL2NvbnRyb2xzL0dyaWRTaXplU2VsZWN0b3JcIjtcblxuY29uc3QgQ29udHJvbFBhbmVsID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogXCJjb250cm9sLXBhbmVsLWNvbnRhaW5lclwiLFxuICAgIFwiZGF0YS1pc1Zpc2libGVcIjogdHJ1ZSxcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKEV4aXREaXYoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChQYWludENvbG9yUGlja2VyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoQ2FudmFzQ29sb3JQaWNrZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChFcmFzZUJydXNoQnV0dG9uKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoRXJhc2VDYW52YXNCdXR0b24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChUb2dnbGVHcmlkbGluZXNCdXR0b24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChSYWluYm93TW9kZUJ1dHRvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFNoYWRlTW9kZUJ1dHRvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKEdyaWRTaXplU2VsZWN0b3IoKSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xQYW5lbDtcbiIsImltcG9ydCBIaWRlSWNvbiBmcm9tIFwiLi9pY29ucy9leWUtaGlkZS5wbmdcIjtcblxuY29uc3QgRXhpdERpdiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lclwiLFxuICB9KTtcblxuICBjb25zdCBpY29uID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLCB7XG4gICAgaWQ6IFwiaGlkZS1jb250cm9sLXBhbmVsLWljb25cIixcbiAgICBzcmM6IEhpZGVJY29uLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV4aXREaXY7XG4iLCJpbXBvcnQgUmFuZ2UgZnJvbSBcIi4uLy4uL2Jhc2ljLWVsZW1lbnRzL1JhbmdlXCI7XG5pbXBvcnQgY29uZmlnIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9hcHBDb25maWdcIjtcblxuaW1wb3J0IHN0YXRlIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9TdGF0ZU1hbmFnZXJcIjtcbmltcG9ydCBjb250cm9sTWFuYWdlciBmcm9tIFwiLi4vLi4vLi4vbG9naWMvQ29udHJvbE1hbmFnZXJcIjtcblxuY29uc3QgR3JpZFNpemVTZWxlY3RvciA9ICgpID0+IHtcbiAgbGV0IGN1cnJlbnRHcmlkU2l6ZSA9IHN0YXRlLmdldEdyaWRTaXplKCk7XG5cbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihcbiAgICBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtZ3JvdXBcIiB9KVxuICApO1xuXG4gIGNvbnN0IHJhbmdlID0gT2JqZWN0LmFzc2lnbihSYW5nZSgpLCB7XG4gICAgaWQ6IFwiZ3JpZC1zaXplLXNlbGVjdG9yXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgICBtaW46IGNvbmZpZy5ncmlkTWluLFxuICAgIG1heDogY29uZmlnLmdyaWRNYXgsXG4gICAgdmFsdWU6IHN0YXRlLmdldEdyaWRTaXplKCksXG4gICAgb25pbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnRyb2xNYW5hZ2VyLnNldEdyaWRTaXplKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBsYWJlbCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlkOiBcImdyaWQtc2l6ZS1zZWxlY3Rvci1sYWJlbFwiLFxuICAgIGlubmVyVGV4dDogYEdyaWQgc2l6ZTogJHtjdXJyZW50R3JpZFNpemV9IHggJHtjdXJyZW50R3JpZFNpemV9YCxcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1sYWJlbFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmFuZ2UpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmlkU2l6ZVNlbGVjdG9yO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQnV0dG9uXCI7XG5pbXBvcnQgY29udHJvbHMgZnJvbSBcIi4uLy4uLy4uLy4uL2xvZ2ljL0NvbnRyb2xNYW5hZ2VyXCI7XG5cbmNvbnN0IEVyYXNlQnJ1c2hCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG5cbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcImVyYXNlLWJydXNoLWJ1dHRvblwiLFxuICAgIGlubmVyVGV4dDogXCJFcmFzZVwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgY29udHJvbHMuc2V0UGFpbnRDb2xvclRvRXJhc2UoKTtcbiAgICB9LFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJhc2VCcnVzaEJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuaW1wb3J0IGNvbnRyb2xzIGZyb20gXCIuLi8uLi8uLi8uLi9sb2dpYy9DYW52YXNNYW5hZ2VyXCI7XG5cbmNvbnN0IEVyYXNlQ2FudmFzQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICBjb25zdCBidXR0b24gPSBPYmplY3QuYXNzaWduKEJ1dHRvbigpLCB7XG4gICAgaWQ6IFwiZXJhc2UtZ3JpZC1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiRXJhc2UgZ3JpZFwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgY29udHJvbHMucmVzZXRDYW52YXMoKTtcbiAgICB9LFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJhc2VDYW52YXNCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9iYXNpYy1lbGVtZW50cy9CdXR0b25cIjtcblxuY29uc3QgUmFpbmJvd01vZGVCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJyYWluYm93LW1vZGUtYnV0dG9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIlJhaW5ib3cgbW9kZVwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0IG1vZGUtYnV0dG9uXCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWluYm93TW9kZUJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBTaGFkZU1vZGVCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJzaGFkZS1tb2RlLWJ1dHRvblwiLFxuICAgIGlubmVyVGV4dDogXCJTaGFkZSBtb2RlXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQgbW9kZS1idXR0b25cIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoYWRlTW9kZUJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuaW1wb3J0IGNvbnRyb2xzIGZyb20gXCIuLi8uLi8uLi8uLi9sb2dpYy9Db250cm9sTWFuYWdlclwiO1xuXG5jb25zdCBUb2dnbGVHcmlkbGluZXNCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJ0b2dnbGUtZ3JpZGxpbmVzLWJ1dHRvblwiLFxuICAgIGlubmVyVGV4dDogXCJUb2dnbGUgZ3JpZGxpbmVzXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgICBvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb250cm9scy50b2dnbGVHcmlkbGluZXMoKTtcbiAgICB9LFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlR3JpZGxpbmVzQnV0dG9uO1xuIiwiaW1wb3J0IENvbG9yUGlja2VyIGZyb20gXCIuLi8uLi8uLi9iYXNpYy1lbGVtZW50cy9Db2xvclBpY2tlclwiO1xuaW1wb3J0IHN0YXRlIGZyb20gXCIuLi8uLi8uLi8uLi9sb2dpYy9TdGF0ZU1hbmFnZXJcIjtcbmltcG9ydCBjb250cm9scyBmcm9tIFwiLi4vLi4vLi4vLi4vbG9naWMvQ29udHJvbE1hbmFnZXJcIjtcblxuY29uc3QgQ2FudmFzQ29sb3JQaWNrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0LWdyb3VwXCIsXG4gIH0pO1xuICBjb25zdCBjb2xvclBpY2tlciA9IE9iamVjdC5hc3NpZ24oQ29sb3JQaWNrZXIoKSwge1xuICAgIGlkOiBcImNhbnZhcy1jb2xvci1waWNrZXJcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICAgIHZhbHVlOiBzdGF0ZS5nZXRDYW52YXNCYWNrZ3JvdW5kQ29sb3IoKSxcbiAgICBvbmlucHV0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgY29udHJvbHMuc2V0Q2FudmFzQ29sb3IoZSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgbGFiZWwgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpbm5lclRleHQ6IFwiU2VsZWN0IGNhbnZhcyBjb2xvclwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0LWxhYmVsXCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvclBpY2tlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhc0NvbG9yUGlja2VyO1xuIiwiaW1wb3J0IENvbG9yUGlja2VyIGZyb20gXCIuLi8uLi8uLi9iYXNpYy1lbGVtZW50cy9Db2xvclBpY2tlclwiO1xuaW1wb3J0IGNvbnRyb2xzIGZyb20gXCIuLi8uLi8uLi8uLi9sb2dpYy9Db250cm9sTWFuYWdlclwiO1xuXG5jb25zdCBQYWludENvbG9yUGlja2VyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1ncm91cFwiLFxuICB9KTtcblxuICBjb25zdCBjb2xvclBpY2tlciA9IE9iamVjdC5hc3NpZ24oQ29sb3JQaWNrZXIoKSwge1xuICAgIGlkOiBcInBhaW50LWNvbG9yLXBpY2tlclwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gICAgb25pbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnRyb2xzLnNldFBhaW50Q29sb3IoZSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgbGFiZWwgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpbm5lclRleHQ6IFwiU2VsZWN0IHBhaW50IGNvbG9yXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtbGFiZWxcIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG9yUGlja2VyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFpbnRDb2xvclBpY2tlcjtcbiIsImltcG9ydCBHaXRIdWJJY29uIGZyb20gXCIuL2xvZ29zL2dpdGh1Yi1tYXJrLXdoaXRlLnBuZ1wiO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGZvb3RlciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKSwge30pO1xuXG4gIGNvbnN0IGNvcHlyaWdodENvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJjb3B5cmlnaHQtY29udGFpbmVyXCIsXG4gICAgaW5uZXJUZXh0OiBgwqkgQ2FybGluIE1pdGNoZWxsICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfWAsXG4gIH0pO1xuXG4gIGNvbnN0IHRvcENvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJ0b3AtYXR0cmlidXRpb25cIixcbiAgICBpbm5lclRleHQ6IFwiSW5zcGlyZWQgYnlcIixcbiAgfSk7XG5cbiAgY29uc3QgdG9wTGluayA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksIHtcbiAgICBjbGFzc05hbWU6IFwidG9wLWxpbmtcIixcbiAgICBpbm5lclRleHQ6IFwiVGhlIE9kaW4gUHJvamVjdFwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiLFxuICB9KTtcblxuICBjb25zdCBnaXRodWJMaW5rID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxpbi1taXRjaGVsbC9ldGNoLWEtc2tldGNoLXdlYnBhY2stVE9QXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksIHtcbiAgICBzcmM6IEdpdEh1Ykljb24sXG4gICAgY2xhc3NOYW1lOiBcImdpdGh1Yi1pY29uXCIsXG4gIH0pO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHRDb250YWluZXIpO1xuICBjb3B5cmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcik7XG4gIHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BMaW5rKTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwge30pKTtcblxuICBjb25zdCB0aXRsZSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlubmVyVGV4dDogXCJQaXhlbCBBcnRpc3RcIixcbiAgfSk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsXCI7XG5pbXBvcnQgQ2FudmFzQ29udGFpbmVyIGZyb20gXCIuL0NhbnZhc1NlY3Rpb24vQ2FudmFzQ29udGFpbmVyXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLCB7fSk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5pZCA9IFwidGVzdFwiO1xuICBtYWluLmFwcGVuZENoaWxkKENvbnRyb2xQYW5lbCgpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChDYW52YXNDb250YWluZXIoKSk7XG5cbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiY29uc3QgQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikpO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiY29uc3QgQ29sb3JQaWNrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbG9yUGlja2VyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksIHtcbiAgICB0eXBlOiBcImNvbG9yXCIsXG4gIH0pO1xuICByZXR1cm4gY29sb3JQaWNrZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclBpY2tlcjtcbiIsImNvbnN0IFJhbmdlID0gKCkgPT4ge1xuICBjb25zdCByYW5nZSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLCB7XG4gICAgdHlwZTogXCJyYW5nZVwiLFxuICB9KTtcblxuICByZXR1cm4gcmFuZ2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYW5nZTtcbiIsImNvbnN0IEFuaW1hdGlvbk1hbmFnZXIgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBhcHBseUFuaW1hdGlvbnMoKSB7XG4gICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdpdGh1Yi1pY29uXCIpLCB7XG4gICAgICBvbm1vdXNlb3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJnaXRodWItaG92ZXItb3V0XCIpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJnaXRodWItaG92ZXItaW5cIik7XG4gICAgICB9LFxuICAgICAgb25tb3VzZW91dDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJnaXRodWItaG92ZXItaW5cIik7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImdpdGh1Yi1ob3Zlci1vdXRcIik7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gY29udHJvbC1wYW5lbFxuICAgIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJvbC1wYW5lbC1jb250YWluZXJcIik7XG4gICAgY29uc3Qgc2xpZGVJbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJvbC1wYW5lbC1jb250YWluZXJcIik7XG4gICAgICBjb250cm9sUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLW91dFwiKTtcbiAgICAgIGNvbnRyb2xQYW5lbC5jbGFzc0xpc3QuYWRkKFwic2xpZGUtaW5cIik7XG4gICAgICBjb250cm9sUGFuZWxbXCJkYXRhLWlzVmlzaWJsZVwiXSA9IHRydWU7XG4gICAgfTtcbiAgICBjb25zdCBzbGlkZU91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJvbC1wYW5lbC1jb250YWluZXJcIik7XG4gICAgICBjb250cm9sUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluXCIpO1xuICAgICAgY29udHJvbFBhbmVsLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1vdXRcIik7XG4gICAgICBjb250cm9sUGFuZWxbXCJkYXRhLWlzVmlzaWJsZVwiXSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJvbC1pY29uXCIpLCB7XG4gICAgICBvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNsaWRlSW4oKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hpZGUtY29udHJvbC1wYW5lbC1pY29uXCIpLCB7XG4gICAgICBvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNsaWRlT3V0KCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IHsgaW5uZXJXaWR0aCB9ID0gZS50YXJnZXQ7XG4gICAgICBpZiAoaW5uZXJXaWR0aCA8PSAxMTUwKSB7XG4gICAgICAgIHNsaWRlT3V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWNvbnRyb2xQYW5lbFtcImRhdGEtaXNWaXNpYmxlXCJdKSB7XG4gICAgICAgICAgc2xpZGVJbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICByZXR1cm4geyBhcHBseUFuaW1hdGlvbnMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbk1hbmFnZXI7XG4iLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vU3RhdGVNYW5hZ2VyXCI7XG5pbXBvcnQgeyBoZXhUb1JnYlN0ciwgc2V0RWxlbWVudHNCZ0NvbG9yIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBDYW52YXNTcXVhcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FudmFzU2VjdGlvbi9DYW52YXNTcXVhcmVcIjtcblxuY29uc3QgQ2FudmFzTWFuYWdlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNsZWFyR3JpZCgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhc1wiKTtcbiAgICB3aGlsZSAoY2FudmFzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNhbnZhcy5yZW1vdmVDaGlsZChjYW52YXMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGFpbnRDYW52YXNTcXVhcmUoZSkge1xuICAgIGlmIChcbiAgICAgIGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIiB8fFxuICAgICAgZS50eXBlID09PSBcInRvdWNoc3RhcnRcIiB8fFxuICAgICAgc3RhdGUuZ2V0TGVmdE1vdXNlQnV0dG9uRG93bigpXG4gICAgKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBlLnRhcmdldDtcbiAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzdGF0ZS5nZXRQYWludENvbG9yKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDYW52YXMoKSB7XG4gICAgY29uc3QgY2FudmFzU3F1YXJlcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhbnZhcy1zcXVhcmVcIildO1xuXG4gICAgc2V0RWxlbWVudHNCZ0NvbG9yKFxuICAgICAgY2FudmFzU3F1YXJlcyxcbiAgICAgIGhleFRvUmdiU3RyKHN0YXRlLmdldENhbnZhc0JhY2tncm91bmRDb2xvcigpKVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVHcmlkbGluZXMoKSB7XG4gICAgY29uc3QgY2FudmFzU3F1YXJlcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhbnZhcy1zcXVhcmVcIildO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzXCIpO1xuICAgIGNhbnZhcy5jbGFzc0xpc3QudG9nZ2xlKFwiZnVsbC1ib3JkZXJzXCIpO1xuICAgIGNhbnZhc1NxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiBzcXVhcmUuY2xhc3NMaXN0LnRvZ2dsZShcIm5vLWJvcmRlcnNcIikpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlR3JpZFNpemUoKSB7XG4gICAgY29uc3QgZ3JpZFNpemUgPSBzdGF0ZS5nZXRHcmlkU2l6ZSgpO1xuICAgIGNvbnN0IHRvdGFsU3F1YXJlcyA9IGdyaWRTaXplICoqIDI7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXNcIik7XG5cbiAgICBjbGVhckdyaWQoKTtcblxuICAgIGNhbnZhcy5zdHlsZVtcImdyaWQtdGVtcGxhdGUtcm93c1wiXSA9IGByZXBlYXQoJHtncmlkU2l6ZX0sIDFmcilgO1xuICAgIGNhbnZhcy5zdHlsZVtcImdyaWQtdGVtcGxhdGUtY29sdW1uc1wiXSA9IGByZXBlYXQoJHtncmlkU2l6ZX0sIDFmcilgO1xuXG4gICAgZm9yIChsZXQgaWROdW0gPSAxOyBpZE51bSA8PSB0b3RhbFNxdWFyZXM7IGlkTnVtKyspIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IENhbnZhc1NxdWFyZShpZE51bSk7XG4gICAgICBjYW52YXMuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyB1cGRhdGVHcmlkU2l6ZSwgcGFpbnRDYW52YXNTcXVhcmUsIHJlc2V0Q2FudmFzLCB0b2dnbGVHcmlkbGluZXMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhc01hbmFnZXI7XG4iLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4uL2xvZ2ljL1N0YXRlTWFuYWdlclwiO1xuaW1wb3J0IGNhbnZhcyBmcm9tIFwiLi4vbG9naWMvQ2FudmFzTWFuYWdlclwiO1xuXG5jb25zdCBDb250cm9sTWFuYWdlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIHNldEdyaWRTaXplKHZhbHVlKSB7XG4gICAgY29uc3QgZ3JpZFNpemVTZWxlY3RvckxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI2dyaWQtc2l6ZS1zZWxlY3Rvci1sYWJlbFwiXG4gICAgKTtcbiAgICBzdGF0ZS5zZXRHcmlkU2l6ZSh2YWx1ZSk7XG4gICAgZ3JpZFNpemVTZWxlY3RvckxhYmVsLmlubmVyVGV4dCA9IGBHcmlkIHNpemU6ICR7c3RhdGUuZ2V0R3JpZFNpemUoKX0geCAke3N0YXRlLmdldEdyaWRTaXplKCl9YDtcbiAgICBjYW52YXMudXBkYXRlR3JpZFNpemUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFBhaW50Q29sb3IoZSkge1xuICAgIGNvbnN0IGNvbG9yID0gZS50YXJnZXQudmFsdWU7XG4gICAgc3RhdGUuc2V0UGFpbnRDb2xvcihjb2xvcik7XG4gIH1cblxuICBmdW5jdGlvbiBlcmFzZUdyaWQoKSB7XG4gICAgY2FudmFzLnJlc2V0Q2FudmFzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRQYWludENvbG9yVG9FcmFzZSgpIHtcbiAgICBzdGF0ZS5zZXRQYWludENvbG9yKHN0YXRlLmdldENhbnZhc0JhY2tncm91bmRDb2xvcigpKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BhaW50LWNvbG9yLXBpY2tlclwiKS52YWx1ZSA9IHN0YXRlLmdldFBhaW50Q29sb3IoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENhbnZhc0NvbG9yKGUpIHtcbiAgICBjb25zdCBjb2xvciA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHN0YXRlLnNldENhbnZhc0JhY2tncm91bmRDb2xvcihjb2xvcik7XG4gICAgY2FudmFzLnJlc2V0Q2FudmFzKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVHcmlkbGluZXMoKSB7XG4gICAgY2FudmFzLnRvZ2dsZUdyaWRsaW5lcygpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzZXRHcmlkU2l6ZSxcbiAgICBzZXRQYWludENvbG9yLFxuICAgIGVyYXNlR3JpZCxcbiAgICBzZXRDYW52YXNDb2xvcixcbiAgICBzZXRQYWludENvbG9yVG9FcmFzZSxcbiAgICB0b2dnbGVHcmlkbGluZXMsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sTWFuYWdlcjtcbiIsImltcG9ydCBjb25maWcgZnJvbSBcIi4vYXBwQ29uZmlnXCI7XG5cbmNvbnN0IFN0YXRlTWFuYWdlciA9ICgoKSA9PiB7XG4gIGxldCBncmlkU2l6ZSA9IGNvbmZpZy5zdGFydGluZ0dyaWRTaXplO1xuICBjb25zdCBnZXRHcmlkU2l6ZSA9ICgpID0+IGdyaWRTaXplO1xuICBjb25zdCBzZXRHcmlkU2l6ZSA9ICh2YWx1ZSkgPT4gKGdyaWRTaXplID0gdmFsdWUpO1xuXG4gIGxldCBjYW52YXNCYWNrZ3JvdW5kQ29sb3IgPSBcIiNmMmYyZjJcIjtcbiAgY29uc3QgZ2V0Q2FudmFzQmFja2dyb3VuZENvbG9yID0gKCkgPT4gY2FudmFzQmFja2dyb3VuZENvbG9yO1xuICBjb25zdCBzZXRDYW52YXNCYWNrZ3JvdW5kQ29sb3IgPSAoY29sb3IpID0+IChjYW52YXNCYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcik7XG5cbiAgbGV0IHBhaW50Q29sb3IgPSBcIiMwMDBcIjtcbiAgY29uc3QgZ2V0UGFpbnRDb2xvciA9ICgpID0+IHBhaW50Q29sb3I7XG4gIGNvbnN0IHNldFBhaW50Q29sb3IgPSAoY29sb3IpID0+IChwYWludENvbG9yID0gY29sb3IpO1xuXG4gIGxldCBsZWZ0TW91c2VCdXR0b25Eb3duID0gZmFsc2U7XG4gIGNvbnN0IGdldExlZnRNb3VzZUJ1dHRvbkRvd24gPSAoKSA9PiBsZWZ0TW91c2VCdXR0b25Eb3duO1xuICBjb25zdCBzZXRMZWZ0TW91c2VCdXR0b25Eb3duID0gKHZhbHVlKSA9PiAobGVmdE1vdXNlQnV0dG9uRG93biA9IHZhbHVlKTtcblxuICByZXR1cm4ge1xuICAgIGdldExlZnRNb3VzZUJ1dHRvbkRvd24sXG4gICAgc2V0TGVmdE1vdXNlQnV0dG9uRG93bixcblxuICAgIGdldEdyaWRTaXplLFxuICAgIHNldEdyaWRTaXplLFxuXG4gICAgZ2V0Q2FudmFzQmFja2dyb3VuZENvbG9yLFxuICAgIHNldENhbnZhc0JhY2tncm91bmRDb2xvcixcblxuICAgIHNldFBhaW50Q29sb3IsXG4gICAgZ2V0UGFpbnRDb2xvcixcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0YXRlTWFuYWdlcjtcbiIsImNvbnN0IGNvbmZpZyA9IHtcbiAgZ3JpZE1pbjogMSxcbiAgZ3JpZE1heDogNjQsXG4gIHN0YXJ0aW5nR3JpZFNpemU6IDE2LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwiLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIEVYUE9SVEVEIFVUSUxTICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiU3RyKGhleCkge1xuICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCkge1xuICAgIGhleCA9IHNob3J0SGV4VG9GdWxsSGV4KGhleCk7XG4gIH1cblxuICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpO1xuXG4gIHJldHVybiBnZXRSZ2JTdHJGcm9tVmFsdWVzKHIsIGcsIGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmdiU3RyRnJvbVZhbHVlcyhyLCBnLCBiKSB7XG4gIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVJnYlN0cigpIHtcbiAgY29uc3QgW3JhbmRSZWQsIHJhbmRHcmVlbiwgcmFuZEJsdWVdID0gQXJyYXkoMylcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoZWxlbSkgPT4gZ2V0UmFuZEludCgwLCAyNTYpKTtcbiAgcmV0dXJuIGdldFJnYlN0ckZyb21WYWx1ZXMocmFuZFJlZCwgcmFuZEdyZWVuLCByYW5kQmx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tUmdiU3RyKHJnYlN0cikge1xuICBjb25zdCBbciwgZywgYl0gPSByZ2JTdHIubWF0Y2goL1xcZHsxLDN9L2cpO1xuICByZXR1cm4geyByOiArciwgZzogK2csIGI6ICtiIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JTdHJUb0Z1bGxIZXgocmdiU3RyKSB7XG4gIGNvbnN0IHsgciwgZywgYiB9ID0gZ2V0VmFsdWVzRnJvbVJnYlN0cihyZ2JTdHIpO1xuICBjb25zdCBbaGV4UiwgaGV4RywgaGV4Ql0gPSBbciwgZywgYl0ubWFwKCh2YWwpID0+IHZhbHVlVG9QYWRkZWRIZXgodmFsKSk7XG4gIHJldHVybiBgIyR7aGV4Un0ke2hleEd9JHtoZXhCfWA7XG59XG5cbi8qKlxuICpUYWtlcyBhIHNpbmdsZSBkb20gZWxlbWVudCBvciBhcnJheSBvZiBlbGVtZW50c1xuICphbmQgYXBwbGllcyB0aGUgc3BlY2lmaWVkIGJhY2tncm91bmQgY29sb3IgdG8gdGhlbVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50c0FyciBhIHNpbmdsZSBlbGVtZW50IG9yIGFycmF5IG9mIGVsZW1lbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gcmdiQ29sb3JTdHIgYW4gcmdiIHN0cmluZyBmb3JtYXR0ZWQgYXM6ICdyZ2IoOTksIDI1NSwgMSknXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEVsZW1lbnRzQmdDb2xvcihlbGVtZW50c0FyciwgcmdiQ29sb3JTdHIpIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50c0FyciAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHNBcnIpKSB7XG4gICAgLy8gaWYgYSBzaW5nbGUgZWxlbWVudCBpcyBnaXZlbiwgcHV0IGl0IGluIGFuIGFycmF5XG4gICAgZWxlbWVudHNBcnIgPSBbZWxlbWVudHNBcnJdO1xuICB9XG4gIGVsZW1lbnRzQXJyLmZvckVhY2goXG4gICAgKGVsZW1lbnQpID0+IChlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJnYkNvbG9yU3RyKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhZGVSZ2JTdHJCeUZhY3RvcihyZ2JTdHIsIGZhY3Rvcikge1xuICBjb25zdCB7IHIsIGcsIGIgfSA9IGdldFZhbHVlc0Zyb21SZ2JTdHIocmdiU3RyKTtcbiAgY29uc3QgW25ld1IsIG5ld0csIG5ld0JdID0gW3IsIGcsIGJdLm1hcCgodmFsKSA9PiBhcHBseUZhY3Rvcih2YWwpKTtcblxuICBmdW5jdGlvbiBhcHBseUZhY3Rvcih2YWx1ZSkge1xuICAgIGxldCBuZXdWYWwgPSB2YWx1ZSArIGZhY3RvcjtcbiAgICBuZXdWYWwgPSBuZXdWYWwgPCAwID8gMCA6IG5ld1ZhbDtcbiAgICBuZXdWYWwgPSBuZXdWYWwgPiAyNTUgPyAyNTUgOiBuZXdWYWw7XG5cbiAgICByZXR1cm4gbmV3VmFsO1xuICB9XG5cbiAgY29uc3QgbmV3UmdiU3RyID0gYHJnYigke25ld1J9LCAke25ld0d9LCAke25ld0J9KWA7XG5cbiAgcmV0dXJuIG5ld1JnYlN0cjtcbn1cblxuZXhwb3J0IGNvbnN0IGFwcGVuZExvcmVtTGluZXMgPSAocGFyZW50LCBudW1MaW5lcykgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUxpbmVzOyBpKyspIHtcbiAgICBjb25zdCBsb3JlbSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgICAgaW5uZXJUZXh0OlxuICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVhcXVlIHJlcnVtIHF1YXNpIG5lbW8sIG9mZmljaWlzIGFzc3VtZW5kYSBkb2xvcmVtcXVlIGl1cmUgbW9sZXN0aWFlISBGYWNlcmUgYXRxdWUgb2RpbyBpcHNhIGxhdWRhbnRpdW0gbmloaWwgYWxpYXMsIHNpdCBsaWJlcm8uIFRlbmV0dXIgdmVsaXQgdm9sdXB0YXRpYnVzIHF1YW0hXCIsXG4gICAgfSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxvcmVtKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVFbGVtZW50cyA9IChlbGVtZW50c0FycikgPT4ge1xuICBpZiAodHlwZW9mIGVsZW1lbnRzQXJyICE9PSBcIm9iamVjdFwiKSByZXR1cm47XG4gIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50c0FycikpIHtcbiAgICAvLyBpZiBhIHNpbmdsZSBlbGVtZW50IGlzIGdpdmVuLCBwdXQgaXQgaW4gYW4gYXJyYXlcbiAgICBlbGVtZW50c0FyciA9IFtlbGVtZW50c0Fycl07XG4gIH1cbiAgZWxlbWVudHNBcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmFibGVFbGVtZW50cyA9IChlbGVtZW50c0FycikgPT4ge1xuICBpZiAodHlwZW9mIGVsZW1lbnRzQXJyICE9PSBcIm9iamVjdFwiKSByZXR1cm47XG4gIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50c0FycikpIHtcbiAgICAvLyBpZiBhIHNpbmdsZSBlbGVtZW50IGlzIGdpdmVuLCBwdXQgaXQgaW4gYW4gYXJyYXlcbiAgICBlbGVtZW50c0FyciA9IFtlbGVtZW50c0Fycl07XG4gIH1cbiAgZWxlbWVudHNBcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgfSk7XG59O1xuXG4vLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIE5PTiBFWFBPUlRFRCBVVElMUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vKipcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbWluXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4XG4gKiBAcmV0dXJucyBOdW1iZXJcbiAqXG4gKiByZXR1cm5zIGFuIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKVxuICovXG5mdW5jdGlvbiBnZXRSYW5kSW50KG1pbiwgbWF4KSB7XG4gIG1pbiA9IE1hdGguY2VpbChtaW4pO1xuICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7XG59XG5cbmZ1bmN0aW9uIHNob3J0SGV4VG9GdWxsSGV4KHNob3J0SGV4KSB7XG4gIGNvbnN0IGNodW5rMSA9IHNob3J0SGV4LnNsaWNlKDEsIDIpLnJlcGVhdCgyKTtcbiAgY29uc3QgY2h1bmsyID0gc2hvcnRIZXguc2xpY2UoMiwgMykucmVwZWF0KDIpO1xuICBjb25zdCBjaHVuazMgPSBzaG9ydEhleC5zbGljZSgzLCA0KS5yZXBlYXQoMik7XG5cbiAgcmV0dXJuIFwiI1wiICsgY2h1bmsxICsgY2h1bmsyICsgY2h1bmszO1xufVxuXG5mdW5jdGlvbiB2YWx1ZVRvUGFkZGVkSGV4KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvLyBzdHlsZXNoZWV0c1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuLy8gY29tcG9uZW50c1xuaW1wb3J0IENvbnRlbnQgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcblxuLy8gbG9naWMgbWFuYWdlcnNcbmltcG9ydCBBbmltYXRpb25NYW5hZ2VyIGZyb20gXCIuL2xvZ2ljL0FuaW1hdGlvbk1hbmFnZXJcIjtcbmltcG9ydCBDYW52YXNNYW5hZ2VyIGZyb20gXCIuL2xvZ2ljL0NhbnZhc01hbmFnZXJcIjtcbmltcG9ydCBDb250cm9sTWFuYWdlciBmcm9tIFwiLi9sb2dpYy9Db250cm9sTWFuYWdlclwiO1xuaW1wb3J0IHN0YXRlIGZyb20gXCIuL2xvZ2ljL1N0YXRlTWFuYWdlclwiO1xuXG5pbXBvcnQgeyBkaXNhYmxlRWxlbWVudHMgfSBmcm9tIFwiLi9sb2dpYy91dGlsaXRpZXNcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDb250ZW50KCkpO1xuXG5BbmltYXRpb25NYW5hZ2VyLmFwcGx5QW5pbWF0aW9ucygpO1xuQ2FudmFzTWFuYWdlci51cGRhdGVHcmlkU2l6ZSgpO1xuQ29udHJvbE1hbmFnZXIuc2V0R3JpZFNpemUoc3RhdGUuZ2V0R3JpZFNpemUoKSk7XG5cbndpbmRvdy5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgc3RhdGUuc2V0TGVmdE1vdXNlQnV0dG9uRG93bih0cnVlKTtcbn07XG5cbndpbmRvdy5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gIHN0YXRlLnNldExlZnRNb3VzZUJ1dHRvbkRvd24odHJ1ZSk7XG59O1xuXG53aW5kb3cub25tb3VzZXVwID0gZnVuY3Rpb24gKCkge1xuICBzdGF0ZS5zZXRMZWZ0TW91c2VCdXR0b25Eb3duKGZhbHNlKTtcbn07XG53aW5kb3cub250b3VjaGVuZCA9IGZ1bmN0aW9uICgpIHtcbiAgc3RhdGUuc2V0TGVmdE1vdXNlQnV0dG9uRG93bihmYWxzZSk7XG59O1xuXG4vLyBkaXNhYmxlIG1vZGUgYnV0dG9ucyBmb3Igbm93XG5bLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RlLWJ1dHRvblwiKV0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBjb25zdCBjdXJyZW50VGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0O1xuICBlbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRUZXh0ICsgXCIgKGNvbWluZyBzb29uKVwiO1xuICBlbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9