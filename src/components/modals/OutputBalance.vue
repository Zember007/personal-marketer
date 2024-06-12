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
                    <div class="title">Вывод баланса</div>
                    <div class="desc">Выберите карту для вывода баланса</div>
                </div>

                <form action="#">
                    <div class="cart_variant">

                        <input type="radio" name="cart" id="cart10">
                        <label for="cart10">
                            <div class="cart">
                                <svg width="44" height="28" viewBox="0 0 44 28" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="44" height="28" rx="4" fill="#F5F6FA" />
                                    <path d="M20.1334 17.6876H17.8652L19.2839 9.4541H21.5519L20.1334 17.6876Z"
                                        fill="#15195A" />
                                    <path
                                        d="M28.3566 9.65522C27.9092 9.48863 27.1996 9.30469 26.3222 9.30469C24.0824 9.30469 22.505 10.4258 22.4954 12.0286C22.4768 13.2112 23.6247 13.868 24.4832 14.2623C25.3607 14.6653 25.659 14.9283 25.659 15.2874C25.6501 15.839 24.95 16.0933 24.2969 16.0933C23.3914 16.0933 22.9062 15.9622 22.1688 15.6553L21.8701 15.5237L21.5527 17.372C22.0847 17.5995 23.0648 17.8013 24.0824 17.8102C26.4623 17.8102 28.0117 16.7064 28.03 14.9983C28.0391 14.0611 27.4329 13.3429 26.1261 12.756C25.3328 12.3793 24.847 12.1253 24.847 11.7398C24.8563 11.3894 25.2579 11.0305 26.1534 11.0305C26.8908 11.0129 27.4326 11.1792 27.843 11.3457L28.0481 11.4332L28.3566 9.65522Z"
                                        fill="#15195A" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M32.4159 9.4541H34.1703L36.0001 17.6875H33.9C33.9 17.6875 33.6945 16.7415 33.6294 16.4524H30.7173C30.6331 16.6713 30.2412 17.6875 30.2412 17.6875H27.8613L31.2304 10.1372C31.4638 9.60288 31.8749 9.4541 32.4159 9.4541ZM32.2759 12.467C32.2759 12.467 31.5571 14.2977 31.3703 14.7707H33.2556C33.1623 14.359 32.7328 12.3882 32.7328 12.3882L32.5743 11.6787C32.5076 11.8614 32.411 12.1126 32.3459 12.282C32.3018 12.3968 32.2721 12.4741 32.2759 12.467Z"
                                        fill="#15195A" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.7495 15.0686L15.9708 9.4541H18.3692L14.804 17.6789H12.4055L10.3839 10.525C9.68634 10.1421 8.89018 9.83422 8 9.62056L8.03733 9.4542H11.6866C12.1812 9.47154 12.5826 9.62044 12.7132 10.1463L13.5057 13.9266C13.5061 13.9277 13.5064 13.9288 13.5067 13.9299L13.7495 15.0686Z"
                                        fill="#15195A" />
                                </svg>
                                <div class="cart_inf">
                                    <span>Visa</span>
                                    <span>52XX XXXX XXXX 0970</span>
                                </div>
                            </div>
                        </label>

                        <input type="radio" name="cart" id="cart20">
                        <label for="cart20">
                            <div class="cart">
                                <svg width="44" height="28" viewBox="0 0 44 28" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect width="44" height="28" rx="4" fill="#F5F6FA" />
                                    <path d="M20.1334 17.6876H17.8652L19.2839 9.4541H21.5519L20.1334 17.6876Z"
                                        fill="#15195A" />
                                    <path
                                        d="M28.3566 9.65522C27.9092 9.48863 27.1996 9.30469 26.3222 9.30469C24.0824 9.30469 22.505 10.4258 22.4954 12.0286C22.4768 13.2112 23.6247 13.868 24.4832 14.2623C25.3607 14.6653 25.659 14.9283 25.659 15.2874C25.6501 15.839 24.95 16.0933 24.2969 16.0933C23.3914 16.0933 22.9062 15.9622 22.1688 15.6553L21.8701 15.5237L21.5527 17.372C22.0847 17.5995 23.0648 17.8013 24.0824 17.8102C26.4623 17.8102 28.0117 16.7064 28.03 14.9983C28.0391 14.0611 27.4329 13.3429 26.1261 12.756C25.3328 12.3793 24.847 12.1253 24.847 11.7398C24.8563 11.3894 25.2579 11.0305 26.1534 11.0305C26.8908 11.0129 27.4326 11.1792 27.843 11.3457L28.0481 11.4332L28.3566 9.65522Z"
                                        fill="#15195A" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M32.4159 9.4541H34.1703L36.0001 17.6875H33.9C33.9 17.6875 33.6945 16.7415 33.6294 16.4524H30.7173C30.6331 16.6713 30.2412 17.6875 30.2412 17.6875H27.8613L31.2304 10.1372C31.4638 9.60288 31.8749 9.4541 32.4159 9.4541ZM32.2759 12.467C32.2759 12.467 31.5571 14.2977 31.3703 14.7707H33.2556C33.1623 14.359 32.7328 12.3882 32.7328 12.3882L32.5743 11.6787C32.5076 11.8614 32.411 12.1126 32.3459 12.282C32.3018 12.3968 32.2721 12.4741 32.2759 12.467Z"
                                        fill="#15195A" />
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13.7495 15.0686L15.9708 9.4541H18.3692L14.804 17.6789H12.4055L10.3839 10.525C9.68634 10.1421 8.89018 9.83422 8 9.62056L8.03733 9.4542H11.6866C12.1812 9.47154 12.5826 9.62044 12.7132 10.1463L13.5057 13.9266C13.5061 13.9277 13.5064 13.9288 13.5067 13.9299L13.7495 15.0686Z"
                                        fill="#15195A" />
                                </svg>
                                <div class="cart_inf">
                                    <span>Visa</span>
                                    <span>52XX XXXX XXXX 0970</span>
                                </div>
                            </div>
                        </label>

                    </div>

                    <label class="cart__number">
                        <span>Сумма</span>
                        <input placeholder="0₽" v-mask="'#####################'" type="text">
                    </label>

                    <div class="nav">
                        <button class="cart__button">Отменить</button>
                        <button class="cart__button">Вывести</button>
                    </div>
                </form>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'OutputBalance',

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
    width: 455px;
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



    input {
        width: 100%;
        background: none;
        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 8px;
        padding: 12px;
        background: none;
        display: flex;
        align-items: center;
    }
}

.cart_variant {
    display: flex;
    flex-direction: column;
    gap: 20px;

    label {
        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 8px;
        padding: 12px 16px;
        background: var(--background-background-secondary);
        cursor: pointer;

        color: var(--text-primary);

        span:first-child {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 12px;
            line-height: 110%;
            letter-spacing: -0.02em;
            color: var(--colors-secondary-grey-secondary);
        }
    }

    input {
        opacity: 0;
        visibility: hidden;
        z-index: -10;
        position: absolute;
        width: 0;
        height: 0;
    }

    input:checked+label {
        background: var(--component-colors-blue-active);
        color: var(--background-background-primary);

        span:first-child {
            color: var(--background-background-primary);
        }
    }


}


.cart {
    display: flex;
    align-items: center;
    gap: 12px;
}

.cart_inf {


    display: flex;
    flex-direction: column;
    gap: 4px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 110%;
    letter-spacing: -0.02em;

}

.nav {
    display: flex;
    gap: 8px;
}

.cart__button {
    border-radius: 6px;
    padding: 16px 40px;
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
        padding: 24px;
        margin: 0 10px;
        max-width: 360px;
    }
}
</style>