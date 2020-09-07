<template>
  <div class="home">
    <h1>Pareidolia* Productions</h1>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style lang="scss">

h1 {
  margin: 0;
}

.home {
  padding-top: 5%;
  z-index: 2;
}

.background-video {
  position: absolute;
  top: 200px;
  left: 0;
  z-index: 1;
  top: 0;
  width: 100%;
}
</style>