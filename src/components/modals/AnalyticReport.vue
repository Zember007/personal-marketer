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
                    <div class="title">Общий отчет</div>
                    <div class="text">
                        Получите полный отчет о аналитике
                        сайта за нужный пероид
                    </div>
                </div>

                <form action="#">
                    <div class="date">
                        <span>Дата</span>
                        <div class="select-box">
                            <select class="select">
                                <option selected value="Январь 2024">
                                    Январь 2024
                                </option>
                            </select>
                        </div>
                    </div>
                    <PrimaryButton>Скачать отчет</PrimaryButton>
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
    max-width: 385px;
    max-height: 90vh;
    overflow-y: auto;
    background: var(--background-background-primary);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 40px;
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
    top: 16px;
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

.text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
}

.date {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--text-secondary);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

form {
    display: flex;
    flex-direction: column;
    gap: 12px;
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
        right: 16px;
        pointer-events: none;
    }
}

.select {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 15px 30px;
    padding-right: 45px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 157%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    background: var(--background-background-secondary);
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

}


@media(max-width: 550px) {
    .modal {
        padding: 24px 40px;
        margin: 0 10px;
    }

    .select {
        font-size: 14px;
        padding: 12px 12px;
        padding-right: 22px;
    }

    .select-box::before {
        right: 7px;
    }
}
</style>