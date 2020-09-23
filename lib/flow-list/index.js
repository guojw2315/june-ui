"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = FlowList;

require("antd/es/table/style/css");

var _table = _interopRequireDefault(require("antd/es/table"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _flowTabs = _interopRequireWildcard(require("../flow-tabs"));

require("../flow-tabs/style");

var _api = _interopRequireDefault(require("../api"));

function FlowList(props) {
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
      rest = (0, _objectWithoutPropertiesLoose2["default"])(props, ["onTabChange", "renderTabs", "renderContent", "TableComponent", "TabsComponent", "request", "listApi", "tabProps"]);

  var _listApi = listApi || {
    all: function all(currentPage, pageSize) {
      return "/caas/osoBpmProcInst/completedProcPersonPage/" + currentPage + "/" + pageSize;
    },
    wait: function wait(currentPage, pageSize) {
      return "/caas/osoBpmTask/waitTaskPage/" + currentPage + "/" + pageSize;
    },
    accept: function accept(currentPage, pageSize) {
      return "/caas/osoBpmTask/completedTaskPage/" + currentPage + "/" + pageSize;
    },
    done: function done(currentPage, pageSize) {
      return "/caas/osoBpmProcInst/completedProcPersonPage/" + currentPage + "/" + pageSize;
    } // finishFlag: true

  };

  var _onTabChange = function _onTabChange(key) {
    // console.log(key)
    if (typeof onTabChange === 'function') onTabChange(key);
  };

  var tabs = (0, _react.useRef)([{
    name: "全部（??/??）",
    key: "all"
  }, {
    name: "待审批（??）",
    key: "wait"
  }, {
    name: "已审批（??）",
    key: "accept"
  }, {
    name: "已完结（??）",
    key: "done"
  }]);

  var _useState = (0, _react.useState)(tabs === null || tabs === void 0 ? void 0 : (_tabs$current$ = tabs.current[0]) === null || _tabs$current$ === void 0 ? void 0 : _tabs$current$.key),
      active = _useState[0],
      setAcitve = _useState[1];

  var _renderTabs = function _renderTabs() {
    var _tabs$current;

    if (typeof props.renderTabs === "function") return props.renderTabs(props);
    var Tabs = TabsComponent || _flowTabs["default"];
    return /*#__PURE__*/_react["default"].createElement(Tabs, (0, _extends2["default"])({
      defaultActiveKey: active,
      onChange: _onTabChange
    }, tabProps), (_tabs$current = tabs.current) === null || _tabs$current === void 0 ? void 0 : _tabs$current.map(function (d) {
      return /*#__PURE__*/_react["default"].createElement(_flowTabs.TabPane, {
        tab: d.name,
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
      align: 'center',
      width: 80,
      // align: 'right',
      render: function render() {
        var _props$onClick;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return /*#__PURE__*/_react["default"].createElement("a", {
          onClick: props === null || props === void 0 ? void 0 : (_props$onClick = props.onClick) === null || _props$onClick === void 0 ? void 0 : _props$onClick.bind.apply(_props$onClick, [_this].concat(args))
        }, "\u67E5\u770B");
      }
    }];
    var data = [{
      name: "Jack",
      age: 28,
      address: "some where",
      key: "1"
    }, {
      name: "Rose",
      age: 36,
      address: "some where",
      key: "2"
    }];

    var _Table = TableComponent || _table["default"];

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-list-main"
    }, /*#__PURE__*/_react["default"].createElement(_Table, (0, _extends2["default"])({
      columns: columns,
      dataSource: data
    }, rest)));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flow-list"
  }, _renderTabs(), _renderContent());
}
//# sourceMappingURL=index.js.map