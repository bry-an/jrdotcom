<template>
  <div class="home overflow-hidden">
    <hero-header />
    <div class="logo-container flex flex-col items-center justify-center">
			<img src="../assets/images/foamsoda_logo.png"
        alt="foam soda logo"
        class="logo"
      />
    </div>
    <div class="text-container">
      <div class="info">
        <p> A Los Angeles creative agency specializing in audiovisual production </p>
        <p>
          Working with artists from around the world, we take on each step of production from
          conception to completion
        </p>
      </div>
    </div>
    <swiper ref="videoSwiper" :options="swiperOptions" @slideChange="onSlideChange">
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
    <section class="text-container about pt-12">
      <div class="md:w-1/2 md:float-left md:pl-6 md:pr-6 md:pb-6 pt-3 mb-4">
        <img src="../assets/images/about-us.jpeg" alt="jon and cyrus" />
      </div>
      <p>
        Cyrus Gill and Jon Rose are the founders of FOAM SODA, a mixed media studio where all
        projects are developed in-house.
      </p>
      <p>
        Cyrus and Jon dedicate themselves entirely to their clients. They do not repeat themselves
        and they strive to stay current. They come from a background in production and music
        supervision in tech and in fashion, as well as feature film production and development.
      </p>
      <p>
        Please reach out at <a href="mailto:foamsodala@gmail.com">foamsodala@gmail.com</a> for all
        media needs. Come and see us at our downtown LA office!
      </p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHeader from '../components/HeroHeader.vue'
import VideoContainer from '../components/VideoContainer.vue'
import { mapGetters } from 'vuex'
import videos from '@/videos.js'

export default {
  name: 'Home',
  components: {
    HeroHeader,
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
    onSlideChange() {
      this.pauseAllVideos()
    },
    pauseAllVideos() {
      // pause all videos when swiping either direction')
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
  width: 22px;
  height: 44px;
}

.home {
  margin: 0;
}
.text-container {
  font-size: 1rem;
  min-height: 20vh;
  @media (min-width: 400px) {
    width: 70%;
    font-size: 2rem;
  }
  width: 90%;
  margin: auto;
  letter-spacing: 5px;
  color: $logo-red;
  font-family: 'Lato', sans-serif;
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
  width: 90%;
  position: absolute;
  animation: fadeInAnimation ease 8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  @media (min-width: 500px) {
    width: 75%;
  }
}
.info {
  padding-top: 20rem;
}
.about {
  padding-bottom: 2rem;
  letter-spacing: 5px;
  font-family: Lato, sans-serif;
  color: #bf5656;
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
