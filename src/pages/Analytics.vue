<template>
    <ProfileLayout>
        <ProfileTop>
            <div class="analytics_top-nav">
                <RouterLink to="/profile" class="route_back">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.5417 16.5999L7.10834 11.1666C6.46667 10.5249 6.46667 9.4749 7.10834 8.83324L12.5417 3.3999"
                            stroke="#242626" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                    <span>Аналитика</span>
                </RouterLink>
                <SelectAnalytics :items="[{ name: 'Фабрика мебели', active: true }]"></SelectAnalytics>
                <div class="select-box">
                    <select @input="change_analytics" class="select">
                        <option selected="active" value="site">
                            Аналитика сайта
                        </option>
                        <option value="report_ad">
                            Отчет о рекламе
                        </option>
                        <option value="page">
                            Позиции сайта
                        </option>
                    </select>
                </div>
            </div>
            <button class="offer" @click.prevent="showModal">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 9.16602V14.166L9.66667 12.4993" stroke="#0D6EFD" stroke-width="1.5"
                        stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.00016 14.1667L6.3335 12.5" stroke="#0D6EFD" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M18.8332 8.33268V12.4993C18.8332 16.666 17.1665 18.3327 12.9998 18.3327H7.99984C3.83317 18.3327 2.1665 16.666 2.1665 12.4993V7.49935C2.1665 3.33268 3.83317 1.66602 7.99984 1.66602H12.1665"
                        stroke="#0D6EFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M18.8332 8.33268H15.4998C12.9998 8.33268 12.1665 7.49935 12.1665 4.99935V1.66602L18.8332 8.33268Z"
                        stroke="#0D6EFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Скачать общий отчет</span>
            </button>
        </ProfileTop>
        <div class="analytics__top">
            <div class="analytics__top-col">

            </div>
            <div class="analytics__top-col">
                <div class="analytics__top-button" @click="isVisibleWidgets = !isVisibleWidgets">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.1665 10H13.8332" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M10.5 13.3327V6.66602" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M7.99984 18.3327H12.9998C17.1665 18.3327 18.8332 16.666 18.8332 12.4993V7.49935C18.8332 3.33268 17.1665 1.66602 12.9998 1.66602H7.99984C3.83317 1.66602 2.1665 3.33268 2.1665 7.49935V12.4993C2.1665 16.666 3.83317 18.3327 7.99984 18.3327Z"
                            stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>Добавить виджет</span>
                    <div class="widthets_list" :class="{ active: isVisibleWidgets }">
                        <button class="widget">
                            <img src="../assets/img/icons/edit-square.svg" alt="square">
                            <span>Источник трафика</span>
                        </button>
                        <button class="widget">
                            <img src="../assets/img/icons/edit-square.svg" alt="square">
                            <span>Тип устройства</span>
                        </button>
                        <button class="widget">
                            <img src="../assets/img/icons/edit-square.svg" alt="square">
                            <span>Возраст</span>
                        </button>
                        <button class="widget">
                            <img src="../assets/img/icons/edit-square.svg" alt="square">
                            <span>Аналитика</span>
                        </button>
                        <button class="widget">
                            <img src="../assets/img/icons/edit-square.svg" alt="square">
                            <span>Отказы</span>
                        </button>
                        <button class="widget">
                            <img src="../assets/img/icons/edit-square.svg" alt="square">
                            <span>Глубина просмотра</span>
                        </button>
                        <button class="widget">
                            <img src="../assets/img/icons/edit-square.svg" alt="square">
                            <span>Время на сайте</span>
                        </button>
                        <button class="widget">
                            <img src="../assets/img/icons/edit-square.svg" alt="square">
                            <span>Адрес страницы</span>
                        </button>
                        <button class="widget">
                            <img src="../assets/img/icons/edit-square.svg" alt="square">
                            <span>Последняя поисковая фраза</span>
                        </button>
                    </div>
                </div>
                <div class="analytics__top-button">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.1665 10.8327L2.33317 17.666" stroke="#242626" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.6665 14.334V18.334H5.6665" stroke="#242626" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M10.8335 18.334H12.5002C16.6668 18.334 18.3335 16.6673 18.3335 12.5007V7.50065C18.3335 3.33398 16.6668 1.66732 12.5002 1.66732H7.50016C3.3335 1.66732 1.66683 3.33398 1.66683 7.50065V9.16732"
                            stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>Импорт данных</span>
                </div>
            </div>
        </div>
        <div v-show="analytic_type == 'site'" class="box_analytic site">
            <div class="traffic">
                <Doughnut :data="data_traffic" title="Источник трафика" />
            </div>
            <div class="gadget">
                <Doughnut :data="data_gadget" title="Тип устройства" />
            </div>
            <div class="age">
                <Doughnut :data="data_age" title="Возраст" />
            </div>
            <div class="visitors">
                <MultiBar title="Аналитика"/>
            </div>
            <div class="refusals">
                <Bar title="Отказы" :labels="true"/>
            </div>
            <div class="adress_page">
                <AnalyticsList />
            </div>
            <div class="frase">
                <AnalyticsList />
            </div>
            <div class="viewing_depth">
                <Bar title="Глубина просмотра" :labels="true"/>
            </div>
            <div class="time_site">
                <Bar title="Время на сайте" :labels="true"/>
            </div>
        </div>

        <div v-show="analytic_type == 'report_ad'" class="box_analytic report_ad">
            <div class="visitors">
                <MultiBar title="Общее количество показов"/>
            </div>
            <div class="roi">
                <Bar title="ROI"/>
            </div>
            <div class="count_click">
                <Bar title="Количество кликов"/>
            </div>
            <div class="traffic">
                <Doughnut :data="data_traffic" title="Источник трафика" />
            </div>
            <div class="gadget">
                <Doughnut :data="data_gadget" title="Тип устройства" />
            </div>
            <div class="age">
                <Doughnut :data="data_age" title="Возраст" />
            </div>
            <div class="search_table">
                <AnalyticsSearchTable />
            </div>
        </div>

        <div v-show="analytic_type == 'page'" class="box_analytic page">
            <div class="traffic">
                <Bar title="Трафик" :labels="true"/>
            </div>
            <div class="position">
                <Bar title="Позиция" :labels="true"/>
            </div>
            <div class="windows">
                <AnalyticsBlock />
                <AnalyticsBlock />
                <AnalyticsBlock />
            </div>
            <div class="search_table">
                <AnalyticsSearchTable />
            </div>
        </div>
    </ProfileLayout>
    <AnalyticReport v-show="isModalVisible" @close="closeModal"/>
