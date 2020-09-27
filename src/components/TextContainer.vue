<template>
<div class="text">
    <h2 class="title">{{title}}</h2>
  {{ text }}
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
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/globalStyles.scss';

h2 {
  text-align: center;
}
.text {
  letter-spacing: 3px;
  font-size: 1.8rem;
  text-align: justify;
  padding: 0 10rem;
  line-height: 4rem;
}
.title {
  color: $jr-blue;

}


</style>