<template>
    <div class="wrapper">
        <Header></Header>
        <section class="preview">
            <div class="preview__informations">
                <h1 class="title">
                    <span>Маркетплейс</span> маркетологов
                    Персональный <span>Маркетолог</span>
                </h1>

                <h4 class="text">Ваш персональный помощник для развития Вашего бизнеса</h4>

                <div class="preview__nav">
                    <button class="home__btn-primary">Начать бесплатно</button>
                    <button class="home__btn-second">Подробнее</button>
                </div>
            </div>

            <div class="container">
                <div class="preview__switcher">
                    <input type="radio" id="radio1" name="preview" checked>
                    <label for="radio1" class="preview__switcher-block">
                        <div class="title">Персональная стратегия</div>
                        <div class="text">Выберите маркетолога, который разработает стратегию развития вашего бизнеса.
                        </div>
                    </label>
                    <input type="radio" id="radio5" name="preview">
                    <label for="radio5" class="preview__switcher-block">
                        <div class="title">Аналитика</div>
                        <div class="text">Вся аналитика и результаты работы в едином окне.</div>
                    </label>
                    <input type="radio" id="radio4" name="preview">
                    <label for="radio4" class="preview__switcher-block">
                        <div class="title">Документы</div>
                        <div class="text">Документы, счета, чат в едином сервисе.</div>
                    </label>
                    <input type="radio" id="radio3" name="preview">
                    <label for="radio3" class="preview__switcher-block">
                        <div class="title">Контролируйте бюджет</div>
                        <div class="text">Контролируйте бюджет, задачи
                            и сроки.</div>
                    </label>
                    <input type="radio" id="radio2" name="preview">
                    <label for="radio2" class="preview__switcher-block">
                        <div class="title">Отчеты</div>
                        <div class="text">Все отчеты по проекту в едином сервисе.</div>
                    </label>
                </div>
            </div>
        </section>
        <main class="main">
            <section class="video">
                <div class="icon_play"></div>
            </section>
            <section class="team">
                <div class="container">
                    <div class="main__inner">
                        <h2 class="title_main"></h2>
                        <div class="gallery"></div>
                    </div>
                </div>
            </section>
            <section class="information">
                <div class="container">
                    <div class="main__inner">
                        <h2 class="title_main">
                            Получите отдел маркетинга <br>
                            в <span>одном сервисе</span>
                        </h2>
                        <div class="information__box">
                            <div class="information__block">
                                <div class="information__box-col">
                                    <div class="information__title">
                                        Персональный маркетолог <br>
                                        <span>под Ваши задачи</span>
                                    </div>
                                    <div class="information__text">
                                        Выберите маркетолога, который разработает стратегию развития вашего бизнеса,
                                        соберет команду и выстроит аналитику по проекту, вам остается только следить за
                                        результатом в соответствии с поставленными KPI
                                    </div>
                                    <button class="home__btn-primary">Начать бесплатно</button>
                                </div>
                                <div class="information__box-col"><img src="" alt="information-img"></div>
                            </div>
                            <div class="information__block">
                                <div class="information__box-col"><img src="" alt="information-img"></div>
                                <div class="information__box-col">
                                    <div class="information__title">
                                        <span>Вся аналитика</span><br>
                                        и результаты работы в едином окне
                                    </div>
                                    <div class="information__text">
                                        <p>Маркетолог подключит Метрику, а также все необходимые сервисы для аналитики
                                            вашего бизнеса и достижения поставленных KPI.</p>
                                        <p>И нтеграция происходит через API-шлюзы, но вам, как владельцу бизнеса, больше
                                            не нужно думать о том, как это реализовать.</p>
                                    </div>
                                    <button class="home__btn-primary">Начать бесплатно</button>
                                </div>
                            </div>
                            <div class="information__block">
                                <div class="information__box-col">
                                    <div class="information__title">
                                        Документы, счета, чат
                                        в <span>едином сервисе</span>
                                    </div>
                                    <div class="information__text">
                                        <p>
                                            Больше нет необходимости переключаться между приложениями, мессенджерами и
                                            почтой: все отчеты, переписка и документы хранятся в едином сервисе.
                                        </p>

                                        <p>
                                            Нет необходимости искать договора, счета и ТЗ
                                            — с нами ни один документ не потеряется
                                        </p>
                                    </div>
                                    <button class="home__btn-primary">Начать бесплатно</button>
                                </div>
                                <div class="information__box-col"><img src="" alt="information-img"></div>
                            </div>
                            <div class="information__block">
                                <div class="information__box-col"><img src="" alt="information-img"></div>
                                <div class="information__box-col">
                                    <div class="information__title">
                                        <span>Контролируйте</span> бюджет,<br>
                                        задачи и сроки
                                    </div>
                                    <div class="information__text">
                                        <p>
                                            После разработки персональной стратегии развития вашего бизнеса маркетолог
                                            составит бюджет, соберет команду, составит план работ и подключит команду к
                                            проекту.
                                        </p>

                                        <p>Вы сможете в режиме реального времени отслеживать результаты работы и
                                            эффективность расходования бюджета.</p>
                                    </div>
                                    <button class="home__btn-primary">Начать бесплатно</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="partners">
                <h2 class="title_main">Нам <span>доверяют</span></h2>
                <div class="logo_slider-right"></div>
                <div class="logo_slider-left"></div>
            </section>
            <section class="start">
                <div class="container">
                    <div class="start__inner">
                        <div class="start__col">
                            <h2 class="title_main" style="text-align: left;"></h2>
                            <div class="descrition">
                                <p>
                                    Для разработки стратегии развития Вашего бизнеса Вам достаточно записаться на
                                    Бесплатную консультацию и рассказать нам про задачи, которые необходимо реализовать.
                                </p>
                                <p>
                                    Подключайтесь к сервису Персональный маркетолог
                                    и покоряйте новые вершины в развитии Вашего бизнеса
                                </p>
                            </div>
                            <button class="home__btn-primary">Начать бесплатно</button>
                        </div>
                        <div class="start__col">
                            <img src="" alt="start-img">
                        </div>
                    </div>
                </div>
            </section>
            <section class="materials">
                <div class="container">
                    <div class="main__inner">
                        <h2 class="title_main"><span>Полезные материалы</span> для вашего бизнеса</h2>
                        <div class="materials__box">
                            <div class="materials__block">
                                <div class="materials__block-img">
                                    <img src="" alt="material">
                                </div>
                                <div class="materials__block-date"></div>
                                <div class="materials__block-title"></div>
                            </div>
                            <div class="materials__block">
                                <div class="materials__block-img">
                                    <img src="" alt="material">
                                </div>
                                <div class="materials__block-date"></div>
                                <div class="materials__block-title"></div>
                            </div>
                            <div class="materials__block">
                                <div class="materials__block-img">
                                    <img src="" alt="material">
                                </div>
                                <div class="materials__block-date"></div>
                                <div class="materials__block-title"></div>
                            </div>
                            <div class="materials__block">
                                <div class="materials__block-img">
                                    <img src="" alt="material">
                                </div>
                                <div class="materials__block-date"></div>
                                <div class="materials__block-title"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer class="footer">
            <div class="container">
                <div class="footer__inner">
                    <div class="footer__row">
                        <div class="footer__logo-block">
                            <div class="logo">
                                <img src="../assets/img/sidebar/logo.svg" alt="logo">
                            </div>
                            <div class="footer-text">
                                Персональный маркетолог
                                Маркетинг, который приносит прибыль
                            </div>
                            <div class="share__links"></div>
                        </div>
                        <div class="footer__nav-block"></div>
                    </div>
                    <div class="footer__desc">
                        <span>© Все права защищены. ООО «Персональный маркетолог», 2024 </span>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
    components: {
        Header
    }
}
</script>

