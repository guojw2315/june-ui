"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = FlowActionButtons;

require("antd/es/row/style/css");

var _row = _interopRequireDefault(require("antd/es/row"));

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/col/style/css");

var _col = _interopRequireDefault(require("antd/es/col"));

var _react = _interopRequireWildcard(require("react"));

function FlowActionButtons(props) {
  var onAgree = props.onAgree,
      onReject = props.onReject,
      onTransfer = props.onTransfer,
      data = props.data,
      _props$prefix = props.prefix,
      prefix = _props$prefix === void 0 ? [] : _props$prefix,
      _props$addon = props.addon,
      addon = _props$addon === void 0 ? [] : _props$addon;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flow-action-buttons"
  }, /*#__PURE__*/_react["default"].createElement(_row["default"], {
    gutter: 12
  }, prefix.map(function (btn, i) {
    return /*#__PURE__*/_react["default"].createElement(_col["default"], {
      key: i
    }, btn);
  }), /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    type: "primary",
    ghost: true,
    onClick: onTransfer
  }, "\u8F6C\u529E")), /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    type: "primary",
    ghost: true,
    onClick: onAgree,
    disabled: data.completeFlag || data.approveFlag === false
  }, "\u540C\u610F")), /*#__PURE__*/_react["default"].createElement(_col["default"], null, /*#__PURE__*/_react["default"].createElement(_button["default"], {
    danger: true,
    onClick: onReject,
    disabled: data.completeFlag || data.approveFlag === false
  }, "\u9A73\u56DE")), addon.map(function (btn, i) {
    return /*#__PURE__*/_react["default"].createElement(_col["default"], {
      key: i
    }, btn);
  })));
}
//# sourceMappingURL=index.js.map