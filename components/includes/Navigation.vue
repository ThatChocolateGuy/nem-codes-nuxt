<template>
  <header id="nav" class="site-header">
    <div class="container">
      <input id="toggleNavbar" type="checkbox" />
      <h1 class="logo">
        <router-link to="/"
          ><em><strong>nem</strong></em
          >.codes</router-link
        >
      </h1>
      <label for="toggleNavbar" role="button" class="toggle-navbar-button">
        <i class="icon icon-menu"></i>
        <i class="icon icon-cross"></i>
      </label>
      <nav class="navbar">
        <ul>
          <li v-if="!['Home', 'NotFound'].includes($route.name)">
            <router-link to="/" title="home">Home</router-link>
          </li>
          <li v-for="item in Navbar" :key="item.slug" @click="hideMenu">
            <router-link :to="item.url" :title="item.slug">{{
              item.slug
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import config from '../../assets/config'

export default {
  data() {
    return {
      Navbar: config.navbar,
    }
  },
  methods: {
    hideMenu() {
      const w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth
      if (w <= 768) document.querySelector('.toggle-navbar-button').click()
    },
  },
}
</script>

<style lang="scss" scoped>
$main-color: #337ab7;

.router-link-active.router-link-exact-active {
  border-top: 1px dotted;
  border-bottom: 1px dotted;

  @media screen and (min-width: 768px) {
    color: $main-color;

    &:focus {
      &::before,
      &::after {
        display: none;
      }
    }
  }
}

.site-header {
  background-color: #ffffff4d;
}
</style>
