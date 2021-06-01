<template>
  <footer class="site-footer">
    <div class="container">
      <SocialBlock />
      <p class="txt-medium-gray">
        <small
          >&copy;{{ new Date().getFullYear() }} All rights reserved. Made with
          <a href="https://v3.vuejs.org/" target="_blank">Vue 3</a> and
          <span style="color: red">♥</span>
        </small>
      </p>
    </div>
  </footer>
</template>

<script>
import SocialBlock from '@/components/includes/Social'

export default {
  components: { SocialBlock },
}
</script>

<style scoped>
.site-footer {
  background-color: rgb(255 255 255 / 60%);
}
</style>
