<template>
  <div id="app">
    <div id="header">
      <div id="nav">
        <div class="header-title">
          Pareidolia
        </div>
        <div>
          <router-link class="nav-item" to="/">Home</router-link>
          <router-link class="nav-item" to="/about">About</router-link>
          <router-link class="nav-item" to="/projects">Projects</router-link>
        </div>
      </div>
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

html {
  font-size: 16px;
  padding: 0;
}
#app { 
  width: 100vw;
  height: 100vh;
  margin: auto;
}
.header-title {
  margin-left: 2%;
  font-size: 1.5rem;
}
#nav {
  display: flex;
  justify-content: space-between;
  text-align: right;
  background-color: $jr-blue;
  padding-right: 5%;
  padding-top: 3%;
  padding-bottom: 1%;
}
.nav-item {
  padding-right: 10%;
  text-decoration: none;
}
.body {
  padding: 0 2%;
  min-height: 100vh;
}

</style>
