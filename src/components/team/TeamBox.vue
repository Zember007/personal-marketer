<template>
    <div class="wrapper">
        <div class="filter">
            <div class="input_serch-name">
                <input type="text" placeholder="Поиск по имени, проофессии, статусу...">
            </div>
            <div class="selects_wrapper">
                <SelectInput name="Профессия" />
                <SelectInput name="Стоимость" />
                <SelectInput name="Статус" />
            </div>
            <DataAdd>Добавить сотрудника</DataAdd>
        </div>

        <TeamTable></TeamTable>

    </div>
</template>

<script>
import DataAdd from "../DataAdd.vue"
import TeamTable from "./TeamTable.vue"
export default {
    components: {
        DataAdd,
        TeamTable
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.filter {
    display: flex;
    align-items: stretch;
    gap: 16px;
}

.selects_wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 100%;
}

.input_serch-name {

    flex-grow: 1;
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 16px;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    background: var(--background-background-primary);

    input {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.02em;
    }

    &::before {
        content: url('../../assets/img/icons/search_people.svg');
    }
}
</style>