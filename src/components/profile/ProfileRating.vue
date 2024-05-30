<template>
    <div class="rating_box">
        <div class="rating">
            <img v-for="star in Get_Rating()[0]" src="../../assets/img/icons/star.svg" alt="star">
            <img v-for="star in Get_Rating()[1]" src="../../assets/img/icons/star_empty.svg" alt="star_empty">
        </div>
        <span>({{ data.length }})</span>
    </div>
</template>

<script>
export default {
    name: "ProfileRating",

    props: {
        data: Object
    },

    methods: {
        Get_Rating() {
            let rating_sum = 0
            this.data.forEach(element => {
                rating_sum += element;
            });
            let rating_check = Math.round(rating_sum / this.data.length)
            let rating_uncheck = 5 - rating_check

            var rating = [rating_check, rating_uncheck]

            return rating
        }
    }

}
</script>

<style lang="scss" scoped>
.rating_box {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.rating{
    display: flex;
    align-items: center;
}

@media(max-width:550px) {
    img {
        width: 14px;
    }
}
</style>