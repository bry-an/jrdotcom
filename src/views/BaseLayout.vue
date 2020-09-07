<template>
<div id="overlay">
    <div id="layout"
    :style="backgroundImageStyle"
    class="hero-image"
    >
        <slot />
    </div>
</div>
</template>

<script>
export default {
    name: 'BaseLayout',
    computed: {
        backgroundImageStyle() {
            let imageUrl = ''
            if (this.$route.name === 'home') {
                imageUrl =  'https://blogsimages.adobe.com/creative/files/2019/07/AdobeStock_211622740_header.jpeg'
            }
            return {
                backgroundImage: `url(${imageUrl}), linear-gradient(#eb01a5, #d13531)`
            }
        }
    }

}
</script>

<style lang="scss" scoped>

#overlay {
    background: black;
    opacity: 0.8;
}

.hero-image {
  background-color: #cccccc; /* Used if the image is unavailable */
  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
}

#layout {
    width: 100vw;
    height: 100vh;
    margin: auto;
}

</style>