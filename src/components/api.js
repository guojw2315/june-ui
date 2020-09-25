
function genConfig (s) {
  let arr = s.split(' ')
  return {
    method: arr[0],
    url: arr[1]
  }
}

let api =  {
  dictList: (parentKey) => `/caas/dict/listByCode/${parentKey}`, 

  dictProcessList: () => api.dictList('flowDefine'), // 流程分类 枚举

  dictProcessOwnKeys: () => `/caas/osoBpmProcInst/listInterestKeys`, // 流程分类 枚举

  userList: (keyWord) => `/caas/user/list?keyWord=${keyWord}`,

  taskTransfer: () => `/caas/osoBpmTask/transferTask`,
}



export default api