<template>
    <div class="box">
        <div class="top">
            <div class="title">Общее количество показов</div>
            <img src="../../assets/img/icons/dots.svg" alt="dots">
        </div>
        <div class="bar-box">
            <div class="bar-block">
                <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
            </div>
            <div class="inf">
                <div class="block">
                    <div class="block-title">Всего</div>
                    <div class="block-count">127,002</div>
                    <div class="block-percent">
                        <img src="../../assets/img/icons/trade-up.svg" alt="trade">
                        <span>1.22%</span>
                    </div>
                </div>
                <div class="block">
                    <div class="block-title">Сегодня</div>
                    <div class="block-count">1,291</div>
                    <div class="block-percent">
                        <img src="../../assets/img/icons/trade-up.svg" alt="trade">
                        <span>0.89%</span>
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
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        enabled: false
                    }
                }
            }
        }
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
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.bar-box {
    width: 100%;
    height: 300px;
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

.down {}
</style>