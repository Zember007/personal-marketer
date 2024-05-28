<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.button {
    border-radius: 6px;
    padding: 16px 70px;
    background: var(--primary-button-inactive-color);
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--background-background-primary);
}
</style>