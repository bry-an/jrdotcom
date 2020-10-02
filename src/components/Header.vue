<template>
    <div>
      <div class="header">
          <h1 id="header-title"> <span :class="pathIsProjects ? 'blue-text': ''">FOAM SODA</span></h1>
        <div id='nav'>
          <router-link :class="['nav-item',{'blacktext' : pathIsProjects}]" :to="{name: 'home'}">Home</router-link>
          <span :class="['nav-item',{'blacktext' : pathIsProjects}]" @click="handleScroll('about')" :to="{name: 'about'}">About</span>
          <router-link :class="['nav-item',{'blacktext' : pathIsProjects}]" :to="{name: 'projects'}">Projects</router-link>
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
    }
  },
  computed: {
    pathIsProjects() {
      return this.$route.path === "/projects"
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/globalStyles.scss';



.header {
  display: flex;
  justify-content: space-between;
  text-align: right;
  padding-right: 3rem;
  padding-top: 3rem;
  z-index: 10;
  position: sticky;
  position: -webkit-sticky; /* Safari */
  top: 0;
}
.nav-item {
  padding-right: 3rem;
  padding-top: 1.8rem;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
  color: $jr-cream;
  font-size: 1.2rem;
  &.blacktext {
    color: $jr-red;
  }
}

#header-title {
  margin-left: 3rem;
  font-size: 5rem;
  letter-spacing: 3px;
  color: $jr-green;
}

.blue-text {
  color: $jr-blue;
}

</style>