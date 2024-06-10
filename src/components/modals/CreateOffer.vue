<template>
    <transition name="modal-fade">
        <div class="modal-backdrop" @click="close">
            <div class="modal" @click.stop>
                <button @click.prevent="close" class="close">
                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.5 17.1421L21.4497 22.0919C21.8363 22.4784 22.4774 22.4784 22.864 22.0919C23.2505 21.7053 23.2505 21.0642 22.864 20.6777L17.9142 15.7279L22.864 10.7782C23.2505 10.3916 23.2505 9.75051 22.864 9.36396C22.4774 8.97741 21.8363 8.97741 21.4497 9.36396L16.5 14.3137L11.5503 9.36396C11.1637 8.97741 10.5226 8.97741 10.136 9.36396C9.74949 9.75051 9.74949 10.3916 10.136 10.7782L15.0858 15.7279L10.136 20.6777C9.74949 21.0642 9.74949 21.7053 10.136 22.0919C10.5226 22.4784 11.1637 22.4784 11.5503 22.0919L16.5 17.1421Z"
                            fill="#242626" />
                    </svg>

                </button>
                <div class="inf">
                    <div class="title">Создайте предложение</div>
                    <div class="desc">
                        Предложение будет отправлено <RouteLink class="link">Андрею Войнову</RouteLink>
                    </div>
                </div>
                <form action="#">
                    <div class="offer__desc-box">
                        <div class="offer__desc-title"><span>Описание</span></div>
                        <div class="offer__desc">
                            <textarea placeholder="Кратко опишите, какая работа будет проделана"></textarea>
                        </div>
                    </div>
                    <div class="offer__details">
                        <div class="offer__details-title"><span>Детали:</span></div>
                        <div class="offer__details-block">
                            <div class="offer__details-block-title"><span>Почасовая ставка</span></div>
                            <div class="offer__details-block-text"><span>2,500₽</span></div>
                        </div>
                        <div class="offer__details-block">
                            <div class="offer__details-block-title"><span>Часов в месяц</span></div>
                            <div class="offer__details-block-text">
                                <div class="select-box">
                                    <select class="select">
                                        <option disabled hidden selected>10</option>
                                        <option v-for="item in items" :selected="item.active" :value="item.name">{{
                                            item.name }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="offer__details-block">
                            <div class="offer__details-block-title"><span>Итог</span></div>
                            <div class="offer__details-block-text"><span>25,000₽</span></div>
                        </div>
                    </div>
                    <div class="nav">
                        <SecondaryButton style="padding: 16px; width: 100%;">Отменить</SecondaryButton>
                        <PrimaryButton style="width: 100%;padding: 16px;">Добавить</PrimaryButton>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'AddProject',

    methods: {
        close() {
            this.$emit('close')
        },
    },
}
</script>

<style lang="scss" scoped>
button {
    background: none;
}

.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal {
    border-radius: 8px;
    padding: 24px 60px;
    max-width: 560px;
    background: var(--background-background-primary);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease
}

.close {
    position: absolute;
    top: 12px;
    right: 16px;
}

.inf {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.desc {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-secondary);

    .link {
        text-decoration: underline;
        text-decoration-skip-ink: none;
        color: var(--component-colors-blue-active);
        cursor: pointer;
    }
}

form {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.offer__desc-box {
    border-radius: 8px;
    padding: 20px 32px;
    background: var(--background-background-secondary);
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.offer__desc-title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.offer__desc {
    width: 100%;
    height: 120px;

    textarea {
        resize: none;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 12px;
        letter-spacing: -0.02em;
        width: 100%;
        height: 100%;
        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 8px;
        padding: 8px 16px;
    }
}

.offer__details {
    border-radius: 8px;
    padding: 20px 32px;
    background: var(--background-background-secondary);
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.offer__details-title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.offer__details-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}

.offer__details-block-title {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--text-secondary);
}

.offer__details-block-text {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--text-primary);
}

.nav {
    display: flex;
    gap: 20px;
}

.select-box {
    position: relative;
    background: var(--background-background-primary);
    height: 100%;

    &::before {
        content: "";
        background: url('../../assets/img/icons/arrow-down.svg') no-repeat;
        width: 14px;
        height: 14px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 7px;
        pointer-events: none;
    }
}

.select {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 5px 20px;
    width: 70px;
    text-align: center;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    background: transparent;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

}


@media(max-width: 550px) {
    .modal {
        padding: 32px 20px;
        margin: 0 10px;
    }

    .title {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: -0.02em;
        color: var(--text-primary);
    }

    .desc {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: -0.02em;
        color: var(--text-secondary);
    }
}
</style>