<template>
    <Header></Header>
    <div class="auth__container">
        <slot></slot>
    </div>
    <div class="link">
        <a href="#">Публичная оферта</a>
        <a href="/public/Политика конфиденциальности.pdf">Политика конфиденциальности</a>
    </div>
</template>

<script setup>
import Header from '../components/Header.vue';
</script>

<style lang="scss" scoped>
.auth__container {
    margin-top: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 80px;
    padding: 15px;
}

.link {
    display: flex;
    gap: 32px;
    position: absolute;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);

    a {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 16px;
        letter-spacing: -0.02em;
        text-decoration: underline;
        text-decoration-skip-ink: none;
        color: var(--text-secondary);
    }
}

@media(max-width:780px) {
    .auth__container {
        margin: 36px 0;
        gap: 32px;
    }
}
</style>