import { createApp } from 'vue'
import router from './routers'
import 'virtual:windi.css'

import App from './App.vue'

createApp(App).use(router).mount('#app')
