<template>
    <div id="over"><svg xmlns="http://www.w3.org/2000/svg" width="100" viewBox="0 0 200 200"><circle fill="#000000" stroke="#000000" stroke-width="15" r="15" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#000000" stroke="#000000" stroke-width="15" r="15" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#000000" stroke="#000000" stroke-width="15" r="15" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg></div>
    <div id="print">
        <div class="top-main">
            <img src="../assets/img/sidebar/logo.svg" alt="logo">
            <div class="top-main-inf">
                <div class="top-main-inf-block">
                    <span>Общий отчёт</span>
                    <strong>Фабрика мебели</strong>
                </div>
                <div class="top-main-inf-block">
                    <span>Период отчёта</span>
                    <strong>Июнь 2024</strong>
                </div>
            </div>
        </div>
        <div class="top-name">
            <img class="icon" src="../assets/img/icons/analytic_report.svg" alt="icon">
            <span>Аналитика сайта</span>
        </div>
        <div class="box_analytic site">
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
                <MultiBar title="Аналитика" />
            </div>
            <div class="refusals">
                <Bar title="Отказы" :labels="true" />
            </div>
            <div class="adress_page">
                <AnalyticsList />
            </div>
            <div class="frase">
                <AnalyticsList />
            </div>
            <div class="viewing_depth">
                <Bar title="Глубина просмотра" :labels="true" />
            </div>
            <div class="time_site">
                <Bar title="Время на сайте" :labels="true" />
            </div>
        </div>
        <div class="top-name">
            <img class="icon" src="../assets/img/icons/analytic_site.svg" alt="icon">
            <span>Позиции сайта</span>
        </div>

        <div class="box_analytic report_ad">
            <div class="visitors">
                <MultiBar title="Общее количество показов" />
            </div>
            <div class="roi">
                <Bar title="ROI" />
            </div>
            <div class="count_click">
                <Bar title="Количество кликов" />
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
        <div class="top-name">
            <img class="icon" src="../assets/img/icons/analytic_position.svg" alt="icon">
            <span>Отчёт о рекламе</span>
        </div>

        <div class="box_analytic page">
            <div class="traffic">
                <Bar title="Трафик" :labels="true" />
            </div>
            <div class="position">
                <Bar title="Позиция" :labels="true" />
            </div>
            <div class="windows">
                <AnalyticsBlock title="1-10" />
                <AnalyticsBlock title="11-30" />
                <AnalyticsBlock title="31-100" />
            </div>
            <div class="search_table">
                <AnalyticsSearchTablePosition />
            </div>
        </div>
    </div>
</template>

<script>
import SelectInputAnalyt from '../components/analytics/SelectInputAnalyt.vue'
import AnalyticReport from '../components/modals/AnalyticReport.vue'
import Doughnut from '../components/analytics/Doughnut.vue';
import Bar from '../components/analytics/Bar.vue';
import MultiBar from '../components/analytics/MultiBar.vue';
import SelectAnalytics from '../components/analytics/SelectAnalytics.vue';
import AnalyticsList from '../components/analytics/AnalyticsList.vue';
import AnalyticsSearchTable from '../components/analytics/AnalyticsSearchTable.vue';
import AnalyticsSearchTablePosition from '../components/analytics/AnalyticsSearchTablePosition.vue';
import AnalyticsBlock from '../components/analytics/AnalyticsBlock.vue';
import html2pdf from 'html2pdf.js'
export default {
    components: {
        SelectInputAnalyt, AnalyticReport, Doughnut, Bar, MultiBar, SelectAnalytics, AnalyticsList, AnalyticsSearchTable,
        AnalyticsSearchTablePosition, AnalyticsBlock
    },
    data() {
        return {
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
    setup() {
        setTimeout(() => {
            const element = document.getElementById('print')
            var opt = {
                margin: 1,
                filename: 'report-analycic.pdf',
                image: { type: 'jpeg', quality: 1.2 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'A1', orientation: 'portrait' }
            };
            html2pdf(element, opt)
            setTimeout(() => {
                window.close()
            }, 2000)

        }, 1000)
    }
}
</script>

<style lang="scss" scoped>
#print {
    display: flex;
    flex-direction: column;
    gap: 60px;
    width: 1920px;


}

#over {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #FFF;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.top-main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--background-background-primary);
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 4px;
    padding: 24px;

    img {
        width: 212px;
        height: 50px;
    }
}

.top-main-inf {
    display: flex;
    gap: 40px;
}

