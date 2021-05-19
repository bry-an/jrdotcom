<template>
    <div class="image-container">
        <div v-for="imageLink in imageLinks" :key="imageLink" class="image-box">
            <img class="image" :src="imageLink" alt="jon rose"/>
            <div class="caption">Jon Campbell Rose</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TwoByTwoImage',
    props: {
        imageLinks: {
            type: Array,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $jr-blue;
}

.image-box {
    text-align: center;
}

.image {
    border-radius: 50%;
    border: 5px solid $jr-cream;
    width: 80%;
}
.caption {
    text-align: center;
    font-size: 2rem;
    color: #222222;
    margin-top: 20px;
    margin-bottom: 50px;
}
</style>