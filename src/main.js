import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from './pages/Home.vue'
import Savings from './pages/Savings.vue'
import Privacy from './pages/Privacy.vue'
import Competitors from './pages/Competitors.vue'
import NotFound from './pages/NotFound.vue'
import Contact from './pages/Contact.vue'
import KeyboardShortcuts from './pages/KeyboardShortcuts.vue'
import FAQ from './pages/FAQ.vue'
import PressKit from './pages/PressKit.vue'

const routeSavings = '/savings'
const routeCompetitors = '/competitors'
const routeKeyboardShortcuts = '/keyboard-shortcuts'
const routeContact = '/contact'
const routeFAQ = '/faq'
const routePrivacy = '/privacy'
const routePressKit = '/press-kit'

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: "Home"
        }
    },
    {
        path: routeSavings,
        component: Savings,
        meta: {
            title: "Savings"
        }

    },
    { 
        path: routePrivacy, 
        component: Privacy,
        meta: {
            title: "Privacy"
        }
    },
    { 
        path: routeCompetitors, 
        component: Competitors,
        meta: {
            title: "Competitors"
        }
    },
    { 
        path: '/:pathMatch(.*)*', 
        component: NotFound,
        meta: {
            title: "Page Not Found"
        }
    },
    {
        path: routeContact,
        component: Contact,
        meta: {
            title: "Contact Us"
        }
    },
    {
        path: routeKeyboardShortcuts,
        component: KeyboardShortcuts,
        meta: {
            title: "Keyboard Shortcuts"
        }
    },
    {
        path: routeFAQ,
        component: FAQ,
        meta: {
            title: "FAQ"
        }
    },
    {
        path: routePressKit,
        component: PressKit,
        meta: {
            title: "Press Kit"
        }
    }
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
app.provide("konstantNavigationSavings", routeSavings)
app.provide("konstantNavigationCompetitors", routeCompetitors)
app.provide("konstantRouteContact", routeContact)
app.provide("konstantContactForm", "https://share-eu1.hsforms.com/15bmb0uVjTHqMEOoRBfhkygf8pdx")
app.provide("konstantRouteKeyboardShortcuts", routeKeyboardShortcuts)
app.provide("konstantRouteFAQ", routeFAQ)
app.provide("konstantRoutePrivacy", routePrivacy)
app.provide("konstantRoutePressKit", routePressKit)

// global prop

// TODO: every time Lyrcs appears, format with custom font.

app.mount('#app')
