import React, { useEffect } from "react";
import { Button, Row, Col } from "antd";
export default function FlowActionButtons(props) {
  var onAgree = props.onAgree,
      onReject = props.onReject,
      onTransfer = props.onTransfer,
      data = props.data,
      _props$prefix = props.prefix,
      prefix = _props$prefix === void 0 ? [] : _props$prefix,
      _props$addon = props.addon,
      addon = _props$addon === void 0 ? [] : _props$addon;
  return /*#__PURE__*/React.createElement("div", {
    className: "flow-action-buttons"
  }, /*#__PURE__*/React.createElement(Row, {
    gutter: 12
  }, prefix.map(function (btn, i) {
    return /*#__PURE__*/React.createElement(Col, {
      key: i
    }, btn);
  }), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    ghost: true,
    onClick: onTransfer
  }, "\u8F6C\u529E")), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    ghost: true,
    onClick: onAgree,
    disabled: data.completeFlag || data.approveFlag === false
  }, "\u540C\u610F")), /*#__PURE__*/React.createElement(Col, null, /*#__PURE__*/React.createElement(Button, {
    danger: true,
    onClick: onReject,
    disabled: data.completeFlag || data.approveFlag === false
  }, "\u9A73\u56DE")), addon.map(function (btn, i) {
    return /*#__PURE__*/React.createElement(Col, {
      key: i
    }, btn);
  })));
}
//# sourceMappingURL=index.js.map