<template>
  <ul class="social">
    <li>
      <a :href="site.author['github']" target="_blank"
        ><i class="icon icon-github"></i
      ></a>
    </li>
    <li>
      <a :href="site.author['twitter']" target="_blank"
        ><i class="icon icon-twitter"></i
      ></a>
    </li>
    <li>
      <a :href="site.author['facebook']" target="_blank"
        ><i class="icon icon-facebook"></i
      ></a>
    </li>
    <li>
      <a :href="site.author['instagram']" target="_blank"
        ><i class="icon icon-instagram"></i
      ></a>
    </li>
    <li>
      <a :href="site.author['linkedin']" target="_blank"
        ><i class="icon icon-linkedin"></i
      ></a>
    </li>
  </ul>
</template>

<script>
import AppConfig from '../../assets/config'

export default {
  data() {
    return { site: AppConfig }
  },
}
</script>
