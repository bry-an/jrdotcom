<template>
  <div class="home">
    <h1>Pareidolia* Productions</h1>
    <iframe 
    class="background-video"
      width="560" 
      height="315" 
      src="https://www.youtube.com/embed/YKvX-i8k0SU?showinfo=0&controls=0" 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      >
    </iframe>


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
