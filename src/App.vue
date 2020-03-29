<template>
  <div id="app">
      <div id="nav">
        <router-link class="nav-item" to="/">Home</router-link>
        <router-link class="nav-item" to="/about">About</router-link>
        <router-link class="nav-item" to="/projects">Projects</router-link>
      </div>
    <div class="body">
      <router-view/>
   </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import '@/assets/style/globalStyles.scss';

#app {  
  width: 100vw;
  height: 100vh;
  margin: auto;
}
#nav {
  text-align: right;
  background-color: $jr-blue;
  padding-right: 5%;
  padding-top: 5%;
  padding-bottom: 1%;
}
.nav-item {
  padding-right: 1%;
  text-decoration: none;
}
.body {
  background-color: $jr-cream;
  padding: 0 2%;
}

</style>
