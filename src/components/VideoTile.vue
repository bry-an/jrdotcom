<template>
  <div class="video-tile">
    <div ref="video" class="video" />
    <div class="side-panel">
      <div class="video-title">
        <img class="title-image" src="https://jrdotcom.s3-us-west-1.amazonaws.com/bottle_cap2.png"/>{{ title }}
      </div>
        <hr />
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
  computed: {
    videoWidth() {
      if (this.$el.offsetWidth < 400) {
        return 375
      }
      if (this.$el.offsetWidth < 600) {
        return 400
      }
      if (this.$el.offsetWidth < 850) {
        return 600
      }
      return 850
    },
  },
  mounted() {
    setTimeout(() => {
      const player = new Player(this.$refs.video, {
        id: this.videoId,
        width: this.videoWidth,
        title: false,
        byline: false,
        color: 'bf5656',
        portrait: false,
      })
      this.player = player
    }, 200)
  },
}
</script>

<style lang="scss" scoped>
.title-image {
  display: inline;
  padding-bottom: 1rem;
  margin-right: 1rem;
  width: 3.5rem;
}
.side-panel {
  font-family: Lato;
  padding: 0 2rem;
  margin-left: 2rem;
  > hr {
    width: 70%;
    border: 0.1rem solid $logo-red;
    @media (min-width: 1280px) {
      margin: 0;
    }
    margin: auto;
  }
}

.video-tile {
  margin-bottom: 7rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 1280px) {
    flex-wrap: nowrap;
    text-align: left;
  }
}
.video {
  border-radius: 10px;
}

.video-title {
  font-size: 4.3rem;
  font-weight: 800;
  padding-bottom: 2rem;
  text-align: center;
  margin-top: 1rem;
  @media (min-width: 1280px) {
    text-align: left;
  }
}

.video-body {
  font-size: 2rem;
  margin-top: 2rem;
  opacity: 0.6;
  text-align: center;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 1280px) {
    text-align: left;
    width: 100%;
  }
}
</style>
