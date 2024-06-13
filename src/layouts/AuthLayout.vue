<template>
    <div class="wrapper">
        <Header></Header>
        <div class="auth__container">
            <slot></slot>
        </div>
        <div class="link">
            <a @click.prevent="open_polzovatel" href="#">Публичная оферта</a>
            <a @click.prevent="open_privacy_policy" href="#">Политика конфиденциальности</a> 
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
    components : {
        Header
    },
    methods: {
        open_privacy_policy(){
            window.open('/privacy-policy.pdf','_blank')
        },
        open_polzovatel() {
            window.open('/oferta.pdf','_blank')
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;

    padding-bottom: 70px;
}

.auth__container {
    width: 100%;
    min-height: calc(100vh - 150px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 80px;
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
        white-space: nowrap;
    }
}

@media(max-width:780px) {
    .auth__container {
        margin: 36px 0;
        gap: 32px;
    }

    .link {
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
}
</style>