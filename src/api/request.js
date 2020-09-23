// 引入JS后，window下面会有一个$jutil 对象
export const { setPosHeaders } = window.$jutil && window.$jutil || {}

export const request = window.$jutil && window.$jutil.createRequest({
  baseURL: '/api'
}, {
  refreshDisabled: true,
  // 执行验证 token http 请求时被调用
  setHeaders: function (instance) {
    setPosHeaders(instance)
  }
}) || {}

export const { get, post, setToken, instance, refreshToken } = request