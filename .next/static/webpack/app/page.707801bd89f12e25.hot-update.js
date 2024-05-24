/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/Fisica.js":
/*!***********************!*\
  !*** ./app/Fisica.js ***!
  \***********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.css */ \"(app-pages-browser)/./app/header.css\");\n/* harmony import */ var _Simulacao__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Simulacao */ \"(app-pages-browser)/./app/Simulacao.js\");\n/* harmony import */ var _Rede__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Rede */ \"(app-pages-browser)/./app/Rede.js\");\n/* harmony import */ var _Fisica__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fisica */ \"(app-pages-browser)/./app/Fisica.js\");\n/* harmony import */ var _Fisica__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Fisica__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    /*Código para qual página de parâmetro reinderizar*/ const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"simulacao\");\n    const changePage = (page)=>{\n        setCurrentPage(page);\n    };\n    const renderPage = ()=>{\n        if (currentPage === \"simulacao\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Simulacao__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n            lineNumber: 16,\n            columnNumber: 14\n        }, this);\n        else if (currentPage === \"rede\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Rede__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n            lineNumber: 18,\n            columnNumber: 14\n        }, this);\n        else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Fisica__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n            fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n            lineNumber: 20,\n            columnNumber: 14\n        }, this);\n    };\n    /*Código da parte fixa da página*/ return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"title\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"simRoel web\"\n                }, void 0, false, {\n                    fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"parametros\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"Par\\xe2metros\"\n                }, void 0, false, {\n                    fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"tab\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"tablinks\",\n                        onClick: ()=>changePage(\"simulacao\"),\n                        children: \"Simula\\xe7\\xe3o\"\n                    }, void 0, false, {\n                        fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"tablinks\",\n                        onClick: ()=>changePage(\"rede\"),\n                        children: \"Camada de Rede\"\n                    }, void 0, false, {\n                        fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"tablinks\",\n                        onClick: ()=>changePage(\"fisica\"),\n                        children: \"Camada Fis\\xedca\"\n                    }, void 0, false, {\n                        fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            renderPage()\n        ]\n    }, void 0, true, {\n        fileName: \"/home/antoniomartins/Github/simRoel/app/page.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"CLgVBXvatH0LHGWf6CRE9FNZ79o=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQytCO0FBQ1Q7QUFDYztBQUNWO0FBQ0k7QUFFZixTQUFTSTs7SUFDdEIsa0RBQWtELEdBQ2xELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFDTiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNTyxhQUFXLENBQUNDO1FBQ2hCRixlQUFlRTtJQUNqQjtJQUNBLE1BQU1DLGFBQVc7UUFDZixJQUFHSixnQkFBYyxhQUNmLHFCQUFPLDhEQUFDSixrREFBU0E7Ozs7O2FBQ2QsSUFBR0ksZ0JBQWMsUUFDcEIscUJBQU8sOERBQUNILDZDQUFJQTs7Ozs7YUFFWixxQkFBTyw4REFBQ0MsZ0RBQU1BOzs7OztJQUNsQjtJQUNBLGdDQUFnQyxHQUNoQyxxQkFDRSw4REFBQ087OzBCQUNDLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUVOLDhEQUFDRjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0U7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUVOLDhEQUFDSDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUFPSCxXQUFXO3dCQUFXSSxTQUFVLElBQUlULFdBQVc7a0NBQWM7Ozs7OztrQ0FDckUsOERBQUNRO3dCQUFPSCxXQUFXO3dCQUFXSSxTQUFVLElBQUlULFdBQVc7a0NBQVM7Ozs7OztrQ0FDaEUsOERBQUNRO3dCQUFPSCxXQUFXO3dCQUFXSSxTQUFVLElBQUlULFdBQVc7a0NBQVc7Ozs7Ozs7Ozs7OztZQUVuRUU7Ozs7Ozs7QUFHUDtHQS9Cd0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL2hlYWRlci5jc3MnO1xuaW1wb3J0IFNpbXVsYWNhbyBmcm9tICcuL1NpbXVsYWNhbyc7XG5pbXBvcnQgUmVkZSBmcm9tICcuL1JlZGUnO1xuaW1wb3J0IEZpc2ljYSBmcm9tICcuL0Zpc2ljYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIC8qQ8OzZGlnbyBwYXJhIHF1YWwgcMOhZ2luYSBkZSBwYXLDom1ldHJvIHJlaW5kZXJpemFyKi8gXG4gIGNvbnN0IFtjdXJyZW50UGFnZSwgc2V0Q3VycmVudFBhZ2VdPXVzZVN0YXRlKCdzaW11bGFjYW8nKVxuICBjb25zdCBjaGFuZ2VQYWdlPShwYWdlKT0+e1xuICAgIHNldEN1cnJlbnRQYWdlKHBhZ2UpXG4gIH1cbiAgY29uc3QgcmVuZGVyUGFnZT0oKT0+e1xuICAgIGlmKGN1cnJlbnRQYWdlPT09J3NpbXVsYWNhbycpXG4gICAgICByZXR1cm4gPFNpbXVsYWNhbyAvPlxuICAgIGVsc2UgaWYoY3VycmVudFBhZ2U9PT0ncmVkZScpXG4gICAgICByZXR1cm4gPFJlZGUgLz5cbiAgICBlbHNlXG4gICAgICByZXR1cm4gPEZpc2ljYSAvPlxuICB9XG4gIC8qQ8OzZGlnbyBkYSBwYXJ0ZSBmaXhhIGRhIHDDoWdpbmEqL1xuICByZXR1cm4gKFxuICAgIDxtYWluID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgPGgxPnNpbVJvZWwgd2ViPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXJhbWV0cm9zXCI+XG4gICAgICAgIDxoMz5QYXLDom1ldHJvczwvaDM+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSBcInRhYmxpbmtzXCIgb25DbGljayA9eygpPT5jaGFuZ2VQYWdlKCdzaW11bGFjYW8nKX0+U2ltdWxhw6fDo288L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9IFwidGFibGlua3NcIiBvbkNsaWNrID17KCk9PmNoYW5nZVBhZ2UoJ3JlZGUnKX0+Q2FtYWRhIGRlIFJlZGU8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9IFwidGFibGlua3NcIiBvbkNsaWNrID17KCk9PmNoYW5nZVBhZ2UoJ2Zpc2ljYScpfT5DYW1hZGEgRmlzw61jYTwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICB7cmVuZGVyUGFnZSgpfVxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNpbXVsYWNhbyIsIlJlZGUiLCJGaXNpY2EiLCJIb21lIiwiY3VycmVudFBhZ2UiLCJzZXRDdXJyZW50UGFnZSIsImNoYW5nZVBhZ2UiLCJwYWdlIiwicmVuZGVyUGFnZSIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImgzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});