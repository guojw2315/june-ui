import React, { useEffect, useState, useRef, useCallback } from "react";

import { Button, Input, Modal, Select, Form, message, Spin } from "antd";
import _debounce from "lodash.debounce";
import api from "../api";

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function FlowTransferModal(props) {
  const {
    visible,
    remark,
    setRemark,
    request,
    onOk,
    onCancel,
    onModelFormChange,
    runTimeTasks = [],
  } = props;

  const [form] = Form.useForm();
  const [targetUserList, setTargetUserList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (visible) {
    }
    return () => {};
  }, [visible]);

  useEffect(() => {
    form.setFieldsValue({ reason: remark });
    return () => {};
  }, [remark]);

  useEffect(() => {
    if (runTimeTasks.length) {
      // console.log(remark)
      form.setFieldsValue({ taskIds: [runTimeTasks[0]?.taskId] });
    }
    return () => {};
  }, [runTimeTasks]);

  const _onOk = async () => {
    if (request) {
      try {
        setLoading(true);
        const values = await form.validateFields();
        const res = await request({
          method: "POST",
          url: api.taskTransfer(),
          data: { ...values },
        });
        console.log("values:", values);
        form.resetFields();
        message.success(res.data.data);
        if (typeof onOk === "function") onOk(values);
        // console.log("Success:", values);
      } catch (errorInfo) {
        console.log("Failed:", errorInfo);
      } finally {
        setLoading(false);
      }
    }
  };

  const _onSearch = _debounce(async (val) => {
    try {
      if (request) {
        let res = await request({ method: "GET", url: api.userList(val) });
        let data = res?.data?.data;
        // console.log(data);
        setTargetUserList(data);
      }
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  }, 300);

  const _onChange = (changedValues, allValues) => {
    // setRemark && setRemark(changedValues.reason);
    onModelFormChange && onModelFormChange(changedValues);
  };

  return (
    <Modal
      title="流程转办"
      visible={visible}
      onOk={_onOk}
      onCancel={onCancel}
      cancelText="取消"
      okText="确定"
      confirmLoading={loading}
    >
      {/* <Spin spinning={true}> */}
        <Form
          {...layout}
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onValuesChange={_onChange}
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
              placeholder="选择转办人"
              optionFilterProp="children"
              // onChange={onChange}
              onSearch={_onSearch}
            >
              {targetUserList.map((d, i) => (
                <Select.Option key={i} value={d.id}>
                  {`${d.name} - ${d.login}`}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="流程节点"
            name="taskIds"
            rules={[{ required: true, message: "请选择流程节点" }]}
          >
            <Select
              mode="multiple"
              placeholder="选择流程节点"
              // onChange={onChange}
            >
              {runTimeTasks.map((d, i) => (
                <Select.Option key={i} value={d.taskId}>
                  {`${d.nodeName} - ${d.userNames}`}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="转办理由"
            name="reason"
            rules={[{ required: true, message: "请输入转办理由" }]}
          >
            <Input.TextArea
              rows={4}
              placeholder="请输入转办理由"
            ></Input.TextArea>
          </Form.Item>
        </Form>
      {/* </Spin> */}
    </Modal>
  );
}
