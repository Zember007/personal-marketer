<template>
    <div class="balance__current">
        <div class="title"><span>Текущий баланс</span></div>
        <div class="price">
            <span>256,921₽</span>
            <div class="percent">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.03484 4.785L5.99984 1.75L2.96484 4.785" stroke="white" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M6 10.25V1.83496" stroke="white" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <span>3.82%</span>
            </div>
        </div>
        <div class="history">
            <div class="history_block">
                <span>За этот месяц</span>
                <strong>44,321₽</strong>
            </div>
            <div class="history_block">
                <span>За эту неделю</span>
                <strong>9,260₽</strong>
            </div>
        </div>
        <div class="nav">
            <button @click.prevent="OutputBalance_show" class="balance__button">Вывести</button>
            <button @click.prevent="AddBalance_show" class="balance__button">Пополнить</button>
        </div>
    </div>

    <AddBalance v-show="AddBalanceVisible" @close="AddBalance_close" />
    <OutputBalance v-show="OutputBalanceVisible" @close="OutputBalance_close" />
</template>

<script>
import AddBalance from '../modals/AddBalance.vue'
import OutputBalance from '../modals/OutputBalance.vue'
export default {
    name:"BalanceCurrent",
    components: {
        AddBalance ,
        OutputBalance
    },
    data() {
        return {
            AddBalanceVisible: false,
            OutputBalanceVisible: false,
        };
    },
    methods: {
        AddBalance_show() {
            this.AddBalanceVisible = true;
            document.body.style="overflow:hidden"
        },
        AddBalance_close() {
            this.AddBalanceVisible = false;
            document.body.style=""
        },

        OutputBalance_show() {
            this.OutputBalanceVisible = true;
            document.body.style="overflow:hidden"
        },
        OutputBalance_close() {
            this.OutputBalanceVisible = false;
            document.body.style=""
        }
    },
}
</script>

<style lang="scss" scoped>
.balance__current {
    display: flex;
    flex-direction: column;
    gap: 24px;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 24px;
    background: var(--background-background-primary);
    width: 100%;
    height: 300px;
}

.title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.price {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 44px;
    line-height: 91%;
    color: var(--icons-primary);
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 8px;
}

.percent {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: var(--background-background-primary);
    border-radius: 800px;
    padding: 6px;
    background: var(--green-primary-green-900);
    display: inline-flex;
    align-items: center;
}

.history {
    display: flex;
    gap: 60px;
}

.history_block {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);

    display: flex;
    flex-direction: column;
    gap: 8px;

    strong {
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        color: var(--text-primary);
    }
}

.nav {
    display: flex;
    gap: 8px;
}

.balance__button {
    border-radius: 6px;
    padding: 18px 20px;
    background: var(--primary-button-color);
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--background-background-primary);
    max-width: 210px;
    width: 100%;
}

</style>