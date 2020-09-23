"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = FlowTransferModal;

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/form/style/css");

var _form = _interopRequireDefault(require("antd/es/form"));

var _react = _interopRequireWildcard(require("react"));

var _api = _interopRequireDefault(require("../api"));

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

function FlowTransferModal(props) {
  var visible = props.visible,
      request = props.request,
      onOk = props.onOk,
      onCancel = props.onCancel;

  var _Form$useForm = _form["default"].useForm(),
      form = _Form$useForm[0];

  var _useState = (0, _react.useState)([]),
      targetUserList = _useState[0],
      setTargetUserList = _useState[1];

  (0, _react.useEffect)(function () {
    if (visible) {}

    return function () {};
  }, [visible]);

  var _onOk = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var values;
      return _regenerator["default"].wrap(function _callee$(_context) {
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

  var _onSearch = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(val) {
      var res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (!request) {
                _context2.next = 6;
                break;
              }

              _context2.next = 4;
              return request.get(_api["default"].userList(val));

            case 4:
              res = _context2.sent;
              console.log(res);

            case 6:
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.log('Failed:', _context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function _onSearch(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react["default"].createElement(_modal["default"], {
    title: "\u6D41\u7A0B\u8F6C\u529E",
    visible: visible,
    onOk: _onOk,
    onCancel: onCancel,
    cancelText: "\u53D6\u6D88",
    okText: "\u786E\u5B9A"
  }, /*#__PURE__*/_react["default"].createElement(_form["default"], (0, _extends2["default"])({}, layout, {
    form: form,
    name: "basic",
    initialValues: {
      remember: true
    } // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}

  }), /*#__PURE__*/_react["default"].createElement(_form["default"].Item, {
    label: "\u8F6C\u529E\u4EBA",
    name: "targetUserId",
    rules: [{
      required: true,
      message: "请选择转办人"
    }]
  }, /*#__PURE__*/_react["default"].createElement(_select["default"], {
    showSearch: true // style={{ width: 1 }}
    ,
    placeholder: "\u9009\u62E9\u8F6C\u529E\u4EBA",
    optionFilterProp: "children" // onChange={onChange}
    // onFocus={onFocus}
    // onBlur={onBlur}
    ,
    onSearch: _onSearch
  }, targetUserList.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement(_select["default"].Option, {
      key: i,
      value: "jack"
    }, "Jack");
  }))), /*#__PURE__*/_react["default"].createElement(_form["default"].Item, {
    label: "\u8F6C\u529E\u7406\u7531",
    name: "reason",
    rules: [{
      required: true,
      message: "请输入转办理由"
    }]
  }, /*#__PURE__*/_react["default"].createElement(_input["default"].TextArea, {
    rows: 4,
    placeholder: "\u8BF7\u8F93\u5165\u8F6C\u529E\u7406\u7531"
  }))));
}
//# sourceMappingURL=index.js.map