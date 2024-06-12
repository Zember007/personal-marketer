<template>
    <header class="header">
        <div class="header__inner">
            <RouterLink to="/" class="logo">
                <img src="../assets/img/sidebar/logo.svg" alt="logo">
            </RouterLink>
            <div class="header__nav" :class="{ active: open_menu }">
                <RouterLink to="/login">
                    <PrimaryButton id="button">Вход для клиентов</PrimaryButton>
                </RouterLink>
                <RouterLink to="/auth">
                    <PrimaryButton id="button">Вход для исполнителей</PrimaryButton>
                </RouterLink>
            </div>
            <BurgerMenu @open-menu="menu_action" />
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import BurgerMenu from './BurgerMenu.vue';
export default {
    components: {
        BurgerMenu
    },
    data() {
        return {
            open_menu: false
        }
    },
    methods: {
        menu_action(data) {
            this.open_menu = data
        }
    }
}
</script>

<style lang="scss" scoped>
#button {
    width: 100%;
    padding: 16px 40px;
}

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

.header__nav {
    display: flex;
    align-items: center;
    gap: 12px;
}

@media(max-width:990px) {
    .header__inner {
        padding: 20px 12px;
    }

    

    .logo img {
        width: 140px;
    }
}

@media(min-width:550px) and (max-width:990px){
    #button {
        padding: 16px 20px;
        font-size: 14px;
    }
}

@media(max-width:550px) {


    .logo {
        width: 140px;

        img {
            width: 100%;
            height: auto;
        }
    }

    .header__nav {
        position: fixed;
        right: 0;
        top: 70px;
        background: var(--background-background-primary);
        border-radius: 15px;
        flex-direction: column;
        align-items: stretch;
        padding: 20px 20px;
        z-index: 100;
        transition: all .3s;
        transform: translateX(100%);

        &.active {
            transform: translateX(0);
        }
    }
}
</style>