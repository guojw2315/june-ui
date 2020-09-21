import React, { useEffect, useState, useRef, useCallback } from "react";

import { FlowViewer, FlowRecord, FlowTabs, TabPane } from "../components";
import "../components/flow-viewer/style";
import "../components/flow-record/style";

// import xmlDemo from "../mock/bpmn_demo";
import { res1, res2 } from "../mock/bpmn_res";

export default function Detail(props) {
  const {
    onTabChange,
    renderTabs,
    renderForm,
    TabsComponent,
    tabs = [],
    tabProps = {},
  } = props;
  const [data, setData] = useState({});

  useEffect(() => {
    console.log("detail mounted");

    setTimeout(() => {
      setData({ ...res2.data });
    }, 800);
  }, []);

  const _onTabChange = (key) => {
    // console.log(key)
    onTabChange && onTabChange(key);
  };

  const _renderRecords = (tabItem, data) => {
    return <div className="flow-records">records</div>;
  };

  const _tabs = useRef([
    {
      name: "审批信息",
      key: "approve_form",
      render: (tabItem, data) => renderForm && renderForm(),
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

  const _renderTabs = () => {
    if (typeof renderTabs === "function") return renderTabs(props);
    const Tabs = TabsComponent || FlowTabs;
    return (
      <Tabs
        defaultActiveKey={_tabs?.current[2]?.key}
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

  return <div className="detail">{_renderTabs()}</div>;
}
