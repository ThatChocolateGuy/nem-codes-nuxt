<template>
  <div>
    <Navigation v-if="!['index', 'NotFound'].includes($route.name)" />
    <Nuxt />
    <FooterBlock v-if="!['index', 'NotFound'].includes($route.name)" />
    <CircuitBg />
    <GithubCorner />
  </div>
</template>

<script>
import CircuitBg from '@/components/includes/CircuitBg'
import GithubCorner from '@/components/includes/GithubCorner'
import Navigation from '@/components/includes/Navigation'
import FooterBlock from '@/components/includes/FooterBlock'

export default {
  components: {
    CircuitBg,
    GithubCorner,
    Navigation,
    FooterBlock,
  },
}
</script>

<style lang="scss">
body {
  height: 99%;
  padding: 0;
  transition: none;

  #__nuxt,
  #__layout,
  #__layout > div {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
