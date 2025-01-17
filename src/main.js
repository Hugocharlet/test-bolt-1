import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import App from './App.vue'
import router from './router'
import './style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')