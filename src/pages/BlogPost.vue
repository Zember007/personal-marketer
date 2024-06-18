<template>
    <div class="wrapper">
        <Header></Header>

        <div class="container">
            <main class="main">
                <div class="information">
                    <div class="breadcrumbs">
                        <span>Главная</span>
                        <span>Блог</span>
                    </div>
                    <div class="main-img">
                        <img src="../assets/img/home/materials/image-1.jpg " alt="image">
                    </div>

                    <div class="information-main">
                        <div class="tags">
                            <span>Теги:</span>
                            <div class="switcher">
                                <span>Веб-дизайн</span>
                                <span>Сайты</span>
                                <span>Бизнес</span>
                            </div>
                        </div>
                        <h1 class="main_title">
                            Сколько стоит разработать
                            сайт в 2024 году?
                        </h1>
                        <div class="information-main-data">
                            <div class="information-main-data-box">
                                <div class="information-main-data-block"></div>
                                <div class="information-main-data-block"></div>
                            </div>
                            <div class="share">
                                <span>Поделиться:</span>
                                <a href="#" class="share-link">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="14" cy="14" r="14" fill="#F8F8F8" />
                                        <path 
                                            d="M11.6663 18.6666H11.333C8.66634 18.6666 7.33301 18 7.33301 14.6666V11.3333C7.33301 8.66665 8.66634 7.33331 11.333 7.33331H16.6663C19.333 7.33331 20.6663 8.66665 20.6663 11.3333V14.6666C20.6663 17.3333 19.333 18.6666 16.6663 18.6666H16.333C16.1263 18.6666 15.9263 18.7666 15.7997 18.9333L14.7997 20.2666C14.3597 20.8533 13.6397 20.8533 13.1997 20.2666L12.1997 18.9333C12.093 18.7866 11.8463 18.6666 11.6663 18.6666Z"
                                            stroke="#242626" stroke-miterlimit="10" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M16.6646 13.3333H16.6706" stroke="#242626" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M13.9967 13.3333H14.0027" stroke="#242626" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M11.3297 13.3333H11.3357" stroke="#242626" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                </a>
                                <a href="#" class="share-link">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="14" cy="14" r="14" fill="#F8F8F8" />
                                        <path
                                            d="M11.8354 17.0705L11.5224 21.7587C11.9822 21.7587 12.1854 21.5484 12.442 21.2989L14.6511 19.1508L19.247 22.5463C20.0928 23.013 20.7032 22.7714 20.9139 21.7611L23.931 7.54373C24.2398 6.30531 23.4589 5.74363 22.6497 6.11097L4.93382 12.9422C3.72454 13.4272 3.73159 14.1019 4.71339 14.4025L9.2597 15.8214L19.7849 9.18123C20.2818 8.87992 20.7378 9.04191 20.3635 9.3741L11.8351 17.0703L11.8354 17.0705Z"
                                            fill="#242626" />
                                    </svg>
                                </a>
                                <a href="#" class="share-link">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="14" cy="14" r="14" fill="#F8F8F8" />
                                        <path
                                            d="M11.5574 16.6587V8.5H13.7805V12.9424V13.4992L14.3341 13.4396C15.481 13.316 16.5952 12.6133 17.4946 11.6645C18.3168 10.7972 18.9984 9.68484 19.396 8.5H21.6301C20.9603 11.0754 19.0178 12.9863 17.615 13.7985L16.7878 14.2776L17.6531 14.6838C19.0595 15.3442 21.2826 17.0197 22.3213 20H19.8079C18.9273 17.6363 16.9492 15.7965 14.3301 15.5355L13.7805 15.4807V16.033V19.9996C10.5415 19.9742 8.04406 18.8511 6.32404 16.8518C4.65259 14.909 3.6703 12.0859 3.51612 8.5H5.93863C6.18514 14.0282 8.70769 16.5857 10.9359 17.1437L11.5574 17.2993V16.6587Z"
                                            fill="#242626" stroke="#242626" />
                                    </svg>
                                </a>
                                <a href="#" class="share-link">
                                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="14" cy="14" r="14" fill="#F8F8F8" />
                                        <path
                                            d="M16.9225 7.05449L16.9225 7.0545C17.8168 7.41166 18.6181 7.92209 19.3096 8.56785C20.0002 9.21939 20.5411 9.97205 20.9173 10.8076C21.3066 11.6824 21.5059 12.602 21.4999 13.5575H21.4999V13.5607C21.4999 14.5124 21.2998 15.4394 20.911 16.3067C20.5346 17.1427 19.9934 17.8958 19.3022 18.5477C18.6127 19.1979 17.8123 19.7023 16.916 20.0603L16.9159 20.0603C15.9916 20.4295 15.0111 20.6148 13.9967 20.6148C12.9081 20.6148 11.8732 20.4049 10.9003 19.9866L10.6987 19.8999L10.4984 19.9896L7.89515 21.1555L8.37689 18.516L8.42082 18.2753L8.25772 18.0929C7.11786 16.8183 6.5 15.2182 6.5 13.5541C6.5 12.6024 6.70005 11.6754 7.08878 10.8082C7.46521 9.97208 8.00644 9.21893 8.6977 8.56704C9.38716 7.91683 10.1876 7.41247 11.0839 7.0545L11.0839 7.05449C12.0082 6.68526 12.9887 6.5 14.0032 6.5C15.0176 6.5 15.9982 6.68526 16.9225 7.05449Z"
                                            fill="#242626" stroke="#242626" />
                                        <path
                                            d="M17.2494 15.061C16.9102 14.8905 16.6624 14.7856 16.4863 14.72C16.3754 14.6807 16.1145 14.5626 16.0232 14.6348C15.7362 14.8708 15.4296 15.5397 15.1035 15.6643C14.2947 15.5069 13.5446 14.9495 12.9576 14.379C12.6966 14.1298 12.214 13.4216 12.1096 13.2315C12.09 13.0348 12.4423 12.7725 12.5205 12.6216C12.9249 12.1626 12.6184 11.8741 12.5662 11.6839C12.4749 11.4872 12.3183 11.1331 12.1814 10.8446C12.064 10.6544 12.0379 10.3725 11.8291 10.2675C10.9421 9.80853 10.4333 10.7266 10.2246 11.2052C8.96575 14.2544 16.5319 20.0577 18.0712 16.0577C18.1495 15.7102 18.1169 15.579 17.9995 15.4216C17.7647 15.2577 17.4907 15.1856 17.2494 15.061Z"
                                            fill="#F8F8F8" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blog__wrapper">
                    <BlogCart></BlogCart>
                    <BlogCart></BlogCart>
                    <BlogCart></BlogCart>
                    <BlogCart></BlogCart>
                </div>
            </main>
        </div>

        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__row">
                        <div class="footer__logo-block">
                            <div class="logo">
                                <img src="../assets/img/sidebar/logo.svg" alt="logo">
                            </div>
                            <div class="footer-text">
                                Персональный маркетолог <br>
                                Маркетинг, который приносит прибыль
                            </div>
                            <div class="share__links">
                                <a href="#">
                                    <img src="../assets/img/icons/tg.svg" alt="tg">
                                </a>
                                <a href="#">
                                    <img src="../assets/img/icons/vk.svg" alt="vk">
                                </a>
                                <a href="#">
                                    <img src="../assets/img/icons/yt.svg" alt="youtube">
                                </a>
                            </div>
                        </div>
                        <div class="footer__nav-block">
                            <div class="column">
                                <div class="title">Навигация</div>
                                <a href="#" class="link">Главная</a>
                                <a href="#" class="link">Возможности</a>
                                <a href="#" class="link">Тарифы</a>
                                <a href="#" class="link">Блог</a>
                                <a href="#" class="link">Контакты</a>
                            </div>
                            <div class="column">
                                <div class="title">Возможности</div>
                                <a href="#" class="link">Маркетлейс маркетологов</a>
                                <a href="#personal" class="link">Персональная стратегия</a>
                                <a href="#analytics" class="link">Аналитика</a>
                                <a href="#documents" class="link">Документы, счета, чат в едином сервисе</a>
                                <a href="#balance" class="link">Контроль бюджета</a>
                                <a href="#analytics" class="link">Отчеты</a>
                            </div>
                            <div class="column">
                                <div class="title">Информация</div>
                                <a @click.prevent="open_policy" href="#" class="link">Политика конфиденциальности</a>
                                <a @click.prevent="open_polzovatel" href="#" class="link">Пользовательское
                                    соглашение</a>
                                <a @click.prevent="open_pravila" href="#" class="link">Правила оплаты и возврата</a>
                                <a href="#" class="link">Руководство пользователя</a>
                            </div>
                        </div>
                    </div>
                    <div class="footer__desc">
                        <span>© Все права защищены.</span>
                        <span> Персональный маркетолог, 2024</span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import BlogCart from '../components/blog/BlogCart.vue'
