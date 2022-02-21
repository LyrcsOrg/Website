import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Support from './pages/Support.vue'
import Savings from './pages/Savings.vue'
import Privacy from './pages/Privacy.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/support', component: Support },
    { path: '/savings', component: Savings },
    { path: '/privacy', component: Privacy },
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

app.provide("konstantStatsMinutes", "37:23")
app.provide("konstantStatsMemory", "210 MB")
app.provide("konstantStatsRelationships", "1+")
app.provide("konstantEmail", "hi@lyrcs.app")
app.provide("konstantAppStoreURL", "https://apps.apple.com/app/apple-store/id1599888045?pt=117831961&ct=website&mt=8")
// global prop
// appstoreconnect campaign url for all download buttons

// TODO: every time Lyrcs appears, format with custom font.

app.mount('#app')
