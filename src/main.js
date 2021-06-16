import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/reset.scss' // reset css
createApp(App).use(ElementPlus).mount('#app')
