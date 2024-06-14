<template>
    <div class="box">
        <div class="top">
            <div class="search_box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                        stroke="#87878D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.40991 22C3.40991 18.13 7.25994 15 11.9999 15" stroke="#87878D" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"
                        stroke="#87878D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 22L21 21" stroke="#87878D" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <input type="text" placeholder="Поиск">
            </div>
            <!-- <div class="analytics__top-button">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.3335 9.16634L18.1668 2.33301" stroke="#242626" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M18.8335 5.66699V1.66699H14.8335" stroke="#242626" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M9.6665 1.66699H7.99984C3.83317 1.66699 2.1665 3.33366 2.1665 7.50033V12.5003C2.1665 16.667 3.83317 18.3337 7.99984 18.3337H12.9998C17.1665 18.3337 18.8332 16.667 18.8332 12.5003V10.8337"
                        stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span>Экспорт данных</span>
            </div> -->
        </div>
        <div class="list">
            <div class="list_item head">Поисковый запрос</div>
            <div class="list_item head">Частота</div>
            <div class="list_item head">25.04.2023</div>
            <div class="list_item head">26.04.2023</div>
            <div class="list_item head">27.04.2023</div>
            <div class="list_item head">28.04.2023</div>
            <div class="list_item head">29.04.2023</div>
            <div class="list_item head">30.04.2023</div>            
            
            <div class="list_item">запрос</div>
            <div class="list_item">312</div>
            <div class="list_item">12</div>
            <div class="list_item">--</div>
            <div class="list_item">11</div>
            <div class="list_item">24</div>
            <div class="list_item">38</div>
            <div class="list_item">52</div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.analytics__top-button {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 14px 24px;
    background: var(--background-background-primary);
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
    cursor: pointer;
}

.box {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.top {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
}

.search_box {
    height: 100%;
    border-radius: 8px;
    background: var(--background-background-primary);
    padding: 14px 16px;
    display: flex;
    gap: 16px;

    input {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.02em;
        color: var(--text-primary);
    }
}

.list {
    border-radius: 8px;
    background: var(--colors-secondary-border-color);
    gap: 1px;
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(8, 1fr);
    overflow-x: auto;
    max-width: 86vw;
}

.list_item {
    background: var(--background-background-primary);
    padding: 16px 8px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: var(--text-primary);

    &.head {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        line-height: 143%;
        letter-spacing: -0.02em;
        color: var(--text-secondary);
    }
}

@media(max-width:550px) {
    .list {
        max-width: 96vw;
    }
}
</style>