</script>

<style lang="scss" scoped>
.wrapper {}

.container {
    max-width: 1650px;
    padding: 0 15px;
    margin: 0 auto;
}

.main {
    padding: 140px 0 240px 0;
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.information {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

.information-main {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 1000px;
}

.breadcrumbs {
    align-self: start;
    display: flex;
    gap: 12px;
    align-items: center;

    span {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: -0.02em;
        color: var(--text-primary);


        &:not(:last-child) {
            display: flex;
            gap: 12px;
            align-items: center;

            &::after {
                content: '/';
            }
        }

        &:last-child {
            color: var(--blue-primary-blue-900);
        }
    }
}

.main_title {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 80px;
    line-height: 110%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--text-primary);

    span {
        color: var(--component-colors-blue-active);
    }
}

.search {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.search_inpt-box {
    width: 100%;
    position: relative;

    &::before {
        content: '';
        background: url(../assets/img/icons/search.svg) no-repeat;
        background-size: cover;
        height: 28px;
        width: 28px;
        position: absolute;
        z-index: 1;
        top: 50%;
        transform: translateY(-50%);
        left: 28px;
    }
}

.search_inpt {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 20px;
    background: var(--background-background-primary);
    padding: 32px 0;
    width: 100%;
    padding-left: 85px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    letter-spacing: -0.02em;
}

.switcher {
    display: flex;
    gap: 8px;

    span {
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        letter-spacing: -0.02em;
        color: #87a0b1;
        border-radius: 8px;
        padding: 12px 16px;
        background: #f1f4f8;
    }
}

.blog__wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
}

.footer {
    padding: 80px 0 140px 0;
    background: rgba(13, 110, 253, 0.05);
    position: relative;
}

.footer__row {
    display: flex;
    gap: 200px;
}

.footer__logo-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.footer-text {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 15px;
    line-height: 140%;
    letter-spacing: -0.01em;
    color: var(--text-secondary);
    opacity: 0.7;
    max-width: 280px;
}

.footer__nav-block {
    display: flex;
    gap: 100px;

    .column {
        display: flex;
        flex-direction: column;

        .link {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 16px;
            line-height: 250%;
            letter-spacing: -0.02em;
            color: var(--text-primary);
        }

        .title {
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 14px;
            line-height: 114%;
            letter-spacing: -0.02em;
            color: var(--text-secondary);
            opacity: 0.7;
            margin-bottom: 20px;
        }
    }
}

.footer__desc {
    position: absolute;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
}

.share__links {
    display: flex;
    align-items: center;
    gap: 20px;
}


@media(max-width:1350px) {

    .footer__row {
        flex-direction: column;
        gap: 60px;
    }

    .footer__nav-block {
        flex-wrap: wrap;
        gap: 100px;
    }

    .footer__desc {
        white-space: nowrap;
        font-size: 16px;
    }
}

@media(max-width:950px) {
    .footer__nav-block {
        flex-direction: column;
    }
}


@media(max-width:680px) {

    .footer__desc {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer__nav-block {
        gap: 60px;
    }
}
</style>