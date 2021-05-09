<template>
  <div class="home">
    <hero-header />
    <div class="logo-container flex flex-col items-center justify-center">
      <img
        src="https://jrdotcom.s3-us-west-1.amazonaws.com/FOAM_SODA.png"
        alt="foam soda logo"
        class="logo"
      />
    </div>
    <div ref="leadingText" id="leading-text" class="text-container">
      <text-container :text="leadingText" />
    </div>
    <div id="body-text" class="text-container">
      <text-container :text="bodyText[0]" />
    </div>
    <swiper ref="videoSwiper" :options="swiperOptions">
      <template v-for="video in videos">
        <swiper-slide :key="`vs-${video.id}`"
          ><video-container
            ref="videoContainer"
            :body="video.description"
            :title="video.title"
            :year="video.year"
            :relative="true"
            :url="video.url"
            :poster="video.poster"
        /></swiper-slide>
      </template>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" @click="swiperPrev" slot="button-prev"></div>
      <div class="swiper-button-next" @click="swiperNext" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHeader from '../components/HeroHeader.vue'
import TextContainer from '../components/TextContainer.vue'
import VideoContainer from '../components/VideoContainer.vue'
import { mapGetters } from 'vuex'
import videos from '@/videos.js'

export default {
  name: 'Home',
  components: {
    HeroHeader,
    TextContainer,
    VideoContainer,
  },
  data: () => ({
    showLeadingText: false,
    showLogoContainer: true,
    showBaseText: false,
    wait: false,
    videos: videos.slideshowVideos,
    state: 0,
    options: {
      autoplay: true,
      fullscreen: true,
    },
  }),
  mounted() {
    if (this.$route.name === 'about') {
      this.scroll()
    }
  },
  computed: {
    ...mapGetters(['homeState']),
    subHeaderTitle() {
      return 'FOAM SODA'
    },
    leadingText() {
      return `A Los Angeles creative agency specializing in audiovisual production`
    },
    bodyText() {
      return [
        `Working with artists from around the world, we take on each step of production
        from conception to completion`,
      ]
    },
    swiperOptions() {
      return {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      }
    },
  },
  methods: {
    scroll() {
      document.getElementById('leading-text').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
    pauseAllVideos() {
      // pause all videos when swiping either direction
      this.$refs.videoContainer.forEach((ref) => {
        ref.pause()
      })
    },
    swiperNext() {
      this.pauseAllVideos()
      this.$refs.videoSwiper.$swiper.slideNext()
    },
    swiperPrev() {
      this.pauseAllVideos()
      this.$refs.videoSwiper.$swiper.slidePrev()
    },
  },
}
</script>

<style lang="scss">
h1 {
  margin: 0;
}
.swiper-button-next,
.swiper-button-prev {
  color: white;
}

.home {
  margin: 0;
}
.text-container {
  padding-top: 8rem;
  text-align: center;
  font-size: 3rem;
  min-height: 20vh;
  @media (min-width: 400px) {
    width: 80%;
    font-size: 4rem;
  }
  width: 90%;
  margin: auto;
}

.body {
  font-size: 2.8rem;
  @media (min-width: 1200px) {
    font-size: 5rem;
  }
}

.logo-container {
  height: calc(100vh + 30px);
}

.logo {
  width: 85%;
  position: absolute;
  animation: fadeInAnimation ease 8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @media (min-width: 500px) {
    width: 75%;
  }
}

@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
