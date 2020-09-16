"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

function Alert(props) {
  var children = props.children,
      _props$kink = props.kink,
      kink = _props$kink === void 0 ? 'info' : _props$kink,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(props, ["children", "kink"]);
  (0, _react.useEffect)(function () {
    console.log('%cjune-ui Alert mounted!', 'font-size: 18px;');
    return function () {};
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", rest, props.children);
}

var _default = Alert;
exports["default"] = _default;
//# sourceMappingURL=alert.js.map