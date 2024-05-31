<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <div>
                    <BurgerMenu @open-menu="open_menu" :burger_active="false"/>
                </div>
                <div class="header__inner-nav">
                    <div class="header__notification">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.34 14.49L18.34 12.83C18.13 12.46 17.94 11.76 17.94 11.35V8.82C17.94 6.47 16.56 4.44 14.57 3.49C14.05 2.57 13.09 2 11.99 2C10.9 2 9.92 2.59 9.4 3.52C7.45 4.49 6.1 6.5 6.1 8.82V11.35C6.1 11.76 5.91 12.46 5.7 12.82L4.69 14.49C4.29 15.16 4.2 15.9 4.45 16.58C4.69 17.25 5.26 17.77 6 18.02C7.94 18.68 9.98 19 12.02 19C14.06 19 16.1 18.68 18.04 18.03C18.74 17.8 19.28 17.27 19.54 16.58C19.8 15.89 19.73 15.13 19.34 14.49Z"
                                fill="#242626" />
                            <path
                                d="M14.83 20.01C14.41 21.17 13.3 22 12 22C11.21 22 10.43 21.68 9.87999 21.11C9.55999 20.81 9.31999 20.41 9.17999 20C9.30999 20.02 9.43999 20.03 9.57999 20.05C9.80999 20.08 10.05 20.11 10.29 20.13C10.86 20.18 11.44 20.21 12.02 20.21C12.59 20.21 13.16 20.18 13.72 20.13C13.93 20.11 14.14 20.1 14.34 20.07C14.5 20.05 14.66 20.03 14.83 20.01Z"
                                fill="#242626" />
                        </svg>
                    </div>
                    <RouterLink to="/profile" class="header__profile">
                        <div class="header__profile-box">
                            <div class="header__profile-name">Маркетолог</div>
                            <div class="header__profile-full_name">Алексей Цыплаков</div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import BurgerMenu from './BurgerMenu.vue'

export default {
    components:{
        BurgerMenu
    },

    methods: {
        open_menu(data){
            this.$emit('open-menu', data)
        }
    } 
}
</script>

<style lang="scss" scoped>
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    border-bottom: 1px solid var(--colors-secondary-border-color);
    background: var(--background-background-primary);
}

.header__inner {
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: space-between;
    padding: 15px 0;
}

.header__inner-nav{
    display: flex;
    align-items: center;
    gap: 24px;
}

.header__notification {}

.header__profile::before {
    content: url('../assets/img/header/Avatar.svg');    
}

.header__profile {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 16px;
}

.header__profile-box {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.header__profile-name {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
}

// .header__profile-full_name::after {
//     content: url('../assets/img/icons/arrow-down.svg');  
// }

.header__profile-full_name {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 5px;
}

@media(max-width:550px) {
    .header__profile-box {
        display: none;
    }
}

</style>
