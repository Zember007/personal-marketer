<template>
    <AuthLayout>
        <div class="login">
            <div class="login__inf">
                <h2>Мы отправили код</h2>
                <div class="auth_description">6-ти значный код отправлен на номер +7 78* *** *32,
                    введите его чтобы подтвердить, что это вы.</div>
            </div>
            <form action="#">
                <VerificationCode></VerificationCode>
                <RouterLink to="/profile">
                    <PrimaryButton style="width: 100%;">Войти</PrimaryButton>
                </RouterLink>
                <span>Отправить код повторно (...с)</span>
            </form>
        </div>
    </AuthLayout>
</template>

<script>
import AuthLayout from '../../layouts/AuthLayout.vue'
import VerificationCode from '../../components/VerificationCode.vue'
export default {
    components: {
        AuthLayout,
        VerificationCode
    }
}
</script>

<style lang="scss" scoped>
.login {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 16px;
    padding: 32px 60px;
    background: var(--background-background-primary);
    max-width: 550px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.login__inf {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 12px;
}

.auth_description {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--text-secondary);
}

.auth__text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--text-primary);

    a {
        font-weight: 500;
        text-decoration: underline;
        text-decoration-skip-ink: none;
    }
}

form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.02em;
    color: var(--colors-secondary-seconadry-color);
}

@media(max-width:550px) {
    .login {
        padding: 32px 20px;
    }

    .auth_description {
        font-size: 16px;
        max-width: auto;
    }

    .auth__text {
        font-size: 12px;
    }
}
</style>