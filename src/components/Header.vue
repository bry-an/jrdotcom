<template>
    <div>
      <div id="header">
          <h1 id="header-title">Pareidolia</h1>
        <div id='nav'>
          <router-link class="nav-item" :to="{name: 'home'}">Home</router-link>
          <router-link class="nav-item" :to="{name: 'about'}">About</router-link>
          <router-link class="nav-item" :to="{name: 'projects'}">Projects</router-link>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    name: 'Header',

}
</script>
<style lang="scss" scoped>

#header {
  display: flex;
  justify-content: space-between;
  text-align: right;
  padding-right: 3rem;
  padding-top: 3rem;
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
  color: rgb(241, 241, 241)
}

#header-title {
  margin-left: 3rem;
  font-size: 3rem;
  color: rgb(241, 241, 241)
}

</style>