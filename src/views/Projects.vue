<template>
  <div class="projects">
     <h2 class="title">Narrative</h2>
    <div class="video-container">
     <video-tile v-for="narrative in narratives" :video-id="narrative.id" :key="narrative.id" :title="narrative.title" :desc="narrative.desc" />
    </div>

    <!-- <p>Our sound and music department, lead by creative director Cyrus Gill, provides studio and on-set production for all Foam Soda projects.</p>

<p>In addition to film scoring, Foley, and bespoke commercial production, Cyrus develops albums with a variety of bands from pop to experimental.</p> -->
  </div>
</template>

<script>
import VideoTile from "../components/VideoTile.vue"
export default {
  name: 'projects',
  components: {
    VideoTile,
  },
  data: () => ({
    projects: {
      narrative: [{
        id: 475660503,
        title: 'Swarm',
        desc: 'The relationship between a rural farmer and his father disintegrates following an offer to purchase their family home.'
        }],
      audioVisual: [],
      promotional: [],
    }
  }),
  computed: {
    narratives() {
      return this.projects.narrative
    },
    audioVisuals() {
      return this.projects.audioVisual
    },
    promotionals() {
      return this.projects.promotional
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/style/globalStyles.scss';

.title {
  font-size: 4rem;
  @media(min-width: 900px) {
    font-size: 8rem;
  }
}

.projects {
  height: 100vh;
  margin: auto;
  width: 80%;
  padding-top: 10%;
  letter-spacing: 5px;
  font-family: blockhead-dark-side, sans-serif;
  font-weight: 400;
  color: $logo-red;
  font-size: 3rem;
}
.video-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 6rem;
}

.blue-text {
  color: $jr-blue;
}

h1 {
  margin: auto;
}


</style>
