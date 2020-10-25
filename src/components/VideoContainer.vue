<template>
    <div>
        <video autoplay muted loop id="hero-video 2">
            <source :src="url" type="video/mp4">
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
    },
}
</script>
<style lang="scss" scoped>

video {
  width: 100vw;
  height:calc(100vh);
  object-fit: cover;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -100;
}

</style>