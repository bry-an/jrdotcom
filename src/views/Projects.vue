<template>
  <div class="projects">
    <!-- <p>Our sound and music department, lead by creative director <strong>Cyrus Gill</strong>, provides studio and on-set production for all Foam Soda projects.</p>

<p>In addition to film scoring, Foley, and bespoke commercial production, Cyrus develops albums with a variety of bands from pop to experimental.</p> -->
    <div class="video-container">
     <video-tile v-for="narrative in narratives" :video-id="narrative.id" :key="narrative.id" :title="narrative.title" :desc="narrative.desc" />
    </div>

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
        title: 'SWARM',
        desc: 'The relationship between a rural farmer and his father disintegrates following an offer to purchase their family home.'
        },
        {
          id: 467162540,
          title: 'Man Under Painting',
          desc: 'A young artist embarks on an odyssey across the city of San Francisco to exhibit his newest art piece.'
        },
        {
          id: 465210938,
          title: 'Hotel Kerosene',
          desc: 'A woman comes to terms with her violent psyche following her husband\'s betrayal.'

        },
        {
          title: 'The Conditions',
          desc: `Esteban, an air conditioning repairman and first generation American immigrant, 
          is forced into captivity by a prestigious L.A. lawyer, until he is able to fix his broken A.C system, 
          on the hottest day on record. The lawyer makes a deal to provide Esteban with citizenship, 
          given he follows the rules of a document composed by the lawyer, as well as complete the task before the upcoming party the next day.`
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
  width: 90%;
  padding-top: 20%;
  letter-spacing: 5px;
  font-family: Lato;
  font-weight: 400;
  color: $logo-red;
  @media(min-width: 600px) {
    font-size: 2rem;
    padding-top: 10%;
  }
  font-size: 1.5rem;
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
