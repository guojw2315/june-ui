"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = FlowActionButtons;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

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
  }, /*#__PURE__*/_react["default"].createElement(_antd.Row, {
    gutter: 12
  }, prefix.map(function (btn, i) {
    return /*#__PURE__*/_react["default"].createElement(_antd.Col, {
      key: i
    }, btn);
  }), /*#__PURE__*/_react["default"].createElement(_antd.Col, null, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    type: "primary",
    ghost: true,
    onClick: onTransfer
  }, "\u8F6C\u529E")), /*#__PURE__*/_react["default"].createElement(_antd.Col, null, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    type: "primary",
    ghost: true,
    onClick: onAgree,
    disabled: data.completeFlag || data.approveFlag === false
  }, "\u540C\u610F")), /*#__PURE__*/_react["default"].createElement(_antd.Col, null, /*#__PURE__*/_react["default"].createElement(_antd.Button, {
    danger: true,
    onClick: onReject,
    disabled: data.completeFlag || data.approveFlag === false
  }, "\u9A73\u56DE")), addon.map(function (btn, i) {
    return /*#__PURE__*/_react["default"].createElement(_antd.Col, {
      key: i
    }, btn);
  })));
}
//# sourceMappingURL=index.js.map