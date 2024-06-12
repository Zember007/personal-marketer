<script>
import Header from '../components/Header.vue'
export default {
    components: {
        Header
    },

    data() {
        return {
            preview_text: [
                {
                    title: ' <span class="span_primary">Маркетплейс</span> маркетологов<br> <span class="element_primary">Персональный</span> Маркетолог',
                    text: 'Маркетинг, который приносит прибыль<br>Ваш персональный помощник для развития Вашего бизнеса',
                    link: '#personal'
                },
                {
                    title: ' Вся аналитика и результаты <br> работы <span class="element_primary span_primary">в едином окне</span>',
                    text: 'Маркетолог подключит Метрику, а также все необходимые сервисы<br>для аналитики Вашего бизнеса и достижения поставленных KPI',
                    link: '#analytics'
                },
                {
                    title: 'Документы, счета, чат <br> <span class="span_primary element_primary">в едином сервисе</span>',
                    text: 'Больше нет необходимости переключаться между приложениями, мессенджерами и почтой:<br>все отчёты, переписка, документы хранятся в едином сервисе',
                    link: '#documents'
                },
                {
                    title: '<span class="span_primary element_primary">Контролируйте</span> бюджет,<br> задачи и сроки',
                    text: 'В режиме реального времени отслеживайте результаты работы<br>и эффективность расходования бюджета',
                    link: '#balance'
                },
                {
                    title: 'Все отчеты по проекту <br><span class="span_primary element_primary">в едином сервисе</span>',
                    text: 'Интеграция происходит через API-шлюзы, но вам, как владельцу бизнеса,<br>больше не нужно думать о том, как это реализовать',
                    link: '#analytics'
                },
            ],
            text_active: 0,
            touchstartX: 0,
            touchendX: 0
        }
    },
    methods: {
        text_change(num) {
            this.text_active = num
        },
        open_policy() {
            window.open('/privacy-policy.pdf', '_blank')
        },
        open_pravila() {
            window.open('/pravila-oplaty-i-vozvrata.pdf', '_blank')
        },
        open_polzovatel() {
            window.open('/polzovatelskoe-soglashenie.pdf', '_blank')
        },

        touch_end(event) {
            this.touchendX = event.changedTouches[0].screenX;
            if (this.touchendX+30 < this.touchstartX-30) {
                if (this.text_active != 4) {                    
                    this.text_active = this.text_active + 1
                    document.querySelectorAll('.preview__switcher input')[this.text_active].click()
                }
            }

            if (this.touchendX-30 > this.touchstartX+30) {
                if (this.text_active != 0) {
                    this.text_active = this.text_active - 1
                    document.querySelectorAll('.preview__switcher input')[this.text_active].click()
                }
            }
        },
        

        touch_start(event) {
            this.touchstartX = event.changedTouches[0].screenX;
        }
    },
    mounted() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        })
    },
}
</script>

