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
  --links: orangered;

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
  grid-template-columns: minmax(15rem, 1fr) 5fr;
}

.control-panel-container {
  background-color: var(--gray-2);
  display: grid;
  grid-template-columns: auto;
  justify-content: space-evenly;
  align-content: space-between;
  padding: var(--space-lg);
  font-size: 1.2rem;
}

.control-input {
  width: 100%;
  font-family: inherit;
  font-size: inherit;
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

.control-input-group .control-input-label {
  margin-top: var(--space-sm);
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
  color: var(--links);
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

/* footer img:hover {
  animation: github-hover-in 1s forwards;
} */

footer img:active {
  scale: 1;
}

/* .test-header {
  color: red;
} */
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,6BAA6B;EAC7B,6BAA6B;EAC7B,6BAA6B;EAC7B,6BAA6B;EAC7B,6BAA6B;EAC7B,kBAAkB;;EAElB,UAAU;EACV,0BAA0B;EAC1B,0BAA0B;;EAE1B,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,aAAa;;EAEb,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,gBAAgB;;EAEhB,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,wBAAwB;EACxB,4CAAuD;AACzD;;AAEA;EACE,wBAAwB;EACxB,4CAA+C;AACjD;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,aAAa;EACb,iCAAiC;AACnC;AACA,WAAW;AACX;EACE,+BAA+B;EAC/B,kCAAkC;EAClC,aAAa;EACb,kBAAkB;;EAElB,wBAAwB;AAC1B;;AAEA;EACE,kCAAkC;AACpC;;AAEA,SAAS;AACT;EACE,+BAA+B;EAC/B,aAAa;EACb,6CAA6C;AAC/C;;AAEA;EACE,+BAA+B;EAC/B,aAAa;EACb,2BAA2B;EAC3B,6BAA6B;EAC7B,4BAA4B;EAC5B,wBAAwB;EACxB,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,oBAAoB;EACpB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA,WAAW;AACX;EACE,+BAA+B;EAC/B,aAAa;EACb,2DAA2D;EAC3D,qBAAqB;EACrB,YAAY;;EAEZ,aAAa;;EAEb,kCAAkC;AACpC;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;AACrB;;AAEA;EACE;IACE,YAAY;IACZ,QAAQ;EACV;EACA;IACE,cAAc;IACd,UAAU;EACZ;AACF;AACA;EACE;IACE,cAAc;IACd,UAAU;EACZ;EACA;IACE,YAAY;IACZ,QAAQ;EACV;AACF;;AAEA;;GAEG;;AAEH;EACE,QAAQ;AACV;;AAEA;;GAEG","sourcesContent":[":root {\n  /* colors */\n  --gray-5: hsla(0, 0%, 35%, 1);\n  --gray-4: hsla(0, 0%, 50%, 1);\n  --gray-3: hsla(0, 0%, 65%, 1);\n  --gray-2: hsla(0, 0%, 80%, 1);\n  --gray-1: hsla(0, 0%, 95%, 1);\n  --links: orangered;\n\n  /* fonts */\n  --footer-font-size: 1.1rem;\n  --header-font-size: 2.5rem;\n\n  /* border radius */\n  --br-sm: 5px;\n  --br-md: 10px;\n  --br-lg: 15px;\n\n  /* spacing */\n  --space-sm: 5px;\n  --space-md: 15px;\n  --space-lg: 25px;\n\n  /* utility */\n  --marginSpace: 0.3rem;\n}\n\n@font-face {\n  font-family: \"SpaceTime\";\n  src: url(\"./global-assets/fonts/spacetime-regular.ttf\");\n}\n\n@font-face {\n  font-family: \"MonoRound\";\n  src: url(\"./global-assets/fonts/Monoround.otf\");\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-family: MonoRound, sans-serif;\n}\n\n#app {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}\n/* header */\nheader {\n  background-color: var(--gray-3);\n  font-family: SpaceTime, sans-serif;\n  display: grid;\n  text-align: center;\n\n  padding: 1rem 0 1.3rem 0;\n}\n\nheader div {\n  font-size: var(--header-font-size);\n}\n\n/* main */\nmain {\n  background-color: var(--gray-1);\n  display: grid;\n  grid-template-columns: minmax(15rem, 1fr) 5fr;\n}\n\n.control-panel-container {\n  background-color: var(--gray-2);\n  display: grid;\n  grid-template-columns: auto;\n  justify-content: space-evenly;\n  align-content: space-between;\n  padding: var(--space-lg);\n  font-size: 1.2rem;\n}\n\n.control-input {\n  width: 100%;\n  font-family: inherit;\n  font-size: inherit;\n}\n\nbutton.control-input {\n  padding-top: 0.25rem;\n  border-radius: var(--br-sm);\n}\n\n.control-input-group {\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.control-input-group .control-input-label {\n  margin-top: var(--space-sm);\n}\n\n/* footer */\nfooter {\n  background-color: var(--gray-5);\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  justify-items: center;\n  color: white;\n\n  padding: 2rem;\n\n  font-size: var(--footer-font-size);\n}\n\nfooter img {\n  height: calc(var(--footer-font-size) - 0.1rem);\n}\n\nfooter a {\n  margin-left: var(--marginSpace);\n  color: var(--links);\n}\n\n@keyframes github-hover-in {\n  from {\n    rotate: 0deg;\n    scale: 1;\n  }\n  to {\n    rotate: 720deg;\n    scale: 1.2;\n  }\n}\n@keyframes github-hover-out {\n  from {\n    rotate: 720deg;\n    scale: 1.2;\n  }\n  to {\n    rotate: 0deg;\n    scale: 1;\n  }\n}\n\n/* footer img:hover {\n  animation: github-hover-in 1s forwards;\n} */\n\nfooter img:active {\n  scale: 1;\n}\n\n/* .test-header {\n  color: red;\n} */\n"],"sourceRoot":""}]);
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
/* harmony import */ var _color_pickers_PaintColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color-pickers/PaintColorPicker */ "./src/components/ControlPanel/color-pickers/PaintColorPicker.js");
/* harmony import */ var _color_pickers_CanvasColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color-pickers/CanvasColorPicker */ "./src/components/ControlPanel/color-pickers/CanvasColorPicker.js");
/* harmony import */ var _buttons_EraseBrushButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buttons/EraseBrushButton */ "./src/components/ControlPanel/buttons/EraseBrushButton.js");
/* harmony import */ var _buttons_EraseGridButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttons/EraseGridButton */ "./src/components/ControlPanel/buttons/EraseGridButton.js");
/* harmony import */ var _buttons_ToggleGridlinesButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons/ToggleGridlinesButton */ "./src/components/ControlPanel/buttons/ToggleGridlinesButton.js");
/* harmony import */ var _buttons_RainbowModeButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buttons/RainbowModeButton */ "./src/components/ControlPanel/buttons/RainbowModeButton.js");
/* harmony import */ var _buttons_ShadeModeButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons/ShadeModeButton */ "./src/components/ControlPanel/buttons/ShadeModeButton.js");
//Component imports









