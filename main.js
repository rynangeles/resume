/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("var viewerUrl = \"./assets/pdfjs/web/viewer.html\";\nvar fileUrl = \"../../../assets/resume.pdf\";\nvar iframe = document.getElementById('web-viewer');\nviewerUrl += \"?file=\".concat(fileUrl);\niframe.src = viewerUrl;\niframe.addEventListener('load', function (e) {\n  var PDFViewerApplication = iframe.contentWindow.PDFViewerApplication;\n  var appConfig = PDFViewerApplication.appConfig;\n  appConfig.toolbar.openFile.hidden = true;\n  appConfig.toolbar.viewBookmark.hidden = true;\n  PDFViewerApplication.setTitleUsingUrl('Ryan Angeles.pdf');\n});\n\n//# sourceURL=webpack://me/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;