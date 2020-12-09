<template>
    <div>
      <div :class="['header', 'flex', 'flex-col', {'scroll': scrollDown, 'animate': shouldAnimate, 'border-bottom': $route.name === 'projects'}]">
        <!-- <div v-if="$route.name === 'projects'" class="header-image-container xl:w-1/12 sm:w-1/6 xs:w-2/12 w-1/4">
        <img v-if="$route.name === 'projects'" @click="routeHome" class="header-image" src="https://jrdotcom.s3-us-west-1.amazonaws.com/bottle_cap2.png" alt="foam soda logo">
        </div> -->
        <div id='nav'>
          <span class="nav-item" @click="routeHome" :style="navItemColors.home">HOME</span>
          <span class="nav-item" @click="routeToAbout" :style="navItemColors.about">ABOUT</span>
          <span class="nav-item" @click="routeToProjects" :style="navItemColors.projects">PROJECTS</span>
        </div>
      </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  name: 'Header',
  data: () => ({
    scrollDown: false,
    scrollY: 0,
  }),
  computed: {
    ...mapGetters(['freshInstance']),
    shouldAnimate() {
      return this.$route.name === 'home' && this.freshInstance
    },
    navItemColors() {
      const currentRoute = this.$route.path
      const homeColor = (currentRoute) => {
        if ((currentRoute === '/' || currentRoute === '/about') && this.scrollY < 650) {
          return 'color: #222222;'
        }
        return 'color: #bf5656'
      }
      const aboutColor = (currentRoute) => {
        if ((currentRoute === '/' || currentRoute === '/about') && this.scrollY > 650) {
          return 'color: #222222;'
        }
        return 'color: #bf5656'
      }
      const projectsColor = (currentRoute) => {
        if (currentRoute === '/projects') {
          return 'color: #222222;'
        }
        return 'color: #bf5656'
      }
      return {
        home: homeColor(currentRoute),
        about: aboutColor(currentRoute),
        projects: projectsColor(currentRoute),
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollListener() {
      this.scrollY = window.scrollY
      if (window.scrollY > 20) {
        this.scrollDown = true
      } else {
        this.scrollDown = false
      }
    },
    routeHome() {
      this.$router.push({path: '/'})
    },
    routeToAbout() {
      if (this.$route.name !== 'about') {
        this.$router.push({ 
          path: '/about',
          meta: { scroll: true } 
        })
      } else {
          document.getElementById('leading-text').scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
      }
    },
    routeToProjects() {
      this.$router.push({
        path: '/projects'
      })
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/globalStyles.scss';



.header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  z-index: 10;
  font-family: blockhead-dark-side, sans-serif;
  font-weight: 400;
  font-style: normal;
  position: fixed;
  top: 0;
  background: transparent;
  animation-fill-mode: forwards; 
  flex-direction: row;
  &.scroll {
    background:rgba(180, 232, 194, 0.3);
  }
}
.animate {
  animation: fadeInAnimation ease 16s; 
  animation-iteration-count: 1; 
}
.border-bottom {
  border-bottom: 1px solid $logo-red;
}
#nav {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.nav-item {
  text-decoration: none;
  padding: 0 0 0.5 0.5;
  letter-spacing: 2px;
  color: $logo-cream;
  font-size: 2.1rem;
  margin-right: 2rem;
  cursor: pointer;
  &.blacktext {
    color: $logo-green;
  }
  @media(min-width: 480px) {
  font-size: 3.1rem;

  }
}

.header-image {
  padding: 1rem 2rem;
  display: none;
  @media (min-width: 895px) {
    padding: 0rem 2rem;
    display: initial;
  }
  max-height: 80px;
  cursor: pointer;
}
.blue-text {
  color: $jr-blue;
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