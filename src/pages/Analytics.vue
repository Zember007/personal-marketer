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
                <SelectInput></SelectInput>
                <SelectInput></SelectInput>
                <SelectInput></SelectInput>
            </div>            
            <button class="offer">
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
                    <div class="analytics__top-button">
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
        <Doughnut :data="data_doughnut" />
        <Bar />
        <MultiBar />
    </ProfileLayout>
</template>

<script>
import ProfileTop from '../components/profile/ProfileTop.vue';
import ProfileLayout from '../layouts/ProfileLayout.vue'
import Doughnut from '../components/analytics/Doughnut.vue';
import Bar from '../components/analytics/Bar.vue';
import MultiBar from '../components/analytics/MultiBar.vue';

export default {
    components: {
        ProfileLayout,
        ProfileTop,
        Doughnut,
        Bar,
        MultiBar
    },
    methods: {
    },
    data() {
        return {
            data_doughnut: {
                data: {
                    datasets: [{
                        backgroundColor: ['#0d6efd', '#fdc007', '#db3546', '#c3c6c4'],
                        data: [4305, 859, 482, 138],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    cutout: "70%"
                },
                titles: ['Компьютеры', 'Мобильные устройства', 'Планшеты', 'Другое'],
            }
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.route_back {
    display: flex;
    align-items: center;
    gap: 8px;
}

.analytics_top-nav {
    display: flex;
    align-items: center;
    gap: 24px;
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
    padding: 16px;
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
}
</style>