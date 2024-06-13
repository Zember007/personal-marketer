<template>
    <div class="box">
        <div class="top">
            <div class="title">{{ title }}</div>
            <div class="percent">
                <strong>0.52%</strong>
                <span class="down">
                    <img src="../../assets/img/icons/trade-down.svg" alt="tra de">
                    1.22%
                </span>
            </div>
        </div>
        <div class="bar_box">
            <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
        </div>
    </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip)
ChartJS.defaults.datasets.bar.barPercentage = 0.7
ChartJS.defaults.font.size = 14
ChartJS.defaults.font.weight = 400
ChartJS.defaults.font.family = "Roboto"
export default {
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
                datasets: [{
                    data: [1, 2, 4, 2, 3, 1, 2],
                    backgroundColor: "#0d6efd"
                }]

            },
            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        display: this.labels,
                        ticks: {
                            font: {
                                size: 10
                            }
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        enabled: false,

                        external: function (context) {
                            // Tooltip Element
                            let tooltipEl = document.getElementById('chartjs-tooltip');

                            // Create element on first render
                            if (!tooltipEl) {
                                tooltipEl = document.createElement('div');
                                tooltipEl.id = 'chartjs-tooltip';
                                document.body.appendChild(tooltipEl);
                            }

                            // Hide if no tooltip
                            const tooltipModel = context.tooltip;
                            if (tooltipModel.opacity === 0) {
                                tooltipEl.style.opacity = 0;
                                return;
                            }

                            // Set caret Position
                            tooltipEl.classList.remove('above', 'below', 'no-transform');
                            if (tooltipModel.yAlign) {
                                tooltipEl.classList.add(tooltipModel.yAlign);
                            } else {
                                tooltipEl.classList.add('no-transform');
                            }

                            function getBody(bodyItem) {
                                return bodyItem.lines;
                            }

                            // Set Text
                            if (tooltipModel.body) {
                                const titleLines = tooltipModel.title || [];
                                const bodyLines = tooltipModel.body.map(getBody);

                                let innerHtml = '';

                                titleLines.forEach(function (title, index) {
                                    innerHtml += '0.52%';
                                });
                                innerHtml += `
                                <div style="
                                position:absolute;
                                bottom:2px;
                                left:50%;
                                transform:translate(-50%,100%);
                                ">
                                    <svg style="display:block" width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.40419 7.08587C4.04337 7.8497 2.95663 7.8497 2.59581 7.08586L0.277025 2.17712C-0.0363324 1.51376 0.447569 0.75 1.18122 0.75L5.81878 0.750001C6.55243 0.750001 7.03633 1.51376 6.72297 2.17712L4.40419 7.08587Z" fill="#0D6EFD" />
                                    </svg>
                                </div>
                                `;
                                tooltipEl.innerHTML = innerHtml;
                            }

                            const position = context.chart.canvas.getBoundingClientRect();
                            // const bodyFont = ChartJS.helpers.toFont(tooltipModel.options.bodyFont);

                            // Display, position, and set styles for font
                            tooltipEl.style.opacity = 1;
                            tooltipEl.style.position = 'absolute';
                            tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
                            tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                            tooltipEl.style.transform = "translate(-50%,-125%)"
                            tooltipEl.style.padding = '6px ' + '16px';
                            tooltipEl.style.pointerEvents = 'none';
                            tooltipEl.style.background = '#0d6efd'
                            tooltipEl.style['border-radius'] = '35px'
                            tooltipEl.style['font-size'] = '12px'
                            tooltipEl.style['font-weight'] = '400'
                            tooltipEl.style['color'] = '#FFF'
                            tooltipEl.style['font-family'] = '"Roboto", sans-serif'
                        }
                    }
                }
            }
        }
    },
    props: {
        title: String,
        labels: Boolean
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
    justify-content: space-between;
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

.bar_box {
    height: 100%;
}
</style>