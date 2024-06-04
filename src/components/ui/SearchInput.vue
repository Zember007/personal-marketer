<template>
    <div class="wrapper">
        <input class="input" type="text" placeholder="Поиск по имени">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 10px 12px;
    width: 100%;
    background: var(--background-background-primary);
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
        content: url('../../assets/img/icons/search.svg');
    }
}
</style>