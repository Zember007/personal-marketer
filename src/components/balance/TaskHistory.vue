<template>
    <div class="task">
        <div class="num">01</div>
        <div class="name">Аудит сайта</div>
        <div class="price">22,000₽</div>
        <button class="view" :class="{ active: isView }" @click.prevent="isView = !isView">
            <img src="../../assets/img/icons/dots_blue.svg" alt="dots">
            <div class="list_checks">
                <button class="check">
                    <img src="../../assets/img/icons/download-file.svg" alt="download">
                    <span>Скачать чек</span>
                </button>
                <button class="check">
                    <img src="../../assets/img/icons/download-file.svg" alt="download">
                    <span>Скачать акт</span>
                </button>
            </div>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isView: false
        }
    }
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

.view {
    position: relative;
    width: 100%;
    height: 100%;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 36%;
        transform: rotate(0) translate(0, -70%);
        opacity: 0;
        visibility: hidden;
        width: 2px;
        height: 20px;
        background: var(--colors-secondary-grey-secondary);
        transition: all .5s;
    }

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 70%;
        transform: rotate(0) translate(0, -70%);
        display: block;
        width: 2px;
        height: 20px;
        background: var(--colors-secondary-grey-secondary);
        transition: all .5s;
        opacity: 0;
        visibility: hidden;
    }

    &.active {
        &>img {
            display: none;
        }

        &::before {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            left: 36%;
            transform: rotate(45deg) translate(0, -70%);
            width: 2px;
            height: 20px;
            background: var(--colors-secondary-grey-secondary);
            transition: all .5s;
            opacity: 1;
            visibility: visible;
        }

        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 70%;
            transform: rotate(-45deg) translate(0, -70%);
            display: block;
            width: 2px;
            height: 20px;
            background: var(--colors-secondary-grey-secondary);
            transition: all .5s;
            opacity: 1;
            visibility: visible;
        }


        .list_checks {
            opacity: 1;
            visibility: visible;
        }
    }
}

.list_checks {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    right: 20px;
    z-index: 1;
    border-radius: 8px;
    box-shadow: 0 0 12px 0 rgba(89, 89, 89, 0.1), 0 0 22px 0 rgba(89, 89, 89, 0.09), 0 50px 30px 0 rgba(89, 89, 89, 0.05), 0 88px 35px 0 rgba(89, 89, 89, 0.01), 0 138px 38px 0 rgba(89, 89, 89, 0);
    background: var(--background-background-primary);
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
}

.check {
    padding: 12px 16px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 165%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>