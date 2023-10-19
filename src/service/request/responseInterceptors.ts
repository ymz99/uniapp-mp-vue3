// noinspection JSUnresolvedReference

/**
 * 响应拦截
 */
export const responseInterceptors = () => {
  uni.$uv.http.interceptors.response.use(
    (response: any) => {
      /* 对响应成功做点什么 可使用async await 做异步操作*/
      return response.data
    },
    (response: any) => {
      /*  对响应错误做点什么 （statusCode !== 200）*/
      return Promise.reject(response)
    }
  )
}
