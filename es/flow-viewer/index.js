import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React, { useEffect } from "react";
import BpmnViewer from "bpmn-js/lib/NavigatedViewer";

function _loadBpmnDemo(_x, _x2) {
  return _loadBpmnDemo2.apply(this, arguments);
}

function _loadBpmnDemo2() {
  _loadBpmnDemo2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(id, dataForm) {
    var container, viewer, diagramXML, result, warnings, overlays, canvas;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            container = document.getElementById(id);

            if (container) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return");

          case 3:
            container.innerHTML = "";
            viewer = new BpmnViewer({
              container: "#" + id,
              height: "500px"
            });
            diagramXML = dataForm.xml || "";
            _context.prev = 6;
            _context.next = 9;
            return viewer.importXML(diagramXML);

          case 9:
            result = _context.sent;
            warnings = result.warnings; // access viewer components

            overlays = viewer.get("overlays");
            canvas = viewer.get("canvas"); // zoom to fit full viewport

            canvas.zoom("fit-viewport"); // attach an overlay to a node

            overlays.add("SCAN_OK", "note", {
              position: {
                bottom: 0,
                right: 0
              },
              html: '<div class="diagram-note">Mixed up the labels?</div>'
            }); // add marker

            canvas.addMarker("SCAN_OK", "needs-discussion");
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](6);
            console.log(_context.t0.message, _context.t0.warnings);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 18]]);
  }));
  return _loadBpmnDemo2.apply(this, arguments);
}

export function loadFlowChar(_x3, _x4) {
  return _loadFlowChar.apply(this, arguments);
}

function _loadFlowChar() {
  _loadFlowChar = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(id, data) {
    var jsCanvas, viewer, diagramXML, _data$historyNodeId, result, warnings, overlays, canvas, historyNodeList, _data$historyTasks, historyTasks, _data$runTimeTasks, runTimeTasks, _iterator2, _step2, item, _iterator3, _step3, _item;

    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            jsCanvas = document.getElementById(id);

            if (!(!jsCanvas || !data.flowXml)) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return");

          case 3:
            jsCanvas.innerHTML = "";
            viewer = new BpmnViewer({
              container: "#" + id,
              height: "600px"
            });
            diagramXML = data.flowXml || "";
            _context2.prev = 6;
            _context2.next = 9;
            return viewer.importXML(diagramXML);

          case 9:
            result = _context2.sent;
            warnings = result.warnings;
            overlays = viewer.get("overlays");
            canvas = viewer.get("canvas"); // zoom to fit full viewport

            canvas.zoom("fit-viewport");
            historyNodeList = (data === null || data === void 0 ? void 0 : (_data$historyNodeId = data.historyNodeId) === null || _data$historyNodeId === void 0 ? void 0 : _data$historyNodeId.split(",")) || [];
            _data$historyTasks = data.historyTasks, historyTasks = _data$historyTasks === void 0 ? [] : _data$historyTasks, _data$runTimeTasks = data.runTimeTasks, runTimeTasks = _data$runTimeTasks === void 0 ? [] : _data$runTimeTasks; // 历史任务 置灰

            for (_iterator2 = _createForOfIteratorHelperLoose(historyTasks); !(_step2 = _iterator2()).done;) {
              item = _step2.value;
              canvas.addMarker(item.nodeId, "endHighlight");
              bindOverlays.call(overlays, item.nodeId, genarateHtml(historyTasks, item.nodeId));
            } //当前节点 高亮


            for (_iterator3 = _createForOfIteratorHelperLoose(runTimeTasks); !(_step3 = _iterator3()).done;) {
              _item = _step3.value;
              canvas.addMarker(_item.nodeId, "highlight");
              bindOverlays.call(overlays, _item.nodeId, genarateHtml(runTimeTasks, _item.nodeId));
            } // 驳回节点 标红
            // let rejectNodeList = data?.rejectNodeId
            //   ? data?.rejectNodeId.split(",")
            //   : [];
            // for (let i = 0; i < rejectNodeList.length; i++) {
            //   canvas.addMarker(rejectNodeList[i], "errorHighlight");
            // }


            _context2.next = 23;
            break;

          case 20:
            _context2.prev = 20;
            _context2.t0 = _context2["catch"](6);
            console.log(_context2.t0.message, _context2.t0.warnings);

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 20]]);
  }));
  return _loadFlowChar.apply(this, arguments);
}

function genarateHtml(tasks, id) {
  var content = [];

  for (var _iterator = _createForOfIteratorHelperLoose(tasks), _step; !(_step = _iterator()).done;) {
    var d = _step.value;

    if (d.nodeId === id) {
      content.push("<div class=\"note-card\">\n        <p>\u6267\u884C\u4EBA\uFF1A" + ((d === null || d === void 0 ? void 0 : d.assigneeUserName) || "") + "</p>\n        <p>\u5F00\u59CB\u65F6\u95F4\uFF1A" + ((d === null || d === void 0 ? void 0 : d.createdTime) || "") + "</p>\n        <p>\u7ED3\u675F\u65F6\u95F4\uFF1A" + ((d === null || d === void 0 ? void 0 : d.endTime) || "") + "</p>\n        <p>\u610F\u89C1\uFF1A" + ((d === null || d === void 0 ? void 0 : d.stateDesc) || "") + "</p>\n      </div>");
    }
  }

  return "<div class=\"diagram-note\">" + content.join("") + "</div>";
}

function addOverlays(id, html) {
  if (html === void 0) {
    html = "<div class=\"diagram-note\">Mixed up the labels?</div>";
  }

  return this.add(id, {
    position: {
      bottom: 0,
      right: 0
    },
    scale: false,
    html: html
  });
} // this -> overlays （节省一个参数）


function bindOverlays(id, html) {
  var _this = this;

  var overlayId; // 闭包引用 - 鼠标离开时使用

  bindEvent(id, "onmouseenter", function () {
    overlayId = addOverlays.call(_this, id, html);
  });
  bindEvent(id, "onmouseleave", function () {
    _this.remove(overlayId);

    overlayId = undefined;
  });
}

function bindEvent(id, event, listener) {
  var elmt = document.querySelector("[data-element-id=" + id + "]");
  elmt[event] = listener;
}

function FlowViewer(_temp) {
  var _ref = _temp === void 0 ? props : _temp,
      data = _ref.data;

  useEffect(function () {
    // loadBpmnDemo('flow_container', { xml: xmlDemo });
    // console.log(data)
    if (data) {
      loadFlowChar("flow_container", data);
    }

    return function () {};
  }, [data]);
  return /*#__PURE__*/React.createElement("div", {
    className: "flow-viewer"
  }, /*#__PURE__*/React.createElement("div", {
    id: "flow_container"
  }));
}

export default FlowViewer;
//# sourceMappingURL=index.js.map