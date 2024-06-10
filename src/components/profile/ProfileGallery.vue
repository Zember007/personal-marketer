<template>

    <div class="img-box">
        <img src="../../assets/img/profile/no_img.svg " alt="gallery">
    </div>
</template>

<script>
export default {
    name: "ProfileGallery"

}
</script>

<style lang="scss" scoped>
.img-box {
    background: var(--background-background-secondary);
    border-radius: 12px;
    width: 100%;
    height: 240px;
    display: flex;
    align-items: center;
    justify-content: center;
}

@media(max-width:990px) {
    .img-box {
        height: 180px;
    }
}

@media(max-width:550px) {
    .img-box {
        width: 144px; 
        height: 144px;
    }
}
</style>