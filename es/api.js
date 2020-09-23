function genConfig(s) {
  var arr = s.split(' ');
  return {
    method: arr[0],
    url: arr[1]
  };
}

var api = {
  dictList: function dictList(parentKey) {
    return "/caas/dict/listByCode/" + parentKey;
  },
  dictProcessList: function dictProcessList() {
    return api.dictList('flowDefine');
  },
  userList: function userList(keyWord) {
    return "/caas/user/list?keyWord=" + keyWord;
  }
};
export default api;
//# sourceMappingURL=api.js.map