<template>
    <div class="box_block">
        <div class="title">
            <span>1-10 (0%)</span>
            <div class="warn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8.00016 14.6663C11.6668 14.6663 14.6668 11.6663 14.6668 7.99967C14.6668 4.33301 11.6668 1.33301 8.00016 1.33301C4.3335 1.33301 1.3335 4.33301 1.3335 7.99967C1.3335 11.6663 4.3335 14.6663 8.00016 14.6663Z"
                        stroke="#242626" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 5.33301V8.66634" stroke="#242626" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.99609 10.667H8.00208" stroke="#242626" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
        <div class="inf">
            <strong>398</strong>
            <div class="percent">
                <img src="../../assets/img/icons/trade-up.svg" alt="trade">
                <span>1.22%</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.box_block {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 24px;
    background: var(--background-background-primary);
    height: 100%;
    width: 100%;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: space-between;
    gap: 35px;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    width: 100%;
}

.warn {}

.inf {
    display: flex;
    align-items: center;
    gap: 12px;

    strong {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 44px;
        line-height: 110%;
        letter-spacing: -0.02em;
        color: var(--text-primary);
    }
}

.percent {
    display: flex;
    align-items: center;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: var(--background-background-primary);
    border-radius: 8px;
    padding: 6px;
    background: var(--green-primary-green-900);
}
</style>