<template>
  <div id="app">
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

html {
  font-size: 16px;
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
  color: $jr-cream;
}

</style>
