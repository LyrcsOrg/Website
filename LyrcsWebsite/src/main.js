import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Support from './pages/Support.vue'
import Savings from './pages/Savings.vue'
import Privacy from './pages/Privacy.vue'
import Competitors from './pages/Competitors.vue'
import NotFound from './pages/NotFound.vue'

const routeSupport = '/support'

const routes = [
    { path: '/', component: Home },
    { path: routeSupport, component: Support },
    { path: '/savings', component: Savings },
    { path: '/privacy', component: Privacy },
    { path: '/competitors', component: Competitors },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
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
app.provide("konstantEmail", "support@lyrcs.app")
app.provide("konstantAppStoreURL", "https://apps.apple.com/app/apple-store/id1599888045?pt=117831961&ct=website&mt=8")
app.provide("konstantNavigationSupport", routeSupport)
app.provide("konstantContactForm", "https://share-eu1.hsforms.com/15bmb0uVjTHqMEOoRBfhkygf8pdx")
// global prop

// TODO: every time Lyrcs appears, format with custom font.

app.mount('#app')
