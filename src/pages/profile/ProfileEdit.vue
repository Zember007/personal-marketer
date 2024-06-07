<template>
    <ProfileLayout>
        <ProfileTop>
            <RouterLink to="/profile" class="route_back">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5417 16.5999L7.10834 11.1666C6.46667 10.5249 6.46667 9.4749 7.10834 8.83324L12.5417 3.3999"
                        stroke="#242626" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>

                <span>Мой профиль</span>
            </RouterLink>
        </ProfileTop>
        <div class="profile__cart">

            <section>
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
                        <ProfileGallery />
                        <div class="img_profile-nav">
                            <PrimaryButton>Изменить</PrimaryButton>
                            <SecondaryButton>Удалить</SecondaryButton>
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
                    <TextInput label="Имя и фамилия" />
                    <PhoneInput label="Номер телефона" />
                    <TextInput label="ИНН" />
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
                        <RadioInput :radios="['750₽','1000₽','1500₽']"></RadioInput> 
                    </div>
                </div>
            </section>
            <section>
                <div class="title">Описание</div>
                <div class="textarea_box">
                    <textarea @input="textarea_action" name="description" maxlength="1000"></textarea>
                    <div class="count_char">
                        {{ textarea_length }}/1000
                    </div>
                </div>
                <div class="form_btn">
                    <SecondaryButton>Отменить</SecondaryButton>
                    <PrimaryButton>Сохранить</PrimaryButton>
                </div>
            </section>
        </div>
    </ProfileLayout>
</template>

<script>
import ProfileGallery from '../../components/profile/ProfileGallery.vue'
import ProfileLayout from '../../layouts/ProfileLayout.vue'
import ProfileTop from '../../components/profile/ProfileTop.vue';
import RadioInput from '../../components/ui/RadioInput.vue';

export default {
    components: {
        ProfileGallery,
        ProfileLayout,
        ProfileTop
    },

    data() {
        return {
            textarea_length: 0
        }
    },

    methods: {
        textarea_action(event) {
            this.textarea_length = event.target.value.length
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

.route_back {
    display: flex;
    align-items: center;
    gap: 8px;
}

@media(max-width:990px) {
    section.section_information {
        flex-direction: column;
    }
}

@media(max-width:550px) {
    .profile__cart {
        padding: 24px 12px;
    }

    .description {
        font-size: 14px;
    }
}

@media(max-width:400px) {
    .form_btn {
        flex-direction: column;
    }
}
</style>