<template>
    <div class="add" @click="click_add">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.66663 10H13.3333" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            <path d="M10 13.3337V6.66699" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            <path
                d="M7.49996 18.3337H12.5C16.6666 18.3337 18.3333 16.667 18.3333 12.5003V7.50033C18.3333 3.33366 16.6666 1.66699 12.5 1.66699H7.49996C3.33329 1.66699 1.66663 3.33366 1.66663 7.50033V12.5003C1.66663 16.667 3.33329 18.3337 7.49996 18.3337Z"
                stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

        <span><slot></slot></span>
    </div>
</template>

<script>
export default {
    name:"DataAdd",
    methods: {
        click_add() {
            this.$emit('click-add')
        }
    }
}
</script>

<style lang="scss" scoped>
.add {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 15px 16px;
    background: var(--background-background-primary);
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 8px;
    cursor: pointer;
}
</style>