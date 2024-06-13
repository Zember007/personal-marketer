<template>
    <div class="box">
        <div class="top">
            <div class="title">Последняя поисковая фраза</div>
            <div class="view">
                <img src="../../assets/img/icons/dots.svg" alt="dots">
            </div>
        </div>
        <div class="list">
            <div class="lsit_item main">
                <span>Фраза</span>
                <span>Визиты</span>
            </div>
            <div class="lsit_item">
                <span>Название компании</span>
                <span>2,872</span>
            </div>
            <div class="lsit_item">
                <span>Название компании</span>
                <span>2,872</span>
            </div>
            <div class="lsit_item">
                <span>Название компании</span>
                <span>2,872</span>
            </div>
            <div class="lsit_item">
                <span>Название компании</span>
                <span>2,872</span>
            </div>
            <div class="lsit_item">
                <span>Название компании</span>
                <span>2,872</span>
            </div>
            <div class="lsit_item">
                <span>Название компании</span>
                <span>2,872</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.box {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    background: var(--background-background-primary);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 24px 24px 20px 24px;
}

.title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.view {}

.list {
    display: flex;
    flex-direction: column;
    
}

.lsit_item {

    padding: 10px 24px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 167%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &.main {
        font-weight: 500;
        line-height: 159%;
        color: var(--text-secondary);
    }

    &:not(:last-child) {
        border-bottom: 1px solid var(--colors-secondary-border-color);
    }
}
</style>