<template>
    <div class="wrapper">
        <Header></Header>
        <section class="preview" @touchstart="touch_start" @touchend="touch_end">
            <div class="preview__informations">
                <h1 class="title" v-html="preview_text[text_active]['title']">


                </h1>

                <h4 class="text" v-html="preview_text[text_active]['text']">
                </h4>

                <div class="preview__nav">
                    <RouterLink to="/login" class="home__btn-primary">Начать бесплатно</RouterLink>
                    <a :href="preview_text[text_active]['link']" class="home__btn-second">Подробнее</a>
                </div>
            </div>

            <div class="container">
                <div class="preview__switcher">
                    <input @input="text_change(0)" type="radio" id="radio1" name="preview" checked>
                    <label for="radio1" class="preview__switcher-block">
                        <div class="title">Персональная стратегия</div>
                        <div class="text">Выберите маркетолога, который разработает стратегию развития вашего бизнеса.
                        </div>
                    </label>
                    <input @input="text_change(1)" type="radio" id="radio5" name="preview">
                    <label for="radio5" class="preview__switcher-block">
                        <div class="title">Аналитика</div>
                        <div class="text">Вся аналитика и результаты работы в едином окне.</div>
                    </label>
                    <input @input="text_change(2)" type="radio" id="radio4" name="preview">
                    <label for="radio4" class="preview__switcher-block">
                        <div class="title">Документы</div>
                        <div class="text">Документы, счета, чат в едином сервисе.</div>
                    </label>
                    <input @input="text_change(3)" type="radio" id="radio3" name="preview">
                    <label for="radio3" class="preview__switcher-block">
                        <div class="title">Контролируйте бюджет</div>
                        <div class="text">Контролируйте бюджет, задачи
                            и сроки.</div>
                    </label>
                    <input @input="text_change(4)" type="radio" id="radio2" name="preview">
                    <label for="radio2" class="preview__switcher-block">
                        <div class="title">Отчеты</div>
                        <div class="text">Все отчеты по проекту в едином сервисе.</div>
                    </label>
                </div>
            </div>
        </section>
        <section class="video">
            <img src="../assets/img/home/video.jpg" alt="">
            <div class="icon_play"></div>
        </section>
        <main class="main">
            <section class="team">
                <div class="container">
                    <div class="main__inner">
                        <h2 class="title_main">
                            В нашем сервисе зарегистрировано
                            <span>более 2500</span> исполнителей
                        </h2>
                        <div class="gallery">
                            <div class="gallery__block">
                                <div class="gallery__inf">
                                    <div class="title">Дмитрий Фролов</div>
                                    <div class="text">Маркетолог</div>
                                </div>
                                <img src="../assets/img/home/team/image.jpg" alt="team_people">
                            </div>
                            <div class="gallery__block">
                                <div class="gallery__inf">
                                    <div class="title">Ирина Войнова</div>
                                    <div class="text">Маркетолог</div>
                                </div>
                                <img src="../assets/img/home/team/image-1.jpg" alt="team_people">
                            </div>
                            <div class="gallery__block">
                                <div class="gallery__inf">
                                    <div class="title">Алексей Цыплаков</div>
                                    <div class="text">Маркетолог</div>
                                </div>
                                <img src="../assets/img/home/team/image-2.jpg" alt="team_people">
                            </div>
                            <div class="gallery__block">
                                <div class="gallery__inf">
                                    <div class="title">Олеся Трофимова</div>
                                    <div class="text">Маркетолог</div>
                                </div>
                                <img src="../assets/img/home/team/image-3.jpg" alt="team_people">
                            </div>
                            <div class="gallery__block">
                                <div class="gallery__inf">
                                    <div class="title">Светлана Анисенко</div>
                                    <div class="text">Маркетолог</div>
                                </div>
                                <img src="../assets/img/home/team/image-4.jpg" alt="team_people">
                            </div>
                            <div class="gallery__block">
                                <div class="gallery__inf">
                                    <div class="title">Игорь Кузнецов</div>
                                    <div class="text">Маркетолог</div>
                                </div>
                                <img src="../assets/img/home/team/image-5.jpg" alt="team_people">
                            </div>
                            <div class="gallery__block">
                                <div class="gallery__inf">
                                    <div class="title">Инна Фадеева</div>
                                    <div class="text">Маркетолог</div>
                                </div>
                                <img src="../assets/img/home/team/image-6.jpg" alt="team_people">
                            </div>
                            <div class="gallery__block">
                                <div class="gallery__inf">
                                    <div class="title">Кирилл Золотов</div>
                                    <div class="text">Маркетолог</div>
                                </div>
                                <img src="../assets/img/home/team/image-7.jpg" alt="team_people">
                            </div>
                        </div>
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
                            <div id="personal" class="information__block">
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
                                    <RouterLink to="/login" class="home__btn-primary">Начать бесплатно</RouterLink>
                                </div>
                                <div class="information__box-col img"><img
                                        src="../assets/img/home/information/image.svg" alt="information-img"></div>
                            </div>
                            <div id="analytics" class="information__block">
                                <div class="information__box-col img"><img
                                        src="../assets/img/home/information/image1.svg" alt="information-img"></div>
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
                                    <RouterLink to="/login" class="home__btn-primary">Начать бесплатно</RouterLink>
                                </div>
                            </div>
                            <div id="documents" class="information__block">
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
                                    <RouterLink to="/login" class="home__btn-primary">Начать бесплатно</RouterLink>
                                </div>
                                <div class="information__box-col img"><img
                                        src="../assets/img/home/information/image2.svg" alt="information-img"></div>
                            </div>
                            <div id="balance" class="information__block">
                                <div class="information__box-col img"><img
                                        src="../assets/img/home/information/image3.svg" alt="information-img"></div>
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
                                    <RouterLink to="/login" class="home__btn-primary">Начать бесплатно</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="partners">
                <h2 class="title_main" style="max-width: 100%;">Нам <span>доверяют</span></h2>
                <div class="sliders">
                    <div class="logo_slider-right">
                        <div class="block">
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 2.svg" alt="logo"></div>
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 3.svg" alt="logo"></div>
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 4.svg" alt="logo"></div>
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 5.svg" alt="logo"></div>
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 6.svg" alt="logo"></div>
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 7.svg" alt="logo"></div>
                        </div>
                    </div>
                    <div class="logo_slider-left">
                        <div class="block">
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 1.svg" alt="logo"></div>
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 2-1.svg" alt="logo"></div>
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 3-1.svg" alt="logo"></div>
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 4-1.svg" alt="logo"></div>
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 5-1.svg" alt="logo"></div>
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 6-1.svg" alt="logo"></div>
                            <div class="logo-item"><img src="../assets/img/home/logo/logo - 7-1.svg" alt="logo"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="start">
                <div class="container">
                    <div class="start__inner">
                        <div class="start__col">
                            <h2 class="title_main" style="text-align: left;">
                                <span>Запишитесь</span> на консультацию<br>
                                и получите <span>стратегию развития</span><br>
                                Вашей компании
                            </h2>
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
                            <RouterLink to="/login" class="home__btn-primary">Начать бесплатно</RouterLink>
                        </div>
                        <div class="start__col">
                            <img src="../assets/img/home/start.jpg" alt="start-img">
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
                                    <img src="../assets/img/home/materials/image.jpg" alt="material">
                                </div>
                                <div class="materials__block-date">22.05.2024</div>
                                <div class="materials__block-title">Как найти подходящего
                                    исполнителя?</div>
                            </div>
                            <div class="materials__block">
                                <div class="materials__block-img">
                                    <img src="../assets/img/home/materials/image-1.jpg" alt="material">
                                </div>
                                <div class="materials__block-date">22.05.2024</div>
                                <div class="materials__block-title">Сколько стоит разработать
                                    сайт в 2024 году?</div>
                            </div>
                            <div class="materials__block">
                                <div class="materials__block-img">
                                    <img src="../assets/img/home/materials/image-2.jpg" alt="material">
                                </div>
                                <div class="materials__block-date">22.05.2024</div>
                                <div class="materials__block-title">Что такое брендинг?</div>
                            </div>
                            <div class="materials__block">
                                <div class="materials__block-img">
                                    <img src="../assets/img/home/materials/image-3.jpg" alt="material">
                                </div>
                                <div class="materials__block-date">22.05.2024</div>
                                <div class="materials__block-title">Топ 10 приложений для
                                    бизнеса</div>
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