.top-main-inf-block {
    display: flex;
    flex-direction: column;
    gap: 4px;

    span {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 20px;
        letter-spacing: -0.02em;
        color: var(--colors-secondary-grey-secondary);
    }

    strong {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 20px;
        letter-spacing: -0.02em;
        color: var(--grey-primary-grey-900);
    }
}

.top-name {
    display: flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 4px;
    padding: 24px;

    span {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 24px;
        letter-spacing: -0.02em;
        color: var(--grey-primary-grey-900);
    }
}

.icon {
    width: 24px;
    height: 24px;
}

.revers {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 12px;
    background: var(--background-background-primary);
    cursor: pointer;
}

.from-before {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 4px 12px;
    background: var(--background-background-primary);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 157%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    height: 100%;
    display: flex;
    align-items: center;
    gap: 8px;

    input {
        border-radius: 8px;
        padding: 12px;
        width: 45px;
        height: 100%;
        background: var(--component-colors-link-active-background);
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: -0.02em;
        text-align: center;
    }
}

.filter {
    display: flex;
    min-height: 100%;
    gap: 8px;
    align-items: stretch;
}

.filter_radio-box {
    height: 100%;
    display: flex;
    gap: 8px;
    align-items: stretch;

    label {
        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 8px;
        padding: 5px 12px;
        background: var(--background-background-primary);
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 14px;
        line-height: 157%;
        letter-spacing: -0.02em;
        color: var(--grey-primary-grey-100);
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    input {
        width: 0;
        height: 0;
        opacity: 0;
        position: absolute;
        z-index: -10;

        &:checked+label {
            color: var(--text-primary);
        }
    }
}

.box_analytic {

    overflow-x: hidden;
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
    align-items: stretch;
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

.mob {
    display: none;
}

.analytics__top {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    gap: 8px;
}

.analytics__top-col {
    display: flex;
    align-items: stretch;
    gap: 8px;
}

.analytics__top-button {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 16px 35px;
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

.import_list {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(110%);
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    z-index: 1;
    box-shadow: 0 15px 32px 0 rgba(0, 0, 0, 0.05), 0 59px 59px 0 rgba(0, 0, 0, 0.04), 0 132px 79px 0 rgba(0, 0, 0, 0.03), 0 234px 94px 0 rgba(0, 0, 0, 0.01), 0 366px 102px 0 rgba(0, 0, 0, 0);
    max-height: 0px;
    overflow: hidden;
    transition: all .5s;

    &.active {
        max-height: 100px;
    }
}

.import {
    box-shadow: 0 15px 32px 0 rgba(0, 0, 0, 0.05), 0 59px 59px 0 rgba(0, 0, 0, 0.04), 0 132px 79px 0 rgba(0, 0, 0, 0.03), 0 234px 94px 0 rgba(0, 0, 0, 0.01), 0 366px 102px 0 rgba(0, 0, 0, 0);
    border-radius: 8px;
    padding: 12px 16px;
    background: var(--background-background-primary);
    width: 100%;
    justify-content: space-between;
    display: flex;
    align-items: center;
    gap: 12px;
}

.import_box {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 165%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.select-box-analytic {
    position: relative;
    background: var(--background-background-primary);
    height: 100%;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;


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

    .icon {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 12px;
    }
}

.select {
    cursor: pointer;
    height: 100%;
    padding: 8px 10px;
    margin-left: 38px;
    padding-right: 40px;
    // text-align: center;
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

// @media(max-width: 1870px) {
//     .filters_box {
//         position: relative;
//         border: 1px solid var(--colors-secondary-border-color);
//         border-radius: 8px;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         width: 48px;
//         background: var(--background-background-primary);

//         .mob {
//             display: block;
//             width: 24px;
//             height: 24px;
//             cursor: pointer;
//         }

//         .filter {
//             position: absolute;
//             bottom: -8px;
//             left: 0;
//             transform: translateY(90%);
//             opacity: 0;
//             visibility: hidden;
//             box-shadow: 0 16px 35px 0 rgba(0, 0, 0, 0.1), 0 64px 64px 0 rgba(0, 0, 0, 0.09), 0 144px 86px 0 rgba(0, 0, 0, 0.05), 0 255px 102px 0 rgba(0, 0, 0, 0.01), 0 399px 112px 0 rgba(0, 0, 0, 0);
//             background: var(--background-background-primary);
//             border: 1px solid var(--colors-secondary-border-color);
//             border-radius: 8px;
//             padding: 24px;
//             flex-direction: column;
//             width: 230px;
//             transition: all .3s;


//             .revers {
//                 width: 40px;
//                 height: 40px;
//                 display: flex;
//                 align-items: center;
//                 justify-content: center;

//                 svg {
//                     display: block;
//                 }
//             }

//             &.active {
//                 opacity: 1;
//                 visibility: visible;
//                 transform: translateY(100%);
//             }
//         }

//         .filter_radio-box {
//             flex-direction: column;
//         }
//     }
// }

// @media(max-width: 1920px) {
//     .box_analytic {

//         display: grid;

//         gap: 24px;

//         &.site {

//             grid-template-columns: repeat(3, 1fr);
//             grid-template-rows: repeat(4, auto);

//             grid-template-areas: "traffic gadget age"
//                 "visitors visitors refusals"
//                 "adress_page frase viewing_depth"
//                 "adress_page frase time_site";
//         }

//         &.report_ad {

//             grid-template-columns: repeat(3, 1fr);
//             grid-template-rows: repeat(4, auto);

//             grid-template-areas: "visitors visitors roi"
//                 "visitors visitors count_click"
//                 "traffic gadget age"
//                 "search_table search_table search_table";
//         }

//         &.page {

//             column-gap: 8px;
//             grid-template-columns: 1fr 1fr;
//             grid-template-rows: 360px auto auto;

//             grid-template-areas: "traffic position"
//                 "windows windows"
//                 "search_table search_table";
//         }
//     }

// }

// @media(max-width: 1920px) {



//     .windows {
//         flex-direction: column;
//     }

//     .offer {
//         span {
//             display: none;
//         }
//     }

//     .box_analytic {

//         display: grid;

//         gap: 12px;

//         &.site {

//             grid-template-columns: repeat(2, 1fr);
//             grid-template-rows: repeat(5, auto);

//             grid-template-areas: "traffic gadget"
//                 "age visitors"
//                 "refusals refusals"
//                 "viewing_depth viewing_depth"
//                 "time_site time_site"
//                 "adress_page adress_page"
//                 "frase frase";
//         }

//         &.report_ad {

//             grid-template-columns: repeat(2, 1fr);
//             grid-template-rows: repeat(7, auto);

//             grid-template-areas: "visitors visitors "
//                 "visitors visitors "
//                 "roi traffic"
//                 "count_click traffic"
//                 "age gadget"
//                 "age gadget"
//                 "search_table search_table";
//         }

//         &.page {

//             column-gap: 8px;
//             grid-template-columns: 1fr 1fr;
//             grid-template-rows: 360px auto auto;

//             grid-template-areas: "traffic position"
//                 "windows windows"
//                 "search_table search_table";
//         }
//     }

// }

// @media(max-width: 1920px) {

//     .analytics__top-button {
//         padding: 16px;
//         font-size: 12px;
//     }

//     .route_back {
//         flex-grow: 1;
//     }

//     .analytics_top-nav {
//         width: 100%;
//     }

//     .box_analytic {

//         display: grid;

//         gap: 24px;

//         &.site {

//             grid-template-columns: 1fr;
//             grid-template-rows: repeat(4, auto);

//             grid-template-areas: "traffic"
//                 "gadget"
//                 "age  "
//                 "visitors"
//                 "refusals "
//                 "viewing_depth"
//                 "time_site"
//                 "adress_page"
//                 "frase";
//         }

//         &.report_ad {

//             grid-template-columns: 1fr;
//             grid-template-rows: repeat(4, auto);

//             grid-template-areas: "visitors"
//                 "roi"
//                 "count_click"
//                 "traffic"
//                 "gadget"
//                 "age"
//                 "search_table";
//         }

//         &.page {

//             column-gap: 8px;
//             grid-template-columns: 1fr;
//             grid-template-rows: auto;

//             grid-template-areas: "traffic "
//                 "position"
//                 "windows"
//                 "search_table";
//         }
//     }

//     .none_mob {
//         display: none;
//     }

//     .mob {
//         display: block;
//     }

//     .select-box-analytic {
//         padding: 0;

//         .icon {
//             left: 10px;
//             pointer-events: none;
//         }
//     }

//     .select {
//         font-size: 14px;
//         padding: 12px 10px;
//         width: 60px;
//         opacity: 0;
//     }

//     .select-box-analytic::before {
//         right: 7px;
//     }

//     .offer {
//         display: none;
//         padding: 16px 13px;

//         &.mob {
//             display: flex;
//             min-height: 100%;
//         }
//     }

//     .import_list {
//         width: 190px;
//     }

//     .widthets_list {
//         left: 0;
//         width: 200px;
//     }
// }

// @media(max-width: 550px) {}</style>