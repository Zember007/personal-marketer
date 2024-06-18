<template>
    <div class="task">
        <div class="num">01</div>
        <div class="name">Аудит сайта</div>
        <div class="price">22,000₽</div>
        <button class="view" :class="{ active: isView }" @click.prevent="isView = !isView">
            <img src="../../assets/img/icons/dots_blue.svg" alt="dots">
            <div class="list_checks">
                <button class="check">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 9.66602V14.666L9.16667 12.9993" stroke="#242626" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.50065 14.6667L5.83398 13" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M18.3327 8.83268V12.9993C18.3327 17.166 16.666 18.8327 12.4993 18.8327H7.49935C3.33268 18.8327 1.66602 17.166 1.66602 12.9993V7.99935C1.66602 3.83268 3.33268 2.16602 7.49935 2.16602H11.666"
                            stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M18.3327 8.83268H14.9993C12.4993 8.83268 11.666 7.99935 11.666 5.49935V2.16602L18.3327 8.83268Z"
                            stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Скачать чек</span>
                </button>
                <button class="check">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 9.66602V14.666L9.16667 12.9993" stroke="#242626" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.50065 14.6667L5.83398 13" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M18.3327 8.83268V12.9993C18.3327 17.166 16.666 18.8327 12.4993 18.8327H7.49935C3.33268 18.8327 1.66602 17.166 1.66602 12.9993V7.99935C1.66602 3.83268 3.33268 2.16602 7.49935 2.16602H11.666"
                            stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M18.3327 8.83268H14.9993C12.4993 8.83268 11.666 7.99935 11.666 5.49935V2.16602L18.3327 8.83268Z"
                            stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
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
    width: 40px;
    height: 100%;

    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        right: 78%;
        transform: rotate(0) translate(0, -70%);
        opacity: 0;
        visibility: hidden;
        width: 2px;
        height: 20px;
        background: var(--colors-secondary-grey-secondary);
        // transition: all .5s; 
    }

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        right: 30%;
        transform: rotate(0) translate(50%, -70%);
        display: block;
        width: 2px;
        height: 20px;
        background: var(--colors-secondary-grey-secondary);
        // transition: all .5s;
        opacity: 0;
        visibility: hidden;
    }

    &.active {
        &>img {
            display: none;
        }

        &::before {
            content: "";
            transform: rotate(45deg) translate(0, -70%);

            opacity: 1;
            visibility: visible;
        }

        &::after {
            content: "";
            transform: rotate(-45deg) translate(0, -70%);
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
    transition: all .3s;

    &:hover {

        color: var(--component-colors-blue-active);
        background: var(--component-colors-link-active-background);

        svg path {
            stroke: var(--component-colors-blue-active);
        }

    }
}
</style>