const ControlPanel = () => {
  const panelContainer = Object.assign(document.createElement("div"), {
    className: "control-panel-container",
  });

  panelContainer.appendChild((0,_color_pickers_PaintColorPicker__WEBPACK_IMPORTED_MODULE_0__["default"])());
  panelContainer.appendChild((0,_color_pickers_CanvasColorPicker__WEBPACK_IMPORTED_MODULE_1__["default"])());
  panelContainer.appendChild((0,_buttons_EraseBrushButton__WEBPACK_IMPORTED_MODULE_2__["default"])());
  panelContainer.appendChild((0,_buttons_EraseGridButton__WEBPACK_IMPORTED_MODULE_3__["default"])());
  panelContainer.appendChild((0,_buttons_ToggleGridlinesButton__WEBPACK_IMPORTED_MODULE_4__["default"])());
  panelContainer.appendChild((0,_buttons_RainbowModeButton__WEBPACK_IMPORTED_MODULE_5__["default"])());
  panelContainer.appendChild((0,_buttons_ShadeModeButton__WEBPACK_IMPORTED_MODULE_6__["default"])());

  return panelContainer;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControlPanel);


/***/ }),

/***/ "./src/components/ControlPanel/buttons/EraseBrushButton.js":
/*!*****************************************************************!*\
  !*** ./src/components/ControlPanel/buttons/EraseBrushButton.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic-elements/Button */ "./src/components/basic-elements/Button.js");


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

/***/ "./src/components/ControlPanel/buttons/EraseGridButton.js":
/*!****************************************************************!*\
  !*** ./src/components/ControlPanel/buttons/EraseGridButton.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic-elements/Button */ "./src/components/basic-elements/Button.js");


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

