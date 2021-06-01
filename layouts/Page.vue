<template>
  <main class="main-container">
    <div :class="!['About'].includes($route.name) ? 'container' : ''">
      <Navigation
        v-if="!['index', 'NotFound'].includes($route.name) && $route.name"
      />
      <Nuxt />
      <FooterBlock
        v-if="!['index', 'NotFound'].includes($route.name) && $route.name"
      />
      <CircuitBg />
    </div>
  </main>
</template>

<script>
import Navigation from '../components/includes/Navigation'
import FooterBlock from '../components/includes/FooterBlock.vue'
import CircuitBg from '../components/includes/CircuitBg.vue'
export default {
  components: {
    Navigation,
    FooterBlock,
    CircuitBg,
  },
  layout: 'default',
}
</script>

<style lang="scss" scoped>
.main-container {
  background: #f7f7f782;
  padding: 0;
  @media screen and (max-width: 768px) {
    padding-top: calc(80px + 1.5em);
  }
}
</style>
