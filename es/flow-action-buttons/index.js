import "antd/es/row/style/css";
import _Row from "antd/es/row";
import "antd/es/button/style/css";
import _Button from "antd/es/button";
import "antd/es/col/style/css";
import _Col from "antd/es/col";
import React, { useEffect } from "react";
export default function FlowActionButtons(props) {
  var onAgree = props.onAgree,
      onReject = props.onReject,
      onTransfer = props.onTransfer,
      canApprove = props.canApprove,
      _props$data = props.data,
      data = _props$data === void 0 ? {} : _props$data,
      _props$prefix = props.prefix,
      prefix = _props$prefix === void 0 ? [] : _props$prefix,
      _props$addon = props.addon,
      addon = _props$addon === void 0 ? [] : _props$addon;
  return /*#__PURE__*/React.createElement("div", {
    className: "flow-action-buttons"
  }, /*#__PURE__*/React.createElement(_Row, {
    gutter: 12
  }, prefix.map(function (btn, i) {
    return /*#__PURE__*/React.createElement(_Col, {
      key: i
    }, btn);
  }), /*#__PURE__*/React.createElement(_Col, null, /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    ghost: true,
    onClick: onTransfer,
    disabled: !canApprove
  }, "\u8F6C\u529E")), /*#__PURE__*/React.createElement(_Col, null, /*#__PURE__*/React.createElement(_Button, {
    type: "primary",
    ghost: true,
    onClick: onAgree,
    disabled: !canApprove || data.completeFlag || data.approveFlag === false
  }, "\u540C\u610F")), /*#__PURE__*/React.createElement(_Col, null, /*#__PURE__*/React.createElement(_Button, {
    danger: true,
    onClick: onReject,
    disabled: !canApprove || data.completeFlag || data.approveFlag === false
  }, "\u9A73\u56DE")), addon.map(function (btn, i) {
    return /*#__PURE__*/React.createElement(_Col, {
      key: i
    }, btn);
  })));
}
//# sourceMappingURL=index.js.map