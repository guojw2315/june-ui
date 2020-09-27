import React, { useEffect } from "react";
import { Button, Row, Col } from "antd";

export default function FlowActionButtons(props) {
  const {
    onAgree,
    onReject,
    onTransfer,
    canApprove,
    data = {},
    prefix = [],
    addon = [],
  } = props;
  return (
    <div className="flow-action-buttons">
      <Row gutter={12}>
        {prefix.map((btn, i) => {
          return <Col key={i}>{btn}</Col>;
        })}
        <Col>
          <Button
            type="primary"
            ghost
            onClick={onTransfer}
            disabled={!canApprove}
          >
            转办
          </Button>
        </Col>
        <Col>
          <Button
            type="primary"
            ghost
            onClick={onAgree}
            // disabled={
            //   !canApprove || data.completeFlag || data.approveFlag === false
            // }
          >
            同意
          </Button>
        </Col>
        <Col>
          <Button
            danger
            onClick={onReject}
            disabled={
              !canApprove || data.completeFlag || data.approveFlag === false
            }
          >
            驳回
          </Button>
        </Col>
        {addon.map((btn, i) => {
          return <Col key={i}>{btn}</Col>;
        })}
      </Row>
    </div>
  );
}
