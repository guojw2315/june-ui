
function genConfig (s) {
  let arr = s.split(' ')
  return {
    method: arr[0],
    url: arr[1]
  }
}

let api =  {
  dictList: (parentKey) => `/caas/dict/listByCode/${parentKey}`,

  dictProcessList: () => api.dictList('flowDefine'),

  userList: (keyWord) => `/caas/user/list?keyWord=${keyWord}`,
}



export default api