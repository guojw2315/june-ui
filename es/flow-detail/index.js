import "antd/es/spin/style/css";
import _Spin from "antd/es/spin";
import _extends from "@babel/runtime/helpers/esm/extends";
import "antd/es/input/style/css";
import _Input from "antd/es/input";
import "antd/es/select/style/css";
import _Select from "antd/es/select";
import "antd/es/message/style/css";
import _message from "antd/es/message";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import "antd/es/form/style/css";
import _Form from "antd/es/form";
import "antd/es/modal/style/css";
import _Modal from "antd/es/modal";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useEffect, useState, useRef, useCallback } from "react";
import { FlowViewer, FlowRecord, FlowTabs, TabPane, FlowActionButtons, FlowTransferModal, FlowFullScreen } from "../index";
import "../flow-viewer/style";
import "../flow-record/style";
import "../flow-action-buttons/style";
import api from "../api";
import "./style/index";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
export default function FlowDetail(props) {
  var onTabChange = props.onTabChange,
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
      rest = _objectWithoutPropertiesLoose(props, ["onTabChange", "renderTabs", "renderApprove", "renderInfo", "renderHeader", "TabsComponent", "onOkSuccess", "onRejectSuccess", "onTransferSuccess", "data", "id", "request", "tabs", "tabProps"]);

  var _useState = useState(false),
      fullScreen = _useState[0],
      setFullScreen = _useState[1];

  var _useState2 = useState(false),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = useState({}),
      detailData = _useState3[0],
      setDetailData = _useState3[1];

  var _useState4 = useState(""),
      remark = _useState4[0],
      setRemark = _useState4[1];

  var _useState5 = useState([]),
      tasks = _useState5[0],
      setTasks = _useState5[1];

  var _useState6 = useState(false),
      loading = _useState6[0],
      setLoading = _useState6[1];

  var el = useRef();

  var _Modal$useModal = _Modal.useModal(),
      modal = _Modal$useModal[0],
      contextHolder = _Modal$useModal[1];

  useEffect(function () {
    if (id && !data) {
      _fetchData(id);
    }

    return function () {};
  }, [id]);
  useEffect(function () {
    if (data) {
      setDetailData(data);
    }

    return function () {};
  }, [data]);

  var _Form$useForm = _Form.useForm(),
      form = _Form$useForm[0];

  var _detailApi = useRef({
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

  var _tabs = useRef([{
    name: "审批信息",
    key: "approve_form",
    render: renderInfo
  }, {
    name: "审批日志",
    key: "approve_records",
    render: function render(tabItem, data) {
      return /*#__PURE__*/React.createElement(FlowRecord, {
        data: data
      });
    }
  }, {
    name: "流程图",
    key: "task_viewer",
    render: function render(tabItem, data) {
      return /*#__PURE__*/React.createElement(FlowViewer, {
        data: data
      });
    }
  }].concat(tabs));

  var _fetchData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(id) {
      var _res$data, _d$runTimeTasks, _detailApi$current$ge, url, res, d;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!request) {
                _context.next = 18;
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
              setTasks((d === null || d === void 0 ? void 0 : (_d$runTimeTasks = d.runTimeTasks) === null || _d$runTimeTasks === void 0 ? void 0 : _d$runTimeTasks.filter(function (item) {
                return item.approveFlag;
              })) || []);
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 15:
              _context.prev = 15;
              setLoading(false);
              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 12, 15, 18]]);
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
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
      var values;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return form.validateFields();

            case 3:
              values = _context3.sent;
              modal.confirm(_objectSpread(_objectSpread({}, _modalConfig()), {}, {
                content: "同意该流程?",
                onOk: function onOk() {
                  return new Promise( /*#__PURE__*/function () {
                    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(resolve, reject) {
                      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
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
              _context3.next = 10;
              break;

            case 7:
              _context3.prev = 7;
              _context3.t0 = _context3["catch"](0);
              console.log(_context3.t0);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 7]]);
    }));

    return function _onOk() {
      return _ref2.apply(this, arguments);
    };
  }();

  var _onReject = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
      var values;
      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
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
                    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(resolve, reject) {
                      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
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
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(status, values) {
      var _res$data2, _detailApi$current$po, url, res, msg;

      return _regeneratorRuntime.wrap(function _callee6$(_context6) {
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

              _message.success(msg);

              form.resetFields();
              setRemark("");

              _fetchData(id);

              return _context6.abrupt("return", Promise.resolve());

            case 13:
              _context6.prev = 13;
              _context6.t0 = _context6["catch"](0);
              return _context6.abrupt("return", Promise.reject(_context6.t0));

            case 16:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, null, [[0, 13]]);
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
    return /*#__PURE__*/React.createElement("div", {
      className: "flow-approve-detault"
    }, /*#__PURE__*/React.createElement(_Form, _extends({
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
    }), /*#__PURE__*/React.createElement(_Form.Item, {
      label: "\u6D41\u7A0B\u8282\u70B9",
      name: "taskId",
      rules: [{
        required: true,
        message: "请选择流程节点"
      }]
    }, /*#__PURE__*/React.createElement(_Select, {
      // mode="multiple"
      placeholder: "\u9009\u62E9\u6D41\u7A0B\u8282\u70B9" // onChange={onChange}

    }, tasks === null || tasks === void 0 ? void 0 : tasks.map(function (d, i) {
      return /*#__PURE__*/React.createElement(_Select.Option, {
        key: i,
        value: d.taskId
      }, d.nodeName + " - " + d.userNames);
    }))), /*#__PURE__*/React.createElement(_Form.Item, {
      label: "\u5907\u6CE8\u8BF4\u660E\uFF1A",
      name: "approveRemark",
      rules: [{
        required: true,
        message: "请输入备注说明!"
      }]
    }, /*#__PURE__*/React.createElement(_Input.TextArea, {
      placeholder: "\u8BF7\u8F93\u5165\u5907\u6CE8\u8BF4\u660E"
    }))));
  };

  var _renderHeader = function _renderHeader() {
    if (typeof renderHeader === "function") return renderHeader(props);
    return /*#__PURE__*/React.createElement("div", {
      className: "flow-detail-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flow-detail-top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flow-detail-title"
    }, detailData && detailData.title), /*#__PURE__*/React.createElement(FlowFullScreen, {
      el: el
    })), /*#__PURE__*/React.createElement("div", {
      className: "flow-approve"
    }, _renderApprove()), /*#__PURE__*/React.createElement(FlowActionButtons, _extends({
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
    var Tabs = TabsComponent || FlowTabs;
    return /*#__PURE__*/React.createElement(Tabs, _extends({
      defaultActiveKey: _tabs === null || _tabs === void 0 ? void 0 : (_tabs$current$ = _tabs.current[0]) === null || _tabs$current$ === void 0 ? void 0 : _tabs$current$.key,
      onChange: _onTabChange
    }, tabProps), (_tabs$current = _tabs.current) === null || _tabs$current === void 0 ? void 0 : (_tabs$current$filter = _tabs$current.filter(function (d) {
      return d.render;
    })) === null || _tabs$current$filter === void 0 ? void 0 : _tabs$current$filter.map(function (d) {
      return /*#__PURE__*/React.createElement(TabPane, {
        tab: d.name,
        key: d.key
      }, d.render && d.render(d, detailData));
    }));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "flow-detail",
    ref: el
  }, /*#__PURE__*/React.createElement(_Spin, {
    spinning: loading
  }, _renderHeader(), _renderTabs(), /*#__PURE__*/React.createElement(FlowTransferModal, {
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