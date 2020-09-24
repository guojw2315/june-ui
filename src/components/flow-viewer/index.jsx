import React, { useEffect } from "react";
import BpmnViewer from "bpmn-js/lib/NavigatedViewer";

async function _loadBpmnDemo(id, dataForm) {
  let container = document.getElementById(id);
  if (!container) return;
  container.innerHTML = "";
  let viewer = new BpmnViewer({
    container: `#${id}`,
    height: "500px",
  });
  let diagramXML = dataForm.xml || "";

  try {
    const result = await viewer.importXML(diagramXML);
    const { warnings } = result;

    // access viewer components
    let overlays = viewer.get("overlays");
    let canvas = viewer.get("canvas");

    // zoom to fit full viewport
    canvas.zoom("fit-viewport");

    // attach an overlay to a node
    overlays.add("SCAN_OK", "note", {
      position: {
        bottom: 0,
        right: 0,
      },
      html: '<div class="diagram-note">Mixed up the labels?</div>',
    });

    // add marker
    canvas.addMarker("SCAN_OK", "needs-discussion");
  } catch (err) {
    console.log(err.message, err.warnings);
  }
}

export async function loadFlowChar(id, data) {
  let jsCanvas = document.getElementById(id);
  if (!jsCanvas || !data.flowXml) return;
  jsCanvas.innerHTML = "";
  let viewer = new BpmnViewer({
    container: `#${id}`,
    height: "600px",
  });
  let diagramXML = data.flowXml || "";

  try {
    const result = await viewer.importXML(diagramXML);
    const { warnings } = result;
    let overlays = viewer.get("overlays");
    let canvas = viewer.get("canvas");

    // zoom to fit full viewport
    canvas.zoom("fit-viewport");

    let historyNodeList = data?.historyNodeId?.split(",") || [];

    const { historyTasks = [], runTimeTasks = [] } = data;

    // 历史任务 置灰
    for (let item of historyTasks) {
      if (item.state === 'reject') {
        canvas.addMarker(item.nodeId, "errorHighlight");
      } else {
        canvas.addMarker(item.nodeId, "endHighlight");
      }
      bindOverlays.call(
        overlays,
        item.nodeId,
        genarateHtml(historyTasks, item.nodeId)
      );
    }

    //当前节点 高亮
    for (let item of runTimeTasks) {
      canvas.addMarker(item.nodeId, "highlight");
      bindOverlays.call(
        overlays,
        item.nodeId,
        genarateHtml(runTimeTasks, item.nodeId)
      );
    }

    // 驳回节点 标红
    // let rejectNodeList = data?.rejectNodeId
    //   ? data?.rejectNodeId.split(",")
    //   : [];

    // for (let i = 0; i < rejectNodeList.length; i++) {
    //   canvas.addMarker(rejectNodeList[i], "errorHighlight");
    // }
  } catch (err) {
    console.log(err.message, err.warnings);
  }
}

function genarateHtml(tasks, id) {
  let content = [];
  for (let d of tasks) {
    if (d.nodeId === id) {
      content.push(`<div class="note-card">
        <p>执行人：${d?.assigneeUserName || d?.userNames || ""}</p>
        <p>开始时间：${d?.createdTime || ""}</p>
        ${d?.endTime ? `<p>结束时间：${d?.endTime}</p>` : ``}
        ${d?.stateDesc ? `<p>意见：${d?.stateDesc}</p>` : ``}
      </div>`);
    }
  }
  return `<div class="diagram-note">${content.join("")}</div>`;
}

function addOverlays(
  id,
  html = `<div class="diagram-note">Mixed up the labels?</div>`
) {
  return this.add(id, {
    position: {
      bottom: 0,
      right: 0,
    },
    scale: false,
    html: html,
  });
}

// this -> overlays （节省一个参数）
function bindOverlays(id, html) {
  let overlayId; // 闭包引用 - 鼠标离开时使用
  bindEvent(id, "onmouseenter", () => {
    overlayId = addOverlays.call(this, id, html);
  });
  bindEvent(id, "onmouseleave", () => {
    this.remove(overlayId);
    overlayId = undefined;
  });
}

function bindEvent(id, event, listener) {
  let elmt = document.querySelector(`[data-element-id=${id}]`);
  elmt[event] = listener;
}

function FlowViewer({ data } = props) {
  useEffect(() => {
    // loadBpmnDemo('flow_container', { xml: xmlDemo });
    // console.log(data)
    if (data) {
      loadFlowChar("flow_container", data);
    }

    return () => {};
  }, [data]);

  return (
    <div className="flow-viewer">
      <div id="flow_container"></div>
    </div>
  );
}

export default FlowViewer