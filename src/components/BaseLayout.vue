<template>
<div class="base-layout">
    <slot />
</div>
  
</template>

<script>
export default {
    name: 'BaseLayout'
}
</script>

<style lang="scss">
@import '@/assets/style/globalStyles.scss';

.base-layout {
    color:#111111;
    background: $jr-blue;
    opacity: 0.8;
}

</style>