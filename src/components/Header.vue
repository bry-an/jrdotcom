<template>
    <div>
      <div class="header flex flex-col">
        <div class="header-image-container xl:w-1/12 sm:w-1/6 xs:w-2/12 w-1/4">
        <img class="header-image" src="https://jrdotcom.s3-us-west-1.amazonaws.com/bottle_cap2.png" alt="foam soda logo">
        </div>
        <div id='nav'>
          <span class="nav-item" @click="$store.commit('SET_HOME_STATE', 0)" :style="navItemColor('/')">Home</span>
          <span class="nav-item" @click="$store.commit('SET_HOME_STATE', 2)" :to="{name: '/about'}" :style="navItemColor('/about')">About</span>
          <router-link class="nav-item" :to="{name: 'projects'}" :style="navItemColor('/projects')">Projects</router-link>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Header',
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
        return 'color: #b4e8c2'
      }
      return ''
    },
  },
  computed: {
    pathIsProjects() {
      return this.$route.path === "/projects"
    }
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
  font-family: 'PT Sans Narrow';
  position: fixed;
  top: 0;
  background: #222222;
  @media (min-width: 895px) {
    flex-direction: row;
  }
  font-size: 3rem;
}
.nav-item {
  padding-right: 1rem;
  text-decoration: none;
  padding-left: 4rem;
  letter-spacing: 2px;
  cursor: pointer;
  color: $logo-cream;
  font-size: 2.2rem;
  &.blacktext {
    color: $jr-red;
  }
}

.header-image {
  padding: 0 2rem;
}
.blue-text {
  color: $jr-blue;
}

</style>