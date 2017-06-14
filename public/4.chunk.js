webpackJsonp([4],{"./app/containers/Search/constants.js":function(module,exports,__webpack_require__){"use strict";eval("/* harmony export (binding) */ __webpack_require__.d(exports, \"a\", function() { return DEFAULT_ACTION; });\n/*\n *\n * Search constants\n *\n */\n\nvar DEFAULT_ACTION = 'app/Search/DEFAULT_ACTION';//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29udGFpbmVycy9TZWFyY2gvY29uc3RhbnRzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb250YWluZXJzL1NlYXJjaC9jb25zdGFudHMuanM/MWFjMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICpcbiAqIFNlYXJjaCBjb25zdGFudHNcbiAqXG4gKi9cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQUNUSU9OID0gJ2FwcC9TZWFyY2gvREVGQVVMVF9BQ1RJT04nO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb250YWluZXJzL1NlYXJjaC9jb25zdGFudHMuanMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFNQTsiLCJzb3VyY2VSb290IjoiIn0=")},"./app/containers/Search/reducer.js":function(module,exports,__webpack_require__){"use strict";eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(\"./app/containers/Search/constants.js\");\n/*\n *\n * Search reducer\n *\n */\n\n\n\n\nvar initialState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__[\"fromJS\"])({});\n\nfunction searchReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case __WEBPACK_IMPORTED_MODULE_1__constants__[\"a\" /* DEFAULT_ACTION */]:\n      return state.set('query', action.data.query).set('aggsSent', action.data.aggsSent).set('page', action.data.page).set('total', action.data.recordsTotal).set('totalFiltered', action.data.recordsFiltered).set('rows', action.data.data).set('aggs', action.data.aggs);\n    default:\n      return state;\n  }\n}\n\n/* harmony default export */ exports[\"default\"] = searchReducer;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvY29udGFpbmVycy9TZWFyY2gvcmVkdWNlci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29udGFpbmVycy9TZWFyY2gvcmVkdWNlci5qcz9lZGY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKlxuICogU2VhcmNoIHJlZHVjZXJcbiAqXG4gKi9cblxuaW1wb3J0IHsgZnJvbUpTIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7XG4gIERFRkFVTFRfQUNUSU9OLFxufSBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IGZyb21KUyh7fSk7XG5cbmZ1bmN0aW9uIHNlYXJjaFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBERUZBVUxUX0FDVElPTjpcbiAgICAgIHJldHVybiBzdGF0ZVxuICAgICAgICAuc2V0KCdxdWVyeScsIGFjdGlvbi5kYXRhLnF1ZXJ5KVxuICAgICAgICAuc2V0KCdhZ2dzU2VudCcsIGFjdGlvbi5kYXRhLmFnZ3NTZW50KVxuICAgICAgICAuc2V0KCdwYWdlJywgYWN0aW9uLmRhdGEucGFnZSlcbiAgICAgICAgLnNldCgndG90YWwnLCBhY3Rpb24uZGF0YS5yZWNvcmRzVG90YWwpXG4gICAgICAgIC5zZXQoJ3RvdGFsRmlsdGVyZWQnLCBhY3Rpb24uZGF0YS5yZWNvcmRzRmlsdGVyZWQpXG4gICAgICAgIC5zZXQoJ3Jvd3MnLCBhY3Rpb24uZGF0YS5kYXRhKVxuICAgICAgICAuc2V0KCdhZ2dzJywgYWN0aW9uLmRhdGEuYWdncyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2hSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb250YWluZXJzL1NlYXJjaC9yZWR1Y2VyLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQVhBO0FBYUE7QUFDQTs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9")}});