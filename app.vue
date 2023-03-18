<template>
  <div>
    <Nav />
    <Header :workRref="workRef" />
    <About />
    <ShowCase :workRef="workRef" />
    <Contact />
    <Footer />
  </div>
</template>

<script lang="ts">
import { ref, Ref } from 'vue'
export default {
  setup() {
    const workRef: Ref<null | HTMLElement> = ref(null)

    return {
      workRef
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
