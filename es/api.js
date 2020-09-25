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
  // 流程分类 枚举
  dictProcessOwnKeys: function dictProcessOwnKeys() {
    return "/caas/osoBpmProcInst/listInterestKeys";
  },
  // 流程分类 枚举
  userList: function userList(keyWord) {
    return "/caas/user/list?keyWord=" + keyWord;
  },
  taskTransfer: function taskTransfer() {
    return "/caas/osoBpmTask/transferTask";
  }
};
export default api;
//# sourceMappingURL=api.js.map