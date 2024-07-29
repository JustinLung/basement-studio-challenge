"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/shared/PageTransition/PageTransition.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/shared/PageTransition/PageTransition.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageTransition\": function() { return /* binding */ PageTransition; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_use__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-use */ \"./node_modules/react-use/esm/index.js\");\n/* harmony import */ var _state_pageTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/state/pageTransition */ \"./src/state/pageTransition.ts\");\n// Big thanks to Studio Freight! github.com/studio-freight/\n// import styles from \"./PageTransition.module.css\";\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst variants = {\n    visible: {\n        x: \"100%\"\n    },\n    hidden: {\n        x: \"0%\"\n    }\n};\nconst PageTransition = ()=>{\n    _s();\n    const curtainRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [pageLoaded, setPageloaded] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [curtainInComplete, setCurtainInComplete] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const { triggerTransition  } = (0,_state_pageTransition__WEBPACK_IMPORTED_MODULE_3__.usePageTransition)();\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimationControls)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (!curtainInComplete) return;\n        const changeRouteComplete = ()=>{\n            setPageloaded(true);\n        };\n        router.events.on(\"routeChangeComplete\", changeRouteComplete);\n        return ()=>{\n            router.events.off(\"routeChangeComplete\", changeRouteComplete);\n        };\n    }, [\n        curtainInComplete,\n        router.events\n    ]);\n    (0,react_use__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(()=>{\n        if (triggerTransition === \"\") return;\n        controls.set({\n            x: \"-100%\"\n        });\n        controls.start(\"hidden\");\n    }, [\n        controls,\n        triggerTransition\n    ]);\n    (0,react_use__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect)(()=>{\n        if (!pageLoaded) return;\n        controls.set({\n            x: 0\n        });\n        controls.start(\"visible\");\n    }, [\n        controls,\n        pageLoaded\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        // className={styles[\"page-transition\"]}\n        animate: controls,\n        variants: variants,\n        transition: {\n            duration: 0.7\n        },\n        ref: curtainRef,\n        onAnimationComplete: (e)=>{\n            if (e === \"visible\") {\n                _state_pageTransition__WEBPACK_IMPORTED_MODULE_3__.usePageTransition.setState({\n                    triggerTransition: \"\"\n                });\n                setCurtainInComplete(false);\n                setPageloaded(false);\n            } else {\n                router.push(triggerTransition);\n                setCurtainInComplete(true);\n            }\n        }\n    }, void 0, false, {\n        fileName: \"/Users/justin/Desktop/projects/personal/basement-studio-challenge/src/components/shared/PageTransition/PageTransition.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, undefined);\n};\n_s(PageTransition, \"+LZBDA8mEu8ICqfOK9yQYYrMyiI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _state_pageTransition__WEBPACK_IMPORTED_MODULE_3__.usePageTransition,\n        framer_motion__WEBPACK_IMPORTED_MODULE_4__.useAnimationControls,\n        react_use__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect,\n        react_use__WEBPACK_IMPORTED_MODULE_5__.useIsomorphicLayoutEffect\n    ];\n});\n_c = PageTransition;\nvar _c;\n$RefreshReg$(_c, \"PageTransition\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zaGFyZWQvUGFnZVRyYW5zaXRpb24vUGFnZVRyYW5zaXRpb24udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMkQ7QUFDM0Qsb0RBQW9EOzs7QUFDQztBQUNiO0FBQ1k7QUFDRTtBQUNmO0FBRW9CO0FBRTNELE1BQU1RLFdBQVc7SUFDZkMsU0FBUztRQUNQQyxHQUFHO0lBQ0w7SUFDQUMsUUFBUTtRQUNORCxHQUFHO0lBQ0w7QUFDRjtBQUVPLE1BQU1FLGlCQUFpQixJQUFNOztJQUNsQyxNQUFNQyxhQUFhViw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUM5QyxNQUFNVyxTQUFTYixzREFBU0E7SUFDeEIsTUFBTSxDQUFDYyxZQUFZQyxjQUFjLEdBQUdaLCtDQUFRQSxDQUFDLEtBQUs7SUFDbEQsTUFBTSxDQUFDYSxtQkFBbUJDLHFCQUFxQixHQUFHZCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2hFLE1BQU0sRUFBRWUsa0JBQWlCLEVBQUUsR0FBR1osd0VBQWlCQTtJQUMvQyxNQUFNYSxXQUFXcEIsbUVBQW9CQTtJQUVyQ0UsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUksQ0FBQ2UsbUJBQW1CO1FBQ3hCLE1BQU1JLHNCQUFzQixJQUFNO1lBQ2hDTCxjQUFjLElBQUk7UUFDcEI7UUFFQUYsT0FBT1EsTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCRjtRQUN4QyxPQUFPLElBQU07WUFDWFAsT0FBT1EsTUFBTSxDQUFDRSxHQUFHLENBQUMsdUJBQXVCSDtRQUMzQztJQUNGLEdBQUc7UUFBQ0o7UUFBbUJILE9BQU9RLE1BQU07S0FBQztJQUVyQ2pCLG9FQUF5QkEsQ0FBQyxJQUFNO1FBQzlCLElBQUljLHNCQUFzQixJQUFJO1FBQzlCQyxTQUFTSyxHQUFHLENBQUM7WUFDWGYsR0FBRztRQUNMO1FBQ0FVLFNBQVNNLEtBQUssQ0FBQztJQUNqQixHQUFHO1FBQUNOO1FBQVVEO0tBQWtCO0lBRWhDZCxvRUFBeUJBLENBQUMsSUFBTTtRQUM5QixJQUFJLENBQUNVLFlBQVk7UUFFakJLLFNBQVNLLEdBQUcsQ0FBQztZQUNYZixHQUFHO1FBQ0w7UUFDQVUsU0FBU00sS0FBSyxDQUFDO0lBQ2pCLEdBQUc7UUFBQ047UUFBVUw7S0FBVztJQUV6QixxQkFDRSw4REFBQ1QscURBQVU7UUFDVCx3Q0FBd0M7UUFDeENzQixTQUFTUjtRQUNUWixVQUFVQTtRQUNWcUIsWUFBWTtZQUNWQyxVQUFVO1FBQ1o7UUFDQUMsS0FBS2xCO1FBQ0xtQixxQkFBcUIsQ0FBQ0MsSUFBVztZQUMvQixJQUFJQSxNQUFNLFdBQVc7Z0JBQ25CMUIsNkVBQTBCLENBQUM7b0JBQ3pCWSxtQkFBbUI7Z0JBQ3JCO2dCQUNBRCxxQkFBcUIsS0FBSztnQkFDMUJGLGNBQWMsS0FBSztZQUNyQixPQUFPO2dCQUNMRixPQUFPcUIsSUFBSSxDQUFDaEI7Z0JBQ1pELHFCQUFxQixJQUFJO1lBQzNCLENBQUM7UUFDSDs7Ozs7O0FBR04sRUFBRTtHQTVEV047O1FBRUlYLGtEQUFTQTtRQUdNTSxvRUFBaUJBO1FBQzlCUCwrREFBb0JBO1FBY3JDSyxnRUFBeUJBO1FBUXpCQSxnRUFBeUJBOzs7S0E1QmRPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3NoYXJlZC9QYWdlVHJhbnNpdGlvbi9QYWdlVHJhbnNpdGlvbi50c3g/N2Q4NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCaWcgdGhhbmtzIHRvIFN0dWRpbyBGcmVpZ2h0ISBnaXRodWIuY29tL3N0dWRpby1mcmVpZ2h0L1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9QYWdlVHJhbnNpdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VBbmltYXRpb25Db250cm9scyB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCB9IGZyb20gXCJyZWFjdC11c2VcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmltcG9ydCB7IHVzZVBhZ2VUcmFuc2l0aW9uIH0gZnJvbSBcIkAvc3RhdGUvcGFnZVRyYW5zaXRpb25cIjtcblxuY29uc3QgdmFyaWFudHMgPSB7XG4gIHZpc2libGU6IHtcbiAgICB4OiBcIjEwMCVcIixcbiAgfSxcbiAgaGlkZGVuOiB7XG4gICAgeDogXCIwJVwiLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFBhZ2VUcmFuc2l0aW9uID0gKCkgPT4ge1xuICBjb25zdCBjdXJ0YWluUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtwYWdlTG9hZGVkLCBzZXRQYWdlbG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2N1cnRhaW5JbkNvbXBsZXRlLCBzZXRDdXJ0YWluSW5Db21wbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdHJpZ2dlclRyYW5zaXRpb24gfSA9IHVzZVBhZ2VUcmFuc2l0aW9uKCk7XG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uQ29udHJvbHMoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghY3VydGFpbkluQ29tcGxldGUpIHJldHVybjtcbiAgICBjb25zdCBjaGFuZ2VSb3V0ZUNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgc2V0UGFnZWxvYWRlZCh0cnVlKTtcbiAgICB9O1xuXG4gICAgcm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgY2hhbmdlUm91dGVDb21wbGV0ZSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBjaGFuZ2VSb3V0ZUNvbXBsZXRlKTtcbiAgICB9O1xuICB9LCBbY3VydGFpbkluQ29tcGxldGUsIHJvdXRlci5ldmVudHNdKTtcblxuICB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHJpZ2dlclRyYW5zaXRpb24gPT09IFwiXCIpIHJldHVybjtcbiAgICBjb250cm9scy5zZXQoe1xuICAgICAgeDogXCItMTAwJVwiLFxuICAgIH0pO1xuICAgIGNvbnRyb2xzLnN0YXJ0KFwiaGlkZGVuXCIpO1xuICB9LCBbY29udHJvbHMsIHRyaWdnZXJUcmFuc2l0aW9uXSk7XG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwYWdlTG9hZGVkKSByZXR1cm47XG5cbiAgICBjb250cm9scy5zZXQoe1xuICAgICAgeDogMCxcbiAgICB9KTtcbiAgICBjb250cm9scy5zdGFydChcInZpc2libGVcIik7XG4gIH0sIFtjb250cm9scywgcGFnZUxvYWRlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIC8vIGNsYXNzTmFtZT17c3R5bGVzW1wicGFnZS10cmFuc2l0aW9uXCJdfVxuICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XG4gICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgIGR1cmF0aW9uOiAwLjcsXG4gICAgICB9fVxuICAgICAgcmVmPXtjdXJ0YWluUmVmfVxuICAgICAgb25BbmltYXRpb25Db21wbGV0ZT17KGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoZSA9PT0gXCJ2aXNpYmxlXCIpIHtcbiAgICAgICAgICB1c2VQYWdlVHJhbnNpdGlvbi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICB0cmlnZ2VyVHJhbnNpdGlvbjogXCJcIixcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRDdXJ0YWluSW5Db21wbGV0ZShmYWxzZSk7XG4gICAgICAgICAgc2V0UGFnZWxvYWRlZChmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcm91dGVyLnB1c2godHJpZ2dlclRyYW5zaXRpb24pO1xuICAgICAgICAgIHNldEN1cnRhaW5JbkNvbXBsZXRlKHRydWUpO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbInVzZUFuaW1hdGlvbkNvbnRyb2xzIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0IiwibW90aW9uIiwidXNlUGFnZVRyYW5zaXRpb24iLCJ2YXJpYW50cyIsInZpc2libGUiLCJ4IiwiaGlkZGVuIiwiUGFnZVRyYW5zaXRpb24iLCJjdXJ0YWluUmVmIiwicm91dGVyIiwicGFnZUxvYWRlZCIsInNldFBhZ2Vsb2FkZWQiLCJjdXJ0YWluSW5Db21wbGV0ZSIsInNldEN1cnRhaW5JbkNvbXBsZXRlIiwidHJpZ2dlclRyYW5zaXRpb24iLCJjb250cm9scyIsImNoYW5nZVJvdXRlQ29tcGxldGUiLCJldmVudHMiLCJvbiIsIm9mZiIsInNldCIsInN0YXJ0IiwiZGl2IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInJlZiIsIm9uQW5pbWF0aW9uQ29tcGxldGUiLCJlIiwic2V0U3RhdGUiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/shared/PageTransition/PageTransition.tsx\n"));

/***/ })

});