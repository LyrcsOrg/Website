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
  setup() {
    return {

    }
  },
}
</script>