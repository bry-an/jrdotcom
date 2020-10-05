<template>
  <div class="layout">
    <img
      src="https://blogsimages.adobe.com/creative/files/2019/07/AdobeStock_211622740_header.jpeg"
      class="hero-image"
    />
    <div @click="scrollHandler('about')" class="scroll-chevrons" v-if="displayScrollChevrons">
      <div class="chevron" />
      <div class="chevron" />
      <div class="chevron" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
  data: () => ({
    displayScrollChevrons: true,
  }),
  mounted() {
    window.addEventListener('scroll', this.scrollListener)
  },
  methods: {
    scrollListener() {
      if (window.scrollY > 800) {
        this.displayScrollChevrons = false
      }
      if (window.scrollY < 800) {
        this.displayScrollChevrons = true
      }
    },
    scrollHandler(id) {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    },
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollListener)
  },
}
</script>

<style lang="scss" scoped>
$base: 0.6rem;

.hero-image {
  background-color: black; /* Used if the image is unavailable */
  background-position: center; /* Center the image */
  width: 100%;
  overflow: hidden;
  background-repeat: no-repeat; /* Do not repeat the image */
  position: absolute;
  top: 0;
}

.layout {
  height: calc(100vh - 590px);
  margin: auto;
  @media (min-width: 600px) {
      height: calc(100vh - 560px);
  }
  @media (min-width: 700px) {
      height: calc(100vh - 490px);
  }
  @media (min-width: 850px) {
      height: calc(100vh - 390px);
  }
  @media (min-width: 1000px) {
      height: calc(100vh - 300px);
  }
  @media (min-width: 1150px) {
      height: calc(100vh - 230px);
  }
  @media (min-width: 1320px) {
      height: calc(100vh - 120px);
  }
  @media (min-width: 1520px) {
      height: calc(100vh - 60px);
  }
  @media (min-width: 1720px) {
      height: calc(100vh - 40px);
  }
}
.chevron {
  position: absolute;
  width: $base * 3.5;
  height: $base * 0.8;
  opacity: 0;
  transform: scale(0.3);
  animation: move-chevron 3s ease-out infinite;
}
.chevron:first-child {
  animation: move-chevron 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move-chevron 3s ease-out 2s infinite;
}

.chevron:before,
.chevron:after {
  content: '';
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  background: #cccccc;
}

.chevron:before {
  left: 0;
  transform: skewY(30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skewY(-30deg);
}

@keyframes move-chevron {
  25% {
    opacity: 1;
  }
  33.3% {
    opacity: 1;
    transform: translateY($base * 3.8);
  }
  66.6% {
    opacity: 1;
    transform: translateY($base * 5.2);
  }
  100% {
    opacity: 0;
    transform: translateY($base * 8) scale(0.5);
  }
}
.scroll-chevrons {
  cursor: pointer;
  position: absolute;
  bottom: 60px;
  left: 50%;
  visibility: hidden;
  @media(min-width: 1620px) {
      visibility: visible;
  }
}
</style>
