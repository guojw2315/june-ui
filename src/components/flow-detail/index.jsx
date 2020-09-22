import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  FlowViewer,
  FlowRecord,
  FlowTabs,
  TabPane,
  FlowActionButtons,
} from "../index";
import "../flow-viewer/style";
import "../flow-record/style";
import "../flow-action-buttons/style";
import { Button, Row, Col, Input } from "antd";

import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";

export default function FlowDetail(props) {
  const {
    onTabChange,
    renderTabs,
    renderApprove,
    renderInfo,
    renderHeader,
    TabsComponent,
    data,
    tabs = [],
    tabProps = {},
    ...rest
  } = props;

  const [fullScreen, setFullScreen] = useState(false);
  const el = useRef()

  useEffect(() => {
    document.onfullscreenchange = () => {
      console.log(document.fullscreenElement === null)
      setFullScreen(document.fullscreenElement !== null);
    };
    return () => {};
  }, []);

  const _onTabChange = (key) => {
    onTabChange && onTabChange(key);
  };

  const _onFullScreen = () => {
    el.current.requestFullscreen();
  };

  const _onExitFullScreen = () => {
    document.exitFullscreen();
  };

  const _tabs = useRef([
    {
      name: "审批信息",
      key: "approve_form",
      render: (tabItem, data) => renderInfo && renderInfo(),
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
          {fullScreen ? (
            <Button icon={<FullscreenOutlined />} onClick={_onExitFullScreen}>
              退出
            </Button>
          ) : (
            <Button icon={<FullscreenExitOutlined />} onClick={_onFullScreen}>
              全屏
            </Button>
          )}
        </div>
        <div className="flow-approve">{_renderApprove()}</div>

        <FlowActionButtons data={data} {...rest} />
      </div>
    );
  };

  const _renderTabs = () => {
    if (typeof renderTabs === "function") return renderTabs(props);
    const Tabs = TabsComponent || FlowTabs;
    return (
      <Tabs
        defaultActiveKey={_tabs?.current[1]?.key}
        onChange={_onTabChange}
        {...tabProps}
      >
        {_tabs.current?.map((d) => (
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
    </div>
  );
}
