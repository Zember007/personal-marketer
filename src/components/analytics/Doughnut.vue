<template>
    <div class="box">
        <div class="top">
            <div class="title">{{ title }}</div>
            <div class="nav" :class="{active: active}">
                <span class="before" @click="active=!active"></span>
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
                <div @click="active=!active" class="close icon">
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.686 13.2573L16.0858 17.6571C16.4294 18.0007 16.9993 18.0007 17.3429 17.6571C17.6865 17.3135 17.6865 16.7436 17.3429 16.4L12.9431 12.0002L17.3429 7.60046C17.6865 7.25686 17.6865 6.68698 17.3429 6.34338C16.9993 5.99978 16.4294 5.99978 16.0858 6.34338L11.686 10.7432L7.28626 6.34338C6.94266 5.99978 6.37278 5.99978 6.02918 6.34338C5.68558 6.68698 5.68558 7.25686 6.02918 7.60046L10.429 12.0002L6.02918 16.4C5.68558 16.7436 5.68558 17.3135 6.02918 17.6571C6.37278 18.0007 6.94266 18.0007 7.28626 17.6571L11.686 13.2573Z"
                            fill="#242626" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="Doughnut-box">
            <Doughnut class="Doughnut" :data="data['data']" :options="data['options']" />
        </div>
        <div class="data">
            <div class="block" v-for="(item, index) in data['data']['datasets'][0]['data']">
                <div class="color" :style="{ 'background': data['data']['datasets'][0]['backgroundColor'][index] }">
                </div>
                <div class="text">{{ data['titles'][index] }}</div>

                <span></span>
                <div class="count">
                    <strong>{{ item }}</strong>
                    <span>{{ (item / percet).toFixed(2) }}%</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement,Tooltip } from 'chart.js'

ChartJS.register(ArcElement,Tooltip)

export default {
    components: {
        Doughnut
    },

    data() {
        return {
            percet: 0,
            active: false
        }
    },

    props: {
        data: Object,
        title: String
    },
    mounted() {
        let num = 0
        this.data['data']['datasets'][0]['data'].forEach(el => {
            num += el
        })
        this.percet = num / 100
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
    gap: 24px;
}

.top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

.title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
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

    .before{
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
    align-items: center;justify-content: center;
}

.Doughnut-box {
    max-width: 280px;
    margin: 0 auto;
}

.data {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.block {
    display: grid;
    grid: auto auto/12px auto;
    align-items: center;
    column-gap: 8px;
}

.color {
    border-radius: 2px;
    width: 12px;
    height: 12px;
}

.text {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 12px;
    line-height: 167%;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
}

.count {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 167%;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 4px;

    strong {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 18px;
        line-height: 156%;
        letter-spacing: -0.02em;
        color: var(--grey-primary-grey-900);
    }
}

.Doughnut {
    min-width: 280px;
    min-height: 280px;
    border-radius: 50%;
    border: 20px solid rgba(13, 110, 253, 0.05);
}
</style>