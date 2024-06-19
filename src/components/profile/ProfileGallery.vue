<template>
    <div class="img-box" v-if="image">
        <img :src="image.url" alt="gallery">
    </div>
    <div class="img-box" v-else>
        <img class="icon" src="../../assets/img/profile/no_img.svg " alt="gallery">
    </div>
</template>

<script>
export default {
    name: "ProfileGallery",

    props: {
        image: Object
    },

}
</script>

<style lang="scss" scoped>
.img-box {
    background: var(--background-background-secondary);
    border-radius: 12px;
    max-width: 240px;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    img:not(.icon) {
        
        height: 100%;
    }
}

@media(max-width:990px) {
    .img-box {
        height: 200px;
    }
}

@media(max-width:550px) {
    .img-box {
        width: 140px; 
        height: 140px;
    }
}
</style>