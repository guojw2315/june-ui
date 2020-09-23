"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = FlowTabs;
exports.TabPane = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

require("antd/es/tabs/style/css");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireDefault(require("react"));

var TabPane = _tabs["default"].TabPane;
exports.TabPane = TabPane;

function FlowTabs(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(_tabs["default"], rest, children);
}
//# sourceMappingURL=index.js.map