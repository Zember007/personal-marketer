<template>
    <div class="box">
        <div class="top">
            <div class="title">ROI</div>
            <div class="percent">
                <strong>0.52%</strong>
                <span class="down">
                    <img src="../../assets/img/icons/trade-down.svg" alt="tra de">
                    1.22%
                </span>
            </div>
        </div>
        <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale)
ChartJS.defaults.datasets.bar.barPercentage = 0.7
ChartJS.defaults.font.size = 14
ChartJS.defaults.font.weight = 400
ChartJS.defaults.font.family = "Roboto"
export default {
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'sd', 'February', 'March', 'sd'],
                datasets: [{
                    data: [40, 20, 12, 2, 20, 12, 2],
                    backgroundColor: "#0d6efd"
                }]

            },
            chartOptions: {
                responsive: true,
                scales: {
                    x: {
                        display: false
                    }
                }
            }
        }
    },
    mounted() {
        console.log(ChartJS.defaults);
    }
}
</script>

<style lang="scss" scoped>
.box {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 24px;
    background: var(--background-background-primary);
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 24px;
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

.percent {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 24px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: var(--red-primary-red-900);
    display: flex;
    align-items: center;
    gap: 12px;

    span {
        display: flex;
        align-items: center;
        border-radius: 800px;
        padding: 6px;
        

        &.down {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 12px;
            line-height: 100%;
            color: var(--background-background-primary);
            background: var(--red-primary-red-900);
        }
    }
}

.down {}
</style>