<template>
    <div class="burger_menu" :class="{active:burger_active}"  @click="burger_action()">
        <span></span>
        <div class="overlay"></div>
    </div>
</template>

<script>
export default {
    name: "BurgerMenu",

    data(){
        return {
            burger_active: false
        }
    },
    
    methods: {
        burger_action(){
             this.burger_active? this.burger_active = false : this.burger_active = true   
             this.$emit('open-menu', this.burger_active)
        }
    }
}
</script>

<style lang="scss" scoped>
.overlay{
    position: fixed;
    top: 0;
    bottom: 0;left: 0;right: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
}
.burger_menu {
    display: none;
    cursor: pointer;
    padding: 6px 0;

    span {
        position: relative;
        display: block;
        width: 22px;
        height: 3px;
        background: #222;
        transition: all .2s ease-in-out;

        &:before,
        &:after {
            position: absolute;
            background: #222;
            content: '';
            width: 22px;
            height: 3px;
            transition: all .2s ease-in-out;
        }

        &:before {
            top: -8px;
        }

        &:after {
            top: 8px;
        }
    }
}

.burger_menu.active {
    span {
        background: transparent;

        &:before {
            transform: rotate(45deg) translate(5px, 6px);
        }

        &:after {
            transform: rotate(-45deg) translate(5px, -6px);
        }
    }

    .overlay{
        opacity: 1;
        visibility: visible;
    }
}

@media (max-width: 990px) {
    .burger_menu {
        display: block;
    }
}
</style>