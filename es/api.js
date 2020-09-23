function genConfig(s) {
  var arr = s.split(' ');
  return {
    method: arr[0],
    url: arr[1]
  };
}

var api = {
  dictList: function dictList(parentKey) {
    return genConfig("GET /caas/dict/listByCode/" + parentKey);
  },
  dictProcessList: function dictProcessList() {
    return api.dictList('flowDefine');
  }
};
export default api;
//# sourceMappingURL=api.js.map