<style lang="scss" scoped>
.wrapper {
    overflow-x: hidden;
}

.main {
    display: flex;
    flex-direction: column;
    gap: 240px;
    padding-bottom: 240px;
}

.preview {
    background: url('../assets/img/home/preview.jpg') 50% 50% no-repeat;
    background-size: cover;
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

.preview__informations .text {
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
                width: 100px;
            }
        }
    }
}

.preview__switcher-block {
    box-shadow: 5px 5px 15px 0 rgba(0, 0, 0, 0.2);
    padding: 32px 16px 40px 16px;
    width: 100%;
    background: var(--background-background-primary);
    position: relative;
    cursor: pointer;

    &::before {
        content: "";
        background: var(--icons-active);
        width: 0;
        height: 8px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 1;
        transition: all .3s;
    }

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
    width: 100%;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
    }

    .icon_play {
        position: absolute;
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

.main__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
}

.title_main {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 48px;
    line-height: 110%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--text-primary);
    text-align: center;

    span {
        color: var(--icons-active);
    }
}

.gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 400px 400px;
    row-gap: 40px;
    column-gap: 25px;
}

.gallery__block {
    overflow: hidden;
    border-radius: 12px;
    position: relative;

    img {
        width: 100%;
        height: 100%;
    }
}

.gallery__inf {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0, 0.7) 100%);
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 8px;

    .title {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 28px;
        color: var(--background-background-primary);
    }

    .text {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 20px;
        color: rgba(255, 255, 255, 0.8);
    }
}



.information {}

.information__box {
    display: flex;
    flex-direction: column;
    gap: 200px;
}

.information__block {
    display: flex;
    gap: 180px;
}

.information__box-col {
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    align-items: start;

    &.img {

        img {
            width: 100%;
        }
    }
}

.information__title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 36px;
    line-height: 120%;
    letter-spacing: -0.03em;
    color: var(--text-primary);

    span {
        color: var(--component-colors-blue-active);
    }
}

