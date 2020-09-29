"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = FlowList;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

require("antd/es/form/style/css");

var _form = _interopRequireDefault(require("antd/es/form"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _flowTabs = _interopRequireWildcard(require("../flow-tabs"));

var _flowSearch = _interopRequireDefault(require("../flow-list-section/flow-search"));

var _index = require("../index");

require("./style/index");

require("../flow-list-section/style");

var _api = _interopRequireDefault(require("../api"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function FlowList(props) {
  var _tabs$current$,
      _this = this;

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
      rest = (0, _objectWithoutPropertiesLoose2["default"])(props, ["onTabChange", "renderTabs", "renderContent", "TableComponent", "TabsComponent", "request", "listApi", "onLinkClick", "data", "tabProps"]);

  var _listApi = (0, _react.useRef)({
    all: function all(currentPage, pageSize) {
      return {
        url: "/caas/osoBpmProcInst/completedProcPersonPage/" + currentPage + "/" + pageSize
      };
    },
    wait: function wait(currentPage, pageSize) {
      return {
        url: "/caas/osoBpmTask/waitTaskPage/" + currentPage + "/" + pageSize
      };
    },
    accept: function accept(currentPage, pageSize) {
      return {
        url: "/caas/osoBpmTask/completedTaskPage/" + currentPage + "/" + pageSize
      };
    },
    done: function done(currentPage, pageSize) {
      return {
        url: "/caas/osoBpmProcInst/completedProcPersonPage/" + currentPage + "/" + pageSize,
        finishFlag: true
      };
    } // finishFlag: true

  });

  var tabs = (0, _react.useRef)([// { name: "全部", key: "all", total: 0, value: 0 },
  {
    name: "待审批",
    key: "wait",
    total: 0
  }, {
    name: "已审批",
    key: "accept",
    total: 0
  } // { name: "已完结", key: "done", total: 0 },
  ]);
  var el = (0, _react.useRef)();

  var _Form$useForm = _form["default"].useForm(),
      form = _Form$useForm[0];

  var _useState = (0, _react.useState)(tabs === null || tabs === void 0 ? void 0 : (_tabs$current$ = tabs.current[0]) === null || _tabs$current$ === void 0 ? void 0 : _tabs$current$.key),
      active = _useState[0],
      setAcitve = _useState[1];

  var _useState2 = (0, _react.useState)([]),
      options = _useState2[0],
      setOptions = _useState2[1]; // 流程分类选项


  var _useState3 = (0, _react.useState)({}),
      searchParams = _useState3[0],
      setSearchParams = _useState3[1];

  var _useState4 = (0, _react.useState)("procInstId"),
      rowKey = _useState4[0],
      setRowKey = _useState4[1];

  var _useState5 = (0, _react.useState)(""),
      setUpdate = _useState5[1];

  (0, _react.useEffect)(function () {
    _fetchOptions();

    return function () {};
  }, []);

  var _onTabChange = /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(key) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setAcitve(key);
              setSearchParams(_objectSpread({}, searchParams));
              if (typeof onTabChange === "function") onTabChange(key);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _onTabChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var _fetchOptions = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      var res;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!request) {
                _context2.next = 11;
                break;
              }

              _context2.prev = 1;
              _context2.next = 4;
              return request({
                method: "GET",
                url: _api["default"].dictProcessList()
              });

            case 4:
              res = _context2.sent;
              setOptions(res.data.data || []);
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](1);
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 8]]);
    }));

    return function _fetchOptions() {
      return _ref2.apply(this, arguments);
    };
  }();

  var _afterFetchData = function _afterFetchData(_temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        total = _ref3.total,
        records = _ref3.records;

    var tab = tabs.current.find(function (d) {
      return d.key === active;
    });

    if (tab) {
      tab.total = total;
    } // 设置全部 未审批数量


    if (active === "wait") {
      tabs.current[0].value = total;
    }

    setRowKey(/^wait$|^accept$/g.test(active) ? "taskId" : "procInstId");
    setUpdate(new Date().getTime());
  };

  var _onSearch = function _onSearch(values) {
    setSearchParams(values);
  };

  var _renderTabs = function _renderTabs() {
    var _tabs$current;

    if (typeof props.renderTabs === "function") return props.renderTabs(props);
    var Tabs = TabsComponent || _flowTabs["default"];
    return /*#__PURE__*/_react["default"].createElement(Tabs, (0, _extends2["default"])({
      defaultActiveKey: active,
      onChange: _onTabChange,
      tabBarExtraContent: /*#__PURE__*/_react["default"].createElement(_index.FlowFullScreen, {
        el: el
      })
    }, tabProps), (_tabs$current = tabs.current) === null || _tabs$current === void 0 ? void 0 : _tabs$current.map(function (d) {
      return /*#__PURE__*/_react["default"].createElement(_flowTabs.TabPane, {
        tab: d.name + "\uFF08" + (d.value ? d.value + "/" : "") + d.total + "\uFF09",
        key: d.key
      });
    }));
  };

  var _renderSearch = function _renderSearch() {
    if (typeof props.renderSearch === "function") return props.renderSearch(props);
    return /*#__PURE__*/_react["default"].createElement(_flowSearch["default"], {
      onSearch: _onSearch,
      options: options
    });
  };

  var _renderContent = function _renderContent() {
    if (typeof props.renderContent === "function") return props.renderContent(props); // const column1 = [
    //   {
    //     title: "状态",
    //     dataIndex: "stateDesc",
    //     key: "stateDesc",
    //     width: 100,
    //   },
    //   {
    //     title: "发起人",
    //     dataIndex: "createdBy",
    //     key: "createdBy",
    //     width: 100,
    //   },
    //   {
    //     title: "审批节点",
    //     dataIndex: "currentNodeNames",
    //     key: "currentNodeNames",
    //     width: 200,
    //   },
    //   {
    //     title: "审批人",
    //     dataIndex: "auditorNames",
    //     key: "auditorNames",
    //     width: 200,
    //   },
    //   {
    //     title: "流程发起时间",
    //     dataIndex: "procCreateTime",
    //     key: "procCreateTime",
    //     width: 200,
    //   },
    //   {
    //     title: "任务创建时间",
    //     dataIndex: "currentFirstTaskCreatedTime",
    //     key: "currentFirstTaskCreatedTime",
    //     width: 200,
    //   },
    //   {
    //     title: "结束日期",
    //     dataIndex: "procEndTime",
    //     key: "procEndTime",
    //     width: 200,
    //   },
    // ];

    var column2 = [{
      title: "审批人",
      dataIndex: "auditorUserNames",
      key: "auditorUserNames",
      width: 110
    }, {
      title: "流程创建日期",
      dataIndex: "procCreateTime",
      key: "procCreateTime",
      width: 200
    }, {
      title: "任务创建日期",
      dataIndex: "taskCreateTime",
      key: "taskCreateTime",
      width: 200
    }];
    var column3 = [{
      title: "审批人",
      dataIndex: "auditorNames",
      key: "auditorNames",
      width: 110
    }, {
      title: "流程创建日期",
      dataIndex: "procCreateTime",
      key: "procCreateTime",
      width: 200
    }, {
      title: "任务创建日期",
      dataIndex: "taskCreateTime",
      key: "taskCreateTime",
      width: 200
    }, {
      title: "流程结束日期",
      dataIndex: "procEndDate",
      key: "procEndDate",
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
      }, {
        title: "创建人",
        dataIndex: "createdByName",
        key: "createdByName",
        width: 110
      }, {
        title: "审批节点",
        dataIndex: "taskName",
        key: "taskName",
        width: 180
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

          return /*#__PURE__*/_react["default"].createElement("a", {
            onClick: onLinkClick === null || onLinkClick === void 0 ? void 0 : onLinkClick.bind.apply(onLinkClick, [_this].concat(args))
          }, "\u67E5\u770B");
        }
      }]);
    };

    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "flow-list-main"
    }, active === "wait" ? /*#__PURE__*/_react["default"].createElement(_index.CommonTable, {
      rowKey: "taskId",
      columns: columns(column2),
      request: request,
      queryParams: searchParams,
      api: function api(_temp2) {
        var _ref4 = _temp2 === void 0 ? {} : _temp2,
            page = _ref4.page,
            size = _ref4.size;

        return _listApi.current[active](page, size);
      },
      afterFetchData: _afterFetchData
    }) : null, active === "accept" ? /*#__PURE__*/_react["default"].createElement(_index.CommonTable, {
      rowKey: "taskId",
      columns: columns(column3),
      request: request,
      queryParams: searchParams,
      api: function api(_temp3) {
        var _ref5 = _temp3 === void 0 ? {} : _temp3,
            page = _ref5.page,
            size = _ref5.size;

        return _listApi.current[active](page, size);
      },
      afterFetchData: _afterFetchData
    }) : null);
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flow-list",
    ref: el
  }, _renderTabs(), _renderSearch(), _renderContent());
}
//# sourceMappingURL=index.js.map