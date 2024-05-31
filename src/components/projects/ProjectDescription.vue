<template>
    <div class="box">
        <div class="top">
            <div class="title">Описание проекта</div>
            <div class="edit">Редактировать</div>
        </div>
        <div class="inf__box">
            <div class="inf">
                <div class="inf_block">
                    <div class="inf__title">ФИО клиента</div>
                    <div class="inf__text">Иван Иванов</div>
                </div>
                <div class="inf_block">
                    <div class="inf__title">Название компании</div>
                    <div class="inf__text">Фабрика мебели</div>
                </div>
                <div class="inf_block">
                    <div class="inf__title">Сфера дейтельности</div>
                    <div class="inf__text">Производство мебели</div>
                </div>
                <div class="inf_block">
                    <div class="inf__title">Дата основания</div>
                    <div class="inf__text">01.02.1920</div>
                </div>
                <div class="inf_block">
                    <div class="inf__title">Сайт</div>
                    <div class="inf__text">www.site.com</div>
                </div>
                <div class="inf_block">
                    <div class="inf__title">Телеграм</div>
                    <div class="inf__text">t.me/site</div>
                </div>
                <div class="inf_block">
                    <div class="inf__title">Вконтакте</div>
                    <div class="inf__text">vk.com/site</div>
                </div>
            </div>

            <div class="description">
                <div class="description__title">Описание</div>
                <div class="description__text">
                    В 2000 году мы основали фабрику мебели и назвали ее «Фабрика Мебели». Название было выбрано не
                    случайно в него заложили основы, по которым компания работает и по сей день.
                    За длительный период существования, организация накопила большой опыт в производстве добротной
                    мебели. Изначально основным продуктом производства были корпусная и кухонная мебель.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectDescription"
}
</script>

<style lang="scss" scoped>
.box {
    border-radius: 8px;
    border: 1px solid var(--colors-secondary-border-color);
    height: 100%;
    background: var(--background-background-primary);
    width: 100%;
}

.top {
    border-bottom: 1px solid var(--colors-secondary-border-color);
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 115%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.edit {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
}

.inf__box {
    padding: 16px 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.inf {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 14px;
}

.inf_block {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.inf__title {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
}

.inf__text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.description {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.description__title {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
}

.description__text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}
</style>