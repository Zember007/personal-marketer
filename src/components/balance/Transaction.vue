<template>
    <div class="transaction">
        <div class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 17.5L19 3.5" stroke="#242626" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                <path d="M5 7.23047V17.5005H15.27" stroke="#242626" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.5 22H20.5" stroke="#242626" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
        <div class="inf">
            <div class="date"><span>Сегодня, 12:37</span></div>
            <div class="num"><strong>Пополнение #120389</strong></div>
        </div>
        <div class="price">
            <span>Сумма</span>
            <div class="count plus">+3,829₽</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.transaction {
    display: flex;
    gap: 12px;
}

.icon {
    border-radius: 4px;
    width: 44px;
    height: 44px;
    background: var(--background-background-secondary);

    display: flex;
    align-items: center;justify-content: center;
}

.inf {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
    justify-content: center;
}

.date {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
}

.num {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.price {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
    display: flex;
    justify-content: center;
    gap: 4px;
    flex-direction: column;
}

.count {

    font-family: var(--font-family);
    font-weight: 600;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: -0.02em;
    

    &.plus {
        color: var(--green-primary-green-900);
    }

    &.minus {
        color: var(--red-primary-red-900);
    }
}
</style>