</template>

<script>
import AnalyticReport from '../components/modals/AnalyticReport.vue'
import ProfileTop from '../components/profile/ProfileTop.vue';
import ProfileLayout from '../layouts/ProfileLayout.vue'
import Doughnut from '../components/analytics/Doughnut.vue';
import Bar from '../components/analytics/Bar.vue';
import MultiBar from '../components/analytics/MultiBar.vue';
import SelectAnalytics from '../components/analytics/SelectAnalytics.vue';
import AnalyticsList from '../components/analytics/AnalyticsList.vue';
import AnalyticsSearchTable from '../components/analytics/AnalyticsSearchTable.vue';
import AnalyticsBlock from '../components/analytics/AnalyticsBlock.vue';

export default {
    components: {
        ProfileLayout,
        ProfileTop,
        Doughnut,
        Bar,
        MultiBar,
        SelectAnalytics,
        AnalyticsList,
        AnalyticsSearchTable,
        AnalyticsBlock,
        AnalyticReport
    },
    data() {
        return {
            isVisibleWidgets: false,
            isModalVisible: false,
            analytic_type: 'site',
            data_traffic: {
                data: {
                    datasets: [{
                        backgroundColor: ['#0d6efd', '#fdc007', '#db3546', '#c3c6c4'],
                        data: [4305, 859, 482, 138],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    cutout: "70%",
                    plugins: {
                        tooltip: {
                            enabled: false
                        }
                    }
                },
                titles: ['Прямые заходы', 'Поисковые системы', 'Социальные сети', 'Другое'],
            },
            data_gadget: {
                data: {
                    datasets: [{
                        backgroundColor: ['#0d6efd', '#fdc007', '#db3546', '#c3c6c4'],
                        data: [4305, 859, 482, 138],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    cutout: "70%",
                    plugins: {
                        tooltip: {
                            enabled: false
                        }
                    }
                },
                titles: ['Компьютеры', 'Мобильные устройства', 'Планшеты', 'Другое'],
            },
            data_age: {
                data: {
                    datasets: [{
                        backgroundColor: ['#0d6efd', '#fdc007', '#db3546', '#c3c6c4'],
                        data: [4305, 859, 482, 138],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    cutout: "70%",
                    plugins: {
                        tooltip: {
                            enabled: false
                        }
                    }
                },
                titles: ['18 - 35', '36 - 55', '56 - 70', '70 +'],
            }
        }
    },
    methods: {
        change_analytics(e) {
            this.analytic_type = e.target.value
        },
        showModal() {
            this.isModalVisible = true;
            document.body.style = "overflow:hidden"
        },
        closeModal() {
            this.isModalVisible = false;
            document.body.style = ""
        },
    },

    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.box_analytic {

    display: grid;

    gap: 24px;

    &.site {

        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, auto);

        grid-template-areas: "traffic gadget age"
        "visitors visitors refusals"
        "adress_page frase viewing_depth"
        "adress_page frase time_site";


        .traffic {
            grid-area: traffic;
        }

        .gadget {
            grid-area: gadget;
        }

        .age {
            grid-area: age;
        }

        .visitors {
            grid-area: visitors;
        }

        .refusals {
            grid-area: refusals;
        }

        .adress_page {
            grid-area: adress_page;
        }

        .frase {
            grid-area: frase;
        }

        .viewing_depth {
            grid-area: viewing_depth;
        }

        .time_site {
            grid-area: time_site;
        }
    }

    &.report_ad {

        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(4, auto);

        grid-template-areas: "visitors visitors roi"
        "visitors visitors count_click"
        "traffic gadget age"
        "search_table search_table search_table";


        .visitors {
            grid-area: visitors;
        }

        .roi {
            grid-area: roi;
        }

        .count_click {
            grid-area: count_click;
        }

        .traffic {
            grid-area: traffic;
        }

        .gadget {
            grid-area: gadget;
        }

        .age {
            grid-area: age;
        }

        .search_table {
            grid-area: search_table;
        }
    }

    &.page {

        column-gap: 8px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 360px auto;

        grid-template-areas: "traffic position windows windows"
        "search_table search_table search_table search_table";

        .traffic {
            grid-area: traffic;
        }

        .position {
            grid-area: position;
        }

        .windows {
            grid-area: windows;
        }

        .search_table {
            grid-area: search_table;
        }
    }
}

.windows {
    display: flex;
    align-items: stretch;
    height: 100%;
    justify-content: space-between;
    gap: 8px;
}

.route_back {
    display: flex;
    align-items: center;
    gap: 8px;
}

.analytics_top-nav {
    display: flex;
    align-items: center;
    gap: 10px;
}

.offer {
    display: flex;
    gap: 8px;
    align-items: center;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 10px 16px;
    background: rgba(13, 110, 253, 0.1);
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--blue-primary-blue-900);
}

.analytics__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.analytics__top-col {
    display: flex;
    align-items: center;
    gap: 8px;
}

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

.widthets_list {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(101%);
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 280px;
    z-index: 1;
    box-shadow: 0 15px 32px 0 rgba(0, 0, 0, 0.05), 0 59px 59px 0 rgba(0, 0, 0, 0.04), 0 132px 79px 0 rgba(0, 0, 0, 0.03), 0 234px 94px 0 rgba(0, 0, 0, 0.01), 0 366px 102px 0 rgba(0, 0, 0, 0);
    max-height: 0px;
    overflow: hidden;
    transition: all .5s;

    &.active {
        max-height: 800px;
    }
}

.widget {
    box-shadow: 0 15px 32px 0 rgba(0, 0, 0, 0.05), 0 59px 59px 0 rgba(0, 0, 0, 0.04), 0 132px 79px 0 rgba(0, 0, 0, 0.03), 0 234px 94px 0 rgba(0, 0, 0, 0.01), 0 366px 102px 0 rgba(0, 0, 0, 0);
    border-radius: 8px;
    padding: 16px;
    background: var(--background-background-primary);
    width: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

}

.select-box {
    position: relative;
    background: var(--background-background-primary);
    height: 100%;

    &::before {
        content: "";
        background: url('../assets/img/icons/arrow-down.svg') no-repeat;
        width: 14px;
        height: 14px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 16px;
        pointer-events: none;
    }
}

.select {
    cursor: pointer;
    height: 100%;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 8px 20px;
    padding-right: 40px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    background: transparent;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

}



@media(max-width: 550px) {
    .select {
        font-size: 14px;
        padding: 12px 12px;
        padding-right: 22px;
    }

    .select-box::before {
        right: 7px;
    }
}
</style>