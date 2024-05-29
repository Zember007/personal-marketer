<template>

<ProfileLayout>
    <div class="profile__cart">
        <div class="profile__cart-main">
            <div class="profile__gallery">
                <ProfileGallery />
                <RouterLink to="/profile/edit" class="profile__edit">
                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.83325 1.3335H6.49992C3.16659 1.3335 1.83325 2.66683 1.83325 6.00016V10.0002C1.83325 13.3335 3.16659 14.6668 6.49992 14.6668H10.4999C13.8333 14.6668 15.1666 13.3335 15.1666 10.0002V8.66683"
                            stroke="#242626" stroke-linecap="round" stroke-linejoin="round" />
                        <path
                            d="M11.1933 2.0135L5.93992 7.26684C5.73992 7.46684 5.53992 7.86017 5.49992 8.14684L5.21325 10.1535C5.10659 10.8802 5.61992 11.3868 6.34659 11.2868L8.35325 11.0002C8.63325 10.9602 9.02659 10.7602 9.23325 10.5602L14.4866 5.30684C15.3933 4.40017 15.8199 3.34684 14.4866 2.0135C13.1533 0.680168 12.0999 1.10684 11.1933 2.0135Z"
                            stroke="#242626" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.4399 2.7666C10.8866 4.35993 12.1333 5.6066 13.7333 6.05993" stroke="#242626"
                            stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <span>Редактировать профиль</span>
                </RouterLink>
            </div>
            <div class="profile__main-box">
                <div class="profile__main-inf">
                    <div class="profile__fullname">Алексей Цыплаков</div>
                    <div class="profile__specialization">Маркетолог</div>
                </div>
                <ProfileDescription />
            </div>
        </div>

        <ProfileData></ProfileData>

    </div>
</ProfileLayout>
</template>

<script setup>
import ProfileGallery from '../../components/profile/ProfileGallery.vue';
import ProfileDescription from '../../components/profile/ProfileDescription.vue';
import ProfileData from '../../components/profile/ProfileData.vue'; 
import ProfileLayout from '../../layouts/ProfileLayout.vue'
 
</script>

<style lang="scss" scoped>
.profile__gallery {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.profile__edit {
    background: var(--background-background-primary);
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 12px 16px;
    width: 100%;
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.profile__cart {
    border-radius: 12px;
    background: var(--background-background-primary);
    padding: 32px 32px 70px 32px;
    display: flex;
    flex-direction: column;
    gap: 120px;
}

.profile__cart-main {
    display: flex;
    gap: 24px;
}

.profile__main-box {
    display: flex;
    flex-direction: column;
    gap: 32px;
}

.profile__main-inf {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.profile__fullname {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 32px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.profile__specialization {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
}

@media(max-width:990px) {
    .profile__edit {
        padding: 12px 10px;
    }

    .profile__fullname {
        font-size: 24px;
    }

    .profile__specialization {
        font-size: 16px;
    }
}
</style>