<template>
  <div id="app container">
    <base-layout>
    <router-view />
    </base-layout>
  </div>
</template>

<script>
import BaseLayout from "@/components/BaseLayout.vue"

export default {
  components: {
    BaseLayout
  },
  computed: {
    scroll() {
      return window.scrollY
    }
  },
  methods: {
    scrollListener() {
      return {
        scrollY: window.scrollY,
        scrollX: window.scrollX,
      }
    }
  }
  
}
</script>

<style lang="scss">
@import '@/assets/style/globalStyles.scss';
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700&display=swap');
@import url('https://use.typekit.net/shd6cst.css');

html {
  font-size: 16px;
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}
body {
  margin: 0;
  padding: 0;
  color: $logo-cream;
}

</style>
<style src="./assets/style/tailwind.css">
