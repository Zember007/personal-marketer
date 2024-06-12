<template>
    <div class="box">
        <div class="top">
            <div class="title">Общее количество показов</div>
            <img src="../../assets/img/icons/dots.svg" alt="dots">
        </div>
        <div class="bar-box">
            <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </div>
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