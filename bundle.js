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
  border-left: 1px solid black;
  border-top: 1px solid black;
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
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  cursor: pointer;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  /* colors */\n  --gray-5: hsla(0, 0%, 35%, 1);\n  --gray-4: hsla(0, 0%, 50%, 1);\n  --gray-3: hsla(0, 0%, 65%, 1);\n  --gray-2: hsla(0, 0%, 80%, 1);\n  --gray-1: hsla(0, 0%, 95%, 1);\n  --links: #ff3300;\n\n  /* fonts */\n  --footer-font-size: 1.1rem;\n  --header-font-size: 2.5rem;\n\n  /* border radius */\n  --br-sm: 5px;\n  --br-md: 10px;\n  --br-lg: 15px;\n\n  /* spacing */\n  --space-sm: 5px;\n  --space-md: 15px;\n  --space-lg: 25px;\n\n  /* utility */\n  --marginSpace: 0.3rem;\n}\n\n@font-face {\n  font-family: \"SpaceTime\";\n  src: url(\"./global-assets/fonts/spacetime-regular.ttf\");\n}\n\n@font-face {\n  font-family: \"MonoRound\";\n  src: url(\"./global-assets/fonts/Monoround.otf\");\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: MonoRound, sans-serif;\n}\n\n#app {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n/* header */\nheader {\n  background-color: var(--gray-3);\n  font-family: SpaceTime, sans-serif;\n  display: grid;\n  text-align: center;\n  padding: 1rem 0 1.3rem 0;\n}\n\nheader div {\n  font-size: var(--header-font-size);\n}\n\n/* main */\nmain {\n  background-color: var(--gray-1);\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: minmax(15rem, 1fr) 5fr;\n}\n\n/* control panel */\n@keyframes slide-in {\n  from {\n    transform: translateX(-100%);\n    visibility: hidden;\n  }\n  to {\n    transform: translateX(0%);\n    visibility: visible;\n  }\n}\n\n.slide-in {\n  animation: slide-in 0.75s forwards;\n}\n\n@keyframes slide-out {\n  from {\n    transform: translateX(0%);\n    visibility: visible;\n  }\n  to {\n    transform: translateX(-100%);\n    visibility: hidden;\n  }\n}\n\n.slide-out {\n  animation: slide-out 0.75s forwards;\n}\n\n#control-panel-container {\n  visibility: visible;\n  background-color: var(--gray-2);\n  padding: var(--space-lg);\n  font-size: 1.2rem;\n\n  display: grid;\n  justify-content: space-evenly;\n  align-content: space-between;\n  grid-row: 1/2;\n  grid-column: 1/2;\n  z-index: 10;\n}\n\n#control-panel-exit-container {\n  cursor: pointer;\n  text-align: center;\n}\n#control-panel-exit-container img:hover {\n  scale: 1.1;\n}\n#control-panel-exit-container img:active {\n  scale: 1;\n}\n\n.control-input {\n  color: black;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: inherit;\n  width: 100%;\n}\n\nbutton.control-input {\n  border-radius: var(--br-sm);\n  padding-top: 0.25rem;\n}\nbutton.control-input:hover {\n  scale: 1.025;\n}\nbutton.control-input:active {\n  scale: 1;\n}\n\n.control-input-group {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n.control-input-group .control-input-label {\n  margin-top: var(--space-sm);\n}\n.control-input-label {\n  display: block;\n  text-align: center;\n}\n\n/* grid */\n#canvas-container {\n  height: 100%;\n  padding: var(--space-lg);\n\n  display: grid;\n  grid-template-rows: max-content 1fr;\n  grid-row: 1/2;\n  grid-column: 1/-1;\n  z-index: 0;\n}\n\n#canvas {\n  background-color: var(--gray-1);\n  border-left: 1px solid black;\n  border-top: 1px solid black;\n  display: grid;\n  height: 70vh;\n  aspect-ratio: 1;\n  justify-self: center;\n  align-self: center;\n}\n\n#control-icon {\n  border: 3px solid black;\n  border-radius: var(--br-md);\n  cursor: pointer;\n  height: 4rem;\n\n  padding: var(--space-sm);\n}\n#control-icon:hover {\n  scale: 1.1;\n}\n#control-icon:active {\n  scale: 1;\n}\n\n.canvas-square {\n  border-right: 1px solid black;\n  border-bottom: 1px solid black;\n  cursor: pointer;\n}\n\n.canvas-square:hover {\n  scale: 1.01;\n  box-shadow: 0px 0px 0.3rem black;\n}\n.canvas-square:active {\n  scale: 1;\n}\n/* footer */\nfooter {\n  background-color: var(--gray-5);\n  font-size: var(--footer-font-size);\n  padding: 2rem;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-items: center;\n  color: white;\n}\nfooter img {\n  height: calc(var(--footer-font-size) - 0.1rem);\n}\nfooter a {\n  margin-left: var(--marginSpace);\n}\n\n@keyframes github-hover-in {\n  from {\n    rotate: 0deg;\n    scale: 1;\n  }\n  to {\n    rotate: 720deg;\n    scale: 1.2;\n  }\n}\n.github-hover-in {\n  animation: github-hover-in 1s forwards;\n}\n\n@keyframes github-hover-out {\n  from {\n    rotate: 720deg;\n    scale: 1.2;\n  }\n  to {\n    rotate: 0deg;\n    scale: 1;\n  }\n}\n.github-hover-out {\n  animation: github-hover-out 1s forwards;\n}\n\nfooter img:active {\n  scale: 1;\n}\n\n.top-link:visited {\n  color: var(--links);\n}\n\n.top-link:visited {\n  color: var(--links);\n}\n\n/* utility classes */\n.removed {\n  display: none;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\n/* media queries */\n@media only screen and (max-width: 1000px) {\n  #canvas {\n    height: 70vw;\n  }\n  #control-panel-container {\n    visibility: hidden;\n  }\n}\n"],"sourceRoot":""}]);
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
    onmousedown: function (e) {
      _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_0__["default"].paintCanvasSquare(e);
    },
    onmouseover: function (e) {
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

  return { updateGridSize, paintCanvasSquare, resetCanvas };
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

  function setCanvasColor(e) {
    const color = e.target.value;
    _logic_StateManager__WEBPACK_IMPORTED_MODULE_0__["default"].setCanvasBackgroundColor(color);
    _logic_CanvasManager__WEBPACK_IMPORTED_MODULE_1__["default"].resetCanvas();
  }

  return { setGridSize, setPaintColor, eraseGrid, setCanvasColor };
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
const StateManager = (() => {
  let gridSize = 32;
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUtBQThEO0FBQzFHLDRDQUE0QyxtSkFBc0Q7QUFDbEcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxXQUFXLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxVQUFVLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlB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d2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NhbnZhc1NlY3Rpb24vQ2FudmFzLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ2FudmFzU2VjdGlvbi9DYW52YXNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9DYW52YXNTZWN0aW9uL0NhbnZhc1NxdWFyZS5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NhbnZhc1NlY3Rpb24vQ29udHJvbEljb24vQ29udHJvbEljb24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL0V4aXREaXYvRXhpdERpdi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9HcmlkU2l6ZVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2J1dHRvbnMvRXJhc2VCcnVzaEJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9idXR0b25zL0VyYXNlQ2FudmFzQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2NvbnRyb2xzL2J1dHRvbnMvUmFpbmJvd01vZGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvYnV0dG9ucy9TaGFkZU1vZGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvYnV0dG9ucy9Ub2dnbGVHcmlkbGluZXNCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29udHJvbHMvY29sb3ItcGlja2Vycy9DYW52YXNDb2xvclBpY2tlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb250cm9scy9jb2xvci1waWNrZXJzL1BhaW50Q29sb3JQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL2Jhc2ljLWVsZW1lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL2Jhc2ljLWVsZW1lbnRzL0NvbG9yUGlja2VyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvYmFzaWMtZWxlbWVudHMvUmFuZ2UuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvbG9naWMvQW5pbWF0aW9uTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9sb2dpYy9DYW52YXNNYW5hZ2VyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2xvZ2ljL0NvbnRyb2xNYW5hZ2VyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2xvZ2ljL1N0YXRlTWFuYWdlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9sb2dpYy9hcHBDb25maWcuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvbG9naWMvdXRpbGl0aWVzLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2dsb2JhbC1hc3NldHMvZm9udHMvc3BhY2V0aW1lLXJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9nbG9iYWwtYXNzZXRzL2ZvbnRzL01vbm9yb3VuZC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC8qIGNvbG9ycyAqL1xuICAtLWdyYXktNTogaHNsYSgwLCAwJSwgMzUlLCAxKTtcbiAgLS1ncmF5LTQ6IGhzbGEoMCwgMCUsIDUwJSwgMSk7XG4gIC0tZ3JheS0zOiBoc2xhKDAsIDAlLCA2NSUsIDEpO1xuICAtLWdyYXktMjogaHNsYSgwLCAwJSwgODAlLCAxKTtcbiAgLS1ncmF5LTE6IGhzbGEoMCwgMCUsIDk1JSwgMSk7XG4gIC0tbGlua3M6ICNmZjMzMDA7XG5cbiAgLyogZm9udHMgKi9cbiAgLS1mb290ZXItZm9udC1zaXplOiAxLjFyZW07XG4gIC0taGVhZGVyLWZvbnQtc2l6ZTogMi41cmVtO1xuXG4gIC8qIGJvcmRlciByYWRpdXMgKi9cbiAgLS1ici1zbTogNXB4O1xuICAtLWJyLW1kOiAxMHB4O1xuICAtLWJyLWxnOiAxNXB4O1xuXG4gIC8qIHNwYWNpbmcgKi9cbiAgLS1zcGFjZS1zbTogNXB4O1xuICAtLXNwYWNlLW1kOiAxNXB4O1xuICAtLXNwYWNlLWxnOiAyNXB4O1xuXG4gIC8qIHV0aWxpdHkgKi9cbiAgLS1tYXJnaW5TcGFjZTogMC4zcmVtO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2VUaW1lXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub1JvdW5kXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IE1vbm9Sb3VuZCwgc2Fucy1zZXJpZjtcbn1cblxuI2FwcCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbn1cbi8qIGhlYWRlciAqL1xuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0zKTtcbiAgZm9udC1mYW1pbHk6IFNwYWNlVGltZSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtIDAgMS4zcmVtIDA7XG59XG5cbmhlYWRlciBkaXYge1xuICBmb250LXNpemU6IHZhcigtLWhlYWRlci1mb250LXNpemUpO1xufVxuXG4vKiBtYWluICovXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0xKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1cmVtLCAxZnIpIDVmcjtcbn1cblxuLyogY29udHJvbCBwYW5lbCAqL1xuQGtleWZyYW1lcyBzbGlkZS1pbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbn1cblxuLnNsaWRlLWluIHtcbiAgYW5pbWF0aW9uOiBzbGlkZS1pbiAwLjc1cyBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzbGlkZS1vdXQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5cbi5zbGlkZS1vdXQge1xuICBhbmltYXRpb246IHNsaWRlLW91dCAwLjc1cyBmb3J3YXJkcztcbn1cblxuI2NvbnRyb2wtcGFuZWwtY29udGFpbmVyIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0yKTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2UtbGcpO1xuICBmb250LXNpemU6IDEuMnJlbTtcblxuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgei1pbmRleDogMTA7XG59XG5cbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jY29udHJvbC1wYW5lbC1leGl0LWNvbnRhaW5lciBpbWc6aG92ZXIge1xuICBzY2FsZTogMS4xO1xufVxuI2NvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXIgaW1nOmFjdGl2ZSB7XG4gIHNjYWxlOiAxO1xufVxuXG4uY29udHJvbC1pbnB1dCB7XG4gIGNvbG9yOiBibGFjaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uLmNvbnRyb2wtaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ici1zbSk7XG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xufVxuYnV0dG9uLmNvbnRyb2wtaW5wdXQ6aG92ZXIge1xuICBzY2FsZTogMS4wMjU7XG59XG5idXR0b24uY29udHJvbC1pbnB1dDphY3RpdmUge1xuICBzY2FsZTogMTtcbn1cblxuLmNvbnRyb2wtaW5wdXQtZ3JvdXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY29udHJvbC1pbnB1dC1ncm91cCAuY29udHJvbC1pbnB1dC1sYWJlbCB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLXNtKTtcbn1cbi5jb250cm9sLWlucHV0LWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogZ3JpZCAqL1xuI2NhbnZhcy1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IDFmcjtcbiAgZ3JpZC1yb3c6IDEvMjtcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XG4gIHotaW5kZXg6IDA7XG59XG5cbiNjYW52YXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgYmxhY2s7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogNzB2aDtcbiAgYXNwZWN0LXJhdGlvOiAxO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4jY29udHJvbC1pY29uIHtcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyLW1kKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDRyZW07XG5cbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pO1xufVxuI2NvbnRyb2wtaWNvbjpob3ZlciB7XG4gIHNjYWxlOiAxLjE7XG59XG4jY29udHJvbC1pY29uOmFjdGl2ZSB7XG4gIHNjYWxlOiAxO1xufVxuXG4uY2FudmFzLXNxdWFyZSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhbnZhcy1zcXVhcmU6aG92ZXIge1xuICBzY2FsZTogMS4wMTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwLjNyZW0gYmxhY2s7XG59XG4uY2FudmFzLXNxdWFyZTphY3RpdmUge1xuICBzY2FsZTogMTtcbn1cbi8qIGZvb3RlciAqL1xuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS01KTtcbiAgZm9udC1zaXplOiB2YXIoLS1mb290ZXItZm9udC1zaXplKTtcbiAgcGFkZGluZzogMnJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xufVxuZm9vdGVyIGltZyB7XG4gIGhlaWdodDogY2FsYyh2YXIoLS1mb290ZXItZm9udC1zaXplKSAtIDAuMXJlbSk7XG59XG5mb290ZXIgYSB7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW5TcGFjZSk7XG59XG5cbkBrZXlmcmFtZXMgZ2l0aHViLWhvdmVyLWluIHtcbiAgZnJvbSB7XG4gICAgcm90YXRlOiAwZGVnO1xuICAgIHNjYWxlOiAxO1xuICB9XG4gIHRvIHtcbiAgICByb3RhdGU6IDcyMGRlZztcbiAgICBzY2FsZTogMS4yO1xuICB9XG59XG4uZ2l0aHViLWhvdmVyLWluIHtcbiAgYW5pbWF0aW9uOiBnaXRodWItaG92ZXItaW4gMXMgZm9yd2FyZHM7XG59XG5cbkBrZXlmcmFtZXMgZ2l0aHViLWhvdmVyLW91dCB7XG4gIGZyb20ge1xuICAgIHJvdGF0ZTogNzIwZGVnO1xuICAgIHNjYWxlOiAxLjI7XG4gIH1cbiAgdG8ge1xuICAgIHJvdGF0ZTogMGRlZztcbiAgICBzY2FsZTogMTtcbiAgfVxufVxuLmdpdGh1Yi1ob3Zlci1vdXQge1xuICBhbmltYXRpb246IGdpdGh1Yi1ob3Zlci1vdXQgMXMgZm9yd2FyZHM7XG59XG5cbmZvb3RlciBpbWc6YWN0aXZlIHtcbiAgc2NhbGU6IDE7XG59XG5cbi50b3AtbGluazp2aXNpdGVkIHtcbiAgY29sb3I6IHZhcigtLWxpbmtzKTtcbn1cblxuLnRvcC1saW5rOnZpc2l0ZWQge1xuICBjb2xvcjogdmFyKC0tbGlua3MpO1xufVxuXG4vKiB1dGlsaXR5IGNsYXNzZXMgKi9cbi5yZW1vdmVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmhpZGRlbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLyogbWVkaWEgcXVlcmllcyAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgI2NhbnZhcyB7XG4gICAgaGVpZ2h0OiA3MHZ3O1xuICB9XG4gICNjb250cm9sLXBhbmVsLWNvbnRhaW5lciB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3QixnQkFBZ0I7O0VBRWhCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsMEJBQTBCOztFQUUxQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhOztFQUViLFlBQVk7RUFD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Q1o7RUFDQTtJQUNFLFlBQVk7SUFDWixRQUFRO0VBQ1Y7QUFDRjtBQUNBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLyogY29sb3JzICovXFxuICAtLWdyYXktNTogaHNsYSgwLCAwJSwgMzUlLCAxKTtcXG4gIC0tZ3JheS00OiBoc2xhKDAsIDAlLCA1MCUsIDEpO1xcbiAgLS1ncmF5LTM6IGhzbGEoMCwgMCUsIDY1JSwgMSk7XFxuICAtLWdyYXktMjogaHNsYSgwLCAwJSwgODAlLCAxKTtcXG4gIC0tZ3JheS0xOiBoc2xhKDAsIDAlLCA5NSUsIDEpO1xcbiAgLS1saW5rczogI2ZmMzMwMDtcXG5cXG4gIC8qIGZvbnRzICovXFxuICAtLWZvb3Rlci1mb250LXNpemU6IDEuMXJlbTtcXG4gIC0taGVhZGVyLWZvbnQtc2l6ZTogMi41cmVtO1xcblxcbiAgLyogYm9yZGVyIHJhZGl1cyAqL1xcbiAgLS1ici1zbTogNXB4O1xcbiAgLS1ici1tZDogMTBweDtcXG4gIC0tYnItbGc6IDE1cHg7XFxuXFxuICAvKiBzcGFjaW5nICovXFxuICAtLXNwYWNlLXNtOiA1cHg7XFxuICAtLXNwYWNlLW1kOiAxNXB4O1xcbiAgLS1zcGFjZS1sZzogMjVweDtcXG5cXG4gIC8qIHV0aWxpdHkgKi9cXG4gIC0tbWFyZ2luU3BhY2U6IDAuM3JlbTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlNwYWNlVGltZVxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9nbG9iYWwtYXNzZXRzL2ZvbnRzL3NwYWNldGltZS1yZWd1bGFyLnR0ZlxcXCIpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTW9ub1JvdW5kXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIuL2dsb2JhbC1hc3NldHMvZm9udHMvTW9ub3JvdW5kLm90ZlxcXCIpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBNb25vUm91bmQsIHNhbnMtc2VyaWY7XFxufVxcblxcbiNhcHAge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIGF1dG87XFxufVxcbi8qIGhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTMpO1xcbiAgZm9udC1mYW1pbHk6IFNwYWNlVGltZSwgc2Fucy1zZXJpZjtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtIDAgMS4zcmVtIDA7XFxufVxcblxcbmhlYWRlciBkaXYge1xcbiAgZm9udC1zaXplOiB2YXIoLS1oZWFkZXItZm9udC1zaXplKTtcXG59XFxuXFxuLyogbWFpbiAqL1xcbm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0xKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDE1cmVtLCAxZnIpIDVmcjtcXG59XFxuXFxuLyogY29udHJvbCBwYW5lbCAqL1xcbkBrZXlmcmFtZXMgc2xpZGUtaW4ge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG59XFxuXFxuLnNsaWRlLWluIHtcXG4gIGFuaW1hdGlvbjogc2xpZGUtaW4gMC43NXMgZm9yd2FyZHM7XFxufVxcblxcbkBrZXlmcmFtZXMgc2xpZGUtb3V0IHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxufVxcblxcbi5zbGlkZS1vdXQge1xcbiAgYW5pbWF0aW9uOiBzbGlkZS1vdXQgMC43NXMgZm9yd2FyZHM7XFxufVxcblxcbiNjb250cm9sLXBhbmVsLWNvbnRhaW5lciB7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0yKTtcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2NvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXIgaW1nOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcbiNjb250cm9sLXBhbmVsLWV4aXQtY29udGFpbmVyIGltZzphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi5jb250cm9sLWlucHV0IHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbmJ1dHRvbi5jb250cm9sLWlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyLXNtKTtcXG4gIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xcbn1cXG5idXR0b24uY29udHJvbC1pbnB1dDpob3ZlciB7XFxuICBzY2FsZTogMS4wMjU7XFxufVxcbmJ1dHRvbi5jb250cm9sLWlucHV0OmFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuLmNvbnRyb2wtaW5wdXQtZ3JvdXAge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5jb250cm9sLWlucHV0LWdyb3VwIC5jb250cm9sLWlucHV0LWxhYmVsIHtcXG4gIG1hcmdpbi10b3A6IHZhcigtLXNwYWNlLXNtKTtcXG59XFxuLmNvbnRyb2wtaW5wdXQtbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIGdyaWQgKi9cXG4jY2FudmFzLWNvbnRhaW5lciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnI7XFxuICBncmlkLXJvdzogMS8yO1xcbiAgZ3JpZC1jb2x1bW46IDEvLTE7XFxuICB6LWluZGV4OiAwO1xcbn1cXG5cXG4jY2FudmFzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMSk7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGJsYWNrO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogNzB2aDtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4jY29udHJvbC1pY29uIHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnItbWQpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiA0cmVtO1xcblxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2Utc20pO1xcbn1cXG4jY29udHJvbC1pY29uOmhvdmVyIHtcXG4gIHNjYWxlOiAxLjE7XFxufVxcbiNjb250cm9sLWljb246YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG5cXG4uY2FudmFzLXNxdWFyZSB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhbnZhcy1zcXVhcmU6aG92ZXIge1xcbiAgc2NhbGU6IDEuMDE7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDAuM3JlbSBibGFjaztcXG59XFxuLmNhbnZhcy1zcXVhcmU6YWN0aXZlIHtcXG4gIHNjYWxlOiAxO1xcbn1cXG4vKiBmb290ZXIgKi9cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS01KTtcXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSk7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogY2FsYyh2YXIoLS1mb290ZXItZm9udC1zaXplKSAtIDAuMXJlbSk7XFxufVxcbmZvb3RlciBhIHtcXG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW5TcGFjZSk7XFxufVxcblxcbkBrZXlmcmFtZXMgZ2l0aHViLWhvdmVyLWluIHtcXG4gIGZyb20ge1xcbiAgICByb3RhdGU6IDBkZWc7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICByb3RhdGU6IDcyMGRlZztcXG4gICAgc2NhbGU6IDEuMjtcXG4gIH1cXG59XFxuLmdpdGh1Yi1ob3Zlci1pbiB7XFxuICBhbmltYXRpb246IGdpdGh1Yi1ob3Zlci1pbiAxcyBmb3J3YXJkcztcXG59XFxuXFxuQGtleWZyYW1lcyBnaXRodWItaG92ZXItb3V0IHtcXG4gIGZyb20ge1xcbiAgICByb3RhdGU6IDcyMGRlZztcXG4gICAgc2NhbGU6IDEuMjtcXG4gIH1cXG4gIHRvIHtcXG4gICAgcm90YXRlOiAwZGVnO1xcbiAgICBzY2FsZTogMTtcXG4gIH1cXG59XFxuLmdpdGh1Yi1ob3Zlci1vdXQge1xcbiAgYW5pbWF0aW9uOiBnaXRodWItaG92ZXItb3V0IDFzIGZvcndhcmRzO1xcbn1cXG5cXG5mb290ZXIgaW1nOmFjdGl2ZSB7XFxuICBzY2FsZTogMTtcXG59XFxuXFxuLnRvcC1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IHZhcigtLWxpbmtzKTtcXG59XFxuXFxuLnRvcC1saW5rOnZpc2l0ZWQge1xcbiAgY29sb3I6IHZhcigtLWxpbmtzKTtcXG59XFxuXFxuLyogdXRpbGl0eSBjbGFzc2VzICovXFxuLnJlbW92ZWQge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi8qIG1lZGlhIHF1ZXJpZXMgKi9cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgI2NhbnZhcyB7XFxuICAgIGhlaWdodDogNzB2dztcXG4gIH1cXG4gICNjb250cm9sLXBhbmVsLWNvbnRhaW5lciB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IE1haW4gZnJvbSBcIi4vTWFpblwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXIvRm9vdGVyXCI7XG5cbmNvbnN0IEFwcCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlkOiBcImFwcFwiLFxuICB9KTtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKEhlYWRlcigpKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChNYWluKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKEZvb3RlcigpKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiIsImNvbnN0IENhbnZhcyA9ICgpID0+IHtcbiAgY29uc3QgY2FudmFzID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiY2FudmFzXCIsXG4gIH0pO1xuICByZXR1cm4gY2FudmFzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzO1xuIiwiaW1wb3J0IENvbnRyb2xJY29uIGZyb20gXCIuL0NvbnRyb2xJY29uL0NvbnRyb2xJY29uXCI7XG5pbXBvcnQgQ2FudmFzIGZyb20gXCIuL0NhbnZhc1wiO1xuXG5jb25zdCBDYW52YXNDb250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlkOiBcImNhbnZhcy1jb250YWluZXJcIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKENvbnRyb2xJY29uKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoQ2FudmFzKCkpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW52YXNDb250YWluZXI7XG4iLCJpbXBvcnQgY2FudmFzIGZyb20gXCIuLi8uLi9sb2dpYy9DYW52YXNNYW5hZ2VyXCI7XG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4uLy4uL2xvZ2ljL1N0YXRlTWFuYWdlclwiO1xuXG5jb25zdCBDYW52YXNTcXVhcmUgPSAoaWROdW0pID0+IHtcbiAgY29uc3Qgc3F1YXJlID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IGBjYW52YXMtc3F1YXJlLSR7aWROdW19YCxcbiAgICBjbGFzc05hbWU6IFwiY2FudmFzLXNxdWFyZVwiLFxuICAgIG9ubW91c2Vkb3duOiBmdW5jdGlvbiAoZSkge1xuICAgICAgY2FudmFzLnBhaW50Q2FudmFzU3F1YXJlKGUpO1xuICAgIH0sXG4gICAgb25tb3VzZW92ZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjYW52YXMucGFpbnRDYW52YXNTcXVhcmUoZSk7XG4gICAgfSxcbiAgfSk7XG4gIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzdGF0ZS5nZXRDYW52YXNCYWNrZ3JvdW5kQ29sb3IoKTtcbiAgcmV0dXJuIHNxdWFyZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhbnZhc1NxdWFyZTtcbiIsImltcG9ydCBDb250cm9sSWNvblBhdGggZnJvbSBcIi4vaWNvbnMvY29udHJvbHMucG5nXCI7XG5cbmNvbnN0IENvbnRyb2xJY29uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pY29uLWNvbnRhaW5lclwiLFxuICB9KTtcbiAgY29uc3QgaWNvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSwge1xuICAgIGlkOiBcImNvbnRyb2wtaWNvblwiLFxuICAgIHNyYzogQ29udHJvbEljb25QYXRoLFxuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbEljb247XG4iLCIvL0NvbXBvbmVudCBpbXBvcnRzXG5pbXBvcnQgRXhpdERpdiBmcm9tIFwiLi9jb250cm9scy9FeGl0RGl2L0V4aXREaXZcIjtcblxuaW1wb3J0IFBhaW50Q29sb3JQaWNrZXIgZnJvbSBcIi4vY29udHJvbHMvY29sb3ItcGlja2Vycy9QYWludENvbG9yUGlja2VyXCI7XG5pbXBvcnQgQ2FudmFzQ29sb3JQaWNrZXIgZnJvbSBcIi4vY29udHJvbHMvY29sb3ItcGlja2Vycy9DYW52YXNDb2xvclBpY2tlclwiO1xuXG5pbXBvcnQgRXJhc2VCcnVzaEJ1dHRvbiBmcm9tIFwiLi9jb250cm9scy9idXR0b25zL0VyYXNlQnJ1c2hCdXR0b25cIjtcbmltcG9ydCBFcmFzZUNhbnZhc0J1dHRvbiBmcm9tIFwiLi9jb250cm9scy9idXR0b25zL0VyYXNlQ2FudmFzQnV0dG9uXCI7XG5pbXBvcnQgVG9nZ2xlR3JpZGxpbmVzQnV0dG9uIGZyb20gXCIuL2NvbnRyb2xzL2J1dHRvbnMvVG9nZ2xlR3JpZGxpbmVzQnV0dG9uXCI7XG5pbXBvcnQgUmFpbmJvd01vZGVCdXR0b24gZnJvbSBcIi4vY29udHJvbHMvYnV0dG9ucy9SYWluYm93TW9kZUJ1dHRvblwiO1xuaW1wb3J0IFNoYWRlTW9kZUJ1dHRvbiBmcm9tIFwiLi9jb250cm9scy9idXR0b25zL1NoYWRlTW9kZUJ1dHRvblwiO1xuXG5pbXBvcnQgR3JpZFNpemVTZWxlY3RvciBmcm9tIFwiLi9jb250cm9scy9HcmlkU2l6ZVNlbGVjdG9yXCI7XG5cbmNvbnN0IENvbnRyb2xQYW5lbCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiY29udHJvbC1wYW5lbC1jb250YWluZXJcIixcbiAgICBcImRhdGEtaXNWaXNpYmxlXCI6IHRydWUsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChFeGl0RGl2KCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoUGFpbnRDb2xvclBpY2tlcigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKENhbnZhc0NvbG9yUGlja2VyKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoRXJhc2VCcnVzaEJ1dHRvbigpKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKEVyYXNlQ2FudmFzQnV0dG9uKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoVG9nZ2xlR3JpZGxpbmVzQnV0dG9uKCkpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoUmFpbmJvd01vZGVCdXR0b24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChTaGFkZU1vZGVCdXR0b24oKSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChHcmlkU2l6ZVNlbGVjdG9yKCkpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250cm9sUGFuZWw7XG4iLCJpbXBvcnQgSGlkZUljb24gZnJvbSBcIi4vaWNvbnMvZXllLWhpZGUucG5nXCI7XG5cbmNvbnN0IEV4aXREaXYgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlkOiBcImNvbnRyb2wtcGFuZWwtZXhpdC1jb250YWluZXJcIixcbiAgfSk7XG5cbiAgY29uc3QgaWNvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSwge1xuICAgIGlkOiBcImhpZGUtY29udHJvbC1wYW5lbC1pY29uXCIsXG4gICAgc3JjOiBIaWRlSWNvbixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeGl0RGl2O1xuIiwiaW1wb3J0IFJhbmdlIGZyb20gXCIuLi8uLi9iYXNpYy1lbGVtZW50cy9SYW5nZVwiO1xuaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vLi4vLi4vbG9naWMvYXBwQ29uZmlnXCI7XG5cbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vLi4vLi4vbG9naWMvU3RhdGVNYW5hZ2VyXCI7XG5pbXBvcnQgY29udHJvbE1hbmFnZXIgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL0NvbnRyb2xNYW5hZ2VyXCI7XG5cbmNvbnN0IEdyaWRTaXplU2VsZWN0b3IgPSAoKSA9PiB7XG4gIGxldCBjdXJyZW50R3JpZFNpemUgPSBzdGF0ZS5nZXRHcmlkU2l6ZSgpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oXG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0LWdyb3VwXCIgfSlcbiAgKTtcblxuICBjb25zdCByYW5nZSA9IE9iamVjdC5hc3NpZ24oUmFuZ2UoKSwge1xuICAgIGlkOiBcImdyaWQtc2l6ZS1zZWxlY3RvclwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gICAgbWluOiBjb25maWcuZ3JpZE1pbixcbiAgICBtYXg6IGNvbmZpZy5ncmlkTWF4LFxuICAgIHZhbHVlOiBzdGF0ZS5nZXRHcmlkU2l6ZSgpLFxuICAgIG9uaW5wdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb250cm9sTWFuYWdlci5zZXRHcmlkU2l6ZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgbGFiZWwgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpZDogXCJncmlkLXNpemUtc2VsZWN0b3ItbGFiZWxcIixcbiAgICBpbm5lclRleHQ6IGBHcmlkIHNpemU6ICR7Y3VycmVudEdyaWRTaXplfSB4ICR7Y3VycmVudEdyaWRTaXplfWAsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtbGFiZWxcIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJhbmdlKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JpZFNpemVTZWxlY3RvcjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBFcmFzZUJydXNoQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJlcmFzZS1icnVzaC1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiRXJhc2VcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJhc2VCcnVzaEJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuaW1wb3J0IGNvbnRyb2xzIGZyb20gXCIuLi8uLi8uLi8uLi9sb2dpYy9DYW52YXNNYW5hZ2VyXCI7XG5cbmNvbnN0IEVyYXNlQ2FudmFzQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICBjb25zdCBidXR0b24gPSBPYmplY3QuYXNzaWduKEJ1dHRvbigpLCB7XG4gICAgaWQ6IFwiZXJhc2UtZ3JpZC1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiRXJhc2UgZ3JpZFwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgY29udHJvbHMucmVzZXRDYW52YXMoKTtcbiAgICB9LFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJhc2VDYW52YXNCdXR0b247XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi8uLi9iYXNpYy1lbGVtZW50cy9CdXR0b25cIjtcblxuY29uc3QgUmFpbmJvd01vZGVCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJyYWluYm93LW1vZGUtYnV0dG9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIlJhaW5ib3cgbW9kZVwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYWluYm93TW9kZUJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBTaGFkZU1vZGVCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJzaGFkZS1tb2RlLWJ1dHRvblwiLFxuICAgIGlubmVyVGV4dDogXCJTaGFkZSBtb2RlXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNoYWRlTW9kZUJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBUb2dnbGVHcmlkbGluZXNCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJ0b2dnbGUtZ3JpZGxpbmVzLWJ1dHRvblwiLFxuICAgIGlubmVyVGV4dDogXCJUb2dnbGUgZ3JpZGxpbmVzXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZUdyaWRsaW5lc0J1dHRvbjtcbiIsImltcG9ydCBDb2xvclBpY2tlciBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQ29sb3JQaWNrZXJcIjtcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vLi4vLi4vLi4vbG9naWMvU3RhdGVNYW5hZ2VyXCI7XG5pbXBvcnQgY29udHJvbHMgZnJvbSBcIi4uLy4uLy4uLy4uL2xvZ2ljL0NvbnRyb2xNYW5hZ2VyXCI7XG5cbmNvbnN0IENhbnZhc0NvbG9yUGlja2VyID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1ncm91cFwiLFxuICB9KTtcbiAgY29uc3QgY29sb3JQaWNrZXIgPSBPYmplY3QuYXNzaWduKENvbG9yUGlja2VyKCksIHtcbiAgICBpZDogXCJjYW52YXMtY29sb3ItcGlja2VyXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgICB2YWx1ZTogc3RhdGUuZ2V0Q2FudmFzQmFja2dyb3VuZENvbG9yKCksXG4gICAgb25pbnB1dDogZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNvbnRyb2xzLnNldENhbnZhc0NvbG9yKGUpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaW5uZXJUZXh0OiBcIlNlbGVjdCBjYW52YXMgY29sb3JcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1sYWJlbFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW52YXNDb2xvclBpY2tlcjtcbiIsImltcG9ydCBDb2xvclBpY2tlciBmcm9tIFwiLi4vLi4vLi4vYmFzaWMtZWxlbWVudHMvQ29sb3JQaWNrZXJcIjtcbmltcG9ydCBjb250cm9scyBmcm9tIFwiLi4vLi4vLi4vLi4vbG9naWMvQ29udHJvbE1hbmFnZXJcIjtcblxuY29uc3QgUGFpbnRDb2xvclBpY2tlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtZ3JvdXBcIixcbiAgfSk7XG5cbiAgY29uc3QgY29sb3JQaWNrZXIgPSBPYmplY3QuYXNzaWduKENvbG9yUGlja2VyKCksIHtcbiAgICBpZDogXCJwYWludC1jb2xvci1waWNrZXJcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICAgIG9uaW5wdXQ6IGZ1bmN0aW9uIChlKSB7XG4gICAgICBjb250cm9scy5zZXRQYWludENvbG9yKGUpO1xuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaW5uZXJUZXh0OiBcIlNlbGVjdCBwYWludCBjb2xvclwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0LWxhYmVsXCIsXG4gIH0pO1xuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb2xvclBpY2tlcik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhaW50Q29sb3JQaWNrZXI7XG4iLCJpbXBvcnQgR2l0SHViSWNvbiBmcm9tIFwiLi9sb2dvcy9naXRodWItbWFyay13aGl0ZS5wbmdcIjtcblxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBmb290ZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiksIHt9KTtcblxuICBjb25zdCBjb3B5cmlnaHRDb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29weXJpZ2h0LWNvbnRhaW5lclwiLFxuICAgIGlubmVyVGV4dDogYMKpIENhcmxpbiBNaXRjaGVsbCAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gLFxuICB9KTtcblxuICBjb25zdCB0b3BDb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwidG9wLWF0dHJpYnV0aW9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIkluc3BpcmVkIGJ5XCIsXG4gIH0pO1xuXG4gIGNvbnN0IHRvcExpbmsgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcInRvcC1saW5rXCIsXG4gICAgaW5uZXJUZXh0OiBcIlRoZSBPZGluIFByb2plY3RcIixcbiAgICBocmVmOiBcImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9cIixcbiAgfSk7XG5cbiAgY29uc3QgZ2l0aHViTGluayA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIiksIHtcbiAgICBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9jYXJsaW4tbWl0Y2hlbGwvZXRjaC1hLXNrZXRjaC13ZWJwYWNrLVRPUFwiLFxuICB9KTtcblxuICBjb25zdCBnaXRodWJJY29uID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLCB7XG4gICAgc3JjOiBHaXRIdWJJY29uLFxuICAgIGNsYXNzTmFtZTogXCJnaXRodWItaWNvblwiLFxuICB9KTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQoY29weXJpZ2h0Q29udGFpbmVyKTtcbiAgY29weXJpZ2h0Q29udGFpbmVyLmFwcGVuZENoaWxkKGdpdGh1YkxpbmspO1xuICBnaXRodWJMaW5rLmFwcGVuZENoaWxkKGdpdGh1Ykljb24pO1xuXG4gIGZvb3Rlci5hcHBlbmRDaGlsZCh0b3BDb250YWluZXIpO1xuICB0b3BDb250YWluZXIuYXBwZW5kQ2hpbGQodG9wTGluayk7XG5cbiAgcmV0dXJuIGZvb3Rlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIHt9KSk7XG5cbiAgY29uc3QgdGl0bGUgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBpbm5lclRleHQ6IFwiRXRjaC1BLVNrZXRjaFwiLFxuICB9KTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCJpbXBvcnQgQ29udHJvbFBhbmVsIGZyb20gXCIuL0NvbnRyb2xQYW5lbC9Db250cm9sUGFuZWxcIjtcbmltcG9ydCBDYW52YXNDb250YWluZXIgZnJvbSBcIi4vQ2FudmFzU2VjdGlvbi9DYW52YXNDb250YWluZXJcIjtcblxuY29uc3QgTWFpbiA9ICgpID0+IHtcbiAgY29uc3QgbWFpbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIiksIHt9KTtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmlkID0gXCJ0ZXN0XCI7XG4gIG1haW4uYXBwZW5kQ2hpbGQoQ29udHJvbFBhbmVsKCkpO1xuICBtYWluLmFwcGVuZENoaWxkKENhbnZhc0NvbnRhaW5lcigpKTtcblxuICByZXR1cm4gbWFpbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1haW47XG4iLCJjb25zdCBCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKSk7XG4gIHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJjb25zdCBDb2xvclBpY2tlciA9ICgpID0+IHtcbiAgY29uc3QgY29sb3JQaWNrZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSwge1xuICAgIHR5cGU6IFwiY29sb3JcIixcbiAgfSk7XG4gIHJldHVybiBjb2xvclBpY2tlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yUGlja2VyO1xuIiwiY29uc3QgUmFuZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJhbmdlID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksIHtcbiAgICB0eXBlOiBcInJhbmdlXCIsXG4gIH0pO1xuXG4gIHJldHVybiByYW5nZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhbmdlO1xuIiwiY29uc3QgQW5pbWF0aW9uTWFuYWdlciA9ICgoKSA9PiB7XG4gIGZ1bmN0aW9uIGFwcGx5QW5pbWF0aW9ucygpIHtcbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2l0aHViLWljb25cIiksIHtcbiAgICAgIG9ubW91c2VvdmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImdpdGh1Yi1ob3Zlci1vdXRcIik7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImdpdGh1Yi1ob3Zlci1pblwiKTtcbiAgICAgIH0sXG4gICAgICBvbm1vdXNlb3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImdpdGh1Yi1ob3Zlci1pblwiKTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiZ2l0aHViLWhvdmVyLW91dFwiKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBjb250cm9sLXBhbmVsXG4gICAgY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250cm9sLXBhbmVsLWNvbnRhaW5lclwiKTtcbiAgICBjb25zdCBzbGlkZUluID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250cm9sLXBhbmVsLWNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnRyb2xQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtb3V0XCIpO1xuICAgICAgY29udHJvbFBhbmVsLmNsYXNzTGlzdC5hZGQoXCJzbGlkZS1pblwiKTtcbiAgICAgIGNvbnRyb2xQYW5lbFtcImRhdGEtaXNWaXNpYmxlXCJdID0gdHJ1ZTtcbiAgICB9O1xuICAgIGNvbnN0IHNsaWRlT3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gY29uc3QgY29udHJvbFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250cm9sLXBhbmVsLWNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnRyb2xQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGUtaW5cIik7XG4gICAgICBjb250cm9sUGFuZWwuY2xhc3NMaXN0LmFkZChcInNsaWRlLW91dFwiKTtcbiAgICAgIGNvbnRyb2xQYW5lbFtcImRhdGEtaXNWaXNpYmxlXCJdID0gZmFsc2U7XG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250cm9sLWljb25cIiksIHtcbiAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2xpZGVJbigpO1xuICAgICAgfSxcbiAgICB9KTtcbiAgICBPYmplY3QuYXNzaWduKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlkZS1jb250cm9sLXBhbmVsLWljb25cIiksIHtcbiAgICAgIG9uY2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2xpZGVPdXQoKTtcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICB3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgY29uc3QgeyBpbm5lcldpZHRoIH0gPSBlLnRhcmdldDtcbiAgICAgIGlmIChpbm5lcldpZHRoIDw9IDExNTApIHtcbiAgICAgICAgc2xpZGVPdXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICghY29udHJvbFBhbmVsW1wiZGF0YS1pc1Zpc2libGVcIl0pIHtcbiAgICAgICAgICBzbGlkZUluKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIHJldHVybiB7IGFwcGx5QW5pbWF0aW9ucyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uTWFuYWdlcjtcbiIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9TdGF0ZU1hbmFnZXJcIjtcbmltcG9ydCB7IGhleFRvUmdiU3RyLCBzZXRFbGVtZW50c0JnQ29sb3IgfSBmcm9tIFwiLi91dGlsaXRpZXNcIjtcblxuaW1wb3J0IENhbnZhc1NxdWFyZSBmcm9tIFwiLi4vY29tcG9uZW50cy9DYW52YXNTZWN0aW9uL0NhbnZhc1NxdWFyZVwiO1xuXG5jb25zdCBDYW52YXNNYW5hZ2VyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gY2xlYXJHcmlkKCkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzXCIpO1xuICAgIHdoaWxlIChjYW52YXMuZmlyc3RDaGlsZCkge1xuICAgICAgY2FudmFzLnJlbW92ZUNoaWxkKGNhbnZhcy5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwYWludENhbnZhc1NxdWFyZShlKSB7XG4gICAgaWYgKGUudHlwZSA9PT0gXCJtb3VzZWRvd25cIiB8fCBzdGF0ZS5nZXRMZWZ0TW91c2VCdXR0b25Eb3duKCkpIHtcbiAgICAgIGNvbnN0IHNxdWFyZSA9IGUudGFyZ2V0O1xuICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHN0YXRlLmdldFBhaW50Q29sb3IoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXNldENhbnZhcygpIHtcbiAgICBjb25zdCBjYW52YXNTcXVhcmVzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2FudmFzLXNxdWFyZVwiKV07XG5cbiAgICBzZXRFbGVtZW50c0JnQ29sb3IoXG4gICAgICBjYW52YXNTcXVhcmVzLFxuICAgICAgaGV4VG9SZ2JTdHIoc3RhdGUuZ2V0Q2FudmFzQmFja2dyb3VuZENvbG9yKCkpXG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUdyaWRTaXplKCkge1xuICAgIGNvbnN0IGdyaWRTaXplID0gc3RhdGUuZ2V0R3JpZFNpemUoKTtcbiAgICBjb25zdCB0b3RhbFNxdWFyZXMgPSBncmlkU2l6ZSAqKiAyO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2FudmFzXCIpO1xuXG4gICAgY2xlYXJHcmlkKCk7XG5cbiAgICBjYW52YXMuc3R5bGVbXCJncmlkLXRlbXBsYXRlLXJvd3NcIl0gPSBgcmVwZWF0KCR7Z3JpZFNpemV9LCAxZnIpYDtcbiAgICBjYW52YXMuc3R5bGVbXCJncmlkLXRlbXBsYXRlLWNvbHVtbnNcIl0gPSBgcmVwZWF0KCR7Z3JpZFNpemV9LCAxZnIpYDtcblxuICAgIGZvciAobGV0IGlkTnVtID0gMTsgaWROdW0gPD0gdG90YWxTcXVhcmVzOyBpZE51bSsrKSB7XG4gICAgICBjb25zdCBzcXVhcmUgPSBDYW52YXNTcXVhcmUoaWROdW0pO1xuICAgICAgY2FudmFzLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgdXBkYXRlR3JpZFNpemUsIHBhaW50Q2FudmFzU3F1YXJlLCByZXNldENhbnZhcyB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FudmFzTWFuYWdlcjtcbiIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi4vbG9naWMvU3RhdGVNYW5hZ2VyXCI7XG5pbXBvcnQgY2FudmFzIGZyb20gXCIuLi9sb2dpYy9DYW52YXNNYW5hZ2VyXCI7XG5cbmNvbnN0IENvbnRyb2xNYW5hZ2VyID0gKCgpID0+IHtcbiAgZnVuY3Rpb24gc2V0R3JpZFNpemUodmFsdWUpIHtcbiAgICBjb25zdCBncmlkU2l6ZVNlbGVjdG9yTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCIjZ3JpZC1zaXplLXNlbGVjdG9yLWxhYmVsXCJcbiAgICApO1xuICAgIHN0YXRlLnNldEdyaWRTaXplKHZhbHVlKTtcbiAgICBncmlkU2l6ZVNlbGVjdG9yTGFiZWwuaW5uZXJUZXh0ID0gYEdyaWQgc2l6ZTogJHtzdGF0ZS5nZXRHcmlkU2l6ZSgpfSB4ICR7c3RhdGUuZ2V0R3JpZFNpemUoKX1gO1xuICAgIGNhbnZhcy51cGRhdGVHcmlkU2l6ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0UGFpbnRDb2xvcihlKSB7XG4gICAgY29uc3QgY29sb3IgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzdGF0ZS5zZXRQYWludENvbG9yKGNvbG9yKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVyYXNlR3JpZCgpIHtcbiAgICBjYW52YXMucmVzZXRDYW52YXMoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldENhbnZhc0NvbG9yKGUpIHtcbiAgICBjb25zdCBjb2xvciA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHN0YXRlLnNldENhbnZhc0JhY2tncm91bmRDb2xvcihjb2xvcik7XG4gICAgY2FudmFzLnJlc2V0Q2FudmFzKCk7XG4gIH1cblxuICByZXR1cm4geyBzZXRHcmlkU2l6ZSwgc2V0UGFpbnRDb2xvciwgZXJhc2VHcmlkLCBzZXRDYW52YXNDb2xvciB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbE1hbmFnZXI7XG4iLCJjb25zdCBTdGF0ZU1hbmFnZXIgPSAoKCkgPT4ge1xuICBsZXQgZ3JpZFNpemUgPSAzMjtcbiAgY29uc3QgZ2V0R3JpZFNpemUgPSAoKSA9PiBncmlkU2l6ZTtcbiAgY29uc3Qgc2V0R3JpZFNpemUgPSAodmFsdWUpID0+IChncmlkU2l6ZSA9IHZhbHVlKTtcblxuICBsZXQgY2FudmFzQmFja2dyb3VuZENvbG9yID0gXCIjZjJmMmYyXCI7XG4gIGNvbnN0IGdldENhbnZhc0JhY2tncm91bmRDb2xvciA9ICgpID0+IGNhbnZhc0JhY2tncm91bmRDb2xvcjtcbiAgY29uc3Qgc2V0Q2FudmFzQmFja2dyb3VuZENvbG9yID0gKGNvbG9yKSA9PiAoY2FudmFzQmFja2dyb3VuZENvbG9yID0gY29sb3IpO1xuXG4gIGxldCBwYWludENvbG9yID0gXCIjMDAwXCI7XG4gIGNvbnN0IGdldFBhaW50Q29sb3IgPSAoKSA9PiBwYWludENvbG9yO1xuICBjb25zdCBzZXRQYWludENvbG9yID0gKGNvbG9yKSA9PiAocGFpbnRDb2xvciA9IGNvbG9yKTtcblxuICBsZXQgbGVmdE1vdXNlQnV0dG9uRG93biA9IGZhbHNlO1xuICBjb25zdCBnZXRMZWZ0TW91c2VCdXR0b25Eb3duID0gKCkgPT4gbGVmdE1vdXNlQnV0dG9uRG93bjtcbiAgY29uc3Qgc2V0TGVmdE1vdXNlQnV0dG9uRG93biA9ICh2YWx1ZSkgPT4gKGxlZnRNb3VzZUJ1dHRvbkRvd24gPSB2YWx1ZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBnZXRMZWZ0TW91c2VCdXR0b25Eb3duLFxuICAgIHNldExlZnRNb3VzZUJ1dHRvbkRvd24sXG5cbiAgICBnZXRHcmlkU2l6ZSxcbiAgICBzZXRHcmlkU2l6ZSxcblxuICAgIGdldENhbnZhc0JhY2tncm91bmRDb2xvcixcbiAgICBzZXRDYW52YXNCYWNrZ3JvdW5kQ29sb3IsXG5cbiAgICBzZXRQYWludENvbG9yLFxuICAgIGdldFBhaW50Q29sb3IsXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBTdGF0ZU1hbmFnZXI7XG4iLCJjb25zdCBjb25maWcgPSB7XG4gIGdyaWRNaW46IDEsXG4gIGdyaWRNYXg6IDY0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIiwiLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIEVYUE9SVEVEIFVUSUxTICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiU3RyKGhleCkge1xuICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCkge1xuICAgIGhleCA9IHNob3J0SGV4VG9GdWxsSGV4KGhleCk7XG4gIH1cblxuICBjb25zdCByID0gcGFyc2VJbnQoaGV4LnNsaWNlKDEsIDMpLCAxNik7XG4gIGNvbnN0IGcgPSBwYXJzZUludChoZXguc2xpY2UoMywgNSksIDE2KTtcbiAgY29uc3QgYiA9IHBhcnNlSW50KGhleC5zbGljZSg1LCA3KSwgMTYpO1xuXG4gIHJldHVybiBnZXRSZ2JTdHJGcm9tVmFsdWVzKHIsIGcsIGIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmdiU3RyRnJvbVZhbHVlcyhyLCBnLCBiKSB7XG4gIHJldHVybiBgcmdiKCR7cn0sICR7Z30sICR7Yn0pYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbVJnYlN0cigpIHtcbiAgY29uc3QgW3JhbmRSZWQsIHJhbmRHcmVlbiwgcmFuZEJsdWVdID0gQXJyYXkoMylcbiAgICAuZmlsbCgpXG4gICAgLm1hcCgoZWxlbSkgPT4gZ2V0UmFuZEludCgwLCAyNTYpKTtcbiAgcmV0dXJuIGdldFJnYlN0ckZyb21WYWx1ZXMocmFuZFJlZCwgcmFuZEdyZWVuLCByYW5kQmx1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWx1ZXNGcm9tUmdiU3RyKHJnYlN0cikge1xuICBjb25zdCBbciwgZywgYl0gPSByZ2JTdHIubWF0Y2goL1xcZHsxLDN9L2cpO1xuICByZXR1cm4geyByOiArciwgZzogK2csIGI6ICtiIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JTdHJUb0Z1bGxIZXgocmdiU3RyKSB7XG4gIGNvbnN0IHsgciwgZywgYiB9ID0gZ2V0VmFsdWVzRnJvbVJnYlN0cihyZ2JTdHIpO1xuICBjb25zdCBbaGV4UiwgaGV4RywgaGV4Ql0gPSBbciwgZywgYl0ubWFwKCh2YWwpID0+IHZhbHVlVG9QYWRkZWRIZXgodmFsKSk7XG4gIHJldHVybiBgIyR7aGV4Un0ke2hleEd9JHtoZXhCfWA7XG59XG5cbi8qKlxuICpUYWtlcyBhIHNpbmdsZSBkb20gZWxlbWVudCBvciBhcnJheSBvZiBlbGVtZW50c1xuICphbmQgYXBwbGllcyB0aGUgc3BlY2lmaWVkIGJhY2tncm91bmQgY29sb3IgdG8gdGhlbVxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBlbGVtZW50c0FyciBhIHNpbmdsZSBlbGVtZW50IG9yIGFycmF5IG9mIGVsZW1lbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gcmdiQ29sb3JTdHIgYW4gcmdiIHN0cmluZyBmb3JtYXR0ZWQgYXM6ICdyZ2IoOTksIDI1NSwgMSknXG4gKiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldEVsZW1lbnRzQmdDb2xvcihlbGVtZW50c0FyciwgcmdiQ29sb3JTdHIpIHtcbiAgaWYgKHR5cGVvZiBlbGVtZW50c0FyciAhPT0gXCJvYmplY3RcIikgcmV0dXJuO1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZWxlbWVudHNBcnIpKSB7XG4gICAgLy8gaWYgYSBzaW5nbGUgZWxlbWVudCBpcyBnaXZlbiwgcHV0IGl0IGluIGFuIGFycmF5XG4gICAgZWxlbWVudHNBcnIgPSBbZWxlbWVudHNBcnJdO1xuICB9XG4gIGVsZW1lbnRzQXJyLmZvckVhY2goXG4gICAgKGVsZW1lbnQpID0+IChlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJnYkNvbG9yU3RyKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hhZGVSZ2JTdHJCeUZhY3RvcihyZ2JTdHIsIGZhY3Rvcikge1xuICBjb25zdCB7IHIsIGcsIGIgfSA9IGdldFZhbHVlc0Zyb21SZ2JTdHIocmdiU3RyKTtcbiAgY29uc3QgW25ld1IsIG5ld0csIG5ld0JdID0gW3IsIGcsIGJdLm1hcCgodmFsKSA9PiBhcHBseUZhY3Rvcih2YWwpKTtcblxuICBmdW5jdGlvbiBhcHBseUZhY3Rvcih2YWx1ZSkge1xuICAgIGxldCBuZXdWYWwgPSB2YWx1ZSArIGZhY3RvcjtcbiAgICBuZXdWYWwgPSBuZXdWYWwgPCAwID8gMCA6IG5ld1ZhbDtcbiAgICBuZXdWYWwgPSBuZXdWYWwgPiAyNTUgPyAyNTUgOiBuZXdWYWw7XG5cbiAgICByZXR1cm4gbmV3VmFsO1xuICB9XG5cbiAgY29uc3QgbmV3UmdiU3RyID0gYHJnYigke25ld1J9LCAke25ld0d9LCAke25ld0J9KWA7XG5cbiAgcmV0dXJuIG5ld1JnYlN0cjtcbn1cblxuZXhwb3J0IGNvbnN0IGFwcGVuZExvcmVtTGluZXMgPSAocGFyZW50LCBudW1MaW5lcykgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUxpbmVzOyBpKyspIHtcbiAgICBjb25zdCBsb3JlbSA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgICAgaW5uZXJUZXh0OlxuICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEVhcXVlIHJlcnVtIHF1YXNpIG5lbW8sIG9mZmljaWlzIGFzc3VtZW5kYSBkb2xvcmVtcXVlIGl1cmUgbW9sZXN0aWFlISBGYWNlcmUgYXRxdWUgb2RpbyBpcHNhIGxhdWRhbnRpdW0gbmloaWwgYWxpYXMsIHNpdCBsaWJlcm8uIFRlbmV0dXIgdmVsaXQgdm9sdXB0YXRpYnVzIHF1YW0hXCIsXG4gICAgfSk7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxvcmVtKTtcbiAgfVxufTtcblxuLy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBOT04gRVhQT1JURUQgVVRJTFMgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLyoqXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IG1pblxuICogQHBhcmFtIHtOdW1iZXJ9IG1heFxuICogQHJldHVybnMgTnVtYmVyXG4gKlxuICogcmV0dXJucyBhbiBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcbiAqL1xuZnVuY3Rpb24gZ2V0UmFuZEludChtaW4sIG1heCkge1xuICBtaW4gPSBNYXRoLmNlaWwobWluKTtcbiAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG5mdW5jdGlvbiBzaG9ydEhleFRvRnVsbEhleChzaG9ydEhleCkge1xuICBjb25zdCBjaHVuazEgPSBzaG9ydEhleC5zbGljZSgxLCAyKS5yZXBlYXQoMik7XG4gIGNvbnN0IGNodW5rMiA9IHNob3J0SGV4LnNsaWNlKDIsIDMpLnJlcGVhdCgyKTtcbiAgY29uc3QgY2h1bmszID0gc2hvcnRIZXguc2xpY2UoMywgNCkucmVwZWF0KDIpO1xuXG4gIHJldHVybiBcIiNcIiArIGNodW5rMSArIGNodW5rMiArIGNodW5rMztcbn1cblxuZnVuY3Rpb24gdmFsdWVUb1BhZGRlZEhleCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLy8gc3R5bGVzaGVldHNcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBDb250ZW50IGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XG5cbi8vIGxvZ2ljIG1hbmFnZXJzXG5pbXBvcnQgQW5pbWF0aW9uTWFuYWdlciBmcm9tIFwiLi9sb2dpYy9BbmltYXRpb25NYW5hZ2VyXCI7XG5pbXBvcnQgQ2FudmFzTWFuYWdlciBmcm9tIFwiLi9sb2dpYy9DYW52YXNNYW5hZ2VyXCI7XG5pbXBvcnQgQ29udHJvbE1hbmFnZXIgZnJvbSBcIi4vbG9naWMvQ29udHJvbE1hbmFnZXJcIjtcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi9sb2dpYy9TdGF0ZU1hbmFnZXJcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChDb250ZW50KCkpO1xuXG5BbmltYXRpb25NYW5hZ2VyLmFwcGx5QW5pbWF0aW9ucygpO1xuQ2FudmFzTWFuYWdlci51cGRhdGVHcmlkU2l6ZSgpO1xuQ29udHJvbE1hbmFnZXIuc2V0R3JpZFNpemUoc3RhdGUuZ2V0R3JpZFNpemUoKSk7XG5cbndpbmRvdy5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgc3RhdGUuc2V0TGVmdE1vdXNlQnV0dG9uRG93bih0cnVlKTtcbn07XG5cbndpbmRvdy5vbm1vdXNldXAgPSBmdW5jdGlvbiAoKSB7XG4gIHN0YXRlLnNldExlZnRNb3VzZUJ1dHRvbkRvd24oZmFsc2UpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==