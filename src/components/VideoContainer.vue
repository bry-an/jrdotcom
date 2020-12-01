<template>
  <div>
    <video :class="relative ? 'relative' : ''" autoplay muted loop id="hero-video 2">
      <source :src="url" type="video/mp4" />
    </video>
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
  }
}
</style>
