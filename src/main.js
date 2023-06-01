import { createApp } from 'vue'
import routes from './routes'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import "../public/registerServiceWorker";


const router = createRouter({
    history: createWebHistory(),
    routes
})
  
const app = createApp(App)

app.use(router)

app.mount('#app')

