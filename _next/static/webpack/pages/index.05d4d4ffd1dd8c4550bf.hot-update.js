/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/WeatherDisplay/index.tsx":
/*!********************************************!*\
  !*** ./component/WeatherDisplay/index.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WeatherDisplay; }\n/* harmony export */ });\n/* harmony import */ var _home_simba_git_weatherApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_simba_git_weatherApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_simba_git_weatherApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_simba_git_weatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _lib_qs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/qs */ \"./lib/qs.ts\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.module.css */ \"./component/WeatherDisplay/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widget */ \"./component/WeatherDisplay/widget/index.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/simba/git/weatherApp/component/WeatherDisplay/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar token = \"CWB-25BB0BA2-9449-4DD2-82D6-D835F21722EE\";\n\nfunction findWeatherElement(weather, name) {\n  var value = weather.weatherElement.find(function (i) {\n    return i.elementName == name;\n  });\n  return value ? value.elementValue : '-99';\n}\n\nfunction fetcher(_x) {\n  return _fetcher.apply(this, arguments);\n}\n\nfunction _fetcher() {\n  _fetcher = (0,_home_simba_git_weatherApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_home_simba_git_weatherApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(location) {\n    var url, query;\n    return _home_simba_git_weatherApp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            url = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001';\n            query = (0,_lib_qs__WEBPACK_IMPORTED_MODULE_4__.default)({\n              Authorization: token,\n              locationName: encodeURI(location)\n            });\n            return _context.abrupt(\"return\", fetch(\"\".concat(url, \"?\").concat(query)).then(function (res) {\n              return res.json();\n            }).then(function (res) {\n              return res.records.location[0];\n            }).then(function (res) {\n              return {\n                raw: res,\n                formatted: {\n                  風速: findWeatherElement(res, 'WDSD'),\n                  風向: findWeatherElement(res, 'WDIR'),\n                  溫度: findWeatherElement(res, 'TEMP'),\n                  相對濕度: findWeatherElement(res, 'HUMD'),\n                  測站氣壓: findWeatherElement(res, 'PRES'),\n                  日累積雨量: findWeatherElement(res, '24R'),\n                  本日最高溫: findWeatherElement(res, 'D_TX'),\n                  本日最高溫發生時間: findWeatherElement(res, 'D_TXT'),\n                  本日最低溫: findWeatherElement(res, 'D_TN'),\n                  本日最低溫發生時間: findWeatherElement(res, 'D_TNT'),\n                  天氣狀況: findWeatherElement(res, 'Weather')\n                }\n              };\n            }));\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _fetcher.apply(this, arguments);\n}\n\nfunction WeatherDisplay(_ref) {\n  _s();\n\n  var location = _ref.location;\n\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_3__.default)(\"fetch \".concat(location.value), function () {\n    return fetcher(location.value);\n  }),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n    children: \"Loading ...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 19\n  }, this);\n  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n    children: [\"Error: \", JSON.stringify(error, null, 2)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 19\n  }, this);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: (_style_module_css__WEBPACK_IMPORTED_MODULE_6___default().windAndTemp),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_widget__WEBPACK_IMPORTED_MODULE_5__.Temperature, {\n        temp: data.formatted.溫度\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 5\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_widget__WEBPACK_IMPORTED_MODULE_5__.Wind, {\n        speed: data.formatted.風速,\n        direction: data.formatted.風向\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_widget__WEBPACK_IMPORTED_MODULE_5__.Info, {\n      humidity: data.formatted.相對濕度,\n      maxTemp: data.formatted.本日最高溫,\n      maxTempTime: data.formatted.本日最高溫發生時間,\n      minTemp: data.formatted.本日最低溫,\n      minTempTime: data.formatted.本日最低溫發生時間,\n      pressure: data.formatted.測站氣壓\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_widget__WEBPACK_IMPORTED_MODULE_5__.Weather, {\n      weather: data.formatted.天氣狀況\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n      children: [\"\\u66F4\\u65B0\\u6642\\u9593\\uFF1A\", data.raw.time.obsTime]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n_s(WeatherDisplay, \"PLUSh3GLacfZJClYQJks7Deieck=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_3__.default];\n});\n\n_c = WeatherDisplay;\n\nvar _c;\n\n$RefreshReg$(_c, \"WeatherDisplay\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L1dlYXRoZXJEaXNwbGF5L2luZGV4LnRzeD81ZDIzIl0sIm5hbWVzIjpbInRva2VuIiwicHJvY2VzcyIsImZpbmRXZWF0aGVyRWxlbWVudCIsIndlYXRoZXIiLCJuYW1lIiwidmFsdWUiLCJ3ZWF0aGVyRWxlbWVudCIsImZpbmQiLCJpIiwiZWxlbWVudE5hbWUiLCJlbGVtZW50VmFsdWUiLCJmZXRjaGVyIiwibG9jYXRpb24iLCJ1cmwiLCJxdWVyeSIsInFzIiwiQXV0aG9yaXphdGlvbiIsImxvY2F0aW9uTmFtZSIsImVuY29kZVVSSSIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJyZWNvcmRzIiwicmF3IiwiZm9ybWF0dGVkIiwi6aKo6YCfIiwi6aKo5ZCRIiwi5rqr5bqmIiwi55u45bCN5r+V5bqmIiwi5ris56uZ5rCj5aOTIiwi5pel57Sv56mN6Zuo6YePIiwi5pys5pel5pyA6auY5rqrIiwi5pys5pel5pyA6auY5rqr55m855Sf5pmC6ZaTIiwi5pys5pel5pyA5L2O5rqrIiwi5pys5pel5pyA5L2O5rqr55m855Sf5pmC6ZaTIiwi5aSp5rCj54uA5rOBIiwiV2VhdGhlckRpc3BsYXkiLCJ1c2VTV1IiLCJkYXRhIiwiZXJyb3IiLCJKU09OIiwic3RyaW5naWZ5Iiwic3R5bGUiLCJ0aW1lIiwib2JzVGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUVBLElBQU1BLEtBQUssR0FBR0MsMENBQWQ7O0FBRUEsU0FBU0Msa0JBQVQsQ0FBNEJDLE9BQTVCLEVBQXNEQyxJQUF0RCxFQUFtRTtBQUNsRSxNQUFJQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csY0FBUixDQUF1QkMsSUFBdkIsQ0FBNEIsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsV0FBRixJQUFpQkwsSUFBckI7QUFBQSxHQUE3QixDQUFaO0FBQ0EsU0FBT0MsS0FBSyxH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LGlCQUFTLEVBQUVhLElBQUksQ0FBQ2QsU0FBTCxDQUFlRTtBQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFLQyw4REFBQyx5Q0FBRDtBQUNDLGNBQVEsRUFBRVksSUFBSSxDQUFDZCxTQUFMLENBQWVJLElBRDFCO0FBRUMsYUFBTyxFQUFFVSxJQUFJLENBQUNkLFNBQUwsQ0FBZU8sS0FGekI7QUFHQyxpQkFBVyxFQUFFTyxJQUFJLENBQUNkLFNBQUwsQ0FBZVEsU0FIN0I7QUFJQyxhQUFPLEVBQUVNLElBQUksQ0FBQ2QsU0FBTCxDQUFlUyxLQUp6QjtBQUtDLGlCQUFXLEVBQUVLLElBQUksQ0FBQ2QsU0FBTCxDQUFlVSxTQUw3QjtBQU1DLGNBQVEsRUFBRUksSUFBSSxDQUFDZCxTQUFMLENBQWVLO0FBTjFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQWFDLDhEQUFDLDRDQUFEO0FBQVMsYUFBTyxFQUFFUyxJQUFJLENBQUNkLFNBQUwsQ0FBZVc7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJELGVBY0M7QUFBQSxtREFBVUcsSUFBSSxDQUFDZixHQUFMLENBQVNvQixJQUFULENBQWNDLE9BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWREO0FBQUEsa0JBREQ7QUFrQkE7O0dBdkJ1QlIsYztVQUNEQyx3Qzs7O0tBRENELGMiLCJmaWxlIjoiLi9jb21wb25lbnQvV2VhdGhlckRpc3BsYXkvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHFzIGZyb20gJy4uLy4uL2xpYi9xcyc7XG5cbmltcG9ydCB7IElSYXdXZWF0aGVyRGF0YSwgSVdlYXRoZXJQcm9wcyB9IGZyb20gJy4vaW5kZXguZCc7XG5cbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgVGVtcGVyYXR1cmUsIFdpbmQsIEluZm8sIFdlYXRoZXIgfSBmcm9tICcuL3dpZGdldCc7XG5cbmNvbnN0IHRva2VuID0gcHJvY2Vzcy5lbnYuQ1dCVG9rZW47XG5cbmZ1bmN0aW9uIGZpbmRXZWF0aGVyRWxlbWVudCh3ZWF0aGVyOiBJUmF3V2VhdGhlckRhdGEsIG5hbWU6IHN0cmluZyl7XG5cdGxldCB2YWx1ZSA9IHdlYXRoZXIud2VhdGhlckVsZW1lbnQuZmluZChpID0+IGkuZWxlbWVudE5hbWUgPT0gbmFtZSk7XG5cdHJldHVybiB2YWx1ZSA/IHZhbHVlLmVsZW1lbnRWYWx1ZSA6ICctOTknO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyKGxvY2F0aW9uOiBzdHJpbmcpe1xuXHRjb25zdCB1cmwgPSAnaHR0cHM6Ly9vcGVuZGF0YS5jd2IuZ292LnR3L2FwaS92MS9yZXN0L2RhdGFzdG9yZS9PLUEwMDAzLTAwMSc7XG5cdGNvbnN0IHF1ZXJ5ID0gcXMoe1xuXHRcdEF1dGhvcml6YXRpb246IHRva2VuLFxuXHRcdGxvY2F0aW9uTmFtZTogZW5jb2RlVVJJKGxvY2F0aW9uKVxuXHR9KTtcblx0cmV0dXJuIGZldGNoKGAke3VybH0/JHtxdWVyeX1gKVxuXHQudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcblx0LnRoZW4ocmVzID0+IHJlcy5yZWNvcmRzLmxvY2F0aW9uWzBdKVxuXHQudGhlbigocmVzOiBJUmF3V2VhdGhlckRhdGEpID0+ICh7XG5cdFx0cmF3OiByZXMsXG5cdFx0Zm9ybWF0dGVkOiB7XG5cdFx0XHTpoqjpgJ86IGZpbmRXZWF0aGVyRWxlbWVudChyZXMsICdXRFNEJyksXG5cdFx0XHTpoqjlkJE6IGZpbmRXZWF0aGVyRWxlbWVudChyZXMsICdXRElSJyksXG5cdFx0XHTmuqvluqY6IGZpbmRXZWF0aGVyRWxlbWVudChyZXMsICdURU1QJyksXG5cdFx0XHTnm7jlsI3mv5XluqY6IGZpbmRXZWF0aGVyRWxlbWVudChyZXMsICdIVU1EJyksXG5cdFx0XHTmuKznq5nmsKPlo5M6IGZpbmRXZWF0aGVyRWxlbWVudChyZXMsICdQUkVTJyksXG5cdFx0XHTml6XntK/nqY3pm6jph486IGZpbmRXZWF0aGVyRWxlbWVudChyZXMsICcyNFInKSxcblx0XHRcdOacrOaXpeacgOmrmOa6qzogZmluZFdlYXRoZXJFbGVtZW50KHJlcywgJ0RfVFgnKSxcblx0XHRcdOacrOaXpeacgOmrmOa6q+eZvOeUn+aZgumWkzogZmluZFdlYXRoZXJFbGVtZW50KHJlcywgJ0RfVFhUJyksXG5cdFx0XHTmnKzml6XmnIDkvY7muqs6IGZpbmRXZWF0aGVyRWxlbWVudChyZXMsICdEX1ROJyksXG5cdFx0XHTmnKzml6XmnIDkvY7muqvnmbznlJ/mmYLplpM6IGZpbmRXZWF0aGVyRWxlbWVudChyZXMsICdEX1ROVCcpLFxuXHRcdFx05aSp5rCj54uA5rOBOiBmaW5kV2VhdGhlckVsZW1lbnQocmVzLCAnV2VhdGhlcicpXG5cdFx0fVxuXHR9KSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VhdGhlckRpc3BsYXkoeyBsb2NhdGlvbiB9IDogSVdlYXRoZXJQcm9wcyl7XG5cdGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoYGZldGNoICR7bG9jYXRpb24udmFsdWV9YCwgKCkgPT4gZmV0Y2hlcihsb2NhdGlvbi52YWx1ZSkpO1xuXHRpZighZGF0YSkgcmV0dXJuIDxoMT5Mb2FkaW5nIC4uLjwvaDE+O1xuXHRpZihlcnJvcikgcmV0dXJuIDxoMT5FcnJvcjoge0pTT04uc3RyaW5naWZ5KGVycm9yLCBudWxsLDIpfTwvaDE+O1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53aW5kQW5kVGVtcH0+XG5cdFx0XHRcdDxUZW1wZXJhdHVyZSB0ZW1wPXtkYXRhLmZvcm1hdHRlZC7muqvluqZ9IC8+XG5cdFx0XHRcdDxXaW5kIHNwZWVkPXtkYXRhLmZvcm1hdHRlZC7poqjpgJ99IGRpcmVjdGlvbj17ZGF0YS5mb3JtYXR0ZWQu6aKo5ZCRfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8SW5mbyBcblx0XHRcdFx0aHVtaWRpdHk9e2RhdGEuZm9ybWF0dGVkLuebuOWwjea/leW6pn1cblx0XHRcdFx0bWF4VGVtcD17ZGF0YS5mb3JtYXR0ZWQu5pys5pel5pyA6auY5rqrfVxuXHRcdFx0XHRtYXhUZW1wVGltZT17ZGF0YS5mb3JtYXR0ZWQu5pys5pel5pyA6auY5rqr55m855Sf5pmC6ZaTfVxuXHRcdFx0XHRtaW5UZW1wPXtkYXRhLmZvcm1hdHRlZC7mnKzml6XmnIDkvY7muqt9XG5cdFx0XHRcdG1pblRlbXBUaW1lPXtkYXRhLmZvcm1hdHRlZC7mnKzml6XmnIDkvY7muqvnmbznlJ/mmYLplpN9XG5cdFx0XHRcdHByZXNzdXJlPXtkYXRhLmZvcm1hdHRlZC7muKznq5nmsKPlo5N9XG5cdFx0XHQvPlxuXHRcdFx0PFdlYXRoZXIgd2VhdGhlcj17ZGF0YS5mb3JtYXR0ZWQu5aSp5rCj54uA5rOBfS8+XG5cdFx0XHQ8aDQ+5pu05paw5pmC6ZaT77yae2RhdGEucmF3LnRpbWUub2JzVGltZX08L2g0PlxuXHRcdDwvPlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./component/WeatherDisplay/index.tsx\n");

/***/ })

});