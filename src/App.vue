<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projects</router-link>
    </div>
    <h3 id='green'>
      I am green
    </h3>
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
@import './assets/style/globalStyles.scss';

#app {
  width: 100vw;
  height: 100vh;
}
#nav {
  text-align: center;
}
#green {
  color: $jr-green;
}

</style>
