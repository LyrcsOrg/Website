import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Support from './pages/Support.vue'
import Savings from './pages/Savings.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/support', component: Support },
    { path: '/savings', component: Savings }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
    scrollBehavior(to, from, savedPosition) { // https://router.vuejs.org/guide/advanced/scroll-behavior.html
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
})

const app = createApp(App)

app.use(router)

app.mount('#app')
