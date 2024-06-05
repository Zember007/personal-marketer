<template>
    <div class="task">
        <div class="num">01</div>
        <div class="name">Аудит сайта</div>
        <div class="price">22,000₽</div>
        <button class="view">
            <img src="../../assets/img/icons/dots.svg" alt="dots">
        </button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.task { 
    padding: 10px 0; 
    display: grid;
    grid: 1fr / 1fr 2.5fr 3fr 1fr;
    justify-items: center;
    align-items: center;
    height: 64px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.num {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
}

.action {
    border-radius: 8px;
    padding: 14px 0;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    width: 135px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--background-background-primary);
    text-align: center;

    &.order {
        background: var(--component-colors-blue-active);
    }
}

.view {}
</style>