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
    <div id="leading-text" class="text-container">
      <text-container :text="leadingText" />
    </div>
    <div id="body-text" class="text-container">
      <text-container :text="bodyText[0]" />
    </div>
    <div class="text-container">
      <text-container :text="bodyText[1]" />
    </div>
    <div>
      <video-container :relative="true" url="https://jrdotcom.s3-us-west-1.amazonaws.com/Guitarist+-+46.mp4"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHeader from '../components/HeroHeader.vue'
import TextContainer from '../components/TextContainer.vue'
import VideoContainer from '../components/VideoContainer.vue'
import { mapGetters } from 'vuex'

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
    state: 0,
    options: {
      autoplay: true,
      fullscreen: true,
    }
  }),
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
        `Experimenting with the restrictions of reality and
        genre, ceaselessly editing the madness around us into relatable stories. To do this, 
        we must be bold, balanced, and beautiful`,
      ]
    },
  },
  mounted() {
    if (this.$route.query.s === 'true') {
      setTimeout(() => {
        this.scroll()
      }, 500)
    }
    window.addEventListener('scroll', this.scrollListener)
  },
  methods: {
    scroll() {
      document.getElementById('about').scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
    onWheel(e) {
      if (this.wait === false) {
        if (e.deltaY > 0) {
          if (this.homeState <= 4) {
            this.$store.commit('INCREMENT_HOME_STATE')
          }
        } else {
          if (this.homeState >= 1) {
            this.$store.commit('DECREMENT_HOME_STATE')
          }
        }
        this.wait = true
        setTimeout(() => {
          this.wait = false
        }, 1500)
      }
    },
  },
}
</script>

<style lang="scss">
h1 {
  margin: 0;
}

.home {
  margin: 0;
}
.text-container {
  padding-top: 15rem;
  text-align: center;
  font-size: 4rem;
  min-height: 20vh;
  width: 100%;
  @media (min-width: 400px) {
    width: 70%;
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
  height: 100vh;
}

.logo {
  width: 50%;
  position: absolute;
  animation: fadeInAnimation ease 8s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
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
