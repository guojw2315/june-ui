"use strict";

exports.__esModule = true;
exports["default"] = void 0;

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
var _default = api;
exports["default"] = _default;
//# sourceMappingURL=api.js.map