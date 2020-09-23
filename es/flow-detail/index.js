import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { FlowViewer, FlowRecord, FlowTabs, TabPane, FlowActionButtons, FlowTransferModal } from "../index";
import "../flow-viewer/style";
import "../flow-record/style";
import "../flow-action-buttons/style";
import { Button, Row, Col, Input, Modal, Select, Form } from "antd";
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
      _props$tabs = props.tabs,
      tabs = _props$tabs === void 0 ? [] : _props$tabs,
      _props$tabProps = props.tabProps,
      tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
      rest = _objectWithoutPropertiesLoose(props, ["onTabChange", "renderTabs", "renderApprove", "renderInfo", "renderHeader", "TabsComponent", "onOkSuccess", "onRejectSuccess", "onTransferSuccess", "data", "tabs", "tabProps"]);

  var _useState = useState(false),
      fullScreen = _useState[0],
      setFullScreen = _useState[1];

  var _useState2 = useState(false),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var el = useRef();
  useEffect(function () {
    document.onfullscreenchange = function () {
      setFullScreen(document.fullscreenElement !== null);
    };

    return function () {};
  }, []);

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

  var _onOk = function _onOk() {
    if (typeof onOkSuccess === "function") onOkSuccess();
  };

  var _onReject = function _onReject() {
    if (typeof onRejectSuccess === "function") onRejectSuccess();
  };

  var _onTransferOk = function _onTransferOk() {
    if (typeof onTransferSuccess === "function") onTransferSuccess();
  };

  var _onTransferCancel = function _onTransferCancel() {
    setVisible(false);
  };

  var _renderApprove = function _renderApprove() {
    if (typeof renderApprove === "function") return renderApprove();
    return /*#__PURE__*/React.createElement("div", {
      className: "flow-approve-detault"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flow-remark-label"
    }, "\u5907\u6CE8\u8BF4\u660E\uFF1A"), /*#__PURE__*/React.createElement("div", {
      className: "flow-remark-field"
    }, /*#__PURE__*/React.createElement(Input.TextArea, {
      placeholder: "\u8BF7\u8F93\u5165"
    })));
  };

  var _renderHeader = function _renderHeader() {
    if (typeof renderHeader === "function") return renderHeader(props);
    return /*#__PURE__*/React.createElement("div", {
      className: "flow-detail-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flow-detail-top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "flow-detail-title"
    }, data.title), fullScreen ? /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(FullscreenOutlined, null),
      onClick: _onExitFullScreen
    }, "\u9000\u51FA") : /*#__PURE__*/React.createElement(Button, {
      icon: /*#__PURE__*/React.createElement(FullscreenExitOutlined, null),
      onClick: _onFullScreen
    }, "\u5168\u5C4F")), /*#__PURE__*/React.createElement("div", {
      className: "flow-approve"
    }, _renderApprove()), /*#__PURE__*/React.createElement(FlowActionButtons, _extends({
      data: data,
      onTransfer: _onTransfer,
      onOk: _onOk,
      onReject: _onReject
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
      }, d.render && d.render(d, data));
    }));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "flow-detail",
    ref: el
  }, _renderHeader(), _renderTabs(), /*#__PURE__*/React.createElement(FlowTransferModal, {
    visible: visible,
    onOk: _onTransferOk,
    onCancel: _onTransferCancel
  }));
}
//# sourceMappingURL=index.js.map