.information__text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 19px;
    line-height: 168%;
    letter-spacing: -0.01em;
    color: var(--text-primary);
    max-width: 550px;
}

.partners {
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.sliders {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.logo_slider-left,
.logo_slider-right {
    display: flex;
    gap: 12px;
    min-width: 100%;
    height: 120px;
    position: relative;

    .block {
        display: flex;
        gap: 12px;
        position: absolute;
        top: 0;
        right: 50%;
        transform: translateX(50%);
    }

}

// @keyframes scroll-x {
//     from {
//         transform: translateX(0);
//     }

//     to {
//         transform: translateX(calc((-100%) - (12px)));
//     }
// }

// @keyframes scroll-x-revers {
//     from {
//         transform: translateX(calc((-100%) - (12px)));
//     }

//     to {
//         transform: translateX(0);
//     }
// }

.logo_slider-left {}

.slider__logo {
    min-width: 325px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    background: var(--background-background-secondary);
}

.start {}

.start__inner {

    display: flex;
    justify-content: space-between;

    .descrition {
        font-family: var(--font-family);
        font-weight: 400;
        font-size: 20px;
        line-height: 140%;
        letter-spacing: -0.02em;
        color: var(--text-primary);
        opacity: 0.7;
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 670px;
    }

}

.start__col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 40px;
}

.materials {}

.materials__box {
    display: flex;
    justify-content: space-between;
    gap: 25px;
}

.materials__block {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.materials__block-img {
    width: 100%;

    img {
        width: 100%;
    }
}

.materials__block-date {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
    margin-top: 8px;
}

.materials__block-title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 28px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.footer {
    padding: 80px 0 140px 0;
    background: rgba(13, 110, 253, 0.05);
    position: relative;
}

.footer__inner {}

.footer__row {
    display: flex;
    gap: 200px;
}

.footer__logo-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.logo {}

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

.share__links {}

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

@media(max-width:1680px) {
    .gallery {
        grid-template-columns: 1fr 1fr;
    }

    .preview__switcher-block {
        padding: 0;
        background: none;
        box-shadow: none;

        .title,
        .text {
            display: none;
        }
    }

    .preview__switcher {
        margin-top: 25px;
        overflow: visible;
        background: none;
        box-shadow: none;

        label::before {
            content: "";
            position: static;
            display: block;
            border-radius: 8px;
            width: 24px;
            height: 8px;
            background: #d9d9d9;
            transition: all .3s;
        }

        input {
            opacity: 0;
            visibility: hidden;
            width: 0;
            height: 0;
            position: absolute;
            z-index: -10;

            &:checked+label {

                &::before {
                    content: "";
                    background: var(--icons-active);
                    position: static;
                    width: 48px;
                    height: 8px;
                }
            }
        }
    }
}

@media(max-width:1350px) {

    .main {
        gap: 120px;
    }

    .gallery {
        grid-template-rows: auto
    }

    .information__box {
        gap: 120px;
    }

    .information__block {
        gap: 40px;

        &:nth-child(odd) {
            flex-direction: column;
        }

        &:nth-child(even) {
            flex-direction: column-reverse;
        }
    }

    .start__col img {
        display: none;
    }

    .materials__box {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

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

    .logo_slider-left,
    .logo_slider-right {
        height: 84px;

        .block {

            img {
                width: 225px;
                height: 84px;
            }
        }

    }
}

@media(max-width:750px) {
    .title_main {
        font-size: 36px;
    }

    .information__text {
        font-size: 16px;
    }


}

@media(max-width:680px) {
    .preview__informations {
        gap: 32px;

        .text {
            font-size: 16px;
            max-width: 350px;
        }
    }

    .preview__nav {
        flex-direction: column;
    }

    .preview {
        padding-top: 120px;
        padding-bottom: 60px;
    }

    .footer__desc {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .gallery__inf {
        padding: 12px;

        .title {
            font-size: 14px;
        }

        .text {
            font-size: 12px;
        }
    }

    .title_main {
        font-size: 28px;
    }

    .information__title {
        font-size: 26px;
    }

    .materials__block-title {
        font-size: 20px;
    }

    .materials__box {
        grid-template-columns: 1fr;
    }

    .main {
        padding-bottom: 120px;
    }

    .footer__nav-block {
        gap: 60px;
    }
}

@media(max-width:550px) {

    .logo_slider-left,
    .logo_slider-right {
        height: 46px;

        .block {

            img {
                width: 123px;
                height: 46px;
            }
        }

    }

    .sliders {
        gap: 12px;
    }
}
</style>