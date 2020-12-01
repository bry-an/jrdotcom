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
    opacity: 0.99;
    background: $logo-cream;
}

</style>