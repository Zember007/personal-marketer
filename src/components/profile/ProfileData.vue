<template>
    <div class="profile__data">
        <div class="profile__data-top">
            <div class="profile__data-title">Портфолио</div>
            <button class="profile__data-edit">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 12H16" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M12 16V8" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Добавить проект</span>
            </button>
        </div>
        <div class="profile__data-list full">
            <div class="profile__data-item">
                <div class="profile__data-item-img"></div>
                <div class="profile__data-item-title">Twist Joy</div>
            </div>
        </div>
        <div class="profile__data-list empty">

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 12H16" stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 16V8" stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#242626"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span>Вы пока не добавили проекты,<br>
                давайте сделаем это сейчас</span>

        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileData"
}
</script>

<style lang="scss" scoped>
.profile__data {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.profile__data-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.profile__data-title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.profile__data-edit {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 8px 16px;
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
}

.profile__data-list {

    &.full {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
    }

    &.empty {
        text-align: center;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: -0.02em;
        text-align: center;
        color: var(--text-primary);
        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 12px;
        background: var(--background-background-secondary);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 80px 0;
    }
}

.profile__data-item {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.profile__data-item-img {
    border-radius: 12px;
    width: 290px;
    height: 220px;
    overflow: hidden;
    background: gray;
}

.profile__data-item-title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}
</style>