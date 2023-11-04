// Components
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
// Composables
import { createApp } from 'vue'
import router from './router'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import veProgress from "vue-ellipse-progress";

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.use(ElementPlus)

registerPlugins(app)
app.use(router)
app.use(veProgress)
app.mount('#app')
