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
    color:$jr-cream;
    background: black;
    opacity: 0.8;
}

</style>