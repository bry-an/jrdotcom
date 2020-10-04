<template>
    <div>
      <div class="header">
          <h1 id="header-title"> <span :class="pathIsProjects ? 'blue-text': ''">FOAM SODA</span></h1>
        <div id='nav'>
          <router-link :class="['nav-item',{'blacktext' : pathIsProjects}]" :to="{name: 'home'}" :style="navItemColor('/')">Home</router-link>
          <span :class="['nav-item',{'blacktext' : pathIsProjects}]" @click="handleScroll('about')" :to="{name: '/about'}" :style="navItemColor('/about')">About</span>
          <router-link :class="['nav-item',{'blacktext' : pathIsProjects}]" :to="{name: 'projects'}" :style="navItemColor('/projects')">Projects</router-link>
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
        return 'color: #41B883'
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  text-align: right;
  padding-top: 3rem;
  z-index: 10;
  position: sticky;
  top: 0;
  position: -webkit-sticky; /* Safari */
  @media (min-width: 895px) {
    flex-direction: row;
  }
}
.nav-item {
  padding-top: 1.8rem;
  padding-right: 1rem;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
  color: $jr-cream;
  font-size: 1.2rem;
  &.blacktext {
    color: $jr-red;
  }
  @media (min-width: 895px) {
    padding-right: 3rem;
  }
}
#header-title {
  font-size: 3rem;
  letter-spacing: 3px;
  color: $jr-green;
  @media (min-width: 895px) {
    font-size: 5rem;
    margin-left: 3rem;
  }
  @media (min-width: 550px) {
    font-size: 4rem;
  }
}

.blue-text {
  color: $jr-blue;
}

</style>