<template>
  <div class="video-tile">
    <div ref="video" class="video" />
    <div class="side-panel">
      <div class="video-title">
        {{ title }}
        <hr />
      </div>
      <div class="video-body">
        {{ desc }}
      </div>
    </div>
  </div>
</template>

<script>
import Player from '@vimeo/player'

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
  data: () => ({
    player: null,
  }),
  mounted() {
    setTimeout(() => {
      console.log('ref', this.$refs.video)
      const player = new Player(this.$refs.video, {
        id: this.videoId,
        width: 850,
      })
      this.player = player
    }, 200)
  },
}
</script>

<style lang="scss" scoped>
.side-panel {
  font-family: Lato;
  padding: 0 2rem;
  margin-left: 2rem;
}
.video-tile {
  display: flex;
  justify-content: center;
}

.video-title {
  font-size: 4rem;
  font-weight: bold;
  padding: 2rem 0;
  > hr {
    width: 70%;
    border: 0.1rem solid $logo-red;
  }
}

.video-body {
  font-size: 2rem;
}
</style>
