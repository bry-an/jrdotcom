<template>
  <div id="hero">
    <div class="videoContainer">
      <iframe
        src="https://player.vimeo.com/video/475660503"
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VimeoContainer',
  props: {
    url: {
      type: String,
      default: '',
    },
  },
}
</script>
<style lang="scss" scoped>
.videoContainer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#hero {
  position: relative;
}
iframe {
  /* optional */
  width: 100%;
  height: 100%;
}
</style>
