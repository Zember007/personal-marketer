<template>
    <ProfileLayout>
        <ProfileTop>
            <RouterLink to="/profile" class="route_back">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5417 16.5999L7.10834 11.1666C6.46667 10.5249 6.46667 9.4749 7.10834 8.83324L12.5417 3.3999"
                        stroke="#242626" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>

                <span>Аналитика</span>
            </RouterLink>
        </ProfileTop>

        <Doughnut :data="chartData" :options="chartOptions" />
    </ProfileLayout>
</template>

<script>
import ProfileTop from '../components/profile/ProfileTop.vue';
import ProfileLayout from '../layouts/ProfileLayout.vue'
import { Doughnut } from 'vue-chartjs'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)
ChartJS.defaults.color = "#657b83"
ChartJS.defaults.borderColor = "rgba(147, 161, 161, 0.25)"
ChartJS.defaults.font.family = "'Fira Sans', 'sans-serif'"
ChartJS.defaults.font.size = 16

export default {
    components: {
        ProfileLayout,
        ProfileTop,
        Doughnut
    },
    data() {
        return {
            chartData: {
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
                datasets: [
                    {
                        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                        data: [40, 20, 80, 10]
                    }
                ]
            },
            chartOptions: {
                responsive: false,
            }
        }
    },
    methods: {
    },
    mounted() {
        console.log(ChartJS.defaults);
    }
}
</script>

<style lang="scss" scoped>
.route_back {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>