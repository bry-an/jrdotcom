<template>
<div class="text">
  {{text}}
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

h2 {
  text-align: center;
}

.text {
  letter-spacing: 5px;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  color: $logo-red;
}

</style>