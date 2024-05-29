<template>
    <Header></Header>
    <div class="auth__container">
        <slot></slot>
    </div>
</template>

<script setup> 
import Header from '../components/Header.vue';
</script>

<style lang="scss" scoped>
.auth__container {
    margin-top: 80px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 80px;
}
</style>