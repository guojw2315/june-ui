"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = FlowDetail;

require("antd/es/spin/style/css");

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

require("antd/es/input/style/css");

var _input = _interopRequireDefault(require("antd/es/input"));

require("antd/es/select/style/css");

var _select = _interopRequireDefault(require("antd/es/select"));

require("antd/es/message/style/css");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/form/style/css");

var _form = _interopRequireDefault(require("antd/es/form"));

require("antd/es/modal/style/css");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _index = require("../index");

require("../flow-viewer/style");

require("../flow-record/style");

require("../flow-action-buttons/style");

var _api = _interopRequireDefault(require("../api"));

require("./style/index");

var _icons = require("@ant-design/icons");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FlowDetail(props) {
  var onTabChange = props.onTabChange,
      onReqSuccess = props.onReqSuccess,
      renderTabs = props.renderTabs,
      renderApprove = props.renderApprove,
      renderInfo = props.renderInfo,
      renderHeader = props.renderHeader,
      TabsComponent = props.TabsComponent,
      onOkSuccess = props.onOkSuccess,
      onRejectSuccess = props.onRejectSuccess,
      onTransferSuccess = props.onTransferSuccess,
      data = props.data,
      id = props.id,
      request = props.request,
      _props$tabs = props.tabs,
      tabs = _props$tabs === void 0 ? [] : _props$tabs,
      _props$tabProps = props.tabProps,
      tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(props, ["onTabChange", "onReqSuccess", "renderTabs", "renderApprove", "renderInfo", "renderHeader", "TabsComponent", "onOkSuccess", "onRejectSuccess", "onTransferSuccess", "data", "id", "request", "tabs", "tabProps"]);

  var _useState = (0, _react.useState)(false),
      fullScreen = _useState[0],
      setFullScreen = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)({}),
      detailData = _useState3[0],
      setDetailData = _useState3[1];

  var _useState4 = (0, _react.useState)(""),
      remark = _useState4[0],
      setRemark = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      tasks = _useState5[0],
      setTasks = _useState5[1];

  var _useState6 = (0, _react.useState)(false),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var el = (0, _react.useRef)();

  var _Modal$useModal = _modal["default"].useModal(),
      modal = _Modal$useModal[0],
      contextHolder = _Modal$useModal[1];

  (0, _react.useEffect)(function () {
    if (id && !data) {
      _fetchData(id);
    }

    return function () {};
  }, [id]);
  (0, _react.useEffect)(function () {
    if (data) {
      setDetailData(data);
    }

    return function () {};
  }, [data]);

  var _Form$useForm = _form["default"].useForm(),
      form = _Form$useForm[0];

  var _detailApi = (0, _react.useRef)({
    getDetail: function getDetail(procInstId) {
      return {
        url: "/caas/osoBpmProcInst/getFlowDetailByProcInstId/" + procInstId
      };
    },
    postApprove: function postApprove() {
      return {
        url: "/caas/osoBpmTask/approve"
      };
    }
  });

  var _tabs = (0, _react.useRef)([{
    name: "审批信息",
    key: "approve_form",
    render: renderInfo
  }, {
    name: "审批日志",
    key: "approve_records",
    render: function render(tabItem, data) {
      return /*#__PURE__*/_react["default"].createElement(_index.FlowRecord, {
        data: data
      });
    }
  }, {
    name: "流程图",
    key: "task_viewer",
    render: function render(tabItem, data) {
      return /*#__PURE__*/_react["default"].createElement(_index.FlowViewer, {
        data: data
      });
    }
  }].concat(tabs));

  var _fetchData = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
      var _res$data, _d$runTimeTasks, _detailApi$current$ge, url, res, d, _task;

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
              _detailApi$current$ge = _detailApi.current.getDetail(id), url = _detailApi$current$ge.url;
              _context.next = 6;
              return request({
                method: "GET",
                url: url
              });

            case 6:
              res = _context.sent;
              d = res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data;
              setDetailData(d);
              onReqSuccess && onReqSuccess(d); // console.log(d?.runTimeTasks?.filter((item) => item.approveFlag))

              _task = (d === null || d === void 0 ? void 0 : (_d$runTimeTasks = d.runTimeTasks) === null || _d$runTimeTasks === void 0 ? void 0 : _d$runTimeTasks.filter(function (item) {
                return item.approveFlag;
              })) || [];

              if (_task.length === 1) {
                form.setFieldsValue({
                  taskId: _task[0].taskId
                });
              }

              setTasks(_task);
              _context.next = 18;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

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

    return function _fetchData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var _onTabChange = function _onTabChange(key) {
    onTabChange && onTabChange(key);
  };

  var _onFullScreen = function _onFullScreen() {
    el.current.requestFullscreen();
  };

  var _onExitFullScreen = function _onExitFullScreen() {
    document.exitFullscreen();
  };

  var _onTransfer = function _onTransfer() {
    setVisible(true);
  };

  var _modalConfig = function _modalConfig() {
    return {
      title: "确认!",
      content: "同意该流程?",
      okText: "确定",
      cancelText: "取消"
    };
  };

  var _onOk = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var values;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return form.validateFields();

            case 3:
              values = _context3.sent;
              console.log(values);
              modal.confirm(_objectSpread(_objectSpread({}, _modalConfig()), {}, {
                content: "同意该流程?",
                onOk: function onOk() {
                  return new Promise( /*#__PURE__*/function () {
                    var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(resolve, reject) {
                      return _regenerator["default"].wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.prev = 0;
                              _context2.next = 3;
                              return _postApprove("AGREE", values);

                            case 3:
                              if (typeof onOkSuccess === "function") onOkSuccess();
                              resolve();
                              _context2.next = 10;
                              break;

                            case 7:
                              _context2.prev = 7;
                              _context2.t0 = _context2["catch"](0);
                              reject(_context2.t0);

                            case 10:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2, null, [[0, 7]]);
                    }));

                    return function (_x2, _x3) {
                      return _ref3.apply(this, arguments);
                    };
                  }());
                }
              }));
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    return function _onOk() {
      return _ref2.apply(this, arguments);
    };
  }();

  var _onReject = /*#__PURE__*/function () {
    var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var values;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return form.validateFields();

            case 3:
              values = _context5.sent;
              modal.confirm(_objectSpread(_objectSpread({}, _modalConfig()), {}, {
                content: "驳回该流程?",
                onOk: function onOk() {
                  return new Promise( /*#__PURE__*/function () {
                    var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(resolve, reject) {
                      return _regenerator["default"].wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              _context4.prev = 0;
                              _context4.next = 3;
                              return _postApprove("REJECT", values);

                            case 3:
                              if (typeof onRejectSuccess === "function") onRejectSuccess();
                              resolve();
                              _context4.next = 10;
                              break;

                            case 7:
                              _context4.prev = 7;
                              _context4.t0 = _context4["catch"](0);
                              reject(_context4.t0);

                            case 10:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4, null, [[0, 7]]);
                    }));

                    return function (_x4, _x5) {
                      return _ref5.apply(this, arguments);
                    };
                  }());
                }
              }));
              _context5.next = 10;
              break;

            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 7]]);
    }));

    return function _onReject() {
      return _ref4.apply(this, arguments);
    };
  }();

  var _postApprove = /*#__PURE__*/function () {
    var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(status, values) {
      var _res$data2, _detailApi$current$po, url, res, msg;

      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _detailApi$current$po = _detailApi.current.postApprove(), url = _detailApi$current$po.url;
              _context6.next = 4;
              return request({
                method: "POST",
                url: url,
                data: _objectSpread({
                  status: status
                }, values)
              });

            case 4:
              res = _context6.sent;
              msg = res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.data;
              "";

              _message2["default"].success(msg);

              form.resetFields();
              setRemark("");

              _fetchData(id);

              return _context6.abrupt("return", Promise.resolve());

            case 14:
              _context6.prev = 14;
              _context6.t0 = _context6["catch"](0);
              return _context6.abrupt("return", Promise.reject(_context6.t0));

            case 17:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 14]]);
    }));

    return function _postApprove(_x6, _x7) {
      return _ref6.apply(this, arguments);
    };
  }();

  var _onTransferOk = function _onTransferOk() {
    _fetchData(id);

    setVisible(false);
    form.setFieldsValue({
      approveRemark: ""
    });
    if (typeof onTransferSuccess === "function") onTransferSuccess();
  };

  var _onTransferCancel = function _onTransferCancel() {
    setVisible(false);
  };

  var _onRemarkChange = function _onRemarkChange(changedValues, allValues) {
    setRemark(changedValues.approveRemark);
  };

  var _onModelFormChange = function _onModelFormChange(changedValues) {
    form.setFieldsValue({
      approveRemark: changedValues.reason
    });
  };

  var _renderApprove = function _renderApprove() {
    if (typeof renderApprove === "function") return renderApprove();
    var hideNodeSelect = tasks.length <= 1;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-approve-detault"
    }, /*#__PURE__*/_react["default"].createElement(_form["default"], (0, _extends2["default"])({
      labelCol: {
        span: 2
      },
      wrapperCol: {
        span: 22
      }
    }, {
      form: form,
      style: {
        width: "100%"
      },
      name: "flow-detail-default",
      onValuesChange: _onRemarkChange
    }), /*#__PURE__*/_react["default"].createElement(_form["default"].Item, {
      style: {
        display: hideNodeSelect ? 'none' : ''
      },
      label: "\u6D41\u7A0B\u8282\u70B9",
      name: "taskId",
      rules: [{
        required: !hideNodeSelect,
        message: "请选择流程节点"
      }]
    }, /*#__PURE__*/_react["default"].createElement(_select["default"], {
      // mode="multiple"
      disabled: hideNodeSelect,
      placeholder: "\u9009\u62E9\u6D41\u7A0B\u8282\u70B9" // onChange={onChange}

    }, tasks === null || tasks === void 0 ? void 0 : tasks.map(function (d, i) {
      return /*#__PURE__*/_react["default"].createElement(_select["default"].Option, {
        key: i,
        value: d.taskId
      }, d.nodeName + " - " + d.userNames);
    }))), /*#__PURE__*/_react["default"].createElement(_form["default"].Item, {
      label: "\u5907\u6CE8\u8BF4\u660E\uFF1A",
      name: "approveRemark",
      rules: [{
        required: true,
        message: "请输入备注说明!"
      }]
    }, /*#__PURE__*/_react["default"].createElement(_input["default"].TextArea, {
      placeholder: "\u8BF7\u8F93\u5165\u5907\u6CE8\u8BF4\u660E"
    }))));
  };

  var _renderHeader = function _renderHeader() {
    if (typeof renderHeader === "function") return renderHeader(props);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-detail-header"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-detail-top"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-detail-title"
    }, detailData && detailData.title), /*#__PURE__*/_react["default"].createElement(_index.FlowFullScreen, {
      el: el
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-approve"
    }, _renderApprove()), /*#__PURE__*/_react["default"].createElement(_index.FlowActionButtons, (0, _extends2["default"])({
      data: detailData,
      onTransfer: _onTransfer,
      onAgree: _onOk,
      onReject: _onReject,
      canApprove: tasks.length
    }, rest)));
  };

  var _renderTabs = function _renderTabs() {
    var _tabs$current$, _tabs$current, _tabs$current$filter;

    if (typeof renderTabs === "function") return renderTabs(props);
    var Tabs = TabsComponent || _index.FlowTabs;
    return /*#__PURE__*/_react["default"].createElement(Tabs, (0, _extends2["default"])({
      defaultActiveKey: _tabs === null || _tabs === void 0 ? void 0 : (_tabs$current$ = _tabs.current[0]) === null || _tabs$current$ === void 0 ? void 0 : _tabs$current$.key,
      onChange: _onTabChange
    }, tabProps), (_tabs$current = _tabs.current) === null || _tabs$current === void 0 ? void 0 : (_tabs$current$filter = _tabs$current.filter(function (d) {
      return d.render;
    })) === null || _tabs$current$filter === void 0 ? void 0 : _tabs$current$filter.map(function (d) {
      return /*#__PURE__*/_react["default"].createElement(_index.TabPane, {
        tab: d.name,
        key: d.key
      }, d.render && d.render(d, detailData));
    }));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flow-detail",
    ref: el
  }, /*#__PURE__*/_react["default"].createElement(_spin["default"], {
    spinning: loading
  }, detailData.approveFlag === false ? null : _renderHeader(), _renderTabs(), /*#__PURE__*/_react["default"].createElement(_index.FlowTransferModal, {
    visible: visible,
    remark: remark,
    setRemark: setRemark,
    runTimeTasks: (detailData === null || detailData === void 0 ? void 0 : detailData.runTimeTasks) || [],
    onOk: _onTransferOk,
    request: request,
    onCancel: _onTransferCancel,
    onModelFormChange: _onModelFormChange
  }), contextHolder));
}
//# sourceMappingURL=index.js.map