import "antd/es/table/style/css";
import _Table from "antd/es/table";
import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useEffect, useState, useRef } from "react";
import _debounce from "lodash.debounce";
export default function CommonTable(props) {
  var api = props.api,
      request = props.request,
      afterFetchData = props.afterFetchData,
      _props$queryParams = props.queryParams,
      queryParams = _props$queryParams === void 0 ? {} : _props$queryParams,
      rest = _objectWithoutPropertiesLoose(props, ["api", "request", "afterFetchData", "queryParams"]);

  var _useState = useState(false),
      loading = _useState[0],
      setLoading = _useState[1];

  var _useState2 = useState(1),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = useState(10),
      pageSize = _useState3[0],
      setPageSize = _useState3[1];

  var _useState4 = useState([]),
      dataSource = _useState4[0],
      setDataSource = _useState4[1];

  var _useState5 = useState(0),
      total = _useState5[0],
      setTotal = _useState5[1]; // useEffect(() => {
  //   _fetchData();
  //   return () => {};
  // }, []);


  useEffect(function () {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  }, [queryParams]);
  useEffect(function () {
    _fetchData(queryParams, currentPage, pageSize);

    return function () {};
  }, [queryParams, currentPage, pageSize]);

  var _fetchData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(params, page, size) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (params === void 0) {
                params = queryParams;
              }

              if (page === void 0) {
                page = currentPage;
              }

              if (size === void 0) {
                size = pageSize;
              }

              if (!request) {
                _context.next = 7;
                break;
              }

              setLoading(true);
              _context.next = 7;
              return _debRequest(params, page, size);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function _fetchData(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  var _debRequest = _debounce( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(params, page, size) {
      var _res$data, _res$data2, _url, _other, _api, url, other, res, _ref3, _ref3$records, records, _ref3$total, _total;

      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;

              // console.log('api:', api)
              if (typeof api === "function") {
                _api = api({
                  page: page,
                  size: size
                }), url = _api.url, other = _objectWithoutPropertiesLoose(_api, ["url"]);
                _url = url;
                _other = other;
              } else {
                _url = api;
              } // return console.log(_url)


              _context2.next = 4;
              return request({
                method: "POST",
                url: _url,
                data: _objectSpread(_objectSpread({}, queryParams), _other)
              });

            case 4:
              res = _context2.sent;
              _ref3 = (res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.data) || {}, _ref3$records = _ref3.records, records = _ref3$records === void 0 ? [] : _ref3$records, _ref3$total = _ref3.total, _total = _ref3$total === void 0 ? 0 : _ref3$total;
              setDataSource(records);
              setTotal(_total);
              setLoading(false);
              afterFetchData && afterFetchData(res === null || res === void 0 ? void 0 : (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.data);
              _context2.next = 16;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](0);
              setLoading(false);
              console.log("flow-list fetch failed;", _context2.t0);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 12]]);
    }));

    return function (_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }(), 300);

  var _onPageChange = function _onPageChange(page, pageSize) {
    setCurrentPage(page);
    setPageSize(pageSize);
  }; // console.log(dataSource, rest.rowKey)


  var tableProps = {
    loading: loading,
    dataSource: dataSource,
    pagination: {
      current: currentPage,
      total: total,
      pageSize: pageSize,
      onChange: _onPageChange,
      onShowSizeChange: _onPageChange
    }
  };
  return props.render ? props.render(_objectSpread({}, tableProps)) : /*#__PURE__*/React.createElement(_Table, _extends({}, tableProps, rest));
}
//# sourceMappingURL=index.js.map