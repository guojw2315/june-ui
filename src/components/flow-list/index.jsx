import React, { useEffect, useState, useRef } from "react";
import FlowTabs, { TabPane } from "../flow-tabs";
import "../flow-tabs/style";

import { Table, Row, Col, Form, Input, Select } from 'antd';

export default function FlowList(props) {
  const { onTabChange, renderTabs, renderContent, TableComponent, TabsComponent, request, listApi, tabProps = {}, ...rest } = props;

  const _listApi = listApi || {
    all: (currentPage, pageSize) => `/caas/osoBpmProcInst/completedProcPersonPage/${currentPage}/${pageSize}`,
    wait: (currentPage, pageSize) => `/caas/osoBpmTask/waitTaskPage/${currentPage}/${pageSize}`,
    accept: (currentPage, pageSize) => `/caas/osoBpmTask/completedTaskPage/${currentPage}/${pageSize}`,
    done: (currentPage, pageSize) => `/caas/osoBpmProcInst/completedProcPersonPage/${currentPage}/${pageSize}`, // finishFlag: true
  }

  const _onTabChange = (key) => {
    // console.log(key)
    if (typeof onTabChange === 'function') onTabChange(key)
  };

  const tabs = useRef([
    { name: "全部（??/??）", key: "all" },
    { name: "待审批（??）", key: "wait" },
    { name: "已审批（??）", key: "accept" },
    { name: "已完结（??）", key: "done" },
  ]);

  const [active, setAcitve] = useState(tabs?.current[0]?.key);

  const _renderTabs = () => {
    if (typeof props.renderTabs === "function") return props.renderTabs(props);
    const Tabs = TabsComponent || FlowTabs;
    return (
      <Tabs defaultActiveKey={active} onChange={_onTabChange} {...tabProps} >
        {tabs.current?.map((d) => (
          <TabPane tab={d.name} key={d.key}></TabPane>
        ))}
      </Tabs>
    );
  };

  const _renderContent = () => {
    if (typeof props.renderContent === "function")
      return props.renderContent(props);
    const columns = [
      {
        title: "流程标题",
        dataIndex: "title",
        key: "title",
        width: 200,
      },
      {
        title: "状态",
        dataIndex: "stateDesc",
        key: "stateDesc",
        width: 100,
      },
      {
        title: "发起人",
        dataIndex: "createdBy",
        key: "createdBy",
        width: 100,
      },
      {
        title: "审批节点",
        dataIndex: "currentNodeNames",
        key: "currentNodeNames",
        width: 200,
      },
      {
        title: "审批人",
        dataIndex: "auditorNames",
        key: "auditorNames",
        width: 200,
      },
      {
        title: "流程发起时间",
        dataIndex: "procCreateTime",
        key: "procCreateTime",
        width: 200,
      },

      {
        title: "任务创建时间",
        dataIndex: "currentFirstTaskCreatedTime",
        key: "currentFirstTaskCreatedTime",
        width: 200,
      },

      {
        title: "结束日期",
        dataIndex: "procEndTime",
        key: "procEndTime",
        width: 200,
      },

      {
        title: "操作",
        dataIndex: "",
        key: "operations",
        fixed: "right",
        align: 'center',
        width: 80,
        // align: 'right',
        render: (...args) => (
          <a onClick={props?.onClick?.bind(this, ...args)}>查看</a>
        ),
      },
    ];

    const data = [
      { name: "Jack", age: 28, address: "some where", key: "1" },
      { name: "Rose", age: 36, address: "some where", key: "2" },
    ];

    const _Table = TableComponent || Table;
    
    return (
      <div className="flow-list-main">
        <_Table columns={columns} dataSource={data} {...rest} />
      </div>
    );
  };
  return (
    <div className="flow-list">
      {_renderTabs()}
      {_renderContent()}
    </div>
  );
}
