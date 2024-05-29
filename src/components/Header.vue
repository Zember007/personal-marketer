<template>
    <header class="header">
        <div class="header__inner">
            <div class="logo">
                <img src="../assets/img/sidebar/logo.svg" alt="logo">
            </div>
            <div class="header__nav">
                <PrimaryButton style="padding: 16px 40px;">Вход для клиентов</PrimaryButton>
                <PrimaryButton style="padding: 16px 40px;">Вход для исполнителей</PrimaryButton>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
    border-bottom: 1px solid var(--colors-secondary-border-color);
    background: var(--background-background-primary);
}

.header__inner {
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: space-between;
    padding: 12px 120px;
}

.header__nav{
    display: flex;
    align-items: center;
    gap: 12px;
}
</style>