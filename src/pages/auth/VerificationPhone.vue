<template>
    <AuthLayout>
        <div class="login">
            <div class="error" :class="{ active: error }">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10 2.16669C5.40835 2.16669 1.66669 5.90835 1.66669 10.5C1.66669 15.0917 5.40835 18.8334 10 18.8334C14.5917 18.8334 18.3334 15.0917 18.3334 10.5C18.3334 5.90835 14.5917 2.16669 10 2.16669ZM9.37502 7.16669C9.37502 6.82502 9.65835 6.54169 10 6.54169C10.3417 6.54169 10.625 6.82502 10.625 7.16669V11.3334C10.625 11.675 10.3417 11.9584 10 11.9584C9.65835 11.9584 9.37502 11.675 9.37502 11.3334V7.16669ZM10.7667 14.15C10.725 14.2584 10.6667 14.3417 10.5917 14.425C10.5084 14.5 10.4167 14.5584 10.3167 14.6C10.2167 14.6417 10.1084 14.6667 10 14.6667C9.89169 14.6667 9.78335 14.6417 9.68335 14.6C9.58335 14.5584 9.49169 14.5 9.40835 14.425C9.33335 14.3417 9.27502 14.2584 9.23335 14.15C9.19169 14.05 9.16669 13.9417 9.16669 13.8334C9.16669 13.725 9.19169 13.6167 9.23335 13.5167C9.27502 13.4167 9.33335 13.325 9.40835 13.2417C9.49169 13.1667 9.58335 13.1084 9.68335 13.0667C9.88335 12.9834 10.1167 12.9834 10.3167 13.0667C10.4167 13.1084 10.5084 13.1667 10.5917 13.2417C10.6667 13.325 10.725 13.4167 10.7667 13.5167C10.8084 13.6167 10.8334 13.725 10.8334 13.8334C10.8334 13.9417 10.8084 14.05 10.7667 14.15Z"
                        fill="#FDC007" />
                </svg>
                <span>Вы ввели неверный код. Проверьте его и попробуйте снова</span>
            </div>
            <div class="login__inf">
                <h2>Мы отправили код</h2>
                <div class="auth_description">4-x значный код отправлен на номер {{ getPhone() }},
                    введите его чтобы подтвердить, что это вы.</div>
            </div>
            <form action="#">
                <VerificationCode :warn="error" v-model="code"></VerificationCode>

                <PrimaryButton @click.prevent="send_code" style="width: 100%;">Войти</PrimaryButton>
                <span><a href="#">Отправить код повторно (...с)</a></span>
            </form>
        </div>
    </AuthLayout>
</template>

<script>
import AuthLayout from '../../layouts/AuthLayout.vue'
import VerificationCode from '../../components/VerificationCode.vue'
import axios from 'axios';
export default {
    components: {
        AuthLayout,
        VerificationCode
    },
    data() {
        return {
            code: '',
            error: false
        }
    },
    methods: {
        getPhone() {
            var phone = localStorage.getItem('phone')
            return phone.substr(0, 4) + '** *** *' + phone.substr(12, 4)
        },
        async send_code() {
            
            const revers = this;

            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const pararms = {
                code: this.code
            }

            await axios.post('/api/mts-mobile-id/verify-code',
                pararms,
                config

            )
                .then(function (response) {
                    if (response.data.status == "Completed") {
                        revers.getUser(response.data.accessToken)
                    } else {
                        revers.error = true
                    }

                })

                .catch(() => {
                    revers.error = true
                })
        },
        async check() {
            
            const revers = this;

            const token = localStorage.getItem('token')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            await axios.get('/api/mts-mobile-id/pull',

                config

            )
                .then(function (response) {
                    if (response.data.status == "Completed") {
                        // router.push('/profile')
                        localStorage.setItem('accessToken', response.data.accessToken)
                        revers.getUser(response.data.accessToken)
                    } else if (response.data != 'Error') {
                        setTimeout(() => {
                            revers.check()
                        }, 2000)
                    }

                })
        },

        async getUser(token) {
            const router = this.$router;
            const config = {
                
                headers: { Authorization: `Bearer ${token}` }
            };

            await axios.get('/api/auth/user',
                config
            )
            .then(function (response) {
                localStorage.setItem('profileData', JSON.stringify(response.data))
                router.push(`/profile/${response.data.id}`)
            })
        }
    },
    mounted() {
        this.check()
    }
}
</script>

<style lang="scss" scoped>
.error {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 16px;
    padding: 16px 20px;
    background: var(--background-background-primary);
    width: 100%;
    position: absolute;
    top: -12px;
    right: 0;
    left: 0;
    transform: translateY(-100%);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    opacity: 0;
    transition: all .3s;

    &.active {
        opacity: 1;
    }
}

.login {
    position: relative;
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