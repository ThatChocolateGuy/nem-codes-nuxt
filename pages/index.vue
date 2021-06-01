<template>
  <section class="hero">
    <div class="hero-inner">
      <div class="container">
        <img src="../assets/images/author.png" alt="author thumb" class="dot" />
        <h1>
          <small
            ><em><strong>nem</strong></em
            >.codes</small
          >
        </h1>
        <h3>
          I'm <strong itemprop="name">{{ site.author.name }}</strong
          >, some call me '{{ site.author.nickname }}'. A
          <em itemprop="jobTitle">{{ site.author.job }}</em
          >, <span class="bio">{{ site.author.bio }}</span>
        </h3>
        <nuxt-link
          v-for="item in site.navbar"
          :key="item.slug"
          :to="item.url"
          class="button button-ghost"
          title="projects"
          >{{ item.slug }}</nuxt-link
        >
        <IncludesSocial />
      </div>
    </div>
  </section>
</template>

<script>
import config from '../assets/config'
export default {
  data() {
    return {
      site: config,
    }
  },
}
</script>

<style scoped>
.button.button-ghost {
  margin: 3px;
}
</style>
