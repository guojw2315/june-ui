import React, { useEffect, useState, useRef, useCallback } from "react";

import { FlowDetail } from "../components";
import "../components/flow-detail/style";
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
// import xmlDemo from "../mock/bpmn_demo";
import { res1, res2 } from "../mock/bpmn_res";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const residences = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake",
          },
        ],
      },
    ],
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men",
          },
        ],
      },
    ],
  },
];

export default function Detail(props) {
  const [data, setData] = useState({});

  const [form] = Form.useForm();

  useEffect(() => {
    console.log("detail mounted");

    setTimeout(() => {
      setData({ ...res2.data });
    }, 800);
  }, []);

  const _onTabChange = (key) => {
    console.log("Detail:", key);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Select.Option value="86">+86</Select.Option>
        <Select.Option value="87">+87</Select.Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const renderInfo = () => {
    return (
      <div></div>
    );
  };

  const renderApprove = () => {
    return (
      <div style={{ padding: 20 }}>
        <Form>
          <Form.Item label="test">
            <Input />
          </Form.Item>
        </Form>
      </div>
    );
  };

  return (
    <FlowDetail
      {...props}
      data={data}
      onTabChange={_onTabChange}
      // renderApprove={renderApprove}
      // renderInfo={renderInfo}
    />
  );
}
