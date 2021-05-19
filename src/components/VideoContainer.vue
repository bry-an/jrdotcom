<template>
  <div @click="playPauseVideo" style="position: relative">
    <video
      :poster="poster"
      :class="relative ? 'relative' : ''"
      muted
      :autoplay="autoplay"
      loop
      ref="videoRef"
    >
      <source :src="url" type="video/mp4" />
    </video>
    <div v-if="relative" class="hero-wrapper">
      <div class="hero-container">
        <div class="hero-title">{{ title }}</div>
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
    title: {
      type: String,
      default: '',
    },
    year: {
      type: String,
      default: '',
    },
    body: {
      type: String,
      default: '',
    },
    poster: {
      type: String,
      default: '',
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    videoIsPlaying: false,
  }),
  methods: {
    pause() {
      this.$refs.videoRef.pause()
      this.videoIsPlaying = false
    },
    playPauseVideo() {
      if (this.videoIsPlaying) {
        this.$refs.videoRef.pause()
        this.videoIsPlaying = false
        return
      }
      this.$refs.videoRef.play()
      this.videoIsPlaying = true
    },
  },
}
</script>
<style lang="scss" scoped>
video {
  cursor: pointer;
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
  margin: auto;
  border-radius: 2px;
  width: 100%;
  padding: 1rem;
  > hr {
    width: 70%;
    padding: 0;
    margin: 0 0 1.2rem 0;
  }
}
.hero-title {
  font-size: 4rem;
  letter-spacing: 0.5rem;
  font-family: 'Kanit';
  @media (min-width: 900px) {
    font-size: 6rem;
  }
}

.hero-body {
  font-family: 'Martel';
  font-size: 1.5rem;
  @media (min-width: 900px) {
    font-size: 3rem;
  }
}
.more-button {
  color: $logo-green;
  border-radius: 1px;
  margin-top: 2rem;
  border: 0.5px solid $jr-cream;
  width: 100%;
  @media (min-width: 500px) {
    width: initial;
  }
}
</style>
