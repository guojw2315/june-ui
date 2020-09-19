"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = FlowTabs;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _rcTabs = _interopRequireWildcard(require("rc-tabs"));

exports.TabPane = _rcTabs.TabPane;

function FlowTabs(_ref) {
  var children = _ref.children,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["children"]);
  return /*#__PURE__*/_react["default"].createElement(_rcTabs["default"], (0, _extends2["default"])({
    prefixCls: "flow-tabs"
  }, rest), children);
}
//# sourceMappingURL=index.js.map