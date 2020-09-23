import React, { useEffect, useState, useRef } from "react";
import FlowTabs, { TabPane } from "../flow-tabs";
import { FlowFullScreen } from "../index";

import "./style/index";

import { Table, Row, Col, Form, Input, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

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
    { name: "全部", key: "all", total: 0, value: 0},
    { name: "待审批", key: "wait", total: 0 },
    { name: "已审批", key: "accept", total: 0 },
    { name: "已完结", key: "done", total: 0 },
  ]);

  const tabTotal = useRef({});

  const el = useRef();
  const [form] = Form.useForm();
  const [active, setAcitve] = useState(tabs?.current[0]?.key);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [dataSource, setDataSource] = useState([]);
  const [options, setOptions] = useState([]); // 流程分类选项
  const [searchParams, setSearchParams] = useState({});
  const [loading, setLoading] = useState(false);
  const [, setUpdate] = useState('')

  useEffect(() => {
     _fetchOptions();
    return () => {};
  }, []);

  useEffect(() => {
    _fetchData(active, searchParams, currentPage, pageSize);
   
  }, [active, searchParams, pageSize, currentPage]);

  const _onTabChange = async (key) => {
    setCurrentPage(1);
    setAcitve(key)
    if (typeof onTabChange === "function") onTabChange(key);
  };

  const _fetchOptions = async () => {
    if (request) {
      let res = await request.get(api.dictProcessList());
      setOptions(res.data.data || [])
      try {
      } catch (e) {
        console.log(e);
      }
    }
  };

  const _fetchData = async (
    key,
    params = searchParams,
    page = currentPage,
    size = pageSize
  ) => {
    if (request) {
      try {
        setLoading(true);
        const { url, ...other } = _listApi.current[key](page, size);
        // console.log(other)
        let res = await request.post(url, {
          data: {...params, ...other},
        });
        const { records = [], total = 0 } = res.data.data;

        let tab = tabs.current.find(d => d.key === key)

        if (tab) {
          tab.total = total
        }

        // 设置全部 未审批数量
        if (key === 'wait') {
          tabs.current[0].value = total
        }

        setDataSource(records);
        setTotal(total);
        setLoading(false);
        // console.log("flow-list: ", res);
      } catch (e) {
        setLoading(false);
        console.log("flow-list fetch failed;", e);
      }
    }
  };

  const _onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const _onSearch = (values) => {
    setSearchParams(values);
    setCurrentPage(1);
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
          <TabPane tab={`${d.name}（${d.value ? d.value + '/' : ''}${d.total}）`} key={d.key}></TabPane>
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
        align: "center",
        width: 80,
        // align: 'right',
        render: (...args) => (
          <a onClick={props?.onClick?.bind(this, ...args)}>查看</a>
        ),
      },
    ];

    const _Table = TableComponent || Table;

    return (
      <div className="flow-list-main">
        <div className="flow-search-bar">
          <Form
            form={form}
            name="horizontal_login"
            layout="inline"
            onFinish={_onSearch}
          >
            <Form.Item
              label="流程分类"
              name="processDefKey"
              // rules={[{ required: true, message: "Please input your username!" }]}
            >
              <Select placeholder="请选择分类" style={{ minWidth: 192 }}>
                {options.map((d, i) => {
                  return <Select.Option key={i} value={d.dataValue}>{d.name}</Select.Option>
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="标题"
              name="title"
              // rules={[{ required: true, message: "Please input your password!" }]}
            >
              <Input suffix={<SearchOutlined />} placeholder="关键字搜索" />
            </Form.Item>

            <Form.Item shouldUpdate={true} noStyle>
              {() => (
                <Button type="primary" htmlType="submit" ghost>
                  搜索
                </Button>
              )}
            </Form.Item>
          </Form>
        </div>
        <_Table
          rowKey="procInstId"
          loading={loading}
          columns={columns}
          dataSource={dataSource}
          pagination={{
            current: currentPage,
            total,
            pageSize,
            onChange: _onPageChange,
          }}
          {...rest}
        />
      </div>
    );
  };
  return (
    <div className="flow-list" ref={el}>
      {_renderTabs()}
      {_renderContent()}
    </div>
  );
}
