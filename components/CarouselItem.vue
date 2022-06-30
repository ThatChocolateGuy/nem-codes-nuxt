<template>
  <div class="timeline-carousel__item">
    <div class="timeline-carousel__image">
      <div
        class="media-wrapper media-wrapper--overlay"
        :style="{
          backgroundImage: `url(${bgUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }"
      ></div>
    </div>
    <div class="timeline-carousel__item-inner">
      <span v-if="year" class="year">{{ year }}</span>
      <div v-else class="pointer"></div>
      <span v-if="month" class="month">{{ heading }}</span>
      <p>{{ blurb }}</p>
      <!-- <a href="#" class="read-more">Read more</a> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    year: { type: Number, default: null },
    month: { type: String, default: '' },
    title: { type: String, default: '' },
    blurb: { type: String, default: '' },
    bgImgSrc: { type: String, default: 'https://via.placeholder.com/615' },
  },
  data() {
    return {
      heading: String,
    }
  },
  computed: {
    bgUrl() {
      return require(`../assets/images/${this.image}`)
    },
    image() {
      return this.bgImgSrc
    },
  },
  mounted() {
    this.formHeading()
  },
  methods: {
    formHeading() {
      this.heading = this.title
        ? `${this.month} - ${this.title}`
        : `${this.month}`
    },
  },
}
</script>
