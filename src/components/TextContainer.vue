<template>
<div class="text">
  <div class='spacer'>
  </div>
    <hr class="hr top">
    <h4 class="leading">{{leading}}</h4>
    <p class="body-text" v-html="text">
  </p>
</div>
</template>

<script>
export default {
  name: 'TextContainer',
  props: {
      text: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
      leading: {
        type: String,
        default: '',
      }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/globalStyles.scss';

h2 {
  text-align: center;
}
.spacer {
  height: 60px;
}

.hr {
  color: $jr-cream;
  height: 6px;
  background: $jr-green;
  border: 0;
  margin:0 0 7% 0;
  width: 20%;
}
.text {
  letter-spacing: 5px;
  font-size: 1.8rem;
  line-height: 4rem;
  margin: auto;
}

.leading {
  margin-bottom: 4%;
  letter-spacing: 3px;
  line-height: 93px;
}
.body-text {
  margin-top: 25%;
  font-size: 2.5rem;
}


</style>