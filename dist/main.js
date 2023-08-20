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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderPageSelectedDifficulty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderPageSelectedDifficulty */ \"./components/renderPageSelectedDifficulty.js\");\n\r\n\r\nfunction renderGamePage(levelDifficulty) {\r\n  (0,_renderPageSelectedDifficulty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(levelDifficulty);\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGamePage);\n\n//# sourceURL=webpack://fourth-module/./components/renderGamePage.js?");

/***/ }),

/***/ "./components/renderMainPage.js":
/*!**************************************!*\
  !*** ./components/renderMainPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMainPage: () => (/* binding */ renderMainPage)\n/* harmony export */ });\n/* harmony import */ var _renderGamePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderGamePage.js */ \"./components/renderGamePage.js\");\n\nconst app = document.querySelector('.app');\n\nfunction renderMainPage() {\n  const mainPageHtml = `\n<div class=\"main\">\n  <p class=\"main-text\">Выберите сложность</p>\n  <div class=\"main-checbox\">\n      <input type=\"radio\" id=\"es\" name=\"difficulty\"/><label\n        for=\"es\"\n        class=\"main-checbox-text\"\n        >1</label\n      >\n      <input type=\"radio\" id=\"medium\" name=\"difficulty\" /><label\n        for=\"medium\"\n        class=\"main-checbox-text\"\n        >2</label\n      >\n      <input type=\"radio\" id=\"hard\" name=\"difficulty\" /><label\n        for=\"hard\"\n        class=\"main-checbox-text\"\n        >3</label\n      >\n  </div>\n  <button class=\"main-start\">Старт</button>\n</div>\n`;\n  app.innerHTML = mainPageHtml;\n  const boxSelectedDifficulty = document.querySelector('.main');\n\n  boxSelectedDifficulty.addEventListener('click', (event) => {\n    const target = event.target;\n    if (target.closest('.main-checbox-text')) {\n      localStorage.setItem('checked', target.getAttribute('for'));\n    }\n    if (target.closest('.main-start')) {\n      let levelDifficulty = localStorage.getItem('checked');\n      (0,_renderGamePage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(levelDifficulty);\n    }\n  });\n}\n\n\n\n\n//# sourceURL=webpack://fourth-module/./components/renderMainPage.js?");

/***/ }),

/***/ "./components/renderPageSelectedDifficulty.js":
/*!****************************************************!*\
  !*** ./components/renderPageSelectedDifficulty.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst app = document.querySelector('.app');\r\n\r\nfunction renderPageSelectedDifficulty(levelDifficulty) {\r\n  if (levelDifficulty === 'es') {\r\n    const gamePageHtml = `\r\n        <div class=\"game\">\r\n        <label\r\n        for=\"es\"\r\n        class=\"main-checbox-text\"\r\n        >EASY</label\r\n      >\r\n        </div>\r\n        `;\r\n    app.innerHTML = gamePageHtml;\r\n  }\r\n  if (levelDifficulty === 'medium') {\r\n    const gamePageHtml = `\r\n        <div class=\"game\">\r\n        <label\r\n        for=\"medium\"\r\n        class=\"main-checbox-text\"\r\n        >MEDIUM</label\r\n      >\r\n        </div>\r\n        `;\r\n    app.innerHTML = gamePageHtml;\r\n  }\r\n  if (levelDifficulty === 'hard') {\r\n    const gamePageHtml = `\r\n        <div class=\"game\">\r\n        <label\r\n        for=\"hard\"\r\n        class=\"main-checbox-text\"\r\n        >HARD</label\r\n      >\r\n        </div>\r\n        `;\r\n    app.innerHTML = gamePageHtml;\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPageSelectedDifficulty);\r\n\n\n//# sourceURL=webpack://fourth-module/./components/renderPageSelectedDifficulty.js?");

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