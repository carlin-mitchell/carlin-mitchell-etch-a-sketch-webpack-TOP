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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* colors */\n  --gray-5: hsla(0, 0%, 35%, 1);\n  --gray-4: hsla(0, 0%, 50%, 1);\n  --gray-3: hsla(0, 0%, 65%, 1);\n  --gray-2: hsla(0, 0%, 80%, 1);\n  --gray-1: hsla(0, 0%, 95%, 1);\n  --links: #ff3300;\n\n  /* canvas */\n  --canvas-borders: 1px solid black;\n  /* fonts */\n  --footer-font-size: 1.1rem;\n  --header-font-size: 2.5rem;\n\n  /* border radius */\n  --br-sm: 5px;\n  --br-md: 10px;\n  --br-lg: 15px;\n\n  /* spacing */\n  --space-sm: 5px;\n  --space-md: 15px;\n  --space-lg: 25px;\n\n  /* utility */\n  --marginSpace: 0.3rem;\n}\n\n@font-face {\n  font-family: \"SpaceTime\";\n  src: url(\"./global-assets/fonts/spacetime-regular.ttf\");\n}\n\n@font-face {\n  font-family: \"MonoRound\";\n  src: url(\"./global-assets/fonts/Monoround.otf\");\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: MonoRound, sans-serif;\n}\n\n#app {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n/* header */\nheader {\n  background-color: var(--gray-3);\n  font-family: SpaceTime, sans-serif;\n  display: grid;\n  text-align: center;\n  padding: 1rem 0 1.3rem 0;\n}\n\nheader div {\n  font-size: var(--header-font-size);\n}\n\n/* main */\nmain {\n  background-color: var(--gray-1);\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: minmax(15rem, 1fr) 5fr;\n}\n\n/* control panel */\n@keyframes slide-in {\n  from {\n    transform: translateX(-100%);\n    visibility: hidden;\n  }\n  to {\n    transform: translateX(0%);\n    visibility: visible;\n  }\n}\n\n.slide-in {\n  animation: slide-in 0.75s forwards;\n}\n\n@keyframes slide-out {\n  from {\n    transform: translateX(0%);\n    visibility: visible;\n  }\n  to {\n    transform: translateX(-100%);\n    visibility: hidden;\n  }\n}\n\n.slide-out {\n  animation: slide-out 0.75s forwards;\n}\n\n#control-panel-container {\n  visibility: visible;\n  background-color: var(--gray-2);\n  padding: var(--space-lg);\n  font-size: 1.2rem;\n\n  display: grid;\n  justify-content: space-evenly;\n  align-content: space-between;\n  grid-row: 1/2;\n  grid-column: 1/2;\n  z-index: 10;\n}\n\n#control-panel-exit-container {\n  cursor: pointer;\n  text-align: center;\n}\n#control-panel-exit-container img:hover {\n  scale: 1.1;\n}\n#control-panel-exit-container img:active {\n  scale: 1;\n}\n\n.control-input {\n  color: black;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: inherit;\n  width: 100%;\n}\n\nbutton.control-input {\n  border-radius: var(--br-sm);\n  padding-top: 0.25rem;\n}\nbutton.control-input:hover {\n  scale: 1.025;\n}\nbutton.control-input:active {\n  scale: 1;\n}\n\n.control-input-group {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n.control-input-group .control-input-label {\n  margin-top: var(--space-sm);\n}\n.control-input-label {\n  display: block;\n  text-align: center;\n}\n\n/* grid */\n#canvas-container {\n  height: 100%;\n  padding: var(--space-lg);\n\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  z-index: 0;\n}\n\n#canvas {\n  background-color: var(--gray-1);\n  border-left: var(--canvas-borders);\n  border-top: var(--canvas-borders);\n  display: grid;\n  height: 70vh;\n  aspect-ratio: 1;\n  justify-self: center;\n  align-self: center;\n}\n\n#control-icon {\n  border: 3px solid black;\n  border-radius: var(--br-md);\n  cursor: pointer;\n  height: 4rem;\n\n  padding: var(--space-sm);\n}\n#control-icon:hover {\n  scale: 1.1;\n}\n#control-icon:active {\n  scale: 1;\n}\n\n.canvas-square {\n  border-right: var(--canvas-borders);\n  border-bottom: var(--canvas-borders);\n  cursor: crosshair;\n}\n\n.no-borders {\n  border: none;\n}\n\n.full-borders {\n  border: var(--canvas-borders);\n}\n\n.canvas-square:hover {\n  scale: 1.01;\n  box-shadow: 0px 0px 0.3rem black;\n}\n.canvas-square:active {\n  scale: 1;\n}\n/* footer */\nfooter {\n  background-color: var(--gray-5);\n  font-size: var(--footer-font-size);\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-items: center;\n  color: white;\n}\nfooter img {\n  height: calc(var(--footer-font-size) - 0.1rem);\n}\nfooter a {\n  margin-left: var(--marginSpace);\n}\n\n@keyframes github-hover-in {\n  from {\n    rotate: 0deg;\n    scale: 1;\n  }\n  to {\n    rotate: 720deg;\n    scale: 1.2;\n  }\n}\n.github-hover-in {\n  animation: github-hover-in 1s forwards;\n}\n\n@keyframes github-hover-out {\n  from {\n    rotate: 720deg;\n    scale: 1.2;\n  }\n  to {\n    rotate: 0deg;\n    scale: 1;\n  }\n}\n.github-hover-out {\n  animation: github-hover-out 1s forwards;\n}\n\nfooter img:active {\n  scale: 1;\n}\n\n.top-link:visited {\n  color: var(--links);\n}\n\n.top-link:visited {\n  color: var(--links);\n}\n\n/* utility classes */\n.removed {\n  display: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n/* media queries */\n@media only screen and (max-width: 1000px) {\n  #canvas {\n    height: 70vw;\n  }\n  #control-panel-container {\n    visibility: hidden;\n  }\n}\n"],"sourceRoot":""}]);
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
    if (e.type === "mousedown" || _StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].getLeftMouseButtonDown()) {
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

window.onmouseup = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUtBQThEO0FBQzFHLDRDQUE0QyxtSkFBc0Q7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUs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V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ3FCOztBQUVyQjtBQUN1Qzs7QUFFdkM7QUFDd0Q7QUFDTjtBQUNFO0FBQ1g7O0FBRVc7O0FBRXBELDBCQUEwQiwyREFBTzs7QUFFakMsK0RBQWdCO0FBQ2hCLDREQUFhO0FBQ2IsNkRBQWMsYUFBYSwyREFBSzs7QUFFaEM7QUFDQSxFQUFFLDJEQUFLO0FBQ1A7O0FBRUE7QUFDQSxFQUFFLDJEQUFLO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9DYW52YXNTZWN0aW9uL0NhbnZhcy5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NhbnZhc1NlY3Rpb24vQ2FudmFzQ29udGFpbmVyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ2FudmFzU2VjdGlvbi9DYW52YXNTcXVhcmUuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9DYW52YXNTZWN0aW9uL0NvbnRyb2xJY29uL0NvbnRyb2xJY29uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL0NvbnRyb2xQYW5lbC5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9FeGl0RGl2L0V4aXREaXYuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvR3JpZFNpemVTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9idXR0b25zL0VyYXNlQnJ1c2hCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvYnV0dG9ucy9FcmFzZUNhbnZhc0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9idXR0b25zL1JhaW5ib3dNb2RlQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2J1dHRvbnMvU2hhZGVNb2RlQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2J1dHRvbnMvVG9nZ2xlR3JpZGxpbmVzQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2NvbG9yLXBpY2tlcnMvQ2FudmFzQ29sb3JQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvY29sb3ItcGlja2Vycy9QYWludENvbG9yUGlja2VyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9iYXNpYy1lbGVtZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9iYXNpYy1lbGVtZW50cy9Db2xvclBpY2tlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL2Jhc2ljLWVsZW1lbnRzL1JhbmdlLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2xvZ2ljL0FuaW1hdGlvbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvbG9naWMvQ2FudmFzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9sb2dpYy9Db250cm9sTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9sb2dpYy9TdGF0ZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvbG9naWMvYXBwQ29uZmlnLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2xvZ2ljL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9nbG9iYWwtYXNzZXRzL2ZvbnRzL3NwYWNldGltZS1yZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZ2xvYmFsLWFzc2V0cy9mb250cy9Nb25vcm91bmQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAvKiBjb2xvcnMgKi9cbiAgLS1ncmF5LTU6IGhzbGEoMCwgMCUsIDM1JSwgMSk7XG4gIC0tZ3JheS00OiBoc2xhKDAsIDAlLCA1MCUsIDEpO1xuICAtLWdyYXktMzogaHNsYSgwLCAwJSwgNjUlLCAxKTtcbiAgLS1ncmF5LTI6IGhzbGEoMCwgMCUsIDgwJSwgMSk7XG4gIC0tZ3JheS0xOiBoc2xhKDAsIDAlLCA5NSUsIDEpO1xuICAtLWxpbmtzOiAjZmYzMzAwO1xuXG4gIC8qIGNhbnZhcyAqL1xuICAtLWNhbnZhcy1ib3JkZXJzOiAxcHggc29saWQgYmxhY2s7XG4gIC8qIGZvbnRzICovXG4gIC0tZm9vdGVyLWZvbnQtc2l6ZTogMS4xcmVtO1xuICAtLWhlYWRlci1mb250LXNpemU6IDIuNXJlbTtcblxuICAvKiBib3JkZXIgcmFkaXVzICovXG4gIC0tYnItc206IDVweDtcbiAgLS1ici1tZDogMTBweDtcbiAgLS1ici1sZzogMTVweDtcblxuICAvKiBzcGFjaW5nICovXG4gIC0tc3BhY2Utc206IDVweDtcbiAgLS1zcGFjZS1tZDogMTVweDtcbiAgLS1zcGFjZS1sZzogMjVweDtcblxuICAvKiB1dGlsaXR5ICovXG4gIC0tbWFyZ2luU3BhY2U6IDAuM3JlbTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlVGltZVwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbm9Sb3VuZFwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBNb25vUm91bmQsIHNhbnMtc2VyaWY7XG59XG5cbiNhcHAge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XG59XG4vKiBoZWFkZXIgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMyk7XG4gIGZvbnQtZmFtaWx5OiBTcGFjZVRpbWUsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbSAwIDEuM3JlbSAwO1xufVxuXG5oZWFkZXIgZGl2IHtcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkZXItZm9udC1zaXplKTtcbn1cblxuLyogbWFpbiAqL1xubWFpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNXJlbSwgMWZyKSA1ZnI7XG59XG5cbi8qIGNvbnRyb2wgcGFuZWwgKi9cbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG59XG5cbi5zbGlkZS1pbiB7XG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMC43NXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuXG4uc2xpZGUtb3V0IHtcbiAgYW5pbWF0aW9uOiBzbGlkZS1vdXQgMC43NXMgZm9yd2FyZHM7XG59XG5cbiNjb250cm9sLXBhbmVsLWNvbnRhaW5lciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMik7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdyaWQtcm93OiAxLzI7XG4gIGdyaWQtY29sdW1uOiAxLzI7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4jY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2NvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXIgaW1nOmhvdmVyIHtcbiAgc2NhbGU6IDEuMTtcbn1cbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIGltZzphY3RpdmUge1xuICBzY2FsZTogMTtcbn1cblxuLmNvbnRyb2wtaW5wdXQge1xuICBjb2xvcjogYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvbi5jb250cm9sLWlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnItc20pO1xuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcbn1cbmJ1dHRvbi5jb250cm9sLWlucHV0OmhvdmVyIHtcbiAgc2NhbGU6IDEuMDI1O1xufVxuYnV0dG9uLmNvbnRyb2wtaW5wdXQ6YWN0aXZlIHtcbiAgc2NhbGU6IDE7XG59XG5cbi5jb250cm9sLWlucHV0LWdyb3VwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNvbnRyb2wtaW5wdXQtZ3JvdXAgLmNvbnRyb2wtaW5wdXQtbGFiZWwge1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1zbSk7XG59XG4uY29udHJvbC1pbnB1dC1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIGdyaWQgKi9cbiNjYW52YXMtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XG4gIGdyaWQtcm93OiAxLzI7XG4gIGdyaWQtY29sdW1uOiAxLy0xO1xuICB6LWluZGV4OiAwO1xufVxuXG4jY2FudmFzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0xKTtcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLWNhbnZhcy1ib3JkZXJzKTtcbiAgYm9yZGVyLXRvcDogdmFyKC0tY2FudmFzLWJvcmRlcnMpO1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDcwdmg7XG4gIGFzcGVjdC1yYXRpbzogMTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuI2NvbnRyb2wtaWNvbiB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ici1tZCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiA0cmVtO1xuXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXNtKTtcbn1cbiNjb250cm9sLWljb246aG92ZXIge1xuICBzY2FsZTogMS4xO1xufVxuI2NvbnRyb2wtaWNvbjphY3RpdmUge1xuICBzY2FsZTogMTtcbn1cblxuLmNhbnZhcy1zcXVhcmUge1xuICBib3JkZXItcmlnaHQ6IHZhcigtLWNhbnZhcy1ib3JkZXJzKTtcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tY2FudmFzLWJvcmRlcnMpO1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLm5vLWJvcmRlcnMge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5mdWxsLWJvcmRlcnMge1xuICBib3JkZXI6IHZhcigtLWNhbnZhcy1ib3JkZXJzKTtcbn1cblxuLmNhbnZhcy1zcXVhcmU6aG92ZXIge1xuICBzY2FsZTogMS4wMTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwLjNyZW0gYmxhY2s7XG59XG4uY2FudmFzLXNxdWFyZTphY3RpdmUge1xuICBzY2FsZTogMTtcbn1cbi8qIGZvb3RlciAqL1xuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS01KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb290ZXItZm9udC1zaXplKTtcbiAgcGFkZGluZzogMnJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuZm9vdGVyIGltZyB7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1mb290ZXItZm9udC1zaXplKSAtIDAuMXJlbSk7XG59XG5mb290ZXIgYSB7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW5TcGFjZSk7XG59XG5cbkBrZXlmcmFtZXMgZ2l0aHViLWhvdmVyLWluIHtcbiAgZnJvbSB7XG4gICAgcm90YXRlOiAwZGVnO1xuICAgIHNjYWxlOiAxO1xuICB9XG4gIHRvIHtcbiAgICByb3RhdGU6IDcyMGRlZztcbiAgICBzY2FsZTogMS4yO1xuICB9XG59XG4uZ2l0aHViLWhvdmVyLWluIHtcbiAgYW5pbWF0aW9uOiBnaXRodWItaG92ZXItaW4gMXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZ2l0aHViLWhvdmVyLW91dCB7XG4gIGZyb20ge1xuICAgIHJvdGF0ZTogNzIwZGVnO1xuICAgIHNjYWxlOiAxLjI7XG4gIH1cbiAgdG8ge1xuICAgIHJvdGF0ZTogMGRlZztcbiAgICBzY2FsZTogMTtcbiAgfVxufVxuLmdpdGh1Yi1ob3Zlci1vdXQge1xuICBhbmltYXRpb246IGdpdGh1Yi1ob3Zlci1vdXQgMXMgZm9yd2FyZHM7XG59XG5cbmZvb3RlciBpbWc6YWN0aXZlIHtcbiAgc2NhbGU6IDE7XG59XG5cbi50b3AtbGluazp2aXNpdGVkIHtcbiAgY29sb3I6IHZhcigtLWxpbmtzKTtcbn1cblxuLnRvcC1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogdmFyKC0tbGlua3MpO1xufVxuXG4vKiB1dGlsaXR5IGNsYXNzZXMgKi9cbi5yZW1vdmVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogbWVkaWEgcXVlcmllcyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgI2NhbnZhcyB7XG4gICAgaGVpZ2h0OiA3MHZ3O1xuICB9XG4gICNjb250cm9sLXBhbmVsLWNvbnRhaW5lciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixnQkFBZ0I7O0VBRWhCLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiwwQkFBMEI7O0VBRTFCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7O0VBRWIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCOztFQUVoQixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUF1RDtBQUN6RDs7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QztBQUN6Qzs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIC8qIGNvbG9ycyAqL1xcbiAgLS1ncmF5LTU6IGhzbGEoMCwgMCUsIDM1JSwgMSk7XFxuICAtLWdyYXktNDogaHNsYSgwLCAwJSwgNTAlLCAxKTtcXG4gIC0tZ3JheS0zOiBoc2xhKDAsIDAlLCA2NSUsIDEpO1xcbiAgLS1ncmF5LTI6IGhzbGEoMCwgMCUsIDgwJSwgMSk7XFxuICAtLWdyYXktMTogaHNsYSgwLCAwJSwgOTUlLCAxKTtcXG4gIC0tbGlua3M6ICNmZjMzMDA7XFxuXFxuICAvKiBjYW52YXMgKi9cXG4gIC0tY2FudmFzLWJvcmRlcnM6IDFweCBzb2xpZCBibGFjaztcXG4gIC8qIGZvbnRzICovXFxuICAtLWZvb3Rlci1mb250LXNpemU6IDEuMXJlbTtcXG4gIC0taGVhZGVyLWZvbnQtc2l6ZTogMi41cmVtO1xcblxcbiAgLyogYm9yZGVyIHJhZGl1cyAqL1xcbiAgLS1ici1zbTogNXB4O1xcbiAgLS1ici1tZDogMTBweDtcXG4gIC0tYnItbGc6IDE1cHg7XFxuXFxuICAvKiBzcGFjaW5nICovXFxuICAtLXNwYWNlLXNtOiA1cHg7XFxuICAtLXNwYWNlLW1kOiAxNXB4O1xcbiAgLS1zcGFjZS1sZzogMjVweDtcXG5cXG4gIC8qIHV0aWxpdHkgKi9cXG4gIC0tbWFyZ2luU3BhY2U6IDAuM3JlbTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwYWNlVGltZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9nbG9iYWwtYXNzZXRzL2ZvbnRzL3NwYWNldGltZS1yZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub1JvdW5kXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2dsb2JhbC1hc3NldHMvZm9udHMvTW9ub3JvdW5kLm90ZlxcXCIpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBNb25vUm91bmQsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNhcHAge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcbi8qIGhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMpO1xcbiAgZm9udC1mYW1pbHk6IFNwYWNlVGltZSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDAgMS4zcmVtIDA7XFxufVxcblxcbmhlYWRlciBkaXYge1xcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkZXItZm9udC1zaXplKTtcXG59XFxuXFxuLyogbWFpbiAqL1xcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0xKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1cmVtLCAxZnIpIDVmcjtcXG59XFxuXFxuLyogY29udHJvbCBwYW5lbCAqL1xcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlLWluIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMC43NXMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVxcblxcbi5zbGlkZS1vdXQge1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1vdXQgMC43NXMgZm9yd2FyZHM7XFxufVxcblxcbiNjb250cm9sLXBhbmVsLWNvbnRhaW5lciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0yKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2NvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXIgaW1nOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIGltZzphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi5jb250cm9sLWlucHV0IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbi5jb250cm9sLWlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyLXNtKTtcXG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcbn1cXG5idXR0b24uY29udHJvbC1pbnB1dDpob3ZlciB7XFxuICBzY2FsZTogMS4wMjU7XFxufVxcbmJ1dHRvbi5jb250cm9sLWlucHV0OmFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuLmNvbnRyb2wtaW5wdXQtZ3JvdXAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jb250cm9sLWlucHV0LWdyb3VwIC5jb250cm9sLWlucHV0LWxhYmVsIHtcXG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLXNtKTtcXG59XFxuLmNvbnRyb2wtaW5wdXQtbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIGdyaWQgKi9cXG4jY2FudmFzLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5cXG4jY2FudmFzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMSk7XFxuICBib3JkZXItbGVmdDogdmFyKC0tY2FudmFzLWJvcmRlcnMpO1xcbiAgYm9yZGVyLXRvcDogdmFyKC0tY2FudmFzLWJvcmRlcnMpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogNzB2aDtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29udHJvbC1pY29uIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnItbWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiA0cmVtO1xcblxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pO1xcbn1cXG4jY29udHJvbC1pY29uOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcbiNjb250cm9sLWljb246YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4uY2FudmFzLXNxdWFyZSB7XFxuICBib3JkZXItcmlnaHQ6IHZhcigtLWNhbnZhcy1ib3JkZXJzKTtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWNhbnZhcy1ib3JkZXJzKTtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4ubm8tYm9yZGVycyB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5mdWxsLWJvcmRlcnMge1xcbiAgYm9yZGVyOiB2YXIoLS1jYW52YXMtYm9yZGVycyk7XFxufVxcblxcbi5jYW52YXMtc3F1YXJlOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjAxO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwLjNyZW0gYmxhY2s7XFxufVxcbi5jYW52YXMtc3F1YXJlOmFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG59XFxuLyogZm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNSk7XFxuICBmb250LXNpemU6IHZhcigtLWZvb3Rlci1mb250LXNpemUpO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuZm9vdGVyIGltZyB7XFxuICBoZWlnaHQ6IGNhbGModmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSkgLSAwLjFyZW0pO1xcbn1cXG5mb290ZXIgYSB7XFxuICBtYXJnaW4tbGVmdDogdmFyKC0tbWFyZ2luU3BhY2UpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdpdGh1Yi1ob3Zlci1pbiB7XFxuICBmcm9tIHtcXG4gICAgcm90YXRlOiAwZGVnO1xcbiAgICBzY2FsZTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgcm90YXRlOiA3MjBkZWc7XFxuICAgIHNjYWxlOiAxLjI7XFxuICB9XFxufVxcbi5naXRodWItaG92ZXItaW4ge1xcbiAgYW5pbWF0aW9uOiBnaXRodWItaG92ZXItaW4gMXMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgZ2l0aHViLWhvdmVyLW91dCB7XFxuICBmcm9tIHtcXG4gICAgcm90YXRlOiA3MjBkZWc7XFxuICAgIHNjYWxlOiAxLjI7XFxuICB9XFxuICB0byB7XFxuICAgIHJvdGF0ZTogMGRlZztcXG4gICAgc2NhbGU6IDE7XFxuICB9XFxufVxcbi5naXRodWItaG92ZXItb3V0IHtcXG4gIGFuaW1hdGlvbjogZ2l0aHViLWhvdmVyLW91dCAxcyBmb3J3YXJkcztcXG59XFxuXFxuZm9vdGVyIGltZzphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi50b3AtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbi50b3AtbGluazp2aXNpdGVkIHtcXG4gIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbi8qIHV0aWxpdHkgY2xhc3NlcyAqL1xcbi5yZW1vdmVkIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4vKiBtZWRpYSBxdWVyaWVzICovXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gICNjYW52YXMge1xcbiAgICBoZWlnaHQ6IDcwdnc7XFxuICB9XFxuICAjY29udHJvbC1wYW5lbC1jb250YWluZXIge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuL01haW5cIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vRm9vdGVyL0Zvb3RlclwiO1xuXG5jb25zdCBBcHAgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogXCJhcHBcIixcbiAgfSk7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChIZWFkZXIoKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoTWFpbigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChGb290ZXIoKSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJjb25zdCBDYW52YXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhbnZhcyA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlkOiBcImNhbnZhc1wiLFxuICB9KTtcbiAgcmV0dXJuIGNhbnZhcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhcztcbiIsImltcG9ydCBDb250cm9sSWNvbiBmcm9tIFwiLi9Db250cm9sSWNvbi9Db250cm9sSWNvblwiO1xuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9DYW52YXNcIjtcblxuY29uc3QgQ2FudmFzQ29udGFpbmVyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogXCJjYW52YXMtY29udGFpbmVyXCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDb250cm9sSWNvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKENhbnZhcygpKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzQ29udGFpbmVyO1xuIiwiaW1wb3J0IGNhbnZhcyBmcm9tIFwiLi4vLi4vbG9naWMvQ2FudmFzTWFuYWdlclwiO1xuaW1wb3J0IHN0YXRlIGZyb20gXCIuLi8uLi9sb2dpYy9TdGF0ZU1hbmFnZXJcIjtcblxuY29uc3QgQ2FudmFzU3F1YXJlID0gKGlkTnVtKSA9PiB7XG4gIGNvbnN0IHNxdWFyZSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlkOiBgY2FudmFzLXNxdWFyZS0ke2lkTnVtfWAsXG4gICAgY2xhc3NOYW1lOiBcImNhbnZhcy1zcXVhcmVcIixcbiAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgIG9ubW91c2Vkb3duOiBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY2FudmFzLnBhaW50Q2FudmFzU3F1YXJlKGUpO1xuICAgIH0sXG4gICAgb250b3VjaHN0YXJ0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgY2FudmFzLnBhaW50Q2FudmFzU3F1YXJlKGUpO1xuICAgIH0sXG5cbiAgICBvbm1vdXNlb3ZlcjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNhbnZhcy5wYWludENhbnZhc1NxdWFyZShlKTtcbiAgICB9LFxuICAgIG9udG91Y2htb3ZlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgY2FudmFzLnBhaW50Q2FudmFzU3F1YXJlKGUpO1xuICAgIH0sXG4gIH0pO1xuICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gc3RhdGUuZ2V0Q2FudmFzQmFja2dyb3VuZENvbG9yKCk7XG4gIHJldHVybiBzcXVhcmU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW52YXNTcXVhcmU7XG4iLCJpbXBvcnQgQ29udHJvbEljb25QYXRoIGZyb20gXCIuL2ljb25zL2NvbnRyb2xzLnBuZ1wiO1xuXG5jb25zdCBDb250cm9sSWNvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaWNvbi1jb250YWluZXJcIixcbiAgfSk7XG4gIGNvbnN0IGljb24gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksIHtcbiAgICBpZDogXCJjb250cm9sLWljb25cIixcbiAgICBzcmM6IENvbnRyb2xJY29uUGF0aCxcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xJY29uO1xuIiwiLy9Db21wb25lbnQgaW1wb3J0c1xuaW1wb3J0IEV4aXREaXYgZnJvbSBcIi4vY29udHJvbHMvRXhpdERpdi9FeGl0RGl2XCI7XG5cbmltcG9ydCBQYWludENvbG9yUGlja2VyIGZyb20gXCIuL2NvbnRyb2xzL2NvbG9yLXBpY2tlcnMvUGFpbnRDb2xvclBpY2tlclwiO1xuaW1wb3J0IENhbnZhc0NvbG9yUGlja2VyIGZyb20gXCIuL2NvbnRyb2xzL2NvbG9yLXBpY2tlcnMvQ2FudmFzQ29sb3JQaWNrZXJcIjtcblxuaW1wb3J0IEVyYXNlQnJ1c2hCdXR0b24gZnJvbSBcIi4vY29udHJvbHMvYnV0dG9ucy9FcmFzZUJydXNoQnV0dG9uXCI7XG5pbXBvcnQgRXJhc2VDYW52YXNCdXR0b24gZnJvbSBcIi4vY29udHJvbHMvYnV0dG9ucy9FcmFzZUNhbnZhc0J1dHRvblwiO1xuaW1wb3J0IFRvZ2dsZUdyaWRsaW5lc0J1dHRvbiBmcm9tIFwiLi9jb250cm9scy9idXR0b25zL1RvZ2dsZUdyaWRsaW5lc0J1dHRvblwiO1xuaW1wb3J0IFJhaW5ib3dNb2RlQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xzL2J1dHRvbnMvUmFpbmJvd01vZGVCdXR0b25cIjtcbmltcG9ydCBTaGFkZU1vZGVCdXR0b24gZnJvbSBcIi4vY29udHJvbHMvYnV0dG9ucy9TaGFkZU1vZGVCdXR0b25cIjtcblxuaW1wb3J0IEdyaWRTaXplU2VsZWN0b3IgZnJvbSBcIi4vY29udHJvbHMvR3JpZFNpemVTZWxlY3RvclwiO1xuXG5jb25zdCBDb250cm9sUGFuZWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlkOiBcImNvbnRyb2wtcGFuZWwtY29udGFpbmVyXCIsXG4gICAgXCJkYXRhLWlzVmlzaWJsZVwiOiB0cnVlLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoRXhpdERpdigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFBhaW50Q29sb3JQaWNrZXIoKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDYW52YXNDb2xvclBpY2tlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKEVyYXNlQnJ1c2hCdXR0b24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChFcmFzZUNhbnZhc0J1dHRvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFRvZ2dsZUdyaWRsaW5lc0J1dHRvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKFJhaW5ib3dNb2RlQnV0dG9uKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoU2hhZGVNb2RlQnV0dG9uKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoR3JpZFNpemVTZWxlY3RvcigpKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbFBhbmVsO1xuIiwiaW1wb3J0IEhpZGVJY29uIGZyb20gXCIuL2ljb25zL2V5ZS1oaWRlLnBuZ1wiO1xuXG5jb25zdCBFeGl0RGl2ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogXCJjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGljb24gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksIHtcbiAgICBpZDogXCJoaWRlLWNvbnRyb2wtcGFuZWwtaWNvblwiLFxuICAgIHNyYzogSGlkZUljb24sXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhpdERpdjtcbiIsImltcG9ydCBSYW5nZSBmcm9tIFwiLi4vLi4vYmFzaWMtZWxlbWVudHMvUmFuZ2VcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2FwcENvbmZpZ1wiO1xuXG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL1N0YXRlTWFuYWdlclwiO1xuaW1wb3J0IGNvbnRyb2xNYW5hZ2VyIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9Db250cm9sTWFuYWdlclwiO1xuXG5jb25zdCBHcmlkU2l6ZVNlbGVjdG9yID0gKCkgPT4ge1xuICBsZXQgY3VycmVudEdyaWRTaXplID0gc3RhdGUuZ2V0R3JpZFNpemUoKTtcblxuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKFxuICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1ncm91cFwiIH0pXG4gICk7XG5cbiAgY29uc3QgcmFuZ2UgPSBPYmplY3QuYXNzaWduKFJhbmdlKCksIHtcbiAgICBpZDogXCJncmlkLXNpemUtc2VsZWN0b3JcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICAgIG1pbjogY29uZmlnLmdyaWRNaW4sXG4gICAgbWF4OiBjb25maWcuZ3JpZE1heCxcbiAgICB2YWx1ZTogc3RhdGUuZ2V0R3JpZFNpemUoKSxcbiAgICBvbmlucHV0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgY29udHJvbE1hbmFnZXIuc2V0R3JpZFNpemUoZS50YXJnZXQudmFsdWUpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiZ3JpZC1zaXplLXNlbGVjdG9yLWxhYmVsXCIsXG4gICAgaW5uZXJUZXh0OiBgR3JpZCBzaXplOiAke2N1cnJlbnRHcmlkU2l6ZX0geCAke2N1cnJlbnRHcmlkU2l6ZX1gLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0LWxhYmVsXCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyYW5nZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyaWRTaXplU2VsZWN0b3I7XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9iYXNpYy1lbGVtZW50cy9CdXR0b25cIjtcbmltcG9ydCBjb250cm9scyBmcm9tIFwiLi4vLi4vLi4vLi4vbG9naWMvQ29udHJvbE1hbmFnZXJcIjtcblxuY29uc3QgRXJhc2VCcnVzaEJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcblxuICBjb25zdCBidXR0b24gPSBPYmplY3QuYXNzaWduKEJ1dHRvbigpLCB7XG4gICAgaWQ6IFwiZXJhc2UtYnJ1c2gtYnV0dG9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIkVyYXNlXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgICBvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb250cm9scy5zZXRQYWludENvbG9yVG9FcmFzZSgpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcmFzZUJydXNoQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQnV0dG9uXCI7XG5pbXBvcnQgY29udHJvbHMgZnJvbSBcIi4uLy4uLy4uLy4uL2xvZ2ljL0NhbnZhc01hbmFnZXJcIjtcblxuY29uc3QgRXJhc2VDYW52YXNCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJlcmFzZS1ncmlkLWJ1dHRvblwiLFxuICAgIGlubmVyVGV4dDogXCJFcmFzZSBncmlkXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgICBvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICBjb250cm9scy5yZXNldENhbnZhcygpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcmFzZUNhbnZhc0J1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBSYWluYm93TW9kZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcInJhaW5ib3ctbW9kZS1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiUmFpbmJvdyBtb2RlXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQgbW9kZS1idXR0b25cIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhaW5ib3dNb2RlQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQnV0dG9uXCI7XG5cbmNvbnN0IFNoYWRlTW9kZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcInNoYWRlLW1vZGUtYnV0dG9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIlNoYWRlIG1vZGVcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dCBtb2RlLWJ1dHRvblwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hhZGVNb2RlQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQnV0dG9uXCI7XG5pbXBvcnQgY29udHJvbHMgZnJvbSBcIi4uLy4uLy4uLy4uL2xvZ2ljL0NvbnRyb2xNYW5hZ2VyXCI7XG5cbmNvbnN0IFRvZ2dsZUdyaWRsaW5lc0J1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcInRvZ2dsZS1ncmlkbGluZXMtYnV0dG9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIlRvZ2dsZSBncmlkbGluZXNcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICAgIG9uY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRyb2xzLnRvZ2dsZUdyaWRsaW5lcygpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2dnbGVHcmlkbGluZXNCdXR0b247XG4iLCJpbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0NvbG9yUGlja2VyXCI7XG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4uLy4uLy4uLy4uL2xvZ2ljL1N0YXRlTWFuYWdlclwiO1xuaW1wb3J0IGNvbnRyb2xzIGZyb20gXCIuLi8uLi8uLi8uLi9sb2dpYy9Db250cm9sTWFuYWdlclwiO1xuXG5jb25zdCBDYW52YXNDb2xvclBpY2tlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtZ3JvdXBcIixcbiAgfSk7XG4gIGNvbnN0IGNvbG9yUGlja2VyID0gT2JqZWN0LmFzc2lnbihDb2xvclBpY2tlcigpLCB7XG4gICAgaWQ6IFwiY2FudmFzLWNvbG9yLXBpY2tlclwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gICAgdmFsdWU6IHN0YXRlLmdldENhbnZhc0JhY2tncm91bmRDb2xvcigpLFxuICAgIG9uaW5wdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb250cm9scy5zZXRDYW52YXNDb2xvcihlKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBsYWJlbCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlubmVyVGV4dDogXCJTZWxlY3QgY2FudmFzIGNvbG9yXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtbGFiZWxcIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbG9yUGlja2VyKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzQ29sb3JQaWNrZXI7XG4iLCJpbXBvcnQgQ29sb3JQaWNrZXIgZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0NvbG9yUGlja2VyXCI7XG5pbXBvcnQgY29udHJvbHMgZnJvbSBcIi4uLy4uLy4uLy4uL2xvZ2ljL0NvbnRyb2xNYW5hZ2VyXCI7XG5cbmNvbnN0IFBhaW50Q29sb3JQaWNrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0LWdyb3VwXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGNvbG9yUGlja2VyID0gT2JqZWN0LmFzc2lnbihDb2xvclBpY2tlcigpLCB7XG4gICAgaWQ6IFwicGFpbnQtY29sb3ItcGlja2VyXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgICBvbmlucHV0OiBmdW5jdGlvbiAoZSkge1xuICAgICAgY29udHJvbHMuc2V0UGFpbnRDb2xvcihlKTtcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBsYWJlbCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlubmVyVGV4dDogXCJTZWxlY3QgcGFpbnQgY29sb3JcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1sYWJlbFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWludENvbG9yUGlja2VyO1xuIiwiaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIi4vbG9nb3MvZ2l0aHViLW1hcmstd2hpdGUucG5nXCI7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpLCB7fSk7XG5cbiAgY29uc3QgY29weXJpZ2h0Q29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1jb250YWluZXJcIixcbiAgICBpbm5lclRleHQ6IGDCqSBDYXJsaW4gTWl0Y2hlbGwgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YCxcbiAgfSk7XG5cbiAgY29uc3QgdG9wQ29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcInRvcC1hdHRyaWJ1dGlvblwiLFxuICAgIGlubmVyVGV4dDogXCJJbnNwaXJlZCBieVwiLFxuICB9KTtcblxuICBjb25zdCB0b3BMaW5rID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJ0b3AtbGlua1wiLFxuICAgIGlubmVyVGV4dDogXCJUaGUgT2RpbiBQcm9qZWN0XCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLCB7XG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vY2FybGluLW1pdGNoZWxsL2V0Y2gtYS1za2V0Y2gtd2VicGFjay1UT1BcIixcbiAgfSk7XG5cbiAgY29uc3QgZ2l0aHViSWNvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSwge1xuICAgIHNyYzogR2l0SHViSWNvbixcbiAgICBjbGFzc05hbWU6IFwiZ2l0aHViLWljb25cIixcbiAgfSk7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodENvbnRhaW5lcik7XG4gIGNvcHlyaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKTtcbiAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcExpbmspO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCB7fSkpO1xuXG4gIGNvbnN0IHRpdGxlID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaW5uZXJUZXh0OiBcIlBpeGVsIEFydGlzdFwiLFxuICB9KTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgQ29udHJvbFBhbmVsIGZyb20gXCIuL0NvbnRyb2xQYW5lbC9Db250cm9sUGFuZWxcIjtcbmltcG9ydCBDYW52YXNDb250YWluZXIgZnJvbSBcIi4vQ2FudmFzU2VjdGlvbi9DYW52YXNDb250YWluZXJcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIiksIHt9KTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmlkID0gXCJ0ZXN0XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoQ29udHJvbFBhbmVsKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKENhbnZhc0NvbnRhaW5lcigpKTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJjb25zdCBCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJjb25zdCBDb2xvclBpY2tlciA9ICgpID0+IHtcbiAgY29uc3QgY29sb3JQaWNrZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSwge1xuICAgIHR5cGU6IFwiY29sb3JcIixcbiAgfSk7XG4gIHJldHVybiBjb2xvclBpY2tlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yUGlja2VyO1xuIiwiY29uc3QgUmFuZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJhbmdlID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksIHtcbiAgICB0eXBlOiBcInJhbmdlXCIsXG4gIH0pO1xuXG4gIHJldHVybiByYW5nZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlO1xuIiwiY29uc3QgQW5pbWF0aW9uTWFuYWdlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGFwcGx5QW5pbWF0aW9ucygpIHtcbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2l0aHViLWljb25cIiksIHtcbiAgICAgIG9ubW91c2VvdmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImdpdGh1Yi1ob3Zlci1vdXRcIik7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImdpdGh1Yi1ob3Zlci1pblwiKTtcbiAgICAgIH0sXG4gICAgICBvbm1vdXNlb3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImdpdGh1Yi1ob3Zlci1pblwiKTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViLWhvdmVyLW91dFwiKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBjb250cm9sLXBhbmVsXG4gICAgY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250cm9sLXBhbmVsLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBzbGlkZUluID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250cm9sLXBhbmVsLWNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnRyb2xQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtb3V0XCIpO1xuICAgICAgY29udHJvbFBhbmVsLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1pblwiKTtcbiAgICAgIGNvbnRyb2xQYW5lbFtcImRhdGEtaXNWaXNpYmxlXCJdID0gdHJ1ZTtcbiAgICB9O1xuICAgIGNvbnN0IHNsaWRlT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250cm9sLXBhbmVsLWNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnRyb2xQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtaW5cIik7XG4gICAgICBjb250cm9sUGFuZWwuY2xhc3NMaXN0LmFkZChcInNsaWRlLW91dFwiKTtcbiAgICAgIGNvbnRyb2xQYW5lbFtcImRhdGEtaXNWaXNpYmxlXCJdID0gZmFsc2U7XG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250cm9sLWljb25cIiksIHtcbiAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2xpZGVJbigpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlkZS1jb250cm9sLXBhbmVsLWljb25cIiksIHtcbiAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2xpZGVPdXQoKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgeyBpbm5lcldpZHRoIH0gPSBlLnRhcmdldDtcbiAgICAgIGlmIChpbm5lcldpZHRoIDw9IDExNTApIHtcbiAgICAgICAgc2xpZGVPdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghY29udHJvbFBhbmVsW1wiZGF0YS1pc1Zpc2libGVcIl0pIHtcbiAgICAgICAgICBzbGlkZUluKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHJldHVybiB7IGFwcGx5QW5pbWF0aW9ucyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uTWFuYWdlcjtcbiIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9TdGF0ZU1hbmFnZXJcIjtcbmltcG9ydCB7IGhleFRvUmdiU3RyLCBzZXRFbGVtZW50c0JnQ29sb3IgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuaW1wb3J0IENhbnZhc1NxdWFyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYW52YXNTZWN0aW9uL0NhbnZhc1NxdWFyZVwiO1xuXG5jb25zdCBDYW52YXNNYW5hZ2VyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gY2xlYXJHcmlkKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzXCIpO1xuICAgIHdoaWxlIChjYW52YXMuZmlyc3RDaGlsZCkge1xuICAgICAgY2FudmFzLnJlbW92ZUNoaWxkKGNhbnZhcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYWludENhbnZhc1NxdWFyZShlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIiB8fCBzdGF0ZS5nZXRMZWZ0TW91c2VCdXR0b25Eb3duKCkpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGUudGFyZ2V0O1xuICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHN0YXRlLmdldFBhaW50Q29sb3IoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENhbnZhcygpIHtcbiAgICBjb25zdCBjYW52YXNTcXVhcmVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FudmFzLXNxdWFyZVwiKV07XG5cbiAgICBzZXRFbGVtZW50c0JnQ29sb3IoXG4gICAgICBjYW52YXNTcXVhcmVzLFxuICAgICAgaGV4VG9SZ2JTdHIoc3RhdGUuZ2V0Q2FudmFzQmFja2dyb3VuZENvbG9yKCkpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUdyaWRsaW5lcygpIHtcbiAgICBjb25zdCBjYW52YXNTcXVhcmVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FudmFzLXNxdWFyZVwiKV07XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXNcIik7XG4gICAgY2FudmFzLmNsYXNzTGlzdC50b2dnbGUoXCJmdWxsLWJvcmRlcnNcIik7XG4gICAgY2FudmFzU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHNxdWFyZS5jbGFzc0xpc3QudG9nZ2xlKFwibm8tYm9yZGVyc1wiKSk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVHcmlkU2l6ZSgpIHtcbiAgICBjb25zdCBncmlkU2l6ZSA9IHN0YXRlLmdldEdyaWRTaXplKCk7XG4gICAgY29uc3QgdG90YWxTcXVhcmVzID0gZ3JpZFNpemUgKiogMjtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhc1wiKTtcblxuICAgIGNsZWFyR3JpZCgpO1xuXG4gICAgY2FudmFzLnN0eWxlW1wiZ3JpZC10ZW1wbGF0ZS1yb3dzXCJdID0gYHJlcGVhdCgke2dyaWRTaXplfSwgMWZyKWA7XG4gICAgY2FudmFzLnN0eWxlW1wiZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zXCJdID0gYHJlcGVhdCgke2dyaWRTaXplfSwgMWZyKWA7XG5cbiAgICBmb3IgKGxldCBpZE51bSA9IDE7IGlkTnVtIDw9IHRvdGFsU3F1YXJlczsgaWROdW0rKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gQ2FudmFzU3F1YXJlKGlkTnVtKTtcbiAgICAgIGNhbnZhcy5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHVwZGF0ZUdyaWRTaXplLCBwYWludENhbnZhc1NxdWFyZSwgcmVzZXRDYW52YXMsIHRvZ2dsZUdyaWRsaW5lcyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzTWFuYWdlcjtcbiIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vbG9naWMvU3RhdGVNYW5hZ2VyXCI7XG5pbXBvcnQgY2FudmFzIGZyb20gXCIuLi9sb2dpYy9DYW52YXNNYW5hZ2VyXCI7XG5cbmNvbnN0IENvbnRyb2xNYW5hZ2VyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gc2V0R3JpZFNpemUodmFsdWUpIHtcbiAgICBjb25zdCBncmlkU2l6ZVNlbGVjdG9yTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjZ3JpZC1zaXplLXNlbGVjdG9yLWxhYmVsXCJcbiAgICApO1xuICAgIHN0YXRlLnNldEdyaWRTaXplKHZhbHVlKTtcbiAgICBncmlkU2l6ZVNlbGVjdG9yTGFiZWwuaW5uZXJUZXh0ID0gYEdyaWQgc2l6ZTogJHtzdGF0ZS5nZXRHcmlkU2l6ZSgpfSB4ICR7c3RhdGUuZ2V0R3JpZFNpemUoKX1gO1xuICAgIGNhbnZhcy51cGRhdGVHcmlkU2l6ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UGFpbnRDb2xvcihlKSB7XG4gICAgY29uc3QgY29sb3IgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzdGF0ZS5zZXRQYWludENvbG9yKGNvbG9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVyYXNlR3JpZCgpIHtcbiAgICBjYW52YXMucmVzZXRDYW52YXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFBhaW50Q29sb3JUb0VyYXNlKCkge1xuICAgIHN0YXRlLnNldFBhaW50Q29sb3Ioc3RhdGUuZ2V0Q2FudmFzQmFja2dyb3VuZENvbG9yKCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFpbnQtY29sb3ItcGlja2VyXCIpLnZhbHVlID0gc3RhdGUuZ2V0UGFpbnRDb2xvcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q2FudmFzQ29sb3IoZSkge1xuICAgIGNvbnN0IGNvbG9yID0gZS50YXJnZXQudmFsdWU7XG4gICAgc3RhdGUuc2V0Q2FudmFzQmFja2dyb3VuZENvbG9yKGNvbG9yKTtcbiAgICBjYW52YXMucmVzZXRDYW52YXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUdyaWRsaW5lcygpIHtcbiAgICBjYW52YXMudG9nZ2xlR3JpZGxpbmVzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldEdyaWRTaXplLFxuICAgIHNldFBhaW50Q29sb3IsXG4gICAgZXJhc2VHcmlkLFxuICAgIHNldENhbnZhc0NvbG9yLFxuICAgIHNldFBhaW50Q29sb3JUb0VyYXNlLFxuICAgIHRvZ2dsZUdyaWRsaW5lcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xNYW5hZ2VyO1xuIiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9hcHBDb25maWdcIjtcblxuY29uc3QgU3RhdGVNYW5hZ2VyID0gKCgpID0+IHtcbiAgbGV0IGdyaWRTaXplID0gY29uZmlnLnN0YXJ0aW5nR3JpZFNpemU7XG4gIGNvbnN0IGdldEdyaWRTaXplID0gKCkgPT4gZ3JpZFNpemU7XG4gIGNvbnN0IHNldEdyaWRTaXplID0gKHZhbHVlKSA9PiAoZ3JpZFNpemUgPSB2YWx1ZSk7XG5cbiAgbGV0IGNhbnZhc0JhY2tncm91bmRDb2xvciA9IFwiI2YyZjJmMlwiO1xuICBjb25zdCBnZXRDYW52YXNCYWNrZ3JvdW5kQ29sb3IgPSAoKSA9PiBjYW52YXNCYWNrZ3JvdW5kQ29sb3I7XG4gIGNvbnN0IHNldENhbnZhc0JhY2tncm91bmRDb2xvciA9IChjb2xvcikgPT4gKGNhbnZhc0JhY2tncm91bmRDb2xvciA9IGNvbG9yKTtcblxuICBsZXQgcGFpbnRDb2xvciA9IFwiIzAwMFwiO1xuICBjb25zdCBnZXRQYWludENvbG9yID0gKCkgPT4gcGFpbnRDb2xvcjtcbiAgY29uc3Qgc2V0UGFpbnRDb2xvciA9IChjb2xvcikgPT4gKHBhaW50Q29sb3IgPSBjb2xvcik7XG5cbiAgbGV0IGxlZnRNb3VzZUJ1dHRvbkRvd24gPSBmYWxzZTtcbiAgY29uc3QgZ2V0TGVmdE1vdXNlQnV0dG9uRG93biA9ICgpID0+IGxlZnRNb3VzZUJ1dHRvbkRvd247XG4gIGNvbnN0IHNldExlZnRNb3VzZUJ1dHRvbkRvd24gPSAodmFsdWUpID0+IChsZWZ0TW91c2VCdXR0b25Eb3duID0gdmFsdWUpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TGVmdE1vdXNlQnV0dG9uRG93bixcbiAgICBzZXRMZWZ0TW91c2VCdXR0b25Eb3duLFxuXG4gICAgZ2V0R3JpZFNpemUsXG4gICAgc2V0R3JpZFNpemUsXG5cbiAgICBnZXRDYW52YXNCYWNrZ3JvdW5kQ29sb3IsXG4gICAgc2V0Q2FudmFzQmFja2dyb3VuZENvbG9yLFxuXG4gICAgc2V0UGFpbnRDb2xvcixcbiAgICBnZXRQYWludENvbG9yLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVNYW5hZ2VyO1xuIiwiY29uc3QgY29uZmlnID0ge1xuICBncmlkTWluOiAxLFxuICBncmlkTWF4OiA2NCxcbiAgc3RhcnRpbmdHcmlkU2l6ZTogMTYsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCIvLyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgRVhQT1JURUQgVVRJTFMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2JTdHIoaGV4KSB7XG4gIGlmIChoZXgubGVuZ3RoID09PSA0KSB7XG4gICAgaGV4ID0gc2hvcnRIZXhUb0Z1bGxIZXgoaGV4KTtcbiAgfVxuXG4gIGNvbnN0IHIgPSBwYXJzZUludChoZXguc2xpY2UoMSwgMyksIDE2KTtcbiAgY29uc3QgZyA9IHBhcnNlSW50KGhleC5zbGljZSgzLCA1KSwgMTYpO1xuICBjb25zdCBiID0gcGFyc2VJbnQoaGV4LnNsaWNlKDUsIDcpLCAxNik7XG5cbiAgcmV0dXJuIGdldFJnYlN0ckZyb21WYWx1ZXMociwgZywgYik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZ2JTdHJGcm9tVmFsdWVzKHIsIGcsIGIpIHtcbiAgcmV0dXJuIGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tUmdiU3RyKCkge1xuICBjb25zdCBbcmFuZFJlZCwgcmFuZEdyZWVuLCByYW5kQmx1ZV0gPSBBcnJheSgzKVxuICAgIC5maWxsKClcbiAgICAubWFwKChlbGVtKSA9PiBnZXRSYW5kSW50KDAsIDI1NikpO1xuICByZXR1cm4gZ2V0UmdiU3RyRnJvbVZhbHVlcyhyYW5kUmVkLCByYW5kR3JlZW4sIHJhbmRCbHVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlc0Zyb21SZ2JTdHIocmdiU3RyKSB7XG4gIGNvbnN0IFtyLCBnLCBiXSA9IHJnYlN0ci5tYXRjaCgvXFxkezEsM30vZyk7XG4gIHJldHVybiB7IHI6ICtyLCBnOiArZywgYjogK2IgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlN0clRvRnVsbEhleChyZ2JTdHIpIHtcbiAgY29uc3QgeyByLCBnLCBiIH0gPSBnZXRWYWx1ZXNGcm9tUmdiU3RyKHJnYlN0cik7XG4gIGNvbnN0IFtoZXhSLCBoZXhHLCBoZXhCXSA9IFtyLCBnLCBiXS5tYXAoKHZhbCkgPT4gdmFsdWVUb1BhZGRlZEhleCh2YWwpKTtcbiAgcmV0dXJuIGAjJHtoZXhSfSR7aGV4R30ke2hleEJ9YDtcbn1cblxuLyoqXG4gKlRha2VzIGEgc2luZ2xlIGRvbSBlbGVtZW50IG9yIGFycmF5IG9mIGVsZW1lbnRzXG4gKmFuZCBhcHBsaWVzIHRoZSBzcGVjaWZpZWQgYmFja2dyb3VuZCBjb2xvciB0byB0aGVtXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGVsZW1lbnRzQXJyIGEgc2luZ2xlIGVsZW1lbnQgb3IgYXJyYXkgb2YgZWxlbWVudHNcbiAqIEBwYXJhbSB7c3RyaW5nfSByZ2JDb2xvclN0ciBhbiByZ2Igc3RyaW5nIGZvcm1hdHRlZCBhczogJ3JnYig5OSwgMjU1LCAxKSdcbiAqICovXG5leHBvcnQgZnVuY3Rpb24gc2V0RWxlbWVudHNCZ0NvbG9yKGVsZW1lbnRzQXJyLCByZ2JDb2xvclN0cikge1xuICBpZiAodHlwZW9mIGVsZW1lbnRzQXJyICE9PSBcIm9iamVjdFwiKSByZXR1cm47XG4gIGlmICghQXJyYXkuaXNBcnJheShlbGVtZW50c0FycikpIHtcbiAgICAvLyBpZiBhIHNpbmdsZSBlbGVtZW50IGlzIGdpdmVuLCBwdXQgaXQgaW4gYW4gYXJyYXlcbiAgICBlbGVtZW50c0FyciA9IFtlbGVtZW50c0Fycl07XG4gIH1cbiAgZWxlbWVudHNBcnIuZm9yRWFjaChcbiAgICAoZWxlbWVudCkgPT4gKGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcmdiQ29sb3JTdHIpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGFkZVJnYlN0ckJ5RmFjdG9yKHJnYlN0ciwgZmFjdG9yKSB7XG4gIGNvbnN0IHsgciwgZywgYiB9ID0gZ2V0VmFsdWVzRnJvbVJnYlN0cihyZ2JTdHIpO1xuICBjb25zdCBbbmV3UiwgbmV3RywgbmV3Ql0gPSBbciwgZywgYl0ubWFwKCh2YWwpID0+IGFwcGx5RmFjdG9yKHZhbCkpO1xuXG4gIGZ1bmN0aW9uIGFwcGx5RmFjdG9yKHZhbHVlKSB7XG4gICAgbGV0IG5ld1ZhbCA9IHZhbHVlICsgZmFjdG9yO1xuICAgIG5ld1ZhbCA9IG5ld1ZhbCA8IDAgPyAwIDogbmV3VmFsO1xuICAgIG5ld1ZhbCA9IG5ld1ZhbCA+IDI1NSA/IDI1NSA6IG5ld1ZhbDtcblxuICAgIHJldHVybiBuZXdWYWw7XG4gIH1cblxuICBjb25zdCBuZXdSZ2JTdHIgPSBgcmdiKCR7bmV3Un0sICR7bmV3R30sICR7bmV3Qn0pYDtcblxuICByZXR1cm4gbmV3UmdiU3RyO1xufVxuXG5leHBvcnQgY29uc3QgYXBwZW5kTG9yZW1MaW5lcyA9IChwYXJlbnQsIG51bUxpbmVzKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTGluZXM7IGkrKykge1xuICAgIGNvbnN0IGxvcmVtID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgICBpbm5lclRleHQ6XG4gICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRWFxdWUgcmVydW0gcXVhc2kgbmVtbywgb2ZmaWNpaXMgYXNzdW1lbmRhIGRvbG9yZW1xdWUgaXVyZSBtb2xlc3RpYWUhIEZhY2VyZSBhdHF1ZSBvZGlvIGlwc2EgbGF1ZGFudGl1bSBuaWhpbCBhbGlhcywgc2l0IGxpYmVyby4gVGVuZXR1ciB2ZWxpdCB2b2x1cHRhdGlidXMgcXVhbSFcIixcbiAgICB9KTtcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobG9yZW0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZUVsZW1lbnRzID0gKGVsZW1lbnRzQXJyKSA9PiB7XG4gIGlmICh0eXBlb2YgZWxlbWVudHNBcnIgIT09IFwib2JqZWN0XCIpIHJldHVybjtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzQXJyKSkge1xuICAgIC8vIGlmIGEgc2luZ2xlIGVsZW1lbnQgaXMgZ2l2ZW4sIHB1dCBpdCBpbiBhbiBhcnJheVxuICAgIGVsZW1lbnRzQXJyID0gW2VsZW1lbnRzQXJyXTtcbiAgfVxuICBlbGVtZW50c0Fyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGVuYWJsZUVsZW1lbnRzID0gKGVsZW1lbnRzQXJyKSA9PiB7XG4gIGlmICh0eXBlb2YgZWxlbWVudHNBcnIgIT09IFwib2JqZWN0XCIpIHJldHVybjtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzQXJyKSkge1xuICAgIC8vIGlmIGEgc2luZ2xlIGVsZW1lbnQgaXMgZ2l2ZW4sIHB1dCBpdCBpbiBhbiBhcnJheVxuICAgIGVsZW1lbnRzQXJyID0gW2VsZW1lbnRzQXJyXTtcbiAgfVxuICBlbGVtZW50c0Fyci5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICB9KTtcbn07XG5cbi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgTk9OIEVYUE9SVEVEIFVUSUxTICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8qKlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW5cbiAqIEBwYXJhbSB7TnVtYmVyfSBtYXhcbiAqIEByZXR1cm5zIE51bWJlclxuICpcbiAqIHJldHVybnMgYW4gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXG4gKi9cbmZ1bmN0aW9uIGdldFJhbmRJbnQobWluLCBtYXgpIHtcbiAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn1cblxuZnVuY3Rpb24gc2hvcnRIZXhUb0Z1bGxIZXgoc2hvcnRIZXgpIHtcbiAgY29uc3QgY2h1bmsxID0gc2hvcnRIZXguc2xpY2UoMSwgMikucmVwZWF0KDIpO1xuICBjb25zdCBjaHVuazIgPSBzaG9ydEhleC5zbGljZSgyLCAzKS5yZXBlYXQoMik7XG4gIGNvbnN0IGNodW5rMyA9IHNob3J0SGV4LnNsaWNlKDMsIDQpLnJlcGVhdCgyKTtcblxuICByZXR1cm4gXCIjXCIgKyBjaHVuazEgKyBjaHVuazIgKyBjaHVuazM7XG59XG5cbmZ1bmN0aW9uIHZhbHVlVG9QYWRkZWRIZXgodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCBcIjBcIik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIHN0eWxlc2hlZXRzXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFwiO1xuXG4vLyBsb2dpYyBtYW5hZ2Vyc1xuaW1wb3J0IEFuaW1hdGlvbk1hbmFnZXIgZnJvbSBcIi4vbG9naWMvQW5pbWF0aW9uTWFuYWdlclwiO1xuaW1wb3J0IENhbnZhc01hbmFnZXIgZnJvbSBcIi4vbG9naWMvQ2FudmFzTWFuYWdlclwiO1xuaW1wb3J0IENvbnRyb2xNYW5hZ2VyIGZyb20gXCIuL2xvZ2ljL0NvbnRyb2xNYW5hZ2VyXCI7XG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4vbG9naWMvU3RhdGVNYW5hZ2VyXCI7XG5cbmltcG9ydCB7IGRpc2FibGVFbGVtZW50cyB9IGZyb20gXCIuL2xvZ2ljL3V0aWxpdGllc1wiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENvbnRlbnQoKSk7XG5cbkFuaW1hdGlvbk1hbmFnZXIuYXBwbHlBbmltYXRpb25zKCk7XG5DYW52YXNNYW5hZ2VyLnVwZGF0ZUdyaWRTaXplKCk7XG5Db250cm9sTWFuYWdlci5zZXRHcmlkU2l6ZShzdGF0ZS5nZXRHcmlkU2l6ZSgpKTtcblxud2luZG93Lm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICBzdGF0ZS5zZXRMZWZ0TW91c2VCdXR0b25Eb3duKHRydWUpO1xufTtcblxud2luZG93Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgc3RhdGUuc2V0TGVmdE1vdXNlQnV0dG9uRG93bihmYWxzZSk7XG59O1xuXG4vLyBkaXNhYmxlIG1vZGUgYnV0dG9ucyBmb3Igbm93XG5bLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RlLWJ1dHRvblwiKV0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICBjb25zdCBjdXJyZW50VGV4dCA9IGVsZW1lbnQuaW5uZXJUZXh0O1xuICBlbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRUZXh0ICsgXCIgKGNvbWluZyBzb29uKVwiO1xuICBlbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9