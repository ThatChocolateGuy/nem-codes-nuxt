<template>
  <div class="about">
    <!--Based on 'Responsive History Carousel' by Dejan Babić (https://codepen.io/microfront/pen/veagoK)-->
    <section class="timeline-carousel">
      <h1>A Brief History</h1>
      <div>
        <p v-if="!carouselItems && carouselItems.length > 0">Loading...</p>
        <VueSlickCarousel
          v-if="carouselItems && carouselItems.length > 0"
          v-bind="settings"
          class="timeline-carousel__item-wrapper"
        >
          <CarouselItem
            v-for="(carouselItem, id) in carouselItems"
            :key="id"
            v-bind="carouselItem"
          />
        </VueSlickCarousel>
      </div>
    </section>
  </div>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import VueSlickCarousel from 'vue-slick-carousel'
import config from '../assets/config'

export default {
  components: { VueSlickCarousel },
  layout: 'Page',
  data() {
    return {
      carouselItems: config.carouselItems,
      settings: {
        infinite: false,
        arrows: true,
        dots: true,
        autoplay: false,
        speed: 1100,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss">
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css');

//General
.about {
  margin: 0;
  background-color: transparent;
}

* {
  outline: none;
}

//Colours
$black-20: rgba(0, 0, 0, 0.2); // line
$black-60: rgba(0, 0, 0, 0.6);
$black: rgb(80, 80, 80);
$main-color: #337ab7;

//Timeline
.timeline-carousel {
  padding: 20px 6.9444%;
  position: relative;
  overflow: hidden;
  .slick-list {
    overflow: visible;
  }
  .slick-dots {
    bottom: -20px;
    padding: 0;
    margin: 0;
    list-style: none;
    position: absolute;
    width: 100%;
    left: 0;
    text-align: center;
    z-index: 2;
    li {
      cursor: pointer;
      display: inline-block;
      margin: 0 6px;
      position: relative;
      width: 10px;
      height: 10px;
      &:last-child {
        margin-right: 0;
      }
      button {
        display: block;
        font-size: 0;
        width: 10px;
        height: 10px;
        padding: 0;
        background-color: $black-60;
        border-color: $black-60;
        cursor: pointer;
        -webkit-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
        -o-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
        transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
        &:hover {
          background: $main-color;
          border-color: $main-color;
        }
      }
      &.slick-active {
        button {
          background: $main-color;
          border-color: $main-color;
        }
      }
    }
  }
  h1 {
    color: $black;
    font-size: 2em;
    line-height: 50px;
    margin-bottom: 40px;
    font-weight: 700;
  }
  &__image {
    padding-right: 30px;
  }
  &__item {
    cursor: pointer;
    .media-wrapper {
      opacity: 0.4;
      padding-bottom: 71.4%;
      -webkit-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      -o-transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
      transition: all 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53);
    }
    &-inner {
      position: relative;
      padding-top: 45px;
      &::after {
        position: absolute;
        width: 100%;
        top: 45px;
        left: 0;
        content: '';
        border-bottom: 1px solid $black-20;
      }
      .year {
        font-size: 36px;
        line-height: 36px;
        color: white;
        display: table;
        letter-spacing: -1px;
        background-color: $main-color;
        z-index: 1;
        position: relative;
        margin: -15px 0 20px;
        font-weight: 900;
        padding: 5px 10px 5px 0;
        &::after {
          content: '';
          position: absolute;
          display: block;
          left: -10px;
          top: 0;
          height: 100%;
          width: 10px;
          background-color: $main-color;
          z-index: 3;
        }
      }
      .month {
        font-size: 12px;
        text-transform: uppercase;
        color: $main-color;
        display: block;
        margin-bottom: 10px;
        font-weight: 900;
      }
      p {
        font-size: 12px;
        line-height: 18px;
        color: $black;
        width: 60%;
        font-weight: 400;
        margin-bottom: 15px;
      }

      .read-more {
        font-size: 12px;
        color: $main-color;
        display: table;
        margin-bottom: 10px;
        font-weight: 900;
        text-decoration: none;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -1px;
          width: 0;
          border-bottom: 2px solid $main-color;
          -webkit-transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
          -o-transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
          transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
        }
        &:hover {
          &::after {
            width: 100%;
          }
        }
      }
      .pointer {
        height: 29px;
        position: relative;
        z-index: 1;
        margin: -4px 0 16px;
        &::after,
        &::before {
          position: absolute;
          content: '';
        }
        &::after {
          width: 9px;
          height: 9px;
          border-radius: 100%;
          top: 0;
          left: 0;
          background-color: $main-color;
        }
        &::before {
          width: 1px;
          height: 100%;
          top: 0;
          left: 4px;
          background-color: $main-color;
        }
      }
    }
    &:last-child {
      .timeline-carousel__item-inner {
        &::after {
          width: calc(100% - 30px);
        }
      }
    }
  }

  .slick-active {
    .media-wrapper {
      opacity: 1 !important;
    }
  }
}
.slick-track {
  margin-bottom: 0.8em;
}
.slick-prev {
  left: -25px;
  &::before {
    content: '←';
  }
}
.slick-next {
  right: -25px;
  &::before {
    content: '→';
  }
}
.slick-prev,
.slick-next {
  font-size: 0;
  line-height: 0;
  position: absolute;
  bottom: -45px;
  display: block;
  width: 42px;
  height: 38px;
  padding: 0;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%);
  cursor: pointer;
  color: transparent;
  outline: none;
  background: transparent;
  z-index: 4;
  -webkit-transition: all 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  -o-transition: all 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  transition: all 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  &:hover,
  &:focus {
    background: transparent;
  }
  &:hover {
    border: 2px solid $main-color;
  }
  &::before {
    font-family: 'slick', Arial, sans-serif;
    font-size: 25px;
    font-weight: bolder;
    line-height: 1.2;
    opacity: 0.75;
    color: $main-color;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
.slick-disabled {
  visibility: hidden;
}
</style>
<style lang="scss" scoped>
// style overrides
.about {
  text-align: left;
}
</style>
