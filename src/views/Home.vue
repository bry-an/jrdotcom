<template>
  <div class="home">
    <hero-header/>
    <div class='text-container' id="about">
    <text-container 
      :text="subHeaderText"
      :title="subHeaderTitle"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHeader from "../components/HeroHeader.vue"
import TextContainer from "../components/TextContainer.vue"

export default {
  name: 'Home',
  components: {
    HeroHeader,
    TextContainer,
  },
  computed: {
    subHeaderTitle() {
      return "FOAM SODA"
    },
    subHeaderText() {
      return `Foam Soda* is a Los Angeles creative agency specializing in audiovisual production.
          Working with artists from around the world, we take on each step of production
        from conception to completion. Experimenting with the restrictions of reality and
        genre, ceaselessly editing the madness around us into relatable stories. To do this, 
        we must be bold, balanced, and beautiful`
    }
  }
}
</script>

<style lang="scss">

h1 {
  margin: 0;
}

.home {
  padding-top: 5%;
}
.text-container {
  margin-top: 10%;
  padding-bottom: 10%;
}
</style>