/***/ "./src/components/ControlPanel/buttons/RainbowModeButton.js":
/*!******************************************************************!*\
  !*** ./src/components/ControlPanel/buttons/RainbowModeButton.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic-elements/Button */ "./src/components/basic-elements/Button.js");


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

/***/ "./src/components/ControlPanel/buttons/ShadeModeButton.js":
/*!****************************************************************!*\
  !*** ./src/components/ControlPanel/buttons/ShadeModeButton.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic-elements/Button */ "./src/components/basic-elements/Button.js");


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

/***/ "./src/components/ControlPanel/buttons/ToggleGridlinesButton.js":
/*!**********************************************************************!*\
  !*** ./src/components/ControlPanel/buttons/ToggleGridlinesButton.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic-elements/Button */ "./src/components/basic-elements/Button.js");


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

/***/ "./src/components/ControlPanel/color-pickers/CanvasColorPicker.js":
/*!************************************************************************!*\
  !*** ./src/components/ControlPanel/color-pickers/CanvasColorPicker.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_ColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic-elements/ColorPicker */ "./src/components/basic-elements/ColorPicker.js");
/* harmony import */ var _basic_elements_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../basic-elements/Label */ "./src/components/basic-elements/Label.js");



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

/***/ "./src/components/ControlPanel/color-pickers/PaintColorPicker.js":
/*!***********************************************************************!*\
  !*** ./src/components/ControlPanel/color-pickers/PaintColorPicker.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _basic_elements_ColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../basic-elements/ColorPicker */ "./src/components/basic-elements/ColorPicker.js");


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


