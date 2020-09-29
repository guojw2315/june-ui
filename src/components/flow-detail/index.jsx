import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  FlowViewer,
  FlowRecord,
  FlowTabs,
  TabPane,
  FlowActionButtons,
  FlowTransferModal,
  FlowFullScreen,
} from "../index";
import "../flow-viewer/style";
import "../flow-record/style";
import "../flow-action-buttons/style";
import {
  Button,
  Row,
  Col,
  Input,
  Modal,
  Select,
  Form,
  message,
  Spin,
} from "antd";
import api from "../api";
import "./style/index";

import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";

export default function FlowDetail(props) {
  const {
    onTabChange,
    renderTabs,
    renderApprove,
    renderInfo,
    renderHeader,
    TabsComponent,
    onOkSuccess,
    onRejectSuccess,
    onTransferSuccess,
    data,
    id,
    request,
    tabs = [],
    tabProps = {},
    ...rest
  } = props;

  const [fullScreen, setFullScreen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [remark, setRemark] = useState("");
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const el = useRef();
  const [modal, contextHolder] = Modal.useModal();

  useEffect(() => {
    if (id && !data) {
      _fetchData(id);
    }
    return () => {};
  }, [id]);

  useEffect(() => {
    if (data) {
      setDetailData(data);
    }
    return () => {};
  }, [data]);

  const [form] = Form.useForm();

  const _detailApi = useRef({
    getDetail: (procInstId) => ({
      url: `/caas/osoBpmProcInst/getFlowDetailByProcInstId/${procInstId}`,
    }),

    postApprove: () => ({
      url: `/caas/osoBpmTask/approve`,
    }),
  });

  const _tabs = useRef([
    {
      name: "审批信息",
      key: "approve_form",
      render: renderInfo,
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

  const _fetchData = async (id) => {
    if (request) {
      try {
        setLoading(true);
        const { url } = _detailApi.current.getDetail(id);
        let res = await request({ method: "GET", url });
        let d = res?.data?.data;
        setDetailData(d);
        // console.log(d?.runTimeTasks?.filter((item) => item.approveFlag))
        let _task = d?.runTimeTasks?.filter((item) => item.approveFlag) || []
        if (_task.length === 1) {
          form.setFieldsValue({ taskId: _task[0].taskId });
        }
        setTasks(_task);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
  };

  const _onTabChange = (key) => {
    onTabChange && onTabChange(key);
  };

  const _onFullScreen = () => {
    el.current.requestFullscreen();
  };

  const _onExitFullScreen = () => {
    document.exitFullscreen();
  };

  const _onTransfer = () => {
    setVisible(true);
  };

  const _modalConfig = () => ({
    title: "确认!",
    content: "同意该流程?",
    okText: "确定",
    cancelText: "取消",
  });

  const _onOk = async () => {
    // console.log("onOk");
    try {
      const values = await form.validateFields();
      console.log(values)
      modal.confirm({
        ..._modalConfig(),
        content: "同意该流程?",
        onOk: () => {
          return new Promise(async (resolve, reject) => {
            try {
              await _postApprove("AGREE", values);
              if (typeof onOkSuccess === "function") onOkSuccess();
              resolve()
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const _onReject = async () => {
    try {
      const values = await form.validateFields();
      modal.confirm({
        ..._modalConfig(),
        content: "驳回该流程?",
        onOk: () => {
          return new Promise(async (resolve, reject) => {
            try {
              await _postApprove("REJECT", values);
              if (typeof onRejectSuccess === "function") onRejectSuccess();
              resolve();
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  const _postApprove = async (status, values) => {
    try {
      const { url } = _detailApi.current.postApprove();
      let res = await request({
        method: "POST",
        url,
        data: {
          status,
          ...values,
        },
      });
      let msg = res?.data?.data;``
      message.success(msg);
      form.resetFields();
      setRemark("");
      _fetchData(id);
      return Promise.resolve()
    } catch (e) {
      return Promise.reject(e);
    }
  };

  const _onTransferOk = () => {
    _fetchData(id);
    setVisible(false);
    form.setFieldsValue({ approveRemark: "" });
    if (typeof onTransferSuccess === "function") onTransferSuccess();
  };

  const _onTransferCancel = () => {
    setVisible(false);
  };

  const _onRemarkChange = (changedValues, allValues) => {
    setRemark(changedValues.approveRemark);
  };

  const _onModelFormChange = (changedValues) => {
    form.setFieldsValue({ approveRemark: changedValues.reason });
  };

  const _renderApprove = () => {
    if (typeof renderApprove === "function") return renderApprove();
    const hideNodeSelect =  tasks.length <= 1;
    return (
      <div className="flow-approve-detault">
        <Form
          {...{
            labelCol: { span: 2 },
            wrapperCol: { span: 22 },
          }}
          form={form}
          style={{ width: "100%" }}
          name="flow-detail-default"
          onValuesChange={_onRemarkChange}
        >
          <Form.Item
            style={{display: hideNodeSelect ? 'none' : ''}}
            label="流程节点"
            name="taskId"
            rules={[{ required: !hideNodeSelect, message: "请选择流程节点" }]}
          >
            <Select
              // mode="multiple"
              disabled={hideNodeSelect}
              placeholder="选择流程节点"
              // onChange={onChange}
            >
              {tasks?.map((d, i) => (
                <Select.Option key={i} value={d.taskId}>
                  {`${d.nodeName} - ${d.userNames}`}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="备注说明："
            name="approveRemark"
            rules={[{ required: true, message: "请输入备注说明!" }]}
          >
            <Input.TextArea placeholder="请输入备注说明" />
          </Form.Item>
        </Form>
      </div>
    );
  };

  const _renderHeader = () => {
    if (typeof renderHeader === "function") return renderHeader(props);
    return (
      <div className="flow-detail-header">
        <div className="flow-detail-top">
          <div className="flow-detail-title">
            {detailData && detailData.title}
          </div>
          <FlowFullScreen el={el} />
        </div>
        <div className="flow-approve">{_renderApprove()}</div>

        <FlowActionButtons
          data={detailData}
          onTransfer={_onTransfer}
          onAgree={_onOk}
          onReject={_onReject}
          canApprove={tasks.length}
          {...rest}
        />
      </div>
    );
  };

  const _renderTabs = () => {
    if (typeof renderTabs === "function") return renderTabs(props);
    const Tabs = TabsComponent || FlowTabs;
    return (
      <Tabs
        defaultActiveKey={_tabs?.current[0]?.key}
        onChange={_onTabChange}
        {...tabProps}
      >
        {_tabs.current
          ?.filter((d) => d.render)
          ?.map((d) => (
            <TabPane tab={d.name} key={d.key}>
              {d.render && d.render(d, detailData)}
            </TabPane>
          ))}
      </Tabs>
    );
  };

  return (
    <div className="flow-detail" ref={el}>
      <Spin spinning={loading}>
        {detailData.approveFlag === false ? null : _renderHeader()}
        {/* {_renderHeader()} */}
        {_renderTabs()}
        <FlowTransferModal
          visible={visible}
          remark={remark}
          setRemark={setRemark}
          runTimeTasks={detailData?.runTimeTasks || []}
          onOk={_onTransferOk}
          request={request}
          onCancel={_onTransferCancel}
          onModelFormChange={_onModelFormChange}
        />
        {contextHolder}
      </Spin>
    </div>
  );
}
