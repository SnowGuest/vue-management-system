import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'virtual:uno.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App);
app.use(createPinia())
app.use(router)
/**
 * PS:这里为什么全局注册？
 * 答：预加载防止出现方块图标 所以这里全局预加载
 */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}



app.mount('#root')
