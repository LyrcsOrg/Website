<template>
  <!-- sticky footer: https://stackoverflow.com/a/65599498/4698501 -->
  <div class="flex flex-col h-screen">
    <Navigation />
    <div class="flex-grow">
      <router-view />
    </div>
    <Footer />
  </div>
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