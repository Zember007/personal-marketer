<template>
    <AuthLayout>
        <div class="auth__inf">
            <h1>
                Войдите в свой аккаунт<br>
                или создайте новый
            </h1>
            <h3>Для начала, выберите, чем вы занимаетесь: маркетолог или фрилансер.</h3>
        </div>
        <div class="auth__nav">
            <RouterLink to="/login" href="#" class="auth__button">
                <div class="auth__button-img">
                    <img src="../../assets/img/auth/marketer.jpg" alt="auth__button">
                </div>
                <div class="auth__button-title">Для маркетологов</div>
                <div class="auth__button-description">
                    Получите доступ к инструментам аналитики
                    для отслеживания результатов рекламных
                    кампаний и анализа их эффективности.
                </div>
            </RouterLink>
            <RouterLink to="/login" href="#" class="auth__button">
                <div class="auth__button-img">
                    <img src="../../assets/img/auth/frilancer.jpg" alt="auth__button">
                </div>
                <div class="auth__button-title">Для фрилансеров</div>
                <div class="auth__button-description">
                    Взаимодействуйте с клиентами,
                    отправляйте работы и получайте обратную
                    связь, все это через ваш аккаунт.
                </div>
            </RouterLink>
        </div>
    </AuthLayout>
</template>

<script setup>
import AuthLayout from '../../layouts/AuthLayout.vue'
</script>

<style lang="scss" scoped>
.auth__inf {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.auth__nav {
    display: flex;
    gap: 32px;
}

.auth__button {
    border: 3px solid var(--component-colors-link-active-background);
    border-radius: 12px;
    padding: 24px;
    max-width: 380px;
    background: var(--background-background-primary);
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.auth__button-img {
    border-radius: 12px;
    width: 332px;
    height: 200px;
    overflow: hidden;
}

.auth__button-title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 28px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: #27272f;
}

.auth__button-description {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
}
</style>