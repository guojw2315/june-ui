import React, { useEffect } from "react";


export default function FlowActionButtons(props) {

  return (
    <div className="flow-action-buttons">
      <Row gutter={12}>
        <Col>
          <Button type="primary" ghost>
            转办
          </Button>
        </Col>
        <Col>
          <Button type="primary" ghost>
            同意
          </Button>
        </Col>
        <Col>
          <Button danger>驳回</Button>
        </Col>
      </Row>
    </div>
  );
}
