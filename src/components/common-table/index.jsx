import React, { useEffect, useState, useRef } from "react";

import { Table } from "antd";
import _debounce from "lodash.debounce";
export default function CommonTable(props) {
  const { api, request, afterFetchData, queryParams = {}, ...rest } = props;

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [dataSource, setDataSource] = useState([]);
  const [total, setTotal] = useState(0);

  // useEffect(() => {
  //   _fetchData();
  //   return () => {};
  // }, []);
  
  useEffect(() => {
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  }, [queryParams]);

  useEffect(() => {
    _fetchData(queryParams, currentPage, pageSize);
    return () => {};
  }, [queryParams, currentPage, pageSize]);

  const _fetchData = async (
    params = queryParams,
    page = currentPage,
    size = pageSize
  ) => {
    if (request) {
      setLoading(true);
      await _debRequest(params, page, size);
    }
  };

  const _debRequest = _debounce(async (params, page, size) => {
    try {
      let _url;
      let _other;
      // console.log('api:', api)
      if (typeof api === "function") {
        let { url, ...other } = api({ page, size });
        _url = url;
        _other = other;
      } else {
        _url = api;
      }
      // return console.log(_url)
      let res = await request({
        method: "POST",
        url: _url,
        data: { ...queryParams, ..._other },
      });

      const { records = [], total = 0 } = res?.data?.data || {};
      setDataSource(records);
      setTotal(total);
      setLoading(false);
      afterFetchData && afterFetchData(res?.data?.data);
    } catch (e) {
      setLoading(false);
      console.log("flow-list fetch failed;", e);
    }
  }, 300);

  const _onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  // console.log(dataSource, rest.rowKey)

  const tableProps = {
    loading,
    dataSource,
    pagination: {
      current: currentPage,
      total,
      pageSize,
      onChange: _onPageChange,
      onShowSizeChange: _onPageChange,
    }
  }

  return props.render ? props.render({...tableProps}) : (
    <Table
      {...tableProps}
      {...rest}
    />
  );
}
