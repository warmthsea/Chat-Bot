import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import './tailwind.css'
import './style.scss'

import App from './App.vue'
import router from './router'

import './samples/node-api'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(router).use(pinia)
app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
