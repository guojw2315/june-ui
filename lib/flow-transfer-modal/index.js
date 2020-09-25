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

require("antd/es/message/style/css");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/form/style/css");

var _form = _interopRequireDefault(require("antd/es/form"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash.debounce"));

var _api = _interopRequireDefault(require("../api"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
      remark = props.remark,
      setRemark = props.setRemark,
      request = props.request,
      onOk = props.onOk,
      onCancel = props.onCancel,
      onModelFormChange = props.onModelFormChange,
      _props$runTimeTasks = props.runTimeTasks,
      runTimeTasks = _props$runTimeTasks === void 0 ? [] : _props$runTimeTasks;

  var _Form$useForm = _form["default"].useForm(),
      form = _Form$useForm[0];

  var _useState = (0, _react.useState)([]),
      targetUserList = _useState[0],
      setTargetUserList = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  (0, _react.useEffect)(function () {
    if (visible) {}

    return function () {};
  }, [visible]);
  (0, _react.useEffect)(function () {
    form.setFieldsValue({
      reason: remark
    });
    return function () {};
  }, [remark]);
  (0, _react.useEffect)(function () {
    if (runTimeTasks.length) {
      var _runTimeTasks$;

      // console.log(remark)
      form.setFieldsValue({
        taskIds: [(_runTimeTasks$ = runTimeTasks[0]) === null || _runTimeTasks$ === void 0 ? void 0 : _runTimeTasks$.taskId]
      });
    }

    return function () {};
  }, [runTimeTasks]);

  var _onOk = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var values, res;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!request) {
                _context.next = 21;
                break;
              }

              _context.prev = 1;
              setLoading(true);
              _context.next = 5;
              return form.validateFields();

            case 5:
              values = _context.sent;
              _context.next = 8;
              return request({
                method: "POST",
                url: _api["default"].taskTransfer(),
                data: _objectSpread({}, values)
              });

            case 8:
              res = _context.sent;
              console.log("values:", values);
              form.resetFields();

              _message2["default"].success(res.data.data);

              if (typeof onOk === "function") onOk(values); // console.log("Success:", values);

              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](1);
              console.log("Failed:", _context.t0);

            case 18:
              _context.prev = 18;
              setLoading(false);
              return _context.finish(18);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 15, 18, 21]]);
    }));

    return function _onOk() {
      return _ref.apply(this, arguments);
    };
  }();

  var _onSearch = (0, _lodash["default"])( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(val) {
      var _res$data, res, data;

      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              if (!request) {
                _context2.next = 7;
                break;
              }

              _context2.next = 4;
              return request({
                method: "GET",
                url: _api["default"].userList(val)
              });

            case 4:
              res = _context2.sent;
              data = res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data; // console.log(data);

              setTargetUserList(data);

            case 7:
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.log("Failed:", _context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), 300);

  var _onChange = function _onChange(changedValues, allValues) {
    // setRemark && setRemark(changedValues.reason);
    onModelFormChange && onModelFormChange(changedValues);
  };

  return /*#__PURE__*/_react["default"].createElement(_modal["default"], {
    title: "\u6D41\u7A0B\u8F6C\u529E",
    visible: visible,
    onOk: _onOk,
    onCancel: onCancel,
    cancelText: "\u53D6\u6D88",
    okText: "\u786E\u5B9A",
    confirmLoading: loading
  }, /*#__PURE__*/_react["default"].createElement(_form["default"], (0, _extends2["default"])({}, layout, {
    form: form,
    name: "basic",
    initialValues: {
      remember: true
    },
    onValuesChange: _onChange // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}

  }), /*#__PURE__*/_react["default"].createElement(_form["default"].Item, {
    label: "\u8F6C\u529E\u4EBA",
    name: "targetUserId",
    rules: [{
      required: true,
      message: "请选择转办人"
    }]
  }, /*#__PURE__*/_react["default"].createElement(_select["default"], {
    showSearch: true,
    placeholder: "\u9009\u62E9\u8F6C\u529E\u4EBA",
    optionFilterProp: "children" // onChange={onChange}
    ,
    onSearch: _onSearch
  }, targetUserList.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement(_select["default"].Option, {
      key: i,
      value: d.id
    }, d.name + " - " + d.login);
  }))), /*#__PURE__*/_react["default"].createElement(_form["default"].Item, {
    label: "\u6D41\u7A0B\u8282\u70B9",
    name: "taskIds",
    rules: [{
      required: true,
      message: "请选择流程节点"
    }]
  }, /*#__PURE__*/_react["default"].createElement(_select["default"], {
    mode: "multiple",
    placeholder: "\u9009\u62E9\u6D41\u7A0B\u8282\u70B9" // onChange={onChange}

  }, runTimeTasks.map(function (d, i) {
    return /*#__PURE__*/_react["default"].createElement(_select["default"].Option, {
      key: i,
      value: d.taskId
    }, d.nodeName + " - " + d.userNames);
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