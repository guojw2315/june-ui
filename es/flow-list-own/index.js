import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useEffect, useState, useRef } from "react";
import FlowTabs, { TabPane } from "../flow-tabs";
import FlowSearch from "../flow-list-section/flow-search";
import { CommonTable, FlowFullScreen } from "../index";
import "../flow-list/style/index";
import "../flow-list-section/style";
import api from "../api";
export default function FlowList(props) {
  var _this = this;

  var onTabChange = props.onTabChange,
      renderTabs = props.renderTabs,
      renderContent = props.renderContent,
      TableComponent = props.TableComponent,
      TabsComponent = props.TabsComponent,
      request = props.request,
      listApi = props.listApi,
      onLinkClick = props.onLinkClick,
      data = props.data,
      _props$tabProps = props.tabProps,
      tabProps = _props$tabProps === void 0 ? {} : _props$tabProps,
      rest = _objectWithoutPropertiesLoose(props, ["onTabChange", "renderTabs", "renderContent", "TableComponent", "TabsComponent", "request", "listApi", "onLinkClick", "data", "tabProps"]);

  var el = useRef();

  var _useState = useState([]),
      options = _useState[0],
      setOptions = _useState[1]; // 流程分类选项


  var _useState2 = useState({}),
      searchParams = _useState2[0],
      setSearchParams = _useState2[1];

  var _api = function _api(currentPage, pageSize) {
    return {
      url: "/caas/osoBpmProcInst/getInterestProcInstPage/" + currentPage + "/" + pageSize
    };
  };

  useEffect(function () {
    _fetchOptions();

    return function () {};
  }, []);

  var _fetchOptions = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var res;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!request) {
                _context.next = 11;
                break;
              }

              _context.prev = 1;
              _context.next = 4;
              return request({
                method: "POST",
                url: api.dictProcessOwnKeys()
              });

            case 4:
              res = _context.sent;
              setOptions(res.data.data || []);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function _fetchOptions() {
      return _ref.apply(this, arguments);
    };
  }();

  var _onSearch = function _onSearch(values) {
    setSearchParams(values);
  };

  var _renderSearch = function _renderSearch() {
    if (typeof props.renderSearch === "function") return props.renderSearch(props);
    return /*#__PURE__*/React.createElement(FlowSearch, {
      onSearch: _onSearch,
      options: options,
      labelKey: "prodDefDesc",
      valueKey: "prodDefKey"
    });
  };

  var _renderContent = function _renderContent() {
    if (typeof props.renderContent === "function") return props.renderContent(props);
    var column1 = [{
      title: "状态",
      dataIndex: "stateDesc",
      key: "stateDesc",
      width: 100
    }, {
      title: "发起人",
      dataIndex: "createdByName",
      key: "createdByName",
      width: 100
    }, {
      title: "审批节点",
      dataIndex: "currentNodeNames",
      key: "currentNodeNames",
      width: 200
    }, {
      title: "审批人",
      dataIndex: "auditorNames",
      key: "auditorNames",
      width: 200
    }, {
      title: "流程发起时间",
      dataIndex: "procCreateTime",
      key: "procCreateTime",
      width: 200
    }, {
      title: "任务创建时间",
      dataIndex: "currentFirstTaskCreatedTime",
      key: "currentFirstTaskCreatedTime",
      width: 200
    }, {
      title: "结束日期",
      dataIndex: "procEndTime",
      key: "procEndTime",
      width: 200
    }];

    var columns = function columns(col) {
      if (col === void 0) {
        col = [];
      }

      return [{
        title: "流程标题",
        dataIndex: "title",
        key: "title",
        width: 200
      }].concat(col, [{
        title: "操作",
        dataIndex: "",
        key: "operations",
        fixed: "right",
        align: "center",
        width: 80,
        // align: 'right',
        render: function render() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return /*#__PURE__*/React.createElement("a", {
            onClick: onLinkClick === null || onLinkClick === void 0 ? void 0 : onLinkClick.bind.apply(onLinkClick, [_this].concat(args))
          }, "\u67E5\u770B");
        }
      }]);
    };

    return /*#__PURE__*/React.createElement("div", {
      className: "flow-list-main"
    }, /*#__PURE__*/React.createElement(CommonTable, {
      rowKey: "procInstId",
      columns: columns(column1),
      request: request,
      queryParams: searchParams,
      api: function api(_temp) {
        var _ref2 = _temp === void 0 ? {} : _temp,
            page = _ref2.page,
            size = _ref2.size;

        return _api(page, size);
      }
    }));
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "flow-list",
    ref: el
  }, _renderSearch(), _renderContent());
}
//# sourceMappingURL=index.js.map