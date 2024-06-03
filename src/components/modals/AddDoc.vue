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
                    <div class="title">Добавить документ</div>
                    <div class="desc">
                        Добавьте нужный документ
                        в формате .pdf, .docx или .pptx
                    </div>
                </div>
                <form action="#">
                    <div class="dropdown">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.5 17V11L7.5 13" stroke="#626767" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M9.5 11L11.5 13" stroke="#626767" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M22.5 10V15C22.5 20 20.5 22 15.5 22H9.5C4.5 22 2.5 20 2.5 15V9C2.5 4 4.5 2 9.5 2H14.5"
                                stroke="#626767" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22.5 10H18.5C15.5 10 14.5 9 14.5 6V2L22.5 10Z" stroke="#626767" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span>Перенесите сюда
                            или загрузите нужный файл</span>
                    </div>
                    <div class="upload_list">
                        <div class="upload_file">
                            <div class="upload_file-box">
                                <div class="upload_file-icon">
                                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.16667 0.333008H3.83333C1.5 0.333008 0.5 1.66634 0.5 3.66634V10.333C0.5 12.333 1.5 13.6663 3.83333 13.6663H9.16667C11.5 13.6663 12.5 12.333 12.5 10.333V3.66634C12.5 1.66634 11.5 0.333008 9.16667 0.333008ZM3.83333 7.16634H6.5C6.77333 7.16634 7 7.39301 7 7.66634C7 7.93967 6.77333 8.16634 6.5 8.16634H3.83333C3.56 8.16634 3.33333 7.93967 3.33333 7.66634C3.33333 7.39301 3.56 7.16634 3.83333 7.16634ZM9.16667 10.833H3.83333C3.56 10.833 3.33333 10.6063 3.33333 10.333C3.33333 10.0597 3.56 9.83301 3.83333 9.83301H9.16667C9.44 9.83301 9.66667 10.0597 9.66667 10.333C9.66667 10.6063 9.44 10.833 9.16667 10.833ZM10.8333 5.16634H9.5C8.48667 5.16634 7.66667 4.34634 7.66667 3.33301V1.99967C7.66667 1.72634 7.89333 1.49967 8.16667 1.49967C8.44 1.49967 8.66667 1.72634 8.66667 1.99967V3.33301C8.66667 3.79301 9.04 4.16634 9.5 4.16634H10.8333C11.1067 4.16634 11.3333 4.39301 11.3333 4.66634C11.3333 4.93967 11.1067 5.16634 10.8333 5.16634Z"
                                            fill="#242626" />
                                    </svg>
                                </div>
                                <div class="upload_file-inf">
                                    <div class="name">Аудит сайта.txt</div>
                                    <div class="size">24 MB</div>
                                </div>
                            </div>
                            <div class="remove">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.9916 1.66699H7.00829C3.97496 1.66699 2.16663 3.47533 2.16663 6.50866V13.4837C2.16663 16.5253 3.97496 18.3337 7.00829 18.3337H13.9833C17.0166 18.3337 18.825 16.5253 18.825 13.492V6.50866C18.8333 3.47533 17.025 1.66699 13.9916 1.66699ZM13.6333 13.1337C13.5833 13.842 13.525 14.7253 11.925 14.7253H9.07496C7.48329 14.7253 7.41663 13.842 7.36663 13.1337L7.10829 9.83366C7.09163 9.61699 7.16663 9.40866 7.30829 9.25033C7.44996 9.09199 7.65829 9.00866 7.86663 9.00866H13.1333C13.3416 9.00866 13.55 9.10033 13.6916 9.25033C13.8333 9.40866 13.9083 9.61699 13.8916 9.82533L13.6333 13.1337ZM14.5 8.18366C14.4833 8.18366 14.4666 8.18366 14.45 8.18366C13.5833 8.10033 12.7916 8.04199 12.0333 8.00866C11.0166 7.95866 9.99996 7.94199 8.97496 7.98366C8.47496 8.00866 7.96663 8.04199 7.46663 8.09199L6.55829 8.18366C6.54163 8.18366 6.51663 8.18366 6.49996 8.18366C6.20829 8.18366 5.95829 7.96699 5.93329 7.66699C5.89996 7.35866 6.13329 7.07533 6.44163 7.05033L7.34996 6.95866C7.70829 6.92533 8.05829 6.90033 8.41663 6.88366L8.48329 6.49199C8.54996 6.07533 8.67496 5.27533 9.92496 5.27533H11.0833C12.3416 5.27533 12.4666 6.10033 12.525 6.50033L12.5916 6.90033C13.2166 6.93366 13.8583 6.98366 14.5583 7.05033C14.875 7.08366 15.1 7.35866 15.075 7.67533C15.0416 7.96699 14.7916 8.18366 14.5 8.18366Z"
                                        fill="#242626" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <PrimaryButton style="width: 100%;">Добавить</PrimaryButton>
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
    max-width: 380px;
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

.desc {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
}

.dropdown {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--text-tertiary);
    background: var(--background-background-secondary);
    border: 1px dashed var(--colors-secondary-blue-secondary);
    border-radius: 8px;
    padding: 50px 0px;
    cursor: pointer;
}

.upload_list {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.upload_file {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.upload_file-box {
    display: flex;
    align-items: center;
    gap: 12px;
}

.upload_file-icon {
    border-radius: 4px;
    padding: 10px;
    background: var(--background-background-secondary);

    svg {
        display: block;
    }
}

.upload_file-inf {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.name {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.size {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
}

.remove {
    cursor: pointer;
}

form{
    display: flex;
    flex-direction: column;
    gap: 12px;
}

@media(max-width: 550px) {
  .modal{
    padding: 24px 40px;
    margin: 0 10px;
  }  
}
</style>