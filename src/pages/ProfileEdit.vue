<template>
    <div class="profile__cart">
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

            </div>
        </section>
        <section>
            <div class="title">Описание</div>
            <div class="textarea_box">
                <textarea name="description"></textarea>
                <div class="count_char">
                    0/1000
                </div>
            </div>
            <div class="form_btn">
                <SecondaryButton>Отменить</SecondaryButton>
                <PrimaryButton>Сохранить</PrimaryButton>
            </div>
        </section>
    </div>
</template>

<script setup>
import ProfileGallery from '../components/profile/ProfileGallery.vue';
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
    width: 930px;
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
</style>