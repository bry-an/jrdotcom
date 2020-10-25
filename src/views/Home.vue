<template>
  <div class="home" @mousewheel="onWheel">
    <hero-header/>
    <transition name="slide-up">
      <div v-if="homeState === 0 || homeState === 1" class="logo-container flex flex-col items-center justify-center">
          <img 
          src="https://jrdotcom.s3-us-west-1.amazonaws.com/FOAM_SODA.png"
          alt="foam soda logo"
          :class="['logo', {'relative': homeState === 2}]">
        <transition name="slide-in">
        <text-container v-if="homeState === 1" class="text-container" :text="leadingText"/>
        </transition>
      </div>
    </transition>
      <transition name="fade">
        <div v-if="homeState === 2" class="logo-container flex flex-col items-center body-text justify-center">
          <text-container class="text-container body" :text="bodyText"/>
        </div>
      </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHeader from "../components/HeroHeader.vue"
import TextContainer from "../components/TextContainer.vue"
import {mapGetters} from "vuex"

export default {
  name: 'Home',
  components: {
    HeroHeader,
    TextContainer,
  },
  data: () => ({
    showLeadingText: false,
    showLogoContainer: true,
    showBaseText: false,
    wait: false,
    state: 0,
  }),
  computed: {
    ...mapGetters(['homeState']),
    subHeaderTitle() {
      return "FOAM SODA"
    },
    leadingText() {
       return `A Los Angeles creative agency specializing in audiovisual production`
    },
    bodyText() {
      return `Working with artists from around the world, we take on each step of production
        from conception to completion.
        Experimenting with the restrictions of reality and
        genre, ceaselessly editing the madness around us into relatable stories. To do this, 
        we must be bold, balanced, and beautiful.`
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
        block: 'start'
      })
    },
    onWheel(e) {
      if (this.wait === false) {
        if (e.deltaY > 0) {
          if (this.homeState <= 4) {
            this.$store.commit('INCREMENT_HOME_STATE')
          }
        }
        else {
          if (this.homeState >= 1) {
            this.$store.commit('DECREMENT_HOME_STATE')
          }
        }
        this.wait = true
        setTimeout(() => {
          this.wait = false
        }, 1500)
      }
    }
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
  text-align: center;
  font-size: 4rem;
  width: 80%;
  margin-top: 22rem;
}

.body {
  font-size: 2.8rem;
  @media (min-width: 1200px){
    font-size: 4rem;
  }
}
.slide-in-enter-active, .slide-in-leave-active {
  transition: all 0.1s;
}

.slide-in-enter, .slide-in-leave-to {
  transform: translateY(80vh);
}

.slide-up-leave-to{
  transform: translateY(-100vh);
}
.slide-up-enter {
  transform: translateY(-100vh);
}

.slide-up-enter-active {
  transition: all 0.5s;
}

.slide-up-leave-active {
  transition: all 0.2s
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.logo-container {
  height: 100vh;
}

.logo {
  width: 50%;
  position: fixed;
  &.relative {
    position: relative
  }
}


</style>