<template>
  <div>
    <Nav />
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  setup() {
    components: { Nav }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/main.scss';
</style>
