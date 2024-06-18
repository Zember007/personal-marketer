<template>
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
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>