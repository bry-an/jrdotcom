<template>
    <div>
      <div :class="['header', 'flex', 'flex-col', {'green-background': scrollDown}]">
        <div class="header-image-container xl:w-1/12 sm:w-1/6 xs:w-2/12 w-1/4">
        <img class="header-image" src="https://jrdotcom.s3-us-west-1.amazonaws.com/bottle_cap2.png" alt="foam soda logo">
        </div>
        <div id='nav'>
          <span class="nav-item" @click="routeHome" :style="navItemColor('/')">HOME</span>
          <span class="nav-item" @click="routeToAbout" :to="{name: '/about'}" :style="navItemColor('/about')">ABOUT</span>
          <router-link class="nav-item" :to="{name: 'projects'}" :style="navItemColor('/projects')">PROJECTS</router-link>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Header',
  props: {
    scroll: {
      type: Object,
      default: () => ({}),
    }
  },
  methods: {
    handleScroll(id) {
      if (this.$route.path === '/projects') {
        this.$router.push({name: 'home', query: {s: 'true'}})
      } else {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
      }
    },
    navItemColor(route)  {
      const currentRoute = this.$route.path
      if (route === currentRoute) {
      return 'color: #222222;'
      }
        return 'color: #bf5656'
    },
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/globalStyles.scss';



.header {
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  text-align: right;
  padding: 1.5rem;
  z-index: 10;
  font-family: blockhead-dark-side, sans-serif;
  font-weight: 400;
  font-style: normal;
  position: fixed;
  top: 0;
  background: transparent;
  animation: fadeInAnimation ease 16s; 
  animation-iteration-count: 1; 
  animation-fill-mode: forwards; 
  @media (min-width: 895px) {
    flex-direction: row;
  }
}
.nav-item {
  padding-right: 1rem;
  text-decoration: none;
  padding-left: 0.5rem;
  letter-spacing: 2px;
  color: $logo-cream;
  cursor: pointer;
  font-size: 2.1rem;
  &.blacktext {
    color: $logo-green;
  }
  @media (min-width: 895px) {
    font-size: 3.1rem;
    padding-left: 3rem;
  }
}

.header-image {
  padding: 1rem 2rem;
  @media (min-width: 895px) {
    padding: 0rem 2rem;
  }
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