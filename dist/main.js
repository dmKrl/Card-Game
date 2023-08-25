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

/***/ "./components/renderGamePage.js":
/*!**************************************!*\
  !*** ./components/renderGamePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderHeader */ \"./components/renderHeader.js\");\n/* harmony import */ var _renderPageSelectedDifficulty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderPageSelectedDifficulty */ \"./components/renderPageSelectedDifficulty.js\");\n\n\n\nfunction renderGamePage(levelDifficulty) {\n  (0,_renderHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_renderPageSelectedDifficulty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(levelDifficulty);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGamePage);\n\n\n//# sourceURL=webpack://fourth-module/./components/renderGamePage.js?");

/***/ }),

/***/ "./components/renderHeader.js":
/*!************************************!*\
  !*** ./components/renderHeader.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderMainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderMainPage */ \"./components/renderMainPage.js\");\n\r\n\r\nconst header = document.querySelector('header');\r\nfunction renderHeader() {\r\n  const headerHtml = `\r\n  <div class=\"header\">\r\n  <div class=\"header-box\">\r\n  <div>\r\n    <p class=\"header-text header-text-count\">00<span>min</span>.00<span>sec</span></p>\r\n  </div>\r\n    <button class=\"button-start button-start-again\">Начать заново</button>\r\n  </div>\r\n  </div>\r\n\r\n  `;\r\n  header.innerHTML = headerHtml;\r\n  const buttonStartAgain = document.querySelector('.button-start-again');\r\n\r\n  buttonStartAgain.addEventListener('click', () => {\r\n    header.innerHTML = '';\r\n    (0,_renderMainPage__WEBPACK_IMPORTED_MODULE_0__.renderMainPage)();\r\n  });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHeader);\r\n\n\n//# sourceURL=webpack://fourth-module/./components/renderHeader.js?");

/***/ }),

/***/ "./components/renderMainPage.js":
/*!**************************************!*\
  !*** ./components/renderMainPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMainPage: () => (/* binding */ renderMainPage)\n/* harmony export */ });\n/* harmony import */ var _renderGamePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGamePage.js */ \"./components/renderGamePage.js\");\n\nconst app = document.querySelector('.app');\n\nfunction renderMainPage() {\n  const mainPageHtml = `\n<div class=\"container\">\n  <div class=\"main\">\n    <p class=\"main-text\">Выберите сложность</p>\n    <div class=\"main-checbox\">\n        <input type=\"radio\" id=\"easy\" name=\"difficulty\"/><label\n          for=\"easy\"\n          class=\"main-checbox-text\"\n          >1</label\n        >\n        <input type=\"radio\" id=\"medium\" name=\"difficulty\" /><label\n          for=\"medium\"\n          class=\"main-checbox-text\"\n          >2</label\n        >\n        <input type=\"radio\" id=\"hard\" name=\"difficulty\" /><label\n          for=\"hard\"\n          class=\"main-checbox-text\"\n          >3</label\n        >\n    </div>\n    <button class=\"button-start\">Старт</button>\n  </div>\n</div>\n\n`;\n  app.innerHTML = mainPageHtml;\n  const boxSelectedDifficulty = document.querySelector('.main');\nЫ\n  boxSelectedDifficulty.addEventListener('click', (event) => {\n    const target = event.target;\n    if (target.closest('.main-checbox-text')) {\n      localStorage.setItem('checked', target.getAttribute('for'));\n    }\n    if (target.closest('.button-start')) {\n      let levelDifficulty = localStorage.getItem('checked');\n      (0,_renderGamePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(levelDifficulty);\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://fourth-module/./components/renderMainPage.js?");

/***/ }),

/***/ "./components/renderPageSelectedDifficulty.js":
/*!****************************************************!*\
  !*** ./components/renderPageSelectedDifficulty.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderPagesLevels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPagesLevels */ \"./components/renderPagesLevels.js\");\n\n\nconst app = document.querySelector('.app');\n\nfunction renderPageSelectedDifficulty(levelDifficulty) {\n  app.innerHTML = '';\n  const quantityCardsInLevel = [6, 12, 18];\n  switch (levelDifficulty) {\n    case 'easy':\n      (0,_renderPagesLevels__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(app, quantityCardsInLevel[0], levelDifficulty);\n      break;\n    case 'medium':\n      (0,_renderPagesLevels__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(app, quantityCardsInLevel[1], levelDifficulty);\n      break;\n    case 'hard':\n      (0,_renderPagesLevels__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(app, quantityCardsInLevel[2], levelDifficulty);\n      break;\n    default:\n      break;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPageSelectedDifficulty);\n\n\n//# sourceURL=webpack://fourth-module/./components/renderPageSelectedDifficulty.js?");

/***/ }),

/***/ "./components/renderPagesLevels.js":
/*!*****************************************!*\
  !*** ./components/renderPagesLevels.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst template = document.querySelector('.game');\r\n\r\nfunction renderPagesLevels(app, quantityCardsInLevel, levelDifficulty) {\r\n  app.innerHTML = `\r\n  <div class=\"level\">      \r\n    <div class=\"level-value\">\r\n    </div>\r\n  </div>`;\r\n  const levelValue = document.querySelector('.level-value');\r\n  levelValue.classList.add(`level-${levelDifficulty}`);\r\n\r\n  let index = 0;\r\n  do {\r\n    const clone = template.content.cloneNode(true);\r\n    let levelCard = clone.querySelector('.level-card');\r\n    levelCard.classList.add('level-card-shirt');\r\n    levelValue.appendChild(clone);\r\n    index++;\r\n  } while (index < quantityCardsInLevel);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPagesLevels);\r\n\n\n//# sourceURL=webpack://fourth-module/./components/renderPagesLevels.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_renderMainPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/renderMainPage */ \"./components/renderMainPage.js\");\n\n\n(0,_components_renderMainPage__WEBPACK_IMPORTED_MODULE_0__.renderMainPage)();\n\n\n//# sourceURL=webpack://fourth-module/./index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;