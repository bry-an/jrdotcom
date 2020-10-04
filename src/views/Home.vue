<template>
  <div class="home">
    <hero-header/>
    <div class='text-container' id="about">
    <text-container 
      :text="subHeaderBody"
      :title="subHeaderTitle"
      :leading="subHeaderLeading"
      />
    </div>
    <div class="wide-image-container">
    <two-by-two-image 
    v-if="false"
    :imageLinks="imageLinks"
    />
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import HeroHeader from "../components/HeroHeader.vue"
import TextContainer from "../components/TextContainer.vue"
import TwoByTwoImage from "../components/TwoByTwoImage.vue"

export default {
  name: 'Home',
  components: {
    HeroHeader,
    TextContainer,
    TwoByTwoImage,
  },
  computed: {
    subHeaderTitle() {
      return "FOAM SODA"
    },
    imageLinks() {
      return ["https://i.ibb.co/0VFFwXb/jr.jpg","https://i.ibb.co/0VFFwXb/jr.jpg"]
    },
    subHeaderBody() {
      return `<p>Working with artists from around the world, we take on each step of production
        from conception to completion.</p>

        <p>Experimenting with the restrictions of reality and
        genre, ceaselessly editing the madness around us into relatable stories. To do this, 
        we must be bold, balanced, and beautiful.</p>`
    },
    subHeaderLeading() {
       return `Foam Soda is a Los Angeles creative agency specializing in audiovisual production.`
    }
  },
  mounted() {
    if (this.$route.query.s === 'true') {
      setTimeout(() => {
        this.scroll()
      }, 500)
    }
  },
  methods: {
    scroll() {
      console.log('doc', document.getElementById('about'))
      document.getElementById('about').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    },
  },
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
  padding-bottom: 18%;
  background-color: $jr-blue;
}
.wide-image-container {
  width: 100%;
}
</style>