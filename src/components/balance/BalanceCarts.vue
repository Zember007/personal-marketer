<template>
    <div class="balance__carts">
        <div class="inf_carts">
            <div class="title"><span>Ваши карты</span></div>
            <div class="carts">
                <Cart/>
                <Cart/>
            </div>
        </div>
        <DataAdd @click="showModal">Добавить новую карту</DataAdd>
    </div>
    <AddCart v-show="isModalVisible" @close="closeModal" />
</template>

<script>
import DataAdd from '../DataAdd.vue'
import Cart from './Cart.vue'
import AddCart from '../modals/AddCart.vue';
export default {
    components: {
        DataAdd,
        Cart,
        AddCart
    },    
    data() {
        return {
            isModalVisible: false,
        };
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    },
}
</script>

<style lang="scss" scoped>
.balance__carts {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 24px;
    background: var(--background-background-primary);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
}

.inf_carts {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.carts {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}
</style>