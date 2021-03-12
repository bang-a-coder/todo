/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: #34373a;\\n  font-family: 'Ubuntu', sans-serif;\\n  color: #e8e8e8;\\n  position: relative; }\\n\\nh1 {\\n  font-size: 28px; }\\n\\n.side-menu {\\n  width: 180px;\\n  height: 100vh;\\n  border-right: solid 1px #7e7e7e;\\n  padding: 30px 10px;\\n  position: fixed; }\\n  .side-menu .logo {\\n    margin-bottom: 20px; }\\n  .side-menu .projects-dir {\\n    margin-top: 50px; }\\n  .side-menu .new-todo-button {\\n    width: 50px;\\n    height: 50px;\\n    border-radius: 50px;\\n    text-align: center;\\n    font-size: 56px;\\n    line-height: 44px;\\n    position: absolute;\\n    bottom: 300px;\\n    border: 2px solid #fff;\\n    margin-left: -28px;\\n    left: 50%;\\n    cursor: pointer; }\\n\\n.main {\\n  padding: 50px;\\n  height: 100vh;\\n  margin-left: 180px; }\\n  .main .task {\\n    width: 600px;\\n    height: 50px;\\n    border: 1px solid #9f9f9f;\\n    border-radius: 5px;\\n    display: flex;\\n    flex-direction: column;\\n    flex-wrap: nowrap;\\n    justify-content: flex-start;\\n    align-items: stretch;\\n    align-content: stretch;\\n    margin-bottom: 5px;\\n    padding: 10px 20px 10px 8px;\\n    box-sizing: border-box;\\n    position: relative; }\\n    .main .task .check-icon {\\n      fill: #fff;\\n      float: left; }\\n    .main .task-title {\\n      margin-left: 20px; }\\n    .main .task .top-details {\\n      width: 100%;\\n      height: 40px;\\n      display: flex;\\n      flex-direction: row;\\n      flex-wrap: nowrap;\\n      align-items: center;\\n      align-content: stretch; }\\n      .main .task .top-details .left {\\n        display: flex;\\n        flex-direction: row;\\n        flex-wrap: nowrap;\\n        justify-content: flex-start;\\n        align-items: center;\\n        align-content: stretch; }\\n      .main .task .top-details .right {\\n        display: flex;\\n        flex-direction: row;\\n        flex-wrap: nowrap;\\n        justify-content: flex-start;\\n        align-items: center;\\n        align-content: stretch; }\\n        .main .task .top-details .right .due-date {\\n          margin-left: 20px; }\\n    .main .task .textarea, .main .task .textarea-new {\\n      width: 70%;\\n      overflow: hidden;\\n      resize: both;\\n      min-height: 40px;\\n      line-height: 20px;\\n      resize: none;\\n      margin-top: 20px;\\n      margin-left: 20px;\\n      padding: 10px;\\n      box-sizing: border-box; }\\n      .main .task .textarea:focus, .main .task .textarea-new:focus {\\n        border: none;\\n        outline: none;\\n        background-color: #3c3f41; }\\n      .main .task .textarea-new {\\n        box-sizing: content-box;\\n        padding: 0;\\n        width: fit-content;\\n        min-width: 250px;\\n        min-height: 0;\\n        margin-top: 0; }\\n    .main .task .textarea[contenteditable]:empty::before, .main .task .textarea-new[contenteditable]:empty::before {\\n      content: \\\"Description\\\";\\n      color: gray; }\\n    .main .task .textarea-new[contenteditable]:empty::before {\\n      content: \\\"New Task\\\";\\n      color: gray; }\\n    .main .task .save-button {\\n      width: 80px;\\n      height: 30px;\\n      border: 1px solid #c2c2c2;\\n      border-radius: 5px;\\n      line-height: 30px;\\n      text-align: center;\\n      position: absolute;\\n      right: 10px;\\n      bottom: 10px;\\n      cursor: pointer; }\\n      .main .task .save-button:hover {\\n        background-color: #8a8a8a;\\n        color: black;\\n        transition: all ease .2s; }\\n  .main .expand {\\n    height: fit-content;\\n    min-height: 100px;\\n    transition: all ease-in-out 0.2s; }\\n  .main .details {\\n    width: 600px;\\n    height: 500px;\\n    position: absolute;\\n    left: 50%;\\n    margin-left: -300px;\\n    background-color: #34373a;\\n    border: 1px solid #bbbbbb;\\n    border-radius: 5px; }\\n  .main .create-task {\\n    margin-bottom: 20px; }\\n\\n.automargin {\\n  margin: auto; }\\n\\n.displayN {\\n  display: none; }\\n\\n.text-center {\\n  text-align: center; }\\n\\n.noselect {\\n  -webkit-touch-callout: none;\\n  /* iOS Safari */\\n  -webkit-user-select: none;\\n  /* Safari */\\n  -khtml-user-select: none;\\n  /* Konqueror HTML */\\n  -moz-user-select: none;\\n  /* Old versions of Firefox */\\n  -ms-user-select: none;\\n  /* Internet Explorer/Edge */\\n  user-select: none;\\n  /* Non-prefixed version, currently\\n                                    supported by Chrome, Edge, Opera and Firefox */ }\\n\\n.flexbox-center-hor {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: nowrap;\\n  justify-content: center;\\n  align-items: center;\\n  align-content: center; }\\n\\nselect {\\n  position: relative;\\n  display: inline-block;\\n  margin-bottom: 15px;\\n  width: 100%; }\\n\\nselect select {\\n  font-family: 'Arial';\\n  display: inline-block;\\n  width: 100%;\\n  cursor: pointer;\\n  padding: 10px 15px;\\n  outline: 0;\\n  border: 0px solid #000000;\\n  border-radius: 0px;\\n  background: #757575;\\n  color: #ffffff;\\n  appearance: none;\\n  -webkit-appearance: none;\\n  -moz-appearance: none; }\\n\\nselect select::-ms-expand {\\n  display: none; }\\n\\nselect select:hover,\\nselect select:focus {\\n  color: #000000;\\n  background: #cccccc; }\\n\\nselect select:disabled {\\n  opacity: 0.5;\\n  pointer-events: none; }\\n\\n.select_arrow {\\n  position: absolute;\\n  top: 16px;\\n  right: 15px;\\n  pointer-events: none;\\n  border-style: solid;\\n  border-width: 8px 5px 0px 5px;\\n  border-color: #7b7b7b transparent transparent transparent; }\\n\\n.select select:hover ~ .select_arrow,\\n.select select:focus ~ .select_arrow {\\n  border-top-color: #000000; }\\n\\n.select select:disabled ~ .select_arrow {\\n  border-top-color: #cccccc; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo/./src/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/dom-manipulator.js":
/*!********************************!*\
  !*** ./src/dom-manipulator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DomCreator\": () => (/* binding */ DomCreator)\n/* harmony export */ });\nclass DomCreator {\n    constructor(){\n        this.displayArea = document.querySelector('.main')\n        //this.createTaskBtn = document.querySelector('.new-todo-button')\n        this.newTaskArea = document.querySelector(`.create-task`)\n        this.newTaskTitle = document.querySelector(`.textarea-new`)\n        this.createTaskBtn = document.querySelector(`#add-button`)\n\n        this.taskList = []\n        this.detectFocus()\n\n    }\n\n    add(task){\n        this.taskList.push(task)\n    }\n\n    updateDescription(idxVal, title, description) {\n        const updateThis = this.taskList.find( task => task.indexVal === idxVal)\n\n        updateThis.description = description\n        updateThis.title = title\n    }\n\n    remove(idxVal) {\n        this.taskList = this.taskList.filter(item => item.indexVal != idxVal)\n        let ripDaddy = document.querySelector(`div[data-index=\"${idxVal}\"]`);\n        ripDaddy.parentElement.removeChild(ripDaddy)\n    }\n    \n    appendToMain(thing){\n        this.displayArea.appendChild(thing)\n    }\n\n    detectFocus(){\n        this.newTaskTitle.addEventListener('focus', function(){\n            console.log('im focused')\n        })\n\n    }\n    \n\n    \n}\n\n\n\n//# sourceURL=webpack://todo/./src/dom-manipulator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-manipulator.js */ \"./src/dom-manipulator.js\");\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\n\n\n\n\nlet dom = new _dom_manipulator_js__WEBPACK_IMPORTED_MODULE_1__.DomCreator()\nlet index = 0\n\ndom.createTaskBtn.addEventListener('click', () => {god()})\n\nfunction god(){\n    index++\n    let task = new _task_js__WEBPACK_IMPORTED_MODULE_2__.Task(index, dom.newTaskTitle.innerHTML)\n    dom.add(task)\n    task.createTaskVisual(dom.displayArea)\n    task.completeBtn.addEventListener('click', function() {\n            dom.remove(task.indexVal)\n            console.log(dom.taskList)\n\n    })\n\n    task.saveButton.addEventListener('click', function() {\n        console.log('clicked')\n        console.log('input is ' + task.descriptionDiv.innerHTML)\n        task.description = task.descriptionDiv.innerHTML\n        task.saveButton.classList.add('displayN')\n        task.descriptionDiv.classList.add('displayN')\n        task.domInstanse.classList.remove('expand')\n\n        dom.updateDescription(task.indexVal,  task.titleDiv.innerHTML,task.descriptionDiv.innerHTML)\n        console.log(task.description)\n        console.log(dom.taskList)\n\n    })\n\n    dom.newTaskTitle.innerHTML = ''\n\n\n    console.log(dom.taskList)\n\n    \n}\n\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Task\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(indexVal, title){\n        this.title = title\n        this.description = 'empty'\n        this.indexVal = indexVal\n\n        this.domInstanse\n        this.titleDiv\n        this.completeBtn\n        this.saveButton\n        this.descriptionDiv\n    }\n\n\n    createTaskVisual(parent){\n        console.log(`what's my purpose? guess I just create divs`)\n        let domInstanse = document.createElement('div')\n\n        let topDetails = document.createElement('div') \n            let left = document.createElement('div')\n            let right = document.createElement('div')\n        \n        let titleDiv = document.createElement('span')\n        let descriptionDiv = document.createElement('span')\n        let saveButton = document.createElement('div')\n        let dltButton = document.createElement('div')\n\n        domInstanse.dataset.index = this.indexVal\n            domInstanse.classList.add('task')\n\n        topDetails.classList.add('top-details')\n            dltButton.classList.add('dltButton')\n            dltButton.innerHTML = `<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"check-icon\" data-index=\"${this.indexVal}\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\"><path fill=\"none\" d=\"M0 0h24v24H0z\"/><path d=\"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z\"/></svg>`\n            left.classList.add('left')\n                titleDiv.classList.add('textarea-new')\n                    titleDiv.setAttribute('role', 'textbox')\n                    titleDiv.toggleAttribute('contenteditable')\n                    titleDiv.innerHTML = this.title\n\n            left.appendChild(titleDiv)\n            right.classList.add('right')\n                right.innerHTML = '<div class=\"due-date\">27/01</div>'\n        topDetails.appendChild(dltButton)\n        topDetails.appendChild(left)\n        topDetails.appendChild(right)\n                \n        descriptionDiv.classList.add('textarea', 'displayN')\n            descriptionDiv.setAttribute('role', 'textbox')\n            descriptionDiv.toggleAttribute('contenteditable')\n\n        saveButton.classList.add('save-button', 'displayN')\n            saveButton.innerHTML = 'Save'\n\n        domInstanse.appendChild(topDetails)\n        domInstanse.appendChild(descriptionDiv)\n        domInstanse.appendChild(saveButton)\n        domInstanse.addEventListener('click', expand)\n\n        this.domInstanse = domInstanse\n        this.completeBtn = dltButton  \n        this.descriptionDiv = descriptionDiv\n        this.saveButton = saveButton\n        this.titleDiv = titleDiv\n\n        \n        function expand(e){\n            if (e.target == domInstanse || e.target == topDetails) {\n                domInstanse.classList.add(`expand`)\n                descriptionDiv.classList.remove('displayN')\n                saveButton.classList.remove('displayN')\n            }\n\n            return\n        }\n        \n        parent.appendChild(domInstanse)\n    }\n}\n\n\n\n//# sourceURL=webpack://todo/./src/task.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;