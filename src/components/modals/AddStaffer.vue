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
                    <div class="title">Пригласить сотрудника</div>
                    <div class="desc">
                        Поделитесь ссылкой любым удобным способом
                        с человеком, которого хотите пригласить
                    </div>
                </div>
                <div class="share_link">
                    <input type="text" disabled value="www.link/add-to-team-link">
                    <button class="share_button">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
                                stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
                                stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>

                <div class="share_messanger">
                    <span>Поделиться с помощью</span>
                    <div class="share_messanger-nav">
                        <button class="messanger_button">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.66634 12.6668H5.33301C2.66634 12.6668 1.33301 12.0002 1.33301 8.66683V5.3335C1.33301 2.66683 2.66634 1.3335 5.33301 1.3335H10.6663C13.333 1.3335 14.6663 2.66683 14.6663 5.3335V8.66683C14.6663 11.3335 13.333 12.6668 10.6663 12.6668H10.333C10.1263 12.6668 9.92634 12.7668 9.79967 12.9335L8.79967 14.2668C8.35967 14.8535 7.63967 14.8535 7.19967 14.2668L6.19967 12.9335C6.09301 12.7868 5.84634 12.6668 5.66634 12.6668Z"
                                    stroke="#242626" stroke-miterlimit="10" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M10.6646 7.33333H10.6706" stroke="#242626" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M7.99666 7.33333H8.00265" stroke="#242626" stroke-linecap="round"
                                    stroke-linejoin="round" />
                                <path d="M5.32967 7.33333H5.33566" stroke="#242626" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button class="messanger_button">
                            <svg width="20" height="17" viewBox="0 0 20 17" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.83537 11.0705L7.52245 15.7587C7.98224 15.7587 8.1854 15.5484 8.44204 15.2989L10.6511 13.1508L15.247 16.5463C16.0928 17.013 16.7032 16.7714 16.9139 15.7611L19.931 1.54373C20.2398 0.305312 19.4589 -0.256375 18.6497 0.110971L0.93382 6.94216C-0.275458 7.42719 -0.268408 8.10185 0.713394 8.40247L5.2597 9.82144L15.7849 3.18123C16.2818 2.87992 16.7378 3.04191 16.3635 3.3741L7.83511 11.0703L7.83537 11.0705Z"
                                    fill="#242626" />
                            </svg>
                        </button>
                        <button class="messanger_button">
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <circle cx="14" cy="14" r="14" fill="#F8F8F8" />
                                <path
                                    d="M11.5574 16.6587V8.5H13.7805V12.9424V13.4992L14.3341 13.4396C15.481 13.316 16.5952 12.6133 17.4946 11.6645C18.3168 10.7972 18.9984 9.68484 19.396 8.5H21.6301C20.9603 11.0754 19.0178 12.9863 17.615 13.7985L16.7878 14.2776L17.6531 14.6838C19.0595 15.3442 21.2826 17.0197 22.3213 20H19.8079C18.9273 17.6363 16.9492 15.7965 14.3301 15.5355L13.7805 15.4807V16.033V19.9996C10.5415 19.9742 8.04406 18.8511 6.32404 16.8518C4.65259 14.909 3.6703 12.0859 3.51612 8.5H5.93863C6.18514 14.0282 8.70769 16.5857 10.9359 17.1437L11.5574 17.2993V16.6587Z"
                                    fill="#242626" stroke="#242626" />
                            </svg>
                        </button>
                        <button class="messanger_button">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.9225 1.05449L10.9225 1.0545C11.8168 1.41166 12.6181 1.92209 13.3096 2.56785C14.0002 3.21939 14.5411 3.97205 14.9173 4.80756C15.3066 5.68237 15.5059 6.60199 15.4999 7.55749H15.4999V7.56066C15.4999 8.51241 15.2998 9.43939 14.911 10.3067C14.5346 11.1427 13.9934 11.8958 13.3022 12.5477C12.6127 13.1979 11.8123 13.7023 10.916 14.0603L10.9159 14.0603C9.99162 14.4295 9.01111 14.6148 7.99666 14.6148C6.9081 14.6148 5.87317 14.4049 4.90027 13.9866L4.69867 13.8999L4.4984 13.9896L1.89515 15.1555L2.37689 12.516L2.42082 12.2753L2.25772 12.0929C1.11786 10.8183 0.5 9.21815 0.5 7.5541C0.5 6.60238 0.700046 5.67545 1.08878 4.8082C1.46521 3.97208 2.00644 3.21893 2.6977 2.56704C3.38716 1.91683 4.1876 1.41247 5.0839 1.0545L5.08393 1.05449C6.00823 0.685255 6.98875 0.5 8.00319 0.5C9.01764 0.5 9.99815 0.685255 10.9225 1.05449Z"
                                    fill="#242626" stroke="#242626" />
                                <path
                                    d="M11.2494 9.06099C10.9102 8.89049 10.6624 8.78558 10.4863 8.72C10.3754 8.68066 10.1145 8.56263 10.0232 8.63476C9.73616 8.87082 9.42959 9.53967 9.10347 9.66426C8.29467 9.50689 7.54458 8.94951 6.95755 8.37902C6.69665 8.12984 6.21398 7.42164 6.10962 7.23148C6.09005 7.03476 6.44226 6.77246 6.52053 6.62164C6.92492 6.16262 6.61838 5.8741 6.5662 5.68394C6.47488 5.48722 6.31835 5.13312 6.18137 4.84459C6.06397 4.65443 6.03785 4.37246 5.82913 4.26754C4.94206 3.80853 4.43333 4.72656 4.2246 5.20525C2.96575 8.25443 10.5319 14.0577 12.0712 10.0577C12.1495 9.71017 12.1169 9.57902 11.9995 9.42164C11.7647 9.25771 11.4907 9.18558 11.2494 9.06099Z"
                                    fill="#F8F8F8" />
                            </svg>
                        </button>
                    </div>
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
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 32px 40px;
    max-width: 440px;
    background: var(--background-background-primary);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 24px;
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
    right: 12px;
}

.inf {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
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

.share_link {
    display: flex;
    align-items: stretch;
    gap: 8px;

    input {
        width: 100%;
        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 8px;
        background: var(--background-background-secondary);
        padding: 12px;
    }
}

.share_button {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 12px;
    background: var(--background-background-secondary);

    svg {
        display: block;
    }
}

.share_messanger {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
}

.share_messanger-nav {
    display: flex;
    align-items: center;
    gap: 10px;
}

.messanger_button {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 4px;
    width: 40px;
    height: 40px;
    background: var(--background-background-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
}


@media(max-width: 550px) {
    .modal {
        padding: 24px 40px;
        margin: 0 10px;
    }
}
</style>