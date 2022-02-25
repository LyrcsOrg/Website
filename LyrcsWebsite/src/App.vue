<template>
  <Navigation></Navigation>
  <router-view></router-view>
  <Footer />
</template>

<script>
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navigation,
    Footer
  },
  watch: { // Update page title
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title + " - Lyrcs" || 'Lyrcs';
      }
    },
  },
  setup() {
    return {

    }
  },
}
</script>