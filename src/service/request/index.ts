// noinspection JSUnresolvedReference

import config from './config'

console.log('config', config)
// 引入请求拦截
import { requestInterceptors } from './requestInterceptors'

// 引入响应拦截
import { responseInterceptors } from './responseInterceptors'
// 初始化请求配置

export const Request = () => {
  uni.$uv.http.setConfig((defaultConfig: any) => {
    /* defaultConfig 为默认全局配置 */
    defaultConfig.baseURL = config.baseUrl /* 根域名 */
    return defaultConfig
  })
  requestInterceptors()
  responseInterceptors()
}
