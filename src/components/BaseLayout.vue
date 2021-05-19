<template>
<div :class="['base-layout', {'white-background': $route.name === 'projects'}]">
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
    &.white-background {
        background: white;
    }
}

</style>