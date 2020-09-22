"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = FlowDetail;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _index = require("../index");

require("../flow-viewer/style");

require("../flow-record/style");

require("../flow-action-buttons/style");

var _antd = require("antd");

var _icons = require("@ant-design/icons");

function FlowDetail(props) {
  var onTabChange = props.onTabChange,
      renderTabs = props.renderTabs,
      renderApprove = props.renderApprove,
      renderInfo = props.renderInfo,
      renderHeader = props.renderHeader,
      TabsComponent = props.TabsComponent,
      data = props.data,
      _props$tabs = props.tabs,
      tabs = _props$tabs === void 0 ? [] : _props$tabs,
      _props$tabProps = props.tabProps,
      tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(props, ["onTabChange", "renderTabs", "renderApprove", "renderInfo", "renderHeader", "TabsComponent", "data", "tabs", "tabProps"]);

  var _onTabChange = function _onTabChange(key) {
    // console.log(key)
    onTabChange && onTabChange(key);
  };

  var _tabs = (0, _react.useRef)([{
    name: "审批信息",
    key: "approve_form",
    render: function render(tabItem, data) {
      return renderInfo && renderInfo();
    }
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

  var _renderApprove = function _renderApprove() {
    if (typeof renderApprove === "function") return renderApprove();
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-approve-detault"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-remark-label"
    }, "\u5907\u6CE8\u8BF4\u660E\uFF1A"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-remark-field"
    }, /*#__PURE__*/_react["default"].createElement(_antd.Input.TextArea, {
      placeholder: "\u8BF7\u8F93\u5165"
    })));
  };

  var _renderHeader = function _renderHeader() {
    if (typeof renderHeader === "function") return renderHeader(props);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-detail-header"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-detail-top"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-detail-title"
    }, data.title), /*#__PURE__*/_react["default"].createElement(_antd.Button, {
      icon: /*#__PURE__*/_react["default"].createElement(_icons.FullscreenOutlined, null)
    }, "\u5168\u5C4F")), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-approve"
    }, _renderApprove()), /*#__PURE__*/_react["default"].createElement(_index.FlowActionButtons, (0, _extends2["default"])({
      data: data
    }, rest)));
  };

  var _renderTabs = function _renderTabs() {
    var _tabs$current$, _tabs$current;

    if (typeof renderTabs === "function") return renderTabs(props);
    var Tabs = TabsComponent || _index.FlowTabs;
    return /*#__PURE__*/_react["default"].createElement(Tabs, (0, _extends2["default"])({
      defaultActiveKey: _tabs === null || _tabs === void 0 ? void 0 : (_tabs$current$ = _tabs.current[1]) === null || _tabs$current$ === void 0 ? void 0 : _tabs$current$.key,
      onChange: _onTabChange
    }, tabProps), (_tabs$current = _tabs.current) === null || _tabs$current === void 0 ? void 0 : _tabs$current.map(function (d) {
      return /*#__PURE__*/_react["default"].createElement(_index.TabPane, {
        tab: d.name,
        key: d.key
      }, d.render && d.render(d, data));
    }));
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flow-detail"
  }, _renderHeader(), _renderTabs());
}
//# sourceMappingURL=index.js.map