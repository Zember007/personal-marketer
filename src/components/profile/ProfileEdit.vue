<template>
    <form @submit.prevent="submit_edit" class="profile__cart">

        <section>
            {{ user }}
            <div class="text_box">
                <div class="title_main">Редактирование профиля</div>
                <div class="description">Управляйте настройками своего профиля</div>
            </div>
        </section>

        <section>

            <div class="text_box">
                <div class="title">Изображение профиля</div>
                <div class="description">Уставновите фото в изображения PNG или JPEG</div>
            </div>

            <div class="img_profile-box">
                <div class="img_profile">
                    <div class="profile__gallery">
                        <ProfileGallery />
                    </div>
                    <div class="img_profile-nav">
                        <PrimaryButton @click.prevent>Изменить</PrimaryButton>
                        <SecondaryButton @click.prevent>Удалить</SecondaryButton>
                    </div>
                </div>
                <div class="description">Рекомендуемый размер изображения 256x256px</div>
            </div>

        </section>
        <section class="section_information">
            <div class="column">
                <div class="text_box">
                    <div class="title">Основная информация</div>
                    <div class="description">Расскажите нам о себе</div>
                </div>
                <TextInput v-model="FullName" label="Имя и фамилия" />
                <PhoneInput :disabled="true" v-model="user.phoneNumber" label="Номер телефона" />
                <INNInput label="ИНН" />
            </div>
            <div class="column">
                <div class="text_box">
                    <div class="title">Профессиональная информация</div>
                    <div class="description">Укажите свою профессию и почасовую ставку</div>
                </div>
                <div class="column_select">
                    <span class="small_text">Профессия</span>
                    <div class="row_select">
                        <SelectInput name="Уровень" :items="['A', 'B', 'C']" />
                        <SelectInput name="Профессия" :items="['Инженер', 'Инженер', 'Инженер']" />
                    </div>
                </div>
                <div class="column_select">
                    <span class="small_text">Почасовая ставка</span>
                    <RadioInput :radios="['750₽', '1000₽', '1500₽']"></RadioInput>
                </div>
            </div>
        </section>
        <section>
            <div class="title">Описание</div>
            <div class="textarea_box">
                <textarea :value="description" @input="textarea_action" name="description" maxlength="1000"></textarea>
                <div class="count_char">
                    {{ textarea_length }}/1000
                </div>
            </div>
            <div class="form_btn">
                <SecondaryButton @click.prevent>Отменить</SecondaryButton>
                <PrimaryButton>Сохранить</PrimaryButton>
            </div>
        </section>
    </form>
</template>

<script>
import ProfileGallery from './ProfileGallery.vue'
import RadioInput from '../ui/RadioInput.vue';
import axios from 'axios';
import { ref } from 'vue';

export default {
    components: {
        ProfileGallery
    },

    props: {
        user: Object
    },

    data() {
        return {
            textarea_length: 0,
            description: this.user.description,
            occupation: '',
            occupationLevel: '',
            hourlyRate: 0
        }
    },

    methods: {
        textarea_action(event) {
            this.textarea_length = event.target.value.length
            this.description = event.target.value
        },

        async submit_edit() {

            const revers = this;

            const token = localStorage.getItem('accessToken')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            const pararms = {
                firstName: "John",
                lastName: "Doe",
                description: this.description,
            }

            await axios.patch('/api/profile/customer',
                pararms,
                config

            )
                .then(function (response) {

                    console.log(response.data);

                })

                .catch((er) => {
                    console.log(er);
                })
        }
    },

    setup(props) {
        
        const FullName = ref('')
        FullName.value = props.user.firstName + ' ' + props.user.lastName

        return {
            FullName
        }
    }
}
</script>

<style lang="scss" scoped>
textarea {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 16px;
    resize: none;
    width: 100%;
    height: 100%;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.textarea_box {
    position: relative;
    max-width: 930px;
    height: 469px;
}

.count_char {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
    position: absolute;
    bottom: 16px;
    right: 16px;
}

.profile__cart {
    border-radius: 12px;
    background: var(--background-background-primary);
    padding: 32px;
    display: flex;
    flex-direction: column;
}

.title_main {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

section {

    padding: 40px 0;
    display: flex;
    flex-direction: column;
    gap: 24px;

    &:not(:last-child) {
        border-bottom: 1px solid var(--colors-secondary-border-color);
    }

    &:first-child {
        padding: 0 0 40px 0;
    }

    &:last-child {
        padding: 40px 0 0 0;
    }

    &.section_information {
        flex-direction: row;
        gap: 28px;
    }
}

.column {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.small_text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.text_box {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.description {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
}

.img_profile-box {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.img_profile {
    display: flex;
    align-items: center;
    gap: 20px;
}

.img_profile-nav {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.column_select {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.row_select {
    display: flex;
    gap: 8px;
}

.form_btn {
    display: flex;
    gap: 8px;
}

.profile__gallery {
    width: 240px;
}

@media(max-width:990px) {
    section.section_information {
        flex-direction: column;
    }

    .profile__gallery {
        width: 200px;
    }
}

@media(max-width:550px) {
    .profile__cart {
        padding: 24px 12px;
    }

    .description {
        font-size: 14px;
    }

    .img_profile-nav {
        flex-grow: 1;
        max-width: 200px;
    }

    .profile__gallery {
        width: 140px;
    }
}

@media(max-width:400px) {
    .form_btn {
        flex-direction: column;
    }
}
</style>