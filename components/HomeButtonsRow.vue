<template>
  <div>
    <span v-for="item in Navbar" :key="item.slug">
      <router-link
        :to="item.url"
        class="button button-ghost"
        :title="item.slug"
      >
        {{ item.slug }}
      </router-link>
    </span>
  </div>
</template>

<script>
import config from '../assets/config'

export default {
  data() {
    return {
      Navbar: config.navbar,
    }
  },
}
</script>

<style scoped>
.button-ghost {
  margin: 3px;
}
</style>
