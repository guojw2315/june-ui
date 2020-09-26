export const res1 = {
  code: 200,
  message: "成功",
  data: {
    procInstId: "dd1e0eb3-f8cd-11ea-b1a0-4a8c0d47d5ad",
    startTime: "2020-09-17 18:09:25",
    endTime: null,
    businessKey: "4235555555",
    flowXml:
      '<?xml version="1.0" encoding="UTF-8"?>\n<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="1.11.3">\n  <bpmn:process id="bpm-test-yqj" name="流程测试-yqj" isExecutable="true">\n    <bpmn:startEvent id="StartEvent_1" name="开始节点">\n      <bpmn:outgoing>SequenceFlow_0h2mqck</bpmn:outgoing>\n    </bpmn:startEvent>\n    <bpmn:userTask id="Task_1qrjxrp" name="发起人" camunda:formKey="/icrm/sfdsfdsf/userTaskTest" camunda:candidateUsers="${createdBy}">\n      <bpmn:extensionElements>\n        <camunda:formData>\n          <camunda:formField id="FormField_2fe16nk" label="姓名" type="string" defaultValue="123" />\n        </camunda:formData>\n        <camunda:taskListener delegateExpression="${sendEmailMessageListener}" event="create" />\n      </bpmn:extensionElements>\n      <bpmn:incoming>SequenceFlow_0h2mqck</bpmn:incoming>\n      <bpmn:incoming>SequenceFlow_0bpmrxv</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_10lp8qa</bpmn:outgoing>\n    </bpmn:userTask>\n    <bpmn:sequenceFlow id="SequenceFlow_0h2mqck" sourceRef="StartEvent_1" targetRef="Task_1qrjxrp" />\n    <bpmn:sequenceFlow id="SequenceFlow_10lp8qa" name="测试1" sourceRef="Task_1qrjxrp" targetRef="ExclusiveGateway_0zjqk66" />\n    <bpmn:endEvent id="EndEvent_02724aq" name="终止结束">\n      <bpmn:incoming>SequenceFlow_0owqu8e</bpmn:incoming>\n    </bpmn:endEvent>\n    <bpmn:userTask id="Task_0imeek6" name="同意任务" camunda:formKey="formkey1" camunda:candidateUsers="1">\n      <bpmn:documentation>sdfdsfdsfdsfdsf</bpmn:documentation>\n      <bpmn:extensionElements>\n        <camunda:formData />\n        <camunda:properties>\n          <camunda:property />\n        </camunda:properties>\n        <camunda:taskListener delegateExpression="${sendEmailMessageListener}" event="create" />\n      </bpmn:extensionElements>\n      <bpmn:incoming>SequenceFlow_0facmqi</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_16ojpcx</bpmn:outgoing>\n      <bpmn:outgoing>SequenceFlow_0bpmrxv</bpmn:outgoing>\n    </bpmn:userTask>\n    <bpmn:userTask id="UserTask_13zapgx" name="终止任务" camunda:formKey="formkey1" camunda:candidateUsers="1">\n      <bpmn:incoming>SequenceFlow_0qmmy0s</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_0owqu8e</bpmn:outgoing>\n    </bpmn:userTask>\n    <bpmn:sequenceFlow id="SequenceFlow_0owqu8e" name="" sourceRef="UserTask_13zapgx" targetRef="EndEvent_02724aq" />\n    <bpmn:exclusiveGateway id="ExclusiveGateway_0zjqk66">\n      <bpmn:incoming>SequenceFlow_10lp8qa</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_0qmmy0s</bpmn:outgoing>\n      <bpmn:outgoing>SequenceFlow_0pcvpvp</bpmn:outgoing>\n      <bpmn:outgoing>SequenceFlow_0facmqi</bpmn:outgoing>\n    </bpmn:exclusiveGateway>\n    <bpmn:sequenceFlow id="SequenceFlow_0qmmy0s" name="终止" sourceRef="ExclusiveGateway_0zjqk66" targetRef="UserTask_13zapgx">\n      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[${approvalStatus == "reject"}]]></bpmn:conditionExpression>\n    </bpmn:sequenceFlow>\n    <bpmn:endEvent id="EndEvent_11ngk87" name="同意结束">\n      <bpmn:incoming>SequenceFlow_16ojpcx</bpmn:incoming>\n    </bpmn:endEvent>\n    <bpmn:sequenceFlow id="SequenceFlow_16ojpcx" name="同意" sourceRef="Task_0imeek6" targetRef="EndEvent_11ngk87">\n      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[${approvalStatus == "agree"}]]></bpmn:conditionExpression>\n    </bpmn:sequenceFlow>\n    <bpmn:sequenceFlow id="SequenceFlow_0pcvpvp" name="驳回" sourceRef="ExclusiveGateway_0zjqk66" targetRef="Task_03ztrx4">\n      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[${approvalStatus == "reject"}]]></bpmn:conditionExpression>\n    </bpmn:sequenceFlow>\n    <bpmn:endEvent id="EndEvent_0xotcu7" name="驳回结束">\n      <bpmn:incoming>SequenceFlow_18mt866</bpmn:incoming>\n    </bpmn:endEvent>\n    <bpmn:sequenceFlow id="SequenceFlow_18mt866" name="同意" sourceRef="Task_03ztrx4" targetRef="EndEvent_0xotcu7" />\n    <bpmn:userTask id="Task_03ztrx4" name="驳回任务" camunda:candidateUsers="1">\n      <bpmn:incoming>SequenceFlow_0pcvpvp</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_18mt866</bpmn:outgoing>\n    </bpmn:userTask>\n    <bpmn:sequenceFlow id="SequenceFlow_0facmqi" name="同意" sourceRef="ExclusiveGateway_0zjqk66" targetRef="Task_0imeek6">\n      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[${approvalStatus == "agree"}]]></bpmn:conditionExpression>\n    </bpmn:sequenceFlow>\n    <bpmn:sequenceFlow id="SequenceFlow_0bpmrxv" name="驳回" sourceRef="Task_0imeek6" targetRef="Task_1qrjxrp">\n      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[${approvalStatus == "reject"}]]></bpmn:conditionExpression>\n    </bpmn:sequenceFlow>\n  </bpmn:process>\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="bpm-test-yqj">\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n        <dc:Bounds x="194" y="113" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="190" y="149" width="44" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="UserTask_1du2qfp_di" bpmnElement="Task_1qrjxrp">\n        <dc:Bounds x="340" y="91" width="100" height="80" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_0h2mqck_di" bpmnElement="SequenceFlow_0h2mqck">\n        <di:waypoint xsi:type="dc:Point" x="230" y="131" />\n        <di:waypoint xsi:type="dc:Point" x="340" y="131" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="240" y="110" width="90" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_10lp8qa_di" bpmnElement="SequenceFlow_10lp8qa">\n        <di:waypoint xsi:type="dc:Point" x="440" y="131" />\n        <di:waypoint xsi:type="dc:Point" x="498" y="131" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="455" y="110" width="28" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="EndEvent_02724aq_di" bpmnElement="EndEvent_02724aq">\n        <dc:Bounds x="874" y="310" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="872" y="350" width="44" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="UserTask_0j601me_di" bpmnElement="Task_0imeek6">\n        <dc:Bounds x="626" y="-102" width="100" height="80" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="UserTask_13zapgx_di" bpmnElement="UserTask_13zapgx">\n        <dc:Bounds x="635" y="288" width="100" height="80" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_0owqu8e_di" bpmnElement="SequenceFlow_0owqu8e">\n        <di:waypoint xsi:type="dc:Point" x="735" y="328" />\n        <di:waypoint xsi:type="dc:Point" x="874" y="328" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="760" y="307" width="90" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="ExclusiveGateway_0zjqk66_di" bpmnElement="ExclusiveGateway_0zjqk66" isMarkerVisible="true">\n        <dc:Bounds x="498" y="106" width="50" height="50" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="523" y="160" width="0" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_0qmmy0s_di" bpmnElement="SequenceFlow_0qmmy0s">\n        <di:waypoint xsi:type="dc:Point" x="523" y="156" />\n        <di:waypoint xsi:type="dc:Point" x="523" y="328" />\n        <di:waypoint xsi:type="dc:Point" x="635" y="328" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="528" y="237" width="22" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="EndEvent_11ngk87_di" bpmnElement="EndEvent_11ngk87">\n        <dc:Bounds x="873.567944250871" y="-80" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="870" y="-40" width="44" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_16ojpcx_di" bpmnElement="SequenceFlow_16ojpcx">\n        <di:waypoint xsi:type="dc:Point" x="726" y="-62" />\n        <di:waypoint xsi:type="dc:Point" x="874" y="-62" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="789" y="-83" width="22" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_0pcvpvp_di" bpmnElement="SequenceFlow_0pcvpvp">\n        <di:waypoint xsi:type="dc:Point" x="548" y="131" />\n        <di:waypoint xsi:type="dc:Point" x="635" y="131" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="581" y="110" width="22" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="EndEvent_0xotcu7_di" bpmnElement="EndEvent_0xotcu7">\n        <dc:Bounds x="874" y="113" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="870" y="153" width="44" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_18mt866_di" bpmnElement="SequenceFlow_18mt866">\n        <di:waypoint xsi:type="dc:Point" x="735" y="131" />\n        <di:waypoint xsi:type="dc:Point" x="874" y="131" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="794" y="110" width="22" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="UserTask_04dm4hh_di" bpmnElement="Task_03ztrx4">\n        <dc:Bounds x="635" y="91" width="100" height="80" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_0facmqi_di" bpmnElement="SequenceFlow_0facmqi">\n        <di:waypoint xsi:type="dc:Point" x="523" y="106" />\n        <di:waypoint xsi:type="dc:Point" x="523" y="-62" />\n        <di:waypoint xsi:type="dc:Point" x="626" y="-62" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="527" y="16" width="22" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_0bpmrxv_di" bpmnElement="SequenceFlow_0bpmrxv">\n        <di:waypoint xsi:type="dc:Point" x="676" y="-102" />\n        <di:waypoint xsi:type="dc:Point" x="676" y="-179" />\n        <di:waypoint xsi:type="dc:Point" x="390" y="-179" />\n        <di:waypoint xsi:type="dc:Point" x="390" y="91" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="522" y="-200" width="22" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn:definitions>',
    completeFlag: false,
    approveFlag: true,
    prodDefKey: "bpm-test-yqj",
    title: "[ihr]招聘流程【123】",
    historyTasks: [
      {
        nodeId: "Task_1qrjxrp",
        nodeName: "发起人",
        createdTime: "2020-09-17 18:09:25",
        taskId: "dd23db2c-f8cd-11ea-b1a0-4a8c0d47d5ad",
        remarkList: [
          {
            createdTime: "2020-09-17 19:05:05",
            remark: "ok",
            type: "approve",
            typeDesc: "审批",
          },
        ],
        nodeDocument: null,
        endTime: "2020-09-17 19:05:06",
        state: "agree",
        stateDesc: "同意",
        remark: "ok",
        attachments: null,
        assigneeUserId: "1",
        assigneeUserName: "admin",
      },
    ],
    runTimeTasks: [
      {
        nodeId: "Task_0imeek6",
        nodeName: "同意任务",
        createdTime: "2020-09-17 19:05:06",
        taskId: "a49dd1a9-f8d5-11ea-b1a0-4a8c0d47d5ad",
        remarkList: null,
        nodeDocument: "sdfdsfdsfdsfdsf",
        userIds: ["1"],
        userNames: "admin",
        formKey: "formkey1",
        nextLineNames: ["同意", "测试1", "驳回"],
      },
    ],
  },
  successful: true,
  errorPath: null,
  errorSystem: null,
};

