import "antd/es/modal/style/css";
import _Modal from "antd/es/modal";
import _extends from "@babel/runtime/helpers/esm/extends";
import "antd/es/input/style/css";
import _Input from "antd/es/input";
import "antd/es/select/style/css";
import _Select from "antd/es/select";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import "antd/es/form/style/css";
import _Form from "antd/es/form";
import React, { useEffect, useState, useRef, useCallback } from "react";
var layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 18
  }
};
var tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16
  }
};
export default function FlowTransferModal(props) {
  var visible = props.visible,
      onOk = props.onOk,
      onCancel = props.onCancel;

  var _Form$useForm = _Form.useForm(),
      form = _Form$useForm[0];

  var _onOk = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var values;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return form.validateFields();

            case 3:
              values = _context.sent;
              if (typeof onOk === 'function') onOk(values);
              console.log('Success:', values);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log('Failed:', _context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function _onOk() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/React.createElement(_Modal, {
    title: "\u6D41\u7A0B\u8F6C\u529E",
    visible: visible,
    onOk: _onOk,
    onCancel: onCancel,
    cancelText: "\u53D6\u6D88",
    okText: "\u786E\u5B9A"
  }, /*#__PURE__*/React.createElement(_Form, _extends({}, layout, {
    form: form,
    name: "basic",
    initialValues: {
      remember: true
    } // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}

  }), /*#__PURE__*/React.createElement(_Form.Item, {
    label: "\u8F6C\u529E\u4EBA",
    name: "targetUserId",
    rules: [{
      required: true,
      message: "请选择转办人"
    }]
  }, /*#__PURE__*/React.createElement(_Select, {
    showSearch: true // style={{ width: 1 }}
    ,
    placeholder: "\u9009\u62E9\u8F6C\u529E\u4EBA",
    optionFilterProp: "children" // onChange={onChange}
    // onFocus={onFocus}
    // onBlur={onBlur}
    // onSearch={onSearch}

  }, /*#__PURE__*/React.createElement(_Select.Option, {
    value: "jack"
  }, "Jack"), /*#__PURE__*/React.createElement(_Select.Option, {
    value: "lucy"
  }, "Lucy"), /*#__PURE__*/React.createElement(_Select.Option, {
    value: "tom"
  }, "Tom"))), /*#__PURE__*/React.createElement(_Form.Item, {
    label: "\u8F6C\u529E\u7406\u7531",
    name: "reason",
    rules: [{
      required: true,
      message: "请输入转办理由"
    }]
  }, /*#__PURE__*/React.createElement(_Input.TextArea, {
    rows: 4,
    placeholder: "\u8BF7\u8F93\u5165\u8F6C\u529E\u7406\u7531"
  }))));
}
//# sourceMappingURL=index.js.map