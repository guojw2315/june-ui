import React, { useEffect, useState, useRef } from "react";
import FlowTabs, { TabPane } from "../flow-tabs";
import FlowSearch from "../flow-list-section/flow-search";
import { FlowFullScreen } from "../index";
import { CommonTable } from "../index";

import "./style/index";
import "../flow-list-section/style";

import { Table, Row, Col, Form, Input, Select, Button } from "antd";


import api from "../api";

export default function FlowList(props) {
  const {
    onTabChange,
    renderTabs,
    renderContent,
    TableComponent,
    TabsComponent,
    request,
    listApi,
    onLinkClick,
    data,
    tabProps = {},
    ...rest
  } = props;

  const _listApi = useRef({
    all: (currentPage, pageSize) => ({
      url: `/caas/osoBpmProcInst/completedProcPersonPage/${currentPage}/${pageSize}`,
    }),
    wait: (currentPage, pageSize) => ({
      url: `/caas/osoBpmTask/waitTaskPage/${currentPage}/${pageSize}`,
    }),
    accept: (currentPage, pageSize) => ({
      url: `/caas/osoBpmTask/completedTaskPage/${currentPage}/${pageSize}`,
    }),
    done: (currentPage, pageSize) => ({
      url: `/caas/osoBpmProcInst/completedProcPersonPage/${currentPage}/${pageSize}`,
      finishFlag: true,
    }), // finishFlag: true
  });

  const tabs = useRef([
    // { name: "全部", key: "all", total: 0, value: 0 },
    { name: "待审批", key: "wait", total: 0 },
    { name: "已审批", key: "accept", total: 0 },
    // { name: "已完结", key: "done", total: 0 },
  ]);

  const el = useRef();
  const [form] = Form.useForm();
  const [active, setAcitve] = useState(tabs?.current[0]?.key);
  const [options, setOptions] = useState([]); // 流程分类选项
  const [searchParams, setSearchParams] = useState({});
  const [rowKey, setRowKey] = useState("procInstId");
  const [, setUpdate] = useState("");

  useEffect(() => {
    _fetchOptions();
    return () => {};
  }, []);

  const _onTabChange = async (key) => {
    setAcitve(key);
    setSearchParams({ ...searchParams });
    if (typeof onTabChange === "function") onTabChange(key);
  };

  const _fetchOptions = async () => {
    if (request) {
      try {
        let res = await request({ method: "GET", url: api.dictProcessList() });
        setOptions(res.data.data || []);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const _afterFetchData = ({ total, records } = {}) => {
    let tab = tabs.current.find((d) => d.key === active);

    if (tab) {
      tab.total = total;
    }

    // // 设置全部 未审批数量
    // if (active === "wait") {
    //   tabs.current[0].value = total;
    // }

    setRowKey(/^wait$|^accept$/g.test(active) ? "taskId" : "procInstId");
    setUpdate(new Date().getTime());
  };

  const _onSearch = (values) => {
    setSearchParams(values);
  };

  const _renderTabs = () => {
    if (typeof props.renderTabs === "function") return props.renderTabs(props);
    const Tabs = TabsComponent || FlowTabs;
    return (
      <Tabs
        defaultActiveKey={active}
        onChange={_onTabChange}
        tabBarExtraContent={<FlowFullScreen el={el} />}
        {...tabProps}
      >
        {tabs.current?.map((d) => (
          <TabPane
            tab={`${d.name}（${d.value ? d.value + "/" : ""}${d.total}）`}
            key={d.key}
          ></TabPane>
        ))}
      </Tabs>
    );
  };

  const _renderSearch = () => {
    if (typeof props.renderSearch === "function")
      return props.renderSearch(props);
    return <FlowSearch onSearch={_onSearch} options={options} />;
  };

  const _renderContent = () => {
    if (typeof props.renderContent === "function")
      return props.renderContent(props);

    // const column1 = [
    //   {
    //     title: "状态",
    //     dataIndex: "stateDesc",
    //     key: "stateDesc",
    //     width: 100,
    //   },
    //   {
    //     title: "发起人",
    //     dataIndex: "createdBy",
    //     key: "createdBy",
    //     width: 100,
    //   },
    //   {
    //     title: "审批节点",
    //     dataIndex: "currentNodeNames",
    //     key: "currentNodeNames",
    //     width: 200,
    //   },
    //   {
    //     title: "审批人",
    //     dataIndex: "auditorNames",
    //     key: "auditorNames",
    //     width: 200,
    //   },
    //   {
    //     title: "流程发起时间",
    //     dataIndex: "procCreateTime",
    //     key: "procCreateTime",
    //     width: 200,
    //   },

    //   {
    //     title: "任务创建时间",
    //     dataIndex: "currentFirstTaskCreatedTime",
    //     key: "currentFirstTaskCreatedTime",
    //     width: 200,
    //   },

    //   {
    //     title: "结束日期",
    //     dataIndex: "procEndTime",
    //     key: "procEndTime",
    //     width: 200,
    //   },
    // ];

    const column2 = [
      {
        title: "审批节点",
        dataIndex: "taskName",
        key: "taskName",
        width: 180,
      },,
      {
        title: "审批人",
        dataIndex: "auditorUserNames",
        key: "auditorUserNames",
        width: 110,
      },
      {
        title: "流程创建日期",
        dataIndex: "procCreateTime",
        key: "procCreateTime",
        width: 200,
      },
      {
        title: "任务创建日期",
        dataIndex: "taskCreateTime",
        key: "taskCreateTime",
        width: 200,
      },
    ];

    const column3 = [
      {
        title: "状态",
        dataIndex: "stateDesc",
        key: "stateDesc",
        width: 100,
      },
      {
        title: "审批节点",
        dataIndex: "taskName",
        key: "taskName",
        width: 180,
      },
      {
        title: "审批人",
        dataIndex: "auditorNames",
        key: "auditorNames",
        width: 110,
      },
      {
        title: "流程创建日期",
        dataIndex: "procCreateTime",
        key: "procCreateTime",
        width: 200,
      },
      {
        title: "任务创建日期",
        dataIndex: "taskCreateTime",
        key: "taskCreateTime",
        width: 200,
      },
      {
        title: "流程结束日期",
        dataIndex: "procEndDate",
        key: "procEndDate",
        width: 200,
      },
    ];

    const columns = (col = []) => [
      {
        title: "流程标题",
        dataIndex: "title",
        key: "title",
        width: 200,
      },
      {
        title: "创建人",
        dataIndex: "createdByName",
        key: "createdByName",
        width: 110,
      },
      
      ...col,
      {
        title: "操作",
        dataIndex: "",
        key: "operations",
        fixed: "right",
        align: "center",
        width: 80,
        // align: 'right',
        render: (...args) => (
          <a onClick={onLinkClick?.bind(this, ...args)}>查看</a>
        ),
      },
    ];

    return (
      <div className="flow-list-main">
        {/* {active === "all" || active === "done" ? (
          <CommonTable
            rowKey="procInstId"
            columns={columns(column1)}
            request={request}
            queryParams={searchParams}
            api={({ page, size } = {}) => _listApi.current[active](page, size)}
            afterFetchData={_afterFetchData}
          />
        ) : null} */}

        {active === "wait" ? (
          <CommonTable
            rowKey="taskId"
            columns={columns(column2)}
            request={request}
            queryParams={searchParams}
            api={({ page, size } = {}) => _listApi.current[active](page, size)}
            afterFetchData={_afterFetchData}
          />
        ) : null}

          {active === "accept" ? (
          <CommonTable
            rowKey="taskId"
            columns={columns(column3)}
            request={request}
            queryParams={searchParams}
            api={({ page, size } = {}) => _listApi.current[active](page, size)}
            afterFetchData={_afterFetchData}
          />
        ) : null}
      </div>
    );
  };
  return (
    <div className="flow-list" ref={el}>
      {_renderTabs()}
      {_renderSearch()}
      {_renderContent()}
    </div>
  );
}
