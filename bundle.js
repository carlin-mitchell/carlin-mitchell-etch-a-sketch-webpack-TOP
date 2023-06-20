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

#top-link:visited {
  color: var(--links);
}

#top-link:visited {
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
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* colors */\n  --gray-5: hsla(0, 0%, 35%, 1);\n  --gray-4: hsla(0, 0%, 50%, 1);\n  --gray-3: hsla(0, 0%, 65%, 1);\n  --gray-2: hsla(0, 0%, 80%, 1);\n  --gray-1: hsla(0, 0%, 95%, 1);\n  --links: #ff3300;\n\n  /* canvas */\n  --canvas-borders: 1px solid black;\n\n  /* fonts */\n  --footer-font-size: 1.1rem;\n  --header-font-size: 2.5rem;\n\n  /* border radius */\n  --br-sm: 5px;\n  --br-md: 10px;\n  --br-lg: 15px;\n\n  /* spacing */\n  --space-sm: 5px;\n  --space-md: 15px;\n  --space-lg: 25px;\n\n  /* utility */\n  --marginSpace: 0.3rem;\n}\n\n@font-face {\n  font-family: \"SpaceTime\";\n  src: url(\"./global-assets/fonts/spacetime-regular.ttf\");\n}\n\n@font-face {\n  font-family: \"MonoRound\";\n  src: url(\"./global-assets/fonts/Monoround.otf\");\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: MonoRound, sans-serif;\n}\n\n#app {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n/* header */\nheader {\n  background-color: var(--gray-3);\n  font-family: SpaceTime, sans-serif;\n  display: grid;\n  text-align: center;\n  padding: 1rem 0 1.3rem 0;\n}\n\nheader div {\n  font-size: var(--header-font-size);\n}\n\n/* main */\nmain {\n  background-color: var(--gray-1);\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: minmax(15rem, 1fr) 5fr;\n}\n\n/* control panel */\n@keyframes slide-in {\n  from {\n    transform: translateX(-100%);\n    visibility: hidden;\n  }\n  to {\n    transform: translateX(0%);\n    visibility: visible;\n  }\n}\n\n.slide-in {\n  animation: slide-in 0.75s forwards;\n}\n\n@keyframes slide-out {\n  from {\n    transform: translateX(0%);\n    visibility: visible;\n  }\n  to {\n    transform: translateX(-100%);\n    visibility: hidden;\n  }\n}\n\n.slide-out {\n  animation: slide-out 0.75s forwards;\n}\n\n#control-panel-container {\n  visibility: visible;\n  background-color: var(--gray-2);\n  padding: var(--space-lg);\n  font-size: 1.2rem;\n\n  display: grid;\n  justify-content: space-evenly;\n  align-content: space-between;\n  grid-row: 1/2;\n  grid-column: 1/2;\n  z-index: 10;\n}\n\n#control-panel-exit-container {\n  cursor: pointer;\n  text-align: center;\n}\n#control-panel-exit-container img:hover {\n  scale: 1.1;\n}\n#control-panel-exit-container img:active {\n  scale: 1;\n}\n\n.control-input {\n  color: black;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: inherit;\n  width: 100%;\n}\n\nbutton.control-input {\n  border-radius: var(--br-sm);\n  padding-top: 0.25rem;\n}\nbutton.control-input:hover {\n  scale: 1.025;\n}\nbutton.control-input:active {\n  scale: 1;\n}\n\n.control-input-group {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n.control-input-group .control-input-label {\n  margin-top: var(--space-sm);\n}\n.control-input-label {\n  display: block;\n  text-align: center;\n}\n\n/* grid */\n#canvas-container {\n  height: 100%;\n  padding: var(--space-lg);\n\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  z-index: 0;\n}\n\n#canvas {\n  background-color: var(--gray-1);\n  border-left: var(--canvas-borders);\n  border-top: var(--canvas-borders);\n  display: grid;\n  height: 70vh;\n  aspect-ratio: 1;\n  justify-self: center;\n  align-self: center;\n}\n\n#control-icon {\n  border: 3px solid black;\n  border-radius: var(--br-md);\n  cursor: pointer;\n  height: 4rem;\n\n  padding: var(--space-sm);\n}\n#control-icon:hover {\n  scale: 1.1;\n}\n#control-icon:active {\n  scale: 1;\n}\n\n.canvas-square {\n  border-right: var(--canvas-borders);\n  border-bottom: var(--canvas-borders);\n  cursor: crosshair;\n}\n\n.no-borders {\n  border: none;\n}\n\n.full-borders {\n  border: var(--canvas-borders);\n}\n\n.canvas-square:hover {\n  scale: 1.01;\n  box-shadow: 0px 0px 0.3rem black;\n}\n.canvas-square:active {\n  scale: 1;\n}\n/* footer */\nfooter {\n  background-color: var(--gray-5);\n  font-size: var(--footer-font-size);\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-items: center;\n  color: white;\n}\nfooter img {\n  height: calc(var(--footer-font-size) - 0.1rem);\n}\nfooter a {\n  margin-left: var(--marginSpace);\n}\n\n@keyframes github-hover-in {\n  from {\n    rotate: 0deg;\n    scale: 1;\n  }\n  to {\n    rotate: 720deg;\n    scale: 1.2;\n  }\n}\n.github-hover-in {\n  animation: github-hover-in 1s forwards;\n}\n\n@keyframes github-hover-out {\n  from {\n    rotate: 720deg;\n    scale: 1.2;\n  }\n  to {\n    rotate: 0deg;\n    scale: 1;\n  }\n}\n.github-hover-out {\n  animation: github-hover-out 1s forwards;\n}\n\nfooter img:active {\n  scale: 1;\n}\n\n#top-link:visited {\n  color: var(--links);\n}\n\n#top-link:visited {\n  color: var(--links);\n}\n\n/* utility classes */\n.removed {\n  display: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n/* media queries */\n@media only screen and (max-width: 1000px) {\n  #canvas {\n    height: 70vw;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _logic_appConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../logic/appConfig */ "./src/logic/appConfig.js");
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
    id: "top-link",
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
/* harmony import */ var _appConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appConfig */ "./src/logic/appConfig.js");


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
      if (innerWidth <= _appConfig__WEBPACK_IMPORTED_MODULE_0__["default"].controlPanelAnimationTriggerWidth) {
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

    if (_StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].getGridlinesToggledOn()) {
      canvas.classList.add("full-borders");
      canvasSquares.forEach((square) => square.classList.add("no-borders"));
      _StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].setGridlinesToggleOn(false);
    } else {
      _StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].setGridlinesToggleOn(true);
      canvas.classList.remove("full-borders");
      canvasSquares.forEach((square) => square.classList.remove("no-borders"));
    }
  }

  function updateGridSize() {
    const gridSize = _StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].getGridSize();
    const totalSquares = gridSize ** 2;
    const canvas = document.querySelector("#canvas");

    // clear the gird and ensure that gridlines are toggled on
    clearGrid();
    if (_StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].getGridlinesToggledOn() === false) {
      toggleGridlines();
    }

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

  let gridlinesToggledOn = true;
  // console.log(gridlinesToggledOn);
  const getGridlinesToggledOn = () => gridlinesToggledOn;
  const setGridlinesToggleOn = (value) => (gridlinesToggledOn = value);

  return {
    getLeftMouseButtonDown,
    setLeftMouseButtonDown,

    getGridSize,
    setGridSize,

    getCanvasBackgroundColor,
    setCanvasBackgroundColor,

    setPaintColor,
    getPaintColor,

    getGridlinesToggledOn,
    setGridlinesToggleOn,
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
  gridMax: window.innerWidth <= 800 ? 32 : 64,
  startingGridSize: 16,
  controlPanelAnimationTriggerWidth: 1150,
  startingWindowWidth: window.innerWidth,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUtBQThEO0FBQzFHLDRDQUE0QyxtSkFBc0Q7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLFVBQVUsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLGdDQUFnQyxrREFBa0Qsa0NBQWtDLGtDQUFrQyxrQ0FBa0Msa0NBQWtDLHFCQUFxQix3REFBd0QsZ0RBQWdELCtCQUErQiwwQ0FBMEMsa0JBQWtCLGtCQUFrQix1Q0FBdUMscUJBQXFCLHFCQUFxQiw2Q0FBNkMsR0FBRyxnQkFBZ0IsK0JBQStCLDhEQUE4RCxHQUFHLGdCQUFnQiwrQkFBK0Isc0RBQXNELEdBQUcsT0FBTywyQkFBMkIsY0FBYyxlQUFlLEdBQUcsVUFBVSx1Q0FBdUMsR0FBRyxVQUFVLGtCQUFrQixrQkFBa0Isc0NBQXNDLEdBQUcsd0JBQXdCLG9DQUFvQyx1Q0FBdUMsa0JBQWtCLHVCQUF1Qiw2QkFBNkIsR0FBRyxnQkFBZ0IsdUNBQXVDLEdBQUcsc0JBQXNCLG9DQUFvQyxrQkFBa0IsNEJBQTRCLGtEQUFrRCxHQUFHLDhDQUE4QyxVQUFVLG1DQUFtQyx5QkFBeUIsS0FBSyxRQUFRLGdDQUFnQywwQkFBMEIsS0FBSyxHQUFHLGVBQWUsdUNBQXVDLEdBQUcsMEJBQTBCLFVBQVUsZ0NBQWdDLDBCQUEwQixLQUFLLFFBQVEsbUNBQW1DLHlCQUF5QixLQUFLLEdBQUcsZ0JBQWdCLHdDQUF3QyxHQUFHLDhCQUE4Qix3QkFBd0Isb0NBQW9DLDZCQUE2QixzQkFBc0Isb0JBQW9CLGtDQUFrQyxpQ0FBaUMsa0JBQWtCLHFCQUFxQixnQkFBZ0IsR0FBRyxtQ0FBbUMsb0JBQW9CLHVCQUF1QixHQUFHLDJDQUEyQyxlQUFlLEdBQUcsNENBQTRDLGFBQWEsR0FBRyxvQkFBb0IsaUJBQWlCLG9CQUFvQix5QkFBeUIsdUJBQXVCLGdCQUFnQixHQUFHLDBCQUEwQixnQ0FBZ0MseUJBQXlCLEdBQUcsOEJBQThCLGlCQUFpQixHQUFHLCtCQUErQixhQUFhLEdBQUcsMEJBQTBCLHVCQUF1QixrQkFBa0IsMkJBQTJCLEdBQUcsNkNBQTZDLGdDQUFnQyxHQUFHLHdCQUF3QixtQkFBbUIsdUJBQXVCLEdBQUcsbUNBQW1DLGlCQUFpQiw2QkFBNkIsb0JBQW9CLHdDQUF3QyxrQkFBa0Isc0JBQXNCLGVBQWUsR0FBRyxhQUFhLG9DQUFvQyx1Q0FBdUMsc0NBQXNDLGtCQUFrQixpQkFBaUIsb0JBQW9CLHlCQUF5Qix1QkFBdUIsR0FBRyxtQkFBbUIsNEJBQTRCLGdDQUFnQyxvQkFBb0IsaUJBQWlCLCtCQUErQixHQUFHLHVCQUF1QixlQUFlLEdBQUcsd0JBQXdCLGFBQWEsR0FBRyxvQkFBb0Isd0NBQXdDLHlDQUF5QyxzQkFBc0IsR0FBRyxpQkFBaUIsaUJBQWlCLEdBQUcsbUJBQW1CLGtDQUFrQyxHQUFHLDBCQUEwQixnQkFBZ0IscUNBQXFDLEdBQUcseUJBQXlCLGFBQWEsR0FBRyx3QkFBd0Isb0NBQW9DLHVDQUF1QyxrQkFBa0Isa0JBQWtCLGdFQUFnRSwwQkFBMEIsaUJBQWlCLEdBQUcsY0FBYyxtREFBbUQsR0FBRyxZQUFZLG9DQUFvQyxHQUFHLGdDQUFnQyxVQUFVLG1CQUFtQixlQUFlLEtBQUssUUFBUSxxQkFBcUIsaUJBQWlCLEtBQUssR0FBRyxvQkFBb0IsMkNBQTJDLEdBQUcsaUNBQWlDLFVBQVUscUJBQXFCLGlCQUFpQixLQUFLLFFBQVEsbUJBQW1CLGVBQWUsS0FBSyxHQUFHLHFCQUFxQiw0Q0FBNEMsR0FBRyx1QkFBdUIsYUFBYSxHQUFHLHVCQUF1Qix3QkFBd0IsR0FBRyx1QkFBdUIsd0JBQXdCLEdBQUcscUNBQXFDLGtCQUFrQixHQUFHLGFBQWEsdUJBQXVCLEdBQUcscUVBQXFFLGFBQWEsbUJBQW1CLEtBQUssR0FBRyxxQkFBcUI7QUFDL3ZPO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDblQxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2I4QjtBQUNKO0FBQ1c7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsc0JBQXNCLG1EQUFNO0FBQzVCLHNCQUFzQixpREFBSTtBQUMxQixzQkFBc0IsMERBQU07O0FBRTVCO0FBQ0E7O0FBRUEsaUVBQWUsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNoQm5CO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQOEI7QUFDdEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsd0JBQXdCLG9FQUFXO0FBQ25DLHdCQUF3QixtREFBTTs7QUFFOUI7QUFDQTs7QUFFQSxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZGdCO0FBQ0Y7O0FBRTdDO0FBQ0E7QUFDQSx5QkFBeUIsTUFBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQU07QUFDWixLQUFLO0FBQ0w7QUFDQSxNQUFNLDREQUFNO0FBQ1osS0FBSzs7QUFFTDtBQUNBLE1BQU0sNERBQU07QUFDWixLQUFLO0FBQ0w7QUFDQSxNQUFNLDREQUFNO0FBQ1osS0FBSztBQUNMLEdBQUc7QUFDSCxpQ0FBaUMsMkRBQUs7QUFDdEM7QUFDQTs7QUFFQSxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQnVCOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFNBQVMsZ0RBQWU7QUFDeEIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkM0I7QUFDaUQ7O0FBRXdCO0FBQ0U7O0FBRVI7QUFDRTtBQUNRO0FBQ1I7QUFDSjs7QUFFTjs7QUFFaEI7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCx3QkFBd0IscUVBQU87QUFDL0Isd0JBQXdCLG9GQUFnQjtBQUN4Qyx3QkFBd0IscUZBQWlCO0FBQ3pDLHdCQUF3Qiw4RUFBZ0I7QUFDeEMsd0JBQXdCLCtFQUFpQjtBQUN6Qyx3QkFBd0IsbUZBQXFCO0FBQzdDLHdCQUF3QiwrRUFBaUI7QUFDekMsd0JBQXdCLDZFQUFlO0FBQ3ZDLHdCQUF3QixzRUFBZ0I7O0FBRXhDO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkNnQjs7QUFFNUM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsU0FBUyxnREFBUTtBQUNqQixHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJ3QjtBQUNEOztBQUVFO0FBQ1c7O0FBRTNEO0FBQ0Esd0JBQXdCLDJEQUFLOztBQUU3QjtBQUNBLG9DQUFvQyxrQ0FBa0M7QUFDdEU7O0FBRUEsOEJBQThCLGlFQUFLO0FBQ25DO0FBQ0E7QUFDQSxTQUFTLHdEQUFNO0FBQ2YsU0FBUyx3REFBTTtBQUNmLFdBQVcsMkRBQUs7QUFDaEI7QUFDQSxNQUFNLDZEQUFjO0FBQ3BCLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQSw2QkFBNkIsaUJBQWlCLElBQUksZ0JBQWdCO0FBQ2xFO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsZ0JBQWdCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENvQjtBQUNJOztBQUV4RDtBQUNBOztBQUVBLCtCQUErQixrRUFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVE7QUFDZCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCb0I7QUFDRzs7QUFFdkQ7QUFDQTtBQUNBLCtCQUErQixrRUFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNERBQVE7QUFDZCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJtQjs7QUFFcEQ7QUFDQTtBQUNBLCtCQUErQixrRUFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmbUI7O0FBRXBEO0FBQ0E7QUFDQSwrQkFBK0Isa0VBQU07QUFDckM7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLGVBQWUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDSTs7QUFFeEQ7QUFDQTtBQUNBLCtCQUErQixrRUFBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVE7QUFDZCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLHFCQUFxQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnlCO0FBQ1g7QUFDSzs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILG9DQUFvQyx1RUFBVztBQUMvQztBQUNBO0FBQ0EsV0FBVywyREFBSztBQUNoQjtBQUNBLE1BQU0sNkRBQVE7QUFDZCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxpQkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QjZCO0FBQ047O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsb0NBQW9DLHVFQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVE7QUFDZCxLQUFLO0FBQ0wsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxnQkFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzNCdUI7O0FBRXZEO0FBQ0EsbUVBQW1FOztBQUVuRTtBQUNBO0FBQ0Esb0NBQW9DLHlCQUF5QjtBQUM3RCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsU0FBUyx5REFBVTtBQUNuQjtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3hDdEI7QUFDQSxrRUFBa0U7O0FBRWxFO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ppQztBQUNPOztBQUU5RDtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0EsbUJBQW1CLHNFQUFZO0FBQy9CLG1CQUFtQiwwRUFBZTs7QUFFbEM7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2JwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ0x0QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ1AzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDUlk7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQSxjQUFjLGFBQWE7QUFDM0Isd0JBQXdCLGtEQUFNO0FBQzlCO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDOztBQUVELGlFQUFlLGdCQUFnQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REc7QUFDMkI7O0FBRU07O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBSztBQUNYO0FBQ0E7QUFDQSxxQ0FBcUMscURBQUs7QUFDMUM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksOERBQWtCO0FBQ3RCO0FBQ0EsTUFBTSx1REFBVyxDQUFDLHFEQUFLO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEscURBQUs7QUFDYjtBQUNBO0FBQ0EsTUFBTSxxREFBSztBQUNYLE1BQU07QUFDTixNQUFNLHFEQUFLO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIscURBQUs7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUSxxREFBSztBQUNiO0FBQ0E7O0FBRUEsbURBQW1ELFNBQVM7QUFDNUQsc0RBQXNELFNBQVM7O0FBRS9ELHdCQUF3Qix1QkFBdUI7QUFDL0MscUJBQXFCLGtGQUFZO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVhO0FBQ0U7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJEQUFLO0FBQ1Qsb0RBQW9ELDJEQUFLLGdCQUFnQixJQUFJLDJEQUFLLGVBQWU7QUFDakcsSUFBSSw0REFBTTtBQUNWOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDJEQUFLO0FBQ1Q7O0FBRUE7QUFDQSxJQUFJLDREQUFNO0FBQ1Y7O0FBRUE7QUFDQSxJQUFJLDJEQUFLLGVBQWUsMkRBQUs7QUFDN0IsMERBQTBELDJEQUFLO0FBQy9EOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDJEQUFLO0FBQ1QsSUFBSSw0REFBTTtBQUNWOztBQUVBO0FBQ0EsSUFBSSw0REFBTTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQy9DRzs7QUFFakM7QUFDQSxpQkFBaUIsa0RBQU07QUFDdkI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsTUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSdEI7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDOUI7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AscUNBQXFDLElBQUk7QUFDekMsV0FBVztBQUNYOztBQUVPO0FBQ1AsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsYUFBYSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUs7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxVQUFVLFVBQVU7QUFDcEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQkFBMkIsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLOztBQUVsRDtBQUNBOztBQUVPO0FBQ1Asa0JBQWtCLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9IQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNxQjs7QUFFckI7QUFDdUM7O0FBRXZDO0FBQ3dEO0FBQ047QUFDRTtBQUNYOztBQUVXOztBQUVwRCwwQkFBMEIsMkRBQU87O0FBRWpDLCtEQUFnQjtBQUNoQiw0REFBYTtBQUNiLDZEQUFjLGFBQWEsMkRBQUs7O0FBRWhDO0FBQ0EsRUFBRSwyREFBSztBQUNQOztBQUVBO0FBQ0EsRUFBRSwyREFBSztBQUNQOztBQUVBO0FBQ0EsRUFBRSwyREFBSztBQUNQO0FBQ0E7QUFDQSxFQUFFLDJEQUFLO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9BcHAuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9DYW52YXNTZWN0aW9uL0NhbnZhcy5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NhbnZhc1NlY3Rpb24vQ2FudmFzQ29udGFpbmVyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ2FudmFzU2VjdGlvbi9DYW52YXNTcXVhcmUuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9DYW52YXNTZWN0aW9uL0NvbnRyb2xJY29uL0NvbnRyb2xJY29uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL0NvbnRyb2xQYW5lbC5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9FeGl0RGl2L0V4aXREaXYuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvR3JpZFNpemVTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9idXR0b25zL0VyYXNlQnJ1c2hCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvYnV0dG9ucy9FcmFzZUNhbnZhc0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9idXR0b25zL1JhaW5ib3dNb2RlQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2J1dHRvbnMvU2hhZGVNb2RlQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2J1dHRvbnMvVG9nZ2xlR3JpZGxpbmVzQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2NvbG9yLXBpY2tlcnMvQ2FudmFzQ29sb3JQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvY29sb3ItcGlja2Vycy9QYWludENvbG9yUGlja2VyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL01haW4uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9iYXNpYy1lbGVtZW50cy9CdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9iYXNpYy1lbGVtZW50cy9Db2xvclBpY2tlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL2Jhc2ljLWVsZW1lbnRzL1JhbmdlLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2xvZ2ljL0FuaW1hdGlvbk1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvbG9naWMvQ2FudmFzTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9sb2dpYy9Db250cm9sTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9sb2dpYy9TdGF0ZU1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvbG9naWMvYXBwQ29uZmlnLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2xvZ2ljL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9nbG9iYWwtYXNzZXRzL2ZvbnRzL3NwYWNldGltZS1yZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZ2xvYmFsLWFzc2V0cy9mb250cy9Nb25vcm91bmQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAvKiBjb2xvcnMgKi9cbiAgLS1ncmF5LTU6IGhzbGEoMCwgMCUsIDM1JSwgMSk7XG4gIC0tZ3JheS00OiBoc2xhKDAsIDAlLCA1MCUsIDEpO1xuICAtLWdyYXktMzogaHNsYSgwLCAwJSwgNjUlLCAxKTtcbiAgLS1ncmF5LTI6IGhzbGEoMCwgMCUsIDgwJSwgMSk7XG4gIC0tZ3JheS0xOiBoc2xhKDAsIDAlLCA5NSUsIDEpO1xuICAtLWxpbmtzOiAjZmYzMzAwO1xuXG4gIC8qIGNhbnZhcyAqL1xuICAtLWNhbnZhcy1ib3JkZXJzOiAxcHggc29saWQgYmxhY2s7XG5cbiAgLyogZm9udHMgKi9cbiAgLS1mb290ZXItZm9udC1zaXplOiAxLjFyZW07XG4gIC0taGVhZGVyLWZvbnQtc2l6ZTogMi41cmVtO1xuXG4gIC8qIGJvcmRlciByYWRpdXMgKi9cbiAgLS1ici1zbTogNXB4O1xuICAtLWJyLW1kOiAxMHB4O1xuICAtLWJyLWxnOiAxNXB4O1xuXG4gIC8qIHNwYWNpbmcgKi9cbiAgLS1zcGFjZS1zbTogNXB4O1xuICAtLXNwYWNlLW1kOiAxNXB4O1xuICAtLXNwYWNlLWxnOiAyNXB4O1xuXG4gIC8qIHV0aWxpdHkgKi9cbiAgLS1tYXJnaW5TcGFjZTogMC4zcmVtO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2VUaW1lXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub1JvdW5kXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IE1vbm9Sb3VuZCwgc2Fucy1zZXJpZjtcbn1cblxuI2FwcCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbn1cbi8qIGhlYWRlciAqL1xuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0zKTtcbiAgZm9udC1mYW1pbHk6IFNwYWNlVGltZSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDAgMS4zcmVtIDA7XG59XG5cbmhlYWRlciBkaXYge1xuICBmb250LXNpemU6IHZhcigtLWhlYWRlci1mb250LXNpemUpO1xufVxuXG4vKiBtYWluICovXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0xKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1cmVtLCAxZnIpIDVmcjtcbn1cblxuLyogY29udHJvbCBwYW5lbCAqL1xuQGtleWZyYW1lcyBzbGlkZS1pbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbn1cblxuLnNsaWRlLWluIHtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAwLjc1cyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbi5zbGlkZS1vdXQge1xuICBhbmltYXRpb246IHNsaWRlLW91dCAwLjc1cyBmb3J3YXJkcztcbn1cblxuI2NvbnRyb2wtcGFuZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0yKTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xuICBmb250LXNpemU6IDEuMnJlbTtcblxuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgei1pbmRleDogMTA7XG59XG5cbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lciBpbWc6aG92ZXIge1xuICBzY2FsZTogMS4xO1xufVxuI2NvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXIgaW1nOmFjdGl2ZSB7XG4gIHNjYWxlOiAxO1xufVxuXG4uY29udHJvbC1pbnB1dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uLmNvbnRyb2wtaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ici1zbSk7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xufVxuYnV0dG9uLmNvbnRyb2wtaW5wdXQ6aG92ZXIge1xuICBzY2FsZTogMS4wMjU7XG59XG5idXR0b24uY29udHJvbC1pbnB1dDphY3RpdmUge1xuICBzY2FsZTogMTtcbn1cblxuLmNvbnRyb2wtaW5wdXQtZ3JvdXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udHJvbC1pbnB1dC1ncm91cCAuY29udHJvbC1pbnB1dC1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLXNtKTtcbn1cbi5jb250cm9sLWlucHV0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogZ3JpZCAqL1xuI2NhbnZhcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gIHotaW5kZXg6IDA7XG59XG5cbiNjYW52YXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEpO1xuICBib3JkZXItbGVmdDogdmFyKC0tY2FudmFzLWJvcmRlcnMpO1xuICBib3JkZXItdG9wOiB2YXIoLS1jYW52YXMtYm9yZGVycyk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogNzB2aDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jY29udHJvbC1pY29uIHtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyLW1kKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDRyZW07XG5cbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pO1xufVxuI2NvbnRyb2wtaWNvbjpob3ZlciB7XG4gIHNjYWxlOiAxLjE7XG59XG4jY29udHJvbC1pY29uOmFjdGl2ZSB7XG4gIHNjYWxlOiAxO1xufVxuXG4uY2FudmFzLXNxdWFyZSB7XG4gIGJvcmRlci1yaWdodDogdmFyKC0tY2FudmFzLWJvcmRlcnMpO1xuICBib3JkZXItYm90dG9tOiB2YXIoLS1jYW52YXMtYm9yZGVycyk7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuXG4ubm8tYm9yZGVycyB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmZ1bGwtYm9yZGVycyB7XG4gIGJvcmRlcjogdmFyKC0tY2FudmFzLWJvcmRlcnMpO1xufVxuXG4uY2FudmFzLXNxdWFyZTpob3ZlciB7XG4gIHNjYWxlOiAxLjAxO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDAuM3JlbSBibGFjaztcbn1cbi5jYW52YXMtc3F1YXJlOmFjdGl2ZSB7XG4gIHNjYWxlOiAxO1xufVxuLyogZm9vdGVyICovXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTUpO1xuICBmb250LXNpemU6IHZhcigtLWZvb3Rlci1mb250LXNpemUpO1xuICBwYWRkaW5nOiAycmVtO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5mb290ZXIgaW1nIHtcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWZvb3Rlci1mb250LXNpemUpIC0gMC4xcmVtKTtcbn1cbmZvb3RlciBhIHtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpblNwYWNlKTtcbn1cblxuQGtleWZyYW1lcyBnaXRodWItaG92ZXItaW4ge1xuICBmcm9tIHtcbiAgICByb3RhdGU6IDBkZWc7XG4gICAgc2NhbGU6IDE7XG4gIH1cbiAgdG8ge1xuICAgIHJvdGF0ZTogNzIwZGVnO1xuICAgIHNjYWxlOiAxLjI7XG4gIH1cbn1cbi5naXRodWItaG92ZXItaW4ge1xuICBhbmltYXRpb246IGdpdGh1Yi1ob3Zlci1pbiAxcyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBnaXRodWItaG92ZXItb3V0IHtcbiAgZnJvbSB7XG4gICAgcm90YXRlOiA3MjBkZWc7XG4gICAgc2NhbGU6IDEuMjtcbiAgfVxuICB0byB7XG4gICAgcm90YXRlOiAwZGVnO1xuICAgIHNjYWxlOiAxO1xuICB9XG59XG4uZ2l0aHViLWhvdmVyLW91dCB7XG4gIGFuaW1hdGlvbjogZ2l0aHViLWhvdmVyLW91dCAxcyBmb3J3YXJkcztcbn1cblxuZm9vdGVyIGltZzphY3RpdmUge1xuICBzY2FsZTogMTtcbn1cblxuI3RvcC1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogdmFyKC0tbGlua3MpO1xufVxuXG4jdG9wLWxpbms6dmlzaXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1saW5rcyk7XG59XG5cbi8qIHV0aWxpdHkgY2xhc3NlcyAqL1xuLnJlbW92ZWQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZGVuIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4vKiBtZWRpYSBxdWVyaWVzICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAjY2FudmFzIHtcbiAgICBoZWlnaHQ6IDcwdnc7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLGdCQUFnQjs7RUFFaEIsV0FBVztFQUNYLGlDQUFpQzs7RUFFakMsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQiwwQkFBMEI7O0VBRTFCLGtCQUFrQjtFQUNs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QTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0U7SUFDRSxjQUFjO0lBQ2QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0lBQ1osUUFBUTtFQUNWO0FBQ0Y7QUFDQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBjb2xvcnMgKi9cXG4gIC0tZ3JheS01OiBoc2xhKDAsIDAlLCAzNSUsIDEpO1xcbiAgLS1ncmF5LTQ6IGhzbGEoMCwgMCUsIDUwJSwgMSk7XFxuICAtLWdyYXktMzogaHNsYSgwLCAwJSwgNjUlLCAxKTtcXG4gIC0tZ3JheS0yOiBoc2xhKDAsIDAlLCA4MCUsIDEpO1xcbiAgLS1ncmF5LTE6IGhzbGEoMCwgMCUsIDk1JSwgMSk7XFxuICAtLWxpbmtzOiAjZmYzMzAwO1xcblxcbiAgLyogY2FudmFzICovXFxuICAtLWNhbnZhcy1ib3JkZXJzOiAxcHggc29saWQgYmxhY2s7XFxuXFxuICAvKiBmb250cyAqL1xcbiAgLS1mb290ZXItZm9udC1zaXplOiAxLjFyZW07XFxuICAtLWhlYWRlci1mb250LXNpemU6IDIuNXJlbTtcXG5cXG4gIC8qIGJvcmRlciByYWRpdXMgKi9cXG4gIC0tYnItc206IDVweDtcXG4gIC0tYnItbWQ6IDEwcHg7XFxuICAtLWJyLWxnOiAxNXB4O1xcblxcbiAgLyogc3BhY2luZyAqL1xcbiAgLS1zcGFjZS1zbTogNXB4O1xcbiAgLS1zcGFjZS1tZDogMTVweDtcXG4gIC0tc3BhY2UtbGc6IDI1cHg7XFxuXFxuICAvKiB1dGlsaXR5ICovXFxuICAtLW1hcmdpblNwYWNlOiAwLjNyZW07XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGFjZVRpbWVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZ2xvYmFsLWFzc2V0cy9mb250cy9zcGFjZXRpbWUtcmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9Sb3VuZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9nbG9iYWwtYXNzZXRzL2ZvbnRzL01vbm9yb3VuZC5vdGZcXFwiKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogTW9ub1JvdW5kLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jYXBwIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbn1cXG4vKiBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0zKTtcXG4gIGZvbnQtZmFtaWx5OiBTcGFjZVRpbWUsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAwIDEuM3JlbSAwO1xcbn1cXG5cXG5oZWFkZXIgZGl2IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIG1haW4gKi9cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNXJlbSwgMWZyKSA1ZnI7XFxufVxcblxcbi8qIGNvbnRyb2wgcGFuZWwgKi9cXG5Aa2V5ZnJhbWVzIHNsaWRlLWluIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxufVxcblxcbi5zbGlkZS1pbiB7XFxuICBhbmltYXRpb246IHNsaWRlLWluIDAuNzVzIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNsaWRlLW91dCB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgfVxcbn1cXG5cXG4uc2xpZGUtb3V0IHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtb3V0IDAuNzVzIGZvcndhcmRzO1xcbn1cXG5cXG4jY29udHJvbC1wYW5lbC1jb250YWluZXIge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMik7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIHotaW5kZXg6IDEwO1xcbn1cXG5cXG4jY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIGltZzpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG4jY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lciBpbWc6YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4uY29udHJvbC1pbnB1dCB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5idXR0b24uY29udHJvbC1pbnB1dCB7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ici1zbSk7XFxuICBwYWRkaW5nLXRvcDogMC4yNXJlbTtcXG59XFxuYnV0dG9uLmNvbnRyb2wtaW5wdXQ6aG92ZXIge1xcbiAgc2NhbGU6IDEuMDI1O1xcbn1cXG5idXR0b24uY29udHJvbC1pbnB1dDphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi5jb250cm9sLWlucHV0LWdyb3VwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uY29udHJvbC1pbnB1dC1ncm91cCAuY29udHJvbC1pbnB1dC1sYWJlbCB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1zbSk7XFxufVxcbi5jb250cm9sLWlucHV0LWxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4vKiBncmlkICovXFxuI2NhbnZhcy1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWF4LWNvbnRlbnQgMWZyO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGdyaWQtY29sdW1uOiAxLy0xO1xcbiAgei1pbmRleDogMDtcXG59XFxuXFxuI2NhbnZhcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEpO1xcbiAgYm9yZGVyLWxlZnQ6IHZhcigtLWNhbnZhcy1ib3JkZXJzKTtcXG4gIGJvcmRlci10b3A6IHZhcigtLWNhbnZhcy1ib3JkZXJzKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBoZWlnaHQ6IDcwdmg7XFxuICBhc3BlY3QtcmF0aW86IDE7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRyb2wtaWNvbiB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyLW1kKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogNHJlbTtcXG5cXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLXNtKTtcXG59XFxuI2NvbnRyb2wtaWNvbjpob3ZlciB7XFxuICBzY2FsZTogMS4xO1xcbn1cXG4jY29udHJvbC1pY29uOmFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuLmNhbnZhcy1zcXVhcmUge1xcbiAgYm9yZGVyLXJpZ2h0OiB2YXIoLS1jYW52YXMtYm9yZGVycyk7XFxuICBib3JkZXItYm90dG9tOiB2YXIoLS1jYW52YXMtYm9yZGVycyk7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLm5vLWJvcmRlcnMge1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZnVsbC1ib3JkZXJzIHtcXG4gIGJvcmRlcjogdmFyKC0tY2FudmFzLWJvcmRlcnMpO1xcbn1cXG5cXG4uY2FudmFzLXNxdWFyZTpob3ZlciB7XFxuICBzY2FsZTogMS4wMTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMC4zcmVtIGJsYWNrO1xcbn1cXG4uY2FudmFzLXNxdWFyZTphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcbi8qIGZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTUpO1xcbiAgZm9udC1zaXplOiB2YXIoLS1mb290ZXItZm9udC1zaXplKTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWZvb3Rlci1mb250LXNpemUpIC0gMC4xcmVtKTtcXG59XFxuZm9vdGVyIGEge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpblNwYWNlKTtcXG59XFxuXFxuQGtleWZyYW1lcyBnaXRodWItaG92ZXItaW4ge1xcbiAgZnJvbSB7XFxuICAgIHJvdGF0ZTogMGRlZztcXG4gICAgc2NhbGU6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIHJvdGF0ZTogNzIwZGVnO1xcbiAgICBzY2FsZTogMS4yO1xcbiAgfVxcbn1cXG4uZ2l0aHViLWhvdmVyLWluIHtcXG4gIGFuaW1hdGlvbjogZ2l0aHViLWhvdmVyLWluIDFzIGZvcndhcmRzO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdpdGh1Yi1ob3Zlci1vdXQge1xcbiAgZnJvbSB7XFxuICAgIHJvdGF0ZTogNzIwZGVnO1xcbiAgICBzY2FsZTogMS4yO1xcbiAgfVxcbiAgdG8ge1xcbiAgICByb3RhdGU6IDBkZWc7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbn1cXG4uZ2l0aHViLWhvdmVyLW91dCB7XFxuICBhbmltYXRpb246IGdpdGh1Yi1ob3Zlci1vdXQgMXMgZm9yd2FyZHM7XFxufVxcblxcbmZvb3RlciBpbWc6YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4jdG9wLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogdmFyKC0tbGlua3MpO1xcbn1cXG5cXG4jdG9wLWxpbms6dmlzaXRlZCB7XFxuICBjb2xvcjogdmFyKC0tbGlua3MpO1xcbn1cXG5cXG4vKiB1dGlsaXR5IGNsYXNzZXMgKi9cXG4ucmVtb3ZlZCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLyogbWVkaWEgcXVlcmllcyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICAjY2FudmFzIHtcXG4gICAgaGVpZ2h0OiA3MHZ3O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3Rlci9Gb290ZXJcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiYXBwXCIsXG4gIH0pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKE1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiY29uc3QgQ2FudmFzID0gKCkgPT4ge1xuICBjb25zdCBjYW52YXMgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogXCJjYW52YXNcIixcbiAgfSk7XG4gIHJldHVybiBjYW52YXM7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW52YXM7XG4iLCJpbXBvcnQgQ29udHJvbEljb24gZnJvbSBcIi4vQ29udHJvbEljb24vQ29udHJvbEljb25cIjtcbmltcG9ydCBDYW52YXMgZnJvbSBcIi4vQ2FudmFzXCI7XG5cbmNvbnN0IENhbnZhc0NvbnRhaW5lciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiY2FudmFzLWNvbnRhaW5lclwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoQ29udHJvbEljb24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChDYW52YXMoKSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhc0NvbnRhaW5lcjtcbiIsImltcG9ydCBjYW52YXMgZnJvbSBcIi4uLy4uL2xvZ2ljL0NhbnZhc01hbmFnZXJcIjtcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vLi4vbG9naWMvU3RhdGVNYW5hZ2VyXCI7XG5cbmNvbnN0IENhbnZhc1NxdWFyZSA9IChpZE51bSkgPT4ge1xuICBjb25zdCBzcXVhcmUgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogYGNhbnZhcy1zcXVhcmUtJHtpZE51bX1gLFxuICAgIGNsYXNzTmFtZTogXCJjYW52YXMtc3F1YXJlXCIsXG4gICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICBvbm1vdXNlZG93bjogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNhbnZhcy5wYWludENhbnZhc1NxdWFyZShlKTtcbiAgICB9LFxuICAgIG9udG91Y2hzdGFydDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNhbnZhcy5wYWludENhbnZhc1NxdWFyZShlKTtcbiAgICB9LFxuXG4gICAgb25tb3VzZW92ZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjYW52YXMucGFpbnRDYW52YXNTcXVhcmUoZSk7XG4gICAgfSxcbiAgICBvbnRvdWNobW92ZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNhbnZhcy5wYWludENhbnZhc1NxdWFyZShlKTtcbiAgICB9LFxuICB9KTtcbiAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHN0YXRlLmdldENhbnZhc0JhY2tncm91bmRDb2xvcigpO1xuICByZXR1cm4gc3F1YXJlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzU3F1YXJlO1xuIiwiaW1wb3J0IENvbnRyb2xJY29uUGF0aCBmcm9tIFwiLi9pY29ucy9jb250cm9scy5wbmdcIjtcblxuY29uc3QgQ29udHJvbEljb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWljb24tY29udGFpbmVyXCIsXG4gIH0pO1xuICBjb25zdCBpY29uID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLCB7XG4gICAgaWQ6IFwiY29udHJvbC1pY29uXCIsXG4gICAgc3JjOiBDb250cm9sSWNvblBhdGgsXG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sSWNvbjtcbiIsIi8vQ29tcG9uZW50IGltcG9ydHNcbmltcG9ydCBFeGl0RGl2IGZyb20gXCIuL2NvbnRyb2xzL0V4aXREaXYvRXhpdERpdlwiO1xuXG5pbXBvcnQgUGFpbnRDb2xvclBpY2tlciBmcm9tIFwiLi9jb250cm9scy9jb2xvci1waWNrZXJzL1BhaW50Q29sb3JQaWNrZXJcIjtcbmltcG9ydCBDYW52YXNDb2xvclBpY2tlciBmcm9tIFwiLi9jb250cm9scy9jb2xvci1waWNrZXJzL0NhbnZhc0NvbG9yUGlja2VyXCI7XG5cbmltcG9ydCBFcmFzZUJydXNoQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xzL2J1dHRvbnMvRXJhc2VCcnVzaEJ1dHRvblwiO1xuaW1wb3J0IEVyYXNlQ2FudmFzQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xzL2J1dHRvbnMvRXJhc2VDYW52YXNCdXR0b25cIjtcbmltcG9ydCBUb2dnbGVHcmlkbGluZXNCdXR0b24gZnJvbSBcIi4vY29udHJvbHMvYnV0dG9ucy9Ub2dnbGVHcmlkbGluZXNCdXR0b25cIjtcbmltcG9ydCBSYWluYm93TW9kZUJ1dHRvbiBmcm9tIFwiLi9jb250cm9scy9idXR0b25zL1JhaW5ib3dNb2RlQnV0dG9uXCI7XG5pbXBvcnQgU2hhZGVNb2RlQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xzL2J1dHRvbnMvU2hhZGVNb2RlQnV0dG9uXCI7XG5cbmltcG9ydCBHcmlkU2l6ZVNlbGVjdG9yIGZyb20gXCIuL2NvbnRyb2xzL0dyaWRTaXplU2VsZWN0b3JcIjtcblxuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vbG9naWMvYXBwQ29uZmlnXCI7XG5cbmNvbnN0IENvbnRyb2xQYW5lbCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiY29udHJvbC1wYW5lbC1jb250YWluZXJcIixcbiAgICBcImRhdGEtaXNWaXNpYmxlXCI6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChFeGl0RGl2KCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoUGFpbnRDb2xvclBpY2tlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKENhbnZhc0NvbG9yUGlja2VyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoRXJhc2VCcnVzaEJ1dHRvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKEVyYXNlQ2FudmFzQnV0dG9uKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoVG9nZ2xlR3JpZGxpbmVzQnV0dG9uKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoUmFpbmJvd01vZGVCdXR0b24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChTaGFkZU1vZGVCdXR0b24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChHcmlkU2l6ZVNlbGVjdG9yKCkpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sUGFuZWw7XG4iLCJpbXBvcnQgSGlkZUljb24gZnJvbSBcIi4vaWNvbnMvZXllLWhpZGUucG5nXCI7XG5cbmNvbnN0IEV4aXREaXYgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlkOiBcImNvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXJcIixcbiAgfSk7XG5cbiAgY29uc3QgaWNvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSwge1xuICAgIGlkOiBcImhpZGUtY29udHJvbC1wYW5lbC1pY29uXCIsXG4gICAgc3JjOiBIaWRlSWNvbixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeGl0RGl2O1xuIiwiaW1wb3J0IFJhbmdlIGZyb20gXCIuLi8uLi9iYXNpYy1lbGVtZW50cy9SYW5nZVwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vbG9naWMvYXBwQ29uZmlnXCI7XG5cbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vLi4vLi4vbG9naWMvU3RhdGVNYW5hZ2VyXCI7XG5pbXBvcnQgY29udHJvbE1hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL0NvbnRyb2xNYW5hZ2VyXCI7XG5cbmNvbnN0IEdyaWRTaXplU2VsZWN0b3IgPSAoKSA9PiB7XG4gIGxldCBjdXJyZW50R3JpZFNpemUgPSBzdGF0ZS5nZXRHcmlkU2l6ZSgpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0LWdyb3VwXCIgfSlcbiAgKTtcblxuICBjb25zdCByYW5nZSA9IE9iamVjdC5hc3NpZ24oUmFuZ2UoKSwge1xuICAgIGlkOiBcImdyaWQtc2l6ZS1zZWxlY3RvclwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gICAgbWluOiBjb25maWcuZ3JpZE1pbixcbiAgICBtYXg6IGNvbmZpZy5ncmlkTWF4LFxuICAgIHZhbHVlOiBzdGF0ZS5nZXRHcmlkU2l6ZSgpLFxuICAgIG9uaW5wdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb250cm9sTWFuYWdlci5zZXRHcmlkU2l6ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgbGFiZWwgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogXCJncmlkLXNpemUtc2VsZWN0b3ItbGFiZWxcIixcbiAgICBpbm5lclRleHQ6IGBHcmlkIHNpemU6ICR7Y3VycmVudEdyaWRTaXplfSB4ICR7Y3VycmVudEdyaWRTaXplfWAsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtbGFiZWxcIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhbmdlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZFNpemVTZWxlY3RvcjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuaW1wb3J0IGNvbnRyb2xzIGZyb20gXCIuLi8uLi8uLi8uLi9sb2dpYy9Db250cm9sTWFuYWdlclwiO1xuXG5jb25zdCBFcmFzZUJydXNoQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJlcmFzZS1icnVzaC1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiRXJhc2VcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICAgIG9uY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRyb2xzLnNldFBhaW50Q29sb3JUb0VyYXNlKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVyYXNlQnJ1c2hCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9iYXNpYy1lbGVtZW50cy9CdXR0b25cIjtcbmltcG9ydCBjb250cm9scyBmcm9tIFwiLi4vLi4vLi4vLi4vbG9naWMvQ2FudmFzTWFuYWdlclwiO1xuXG5jb25zdCBFcmFzZUNhbnZhc0J1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcImVyYXNlLWdyaWQtYnV0dG9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIkVyYXNlIGdyaWRcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICAgIG9uY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRyb2xzLnJlc2V0Q2FudmFzKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVyYXNlQ2FudmFzQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQnV0dG9uXCI7XG5cbmNvbnN0IFJhaW5ib3dNb2RlQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICBjb25zdCBidXR0b24gPSBPYmplY3QuYXNzaWduKEJ1dHRvbigpLCB7XG4gICAgaWQ6IFwicmFpbmJvdy1tb2RlLWJ1dHRvblwiLFxuICAgIGlubmVyVGV4dDogXCJSYWluYm93IG1vZGVcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dCBtb2RlLWJ1dHRvblwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmFpbmJvd01vZGVCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9iYXNpYy1lbGVtZW50cy9CdXR0b25cIjtcblxuY29uc3QgU2hhZGVNb2RlQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICBjb25zdCBidXR0b24gPSBPYmplY3QuYXNzaWduKEJ1dHRvbigpLCB7XG4gICAgaWQ6IFwic2hhZGUtbW9kZS1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiU2hhZGUgbW9kZVwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0IG1vZGUtYnV0dG9uXCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaGFkZU1vZGVCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9iYXNpYy1lbGVtZW50cy9CdXR0b25cIjtcbmltcG9ydCBjb250cm9scyBmcm9tIFwiLi4vLi4vLi4vLi4vbG9naWMvQ29udHJvbE1hbmFnZXJcIjtcblxuY29uc3QgVG9nZ2xlR3JpZGxpbmVzQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICBjb25zdCBidXR0b24gPSBPYmplY3QuYXNzaWduKEJ1dHRvbigpLCB7XG4gICAgaWQ6IFwidG9nZ2xlLWdyaWRsaW5lcy1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiVG9nZ2xlIGdyaWRsaW5lc1wiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgY29udHJvbHMudG9nZ2xlR3JpZGxpbmVzKCk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUdyaWRsaW5lc0J1dHRvbjtcbiIsImltcG9ydCBDb2xvclBpY2tlciBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQ29sb3JQaWNrZXJcIjtcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vbG9naWMvU3RhdGVNYW5hZ2VyXCI7XG5pbXBvcnQgY29udHJvbHMgZnJvbSBcIi4uLy4uLy4uLy4uL2xvZ2ljL0NvbnRyb2xNYW5hZ2VyXCI7XG5cbmNvbnN0IENhbnZhc0NvbG9yUGlja2VyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1ncm91cFwiLFxuICB9KTtcbiAgY29uc3QgY29sb3JQaWNrZXIgPSBPYmplY3QuYXNzaWduKENvbG9yUGlja2VyKCksIHtcbiAgICBpZDogXCJjYW52YXMtY29sb3ItcGlja2VyXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgICB2YWx1ZTogc3RhdGUuZ2V0Q2FudmFzQmFja2dyb3VuZENvbG9yKCksXG4gICAgb25pbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnRyb2xzLnNldENhbnZhc0NvbG9yKGUpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaW5uZXJUZXh0OiBcIlNlbGVjdCBjYW52YXMgY29sb3JcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1sYWJlbFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW52YXNDb2xvclBpY2tlcjtcbiIsImltcG9ydCBDb2xvclBpY2tlciBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQ29sb3JQaWNrZXJcIjtcbmltcG9ydCBjb250cm9scyBmcm9tIFwiLi4vLi4vLi4vLi4vbG9naWMvQ29udHJvbE1hbmFnZXJcIjtcblxuY29uc3QgUGFpbnRDb2xvclBpY2tlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtZ3JvdXBcIixcbiAgfSk7XG5cbiAgY29uc3QgY29sb3JQaWNrZXIgPSBPYmplY3QuYXNzaWduKENvbG9yUGlja2VyKCksIHtcbiAgICBpZDogXCJwYWludC1jb2xvci1waWNrZXJcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICAgIG9uaW5wdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb250cm9scy5zZXRQYWludENvbG9yKGUpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaW5uZXJUZXh0OiBcIlNlbGVjdCBwYWludCBjb2xvclwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0LWxhYmVsXCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvclBpY2tlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhaW50Q29sb3JQaWNrZXI7XG4iLCJpbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiLi9sb2dvcy9naXRodWItbWFyay13aGl0ZS5wbmdcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiksIHt9KTtcblxuICBjb25zdCBjb3B5cmlnaHRDb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29weXJpZ2h0LWNvbnRhaW5lclwiLFxuICAgIGlubmVyVGV4dDogYMKpIENhcmxpbiBNaXRjaGVsbCAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gLFxuICB9KTtcblxuICBjb25zdCB0b3BDb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwidG9wLWF0dHJpYnV0aW9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIkluc3BpcmVkIGJ5XCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRvcExpbmsgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLCB7XG4gICAgaWQ6IFwidG9wLWxpbmtcIixcbiAgICBpbm5lclRleHQ6IFwiVGhlIE9kaW4gUHJvamVjdFwiLFxuICAgIGhyZWY6IFwiaHR0cHM6Ly93d3cudGhlb2RpbnByb2plY3QuY29tL1wiLFxuICB9KTtcblxuICBjb25zdCBnaXRodWJMaW5rID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSwge1xuICAgIGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL2Nhcmxpbi1taXRjaGVsbC9ldGNoLWEtc2tldGNoLXdlYnBhY2stVE9QXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGdpdGh1Ykljb24gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiksIHtcbiAgICBzcmM6IEdpdEh1Ykljb24sXG4gICAgY2xhc3NOYW1lOiBcImdpdGh1Yi1pY29uXCIsXG4gIH0pO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZChjb3B5cmlnaHRDb250YWluZXIpO1xuICBjb3B5cmlnaHRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2l0aHViTGluayk7XG4gIGdpdGh1YkxpbmsuYXBwZW5kQ2hpbGQoZ2l0aHViSWNvbik7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKHRvcENvbnRhaW5lcik7XG4gIHRvcENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b3BMaW5rKTtcblxuICByZXR1cm4gZm9vdGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwge30pKTtcblxuICBjb25zdCB0aXRsZSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlubmVyVGV4dDogXCJQaXhlbCBBcnRpc3RcIixcbiAgfSk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsXCI7XG5pbXBvcnQgQ2FudmFzQ29udGFpbmVyIGZyb20gXCIuL0NhbnZhc1NlY3Rpb24vQ2FudmFzQ29udGFpbmVyXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLCB7fSk7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5pZCA9IFwidGVzdFwiO1xuICBtYWluLmFwcGVuZENoaWxkKENvbnRyb2xQYW5lbCgpKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChDYW52YXNDb250YWluZXIoKSk7XG5cbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiY29uc3QgQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikpO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiY29uc3QgQ29sb3JQaWNrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbG9yUGlja2VyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksIHtcbiAgICB0eXBlOiBcImNvbG9yXCIsXG4gIH0pO1xuICByZXR1cm4gY29sb3JQaWNrZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclBpY2tlcjtcbiIsImNvbnN0IFJhbmdlID0gKCkgPT4ge1xuICBjb25zdCByYW5nZSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLCB7XG4gICAgdHlwZTogXCJyYW5nZVwiLFxuICB9KTtcblxuICByZXR1cm4gcmFuZ2U7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYW5nZTtcbiIsImltcG9ydCBjb25maWcgZnJvbSBcIi4vYXBwQ29uZmlnXCI7XG5cbmNvbnN0IEFuaW1hdGlvbk1hbmFnZXIgPSAoKCkgPT4ge1xuICBmdW5jdGlvbiBhcHBseUFuaW1hdGlvbnMoKSB7XG4gICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdpdGh1Yi1pY29uXCIpLCB7XG4gICAgICBvbm1vdXNlb3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJnaXRodWItaG92ZXItb3V0XCIpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJnaXRodWItaG92ZXItaW5cIik7XG4gICAgICB9LFxuICAgICAgb25tb3VzZW91dDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJnaXRodWItaG92ZXItaW5cIik7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImdpdGh1Yi1ob3Zlci1vdXRcIik7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gY29udHJvbC1wYW5lbFxuICAgIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJvbC1wYW5lbC1jb250YWluZXJcIik7XG4gICAgY29uc3Qgc2xpZGVJbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJvbC1wYW5lbC1jb250YWluZXJcIik7XG4gICAgICBjb250cm9sUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLW91dFwiKTtcbiAgICAgIGNvbnRyb2xQYW5lbC5jbGFzc0xpc3QuYWRkKFwic2xpZGUtaW5cIik7XG4gICAgICBjb250cm9sUGFuZWxbXCJkYXRhLWlzVmlzaWJsZVwiXSA9IHRydWU7XG4gICAgfTtcbiAgICBjb25zdCBzbGlkZU91dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGNvbnN0IGNvbnRyb2xQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJvbC1wYW5lbC1jb250YWluZXJcIik7XG4gICAgICBjb250cm9sUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlLWluXCIpO1xuICAgICAgY29udHJvbFBhbmVsLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1vdXRcIik7XG4gICAgICBjb250cm9sUGFuZWxbXCJkYXRhLWlzVmlzaWJsZVwiXSA9IGZhbHNlO1xuICAgIH07XG5cbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udHJvbC1pY29uXCIpLCB7XG4gICAgICBvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNsaWRlSW4oKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgT2JqZWN0LmFzc2lnbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hpZGUtY29udHJvbC1wYW5lbC1pY29uXCIpLCB7XG4gICAgICBvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNsaWRlT3V0KCk7XG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgd2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnN0IHsgaW5uZXJXaWR0aCB9ID0gZS50YXJnZXQ7XG4gICAgICBpZiAoaW5uZXJXaWR0aCA8PSBjb25maWcuY29udHJvbFBhbmVsQW5pbWF0aW9uVHJpZ2dlcldpZHRoKSB7XG4gICAgICAgIHNsaWRlT3V0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWNvbnRyb2xQYW5lbFtcImRhdGEtaXNWaXNpYmxlXCJdKSB7XG4gICAgICAgICAgc2xpZGVJbigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICByZXR1cm4geyBhcHBseUFuaW1hdGlvbnMgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbk1hbmFnZXI7XG4iLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vU3RhdGVNYW5hZ2VyXCI7XG5pbXBvcnQgeyBoZXhUb1JnYlN0ciwgc2V0RWxlbWVudHNCZ0NvbG9yIH0gZnJvbSBcIi4vdXRpbGl0aWVzXCI7XG5cbmltcG9ydCBDYW52YXNTcXVhcmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FudmFzU2VjdGlvbi9DYW52YXNTcXVhcmVcIjtcblxuY29uc3QgQ2FudmFzTWFuYWdlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGNsZWFyR3JpZCgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbnZhc1wiKTtcbiAgICB3aGlsZSAoY2FudmFzLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNhbnZhcy5yZW1vdmVDaGlsZChjYW52YXMuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcGFpbnRDYW52YXNTcXVhcmUoZSkge1xuICAgIGlmIChcbiAgICAgIGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIiB8fFxuICAgICAgZS50eXBlID09PSBcInRvdWNoc3RhcnRcIiB8fFxuICAgICAgc3RhdGUuZ2V0TGVmdE1vdXNlQnV0dG9uRG93bigpXG4gICAgKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBlLnRhcmdldDtcbiAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzdGF0ZS5nZXRQYWludENvbG9yKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRDYW52YXMoKSB7XG4gICAgY29uc3QgY2FudmFzU3F1YXJlcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhbnZhcy1zcXVhcmVcIildO1xuXG4gICAgc2V0RWxlbWVudHNCZ0NvbG9yKFxuICAgICAgY2FudmFzU3F1YXJlcyxcbiAgICAgIGhleFRvUmdiU3RyKHN0YXRlLmdldENhbnZhc0JhY2tncm91bmRDb2xvcigpKVxuICAgICk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVHcmlkbGluZXMoKSB7XG4gICAgY29uc3QgY2FudmFzU3F1YXJlcyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhbnZhcy1zcXVhcmVcIildO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzXCIpO1xuXG4gICAgaWYgKHN0YXRlLmdldEdyaWRsaW5lc1RvZ2dsZWRPbigpKSB7XG4gICAgICBjYW52YXMuY2xhc3NMaXN0LmFkZChcImZ1bGwtYm9yZGVyc1wiKTtcbiAgICAgIGNhbnZhc1NxdWFyZXMuZm9yRWFjaCgoc3F1YXJlKSA9PiBzcXVhcmUuY2xhc3NMaXN0LmFkZChcIm5vLWJvcmRlcnNcIikpO1xuICAgICAgc3RhdGUuc2V0R3JpZGxpbmVzVG9nZ2xlT24oZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZS5zZXRHcmlkbGluZXNUb2dnbGVPbih0cnVlKTtcbiAgICAgIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwiZnVsbC1ib3JkZXJzXCIpO1xuICAgICAgY2FudmFzU3F1YXJlcy5mb3JFYWNoKChzcXVhcmUpID0+IHNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKFwibm8tYm9yZGVyc1wiKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlR3JpZFNpemUoKSB7XG4gICAgY29uc3QgZ3JpZFNpemUgPSBzdGF0ZS5nZXRHcmlkU2l6ZSgpO1xuICAgIGNvbnN0IHRvdGFsU3F1YXJlcyA9IGdyaWRTaXplICoqIDI7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW52YXNcIik7XG5cbiAgICAvLyBjbGVhciB0aGUgZ2lyZCBhbmQgZW5zdXJlIHRoYXQgZ3JpZGxpbmVzIGFyZSB0b2dnbGVkIG9uXG4gICAgY2xlYXJHcmlkKCk7XG4gICAgaWYgKHN0YXRlLmdldEdyaWRsaW5lc1RvZ2dsZWRPbigpID09PSBmYWxzZSkge1xuICAgICAgdG9nZ2xlR3JpZGxpbmVzKCk7XG4gICAgfVxuXG4gICAgY2FudmFzLnN0eWxlW1wiZ3JpZC10ZW1wbGF0ZS1yb3dzXCJdID0gYHJlcGVhdCgke2dyaWRTaXplfSwgMWZyKWA7XG4gICAgY2FudmFzLnN0eWxlW1wiZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zXCJdID0gYHJlcGVhdCgke2dyaWRTaXplfSwgMWZyKWA7XG5cbiAgICBmb3IgKGxldCBpZE51bSA9IDE7IGlkTnVtIDw9IHRvdGFsU3F1YXJlczsgaWROdW0rKykge1xuICAgICAgY29uc3Qgc3F1YXJlID0gQ2FudmFzU3F1YXJlKGlkTnVtKTtcbiAgICAgIGNhbnZhcy5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHVwZGF0ZUdyaWRTaXplLCBwYWludENhbnZhc1NxdWFyZSwgcmVzZXRDYW52YXMsIHRvZ2dsZUdyaWRsaW5lcyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzTWFuYWdlcjtcbiIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vbG9naWMvU3RhdGVNYW5hZ2VyXCI7XG5pbXBvcnQgY2FudmFzIGZyb20gXCIuLi9sb2dpYy9DYW52YXNNYW5hZ2VyXCI7XG5cbmNvbnN0IENvbnRyb2xNYW5hZ2VyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gc2V0R3JpZFNpemUodmFsdWUpIHtcbiAgICBjb25zdCBncmlkU2l6ZVNlbGVjdG9yTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjZ3JpZC1zaXplLXNlbGVjdG9yLWxhYmVsXCJcbiAgICApO1xuICAgIHN0YXRlLnNldEdyaWRTaXplKHZhbHVlKTtcbiAgICBncmlkU2l6ZVNlbGVjdG9yTGFiZWwuaW5uZXJUZXh0ID0gYEdyaWQgc2l6ZTogJHtzdGF0ZS5nZXRHcmlkU2l6ZSgpfSB4ICR7c3RhdGUuZ2V0R3JpZFNpemUoKX1gO1xuICAgIGNhbnZhcy51cGRhdGVHcmlkU2l6ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UGFpbnRDb2xvcihlKSB7XG4gICAgY29uc3QgY29sb3IgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzdGF0ZS5zZXRQYWludENvbG9yKGNvbG9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVyYXNlR3JpZCgpIHtcbiAgICBjYW52YXMucmVzZXRDYW52YXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldFBhaW50Q29sb3JUb0VyYXNlKCkge1xuICAgIHN0YXRlLnNldFBhaW50Q29sb3Ioc3RhdGUuZ2V0Q2FudmFzQmFja2dyb3VuZENvbG9yKCkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFpbnQtY29sb3ItcGlja2VyXCIpLnZhbHVlID0gc3RhdGUuZ2V0UGFpbnRDb2xvcigpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0Q2FudmFzQ29sb3IoZSkge1xuICAgIGNvbnN0IGNvbG9yID0gZS50YXJnZXQudmFsdWU7XG4gICAgc3RhdGUuc2V0Q2FudmFzQmFja2dyb3VuZENvbG9yKGNvbG9yKTtcbiAgICBjYW52YXMucmVzZXRDYW52YXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZUdyaWRsaW5lcygpIHtcbiAgICBjYW52YXMudG9nZ2xlR3JpZGxpbmVzKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHNldEdyaWRTaXplLFxuICAgIHNldFBhaW50Q29sb3IsXG4gICAgZXJhc2VHcmlkLFxuICAgIHNldENhbnZhc0NvbG9yLFxuICAgIHNldFBhaW50Q29sb3JUb0VyYXNlLFxuICAgIHRvZ2dsZUdyaWRsaW5lcyxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xNYW5hZ2VyO1xuIiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9hcHBDb25maWdcIjtcblxuY29uc3QgU3RhdGVNYW5hZ2VyID0gKCgpID0+IHtcbiAgbGV0IGdyaWRTaXplID0gY29uZmlnLnN0YXJ0aW5nR3JpZFNpemU7XG4gIGNvbnN0IGdldEdyaWRTaXplID0gKCkgPT4gZ3JpZFNpemU7XG4gIGNvbnN0IHNldEdyaWRTaXplID0gKHZhbHVlKSA9PiAoZ3JpZFNpemUgPSB2YWx1ZSk7XG5cbiAgbGV0IGNhbnZhc0JhY2tncm91bmRDb2xvciA9IFwiI2YyZjJmMlwiO1xuICBjb25zdCBnZXRDYW52YXNCYWNrZ3JvdW5kQ29sb3IgPSAoKSA9PiBjYW52YXNCYWNrZ3JvdW5kQ29sb3I7XG4gIGNvbnN0IHNldENhbnZhc0JhY2tncm91bmRDb2xvciA9IChjb2xvcikgPT4gKGNhbnZhc0JhY2tncm91bmRDb2xvciA9IGNvbG9yKTtcblxuICBsZXQgcGFpbnRDb2xvciA9IFwiIzAwMFwiO1xuICBjb25zdCBnZXRQYWludENvbG9yID0gKCkgPT4gcGFpbnRDb2xvcjtcbiAgY29uc3Qgc2V0UGFpbnRDb2xvciA9IChjb2xvcikgPT4gKHBhaW50Q29sb3IgPSBjb2xvcik7XG5cbiAgbGV0IGxlZnRNb3VzZUJ1dHRvbkRvd24gPSBmYWxzZTtcbiAgY29uc3QgZ2V0TGVmdE1vdXNlQnV0dG9uRG93biA9ICgpID0+IGxlZnRNb3VzZUJ1dHRvbkRvd247XG4gIGNvbnN0IHNldExlZnRNb3VzZUJ1dHRvbkRvd24gPSAodmFsdWUpID0+IChsZWZ0TW91c2VCdXR0b25Eb3duID0gdmFsdWUpO1xuXG4gIGxldCBncmlkbGluZXNUb2dnbGVkT24gPSB0cnVlO1xuICAvLyBjb25zb2xlLmxvZyhncmlkbGluZXNUb2dnbGVkT24pO1xuICBjb25zdCBnZXRHcmlkbGluZXNUb2dnbGVkT24gPSAoKSA9PiBncmlkbGluZXNUb2dnbGVkT247XG4gIGNvbnN0IHNldEdyaWRsaW5lc1RvZ2dsZU9uID0gKHZhbHVlKSA9PiAoZ3JpZGxpbmVzVG9nZ2xlZE9uID0gdmFsdWUpO1xuXG4gIHJldHVybiB7XG4gICAgZ2V0TGVmdE1vdXNlQnV0dG9uRG93bixcbiAgICBzZXRMZWZ0TW91c2VCdXR0b25Eb3duLFxuXG4gICAgZ2V0R3JpZFNpemUsXG4gICAgc2V0R3JpZFNpemUsXG5cbiAgICBnZXRDYW52YXNCYWNrZ3JvdW5kQ29sb3IsXG4gICAgc2V0Q2FudmFzQmFja2dyb3VuZENvbG9yLFxuXG4gICAgc2V0UGFpbnRDb2xvcixcbiAgICBnZXRQYWludENvbG9yLFxuXG4gICAgZ2V0R3JpZGxpbmVzVG9nZ2xlZE9uLFxuICAgIHNldEdyaWRsaW5lc1RvZ2dsZU9uLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgU3RhdGVNYW5hZ2VyO1xuIiwiY29uc3QgY29uZmlnID0ge1xuICBncmlkTWluOiAxLFxuICBncmlkTWF4OiB3aW5kb3cuaW5uZXJXaWR0aCA8PSA4MDAgPyAzMiA6IDY0LFxuICBzdGFydGluZ0dyaWRTaXplOiAxNixcbiAgY29udHJvbFBhbmVsQW5pbWF0aW9uVHJpZ2dlcldpZHRoOiAxMTUwLFxuICBzdGFydGluZ1dpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiIsIi8vIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBFWFBPUlRFRCBVVElMUyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYlN0cihoZXgpIHtcbiAgaWYgKGhleC5sZW5ndGggPT09IDQpIHtcbiAgICBoZXggPSBzaG9ydEhleFRvRnVsbEhleChoZXgpO1xuICB9XG5cbiAgY29uc3QgciA9IHBhcnNlSW50KGhleC5zbGljZSgxLCAzKSwgMTYpO1xuICBjb25zdCBnID0gcGFyc2VJbnQoaGV4LnNsaWNlKDMsIDUpLCAxNik7XG4gIGNvbnN0IGIgPSBwYXJzZUludChoZXguc2xpY2UoNSwgNyksIDE2KTtcblxuICByZXR1cm4gZ2V0UmdiU3RyRnJvbVZhbHVlcyhyLCBnLCBiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJnYlN0ckZyb21WYWx1ZXMociwgZywgYikge1xuICByZXR1cm4gYHJnYigke3J9LCAke2d9LCAke2J9KWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21SZ2JTdHIoKSB7XG4gIGNvbnN0IFtyYW5kUmVkLCByYW5kR3JlZW4sIHJhbmRCbHVlXSA9IEFycmF5KDMpXG4gICAgLmZpbGwoKVxuICAgIC5tYXAoKGVsZW0pID0+IGdldFJhbmRJbnQoMCwgMjU2KSk7XG4gIHJldHVybiBnZXRSZ2JTdHJGcm9tVmFsdWVzKHJhbmRSZWQsIHJhbmRHcmVlbiwgcmFuZEJsdWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VmFsdWVzRnJvbVJnYlN0cihyZ2JTdHIpIHtcbiAgY29uc3QgW3IsIGcsIGJdID0gcmdiU3RyLm1hdGNoKC9cXGR7MSwzfS9nKTtcbiAgcmV0dXJuIHsgcjogK3IsIGc6ICtnLCBiOiArYiB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiU3RyVG9GdWxsSGV4KHJnYlN0cikge1xuICBjb25zdCB7IHIsIGcsIGIgfSA9IGdldFZhbHVlc0Zyb21SZ2JTdHIocmdiU3RyKTtcbiAgY29uc3QgW2hleFIsIGhleEcsIGhleEJdID0gW3IsIGcsIGJdLm1hcCgodmFsKSA9PiB2YWx1ZVRvUGFkZGVkSGV4KHZhbCkpO1xuICByZXR1cm4gYCMke2hleFJ9JHtoZXhHfSR7aGV4Qn1gO1xufVxuXG4vKipcbiAqVGFrZXMgYSBzaW5nbGUgZG9tIGVsZW1lbnQgb3IgYXJyYXkgb2YgZWxlbWVudHNcbiAqYW5kIGFwcGxpZXMgdGhlIHNwZWNpZmllZCBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZW1cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gZWxlbWVudHNBcnIgYSBzaW5nbGUgZWxlbWVudCBvciBhcnJheSBvZiBlbGVtZW50c1xuICogQHBhcmFtIHtzdHJpbmd9IHJnYkNvbG9yU3RyIGFuIHJnYiBzdHJpbmcgZm9ybWF0dGVkIGFzOiAncmdiKDk5LCAyNTUsIDEpJ1xuICogKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRFbGVtZW50c0JnQ29sb3IoZWxlbWVudHNBcnIsIHJnYkNvbG9yU3RyKSB7XG4gIGlmICh0eXBlb2YgZWxlbWVudHNBcnIgIT09IFwib2JqZWN0XCIpIHJldHVybjtcbiAgaWYgKCFBcnJheS5pc0FycmF5KGVsZW1lbnRzQXJyKSkge1xuICAgIC8vIGlmIGEgc2luZ2xlIGVsZW1lbnQgaXMgZ2l2ZW4sIHB1dCBpdCBpbiBhbiBhcnJheVxuICAgIGVsZW1lbnRzQXJyID0gW2VsZW1lbnRzQXJyXTtcbiAgfVxuICBlbGVtZW50c0Fyci5mb3JFYWNoKFxuICAgIChlbGVtZW50KSA9PiAoZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSByZ2JDb2xvclN0cilcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoYWRlUmdiU3RyQnlGYWN0b3IocmdiU3RyLCBmYWN0b3IpIHtcbiAgY29uc3QgeyByLCBnLCBiIH0gPSBnZXRWYWx1ZXNGcm9tUmdiU3RyKHJnYlN0cik7XG4gIGNvbnN0IFtuZXdSLCBuZXdHLCBuZXdCXSA9IFtyLCBnLCBiXS5tYXAoKHZhbCkgPT4gYXBwbHlGYWN0b3IodmFsKSk7XG5cbiAgZnVuY3Rpb24gYXBwbHlGYWN0b3IodmFsdWUpIHtcbiAgICBsZXQgbmV3VmFsID0gdmFsdWUgKyBmYWN0b3I7XG4gICAgbmV3VmFsID0gbmV3VmFsIDwgMCA/IDAgOiBuZXdWYWw7XG4gICAgbmV3VmFsID0gbmV3VmFsID4gMjU1ID8gMjU1IDogbmV3VmFsO1xuXG4gICAgcmV0dXJuIG5ld1ZhbDtcbiAgfVxuXG4gIGNvbnN0IG5ld1JnYlN0ciA9IGByZ2IoJHtuZXdSfSwgJHtuZXdHfSwgJHtuZXdCfSlgO1xuXG4gIHJldHVybiBuZXdSZ2JTdHI7XG59XG5cbmV4cG9ydCBjb25zdCBhcHBlbmRMb3JlbUxpbmVzID0gKHBhcmVudCwgbnVtTGluZXMpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1MaW5lczsgaSsrKSB7XG4gICAgY29uc3QgbG9yZW0gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICAgIGlubmVyVGV4dDpcbiAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBFYXF1ZSByZXJ1bSBxdWFzaSBuZW1vLCBvZmZpY2lpcyBhc3N1bWVuZGEgZG9sb3JlbXF1ZSBpdXJlIG1vbGVzdGlhZSEgRmFjZXJlIGF0cXVlIG9kaW8gaXBzYSBsYXVkYW50aXVtIG5paGlsIGFsaWFzLCBzaXQgbGliZXJvLiBUZW5ldHVyIHZlbGl0IHZvbHVwdGF0aWJ1cyBxdWFtIVwiLFxuICAgIH0pO1xuICAgIHBhcmVudC5hcHBlbmRDaGlsZChsb3JlbSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlRWxlbWVudHMgPSAoZWxlbWVudHNBcnIpID0+IHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50c0FyciAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHNBcnIpKSB7XG4gICAgLy8gaWYgYSBzaW5nbGUgZWxlbWVudCBpcyBnaXZlbiwgcHV0IGl0IGluIGFuIGFycmF5XG4gICAgZWxlbWVudHNBcnIgPSBbZWxlbWVudHNBcnJdO1xuICB9XG4gIGVsZW1lbnRzQXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZW5hYmxlRWxlbWVudHMgPSAoZWxlbWVudHNBcnIpID0+IHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50c0FyciAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHNBcnIpKSB7XG4gICAgLy8gaWYgYSBzaW5nbGUgZWxlbWVudCBpcyBnaXZlbiwgcHV0IGl0IGluIGFuIGFycmF5XG4gICAgZWxlbWVudHNBcnIgPSBbZWxlbWVudHNBcnJdO1xuICB9XG4gIGVsZW1lbnRzQXJyLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gIH0pO1xufTtcblxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBOT04gRVhQT1JURUQgVVRJTFMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLyoqXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtIHtOdW1iZXJ9IG1heFxuICogQHJldHVybnMgTnVtYmVyXG4gKlxuICogcmV0dXJucyBhbiBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcbiAqL1xuZnVuY3Rpb24gZ2V0UmFuZEludChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG5mdW5jdGlvbiBzaG9ydEhleFRvRnVsbEhleChzaG9ydEhleCkge1xuICBjb25zdCBjaHVuazEgPSBzaG9ydEhleC5zbGljZSgxLCAyKS5yZXBlYXQoMik7XG4gIGNvbnN0IGNodW5rMiA9IHNob3J0SGV4LnNsaWNlKDIsIDMpLnJlcGVhdCgyKTtcbiAgY29uc3QgY2h1bmszID0gc2hvcnRIZXguc2xpY2UoMywgNCkucmVwZWF0KDIpO1xuXG4gIHJldHVybiBcIiNcIiArIGNodW5rMSArIGNodW5rMiArIGNodW5rMztcbn1cblxuZnVuY3Rpb24gdmFsdWVUb1BhZGRlZEhleCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gc3R5bGVzaGVldHNcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5cbi8vIGxvZ2ljIG1hbmFnZXJzXG5pbXBvcnQgQW5pbWF0aW9uTWFuYWdlciBmcm9tIFwiLi9sb2dpYy9BbmltYXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgQ2FudmFzTWFuYWdlciBmcm9tIFwiLi9sb2dpYy9DYW52YXNNYW5hZ2VyXCI7XG5pbXBvcnQgQ29udHJvbE1hbmFnZXIgZnJvbSBcIi4vbG9naWMvQ29udHJvbE1hbmFnZXJcIjtcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi9sb2dpYy9TdGF0ZU1hbmFnZXJcIjtcblxuaW1wb3J0IHsgZGlzYWJsZUVsZW1lbnRzIH0gZnJvbSBcIi4vbG9naWMvdXRpbGl0aWVzXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoQ29udGVudCgpKTtcblxuQW5pbWF0aW9uTWFuYWdlci5hcHBseUFuaW1hdGlvbnMoKTtcbkNhbnZhc01hbmFnZXIudXBkYXRlR3JpZFNpemUoKTtcbkNvbnRyb2xNYW5hZ2VyLnNldEdyaWRTaXplKHN0YXRlLmdldEdyaWRTaXplKCkpO1xuXG53aW5kb3cub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoKSB7XG4gIHN0YXRlLnNldExlZnRNb3VzZUJ1dHRvbkRvd24odHJ1ZSk7XG59O1xuXG53aW5kb3cub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICBzdGF0ZS5zZXRMZWZ0TW91c2VCdXR0b25Eb3duKHRydWUpO1xufTtcblxud2luZG93Lm9ubW91c2V1cCA9IGZ1bmN0aW9uICgpIHtcbiAgc3RhdGUuc2V0TGVmdE1vdXNlQnV0dG9uRG93bihmYWxzZSk7XG59O1xud2luZG93Lm9udG91Y2hlbmQgPSBmdW5jdGlvbiAoKSB7XG4gIHN0YXRlLnNldExlZnRNb3VzZUJ1dHRvbkRvd24oZmFsc2UpO1xufTtcblxuLy8gZGlzYWJsZSBtb2RlIGJ1dHRvbnMgZm9yIG5vd1xuWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kZS1idXR0b25cIildLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgY29uc3QgY3VycmVudFRleHQgPSBlbGVtZW50LmlubmVyVGV4dDtcbiAgZWxlbWVudC5pbm5lclRleHQgPSBjdXJyZW50VGV4dCArIFwiIChjb21pbmcgc29vbilcIjtcbiAgZWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==