import React, { useEffect, useState, useRef } from "react";
import { Table, Row, Col, Form, Input, Select, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
export default function FlowSearch(props) {
  const { labelKey, valueKey, onSearch, options = [] } = props;
  const _onSearch = (values) => {
    onSearch && onSearch(values);
  };
  return (
    <div className="flow-search-bar">
      <Form name="horizontal_login" layout="inline" onFinish={_onSearch}>
        <Form.Item
          label="流程分类"
          name="processDefKey"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Select allowClear placeholder="请选择分类" style={{ minWidth: 192 }}>
            {options.map((d, i) => {
              return (
                <Select.Option key={i} value={d[valueKey] || d.dataValue}>
                  {d[labelKey] || d.name}
                </Select.Option>
              );
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
  );
}