<style lang="scss" scoped>
.wrapper {}

.main {
    display: flex;
    flex-direction: column;
    gap: 240px;
    padding-bottom: 240px;
}

.preview {
    background: url('../assets/img/home/preview.jpg') 50% 50% no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 140px 0;
    flex-direction: column;
    gap: 32px;
}

.preview__informations {
    display: flex;
    flex-direction: column;
    gap: 60px;
    align-items: center;
    text-align: center;
}

h1.title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 80px;
    line-height: 100%;
    letter-spacing: -0.04em;
    text-align: center;
    color: var(--grey-primary-grey-900);
    max-width: 1000px;

    span {
        color: var(--blue-primary-blue-900);
    }

    position: relative;

    &::before {
        content: url(../assets/img/icons/line.svg);

        position: absolute;
        bottom: -55px;
        left: 70px;
    }
}

.preview__informations.text {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
    line-height: 110%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--text-primary);
}

.preview__nav {
    display: flex;
    gap: 16px;
}

.home__btn-primary {
    border-radius: 6px;
    padding: 20px 40px;
    box-shadow: 0 6px 12px 0 rgba(13, 110, 253, 0.1), 0 22px 22px 0 rgba(13, 110, 253, 0.09), 0 50px 30px 0 rgba(13, 110, 253, 0.05), 0 88px 35px 0 rgba(13, 110, 253, 0.01), 0 138px 38px 0 rgba(13, 110, 253, 0);
    background: var(--primary-button-color);
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: var(--background-background-primary);
}

