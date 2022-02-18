<template>
    <Navigation></Navigation>
    <router-view></router-view>
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