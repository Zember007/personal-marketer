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

                <div class="title">Добавить новую карту</div>

                <form action="#">
                    <label class="cart__number">
                        <span>Номер карты</span>
                        <div class="input__box">

                            <input v-mask="'#### #### #### ####'" placeholder="XXXX XXXXX XXXXX XXXXX" type="text">

                            <svg width="44" height="28" viewBox="0 0 44 28" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect width="44" height="28" rx="4" fill="#F5F6FA" />
                                <path d="M19.86 18.383H17.8301L19.0998 10.1494H21.1296L19.86 18.383Z" fill="#15195A" />
                                <path
                                    d="M27.2182 10.3505C26.8178 10.1839 26.1828 10 25.3975 10C23.3929 10 21.9812 11.1211 21.9725 12.7239C21.9559 13.9065 22.9833 14.5634 23.7516 14.9577C24.537 15.3606 24.804 15.6236 24.804 15.9827C24.796 16.5343 24.1693 16.7886 23.5849 16.7886C22.7744 16.7886 22.3402 16.6575 21.6803 16.3506L21.413 16.219L21.1289 18.0673C21.605 18.2948 22.4822 18.4966 23.3929 18.5055C25.5228 18.5055 26.9095 17.4017 26.9259 15.6937C26.934 14.7564 26.3916 14.0382 25.222 13.4513C24.512 13.0746 24.0772 12.8206 24.0772 12.4351C24.0855 12.0847 24.445 11.7258 25.2464 11.7258C25.9064 11.7082 26.3912 11.8746 26.7585 12.041L26.9421 12.1285L27.2182 10.3505Z"
                                    fill="#15195A" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M30.8516 10.1494H32.4218L34.0595 18.3828H32.1799C32.1799 18.3828 31.996 17.4368 31.9377 17.1478H29.3314C29.256 17.3666 28.9054 18.3828 28.9054 18.3828H26.7754L29.7906 10.8326C29.9995 10.2982 30.3674 10.1494 30.8516 10.1494ZM30.7263 13.1623C30.7263 13.1623 30.083 14.993 29.9159 15.466H31.6032C31.5197 15.0543 31.1353 13.0835 31.1353 13.0835L30.9934 12.374C30.9337 12.5567 30.8473 12.8079 30.789 12.9773C30.7495 13.0921 30.7229 13.1694 30.7263 13.1623Z"
                                    fill="#15195A" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14.1456 15.7639L16.1336 10.1494H18.2802L15.0894 18.3742H12.9428L11.1336 11.2203C10.5092 10.8374 9.79669 10.5295 9 10.3159L9.03341 10.1495H12.2994C12.7421 10.1669 13.1013 10.3158 13.2182 10.8416L13.9275 14.622C13.9278 14.623 13.9281 14.6241 13.9284 14.6252L14.1456 15.7639Z"
                                    fill="#15195A" />
                            </svg>
                        </div>
                    </label>
                    <div class="cart_inf">
                        <label class="cart__number">
                            <span>CVV</span>
                            <input placeholder="000" v-mask="'###'" type="text">
                        </label>
                        <label class="cart__number">
                            <span>Срок действия</span>
                            <input placeholder="XX/XX" v-mask="'##/##'" type="text">
                        </label>
                        <label class="cart__number">
                            <span>Имя владельца</span>
                            <input placeholder="Введите имя" type="text">
                        </label>

                    </div>

                    <div class="nav">
                        <button class="cart__button">Отменить</button>
                        <button class="cart__button">Добавить</button>
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
    padding: 24px 32px;
    max-width: 455px;
    max-height: 90vh;
    overflow-y: auto;
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
    top: 16px;
    right: 16px;
}

.title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

form {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.cart__number {

    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);

    .input__box {
        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 8px;
        padding: 8px 12px;
        background: none;
        display: flex;
        align-items: center;

        input {
            width: 100%;
            background: none;
        }
    }
}


.cart_inf {
    display: flex;
    gap: 16px;

    input {
        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 8px;
        padding: 16px 12px;
        background: none;
        width: 100%;
    }
}

.nav {
    display: flex;
    gap: 8px;
}

.cart__button {
    border-radius: 6px;
    padding: 16px 0;
    background: var(--primary-button-inactive-color);
    width: 100%;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--background-background-primary);
}

@media(max-width: 550px) {
    .modal {
        padding: 20px;
        margin: 0 10px;
    }

    .title {
        font-size: 20px;
    }

    .cart__number {
        font-size: 12px;

        input {
            font-size: 12px;
            padding: 16px 5px;

            &::placeholder {
                font-size: 12px;
            }
        }
    }
}
</style>