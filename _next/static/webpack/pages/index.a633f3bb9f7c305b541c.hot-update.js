/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _readOnlyError; }\n/* harmony export */ });\nfunction _readOnlyError(name) {\n  throw new TypeError(\"\\\"\" + name + \"\\\" is read-only\");\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanM/YjFmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcmVhZE9ubHlFcnJvcihuYW1lKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXFwiXCIgKyBuYW1lICsgXCJcXFwiIGlzIHJlYWQtb25seVwiKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/readOnlyError.js\n");

/***/ }),

/***/ "./component/WeatherDisplay/index.tsx":
/*!********************************************!*\
  !*** ./component/WeatherDisplay/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WeatherDisplay; }\n/* harmony export */ });\n/* harmony import */ var _home_simba_git_weatherApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_simba_git_weatherApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_simba_git_weatherApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_simba_git_weatherApp_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ \"./node_modules/@babel/runtime/helpers/esm/readOnlyError.js\");\n/* harmony import */ var _home_simba_git_weatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _lib_qs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/qs */ \"./lib/qs.ts\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.module.css */ \"./component/WeatherDisplay/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget */ \"./component/WeatherDisplay/widget/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/process/browser.js\");\n\n\n\n\n\n\nvar _jsxFileName = \"/home/simba/git/weatherApp/component/WeatherDisplay/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar token = \"CWB-25BB0BA2-9449-4DD2-82D6-D835F21722EE\";\n\nfunction findWeatherElement(weather, name) {\n  var value = weather.weatherElement.find(function (i) {\n    return i.elementName == name;\n  });\n  return value ? value.elementValue : '-99';\n}\n\nfunction fetcher(_x) {\n  return _fetcher.apply(this, arguments);\n}\n\nfunction _fetcher() {\n  _fetcher = (0,_home_simba_git_weatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_simba_git_weatherApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(location) {\n    var url, query;\n    return _home_simba_git_weatherApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001';\n            query = (0,_lib_qs__WEBPACK_IMPORTED_MODULE_5__.default)({\n              Authorization: token,\n              locationName: encodeURI(location)\n            });\n            return _context.abrupt(\"return\", fetch(\"\".concat(url, \"?\").concat(query)).then(function (res) {\n              return res.json();\n            }).then(function (res) {\n              return res.records.location[0];\n            }).then(function (res) {\n              return {\n                raw: res,\n                formatted: {\n                  風速: findWeatherElement(res, 'WDSD'),\n                  風向: findWeatherElement(res, 'WDIR'),\n                  溫度: findWeatherElement(res, 'TEMP'),\n                  相對濕度: findWeatherElement(res, 'HUMD'),\n                  測站氣壓: findWeatherElement(res, 'PRES'),\n                  日累積雨量: findWeatherElement(res, '24R'),\n                  本日最高溫: findWeatherElement(res, 'D_TX'),\n                  本日最高溫發生時間: findWeatherElement(res, 'D_TXT'),\n                  本日最低溫: findWeatherElement(res, 'D_TN'),\n                  本日最低溫發生時間: findWeatherElement(res, 'D_TNT'),\n                  天氣狀況: findWeatherElement(res, 'Weather')\n                }\n              };\n            }));\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _fetcher.apply(this, arguments);\n}\n\nfunction WeatherDisplay(_ref) {\n  _s();\n\n  var location = _ref.location;\n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_4__.default)(\"fetch \".concat(location.value), function () {\n    return fetcher(location.value);\n  }, {\n    refreshInterval: 5 * 60,\n    onSuccess: function onSuccess(data) {\n      localStorage.setItem('weatherCache', JSON.stringify(data));\n    }\n  }),\n      data = _useSWR.data,\n      error = _useSWR.error; // if(!data) return <h1>Loading ...</h1>;\n\n\n  if (!data) {\n    if (process.env.browser && localStorage.weatherCache) data = ((0,_home_simba_git_weatherApp_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__.default)(\"data\"), JSON.parse(localStorage.getItem('weatherCache')));else return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n      children: \"Loading ...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }, this);\n  }\n\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n    children: [\"Error: \", JSON.stringify(error, null, 2)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 19\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_7___default().windAndTemp),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_widget__WEBPACK_IMPORTED_MODULE_6__.Temperature, {\n        temp: data.formatted.溫度\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_widget__WEBPACK_IMPORTED_MODULE_6__.Wind, {\n        speed: data.formatted.風速,\n        direction: data.formatted.風向\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_widget__WEBPACK_IMPORTED_MODULE_6__.Info, {\n      humidity: data.formatted.相對濕度,\n      maxTemp: data.formatted.本日最高溫,\n      maxTempTime: data.formatted.本日最高溫發生時間,\n      minTemp: data.formatted.本日最低溫,\n      minTempTime: data.formatted.本日最低溫發生時間,\n      pressure: data.formatted.測站氣壓\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_widget__WEBPACK_IMPORTED_MODULE_6__.Weather, {\n      weather: data.formatted.天氣狀況\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n      children: [\"\\u66F4\\u65B0\\u6642\\u9593\\uFF1A\", data.raw.time.obsTime]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n_s(WeatherDisplay, \"PLUSh3GLacfZJClYQJks7Deieck=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_4__.default];\n});\n\n_c = WeatherDisplay;\n\nvar _c;\n\n$RefreshReg$(_c, \"WeatherDisplay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dlYXRoZXJEaXNwbGF5L2luZGV4LnRzeD81ZDIzIl0sIm5hbWVzIjpbInRva2VuIiwicHJvY2VzcyIsImZpbmRXZWF0aGVyRWxlbWVudCIsIndlYXRoZXIiLCJuYW1lIiwidmFsdWUiLCJ3ZWF0aGVyRWxlbWVudCIsImZpbmQiLCJpIiwiZWxlbWVudE5hbWUiLCJlbGVtZW50VmFsdWUiLCJmZXRjaGVyIiwibG9jYXRpb24iLCJ1cmwiLCJxdWVyeSIsInFzIiwiQXV0aG9yaXphdGlvbiIsImxvY2F0aW9uTmFtZSIsImVuY29kZVVSSSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZWNvcmRzIiwicmF3IiwiZm9ybWF0dGVkIiwi6aKo6YCfIiwi6aKo5ZCRIiwi5rqr5bqmIiwi55u45bCN5r+V5bqmIiwi5ris56uZ5rCj5aOTIiwi5pel57Sv56mN6Zuo6YePIiwi5pys5pel5pyA6auY5rqrIiwi5pys5pel5pyA6auY5rqr55m855Sf5pmC6ZaTIiwi5pys5pel5pyA5L2O5rqrIiwi5pys5pel5pyA5L2O5rqr55m855Sf5pmC6ZaTIiwi5aSp5rCj54uA5rOBIiwiV2VhdGhlckRpc3BsYXkiLCJ1c2VTV1IiLCJyZWZyZXNoSW50ZXJ2YWwiLCJvblN1Y2Nlc3MiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlcnJvciIsImVudiIsImJyb3dzZXIiLCJ3ZWF0aGVyQ2FjaGUiLCJwYXJzZSIsImdldEl0ZW0iLCJzdHlsZSIsInRpbWUiLCJvYnNUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBRUEsSUFBTUEsS0FBSyxHQUFHQywwQ0FBZDs7QUFFQSxTQUFTQyxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBc0RDLElBQXRELEVBQW1FO0FBQ2xFLE1BQUlDLEtBQUssR0FBR0YsT0FBTyxDQUFDRyxjQUFSLENBQXVCQyxJQUF2QixDQUE0QixVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxXQUFGLElBQWlCTCxJQUFyQjtBQUFBLEdBQTdCLENBQVo7QUFDQSxTQUFPQyxLQUFLLEdBQUdBLEtBQUssQ0FBQ0ssWUFBVCxHQUF3QixLQUFwQztBQUNBOztTQUVjQyxPOzs7OztxUUFBZixpQkFBdUJDLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPQyxlQURQLEdBQ2EsK0RBRGI7QUFFT0MsaUJBRlAsR0FFZUMsZ0RBQUUsQ0FBQztBQUNoQkMsMkJBQWEsRUFBRWhCLEtBREM7QUFFaEJpQiwwQkFBWSxFQUFFQyxTQUFTLENBQUNOLFFBQUQ7QUFGUCxhQUFELENBRmpCO0FBQUEsNkNBTVFPLEtBQUssV0FBSU4sR0FBSixjQUFXQyxLQUFYLEVBQUwsQ0FDTk0sSUFETSxDQUNELFVBQUFDLEdBQUc7QUFBQSxxQkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxhQURGLEVBRU5GLElBRk0sQ0FFRCxVQUFBQyxHQUFHO0FBQUEscUJBQUlBLEdBQUcsQ0FBQ0UsT0FBSixDQUFZWCxRQUFaLENBQXFCLENBQXJCLENBQUo7QUFBQSxhQUZGLEVBR05RLElBSE0sQ0FHRCxVQUFDQyxHQUFEO0FBQUEscUJBQTJCO0FBQ2hDRyxtQkFBRyxFQUFFSCxHQUQyQjtBQUVoQ0kseUJBQVMsRUFBRTtBQUNWQyxvQkFBRSxFQUFFeEIsa0JBQWtCLENBQUNtQixHQUFELEVBQU0sTUFBTixDQURaO0FBRVZNLG9CQUFFLEVBQUV6QixrQkFBa0IsQ0FBQ21CLEdBQUQsRUFBTSxNQUFOLENBRlo7QUFHVk8sb0JBQUUsRUFBRTFCLGtCQUFrQixDQUFDbUIsR0FBRCxFQUFNLE1BQU4sQ0FIWjtBQUlWUSxzQkFBSSxFQUFFM0Isa0JBQWtCLENBQUNtQixHQUFELEVBQU0sTUFBTixDQUpkO0FBS1ZTLHNCQUFJLEVBQUU1QixrQkFBa0IsQ0FBQ21CLEdBQUQsRUFBTSxNQUFOLENBTGQ7QUFNVlUsdUJBQUssRUFBRTdCLGtCQUFrQixDQUFDbUIsR0FBRCxFQUFNLEtBQU4sQ0FOZjtBQU9WVyx1QkFBSyxFQUFFOUIsa0JBQWtCLENBQUNtQixHQUFELEVBQU0sTUFBTixDQVBmO0FBUVZZLDJCQUFTLEVBQUUvQixrQkFBa0IsQ0FBQ21CLEdBQUQsRUFBTSxPQUFOLENBUm5CO0FBU1ZhLHVCQUFLLEVBQUVoQyxrQkFBa0IsQ0FBQ21CLEdBQUQsRUFBTSxNQUFOLENBVGY7QUFVVmMsMkJBQVMsRUFBRWpDLGtCQUFrQixDQUFDbUIsR0FBRCxFQUFNLE9BQU4sQ0FWbkI7QUFXVmUsc0JBQUksRUFBRWxDLGtCQUFrQixDQUFDbUIsR0FBRCxFQUFNLFNBQU47QUFYZDtBQUZxQixlQUEzQjtBQUFBLGFBSEMsQ0FOUjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBMkJlLFNBQVNnQixjQUFULE9BQXFEO0FBQUE7O0FBQUEsTUFBM0J6QixRQUEyQixRQUEzQkEsUUFBMkI7O0FBQUEsZ0JBQzdDMEIsNENBQU0saUJBQ2xCMUIsUUFBUSxDQUFDUCxLQURTLEdBRTNCO0FBQUEsV0FBTU0sT0FBTyxDQUFDQyxRQUFRLENBQUNQLEtBQVYsQ0FBYjtBQUFBLEdBRjJCLEVBRzNCO0FBQ0NrQyxtQkFBZSxFQUFFLElBQUksRUFEdEI7QUFFQ0MsYUFBUyxFQUFFLG1CQUFDQyxJQUFELEVBQVU7QUFDcEJDLGtCQUFZLENBQUNDLE9BQWIsQ0FBcUIsY0FBckIsRUFBcUNDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixJQUFmLENBQXJDO0FBQ0E7QUFKRixHQUgyQixDQUR1QztBQUFBLE1BQzVEQSxJQUQ0RCxXQUM1REEsSUFENEQ7QUFBQSxNQUN0REssS0FEc0QsV0FDdERBLEtBRHNELEVBV25FOzs7QUFDQSxNQUFHLENBQUNMLElBQUosRUFBUztBQUNSLFFBQUd4QyxPQUFPLENBQUM4QyxHQUFSLENBQVlDLE9BQVosSUFBdUJOLFlBQVksQ0FBQ08sWUFBdkMsRUFBcURSLElBQUksc0lBQUdHLElBQUksQ0FBQ00sS0FBTCxDQUFXUixZQUFZLENBQUNTLE9BQWIsQ0FBcUIsY0FBckIsQ0FBWCxDQUFILENBQUosQ0FBckQsS0FDSyxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0w7O0FBQ0QsTUFBR0wsS0FBSCxFQUFVLG9CQUFPO0FBQUEsMEJBQVlGLElBQUksQ0FBQ0MsU0FBTCxDQUFlQyxLQUFmLEVBQXNCLElBQXRCLEVBQTJCLENBQTNCLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFVixzQkFDQztBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFFTSxzRUFBaEI7QUFBQSw4QkFDQyw4REFBQyxnREFBRDtBQUFhLFlBQUksRUFBRVgsSUFBSSxDQUFDaEIsU0FBTCxDQUFlRztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFFQyw4REFBQyx5Q0FBRDtBQUFNLGFBQUssRUFBRWEsSUFBSSxDQUFDaEIsU0FBTCxDQUFlQyxFQUE1QjtBQUFnQyxpQkFBUyxFQUFFZSxJQUFJLENBQUNoQixTQUFMLENBQWVFO0FBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUtDLDhEQUFDLHlDQUFEO0FBQ0MsY0FBUSxFQUFFYyxJQUFJLENBQUNoQixTQUFMLENBQWVJLElBRDFCO0FBRUMsYUFBTyxFQUFFWSxJQUFJLENBQUNoQixTQUFMLENBQWVPLEtBRnpCO0FBR0MsaUJBQVcsRUFBRVMsSUFBSSxDQUFDaEIsU0FBTCxDQUFlUSxTQUg3QjtBQUlDLGFBQU8sRUFBRVEsSUFBSSxDQUFDaEIsU0FBTCxDQUFlUyxLQUp6QjtBQUtDLGlCQUFXLEVBQUVPLElBQUksQ0FBQ2hCLFNBQUwsQ0FBZVUsU0FMN0I7QUFNQyxjQUFRLEVBQUVNLElBQUksQ0FBQ2hCLFNBQUwsQ0FBZUs7QUFOMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxELGVBYUMsOERBQUMsNENBQUQ7QUFBUyxhQUFPLEVBQUVXLElBQUksQ0FBQ2hCLFNBQUwsQ0FBZVc7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJELGVBY0M7QUFBQSxtREFBVUssSUFBSSxDQUFDakIsR0FBTCxDQUFTNkIsSUFBVCxDQUFjQyxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRDtBQUFBLGtCQUREO0FBa0JBOztHQXBDdUJqQixjO1VBQ0RDLHdDOzs7S0FEQ0QsYyIsImZpbGUiOiIuL2NvbXBvbmVudC9XZWF0aGVyRGlzcGxheS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgcXMgZnJvbSAnLi4vLi4vbGliL3FzJztcblxuaW1wb3J0IHsgSVJhd1dlYXRoZXJEYXRhLCBJV2VhdGhlclByb3BzIH0gZnJvbSAnLi9pbmRleC5kJztcblxuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBUZW1wZXJhdHVyZSwgV2luZCwgSW5mbywgV2VhdGhlciB9IGZyb20gJy4vd2lkZ2V0JztcblxuY29uc3QgdG9rZW4gPSBwcm9jZXNzLmVudi5DV0JUb2tlbjtcblxuZnVuY3Rpb24gZmluZFdlYXRoZXJFbGVtZW50KHdlYXRoZXI6IElSYXdXZWF0aGVyRGF0YSwgbmFtZTogc3RyaW5nKXtcblx0bGV0IHZhbHVlID0gd2VhdGhlci53ZWF0aGVyRWxlbWVudC5maW5kKGkgPT4gaS5lbGVtZW50TmFtZSA9PSBuYW1lKTtcblx0cmV0dXJuIHZhbHVlID8gdmFsdWUuZWxlbWVudFZhbHVlIDogJy05OSc7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIobG9jYXRpb246IHN0cmluZyl7XG5cdGNvbnN0IHVybCA9ICdodHRwczovL29wZW5kYXRhLmN3Yi5nb3YudHcvYXBpL3YxL3Jlc3QvZGF0YXN0b3JlL08tQTAwMDMtMDAxJztcblx0Y29uc3QgcXVlcnkgPSBxcyh7XG5cdFx0QXV0aG9yaXphdGlvbjogdG9rZW4sXG5cdFx0bG9jYXRpb25OYW1lOiBlbmNvZGVVUkkobG9jYXRpb24pXG5cdH0pO1xuXHRyZXR1cm4gZmV0Y2goYCR7dXJsfT8ke3F1ZXJ5fWApXG5cdC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXHQudGhlbihyZXMgPT4gcmVzLnJlY29yZHMubG9jYXRpb25bMF0pXG5cdC50aGVuKChyZXM6IElSYXdXZWF0aGVyRGF0YSkgPT4gKHtcblx0XHRyYXc6IHJlcyxcblx0XHRmb3JtYXR0ZWQ6IHtcblx0XHRcdOmiqOmAnzogZmluZFdlYXRoZXJFbGVtZW50KHJlcywgJ1dEU0QnKSxcblx0XHRcdOmiqOWQkTogZmluZFdlYXRoZXJFbGVtZW50KHJlcywgJ1dESVInKSxcblx0XHRcdOa6q+W6pjogZmluZFdlYXRoZXJFbGVtZW50KHJlcywgJ1RFTVAnKSxcblx0XHRcdOebuOWwjea/leW6pjogZmluZFdlYXRoZXJFbGVtZW50KHJlcywgJ0hVTUQnKSxcblx0XHRcdOa4rOermeawo+WjkzogZmluZFdlYXRoZXJFbGVtZW50KHJlcywgJ1BSRVMnKSxcblx0XHRcdOaXpee0r+epjembqOmHjzogZmluZFdlYXRoZXJFbGVtZW50KHJlcywgJzI0UicpLFxuXHRcdFx05pys5pel5pyA6auY5rqrOiBmaW5kV2VhdGhlckVsZW1lbnQocmVzLCAnRF9UWCcpLFxuXHRcdFx05pys5pel5pyA6auY5rqr55m855Sf5pmC6ZaTOiBmaW5kV2VhdGhlckVsZW1lbnQocmVzLCAnRF9UWFQnKSxcblx0XHRcdOacrOaXpeacgOS9jua6qzogZmluZFdlYXRoZXJFbGVtZW50KHJlcywgJ0RfVE4nKSxcblx0XHRcdOacrOaXpeacgOS9jua6q+eZvOeUn+aZgumWkzogZmluZFdlYXRoZXJFbGVtZW50KHJlcywgJ0RfVE5UJyksXG5cdFx0XHTlpKnmsKPni4Dms4E6IGZpbmRXZWF0aGVyRWxlbWVudChyZXMsICdXZWF0aGVyJylcblx0XHR9XG5cdH0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXZWF0aGVyRGlzcGxheSh7IGxvY2F0aW9uIH0gOiBJV2VhdGhlclByb3BzKXtcblx0Y29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUihcblx0XHRgZmV0Y2ggJHtsb2NhdGlvbi52YWx1ZX1gLCBcblx0XHQoKSA9PiBmZXRjaGVyKGxvY2F0aW9uLnZhbHVlKSxcblx0XHR7XG5cdFx0XHRyZWZyZXNoSW50ZXJ2YWw6IDUgKiA2MCxcblx0XHRcdG9uU3VjY2VzczogKGRhdGEpID0+IHtcblx0XHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dlYXRoZXJDYWNoZScsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblx0XHRcdH1cblx0XHR9XG5cdCk7XG5cdC8vIGlmKCFkYXRhKSByZXR1cm4gPGgxPkxvYWRpbmcgLi4uPC9oMT47XG5cdGlmKCFkYXRhKXtcblx0XHRpZihwcm9jZXNzLmVudi5icm93c2VyICYmIGxvY2FsU3RvcmFnZS53ZWF0aGVyQ2FjaGUpIGRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3ZWF0aGVyQ2FjaGUnKSk7XG5cdFx0ZWxzZSByZXR1cm4gPGgxPkxvYWRpbmcgLi4uPC9oMT47XG5cdH1cblx0aWYoZXJyb3IpIHJldHVybiA8aDE+RXJyb3I6IHtKU09OLnN0cmluZ2lmeShlcnJvciwgbnVsbCwyKX08L2gxPjtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGUud2luZEFuZFRlbXB9PlxuXHRcdFx0XHQ8VGVtcGVyYXR1cmUgdGVtcD17ZGF0YS5mb3JtYXR0ZWQu5rqr5bqmfSAvPlxuXHRcdFx0XHQ8V2luZCBzcGVlZD17ZGF0YS5mb3JtYXR0ZWQu6aKo6YCffSBkaXJlY3Rpb249e2RhdGEuZm9ybWF0dGVkLumiqOWQkX0gLz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEluZm8gXG5cdFx0XHRcdGh1bWlkaXR5PXtkYXRhLmZvcm1hdHRlZC7nm7jlsI3mv5XluqZ9XG5cdFx0XHRcdG1heFRlbXA9e2RhdGEuZm9ybWF0dGVkLuacrOaXpeacgOmrmOa6q31cblx0XHRcdFx0bWF4VGVtcFRpbWU9e2RhdGEuZm9ybWF0dGVkLuacrOaXpeacgOmrmOa6q+eZvOeUn+aZgumWk31cblx0XHRcdFx0bWluVGVtcD17ZGF0YS5mb3JtYXR0ZWQu5pys5pel5pyA5L2O5rqrfVxuXHRcdFx0XHRtaW5UZW1wVGltZT17ZGF0YS5mb3JtYXR0ZWQu5pys5pel5pyA5L2O5rqr55m855Sf5pmC6ZaTfVxuXHRcdFx0XHRwcmVzc3VyZT17ZGF0YS5mb3JtYXR0ZWQu5ris56uZ5rCj5aOTfVxuXHRcdFx0Lz5cblx0XHRcdDxXZWF0aGVyIHdlYXRoZXI9e2RhdGEuZm9ybWF0dGVkLuWkqeawo+eLgOazgX0vPlxuXHRcdFx0PGg0PuabtOaWsOaZgumWk++8mntkYXRhLnJhdy50aW1lLm9ic1RpbWV9PC9oND5cblx0XHQ8Lz5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./component/WeatherDisplay/index.tsx\n");

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcz9mMjhjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVUiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/process/browser.js\n");

/***/ })

});