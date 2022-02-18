<template>
    <Navigation class="z-50"></Navigation>
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/faq">FAQ</router-link> -->
    <router-view></router-view>
    <!-- <Hero />
    <MainFeatures />
    <Stats />
    <FeatureList />
    <ComingSoonApps />
    <CTA />
    <Footer /> -->
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  setup() {
    return {
        
    }
  },
}
</script>