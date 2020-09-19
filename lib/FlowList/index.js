"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = FlowList;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _FlowTabs = _interopRequireWildcard(require("../FlowTabs"));

require("../FlowTabs/style");

var _rcTable = _interopRequireDefault(require("rc-table"));

require("rc-table/assets/index.css");

function FlowList(props) {
  var _tabs$current$,
      _this = this;

  var onTabChange = props.onTabChange,
      renderTabs = props.renderTabs,
      renderContent = props.renderContent,
      Table = props.Table,
      Tabs = props.Tabs,
      _props$tabProps = props.tabProps,
      tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(props, ["onTabChange", "renderTabs", "renderContent", "Table", "Tabs", "tabProps"]);

  var _onTabChange = function _onTabChange(key) {
    console.log(key);
    onTabChange && onTabChange(key);
  };

  var tabs = (0, _react.useRef)([{
    name: "全部（1/10）",
    key: "flow_all"
  }, {
    name: "待审批（1/10）",
    key: "flow_wait"
  }, {
    name: "已审批（1/10）",
    key: "flow_accept"
  }, {
    name: "已审批（1/10）",
    key: "flow_done"
  }]);

  var _useState = (0, _react.useState)(tabs === null || tabs === void 0 ? void 0 : (_tabs$current$ = tabs.current[0]) === null || _tabs$current$ === void 0 ? void 0 : _tabs$current$.key),
      active = _useState[0],
      setAcitve = _useState[1];

  var _renderTabs = function _renderTabs() {
    var _tabs$current;

    if (typeof props.renderTabs === "function") return props.renderTabs(props);
    var TabsComponent = props.Tabs || _FlowTabs["default"];
    return /*#__PURE__*/_react["default"].createElement(TabsComponent, (0, _extends2["default"])({
      defaultActiveKey: active,
      onChange: _onTabChange
    }, tabProps), (_tabs$current = tabs.current) === null || _tabs$current === void 0 ? void 0 : _tabs$current.map(function (d) {
      return /*#__PURE__*/_react["default"].createElement(_FlowTabs.TabPane, {
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
      key: "createdBy"
    }, {
      title: "审批节点",
      dataIndex: "currentNodeNames",
      key: "currentNodeNames"
    }, {
      title: "审批人",
      dataIndex: "auditorNames",
      key: "auditorNames"
    }, {
      title: "流程发起时间",
      dataIndex: "procCreateTime",
      key: "procCreateTime"
    }, {
      title: "任务创建时间",
      dataIndex: "currentFirstTaskCreatedTime",
      key: "currentFirstTaskCreatedTime"
    }, {
      title: "结束日期",
      dataIndex: "procEndTime",
      key: "procEndTime"
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
    var TableComponent = Table || _rcTable["default"];
    console.log(rest);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-list-main"
    }, /*#__PURE__*/_react["default"].createElement(TableComponent, (0, _extends2["default"])({
      columns: columns,
      data: data
    }, rest)));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flow-list"
  }, _renderTabs(), _renderContent());
}
//# sourceMappingURL=index.js.map