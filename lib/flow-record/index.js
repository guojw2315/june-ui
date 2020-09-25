"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = FlowRecord;

var _react = _interopRequireWildcard(require("react"));

function FlowRecord(_temp) {
  var _data$historyTasks;

  var _ref = _temp === void 0 ? props : _temp,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data;

  (0, _react.useEffect)(function () {
    if (data) {// console.log("flow record", data);
    }

    return function () {};
  }, [data]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flow-record"
  }, data === null || data === void 0 ? void 0 : (_data$historyTasks = data.historyTasks) === null || _data$historyTasks === void 0 ? void 0 : _data$historyTasks.map(function (d, i) {
    var _d$createdTime, _d$createdTime$split;

    return /*#__PURE__*/_react["default"].createElement("div", {
      key: i,
      className: "flow-record-item"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-record-item-label"
    }, (_d$createdTime = d.createdTime) === null || _d$createdTime === void 0 ? void 0 : (_d$createdTime$split = _d$createdTime.split(" ")) === null || _d$createdTime$split === void 0 ? void 0 : _d$createdTime$split.map(function (timeStr, j) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "flow-record-item-text",
        key: j
      }, timeStr);
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-record-item-mark"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-mark-circle"
    })), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-record-item-content"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-item-content-title"
    }, d.nodeName), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-item-content-row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-item-row-label"
    }, "\u610F\u89C1\uFF1A"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-item-row-val"
    }, d.stateDesc)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-item-content-row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-item-row-label"
    }, "\u5907\u6CE8\uFF1A"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-item-row-val"
    }, d.remark)), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-item-content-row"
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-item-row-label"
    }, "\u9644\u4EF6\uFF1A"), /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-item-row-attachments"
    }, d.attachments && d.attachments.map(function (attachment, j) {
      switch (attachment.fileType) {
        case "IMAGE":
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: j,
            className: "flow-attachments-image"
          }, /*#__PURE__*/_react["default"].createElement("img", {
            src: attachment.fileUrl // src={'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2456468987,3284231714&fm=26&gp=0.jpg'}
            ,
            alt: ""
          }));

        default:
          return /*#__PURE__*/_react["default"].createElement("div", {
            key: j,
            className: "flow-attachments-link"
          }, /*#__PURE__*/_react["default"].createElement("a", {
            href: attachment.fileUrl,
            target: "_blank"
          }, attachment.fileName));
      }
    })))));
  }));
}
//# sourceMappingURL=index.js.map