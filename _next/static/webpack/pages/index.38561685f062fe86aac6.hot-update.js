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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_simba_git_weatherApp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Select */ \"./component/Select/index.tsx\");\n/* harmony import */ var _component_WeatherDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/WeatherDisplay */ \"./component/WeatherDisplay/index.tsx\");\n/* harmony import */ var _data_obversation_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/obversation.json */ \"./data/obversation.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/simba/git/weatherApp/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction getOptionsByTown(town) {\n  var target = _data_obversation_json__WEBPACK_IMPORTED_MODULE_5__.map(function (i) {\n    return (0,_home_simba_git_weatherApp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(i.obversation);\n  }).flat().find(function (i) {\n    return i.town === town;\n  }) || {\n    name: '板橋',\n    city: '新北市',\n    town: '板橋區'\n  };\n  return {\n    label: \"\".concat(target.town, \" - \").concat(target.name),\n    value: \"\".concat(target.name)\n  };\n}\n\nfunction Index() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(getOptionsByTown('板橋區')),\n      obversation = _useState[0],\n      setObversation = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    localStorage.setItem('town', obversation.label.split(' - ')[0]);\n  }, [obversation]);\n  var selectOptions = _data_obversation_json__WEBPACK_IMPORTED_MODULE_5__.map(function (i) {\n    return {\n      label: i.city,\n      options: i.obversation.map(function (i) {\n        return {\n          label: \"\".concat(i.town, \" - \").concat(i.name),\n          value: \"\".concat(i.name)\n        };\n      })\n    };\n  }); // TODO: this code cause error\n  // const { data, error } = useSWR('get geolocation', getLocation);\n  // if(data && data.town) setObversation(getOptionsByTown(data.town));\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Select__WEBPACK_IMPORTED_MODULE_3__.default, {\n      state: obversation,\n      setState: setObversation,\n      options: selectOptions,\n      instanceId: \"obersvationSelect\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: obversation.label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_WeatherDisplay__WEBPACK_IMPORTED_MODULE_4__.default, {\n      location: obversation\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Index, \"bqA4cDx4A+20RViVuwrWcbWK7WE=\");\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZ2V0T3B0aW9uc0J5VG93biIsInRvd24iLCJ0YXJnZXQiLCJvYnZlcnNhdGlvbnMiLCJpIiwib2J2ZXJzYXRpb24iLCJmbGF0IiwiZmluZCIsIm5hbWUiLCJjaXR5IiwibGFiZWwiLCJ2YWx1ZSIsIkluZGV4IiwidXNlU3RhdGUiLCJzZXRPYnZlcnNhdGlvbiIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzcGxpdCIsInNlbGVjdE9wdGlvbnMiLCJvcHRpb25zIiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLFNBQVNBLGdCQUFULENBQTBCQyxJQUExQixFQUF1QztBQUN0QyxNQUFJQyxNQUFNLEdBQUdDLHVEQUFBLENBQ1IsVUFBQUMsQ0FBQztBQUFBLHdJQUFRQSxDQUFDLENBQUNDLFdBQVY7QUFBQSxHQURPLEVBRVpDLElBRlksR0FHWkMsSUFIWSxDQUdQLFVBQUFILENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNILElBQUYsS0FBV0EsSUFBZjtBQUFBLEdBSE0sS0FJVjtBQUFFTyxRQUFJLEVBQUUsSUFBUjtBQUFjQyxRQUFJLEVBQUUsS0FBcEI7QUFBMkJSLFFBQUksRUFBRTtBQUFqQyxHQUpIO0FBTUEsU0FBTztBQUNOUyxTQUFLLFlBQUtSLE1BQU0sQ0FBQ0QsSUFBWixnQkFBc0JDLE1BQU0sQ0FBQ00sSUFBN0IsQ0FEQztBQUVORyxTQUFLLFlBQUtULE1BQU0sQ0FBQ00sSUFBWjtBQUZDLEdBQVA7QUFJQTs7QUFFYyxTQUFTSSxLQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ1VDLCtDQUFRLENBQUNiLGdCQUFnQixDQUFDLEtBQUQsQ0FBakIsQ0FEbEI7QUFBQSxNQUN0QkssV0FEc0I7QUFBQSxNQUNUUyxjQURTOztBQUk5QkMsa0RBQVMsQ0FBQyxZQUFNO0FBRWZDLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJaLFdBQVcsQ0FBQ0ssS0FBWixDQUFrQlEsS0FBbEIsQ0FBd0IsS0FBeEIsRUFBK0IsQ0FBL0IsQ0FBN0I7QUFDQSxHQUhRLEVBR04sQ0FBRWIsV0FBRixDQUhNLENBQVQ7QUFLQSxNQUFNYyxhQUFhLEdBQUdoQix1REFBQSxDQUFpQixVQUFBQyxDQUFDO0FBQUEsV0FBSztBQUM1Q00sV0FBSyxFQUFFTixDQUFDLENBQUNLLElBRG1DO0FBRTVDVyxhQUFPLEVBQUVoQixDQUFDLENBQUNDLFdBQUYsQ0FBY2dCLEdBQWQsQ0FBa0IsVUFBQWpCLENBQUM7QUFBQSxlQUFLO0FBQ2hDTSxlQUFLLFlBQUtOLENBQUMsQ0FBQ0gsSUFBUCxnQkFBaUJHLENBQUMsQ0FBQ0ksSUFBbkIsQ0FEMkI7QUFFaENHLGVBQUssWUFBS1AsQ0FBQyxDQUFDSSxJQUFQO0FBRjJCLFNBQUw7QUFBQSxPQUFuQjtBQUZtQyxLQUFMO0FBQUEsR0FBbEIsQ0FBdEIsQ0FUOEIsQ0FpQjlCO0FBQ0E7QUFDQTs7QUFFQSxzQkFDQztBQUFBLDRCQUNDLDhEQUFDLHNEQUFEO0FBQVEsV0FBSyxFQUFFSCxXQUFmO0FBQTRCLGNBQVEsRUFBRVMsY0FBdEM7QUFBc0QsYUFBTyxFQUFFSyxhQUEvRDtBQUE4RSxnQkFBVSxFQUFDO0FBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQUEsZ0JBQUtkLFdBQVcsQ0FBQ0s7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBR0MsOERBQUMsOERBQUQ7QUFBZ0IsY0FBUSxFQUFFTDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEQ7QUFBQSxrQkFERDtBQU9BOztHQTVCdUJPLEs7O0tBQUFBLEsiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi4vY29tcG9uZW50L1NlbGVjdCc7XG5pbXBvcnQgV2VhdGhlckRpc3BsYXkgZnJvbSAnLi4vY29tcG9uZW50L1dlYXRoZXJEaXNwbGF5JztcblxuaW1wb3J0IG9idmVyc2F0aW9ucyBmcm9tICcuLi9kYXRhL29idmVyc2F0aW9uLmpzb24nO1xuXG5mdW5jdGlvbiBnZXRPcHRpb25zQnlUb3duKHRvd246IHN0cmluZyl7XG5cdGxldCB0YXJnZXQgPSBvYnZlcnNhdGlvbnNcblx0Lm1hcChpID0+IFsuLi5pLm9idmVyc2F0aW9uXSlcblx0LmZsYXQoKVxuXHQuZmluZChpID0+IGkudG93biA9PT0gdG93bilcblx0fHwgeyBuYW1lOiAn5p2/5qmLJywgY2l0eTogJ+aWsOWMl+W4gicsIHRvd246ICfmnb/mqYvljYAnIH07XG5cblx0cmV0dXJuIHtcblx0XHRsYWJlbDogYCR7dGFyZ2V0LnRvd259IC0gJHt0YXJnZXQubmFtZX1gLFxuXHRcdHZhbHVlOiBgJHt0YXJnZXQubmFtZX1gXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCl7XG5cdGNvbnN0IFsgb2J2ZXJzYXRpb24sIHNldE9idmVyc2F0aW9uIF0gPSB1c2VTdGF0ZShnZXRPcHRpb25zQnlUb3duKCfmnb/mqYvljYAnKSk7XG5cdFxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG93bicsIG9idmVyc2F0aW9uLmxhYmVsLnNwbGl0KCcgLSAnKVswXSk7XG5cdH0sIFsgb2J2ZXJzYXRpb24gXSk7XG5cblx0Y29uc3Qgc2VsZWN0T3B0aW9ucyA9IG9idmVyc2F0aW9ucy5tYXAoaSA9PiAoe1xuXHRcdGxhYmVsOiBpLmNpdHksXG5cdFx0b3B0aW9uczogaS5vYnZlcnNhdGlvbi5tYXAoaSA9PiAoe1xuXHRcdFx0bGFiZWw6IGAke2kudG93bn0gLSAke2kubmFtZX1gLFxuXHRcdFx0dmFsdWU6IGAke2kubmFtZX1gXG5cdFx0fSkpXG5cdH0pKTtcblxuXHQvLyBUT0RPOiB0aGlzIGNvZGUgY2F1c2UgZXJyb3Jcblx0Ly8gY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKCdnZXQgZ2VvbG9jYXRpb24nLCBnZXRMb2NhdGlvbik7XG5cdC8vIGlmKGRhdGEgJiYgZGF0YS50b3duKSBzZXRPYnZlcnNhdGlvbihnZXRPcHRpb25zQnlUb3duKGRhdGEudG93bikpO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxTZWxlY3Qgc3RhdGU9e29idmVyc2F0aW9ufSBzZXRTdGF0ZT17c2V0T2J2ZXJzYXRpb259IG9wdGlvbnM9e3NlbGVjdE9wdGlvbnN9IGluc3RhbmNlSWQ9J29iZXJzdmF0aW9uU2VsZWN0Jy8+XG5cdFx0XHQ8aDE+e29idmVyc2F0aW9uLmxhYmVsfTwvaDE+XG5cdFx0XHQ8V2VhdGhlckRpc3BsYXkgbG9jYXRpb249e29idmVyc2F0aW9ufS8+XG5cdFx0PC8+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});