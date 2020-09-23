import React, { useEffect, useState, useRef, useCallback } from "react";

import { Button, Input, Modal, Select, Form } from "antd";
import api from '../api';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function FlowTransferModal(props) {
  const { visible, request, onOk, onCancel } = props;

  const [form] = Form.useForm();
  const [targetUserList, setTargetUserList] = useState([])

  useEffect(() => {
    if (visible) {
    }
    return () => {
    }
  }, [visible])

  const _onOk = async () => {
    try {
      const values = await form.validateFields();
      if (typeof onOk === 'function') onOk(values)
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }

  const _onSearch = async (val) => {
    try {
      if (request) {
        let res = await request.get(api.userList(val))
        console.log(res)
      }
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }

  return (
    <Modal
      title="流程转办"
      visible={visible}
      onOk={_onOk}
      onCancel={onCancel}
      cancelText="取消"
      okText="确定"
    >
      <Form
        {...layout}
        form={form} 
        name="basic"
        initialValues={{ remember: true }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="转办人"
          name="targetUserId"
          rules={[{ required: true, message: "请选择转办人" }]}
        >
          <Select
            showSearch
            // style={{ width: 1 }}
            placeholder="选择转办人"
            optionFilterProp="children"
            // onChange={onChange}
            // onFocus={onFocus}
            // onBlur={onBlur}
            onSearch={_onSearch}
          >
            {
              targetUserList.map((d, i) => <Select.Option key={i} value="jack">Jack</Select.Option>)
            }
            {/* <Select.Option value="jack">Jack</Select.Option>
            <Select.Option value="lucy">Lucy</Select.Option>
            <Select.Option value="tom">Tom</Select.Option> */}
          </Select>
        </Form.Item>

        <Form.Item
          label="转办理由"
          name="reason"
          rules={[{ required: true, message: "请输入转办理由" }]}
        >
          <Input.TextArea rows={4} placeholder="请输入转办理由"></Input.TextArea>
        </Form.Item>
      </Form>
    </Modal>
  );
}
