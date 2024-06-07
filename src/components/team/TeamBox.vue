<template>
    <div class="wrapper">
        <div class="filter">
            <div class="input_serch-box">
                <div class="filter_mob" @click="show_filter" :class="{ active: showFilter }"></div>
                <div class="input_serch-name">
                    <input id="search_inpt" type="text" placeholder="Поиск по имени, проофессии, статусу...">
                </div>
            </div>
            <div class="selects_wrapper" :class="{ active: showFilter }">
                <SelectInput name="Профессия" />
                <SelectInput name="Стоимость" />
                <SelectInput name="Статус" />
            </div>
            <div class="add_staffer-box" @click="showModal">
                <DataAdd class="add_staffer">Добавить сотрудника</DataAdd>
            </div>
        </div>

        <TeamTable></TeamTable>

    </div>
    <AddStaffer v-show="isModalVisible" @close="closeModal" />
</template>

<script>
import DataAdd from "../DataAdd.vue"
import TeamTable from "./TeamTable.vue"
import AddStaffer from "../modals/AddStaffer.vue";
export default {
    components: {
        DataAdd,
        TeamTable,
        AddStaffer
    },
    data() {
        return {
            isModalVisible: false,
            showFilter: false
        };
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        show_filter() {
            this.showFilter = !this.showFilter;
        }
    },
    mounted() {
        if (window.innerWidth <= 1150) {
            document.querySelector('#search_inpt').setAttribute('placeholder', 'Поиск')
            }
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
    position: relative;
}

.filter_mob {
    display: none;
}

.selects_wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    min-height: 100%;
}

.input_serch-box {
    flex-grow: 1;
}

.input_serch-name {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 16px;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    background: var(--background-background-primary);

    input {
        width: 100%;
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 14px;
        letter-spacing: -0.02em;
    }

    &::before {
        content: url('../../assets/img/icons/search_people.svg');
    }
}

.add_staffer-box {
    min-height: 100%;

    .add_staffer {
        height: 100%;
    }
}

@media(max-width:1520px) {
    .add_staffer {
        display: none;
    }

    .add_staffer-box {

        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 8px;
        padding: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--background-background-primary);

        &::before {
            content: "";
            background: url('../../assets/img/icons/edit-square.svg');
            width: 20px;
            height: 20px;
        }
    }

    .selects_wrapper {
        position: absolute;
        left: 0;
        bottom: -150%;
        z-index: 1;

        border-radius: 8px;
        padding: 12px 24px;
        box-shadow: 0 10px 22px 0 rgba(0, 0, 0, 0.1), 0 41px 41px 0 rgba(0, 0, 0, 0.09), 0 91px 55px 0 rgba(0, 0, 0, 0.05), 0 162px 65px 0 rgba(0, 0, 0, 0.01), 0 254px 71px 0 rgba(0, 0, 0, 0);
        background: var(--background-background-primary);
        opacity: 0;
        visibility: hidden;
        transition: all .3s;

        &.active {
            opacity: 1;
            visibility: visible;
        }
    }

    .input_serch-box {
        display: flex;
        align-items: stretch;
        gap: 8px;
    }

    .input_serch-name {
        padding: 8px 16px;
        width: 350px;
    }

    .filter_mob {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 52px;
        padding: 4px 12px;
        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 8px;
        background: var(--background-background-primary);
        transition: all .3s;

        &::before {
            content: '';
            background: url('../../assets/img/icons/filter.svg');
            transition: all .5s;
            height: 24px;
            width: 24px;
        }

        &::after {
            content: "";
            transition: all .5s;
        }

        &.active {
            &::before {
                content: '';
                background: #292d32;
                height: 50%;
                width: 2px;
                transform: rotate(45deg) translateX(2px);
                border-radius: 30%;
            }

            &::after {
                content: '';
                background: #292d32;
                height: 50%;
                transform: rotate(-45deg) translateX(-2px);
                width: 2px;
                border-radius: 30%;
            }
        }
    }

}

@media(max-width: 1150px) {

    .input_serch-name {
        width: 200px;
    }

    .selects_wrapper {
        padding: 12px 10px;
    }
}
</style>