/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_simba_git_weatherApp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Select */ \"./component/Select/index.tsx\");\n/* harmony import */ var _component_WeatherDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/WeatherDisplay */ \"./component/WeatherDisplay/index.tsx\");\n/* harmony import */ var _data_obversation_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/obversation.json */ \"./data/obversation.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/simba/git/weatherApp/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction getOptionsByTown(town) {\n  var target = _data_obversation_json__WEBPACK_IMPORTED_MODULE_5__.map(function (i) {\n    return (0,_home_simba_git_weatherApp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(i.obversation);\n  }).flat().find(function (i) {\n    return i.town === town;\n  }) || {\n    name: '板橋',\n    city: '新北市',\n    town: '板橋區'\n  };\n  return {\n    label: \"\".concat(target.town, \" - \").concat(target.name),\n    value: \"\".concat(target.name)\n  };\n}\n\nfunction Index() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(getOptionsByTown('板橋區')),\n      obversation = _useState[0],\n      setObversation = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {}, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    console.log(\"save \".concat(obversation.label.split(' - ')[0], \" to localStorage\"));\n    localStorage.setItem('town', obversation.label.split(' - ')[0]);\n  }, [obversation]);\n  var selectOptions = _data_obversation_json__WEBPACK_IMPORTED_MODULE_5__.map(function (i) {\n    return {\n      label: i.city,\n      options: i.obversation.map(function (i) {\n        return {\n          label: \"\".concat(i.town, \" - \").concat(i.name),\n          value: \"\".concat(i.name)\n        };\n      })\n    };\n  }); // TODO: this code cause error\n  // const { data, error } = useSWR('get geolocation', getLocation);\n  // if(data && data.town) setObversation(getOptionsByTown(data.town));\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Select__WEBPACK_IMPORTED_MODULE_3__.default, {\n      state: obversation,\n      setState: setObversation,\n      options: selectOptions,\n      instanceId: \"obersvationSelect\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: obversation.label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_WeatherDisplay__WEBPACK_IMPORTED_MODULE_4__.default, {\n      location: obversation\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Index, \"7iLPcL4EO/goQRt80svFDqQDS9E=\");\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZ2V0T3B0aW9uc0J5VG93biIsInRvd24iLCJ0YXJnZXQiLCJvYnZlcnNhdGlvbnMiLCJpIiwib2J2ZXJzYXRpb24iLCJmbGF0IiwiZmluZCIsIm5hbWUiLCJjaXR5IiwibGFiZWwiLCJ2YWx1ZSIsIkluZGV4IiwidXNlU3RhdGUiLCJzZXRPYnZlcnNhdGlvbiIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzcGxpdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzZWxlY3RPcHRpb25zIiwib3B0aW9ucyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxnQkFBVCxDQUEwQkMsSUFBMUIsRUFBdUM7QUFDdEMsTUFBSUMsTUFBTSxHQUFHQyx1REFBQSxDQUNSLFVBQUFDLENBQUM7QUFBQSx3SUFBUUEsQ0FBQyxDQUFDQyxXQUFWO0FBQUEsR0FETyxFQUVaQyxJQUZZLEdBR1pDLElBSFksQ0FHUCxVQUFBSCxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDSCxJQUFGLEtBQVdBLElBQWY7QUFBQSxHQUhNLEtBSVY7QUFBRU8sUUFBSSxFQUFFLElBQVI7QUFBY0MsUUFBSSxFQUFFLEtBQXBCO0FBQTJCUixRQUFJLEVBQUU7QUFBakMsR0FKSDtBQU1BLFNBQU87QUFDTlMsU0FBSyxZQUFLUixNQUFNLENBQUNELElBQVosZ0JBQXNCQyxNQUFNLENBQUNNLElBQTdCLENBREM7QUFFTkcsU0FBSyxZQUFLVCxNQUFNLENBQUNNLElBQVo7QUFGQyxHQUFQO0FBSUE7O0FBRWMsU0FBU0ksS0FBVCxHQUFnQjtBQUFBOztBQUFBLGtCQUNVQywrQ0FBUSxDQUFDYixnQkFBZ0IsQ0FBQyxLQUFELENBQWpCLENBRGxCO0FBQUEsTUFDdEJLLFdBRHNCO0FBQUEsTUFDVFMsY0FEUzs7QUFHOUJDLGtEQUFTLENBQUMsWUFBTSxDQUVmLENBRlEsRUFFTixFQUZNLENBQVQ7QUFJQUEsa0RBQVMsQ0FBQyxZQUFNO0FBQ2ZDLFdBQU8sQ0FBQ0MsR0FBUixnQkFBb0JaLFdBQVcsQ0FBQ0ssS0FBWixDQUFrQlEsS0FBbEIsQ0FBd0IsS0FBeEIsRUFBK0IsQ0FBL0IsQ0FBcEI7QUFDQUMsZ0JBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QmYsV0FBVyxDQUFDSyxLQUFaLENBQWtCUSxLQUFsQixDQUF3QixLQUF4QixFQUErQixDQUEvQixDQUE3QjtBQUNBLEdBSFEsRUFHTixDQUFFYixXQUFGLENBSE0sQ0FBVDtBQUtBLE1BQU1nQixhQUFhLEdBQUdsQix1REFBQSxDQUFpQixVQUFBQyxDQUFDO0FBQUEsV0FBSztBQUM1Q00sV0FBSyxFQUFFTixDQUFDLENBQUNLLElBRG1DO0FBRTVDYSxhQUFPLEVBQUVsQixDQUFDLENBQUNDLFdBQUYsQ0FBY2tCLEdBQWQsQ0FBa0IsVUFBQW5CLENBQUM7QUFBQSxlQUFLO0FBQ2hDTSxlQUFLLFlBQUtOLENBQUMsQ0FBQ0gsSUFBUCxnQkFBaUJHLENBQUMsQ0FBQ0ksSUFBbkIsQ0FEMkI7QUFFaENHLGVBQUssWUFBS1AsQ0FBQyxDQUFDSSxJQUFQO0FBRjJCLFNBQUw7QUFBQSxPQUFuQjtBQUZtQyxLQUFMO0FBQUEsR0FBbEIsQ0FBdEIsQ0FaOEIsQ0FvQjlCO0FBQ0E7QUFDQTs7QUFFQSxzQkFDQztBQUFBLDRCQUNDLDhEQUFDLHNEQUFEO0FBQVEsV0FBSyxFQUFFSCxXQUFmO0FBQTRCLGNBQVEsRUFBRVMsY0FBdEM7QUFBc0QsYUFBTyxFQUFFTyxhQUEvRDtBQUE4RSxnQkFBVSxFQUFDO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQUEsZ0JBQUtoQixXQUFXLENBQUNLO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRCxlQUdDLDhEQUFDLDhEQUFEO0FBQWdCLGNBQVEsRUFBRUw7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhEO0FBQUEsa0JBREQ7QUFPQTs7R0EvQnVCTyxLOztLQUFBQSxLIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4uL2NvbXBvbmVudC9TZWxlY3QnO1xuaW1wb3J0IFdlYXRoZXJEaXNwbGF5IGZyb20gJy4uL2NvbXBvbmVudC9XZWF0aGVyRGlzcGxheSc7XG5cbmltcG9ydCBvYnZlcnNhdGlvbnMgZnJvbSAnLi4vZGF0YS9vYnZlcnNhdGlvbi5qc29uJztcblxuZnVuY3Rpb24gZ2V0T3B0aW9uc0J5VG93bih0b3duOiBzdHJpbmcpe1xuXHRsZXQgdGFyZ2V0ID0gb2J2ZXJzYXRpb25zXG5cdC5tYXAoaSA9PiBbLi4uaS5vYnZlcnNhdGlvbl0pXG5cdC5mbGF0KClcblx0LmZpbmQoaSA9PiBpLnRvd24gPT09IHRvd24pXG5cdHx8IHsgbmFtZTogJ+adv+apiycsIGNpdHk6ICfmlrDljJfluIInLCB0b3duOiAn5p2/5qmL5Y2AJyB9O1xuXG5cdHJldHVybiB7XG5cdFx0bGFiZWw6IGAke3RhcmdldC50b3dufSAtICR7dGFyZ2V0Lm5hbWV9YCxcblx0XHR2YWx1ZTogYCR7dGFyZ2V0Lm5hbWV9YFxuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpe1xuXHRjb25zdCBbIG9idmVyc2F0aW9uLCBzZXRPYnZlcnNhdGlvbiBdID0gdXNlU3RhdGUoZ2V0T3B0aW9uc0J5VG93bign5p2/5qmL5Y2AJykpO1xuXHRcblx0dXNlRWZmZWN0KCgpID0+IHtcblxuXHR9LCBbXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zb2xlLmxvZyhgc2F2ZSAke29idmVyc2F0aW9uLmxhYmVsLnNwbGl0KCcgLSAnKVswXX0gdG8gbG9jYWxTdG9yYWdlYCk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rvd24nLCBvYnZlcnNhdGlvbi5sYWJlbC5zcGxpdCgnIC0gJylbMF0pO1xuXHR9LCBbIG9idmVyc2F0aW9uIF0pO1xuXG5cdGNvbnN0IHNlbGVjdE9wdGlvbnMgPSBvYnZlcnNhdGlvbnMubWFwKGkgPT4gKHtcblx0XHRsYWJlbDogaS5jaXR5LFxuXHRcdG9wdGlvbnM6IGkub2J2ZXJzYXRpb24ubWFwKGkgPT4gKHtcblx0XHRcdGxhYmVsOiBgJHtpLnRvd259IC0gJHtpLm5hbWV9YCxcblx0XHRcdHZhbHVlOiBgJHtpLm5hbWV9YFxuXHRcdH0pKVxuXHR9KSk7XG5cblx0Ly8gVE9ETzogdGhpcyBjb2RlIGNhdXNlIGVycm9yXG5cdC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignZ2V0IGdlb2xvY2F0aW9uJywgZ2V0TG9jYXRpb24pO1xuXHQvLyBpZihkYXRhICYmIGRhdGEudG93bikgc2V0T2J2ZXJzYXRpb24oZ2V0T3B0aW9uc0J5VG93bihkYXRhLnRvd24pKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8U2VsZWN0IHN0YXRlPXtvYnZlcnNhdGlvbn0gc2V0U3RhdGU9e3NldE9idmVyc2F0aW9ufSBvcHRpb25zPXtzZWxlY3RPcHRpb25zfSBpbnN0YW5jZUlkPSdvYmVyc3ZhdGlvblNlbGVjdCcvPlxuXHRcdFx0PGgxPntvYnZlcnNhdGlvbi5sYWJlbH08L2gxPlxuXHRcdFx0PFdlYXRoZXJEaXNwbGF5IGxvY2F0aW9uPXtvYnZlcnNhdGlvbn0vPlxuXHRcdDwvPlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});