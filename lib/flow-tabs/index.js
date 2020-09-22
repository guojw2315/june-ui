"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = FlowTabs;
exports.TabPane = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var TabPane = _antd.Tabs.TabPane;
exports.TabPane = TabPane;

function FlowTabs(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(_antd.Tabs, rest, children);
}
//# sourceMappingURL=index.js.map