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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_simba_git_weatherApp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _component_Select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/Select */ \"./component/Select/index.tsx\");\n/* harmony import */ var _component_WeatherDisplay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/WeatherDisplay */ \"./component/WeatherDisplay/index.tsx\");\n/* harmony import */ var _data_obversation_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/obversation.json */ \"./data/obversation.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/home/simba/git/weatherApp/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction getOptionsByTown(town) {\n  var target = _data_obversation_json__WEBPACK_IMPORTED_MODULE_5__.map(function (i) {\n    return (0,_home_simba_git_weatherApp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(i.obversation);\n  }).flat().find(function (i) {\n    return i.town === town;\n  }) || {\n    name: '板橋',\n    city: '新北市',\n    town: '板橋區'\n  };\n  return {\n    label: \"\".concat(target.town, \" - \").concat(target.name),\n    value: \"\".concat(target.name)\n  };\n}\n\nfunction Index() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(getOptionsByTown('板橋區')),\n      obversation = _useState[0],\n      setObversation = _useState[1];\n\n  var flag = false;\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    console.log('test', localStorage);\n    setObversation(getOptionsByTown(localStorage.town));\n    flag = true;\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    console.log(flag);\n    if (!flag) return;\n    console.log(\"save \".concat(obversation.label.split(' - ')[0], \" to localStorage\"));\n    localStorage.setItem('town', obversation.label.split(' - ')[0]);\n  }, [obversation]);\n  var selectOptions = _data_obversation_json__WEBPACK_IMPORTED_MODULE_5__.map(function (i) {\n    return {\n      label: i.city,\n      options: i.obversation.map(function (i) {\n        return {\n          label: \"\".concat(i.town, \" - \").concat(i.name),\n          value: \"\".concat(i.name)\n        };\n      })\n    };\n  }); // TODO: this code cause error\n  // const { data, error } = useSWR('get geolocation', getLocation);\n  // if(data && data.town) setObversation(getOptionsByTown(data.town));\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Select__WEBPACK_IMPORTED_MODULE_3__.default, {\n      state: obversation,\n      setState: setObversation,\n      options: selectOptions,\n      instanceId: \"obersvationSelect\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: obversation.label\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 4\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_WeatherDisplay__WEBPACK_IMPORTED_MODULE_4__.default, {\n      location: obversation\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Index, \"7iLPcL4EO/goQRt80svFDqQDS9E=\");\n\n_c = Index;\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiZ2V0T3B0aW9uc0J5VG93biIsInRvd24iLCJ0YXJnZXQiLCJvYnZlcnNhdGlvbnMiLCJpIiwib2J2ZXJzYXRpb24iLCJmbGF0IiwiZmluZCIsIm5hbWUiLCJjaXR5IiwibGFiZWwiLCJ2YWx1ZSIsIkluZGV4IiwidXNlU3RhdGUiLCJzZXRPYnZlcnNhdGlvbiIsImZsYWciLCJ1c2VFZmZlY3QiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwic3BsaXQiLCJzZXRJdGVtIiwic2VsZWN0T3B0aW9ucyIsIm9wdGlvbnMiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQXVDO0FBQ3RDLE1BQUlDLE1BQU0sR0FBR0MsdURBQUEsQ0FDUixVQUFBQyxDQUFDO0FBQUEsd0lBQVFBLENBQUMsQ0FBQ0MsV0FBVjtBQUFBLEdBRE8sRUFFWkMsSUFGWSxHQUdaQyxJQUhZLENBR1AsVUFBQUgsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0gsSUFBRixLQUFXQSxJQUFmO0FBQUEsR0FITSxLQUlWO0FBQUVPLFFBQUksRUFBRSxJQUFSO0FBQWNDLFFBQUksRUFBRSxLQUFwQjtBQUEyQlIsUUFBSSxFQUFFO0FBQWpDLEdBSkg7QUFNQSxTQUFPO0FBQ05TLFNBQUssWUFBS1IsTUFBTSxDQUFDRCxJQUFaLGdCQUFzQkMsTUFBTSxDQUFDTSxJQUE3QixDQURDO0FBRU5HLFNBQUssWUFBS1QsTUFBTSxDQUFDTSxJQUFaO0FBRkMsR0FBUDtBQUlBOztBQUVjLFNBQVNJLEtBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFDVUMsK0NBQVEsQ0FBQ2IsZ0JBQWdCLENBQUMsS0FBRCxDQUFqQixDQURsQjtBQUFBLE1BQ3RCSyxXQURzQjtBQUFBLE1BQ1RTLGNBRFM7O0FBRTlCLE1BQUlDLElBQUksR0FBRyxLQUFYO0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNmQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9CQyxZQUFwQjtBQUNBTCxrQkFBYyxDQUFDZCxnQkFBZ0IsQ0FBQ21CLFlBQVksQ0FBQ2xCLElBQWQsQ0FBakIsQ0FBZDtBQUNBYyxRQUFJLEdBQUcsSUFBUDtBQUNBLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2ZDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFaO0FBQ0EsUUFBRyxDQUFDQSxJQUFKLEVBQVU7QUFDVkUsV0FBTyxDQUFDQyxHQUFSLGdCQUFvQmIsV0FBVyxDQUFDSyxLQUFaLENBQWtCVSxLQUFsQixDQUF3QixLQUF4QixFQUErQixDQUEvQixDQUFwQjtBQUNBRCxnQkFBWSxDQUFDRSxPQUFiLENBQXFCLE1BQXJCLEVBQTZCaEIsV0FBVyxDQUFDSyxLQUFaLENBQWtCVSxLQUFsQixDQUF3QixLQUF4QixFQUErQixDQUEvQixDQUE3QjtBQUNBLEdBTFEsRUFLTixDQUFFZixXQUFGLENBTE0sQ0FBVDtBQU9BLE1BQU1pQixhQUFhLEdBQUduQix1REFBQSxDQUFpQixVQUFBQyxDQUFDO0FBQUEsV0FBSztBQUM1Q00sV0FBSyxFQUFFTixDQUFDLENBQUNLLElBRG1DO0FBRTVDYyxhQUFPLEVBQUVuQixDQUFDLENBQUNDLFdBQUYsQ0FBY21CLEdBQWQsQ0FBa0IsVUFBQXBCLENBQUM7QUFBQSxlQUFLO0FBQ2hDTSxlQUFLLFlBQUtOLENBQUMsQ0FBQ0gsSUFBUCxnQkFBaUJHLENBQUMsQ0FBQ0ksSUFBbkIsQ0FEMkI7QUFFaENHLGVBQUssWUFBS1AsQ0FBQyxDQUFDSSxJQUFQO0FBRjJCLFNBQUw7QUFBQSxPQUFuQjtBQUZtQyxLQUFMO0FBQUEsR0FBbEIsQ0FBdEIsQ0FqQjhCLENBeUI5QjtBQUNBO0FBQ0E7O0FBRUEsc0JBQ0M7QUFBQSw0QkFDQyw4REFBQyxzREFBRDtBQUFRLFdBQUssRUFBRUgsV0FBZjtBQUE0QixjQUFRLEVBQUVTLGNBQXRDO0FBQXNELGFBQU8sRUFBRVEsYUFBL0Q7QUFBOEUsZ0JBQVUsRUFBQztBQUF6RjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFBLGdCQUFLakIsV0FBVyxDQUFDSztBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkQsZUFHQyw4REFBQyw4REFBRDtBQUFnQixjQUFRLEVBQUVMO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRDtBQUFBLGtCQUREO0FBT0E7O0dBcEN1Qk8sSzs7S0FBQUEsSyIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuLi9jb21wb25lbnQvU2VsZWN0JztcbmltcG9ydCBXZWF0aGVyRGlzcGxheSBmcm9tICcuLi9jb21wb25lbnQvV2VhdGhlckRpc3BsYXknO1xuXG5pbXBvcnQgb2J2ZXJzYXRpb25zIGZyb20gJy4uL2RhdGEvb2J2ZXJzYXRpb24uanNvbic7XG5cbmZ1bmN0aW9uIGdldE9wdGlvbnNCeVRvd24odG93bjogc3RyaW5nKXtcblx0bGV0IHRhcmdldCA9IG9idmVyc2F0aW9uc1xuXHQubWFwKGkgPT4gWy4uLmkub2J2ZXJzYXRpb25dKVxuXHQuZmxhdCgpXG5cdC5maW5kKGkgPT4gaS50b3duID09PSB0b3duKVxuXHR8fCB7IG5hbWU6ICfmnb/mqYsnLCBjaXR5OiAn5paw5YyX5biCJywgdG93bjogJ+adv+api+WNgCcgfTtcblxuXHRyZXR1cm4ge1xuXHRcdGxhYmVsOiBgJHt0YXJnZXQudG93bn0gLSAke3RhcmdldC5uYW1lfWAsXG5cdFx0dmFsdWU6IGAke3RhcmdldC5uYW1lfWBcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKXtcblx0Y29uc3QgWyBvYnZlcnNhdGlvbiwgc2V0T2J2ZXJzYXRpb24gXSA9IHVzZVN0YXRlKGdldE9wdGlvbnNCeVRvd24oJ+adv+api+WNgCcpKTtcblx0bGV0IGZsYWcgPSBmYWxzZTtcblx0XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ3Rlc3QnLCBsb2NhbFN0b3JhZ2UpO1xuXHRcdHNldE9idmVyc2F0aW9uKGdldE9wdGlvbnNCeVRvd24obG9jYWxTdG9yYWdlLnRvd24pKTtcblx0XHRmbGFnID0gdHJ1ZTtcblx0fSwgW10pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coZmxhZyk7XG5cdFx0aWYoIWZsYWcpIHJldHVybjtcblx0XHRjb25zb2xlLmxvZyhgc2F2ZSAke29idmVyc2F0aW9uLmxhYmVsLnNwbGl0KCcgLSAnKVswXX0gdG8gbG9jYWxTdG9yYWdlYCk7XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rvd24nLCBvYnZlcnNhdGlvbi5sYWJlbC5zcGxpdCgnIC0gJylbMF0pO1xuXHR9LCBbIG9idmVyc2F0aW9uIF0pO1xuXG5cdGNvbnN0IHNlbGVjdE9wdGlvbnMgPSBvYnZlcnNhdGlvbnMubWFwKGkgPT4gKHtcblx0XHRsYWJlbDogaS5jaXR5LFxuXHRcdG9wdGlvbnM6IGkub2J2ZXJzYXRpb24ubWFwKGkgPT4gKHtcblx0XHRcdGxhYmVsOiBgJHtpLnRvd259IC0gJHtpLm5hbWV9YCxcblx0XHRcdHZhbHVlOiBgJHtpLm5hbWV9YFxuXHRcdH0pKVxuXHR9KSk7XG5cblx0Ly8gVE9ETzogdGhpcyBjb2RlIGNhdXNlIGVycm9yXG5cdC8vIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUignZ2V0IGdlb2xvY2F0aW9uJywgZ2V0TG9jYXRpb24pO1xuXHQvLyBpZihkYXRhICYmIGRhdGEudG93bikgc2V0T2J2ZXJzYXRpb24oZ2V0T3B0aW9uc0J5VG93bihkYXRhLnRvd24pKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8U2VsZWN0IHN0YXRlPXtvYnZlcnNhdGlvbn0gc2V0U3RhdGU9e3NldE9idmVyc2F0aW9ufSBvcHRpb25zPXtzZWxlY3RPcHRpb25zfSBpbnN0YW5jZUlkPSdvYmVyc3ZhdGlvblNlbGVjdCcvPlxuXHRcdFx0PGgxPntvYnZlcnNhdGlvbi5sYWJlbH08L2gxPlxuXHRcdFx0PFdlYXRoZXJEaXNwbGF5IGxvY2F0aW9uPXtvYnZlcnNhdGlvbn0vPlxuXHRcdDwvPlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});