<template>
    <RouterLink to="/blog/post" class="blog-cart">
        <div class="img">
            <img src="../../assets/img/home/materials/image.jpg" alt="materials">
        </div>
        <div class="inf">
            <div class="category">
                <span>Веб-дизайн</span>
                <span>Сайты</span>
                <span>Бизнес</span>
            </div>
            <div class="title">
                Как найти подходящего
                исполнителя?
            </div>
            <div class="date">22.05.2024</div>
            <div v-if="description" class="text">
                Разработка сайта в 2024 году - это важный шаг для любого бизнеса, стремящегося укрепить своё
                присутствие в интернете.
            </div>
        </div>
    </RouterLink>
</template>

<script>
export default {
    props: {
        description: Boolean
    }
}
</script>

<style lang="scss" scoped>
.blog-cart {
    display: flex;
    flex-direction: column;
    gap: 24px;
    width: 100%;
}

.inf {
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 0 12px;
}

.img {

    img {
        width: 100%;
    }
}

.category {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    span {
        border-radius: 8px;
        padding: 12px 16px;
        background: #f1f4f8;
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: -0.02em;
        color: #87a0b1;
    }
}

.title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 28px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.date {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
}

.text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
}

@media(max-width:550px) {
    .title {
        font-size: 24px;
    }

    .date {
        font-size: 16px;
    }

    .text {
        font-size: 16px;
    }
}
</style>