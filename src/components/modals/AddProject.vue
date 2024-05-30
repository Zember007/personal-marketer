<template>
    <transition name="modal-fade">
        <div class="modal-backdrop">
            <div class="modal">
                <div class="modal__top">
                    <span>Добавить проект в портфолио</span>
                    <button type="button" @click="close">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 17.4141L20.9497 22.3639C21.3363 22.7504 21.9774 22.7504 22.364 22.3639C22.7505 21.9773 22.7505 21.3362 22.364 20.9496L17.4142 15.9999L22.364 11.0501C22.7505 10.6636 22.7505 10.0225 22.364 9.63593C21.9774 9.24938 21.3363 9.24938 20.9497 9.63593L16 14.5857L11.0503 9.63593C10.6637 9.24938 10.0226 9.24938 9.63604 9.63593C9.24949 10.0225 9.24949 10.6636 9.63604 11.0501L14.5858 15.9999L9.63604 20.9496C9.24949 21.3362 9.24949 21.9773 9.63604 22.3639C10.0226 22.7504 10.6637 22.7504 11.0503 22.3639L16 17.4141Z"
                                fill="#242626" />
                        </svg>
                    </button>
                </div>
                <div class="project__new">
                    <div class="title">
                        <input type="text" name="title" placeholder="Название проекта...">
                    </div>
                    <div class="description">
                        <textarea name="description" placeholder="Описание проекта..."></textarea>
                    </div>

                    <div class="img">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9.5 10C10.6046 10 11.5 9.10457 11.5 8C11.5 6.89543 10.6046 6 9.5 6C8.39543 6 7.5 6.89543 7.5 8C7.5 9.10457 8.39543 10 9.5 10Z"
                                stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M13.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22H15.5C20.5 22 22.5 20 22.5 15V10"
                                stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.25 5H21.75" stroke="#242626" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M19 7.75V2.25" stroke="#242626" stroke-width="1.5" stroke-linecap="round" />
                            <path
                                d="M3.17004 18.9501L8.10004 15.6401C8.89004 15.1101 10.03 15.1701 10.74 15.7801L11.07 16.0701C11.85 16.7401 13.11 16.7401 13.89 16.0701L18.05 12.5001C18.83 11.8301 20.09 11.8301 20.87 12.5001L22.5 13.9001"
                                stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Добавить изображение</span>
                    </div>
                </div>
                <div class="modal__nav">
                    <button class="modal__button">Отменить</button>
                    <button class="modal__button" disabled>Сохранить</button>
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

button{
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
    padding: 64px 32px;
    max-width: 650px;
    background: var(--background-background-primary);
}

.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease
}

.modal__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--text-tertiary);
}

.project__new {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.title {
    input {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 44px;
        line-height: 100%;
        letter-spacing: -0.02em;
        color: var(--text-primary);
        border: 0;
        background: transparent;

        &::placeholder {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 44px;
            line-height: 100%;
            letter-spacing: -0.02em;
            color: var(--text-tertiary);
        }
    }
}

.description {
    textarea {
        resize: none;
        height: 80px;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
        letter-spacing: -0.02em;
        color: var(--text-tertiary);
        background: none;
        border: 0;
    }
}

.img {
    padding: 60px;
    border-radius: 16px;
    background: var(--background-background-secondary);
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.modal__nav {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
}

.modal__button {
    border-radius: 6px;
    padding: 16px 40px;
    background: var(--primary-button-inactive-color);
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--background-background-primary);
}
</style>