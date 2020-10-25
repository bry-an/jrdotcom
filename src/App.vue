<template>
  <div id="app container">
    <base-layout>
    <site-header/>
    <router-view />
    </base-layout>
  </div>
</template>

<script>
import SiteHeader from "@/components/Header.vue"
import BaseLayout from "@/components/BaseLayout.vue"

export default {
  components: {
    SiteHeader,
    BaseLayout
  }
  
}
</script>

<style lang="scss">
@import '@/assets/style/globalStyles.scss';
@import url('https://fonts.googleapis.com/css2?family=Piazzolla:ital,wght@0,100;0,700;1,100;1,400&family=PT+Sans+Narrow:wght@400;700&family=Roboto&family=Anton&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&display=swap');

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
