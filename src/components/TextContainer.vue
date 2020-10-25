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
  font-weight: bold;
  color: $logo-cream;
  text-shadow: 2px 2px $logo-red;
  font-family: 'PT Sans Narrow';
}

</style>