import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  FlowViewer,
  FlowRecord,
  FlowTabs,
  TabPane,
  FlowActionButtons,
  FlowTransferModal,
  FlowFullScreen,
} from "../index";
import "../flow-viewer/style";
import "../flow-record/style";
import "../flow-action-buttons/style";
import { Button, Row, Col, Input, Modal, Select, Form } from "antd";

import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";

export default function FlowDetail(props) {
  const {
    onTabChange,
    renderTabs,
    renderApprove,
    renderInfo,
    renderHeader,
    TabsComponent,
    onOkSuccess,
    onRejectSuccess,
    onTransferSuccess,
    data,
    tabs = [],
    tabProps = {},
    ...rest
  } = props;

  const [fullScreen, setFullScreen] = useState(false);
  const [visible, setVisible] = useState(false);
  const el = useRef();

  useEffect(() => {
    document.onfullscreenchange = () => {
      setFullScreen(document.fullscreenElement !== null);
    };
    return () => {};
  }, []);

  const _tabs = useRef([
    {
      name: "审批信息",
      key: "approve_form",
      render: renderInfo,
    },
    {
      name: "审批日志",
      key: "approve_records",
      render: (tabItem, data) => <FlowRecord data={data} />,
    },
    {
      name: "流程图",
      key: "task_viewer",
      render: (tabItem, data) => <FlowViewer data={data} />,
    },
    ...tabs,
  ]);

  const _onTabChange = (key) => {
    onTabChange && onTabChange(key);
  };

  const _onFullScreen = () => {
    el.current.requestFullscreen();
  };

  const _onExitFullScreen = () => {
    document.exitFullscreen();
  };

  const _onTransfer = () => {
    setVisible(true);
  };

  const _onOk = () => {
    if (typeof onOkSuccess === "function") onOkSuccess();
  };

  const _onReject = () => {
    if (typeof onRejectSuccess === "function") onRejectSuccess();
  };

  const _onTransferOk = () => {
    if (typeof onTransferSuccess === "function") onTransferSuccess();
  };

  const _onTransferCancel = () => {
    setVisible(false);
  };

  const _renderApprove = () => {
    if (typeof renderApprove === "function") return renderApprove();
    return (
      <div className="flow-approve-detault">
        <div className="flow-remark-label">备注说明：</div>
        <div className="flow-remark-field">
          <Input.TextArea placeholder="请输入" />
        </div>
      </div>
    );
  };

  const _renderHeader = () => {
    if (typeof renderHeader === "function") return renderHeader(props);
    return (
      <div className="flow-detail-header">
        <div className="flow-detail-top">
          <div className="flow-detail-title">{data.title}</div>
          <FlowFullScreen el={el}/>
        </div>
        <div className="flow-approve">{_renderApprove()}</div>

        <FlowActionButtons
          data={data}
          onTransfer={_onTransfer}
          onOk={_onOk}
          onReject={_onReject}
          {...rest}
        />
      </div>
    );
  };

  const _renderTabs = () => {
    if (typeof renderTabs === "function") return renderTabs(props);
    const Tabs = TabsComponent || FlowTabs;
    return (
      <Tabs
        defaultActiveKey={_tabs?.current[0]?.key}
        onChange={_onTabChange}
        {...tabProps}
      >
        {_tabs.current?.filter(d => d.render)?.map((d) => (
          <TabPane tab={d.name} key={d.key}>
            {d.render && d.render(d, data)}
          </TabPane>
        ))}
      </Tabs>
    );
  };

  return (
    <div className="flow-detail" ref={el}>
      {_renderHeader()}
      {_renderTabs()}
      <FlowTransferModal
        visible={visible}
        onOk={_onTransferOk}
        onCancel={_onTransferCancel}
      />
    </div>
  );
}
