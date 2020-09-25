import "antd/es/button/style/css";
import _Button from "antd/es/button";
import "antd/es/input/style/css";
import _Input from "antd/es/input";
import "antd/es/form/style/css";
import _Form from "antd/es/form";
import "antd/es/select/style/css";
import _Select from "antd/es/select";
import React, { useEffect, useState, useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
export default function FlowSearch(props) {
  var labelKey = props.labelKey,
      valueKey = props.valueKey,
      onSearch = props.onSearch,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options;

  var _onSearch = function _onSearch(values) {
    onSearch && onSearch(values);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "flow-search-bar"
  }, /*#__PURE__*/React.createElement(_Form, {
    name: "horizontal_login",
    layout: "inline",
    onFinish: _onSearch
  }, /*#__PURE__*/React.createElement(_Form.Item, {
    label: "\u6D41\u7A0B\u5206\u7C7B",
    name: "processDefKey" // rules={[{ required: true, message: "Please input your username!" }]}

  }, /*#__PURE__*/React.createElement(_Select, {
    allowClear: true,
    placeholder: "\u8BF7\u9009\u62E9\u5206\u7C7B",
    style: {
      minWidth: 192
    }
  }, options.map(function (d, i) {
    return /*#__PURE__*/React.createElement(_Select.Option, {
      key: i,
      value: d[valueKey] || d.dataValue
    }, d[labelKey] || d.name);
  }))), /*#__PURE__*/React.createElement(_Form.Item, {
    label: "\u6807\u9898",
    name: "title" // rules={[{ required: true, message: "Please input your password!" }]}

  }, /*#__PURE__*/React.createElement(_Input, {
    suffix: /*#__PURE__*/React.createElement(SearchOutlined, null),
    placeholder: "\u5173\u952E\u5B57\u641C\u7D22"
  })), /*#__PURE__*/React.createElement(_Form.Item, {
    shouldUpdate: true,
    noStyle: true
  }, function () {
    return /*#__PURE__*/React.createElement(_Button, {
      type: "primary",
      htmlType: "submit",
      ghost: true
    }, "\u641C\u7D22");
  })));
}
//# sourceMappingURL=flow-search.js.map