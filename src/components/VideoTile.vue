<template>
  <div class="video-tile">
    <vimeo-player :video-id="videoId" />
    <div class="video-title">
      {{ title }}
    </div>
    <div class="video-title">
      {{ desc }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoTile',
  props: {
    videoId: {
      type: [Number, String],
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    desc: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.video-tile {
  display: flex;
  flex-direction: column;
  justify-content: center;

}
</style>
