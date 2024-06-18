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
                    <div class="information-main">
                        <h1 class="main_title">
                            <span>Полезные</span> материалы
                            в нашем блоге
                        </h1>
                        <div class="search">
                            <div class="search_inpt-box">
                                <input type="text" class="search_inpt" placeholder="Поиск статей">
                            </div>
                            <div class="switcher">
                                <span>Веб-дизайн</span>
                                <span>Сайты</span>
                                <span>Бизнес</span>
                                <span>Люди</span>
                                <span>Маркетинг</span>
                                <span>Криптовалюта</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blog__wrapper">
                    <BlogCart :description="true"></BlogCart>
                    <BlogCart :description="true"></BlogCart>
                    <BlogCart :description="true"></BlogCart>
                    <BlogCart :description="true"></BlogCart>
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
    max-width: 1720px;
    padding: 0 32px;
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
    flex-wrap: wrap;
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

@media (max-width:1400px) {
    .blog__wrapper {
        grid-template-columns: 1fr 1fr;
    }
}

@media(max-width:950px) {
    .footer__nav-block {
        flex-direction: column;
    }

    .main_title  {
        font-size: 54px;
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

    .blog__wrapper {
        grid-template-columns: 1fr;
    }

    .main_title  {
        font-size: 28px;
    }
    
}

@media(max-width:550px)  {
    .search{
        display: none;
    }
}


</style>