<template>
    <div class="profile__cart" :class="{ preview: preview }">
        <div class="profile__cart-main">
            <div class="profile__gallery">
                <ProfileGallery />
                <div class="edit__box">

                    <div class="profile__main-inf">
                        <div class="profile__fullname">Алексей Цыплаков</div>
                        <ProfileRating :data="[1, 2, 3]" />
                        <div class="profile__specialization">Маркетолог</div>
                    </div>

                    <RouterLink v-if="!preview" to="/profile/edit" class="profile__edit">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.83325 1.3335H6.49992C3.16659 1.3335 1.83325 2.66683 1.83325 6.00016V10.0002C1.83325 13.3335 3.16659 14.6668 6.49992 14.6668H10.4999C13.8333 14.6668 15.1666 13.3335 15.1666 10.0002V8.66683"
                                stroke="#242626" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M11.1933 2.0135L5.93992 7.26684C5.73992 7.46684 5.53992 7.86017 5.49992 8.14684L5.21325 10.1535C5.10659 10.8802 5.61992 11.3868 6.34659 11.2868L8.35325 11.0002C8.63325 10.9602 9.02659 10.7602 9.23325 10.5602L14.4866 5.30684C15.3933 4.40017 15.8199 3.34684 14.4866 2.0135C13.1533 0.680168 12.0999 1.10684 11.1933 2.0135Z"
                                stroke="#242626" stroke-miterlimit="10" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M10.4399 2.7666C10.8866 4.35993 12.1333 5.6066 13.7333 6.05993" stroke="#242626"
                                stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <span>Редактировать профиль</span>
                    </RouterLink>

                    <div class="preview_user" v-if="preview">
                        <div class="description_user price">
                            <span>Стоимость работы</span>
                            <strong>5500₽/<span class="hour-text">час</span><span
                                    class="hour-text mob">ч</span></strong>
                        </div>

                        <div class="description_user">
                            <span>Экзамен пройден</span>
                        </div>
                        <PrimaryButton style="padding: 14px;">Добавить в проект</PrimaryButton>
                    </div>


                </div>


            </div>
            <div class="profile__main-box">
                <div class="profile__main-inf">
                    <div class="profile__fullname">Алексей Цыплаков</div>
                    <ProfileRating :data="[1, 2, 3]" />
                    <div class="profile__specialization">Маркетолог</div>
                </div>
                <ProfileDescription />
            </div>
        </div>

        <ProfileData :preview="preview" title="Портфолио" @show-Modal="showModal"></ProfileData>

    </div>
    <AddProject v-show="isModalVisible" @close="closeModal" />
</template>

<script>
import ProfileGallery from './ProfileGallery.vue';
import ProfileDescription from './ProfileDescription.vue';
import ProfileData from './ProfileData.vue';
import ProfileRating from './ProfileRating.vue';
import AddProject from '../modals/AddProject.vue';

export default {
    components: {
        ProfileGallery,
        ProfileDescription,
        ProfileData,
        ProfileRating,
        AddProject
    },
    data() {
        return {
            isModalVisible: false,
        };
    },
    props: {
        preview: Boolean
    },

    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.description_user {
    padding: 4px 12px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    gap: 10px;
    line-height: 100%;
    letter-spacing: -0.02em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-tertiary);
    white-space: nowrap;

    strong {
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: -0.02em;
        text-align: center;
        color: var(--text-primary);
    }
}

.profile__gallery {
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-width: 240px;
}

.profile__edit {
    white-space: nowrap;
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

.edit__box .profile__main-inf {
    display: none;
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

.preview_user {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.hour-text {

    &.mob {
        display: none;
    }
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

    .profile__gallery {
        min-width: 180px;
    }

    .hour-text {
        display: none;

        &.mob {
            display: inline;
        }
    }

    .profile__cart.preview {
        padding: 0 10px;  
        padding-bottom: 16px;      
        border-radius: 0;
    }
}

@media(max-width:550px) {

    .description_user {
        padding: 0;
    }

    .profile__cart-main {
        flex-direction: column;
    }

    .profile__gallery {
        flex-direction: row;
        justify-content: space-between;
    }

    .profile__cart {
        padding: 24px 12px;
    }

    .profile__main-inf {
        display: none;
    }

    .edit__box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .profile__main-inf {
            display: flex;
        }

        .profile__fullname {
            font-size: 19px;
        }

        .profile__specialization {
            font-size: 16px;
        }
    }

    .preview_user {
        margin-top: 5px;
        gap:0;
        flex-grow: 1;
        justify-content: space-between;
    }

    .description_user.price {
        display: none;
    }

    .profile__main-inf {
        gap: 5px;
    }
}
</style>