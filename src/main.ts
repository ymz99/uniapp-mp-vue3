// noinspection JSUnusedGlobalSymbols

import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import uvUI from '@climblee/uv-ui'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { Request } from '@/service/request'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.uni = uni

  const store = Pinia.createPinia()

  store.use(piniaPluginPersistedstate)

  app.use(store)
  app.use(uvUI)

  Request()

  return {
    app,
    Pinia
  }
}
