<template>
  <div class="home">
    <h1>This is home.</h1>


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
@import '@/assets/style/globalStyles.scss';

h1 {
  margin: 0;
}
.home {
  color: $jr-green;
}
</style>
