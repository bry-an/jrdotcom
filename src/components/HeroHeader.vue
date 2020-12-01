<template>
  <div class="hero-header">
    <video-container :url="currentUrl" />
    <div @click="scrollHandler('about')" class="scroll-chevrons" v-if="displayScrollChevrons">
      <div class="chevron" />
      <div class="chevron" />
      <div class="chevron" />
    </div>
  </div>
</template>

<script>
import videos from '@/videos.json'
import {mapGetters} from "vuex"
import VideoContainer from "../components/VideoContainer.vue"
export default {
  name: 'BaseLayout',
  components: {
    VideoContainer,
  },
  data: () => ({
    displayScrollChevrons: true,
  }),
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  watch: {
    currentUrl() {
      this.$forceUpdate()
    }
  },
  computed: {
    ...mapGetters(['homeState']),
    currentUrl() {
      return videos.videos[0].url
    }
  },
  methods: {
    scrollListener() {
      if (window.scrollY > 100) {
        this.displayScrollChevrons = false
      }
      if (window.scrollY < 100) {
        this.displayScrollChevrons = true
      }
    },
    scrollHandler(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollListener)
  },
}
</script>

<style lang="scss" scoped>
$base: 1.2rem;

.logo-container {
  position: absolute;
  bottom: 50%;
  @media (min-width: 896px) {
    bottom: 50%;
  }
  left: 50%;
  transform: translate(-50%, 50%);
  text-align: center;
}
#logo {
  position: sticky;
  top: 0;
}

.chevron {
  position: absolute;
  width: $base * 3.5;
  height: $base * 0.8;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out infinite;
  top: 0;
}

.chevron:first-child {
  animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move-chevron 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: '';
  position: absolute;
  top: -3rem;
  height: 100%;
  width: 50%;
  background: $logo-red;
}

.chevron:before {
  left: 0;
  transform: skewY(30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skewY(-30deg);
}

@keyframes move-chevron {
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translateY($base * 3.8);
  }
  66.6% {
    opacity: 1;
    transform: translateY($base * 5.2);
  }
  100% {
    opacity: 0;
    transform: translateY($base * 8) scale(0.5);
  }
}
.scroll-chevrons {
  cursor: pointer;
  position: fixed;
  bottom: 10rem;
  left: 50%;
  visibility: hidden;
  @media(min-width: 1620px) {
      visibility: visible;
  }
}
</style>
