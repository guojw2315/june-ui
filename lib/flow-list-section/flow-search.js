"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = FlowSearch;

require("antd/es/button/style/css");

var _button = _interopRequireDefault(require("antd/es/button"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/form/style/css");

var _form = _interopRequireDefault(require("antd/es/form"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _react = _interopRequireWildcard(require("react"));

var _icons = require("@ant-design/icons");

function FlowSearch(props) {
  var labelKey = props.labelKey,
      valueKey = props.valueKey,
      onSearch = props.onSearch,
      _props$options = props.options,
      options = _props$options === void 0 ? [] : _props$options;

  var _onSearch = function _onSearch(values) {
    onSearch && onSearch(values);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flow-search-bar"
  }, /*#__PURE__*/_react["default"].createElement(_form["default"], {
    name: "horizontal_login",
    layout: "inline",
    onFinish: _onSearch
  }, /*#__PURE__*/_react["default"].createElement(_form["default"].Item, {
    label: "\u6D41\u7A0B\u5206\u7C7B",
    name: "processDefKey" // rules={[{ required: true, message: "Please input your username!" }]}

  }, /*#__PURE__*/_react["default"].createElement(_select["default"], {
    allowClear: true,
    placeholder: "\u8BF7\u9009\u62E9\u5206\u7C7B",
    style: {
      minWidth: 192
    }
  }, options.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement(_select["default"].Option, {
      key: i,
      value: d[valueKey] || d.dataValue
    }, d[labelKey] || d.name);
  }))), /*#__PURE__*/_react["default"].createElement(_form["default"].Item, {
    label: "\u6807\u9898",
    name: "title" // rules={[{ required: true, message: "Please input your password!" }]}

  }, /*#__PURE__*/_react["default"].createElement(_input["default"], {
    suffix: /*#__PURE__*/_react["default"].createElement(_icons.SearchOutlined, null),
    placeholder: "\u5173\u952E\u5B57\u641C\u7D22"
  })), /*#__PURE__*/_react["default"].createElement(_form["default"].Item, {
    shouldUpdate: true,
    noStyle: true
  }, function () {
    return /*#__PURE__*/_react["default"].createElement(_button["default"], {
      type: "primary",
      htmlType: "submit",
      ghost: true
    }, "\u641C\u7D22");
  })));
}
//# sourceMappingURL=flow-search.js.map