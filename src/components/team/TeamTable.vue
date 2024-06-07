<template>
    <div>
        <div class="table">

            <div class="thead">
                <div class="tr">
                    <div class="td filter" :class="[currentSort == 'id' && currentSortDir == 'desc' ? 'active' : '']"
                        @click="sort('id')">№</div>
                    <div class="td filter" :class="[currentSort == 'name' && currentSortDir == 'desc' ? 'active' : '']"
                        @click="sort('name')">Имя и
                        фамилия</div>
                    <div class="td filter"
                        :class="[currentSort == 'profession' && currentSortDir == 'desc' ? 'active' : '']"
                        @click="sort('profession')">Профессия</div>
                    <div class="td filter" :class="[currentSort == 'price' && currentSortDir == 'desc' ? 'active' : '']"
                        @click="sort('price')">
                        Стоимость</div>
                    <div class="td filter"
                        :class="[currentSort == 'status' && currentSortDir == 'desc' ? 'active' : '']"
                        @click="sort('status')">
                        Статус</div>
                    <div class="td">Добавить</div>
                    <div class="td"></div>
                </div>
            </div>
            <div class="tbody">
                <div v-for="cat in sortedCats">
                    <TableElement :cat="cat"/> 
                </div>
            </div>
        </div>
        <div class="pages">
            <button @click="nextPage" v-for="page in pageCount" :data-page="page">{{ page }}</button>
        </div>
    </div>
</template>

<script>

import TableElement from './TableElement.vue'
export default {
    name: "TeamTable",
    components: {
        TableElement
    },

    data() {
        return {
            cats: [],
            currentSort: 'name',
            currentSortDir: 'asc',
            pageSize: 10,
            currentPage: 1,
            pageCount: 0
        }
    },
    methods: {
        sort: function (s) {
            //if s == current sort, reverse
            if (s === this.currentSort) {
                this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
            }
            this.currentSort = s;
        },
        nextPage: function (e) {
            this.currentPage = e.target.__vnode.props['data-page']
        },

    },
    mounted() {
        fetch('https://www.raymondcamden.com/.netlify/functions/get-cats')
            .then(res => res.json())
            .then(res => {
                this.cats = res;
                this.pageCount = Math.ceil(this.cats.length / this.pageSize)
            })
    },
    computed: {
        sortedCats: function () {
            return this.cats.sort((a, b) => {
                let modifier = 1;
                if (this.currentSortDir === 'desc') modifier = -1;
                if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
                if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
                return 0;
            }).filter((row, index) => {
                let start = (this.currentPage - 1) * this.pageSize;
                let end = this.currentPage * this.pageSize;
                if (index >= start && index < end) return true;
            });
        }
    }
}
</script>

<style lang="scss" scoped>


.table {
    border-radius: 8px;
    background: var(--background-background-primary);
    width: 100%;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
}

.thead {
    border-bottom: 1px solid var(--colors-secondary-border-color);
}

.filter {
    display: flex;
    align-items: center;
    gap: 4px;
    cursor: pointer;

    &::after {
        content: url('../../assets/img/icons/arrow_filter.svg');
        transform: translateY(10%);
    }

    &.active {
        &::after {
            transform: rotate(180deg);
        }
    }
}

.tr {
    padding: 16px 25px;
    display: grid;
    grid-template-columns: 1fr 5fr 5fr 4fr 4fr 4fr 1fr;
    align-items: center;
}

.pages {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 12px;

    button {
        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 6px;
        width: 45px;
        height: 45px;
        background: var(--background-background-primary);
        display: flex;
        align-items: center;
        justify-content: center;

        font-family: var(--font-family);
        font-weight: 500;
        font-size: 16px;
        color: var(--text-primary);
        transition: all .3s;

        &:hover {
            color: var(--component-colors-blue-active);
        }
    }
}

@media(max-width: 1520px)  {
    .thead {
        display: none;
    }
}
</style>