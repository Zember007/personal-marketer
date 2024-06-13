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
            <div class="analytics__top-button">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.1665 10.8327L2.33317 17.666" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M1.6665 14.334V18.334H5.6665" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M10.8335 18.334H12.5002C16.6668 18.334 18.3335 16.6673 18.3335 12.5007V7.50065C18.3335 3.33398 16.6668 1.66732 12.5002 1.66732H7.50016C3.3335 1.66732 1.66683 3.33398 1.66683 7.50065V9.16732"
                        stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span>Импорт данных</span>
            </div>
        </div>
        <div class="list">
            <div class="list_item head">Дата</div>
            <div class="list_item head">Название кампании</div>
            <div class="list_item head">ID</div>
            <div class="list_item head">Внешняя ссылка</div>
            <div class="list_item head">Показы</div>
            <div class="list_item head">Охват</div>

            <div class="list_item">28.04.2024</div>
            <div class="list_item">Кампания</div>
            <div class="list_item">#813282</div>
            <div class="list_item">www.link.com</div>
            <div class="list_item">12,932</div>
            <div class="list_item">3,201</div>
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
    grid-template-columns: repeat(6, 1fr);
    overflow-x: auto;
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
</style>