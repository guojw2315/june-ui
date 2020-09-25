import React, { useEffect, useState, useRef } from "react";
import FlowTabs, { TabPane } from "../flow-tabs";
import FlowSearch from "../flow-list-section/flow-search";
import { CommonTable, FlowFullScreen } from "../index";

import "../flow-list/style/index";
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

  const el = useRef();
  const [options, setOptions] = useState([]); // 流程分类选项
  const [searchParams, setSearchParams] = useState({});

  const _api = (currentPage, pageSize) => ({
    url: `/caas/osoBpmProcInst/getInterestProcInstPage/${currentPage}/${pageSize}`,
  });

  useEffect(() => {
    _fetchOptions();
    return () => {};
  }, []);

  const _fetchOptions = async () => {
    if (request) {
      try {
        let res = await request({
          method: "POST",
          url: api.dictProcessOwnKeys(),
        });
        setOptions(res.data.data || []);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const _onSearch = (values) => {
    setSearchParams(values);
  };

  const _renderSearch = () => {
    if (typeof props.renderSearch === "function")
      return props.renderSearch(props);
    return (
      <FlowSearch
        onSearch={_onSearch}
        options={options}
        labelKey="prodDefDesc"
        valueKey="prodDefKey"
      />
    );
  };

  const _renderContent = () => {
    if (typeof props.renderContent === "function")
      return props.renderContent(props);

    const column1 = [
      {
        title: "状态",
        dataIndex: "stateDesc",
        key: "stateDesc",
        width: 100,
      },
      {
        title: "发起人",
        dataIndex: "createdByName",
        key: "createdByName",
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
    ];

    const columns = (col = []) => [
      {
        title: "流程标题",
        dataIndex: "title",
        key: "title",
        width: 200,
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
        <CommonTable
          rowKey="procInstId"
          columns={columns(column1)}
          request={request}
          queryParams={searchParams}
          api={({ page, size } = {}) => _api(page, size)}
        />
      </div>
    );
  };
  return (
    <div className="flow-list" ref={el}>
      {_renderSearch()}
      {_renderContent()}
    </div>
  );
}
