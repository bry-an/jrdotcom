<template>
    <div>
      <div class="header">
          <h1 id="header-title">FOAM SODA</h1>
        <div id='nav'>
          <router-link class="nav-item" :to="{name: 'home'}">Home</router-link>
          <span class="nav-item" @click="handleScroll('about')" :to="{name: 'about'}">About</span>
          <router-link class="nav-item" :to="{name: 'projects'}">Projects</router-link>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    handleScroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
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
  text-align: right;
  padding-right: 3rem;
  padding-top: 3rem;
  z-index: 10;
  position: sticky;
  position: -webkit-sticky; /* Safari */
  top: 0;
}
#nav {
  padding-right: 0;
  display: flex;
  justify-content: end;
}
.nav-item {
  padding-right: 3rem;
  padding-top: 1.8rem;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
  color: $jr-cream;
}

#header-title {
  margin-left: 3rem;
  font-size: 5rem;
  letter-spacing: 3px;
  color: $jr-blue;
}

</style>