<template>
    <div class="wrapper">
        <div class="title">Сообщения</div>
        <div class="chats">
            <UserCart />
            <UserCart />
            <UserCart />
            <UserCart />
            <UserCart />
            <UserCart />
            <UserCart />
        </div>
        <button class="add_new">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66699 10H13.3337" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M10 13.3337V6.66699" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M7.50033 18.3337H12.5003C16.667 18.3337 18.3337 16.667 18.3337 12.5003V7.50033C18.3337 3.33366 16.667 1.66699 12.5003 1.66699H7.50033C3.33366 1.66699 1.66699 3.33366 1.66699 7.50033V12.5003C1.66699 16.667 3.33366 18.3337 7.50033 18.3337Z"
                    stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>Новый чат</span>
        </button>
    </div>
</template>

<script>
import UserCart from './UserCart.vue'
export default {
    components: {
        UserCart
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
}

.title {
    padding: 8px 12px;
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 14px;
    line-height: 114%;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
}

.chats {
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
}

.add_new {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 12px 28px;
}
</style>