<template>
    <div class="box">
        <div class="top">
            <div class="title">{{ title }}</div>
            <div class="nav" :class="{ active: active }">
                <span class="before" @click="active = !active"></span>
                <div class="icon_bg icon">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M9.82272 14.4468C12.6827 13.6935 14.7894 11.0935 14.7894 8.00016C14.7894 4.32016 11.8294 1.3335 8.12272 1.3335C3.67605 1.3335 1.45605 5.04016 1.45605 5.04016M1.45605 5.04016V2.00016M1.45605 5.04016H2.79605H4.41605"
                            stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M1.45605 8C1.45605 11.68 4.44272 14.6667 8.12272 14.6667" stroke="#242626"
                            stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3 3" />
                    </svg>
                </div>
                <div class="icon_bg icon">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.3726 3.98665C12.1526 3.76665 9.91923 3.65332 7.69256 3.65332C6.37256 3.65332 5.05256 3.71999 3.73256 3.85332L2.37256 3.98665"
                            stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M6.03906 3.3135L6.18573 2.44016C6.2924 1.80683 6.3724 1.3335 7.49906 1.3335H9.24573C10.3724 1.3335 10.4591 1.8335 10.5591 2.44683L10.7057 3.3135"
                            stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M12.939 6.09326L12.5057 12.8066C12.4323 13.8533 12.3723 14.6666 10.5123 14.6666H6.23233C4.37233 14.6666 4.31233 13.8533 4.239 12.8066L3.80566 6.09326"
                            stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M7.25928 11H9.47928" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M6.70605 8.3335H10.0394" stroke="#242626" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
                <div @click="active = !active" class="close icon">
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.686 13.2573L16.0858 17.6571C16.4294 18.0007 16.9993 18.0007 17.3429 17.6571C17.6865 17.3135 17.6865 16.7436 17.3429 16.4L12.9431 12.0002L17.3429 7.60046C17.6865 7.25686 17.6865 6.68698 17.3429 6.34338C16.9993 5.99978 16.4294 5.99978 16.0858 6.34338L11.686 10.7432L7.28626 6.34338C6.94266 5.99978 6.37278 5.99978 6.02918 6.34338C5.68558 6.68698 5.68558 7.25686 6.02918 7.60046L10.429 12.0002L6.02918 16.4C5.68558 16.7436 5.68558 17.3135 6.02918 17.6571C6.37278 18.0007 6.94266 18.0007 7.28626 17.6571L11.686 13.2573Z"
                            fill="#242626" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="bar-box">
            <div class="bar-block">
                <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
            </div>
            <div class="inf">
                <div class="block">
                    <div class="block-title">Всего</div>
                    <div class="num">
                        <div class="block-count">127,002</div>
                        <div class="block-percent">
                            <img src="../../assets/img/icons/trade-up.svg" alt="trade">
                            <span>1.22%</span>
                        </div>
                    </div>
                </div>
                <div class="block">
                    <div class="block-title">Сегодня</div>
                    <div class="num">
                        <div class="block-count">1,291</div>
                        <div class="block-percent">
                            <img src="../../assets/img/icons/trade-up.svg" alt="trade">
                            <span>0.89%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale)
ChartJS.defaults.datasets.bar.barPercentage = 0.7
ChartJS.defaults.font.size = 10
ChartJS.defaults.font.weight = 400
ChartJS.defaults.font.family = "Roboto"
export default {
    components: { Bar },
    data() {
        return {
            active: false,
            chartData: {
                labels: ['10 Апр', '10 Апр', '10 Апр', '10 Апр', '10 Апр', '10 Апр', '10 Апр', '10 Апр', '10 Апр', '10 Апр', '10 Апр', '10 Апр', '10 Апр'],
                datasets: [{
                    data: [1, 2, 3, 1, 2, 3, 2, 3, 1, 2, 3],
                    backgroundColor: "rgba(13, 110, 253, 0.25)"
                },
                {
                    data: [4, 5, 6, 4, 5, 6, 5, 6, 4, 5, 6],
                    backgroundColor: "#0d6efd"
                }]

            },
            chartOptions: {
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        enabled: false
                    }
                }
            }
        }
    },
    props: {
        title: String
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.box {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 24px;
    background: var(--background-background-primary);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    // width: 100px;
}

.bar-box {
    height: 100%;
    display: flex;
    gap: 30px;
}

.bar-block {
    width: 100%;
}

.inf {
    display: flex;
    gap: 12px;
    flex-direction: column;
    width: 40%;
}

.num {
    display: flex;
    flex-direction: column;
    align-items: start;
}

.nav {
    display: flex;
    align-items: center;


    .icon {
        width: 0;
        opacity: 0;
        visibility: hidden;
        cursor: pointer;
        transition: all .3s;
    }

    .before {
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }

    .before::before {
        content: url(../../assets/img/icons/dots.svg);

        transition: all .3s;
    }

    &.active {
        gap: 8px;

        .icon {
            width: 32px;
            opacity: 1;
            visibility: visible;
        }

        .before {
            opacity: 0;
            visibility: hidden;
        }


    }
}

.icon_bg {
    background: rgba(13, 110, 253, 0.05);
    border-radius: 4px;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.close {
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.block {
    height: 100%;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 4px;
    padding: 15px 22px 22px 22px;
    background: var(--background-background-primary);
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}

.block-title {
    display: flex;
    flex-direction: column;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 114%;
    color: var(--text-primary);
}

.block-count {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 24px;
    line-height: 167%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.block-percent {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    color: var(--background-background-primary);
    border-radius: 800px;
    padding: 6px;
    background: var(--green-primary-green-900);
    display: flex;
    align-items: center;
}

.top {
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
}

.title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

@media(max-width: 1420px) {
    .bar-box {
        flex-direction: column-reverse;
        flex-grow: 1;
        justify-content: space-between;
    }
    .bar-block {
        flex-grow: 1;
    }

    .block {
        border: 0;
        padding: 0;
    }

    .num {
        flex-direction: row;
        align-items: center;
        gap: 12px;
    }

    .box {
        gap: 12px;
    }
}

@media(max-width: 550px) {
    .title {
        font-size: 16px;
    }

    .bar-block {
        width: 80vw;
    }
}
</style>