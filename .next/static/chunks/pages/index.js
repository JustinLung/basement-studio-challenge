/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fjustin%2FDesktop%2Fprojects%2Fpersonal%2Fbasement-studio-challenge%2Fsrc%2Fpages%2Findex.tsx&page=%2F!":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fjustin%2FDesktop%2Fprojects%2Fpersonal%2Fbasement-studio-challenge%2Fsrc%2Fpages%2Findex.tsx&page=%2F! ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./src/pages/index.tsx */ \"./src/pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZVc2VycyUyRmp1c3RpbiUyRkRlc2t0b3AlMkZwcm9qZWN0cyUyRnBlcnNvbmFsJTJGYmFzZW1lbnQtc3R1ZGlvLWNoYWxsZW5nZSUyRnNyYyUyRnBhZ2VzJTJGaW5kZXgudHN4JnBhZ2U9JTJGIS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLG9EQUF1QjtBQUM5QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/ZmY3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fjustin%2FDesktop%2Fprojects%2Fpersonal%2Fbasement-studio-challenge%2Fsrc%2Fpages%2Findex.tsx&page=%2F!\n"));

/***/ }),

/***/ "./src/components/features/MetaTags.tsx":
/*!**********************************************!*\
  !*** ./src/components/features/MetaTags.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MetaTags; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MetaTags(props) {\n    const { pageTitle , pageDescription , currentUrl , image  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                children: pageTitle\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"title\",\n                content: pageTitle\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"description\",\n                content: pageDescription\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:type\",\n                content: \"website\"\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:url\",\n                content: currentUrl.replace(\"www.\", \"\")\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:title\",\n                content: pageTitle\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:description\",\n                content: pageDescription\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"og:image\",\n                content: image\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:card\",\n                content: \"summary_large_image\"\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:url\",\n                content: currentUrl.replace(\"www.\", \"\")\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:title\",\n                content: pageTitle\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:description\",\n                content: pageDescription\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                property: \"twitter:image\",\n                content: image\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"canonical\",\n                href: currentUrl.replace(\"www.\", \"\")\n            }, void 0, false, {\n                fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/features/MetaTags.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = MetaTags;\nvar _c;\n$RefreshReg$(_c, \"MetaTags\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlcy9NZXRhVGFncy50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTZCO0FBU2QsU0FBU0MsU0FBU0MsS0FBd0IsRUFBRTtJQUN6RCxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsZ0JBQWUsRUFBRUMsV0FBVSxFQUFFQyxNQUFLLEVBQUUsR0FBR0o7SUFDMUQscUJBQ0UsOERBQUNGLGtEQUFJQTs7MEJBRUgsOERBQUNPOzBCQUFPSjs7Ozs7OzBCQUNSLDhEQUFDSztnQkFBS0MsTUFBSztnQkFBUUMsU0FBU1A7Ozs7OzswQkFDNUIsOERBQUNLO2dCQUFLQyxNQUFLO2dCQUFjQyxTQUFTTjs7Ozs7OzBCQUdsQyw4REFBQ0k7Z0JBQUtHLFVBQVM7Z0JBQVVELFNBQVE7Ozs7OzswQkFDakMsOERBQUNGO2dCQUFLRyxVQUFTO2dCQUFTRCxTQUFTTCxXQUFXTyxPQUFPLENBQUMsUUFBUTs7Ozs7OzBCQUM1RCw4REFBQ0o7Z0JBQUtHLFVBQVM7Z0JBQVdELFNBQVNQOzs7Ozs7MEJBQ25DLDhEQUFDSztnQkFBS0csVUFBUztnQkFBaUJELFNBQVNOOzs7Ozs7MEJBQ3pDLDhEQUFDSTtnQkFBS0csVUFBUztnQkFBV0QsU0FBU0o7Ozs7OzswQkFHbkMsOERBQUNFO2dCQUFLRyxVQUFTO2dCQUFlRCxTQUFROzs7Ozs7MEJBQ3RDLDhEQUFDRjtnQkFBS0csVUFBUztnQkFBY0QsU0FBU0wsV0FBV08sT0FBTyxDQUFDLFFBQVE7Ozs7OzswQkFDakUsOERBQUNKO2dCQUFLRyxVQUFTO2dCQUFnQkQsU0FBU1A7Ozs7OzswQkFDeEMsOERBQUNLO2dCQUFLRyxVQUFTO2dCQUFzQkQsU0FBU047Ozs7OzswQkFDOUMsOERBQUNJO2dCQUFLRyxVQUFTO2dCQUFnQkQsU0FBU0o7Ozs7OzswQkFFeEMsOERBQUNPO2dCQUFLQyxLQUFJO2dCQUFZQyxNQUFNVixXQUFXTyxPQUFPLENBQUMsUUFBUTs7Ozs7Ozs7Ozs7O0FBRzdELENBQUM7S0ExQnVCWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9mZWF0dXJlcy9NZXRhVGFncy50c3g/ZWU1YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmludGVyZmFjZSBNZXRhVGFnc0ludGVyZmFjZSB7XG4gIHBhZ2VUaXRsZTogc3RyaW5nO1xuICBwYWdlRGVzY3JpcHRpb246IHN0cmluZztcbiAgY3VycmVudFVybDogc3RyaW5nO1xuICBpbWFnZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWV0YVRhZ3MocHJvcHM6IE1ldGFUYWdzSW50ZXJmYWNlKSB7XG4gIGNvbnN0IHsgcGFnZVRpdGxlLCBwYWdlRGVzY3JpcHRpb24sIGN1cnJlbnRVcmwsIGltYWdlIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIHsvKiA8IS0tIFByaW1hcnkgTWV0YSBUYWdzIC0tPiAqL31cbiAgICAgIDx0aXRsZT57cGFnZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PXtwYWdlVGl0bGV9IC8+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtwYWdlRGVzY3JpcHRpb259IC8+XG5cbiAgICAgIHsvKiA8IS0tIE9wZW4gR3JhcGggLyBGYWNlYm9vayAtLT4gKi99XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e2N1cnJlbnRVcmwucmVwbGFjZShcInd3dy5cIiwgXCJcIil9IC8+XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cGFnZVRpdGxlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3BhZ2VEZXNjcmlwdGlvbn0gLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWFnZX0gLz5cblxuICAgICAgey8qIDwhLS0gVHdpdHRlciAtLT4gKi99XG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cbiAgICAgIDxtZXRhIHByb3BlcnR5PVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXtjdXJyZW50VXJsLnJlcGxhY2UoXCJ3d3cuXCIsIFwiXCIpfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17cGFnZVRpdGxlfSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17cGFnZURlc2NyaXB0aW9ufSAvPlxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJ0d2l0dGVyOmltYWdlXCIgY29udGVudD17aW1hZ2V9IC8+XG5cbiAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2N1cnJlbnRVcmwucmVwbGFjZShcInd3dy5cIiwgXCJcIil9IC8+XG4gICAgPC9IZWFkPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJNZXRhVGFncyIsInByb3BzIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwiY3VycmVudFVybCIsImltYWdlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwcm9wZXJ0eSIsInJlcGxhY2UiLCJsaW5rIiwicmVsIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/features/MetaTags.tsx\n"));

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_features_MetaTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/features/MetaTags */ \"./src/components/features/MetaTags.tsx\");\n\n\nfunction Page(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_features_MetaTags__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            pageTitle: \"Homepage\",\n            pageDescription: \"This is the homepage\",\n            currentUrl: \"/\"\n        }, void 0, false, {\n            fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/pages/index.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNEO0FBSXZDLFNBQVNDLEtBQUtDLEtBQWdCLEVBQUU7SUFDN0MscUJBQ0U7a0JBQ0UsNEVBQUNGLHFFQUFRQTtZQUNQRyxXQUFXO1lBQ1hDLGlCQUFpQjtZQUNqQkMsWUFBWTs7Ozs7OztBQUlwQixDQUFDO0tBVnVCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1ldGFUYWdzIGZyb20gXCJAL2NvbXBvbmVudHMvZmVhdHVyZXMvTWV0YVRhZ3NcIjtcblxuaW50ZXJmYWNlIFBhZ2VQcm9wcyB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHByb3BzOiBQYWdlUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE1ldGFUYWdzXG4gICAgICAgIHBhZ2VUaXRsZT17XCJIb21lcGFnZVwifVxuICAgICAgICBwYWdlRGVzY3JpcHRpb249e1wiVGhpcyBpcyB0aGUgaG9tZXBhZ2VcIn1cbiAgICAgICAgY3VycmVudFVybD17XCIvXCJ9XG4gICAgICAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIk1ldGFUYWdzIiwiUGFnZSIsInByb3BzIiwicGFnZVRpdGxlIiwicGFnZURlc2NyaXB0aW9uIiwiY3VycmVudFVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2FUsers%2Fjustin%2FDesktop%2Fprojects%2Fpersonal%2Fbasement-studio-challenge%2Fsrc%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);