export const res2 = {
  code: 200,
  message: "成功",
  data: {
    procInstId: "a21c001a-fa46-11ea-b274-6aad626135af",
    startTime: "2020-09-19 15:06:26",
    endTime: "2020-09-19 15:13:13",
    businessKey: "4235555555",
    flowXml:
      '<?xml version="1.0" encoding="UTF-8"?>\n<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="1.11.3">\n  <bpmn:process id="bpm-test-yqj" name="流程测试-yqj" isExecutable="true">\n    <bpmn:startEvent id="StartEvent_1" name="开始节点">\n      <bpmn:outgoing>SequenceFlow_0h2mqck</bpmn:outgoing>\n    </bpmn:startEvent>\n    <bpmn:userTask id="Task_1qrjxrp" name="发起人" camunda:formKey="/icrm/sfdsfdsf/userTaskTest" camunda:candidateUsers="${createdBy}">\n      <bpmn:extensionElements>\n        <camunda:formData>\n          <camunda:formField id="FormField_2fe16nk" label="姓名" type="string" defaultValue="123" />\n        </camunda:formData>\n        <camunda:taskListener delegateExpression="${sendEmailMessageListener}" event="create" />\n      </bpmn:extensionElements>\n      <bpmn:incoming>SequenceFlow_0h2mqck</bpmn:incoming>\n      <bpmn:incoming>SequenceFlow_0bpmrxv</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_10lp8qa</bpmn:outgoing>\n    </bpmn:userTask>\n    <bpmn:sequenceFlow id="SequenceFlow_0h2mqck" sourceRef="StartEvent_1" targetRef="Task_1qrjxrp" />\n    <bpmn:sequenceFlow id="SequenceFlow_10lp8qa" name="测试1" sourceRef="Task_1qrjxrp" targetRef="ExclusiveGateway_0zjqk66" />\n    <bpmn:endEvent id="EndEvent_02724aq" name="终止结束">\n      <bpmn:incoming>SequenceFlow_0owqu8e</bpmn:incoming>\n    </bpmn:endEvent>\n    <bpmn:userTask id="Task_0imeek6" name="同意任务" camunda:formKey="formkey1" camunda:candidateUsers="1">\n      <bpmn:documentation>sdfdsfdsfdsfdsf</bpmn:documentation>\n      <bpmn:extensionElements>\n        <camunda:formData />\n        <camunda:properties>\n          <camunda:property />\n        </camunda:properties>\n        <camunda:taskListener delegateExpression="${sendEmailMessageListener}" event="create" />\n      </bpmn:extensionElements>\n      <bpmn:incoming>SequenceFlow_0facmqi</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_16ojpcx</bpmn:outgoing>\n      <bpmn:outgoing>SequenceFlow_0bpmrxv</bpmn:outgoing>\n    </bpmn:userTask>\n    <bpmn:userTask id="UserTask_13zapgx" name="终止任务" camunda:formKey="formkey1" camunda:candidateUsers="1">\n      <bpmn:incoming>SequenceFlow_0qmmy0s</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_0owqu8e</bpmn:outgoing>\n    </bpmn:userTask>\n    <bpmn:sequenceFlow id="SequenceFlow_0owqu8e" name="" sourceRef="UserTask_13zapgx" targetRef="EndEvent_02724aq" />\n    <bpmn:exclusiveGateway id="ExclusiveGateway_0zjqk66">\n      <bpmn:incoming>SequenceFlow_10lp8qa</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_0qmmy0s</bpmn:outgoing>\n      <bpmn:outgoing>SequenceFlow_0pcvpvp</bpmn:outgoing>\n      <bpmn:outgoing>SequenceFlow_0facmqi</bpmn:outgoing>\n    </bpmn:exclusiveGateway>\n    <bpmn:sequenceFlow id="SequenceFlow_0qmmy0s" name="终止" sourceRef="ExclusiveGateway_0zjqk66" targetRef="UserTask_13zapgx">\n      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[${approvalStatus == "reject"}]]></bpmn:conditionExpression>\n    </bpmn:sequenceFlow>\n    <bpmn:endEvent id="EndEvent_11ngk87" name="同意结束">\n      <bpmn:incoming>SequenceFlow_16ojpcx</bpmn:incoming>\n    </bpmn:endEvent>\n    <bpmn:sequenceFlow id="SequenceFlow_16ojpcx" name="同意" sourceRef="Task_0imeek6" targetRef="EndEvent_11ngk87">\n      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[${approvalStatus == "agree"}]]></bpmn:conditionExpression>\n    </bpmn:sequenceFlow>\n    <bpmn:sequenceFlow id="SequenceFlow_0pcvpvp" name="驳回" sourceRef="ExclusiveGateway_0zjqk66" targetRef="Task_03ztrx4">\n      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[${approvalStatus == "reject"}]]></bpmn:conditionExpression>\n    </bpmn:sequenceFlow>\n    <bpmn:endEvent id="EndEvent_0xotcu7" name="驳回结束">\n      <bpmn:incoming>SequenceFlow_18mt866</bpmn:incoming>\n    </bpmn:endEvent>\n    <bpmn:sequenceFlow id="SequenceFlow_18mt866" name="同意" sourceRef="Task_03ztrx4" targetRef="EndEvent_0xotcu7" />\n    <bpmn:userTask id="Task_03ztrx4" name="驳回任务" camunda:candidateUsers="1">\n      <bpmn:incoming>SequenceFlow_0pcvpvp</bpmn:incoming>\n      <bpmn:outgoing>SequenceFlow_18mt866</bpmn:outgoing>\n    </bpmn:userTask>\n    <bpmn:sequenceFlow id="SequenceFlow_0facmqi" name="同意" sourceRef="ExclusiveGateway_0zjqk66" targetRef="Task_0imeek6">\n      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[${approvalStatus == "agree"}]]></bpmn:conditionExpression>\n    </bpmn:sequenceFlow>\n    <bpmn:sequenceFlow id="SequenceFlow_0bpmrxv" name="驳回" sourceRef="Task_0imeek6" targetRef="Task_1qrjxrp">\n      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression"><![CDATA[${approvalStatus == "reject"}]]></bpmn:conditionExpression>\n    </bpmn:sequenceFlow>\n  </bpmn:process>\n  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="bpm-test-yqj">\n      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n        <dc:Bounds x="194" y="113" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="190" y="149" width="44" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="UserTask_1du2qfp_di" bpmnElement="Task_1qrjxrp">\n        <dc:Bounds x="340" y="91" width="100" height="80" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_0h2mqck_di" bpmnElement="SequenceFlow_0h2mqck">\n        <di:waypoint xsi:type="dc:Point" x="230" y="131" />\n        <di:waypoint xsi:type="dc:Point" x="340" y="131" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="240" y="110" width="90" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_10lp8qa_di" bpmnElement="SequenceFlow_10lp8qa">\n        <di:waypoint xsi:type="dc:Point" x="440" y="131" />\n        <di:waypoint xsi:type="dc:Point" x="498" y="131" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="455" y="110" width="28" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="EndEvent_02724aq_di" bpmnElement="EndEvent_02724aq">\n        <dc:Bounds x="874" y="310" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="872" y="350" width="44" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="UserTask_0j601me_di" bpmnElement="Task_0imeek6">\n        <dc:Bounds x="626" y="-102" width="100" height="80" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNShape id="UserTask_13zapgx_di" bpmnElement="UserTask_13zapgx">\n        <dc:Bounds x="635" y="288" width="100" height="80" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_0owqu8e_di" bpmnElement="SequenceFlow_0owqu8e">\n        <di:waypoint xsi:type="dc:Point" x="735" y="328" />\n        <di:waypoint xsi:type="dc:Point" x="874" y="328" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="760" y="307" width="90" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="ExclusiveGateway_0zjqk66_di" bpmnElement="ExclusiveGateway_0zjqk66" isMarkerVisible="true">\n        <dc:Bounds x="498" y="106" width="50" height="50" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="523" y="160" width="0" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_0qmmy0s_di" bpmnElement="SequenceFlow_0qmmy0s">\n        <di:waypoint xsi:type="dc:Point" x="523" y="156" />\n        <di:waypoint xsi:type="dc:Point" x="523" y="328" />\n        <di:waypoint xsi:type="dc:Point" x="635" y="328" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="528" y="237" width="22" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="EndEvent_11ngk87_di" bpmnElement="EndEvent_11ngk87">\n        <dc:Bounds x="873.567944250871" y="-80" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="870" y="-40" width="44" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_16ojpcx_di" bpmnElement="SequenceFlow_16ojpcx">\n        <di:waypoint xsi:type="dc:Point" x="726" y="-62" />\n        <di:waypoint xsi:type="dc:Point" x="874" y="-62" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="789" y="-83" width="22" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_0pcvpvp_di" bpmnElement="SequenceFlow_0pcvpvp">\n        <di:waypoint xsi:type="dc:Point" x="548" y="131" />\n        <di:waypoint xsi:type="dc:Point" x="635" y="131" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="581" y="110" width="22" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="EndEvent_0xotcu7_di" bpmnElement="EndEvent_0xotcu7">\n        <dc:Bounds x="874" y="113" width="36" height="36" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="870" y="153" width="44" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_18mt866_di" bpmnElement="SequenceFlow_18mt866">\n        <di:waypoint xsi:type="dc:Point" x="735" y="131" />\n        <di:waypoint xsi:type="dc:Point" x="874" y="131" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="794" y="110" width="22" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNShape id="UserTask_04dm4hh_di" bpmnElement="Task_03ztrx4">\n        <dc:Bounds x="635" y="91" width="100" height="80" />\n      </bpmndi:BPMNShape>\n      <bpmndi:BPMNEdge id="SequenceFlow_0facmqi_di" bpmnElement="SequenceFlow_0facmqi">\n        <di:waypoint xsi:type="dc:Point" x="523" y="106" />\n        <di:waypoint xsi:type="dc:Point" x="523" y="-62" />\n        <di:waypoint xsi:type="dc:Point" x="626" y="-62" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="527" y="16" width="22" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n      <bpmndi:BPMNEdge id="SequenceFlow_0bpmrxv_di" bpmnElement="SequenceFlow_0bpmrxv">\n        <di:waypoint xsi:type="dc:Point" x="676" y="-102" />\n        <di:waypoint xsi:type="dc:Point" x="676" y="-179" />\n        <di:waypoint xsi:type="dc:Point" x="390" y="-179" />\n        <di:waypoint xsi:type="dc:Point" x="390" y="91" />\n        <bpmndi:BPMNLabel>\n          <dc:Bounds x="522" y="-200" width="22" height="12" />\n        </bpmndi:BPMNLabel>\n      </bpmndi:BPMNEdge>\n    </bpmndi:BPMNPlane>\n  </bpmndi:BPMNDiagram>\n</bpmn:definitions>',
    completeFlag: false,
    approveFlag: true,
    prodDefKey: "bpm-test-yqj",
    title: "[ihr]招聘流程【123】",
    historyTasks: [
      {
        nodeId: "UserTask_13zapgx",
        nodeName: "终止任务",
        createdTime: "2020-09-19 15:11:38",
        taskId: "5bf7ce06-fa47-11ea-b274-6aad626135af",
        remarkList: [
          {
            createdTime: "2020-09-19 15:13:12",
            remark: "ok",
            type: "approve",
            typeDesc: "审批",
          },
        ],
        nodeDocument: null,
        endTime: "2020-09-19 15:13:13",
        state: "reject",
        stateDesc: "驳回",
        remark: "ok",
        attachments: [
          {
            fileId:
              '{"contextType":"image/png","createdTime":1600497046000,"dataType":"IMAGE","ext":"png","fileName":"shj/202009/11534b42-62d2-48a6-ad7f-4cc1b8328b5c.png","groupName":"C81638577F4F8F38426C8F5863FDBA01","id":1307205473460674561,"isDeleted":0,"path":"5F65A596ECE57C3135E291E4","relativePath":"shj/202009","size":2536,"submittedFileName":"企业微信截图_20200919143031.png","url":"https://dev-shj.oss-cn-chengdu.aliyuncs.com/shj/202009/11534b42-62d2-48a6-ad7f-4cc1b8328b5c.png"}',
            fileName: "企业微信截图_20200919143031.png",
            fileUrl:
              "https://dev-shj.oss-cn-chengdu.aliyuncs.com/shj/202009/11534b42-62d2-48a6-ad7f-4cc1b8328b5c.png",
            fileType: "IMAGE",
            targetRefUrl: null,
          },
        ],
        assigneeUserId: "1",
        assigneeUserName: "admin",
      },
      {
        nodeId: "Task_1qrjxrp",
        nodeName: "发起人",
        createdTime: "2020-09-19 15:06:26",
        taskId: "a21c7563-fa46-11ea-b274-6aad626135af",
        remarkList: [
          {
            createdTime: "2020-09-19 15:07:17",
            remark: "ok",
            type: "approve",
            typeDesc: "审批",
          },
        ],
        nodeDocument: null,
        endTime: "2020-09-19 15:07:18",
        state: "agree",
        stateDesc: "同意",
        remark: "ok",
        attachments: [
          {
            fileId:
              '{"contextType":"image/png","createdTime":1600497046000,"dataType":"IMAGE","ext":"png","fileName":"shj/202009/11534b42-62d2-48a6-ad7f-4cc1b8328b5c.png","groupName":"C81638577F4F8F38426C8F5863FDBA01","id":1307205473460674561,"isDeleted":0,"path":"5F65A596ECE57C3135E291E4","relativePath":"shj/202009","size":2536,"submittedFileName":"企业微信截图_20200919143031.png","url":"https://dev-shj.oss-cn-chengdu.aliyuncs.com/shj/202009/11534b42-62d2-48a6-ad7f-4cc1b8328b5c.png"}',
            fileName: "企业微信截图_20200919143031.png",
            fileUrl:
              "https://dev-shj.oss-cn-chengdu.aliyuncs.com/shj/202009/11534b42-62d2-48a6-ad7f-4cc1b8328b5c.png",
            fileType: "IMAGE",
            targetRefUrl: null,
          },
        ],
        assigneeUserId: "1",
        assigneeUserName: "admin",
      },
      {
        nodeId: "Task_0imeek6",
        nodeName: "同意任务",
        createdTime: "2020-09-19 15:07:18",
        taskId: "c0f04df1-fa46-11ea-b274-6aad626135af",
        remarkList: [
          {
            createdTime: "2020-09-19 15:08:21",
            remark: "ok",
            type: "approve",
            typeDesc: "审批",
          },
        ],
        nodeDocument: "sdfdsfdsfdsfdsf",
        endTime: "2020-09-19 15:08:22",
        state: "reject",
        stateDesc: "驳回",
        remark: "ok",
        attachments: [
          {
            fileId:
              '{"contextType":"image/png","createdTime":1600497046000,"dataType":"IMAGE","ext":"png","fileName":"shj/202009/11534b42-62d2-48a6-ad7f-4cc1b8328b5c.png","groupName":"C81638577F4F8F38426C8F5863FDBA01","id":1307205473460674561,"isDeleted":0,"path":"5F65A596ECE57C3135E291E4","relativePath":"shj/202009","size":2536,"submittedFileName":"企业微信截图_20200919143031.png","url":"https://dev-shj.oss-cn-chengdu.aliyuncs.com/shj/202009/11534b42-62d2-48a6-ad7f-4cc1b8328b5c.png"}',
            fileName: "企业微信截图_20200919143031.png",
            fileUrl:
              "https://dev-shj.oss-cn-chengdu.aliyuncs.com/shj/202009/11534b42-62d2-48a6-ad7f-4cc1b8328b5c.png",
            fileType: "IMAGE",
            targetRefUrl: null,
          },
        ],
        assigneeUserId: "1",
        assigneeUserName: "admin",
      },
      {
        nodeId: "Task_1qrjxrp",
        nodeName: "发起人",
        createdTime: "2020-09-19 15:08:22",
        taskId: "e73de85b-fa46-11ea-b274-6aad626135af",
        remarkList: [
          {
            createdTime: "2020-09-19 15:11:37",
            remark: "ok",
            type: "approve",
            typeDesc: "审批",
          },
        ],
        nodeDocument: null,
        endTime: "2020-09-19 15:11:38",
        state: "reject",
        stateDesc: "驳回",
        remark: "ok",
        attachments: [
          {
            fileId:
              '{"contextType":"image/png","createdTime":1600497046000,"dataType":"IMAGE","ext":"png","fileName":"shj/202009/11534b42-62d2-48a6-ad7f-4cc1b8328b5c.png","groupName":"C81638577F4F8F38426C8F5863FDBA01","id":1307205473460674561,"isDeleted":0,"path":"5F65A596ECE57C3135E291E4","relativePath":"shj/202009","size":2536,"submittedFileName":"企业微信截图_20200919143031.png","url":"https://dev-shj.oss-cn-chengdu.aliyuncs.com/shj/202009/11534b42-62d2-48a6-ad7f-4cc1b8328b5c.png"}',
            fileName: "企业微信截图_20200919143031.png",
            fileUrl:
              "https://dev-shj.oss-cn-chengdu.aliyuncs.com/shj/202009/11534b42-62d2-48a6-ad7f-4cc1b8328b5c.png",
            fileType: "IMAGE",
            targetRefUrl: null,
          },
        ],
        assigneeUserId: "1",
        assigneeUserName: "admin",
      },
    ],
    runTimeTasks: [{ approveFlag: true }],
  },
  successful: true,
  errorPath: null,
  errorSystem: null,
};
