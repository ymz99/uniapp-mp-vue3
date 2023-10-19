// noinspection JSUnresolvedReference

/**
 * 请求拦截
 */
export const requestInterceptors = () => {
  uni.$uv.http.interceptors.request.use(
    (config: any) => {
      // 可使用async await 做异步操作
      // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
      config.data = config.data || {}
      return config
    },
    (
      config: any // 可使用async await 做异步操作
    ) => Promise.reject(config)
  )
}
