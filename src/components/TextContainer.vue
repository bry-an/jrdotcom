<template>
<div class="text">
  <div class='spacer'>
  </div>
    <hr class="hr top">
    <h3 class="leading">{{leading}}</h3>
    <p class="body-text">
  {{ text }}
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
  padding: 0 10rem;
  line-height: 4rem;
  width: 40%;
  margin: auto;
}

.leading {
  font-weight: bold;
  margin-bottom: 4%;
  letter-spacing: 3px;
  line-height: 93px;
}
.body-text {
  margin-top: 25%;
}


</style>