<template>
  <div id="app">
    <base-layout>
        <site-header/>
        <router-view />
    </base-layout>
  </div>
</template>

<script>
import SiteHeader from "@/components/Header"
import BaseLayout from "@/views/BaseLayout"

export default {
  components: {
    SiteHeader,
    BaseLayout,
  }
  
}
</script>

<style lang="scss">

html {
  font-size: 16px;
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
}

</style>
