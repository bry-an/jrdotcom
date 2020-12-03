<template>
  <div style="position: relative;">
    <video :class="relative ? 'relative' : ''" autoplay muted loop id="hero-video 2">
      <source :src="url" type="video/mp4" />
    </video>
    <div v-if="relative" class="hero-wrapper">
      <div class="hero-container">
        <div class="hero-title">{{ heroTitle }}</div>
        <div class="hero-body">{{ heroBody }}</div>
        <button class="more-button">See more</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VideoContainer',
  props: {
    url: {
      type: String,
      default: '',
    },
    relative: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    heroTitle: 'SWARM',
    heroBody: `The relationship between a rural farmer and his father 
    disintegrates following an offer to purchase their family home.`,
  }),
}
</script>
<style lang="scss" scoped>
video {
  width: 100vw;
  height: calc(100vh + 60px);
  object-fit: cover;
  position: absolute;
  left: 0;
  top: -30px;
  z-index: -100;
  &.relative {
    position: relative;
    top: 0;
    margin-top: 24rem;
  }
}

.hero-wrapper {
  color: $logo-cream;
  position: absolute;
  bottom: 5%;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  
  @media (min-width: 900px) {
    bottom: 10%;
    width: 70%;
    left: 1%;
  }
}

.hero-container {
  background: rgba(0, 0, 0, 0.5);
  margin: auto;
  border-radius: 2px;
  width: 100%;
  padding: 1rem;
}
.hero-title {
  font-size: 4rem;
  letter-spacing: 0.5rem;
  font-family: 'Kanit';
  @media(min-width: 900px) {
    font-size: 6rem;
  }
}

.hero-body {
  font-family: 'Martel';
  font-size: 1.5rem;
  @media(min-width: 900px) {
    font-size: 3rem;
  }
}
.more-button {
  color: $logo-green;
  border-radius: 1px;
  margin-top: 2rem;
  border: 0.5px solid $jr-cream;
}
</style>
