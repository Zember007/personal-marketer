<template>
    <div class="transaction__box">
        <div class="transaction__top">
            <div class="title"><span>История транзакций</span></div>
            <button class="view_all" @click="visible=!visible"><span>Все транзации</span></button>
        </div>
        <div class="transaction__list" :class="{active:visible}">
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
        </div>
    </div>
</template>

<script>
import Transaction from './Transaction.vue';
export default {
    components: {
        Transaction,
    },
    data(){
        return {
            visible: false
        }
    }
}
</script>

<style lang="scss" scoped>
.transaction__box {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 24px;
    background: var(--background-background-primary);
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.transaction__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.view_all {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
}

.transaction__list {
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: 492px;
    transition: all .5s;
    overflow: hidden;
    &.active {
        max-height: 100000000000000px;
    }
}

@media(max-width:1560px){
    .transaction__list{
        max-height: 220px;
    } 
}
</style>