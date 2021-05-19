<template>
  <div class="text">
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
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/globalStyles.scss';
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

h2 {
  text-align: center;
}

.text {
  letter-spacing: 5px;
  font-family: 'Lato', sans-serif;
  color: $logo-red;
}
</style>
