import "antd/es/button/style/css";
import _Button from "antd/es/button";
import "antd/es/input/style/css";
import _Input from "antd/es/input";
import "antd/es/select/style/css";
import _Select from "antd/es/select";
import "antd/es/table/style/css";
import _Table2 from "antd/es/table";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import "antd/es/form/style/css";
import _Form from "antd/es/form";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useEffect, useState, useRef } from "react";
import FlowTabs, { TabPane } from "../flow-tabs";
import { FlowFullScreen } from "../index";
import "./style/index";
import { SearchOutlined } from "@ant-design/icons";
import api from "../api";
export default function FlowList(props) {
  var _tabs$current$,
      _this = this;

  var onTabChange = props.onTabChange,
      renderTabs = props.renderTabs,
      renderContent = props.renderContent,
      TableComponent = props.TableComponent,
      TabsComponent = props.TabsComponent,
      request = props.request,
      listApi = props.listApi,
      _props$tabProps = props.tabProps,
      tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
      rest = _objectWithoutPropertiesLoose(props, ["onTabChange", "renderTabs", "renderContent", "TableComponent", "TabsComponent", "request", "listApi", "tabProps"]);

  var _listApi = useRef({
    all: function all(currentPage, pageSize) {
      return {
        url: "/caas/osoBpmProcInst/completedProcPersonPage/" + currentPage + "/" + pageSize
      };
    },
    wait: function wait(currentPage, pageSize) {
      return {
        url: "/caas/osoBpmTask/waitTaskPage/" + currentPage + "/" + pageSize
      };
    },
    accept: function accept(currentPage, pageSize) {
      return {
        url: "/caas/osoBpmTask/completedTaskPage/" + currentPage + "/" + pageSize
      };
    },
    done: function done(currentPage, pageSize) {
      return {
        url: "/caas/osoBpmProcInst/completedProcPersonPage/" + currentPage + "/" + pageSize,
        finishFlag: true
      };
    } // finishFlag: true

  });

  var tabs = useRef([{
    name: "全部",
    key: "all",
    total: 0,
    value: 0
  }, {
    name: "待审批",
    key: "wait",
    total: 0
  }, {
    name: "已审批",
    key: "accept",
    total: 0
  }, {
    name: "已完结",
    key: "done",
    total: 0
  }]);
  var tabTotal = useRef({});
  var el = useRef();

  var _Form$useForm = _Form.useForm(),
      form = _Form$useForm[0];

  var _useState = useState(tabs === null || tabs === void 0 ? void 0 : (_tabs$current$ = tabs.current[0]) === null || _tabs$current$ === void 0 ? void 0 : _tabs$current$.key),
      active = _useState[0],
      setAcitve = _useState[1];

  var _useState2 = useState(1),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = useState(10),
      pageSize = _useState3[0],
      setPageSize = _useState3[1];

  var _useState4 = useState(0),
      total = _useState4[0],
      setTotal = _useState4[1];

  var _useState5 = useState([]),
      dataSource = _useState5[0],
      setDataSource = _useState5[1];

  var _useState6 = useState([]),
      options = _useState6[0],
      setOptions = _useState6[1]; // 流程分类选项


  var _useState7 = useState({}),
      searchParams = _useState7[0],
      setSearchParams = _useState7[1];

  var _useState8 = useState(false),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var _useState9 = useState(''),
      setUpdate = _useState9[1];

  useEffect(function () {
    _fetchOptions();

    return function () {};
  }, []);
  useEffect(function () {
    _fetchData(active, searchParams, currentPage, pageSize);
  }, [active, searchParams, pageSize, currentPage]);

  var _onTabChange = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(key) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // console.log(key)
              setCurrentPage(1);
              setAcitve(key);
              if (typeof onTabChange === "function") onTabChange(key);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _onTabChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var _fetchOptions = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
      var res;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!request) {
                _context2.next = 6;
                break;
              }

              _context2.next = 3;
              return request.get(api.dictProcessList());

            case 3:
              res = _context2.sent;
              // console.log(res)
              setOptions(res.data.data || []);

              try {} catch (e) {
                console.log(e);
              }

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function _fetchOptions() {
      return _ref2.apply(this, arguments);
    };
  }();

  var _fetchData = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(key, params, page, size) {
      var _listApi$current$key, url, other, res, _res$data$data, _res$data$data$record, records, _res$data$data$total, _total, tab;

      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (params === void 0) {
                params = searchParams;
              }

              if (page === void 0) {
                page = currentPage;
              }

              if (size === void 0) {
                size = pageSize;
              }

              if (!request) {
                _context3.next = 23;
                break;
              }

              _context3.prev = 4;
              setLoading(true);
              _listApi$current$key = _listApi.current[key](page, size), url = _listApi$current$key.url, other = _objectWithoutPropertiesLoose(_listApi$current$key, ["url"]); // console.log(other)

              _context3.next = 9;
              return request.post(url, {
                data: _objectSpread(_objectSpread({}, params), other)
              });

            case 9:
              res = _context3.sent;
              _res$data$data = res.data.data, _res$data$data$record = _res$data$data.records, records = _res$data$data$record === void 0 ? [] : _res$data$data$record, _res$data$data$total = _res$data$data.total, _total = _res$data$data$total === void 0 ? 0 : _res$data$data$total;
              tab = tabs.current.find(function (d) {
                return d.key === key;
              });

              if (tab) {
                tab.total = _total;
              } // 设置全部 未审批数量


              if (key === 'wait') {
                tabs.current[0].value = _total;
              }

              setDataSource(records);
              setTotal(_total);
              setLoading(false); // console.log("flow-list: ", res);

              _context3.next = 23;
              break;

            case 19:
              _context3.prev = 19;
              _context3.t0 = _context3["catch"](4);
              setLoading(false);
              console.log("flow-list fetch failed;", _context3.t0);

            case 23:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[4, 19]]);
    }));

    return function _fetchData(_x2, _x3, _x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  var _onPageChange = function _onPageChange(page, pageSize) {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  var _onSearch = function _onSearch(values) {
    setSearchParams(values);
    setCurrentPage(1);
  };

  var _renderTabs = function _renderTabs() {
    var _tabs$current;

    if (typeof props.renderTabs === "function") return props.renderTabs(props);
    var Tabs = TabsComponent || FlowTabs;
    return /*#__PURE__*/React.createElement(Tabs, _extends({
      defaultActiveKey: active,
      onChange: _onTabChange,
      tabBarExtraContent: /*#__PURE__*/React.createElement(FlowFullScreen, {
        el: el
      })
    }, tabProps), (_tabs$current = tabs.current) === null || _tabs$current === void 0 ? void 0 : _tabs$current.map(function (d) {
      return /*#__PURE__*/React.createElement(TabPane, {
        tab: d.name + "\uFF08" + (d.value ? d.value + '/' : '') + d.total + "\uFF09",
        key: d.key
      });
    }));
  };

  var _renderContent = function _renderContent() {
    if (typeof props.renderContent === "function") return props.renderContent(props);
    var columns = [{
      title: "流程标题",
      dataIndex: "title",
      key: "title",
      width: 200
    }, {
      title: "状态",
      dataIndex: "stateDesc",
      key: "stateDesc",
      width: 100
    }, {
      title: "发起人",
      dataIndex: "createdBy",
      key: "createdBy",
      width: 100
    }, {
      title: "审批节点",
      dataIndex: "currentNodeNames",
      key: "currentNodeNames",
      width: 200
    }, {
      title: "审批人",
      dataIndex: "auditorNames",
      key: "auditorNames",
      width: 200
    }, {
      title: "流程发起时间",
      dataIndex: "procCreateTime",
      key: "procCreateTime",
      width: 200
    }, {
      title: "任务创建时间",
      dataIndex: "currentFirstTaskCreatedTime",
      key: "currentFirstTaskCreatedTime",
      width: 200
    }, {
      title: "结束日期",
      dataIndex: "procEndTime",
      key: "procEndTime",
      width: 200
    }, {
      title: "操作",
      dataIndex: "",
      key: "operations",
      fixed: "right",
      align: "center",
      width: 80,
      // align: 'right',
      render: function render() {
        var _props$onClick;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return /*#__PURE__*/React.createElement("a", {
          onClick: props === null || props === void 0 ? void 0 : (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.bind.apply(_props$onClick, [_this].concat(args))
        }, "\u67E5\u770B");
      }
    }];

    var _Table = TableComponent || _Table2;

    return /*#__PURE__*/React.createElement("div", {
      className: "flow-list-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flow-search-bar"
    }, /*#__PURE__*/React.createElement(_Form, {
      form: form,
      name: "horizontal_login",
      layout: "inline",
      onFinish: _onSearch
    }, /*#__PURE__*/React.createElement(_Form.Item, {
      label: "\u6D41\u7A0B\u5206\u7C7B",
      name: "processDefKey" // rules={[{ required: true, message: "Please input your username!" }]}

    }, /*#__PURE__*/React.createElement(_Select, {
      placeholder: "\u8BF7\u9009\u62E9\u5206\u7C7B",
      style: {
        minWidth: 192
      }
    }, options.map(function (d, i) {
      return /*#__PURE__*/React.createElement(_Select.Option, {
        key: i,
        value: d.dataValue
      }, d.name);
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
    }))), /*#__PURE__*/React.createElement(_Table, _extends({
      loading: loading,
      columns: columns,
      dataSource: dataSource,
      pagination: {
        current: currentPage,
        total: total,
        pageSize: pageSize,
        onChange: _onPageChange
      }
    }, rest)));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "flow-list",
    ref: el
  }, _renderTabs(), _renderContent());
}
//# sourceMappingURL=index.js.map