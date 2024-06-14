<template>
    <transition name="modal-fade">
        <div class="modal-backdrop" @click="close">
            <div class="modal" @click.stop>
                <form class="box">
                    <div class="title">Интеграция отчета</div>
                    <input placeholder="API ключ" type="text">
                    <input placeholder="User ID" type="text">
                    <input placeholder="ID проекта" type="text">
                    <div class="nav">
                        <button @click.prevent="close" class="cancel">Отменить</button>
                        <button class="final">Готово</button>
                    </div>
                </form>
                <div class="hide">
                    <ul>
                        <li>1. Зарегистрируйтесь на сайте <a href="#">Topvisor</a>.</li>
                        <li>2. Создайте API ключ.</li>
                        <li>3. Добавьте номер вашего API ключа.</li>
                        <li>4. Укажите ваш User ID и ID проекта.</li>
                    </ul>
                </div>
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
    width: 320px;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: column;
}

.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease
}

.title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.box {
    background: var(--background-background-primary);
    padding: 16px 20px;
    display: flex;
    flex-direction: column;
    gap: 18px;

    input {
        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 4px;
        padding: 12px 16px;
        background: var(--background-background-primary);
        width: 100%;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.02em;
        color: var(--text-primary);
    }
}

.nav {
    display: flex;
    gap: 8px;

    button {
        width: 100%;
        border-radius: 6px;
        padding: 16px 0;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        line-height: 114%;
        letter-spacing: -0.02em;
        color: var(--background-background-primary);
    }

    .cancel {
        background: var(--primary-button-inactive-color);
    }

    .final {
        background: var(--primary-button-color);
    }
}



.hide {
    background: #e7f1ff;
    padding: 24px 20px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--grey-primary-grey-300);

    a {
        color: var(--blue-primary-blue-900);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>