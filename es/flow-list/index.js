import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useEffect, useState, useRef } from "react";
import FlowTabs, { TabPane } from "../flow-tabs";
import "../flow-tabs/style";
import RcTable from "rc-table";
import "rc-table/assets/index.css";
export default function FlowList(props) {
  var _tabs$current$,
      _this = this;

  var onTabChange = props.onTabChange,
      renderTabs = props.renderTabs,
      renderContent = props.renderContent,
      TableComponent = props.TableComponent,
      TabsComponent = props.TabsComponent,
      _props$tabProps = props.tabProps,
      tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
      rest = _objectWithoutPropertiesLoose(props, ["onTabChange", "renderTabs", "renderContent", "TableComponent", "TabsComponent", "tabProps"]);

  var _onTabChange = function _onTabChange(key) {
    // console.log(key)
    onTabChange && onTabChange(key);
  };

  var tabs = useRef([{
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

  var _useState = useState(tabs === null || tabs === void 0 ? void 0 : (_tabs$current$ = tabs.current[0]) === null || _tabs$current$ === void 0 ? void 0 : _tabs$current$.key),
      active = _useState[0],
      setAcitve = _useState[1];

  var _renderTabs = function _renderTabs() {
    var _tabs$current;

    if (typeof props.renderTabs === "function") return props.renderTabs(props);
    var Tabs = TabsComponent || FlowTabs;
    return /*#__PURE__*/React.createElement(Tabs, _extends({
      defaultActiveKey: active,
      onChange: _onTabChange
    }, tabProps), (_tabs$current = tabs.current) === null || _tabs$current === void 0 ? void 0 : _tabs$current.map(function (d) {
      return /*#__PURE__*/React.createElement(TabPane, {
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

        return /*#__PURE__*/React.createElement("a", {
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
    var Table = TableComponent || RcTable;
    return /*#__PURE__*/React.createElement("div", {
      className: "flow-list-main"
    }, /*#__PURE__*/React.createElement(Table, _extends({
      columns: columns,
      data: data
    }, rest)));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "flow-list"
  }, _renderTabs(), _renderContent());
}
//# sourceMappingURL=index.js.map