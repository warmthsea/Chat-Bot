import { createApp } from 'vue'
import './tailwind.css'
import './style.css'

import App from './App.vue'
import router from './router'

import './samples/node-api'

const app = createApp(App)

app.use(router)
app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