const Main = () => {
  const main = Object.assign(document.createElement("main"), {});

  main.appendChild((0,_ControlPanel_ControlPanel__WEBPACK_IMPORTED_MODULE_0__["default"])());

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

/***/ "./src/components/basic-elements/Label.js":
/*!************************************************!*\
  !*** ./src/components/basic-elements/Label.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Label = () => {
  const label = Object.assign(document.createElement("label"));
  return label;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);


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
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimationController);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDcUI7O0FBRXJCO0FBQ3VDOztBQUV2QztBQUM4RDs7QUFFOUQsMEJBQTBCLDJEQUFPOztBQUVqQztBQUNBLHNFQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9Db250cm9sUGFuZWwuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvYnV0dG9ucy9FcmFzZUJydXNoQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2J1dHRvbnMvRXJhc2VHcmlkQnV0dG9uLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvQ29udHJvbFBhbmVsL2J1dHRvbnMvUmFpbmJvd01vZGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvYnV0dG9ucy9TaGFkZU1vZGVCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvYnV0dG9ucy9Ub2dnbGVHcmlkbGluZXNCdXR0b24uanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Db250cm9sUGFuZWwvY29sb3ItcGlja2Vycy9DYW52YXNDb2xvclBpY2tlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL0NvbnRyb2xQYW5lbC9jb2xvci1waWNrZXJzL1BhaW50Q29sb3JQaWNrZXIuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvTWFpbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL2Jhc2ljLWVsZW1lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC8uL3NyYy9jb21wb25lbnRzL2Jhc2ljLWVsZW1lbnRzL0NvbG9yUGlja2VyLmpzIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2NvbXBvbmVudHMvYmFzaWMtZWxlbWVudHMvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3AvLi9zcmMvbG9naWMvQW5pbWF0aW9uQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jYXJsaW4tbWl0Y2hlbGwtZXRjaC1hLXNrZXRjaC13ZWJwYWNrLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY2FybGluLW1pdGNoZWxsLWV0Y2gtYS1za2V0Y2gtd2VicGFjay10b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2Nhcmxpbi1taXRjaGVsbC1ldGNoLWEtc2tldGNoLXdlYnBhY2stdG9wLy4vc3JjL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9nbG9iYWwtYXNzZXRzL2ZvbnRzL3NwYWNldGltZS1yZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vZ2xvYmFsLWFzc2V0cy9mb250cy9Nb25vcm91bmQub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAvKiBjb2xvcnMgKi9cbiAgLS1ncmF5LTU6IGhzbGEoMCwgMCUsIDM1JSwgMSk7XG4gIC0tZ3JheS00OiBoc2xhKDAsIDAlLCA1MCUsIDEpO1xuICAtLWdyYXktMzogaHNsYSgwLCAwJSwgNjUlLCAxKTtcbiAgLS1ncmF5LTI6IGhzbGEoMCwgMCUsIDgwJSwgMSk7XG4gIC0tZ3JheS0xOiBoc2xhKDAsIDAlLCA5NSUsIDEpO1xuICAtLWxpbmtzOiBvcmFuZ2VyZWQ7XG5cbiAgLyogZm9udHMgKi9cbiAgLS1mb290ZXItZm9udC1zaXplOiAxLjFyZW07XG4gIC0taGVhZGVyLWZvbnQtc2l6ZTogMi41cmVtO1xuXG4gIC8qIGJvcmRlciByYWRpdXMgKi9cbiAgLS1ici1zbTogNXB4O1xuICAtLWJyLW1kOiAxMHB4O1xuICAtLWJyLWxnOiAxNXB4O1xuXG4gIC8qIHNwYWNpbmcgKi9cbiAgLS1zcGFjZS1zbTogNXB4O1xuICAtLXNwYWNlLW1kOiAxNXB4O1xuICAtLXNwYWNlLWxnOiAyNXB4O1xuXG4gIC8qIHV0aWxpdHkgKi9cbiAgLS1tYXJnaW5TcGFjZTogMC4zcmVtO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2VUaW1lXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9ub1JvdW5kXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IE1vbm9Sb3VuZCwgc2Fucy1zZXJpZjtcbn1cblxuI2FwcCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnIgYXV0bztcbn1cbi8qIGhlYWRlciAqL1xuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0zKTtcbiAgZm9udC1mYW1pbHk6IFNwYWNlVGltZSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZ3JpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBhZGRpbmc6IDFyZW0gMCAxLjNyZW0gMDtcbn1cblxuaGVhZGVyIGRpdiB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLWZvbnQtc2l6ZSk7XG59XG5cbi8qIG1haW4gKi9cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTEpO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxNXJlbSwgMWZyKSA1ZnI7XG59XG5cbi5jb250cm9sLXBhbmVsLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMik7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlLWxnKTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi5jb250cm9sLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbi5jb250cm9sLWlucHV0IHtcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJyLXNtKTtcbn1cblxuLmNvbnRyb2wtaW5wdXQtZ3JvdXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jb250cm9sLWlucHV0LWdyb3VwIC5jb250cm9sLWlucHV0LWxhYmVsIHtcbiAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2Utc20pO1xufVxuXG4vKiBmb290ZXIgKi9cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktNSk7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcblxuICBwYWRkaW5nOiAycmVtO1xuXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSk7XG59XG5cbmZvb3RlciBpbWcge1xuICBoZWlnaHQ6IGNhbGModmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSkgLSAwLjFyZW0pO1xufVxuXG5mb290ZXIgYSB7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1tYXJnaW5TcGFjZSk7XG4gIGNvbG9yOiB2YXIoLS1saW5rcyk7XG59XG5cbkBrZXlmcmFtZXMgZ2l0aHViLWhvdmVyLWluIHtcbiAgZnJvbSB7XG4gICAgcm90YXRlOiAwZGVnO1xuICAgIHNjYWxlOiAxO1xuICB9XG4gIHRvIHtcbiAgICByb3RhdGU6IDcyMGRlZztcbiAgICBzY2FsZTogMS4yO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGdpdGh1Yi1ob3Zlci1vdXQge1xuICBmcm9tIHtcbiAgICByb3RhdGU6IDcyMGRlZztcbiAgICBzY2FsZTogMS4yO1xuICB9XG4gIHRvIHtcbiAgICByb3RhdGU6IDBkZWc7XG4gICAgc2NhbGU6IDE7XG4gIH1cbn1cblxuLyogZm9vdGVyIGltZzpob3ZlciB7XG4gIGFuaW1hdGlvbjogZ2l0aHViLWhvdmVyLWluIDFzIGZvcndhcmRzO1xufSAqL1xuXG5mb290ZXIgaW1nOmFjdGl2ZSB7XG4gIHNjYWxlOiAxO1xufVxuXG4vKiAudGVzdC1oZWFkZXIge1xuICBjb2xvcjogcmVkO1xufSAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0Isa0JBQWtCOztFQUVsQixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLDBCQUEwQjs7RUFFMUIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTs7RUFFYixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7O0VBRWhCLFlBQVk7RUFDWixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXVEO0FBQ3pEOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUErQztBQUNqRDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixpQ0FBaUM7QUFDbkM7QUFDQSxXQUFXO0FBQ1g7RUFDRSwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixrQkFBa0I7O0VBRWxCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQSxTQUFTO0FBQ1Q7RUFDRSwrQkFBK0I7RUFDL0IsYUFBYTtFQUNiLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBLFdBQVc7QUFDWDtFQUNFLCtCQUErQjtFQUMvQixhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELHFCQUFxQjtFQUNyQixZQUFZOztFQUVaLGFBQWE7O0VBRWIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLFFBQVE7RUFDVjtFQUNBO0lBQ0UsY0FBYztJQUNkLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7SUFDWixRQUFRO0VBQ1Y7QUFDRjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLFFBQVE7QUFDVjs7QUFFQTs7R0FFR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAvKiBjb2xvcnMgKi9cXG4gIC0tZ3JheS01OiBoc2xhKDAsIDAlLCAzNSUsIDEpO1xcbiAgLS1ncmF5LTQ6IGhzbGEoMCwgMCUsIDUwJSwgMSk7XFxuICAtLWdyYXktMzogaHNsYSgwLCAwJSwgNjUlLCAxKTtcXG4gIC0tZ3JheS0yOiBoc2xhKDAsIDAlLCA4MCUsIDEpO1xcbiAgLS1ncmF5LTE6IGhzbGEoMCwgMCUsIDk1JSwgMSk7XFxuICAtLWxpbmtzOiBvcmFuZ2VyZWQ7XFxuXFxuICAvKiBmb250cyAqL1xcbiAgLS1mb290ZXItZm9udC1zaXplOiAxLjFyZW07XFxuICAtLWhlYWRlci1mb250LXNpemU6IDIuNXJlbTtcXG5cXG4gIC8qIGJvcmRlciByYWRpdXMgKi9cXG4gIC0tYnItc206IDVweDtcXG4gIC0tYnItbWQ6IDEwcHg7XFxuICAtLWJyLWxnOiAxNXB4O1xcblxcbiAgLyogc3BhY2luZyAqL1xcbiAgLS1zcGFjZS1zbTogNXB4O1xcbiAgLS1zcGFjZS1tZDogMTVweDtcXG4gIC0tc3BhY2UtbGc6IDI1cHg7XFxuXFxuICAvKiB1dGlsaXR5ICovXFxuICAtLW1hcmdpblNwYWNlOiAwLjNyZW07XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTcGFjZVRpbWVcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vZ2xvYmFsLWFzc2V0cy9mb250cy9zcGFjZXRpbWUtcmVndWxhci50dGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk1vbm9Sb3VuZFxcXCI7XFxuICBzcmM6IHVybChcXFwiLi9nbG9iYWwtYXNzZXRzL2ZvbnRzL01vbm9yb3VuZC5vdGZcXFwiKTtcXG59XFxuXFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogTW9ub1JvdW5kLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4jYXBwIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xcbn1cXG4vKiBoZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0zKTtcXG4gIGZvbnQtZmFtaWx5OiBTcGFjZVRpbWUsIHNhbnMtc2VyaWY7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgcGFkZGluZzogMXJlbSAwIDEuM3JlbSAwO1xcbn1cXG5cXG5oZWFkZXIgZGl2IHtcXG4gIGZvbnQtc2l6ZTogdmFyKC0taGVhZGVyLWZvbnQtc2l6ZSk7XFxufVxcblxcbi8qIG1haW4gKi9cXG5tYWluIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyYXktMSk7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTVyZW0sIDFmcikgNWZyO1xcbn1cXG5cXG4uY29udHJvbC1wYW5lbC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JheS0yKTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZS1sZyk7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmNvbnRyb2wtaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG59XFxuXFxuYnV0dG9uLmNvbnRyb2wtaW5wdXQge1xcbiAgcGFkZGluZy10b3A6IDAuMjVyZW07XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1ici1zbSk7XFxufVxcblxcbi5jb250cm9sLWlucHV0LWdyb3VwIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY29udHJvbC1pbnB1dC1ncm91cCAuY29udHJvbC1pbnB1dC1sYWJlbCB7XFxuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjZS1zbSk7XFxufVxcblxcbi8qIGZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmF5LTUpO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgcGFkZGluZzogMnJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9vdGVyLWZvbnQtc2l6ZSk7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiBjYWxjKHZhcigtLWZvb3Rlci1mb250LXNpemUpIC0gMC4xcmVtKTtcXG59XFxuXFxuZm9vdGVyIGEge1xcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLW1hcmdpblNwYWNlKTtcXG4gIGNvbG9yOiB2YXIoLS1saW5rcyk7XFxufVxcblxcbkBrZXlmcmFtZXMgZ2l0aHViLWhvdmVyLWluIHtcXG4gIGZyb20ge1xcbiAgICByb3RhdGU6IDBkZWc7XFxuICAgIHNjYWxlOiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICByb3RhdGU6IDcyMGRlZztcXG4gICAgc2NhbGU6IDEuMjtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBnaXRodWItaG92ZXItb3V0IHtcXG4gIGZyb20ge1xcbiAgICByb3RhdGU6IDcyMGRlZztcXG4gICAgc2NhbGU6IDEuMjtcXG4gIH1cXG4gIHRvIHtcXG4gICAgcm90YXRlOiAwZGVnO1xcbiAgICBzY2FsZTogMTtcXG4gIH1cXG59XFxuXFxuLyogZm9vdGVyIGltZzpob3ZlciB7XFxuICBhbmltYXRpb246IGdpdGh1Yi1ob3Zlci1pbiAxcyBmb3J3YXJkcztcXG59ICovXFxuXFxuZm9vdGVyIGltZzphY3RpdmUge1xcbiAgc2NhbGU6IDE7XFxufVxcblxcbi8qIC50ZXN0LWhlYWRlciB7XFxuICBjb2xvcjogcmVkO1xcbn0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3Rlci9Gb290ZXJcIjtcblxuY29uc3QgQXBwID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaWQ6IFwiYXBwXCIsXG4gIH0pO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoSGVhZGVyKCkpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKE1haW4oKSk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoRm9vdGVyKCkpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiLy9Db21wb25lbnQgaW1wb3J0c1xuaW1wb3J0IFBhaW50Q29sb3JQaWNrZXIgZnJvbSBcIi4vY29sb3ItcGlja2Vycy9QYWludENvbG9yUGlja2VyXCI7XG5pbXBvcnQgQ2FudmFzQ29sb3JQaWNrZXIgZnJvbSBcIi4vY29sb3ItcGlja2Vycy9DYW52YXNDb2xvclBpY2tlclwiO1xuXG5pbXBvcnQgRXJhc2VCcnVzaEJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL0VyYXNlQnJ1c2hCdXR0b25cIjtcbmltcG9ydCBFcmFzZUdyaWRCdXR0b24gZnJvbSBcIi4vYnV0dG9ucy9FcmFzZUdyaWRCdXR0b25cIjtcbmltcG9ydCBUb2dnbGVHcmlkbGluZXNCdXR0b24gZnJvbSBcIi4vYnV0dG9ucy9Ub2dnbGVHcmlkbGluZXNCdXR0b25cIjtcbmltcG9ydCBSYWluYm93TW9kZUJ1dHRvbiBmcm9tIFwiLi9idXR0b25zL1JhaW5ib3dNb2RlQnV0dG9uXCI7XG5pbXBvcnQgU2hhZGVNb2RlQnV0dG9uIGZyb20gXCIuL2J1dHRvbnMvU2hhZGVNb2RlQnV0dG9uXCI7XG5cbmNvbnN0IENvbnRyb2xQYW5lbCA9ICgpID0+IHtcbiAgY29uc3QgcGFuZWxDb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHtcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1wYW5lbC1jb250YWluZXJcIixcbiAgfSk7XG5cbiAgcGFuZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoUGFpbnRDb2xvclBpY2tlcigpKTtcbiAgcGFuZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoQ2FudmFzQ29sb3JQaWNrZXIoKSk7XG4gIHBhbmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKEVyYXNlQnJ1c2hCdXR0b24oKSk7XG4gIHBhbmVsQ29udGFpbmVyLmFwcGVuZENoaWxkKEVyYXNlR3JpZEJ1dHRvbigpKTtcbiAgcGFuZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoVG9nZ2xlR3JpZGxpbmVzQnV0dG9uKCkpO1xuICBwYW5lbENvbnRhaW5lci5hcHBlbmRDaGlsZChSYWluYm93TW9kZUJ1dHRvbigpKTtcbiAgcGFuZWxDb250YWluZXIuYXBwZW5kQ2hpbGQoU2hhZGVNb2RlQnV0dG9uKCkpO1xuXG4gIHJldHVybiBwYW5lbENvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xQYW5lbDtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBFcmFzZUJydXNoQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJlcmFzZS1icnVzaC1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiRXJhc2VcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJhc2VCcnVzaEJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBFcmFzZUdyaWRCdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gIGNvbnN0IGJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oQnV0dG9uKCksIHtcbiAgICBpZDogXCJlcmFzZS1ncmlkLWJ1dHRvblwiLFxuICAgIGlubmVyVGV4dDogXCJFcmFzZSBncmlkXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVyYXNlR3JpZEJ1dHRvbjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2Jhc2ljLWVsZW1lbnRzL0J1dHRvblwiO1xuXG5jb25zdCBSYWluYm93TW9kZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcInJhaW5ib3ctbW9kZS1idXR0b25cIixcbiAgICBpbm5lclRleHQ6IFwiUmFpbmJvdyBtb2RlXCIsXG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXRcIixcbiAgfSk7XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJhaW5ib3dNb2RlQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vYmFzaWMtZWxlbWVudHMvQnV0dG9uXCI7XG5cbmNvbnN0IFNoYWRlTW9kZUJ1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcInNoYWRlLW1vZGUtYnV0dG9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIlNoYWRlIG1vZGVcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2hhZGVNb2RlQnV0dG9uO1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vYmFzaWMtZWxlbWVudHMvQnV0dG9uXCI7XG5cbmNvbnN0IFRvZ2dsZUdyaWRsaW5lc0J1dHRvbiA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgY29uc3QgYnV0dG9uID0gT2JqZWN0LmFzc2lnbihCdXR0b24oKSwge1xuICAgIGlkOiBcInRvZ2dsZS1ncmlkbGluZXMtYnV0dG9uXCIsXG4gICAgaW5uZXJUZXh0OiBcIlRvZ2dsZSBncmlkbGluZXNcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9nZ2xlR3JpZGxpbmVzQnV0dG9uO1xuIiwiaW1wb3J0IENvbG9yUGlja2VyIGZyb20gXCIuLi8uLi9iYXNpYy1lbGVtZW50cy9Db2xvclBpY2tlclwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuLi8uLi9iYXNpYy1lbGVtZW50cy9MYWJlbFwiO1xuXG5jb25zdCBDYW52YXNDb2xvclBpY2tlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtZ3JvdXBcIixcbiAgfSk7XG4gIGNvbnN0IGNvbG9yUGlja2VyID0gT2JqZWN0LmFzc2lnbihDb2xvclBpY2tlcigpLCB7XG4gICAgaWQ6IFwiY2FudmFzLWNvbG9yLXBpY2tlclwiLFxuICAgIGNsYXNzTmFtZTogXCJjb250cm9sLWlucHV0XCIsXG4gIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaW5uZXJUZXh0OiBcIlNlbGVjdCBjYW52YXMgY29sb3JcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1sYWJlbFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYW52YXNDb2xvclBpY2tlcjtcbiIsImltcG9ydCBDb2xvclBpY2tlciBmcm9tIFwiLi4vLi4vYmFzaWMtZWxlbWVudHMvQ29sb3JQaWNrZXJcIjtcblxuY29uc3QgUGFpbnRDb2xvclBpY2tlciA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvbnRyb2wtaW5wdXQtZ3JvdXBcIixcbiAgfSk7XG5cbiAgY29uc3QgY29sb3JQaWNrZXIgPSBPYmplY3QuYXNzaWduKENvbG9yUGlja2VyKCksIHtcbiAgICBpZDogXCJwYWludC1jb2xvci1waWNrZXJcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dFwiLFxuICB9KTtcblxuICBjb25zdCBsYWJlbCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSwge1xuICAgIGlubmVyVGV4dDogXCJTZWxlY3QgcGFpbnQgY29sb3JcIixcbiAgICBjbGFzc05hbWU6IFwiY29udHJvbC1pbnB1dC1sYWJlbFwiLFxuICB9KTtcblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29sb3JQaWNrZXIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWludENvbG9yUGlja2VyO1xuIiwiaW1wb3J0IEdpdEh1Ykljb24gZnJvbSBcIi4vbG9nb3MvZ2l0aHViLW1hcmstd2hpdGUucG5nXCI7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgY29uc3QgZm9vdGVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpLCB7fSk7XG5cbiAgY29uc3QgY29weXJpZ2h0Q29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcImNvcHlyaWdodC1jb250YWluZXJcIixcbiAgICBpbm5lclRleHQ6IGDCqSBDYXJsaW4gTWl0Y2hlbGwgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YCxcbiAgfSk7XG5cbiAgY29uc3QgdG9wQ29udGFpbmVyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgY2xhc3NOYW1lOiBcInRvcC1hdHRyaWJ1dGlvblwiLFxuICAgIGlubmVyVGV4dDogXCJJbnNwaXJlZCBieVwiLFxuICB9KTtcblxuICBjb25zdCB0b3BMaW5rID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKSwge1xuICAgIGNsYXNzTmFtZTogXCJ0b3AtbGlua1wiLFxuICAgIGlubmVyVGV4dDogXCJUaGUgT2RpbiBQcm9qZWN0XCIsXG4gICAgaHJlZjogXCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLCB7XG4gICAgaHJlZjogXCJodHRwczovL2dpdGh1Yi5jb20vY2FybGluLW1pdGNoZWxsL2V0Y2gtYS1za2V0Y2gtd2VicGFjay1UT1BcIixcbiAgfSk7XG5cbiAgY29uc3QgZ2l0aHViSWNvbiA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKSwge1xuICAgIHNyYzogR2l0SHViSWNvbixcbiAgICBjbGFzc05hbWU6IFwiZ2l0aHViLWljb25cIixcbiAgfSk7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGNvcHlyaWdodENvbnRhaW5lcik7XG4gIGNvcHlyaWdodENvbnRhaW5lci5hcHBlbmRDaGlsZChnaXRodWJMaW5rKTtcbiAgZ2l0aHViTGluay5hcHBlbmRDaGlsZChnaXRodWJJY29uKTtcblxuICBmb290ZXIuYXBwZW5kQ2hpbGQodG9wQ29udGFpbmVyKTtcbiAgdG9wQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvcExpbmspO1xuXG4gIHJldHVybiBmb290ZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJjb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiLCB7fSkpO1xuXG4gIGNvbnN0IHRpdGxlID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLCB7XG4gICAgaW5uZXJUZXh0OiBcIkV0Y2gtQS1Ta2V0Y2hcIixcbiAgfSk7XG5cbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICByZXR1cm4gaGVhZGVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IENvbnRyb2xQYW5lbCBmcm9tIFwiLi9Db250cm9sUGFuZWwvQ29udHJvbFBhbmVsXCI7XG5cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpLCB7fSk7XG5cbiAgbWFpbi5hcHBlbmRDaGlsZChDb250cm9sUGFuZWwoKSk7XG5cbiAgcmV0dXJuIG1haW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluO1xuIiwiY29uc3QgQnV0dG9uID0gKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSBPYmplY3QuYXNzaWduKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIikpO1xuICByZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiY29uc3QgQ29sb3JQaWNrZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbG9yUGlja2VyID0gT2JqZWN0LmFzc2lnbihkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksIHtcbiAgICB0eXBlOiBcImNvbG9yXCIsXG4gIH0pO1xuICByZXR1cm4gY29sb3JQaWNrZXI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb2xvclBpY2tlcjtcbiIsImNvbnN0IExhYmVsID0gKCkgPT4ge1xuICBjb25zdCBsYWJlbCA9IE9iamVjdC5hc3NpZ24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpKTtcbiAgcmV0dXJuIGxhYmVsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iLCJjb25zdCBBbmltYXRpb25Db250cm9sbGVyID0gKCkgPT4ge1xuICAvLyBnaXRodWItaWNvblxuICBPYmplY3QuYXNzaWduKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2l0aHViLWljb25cIiksIHtcbiAgICBvbm1vdXNlb3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdHlsZS5hbmltYXRpb24gPSBcImdpdGh1Yi1ob3Zlci1pbiAxcyBmb3J3YXJkc1wiO1xuICAgIH0sXG4gICAgb25tb3VzZW91dDogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5zdHlsZS5hbmltYXRpb24gPSBcImdpdGh1Yi1ob3Zlci1vdXQgMXMgZm9yd2FyZHNcIjtcbiAgICB9LFxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFuaW1hdGlvbkNvbnRyb2xsZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIHN0eWxlc2hlZXRzXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4vLyBjb21wb25lbnRzXG5pbXBvcnQgQ29udGVudCBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFwiO1xuXG4vLyBsb2dpYyBtYW5hZ2Vyc1xuaW1wb3J0IEFuaW1hdGlvbkNvbnRyb2xsZXIgZnJvbSBcIi4vbG9naWMvQW5pbWF0aW9uQ29udHJvbGxlclwiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKENvbnRlbnQoKSk7XG5cbi8vIGluaXRpYWxpemUgc2luZ2xlLXVzZS1jb250cm9sbGVyc1xuQW5pbWF0aW9uQ29udHJvbGxlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9