.home__btn-second {
    border: 1px solid var(--component-colors-blue-active);
    border-radius: 6px;
    padding: 20px 40px;
    background: var(--background-background-primary);
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: var(--component-colors-blue-active);
}

.preview__switcher {
    display: flex;
    gap: 5px;
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.2);
    border-radius: 16px;
    overflow: hidden;

    input {
        opacity: 0;
        visibility: hidden;
        width: 0;
        height: 0;
        position: absolute;
        z-index: -10;

        &:checked+label {
            background: var(--background-background-secondary);

            .title {
                color: var(--component-colors-blue-active);
            }

            &::before {
                content: "";
                background: var(--icons-active);
                width: 100px;
                height: 8px;
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 1;
            }
        }
    }
}

.preview__switcher-block {

    padding: 32px 16px 40px 16px;
    width: 100%;
    background: var(--background-background-primary);
    position: relative;
    cursor: pointer;

    .title {
        font-family: var(--font-family);
        font-weight: 700;
        font-size: 20px;
        line-height: 160%;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: var(--text-primary);
    }

    .text {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 17px;
        line-height: 140%;
        letter-spacing: -0.01em;
        color: var(--text-primary);
        opacity: 0.7;
    }
}

.video {
    height: 800px;
    width: 1400px;
    margin: 0 auto;
    padding: 15px;
    background: url(../assets/img/home/video.jpg) no-repeat 50% 50% / cover;
    display: flex;
    align-items: center;
    justify-content: center;


    .icon_play {
        height: 60px;
        width: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: var(--blue-primary-blue-900);
        cursor: pointer;
        transition: all .5s;


        &:hover {
            box-shadow: 0 0 20px 1px #0D6EFD;
        }

        &::before {
            content: '';
            background: url(../assets/img/icons/play.svg) no-repeat 50% 50%;
            height: 32px;
            width: 32px;
            transition: all .3s;
            transform: translateX(2px);

        }
    }

}

.team {}

.container {
    max-width: 1650px;
    padding: 0 20px;
    height: 100%;
    margin: 0 auto;
}

.main__inner {}

.title_main {}

.gallery {}

.information {}

.information__box {}

.information__block {}

.information__box-col {}

.information__title {}

.information__text {}

.partners {}

.logo_slider-right {}

.logo_slider-left {}

.start {}

.start__inner {}

.start__col {}

.descrition {}

.materials {}

.materials__box {}

.materials__block {}

.materials__block-img {}

.materials__block-date {}

.materials__block-title {}

.footer {}

.footer__inner {}

.footer__row {}

.footer__logo-block {}

.logo {}

.footer-text {}

.share__links {}

.footer__nav-block {}

.footer__desc {}
</style>