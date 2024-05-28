<template>
    <div class="profile_top">
        <div class='profile_top__title'>С возвращением, Алексей!</div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.profile_top {
    background: var(--background-background-primary);
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 12px;
    padding: 20px 32px;
}

.profile_top__title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}
</style>