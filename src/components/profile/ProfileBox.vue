<template>
    <div class="profile__cart" :class="{ preview: preview }">
        <div class="profile__cart-main">
            <div class="profile__gallery">
                <ProfileGallery :image="user.image"/>
                <div class="edit__box">                    
                    <div class="profile__main-inf">
                        <div class="profile__fullname">{{ user.firstName }} {{ user.lastName }}</div> 
                        <ProfileRating :data="[1, 2, 3]" />
                        <div class="profile__specialization">{{ GetSpetilization() }}</div>
                    </div>

                    <a href="#" v-if="!preview" @click.prevent="EditShow" class="profile__edit">
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
                    </a>

                    <div class="preview_user" v-if="preview">
                        <div class="description_user price">
                            <span>Стоимость работы</span>
                            <strong>5500₽/<span class="hour-text">час</span><span
                                    class="hour-text mob">ч</span></strong>
                        </div>

                        <div class="description_user">
                            <span>Экзамен пройден</span>
                        </div>
                        <PrimaryButton class="add_to_project" style="padding: 14px 0;">Добавить в проект
                            <div class="add_to_project-list">
                                <label class="check_add">
                                    <input type="checkbox" name="">
                                    <span>Проект - 1</span>
                                </label>
                                <label class="check_add">
                                    <input type="checkbox" name="">
                                    <span>Проект - 1</span>
                                </label>
                                <label class="check_add">
                                    <input type="checkbox" name="">
                                    <span>Проект - 1</span>
                                </label>
                            </div>
                        </PrimaryButton>
                    </div>


                </div>


            </div>
            <div class="profile__main-box">
                <div class="profile__main-inf">
                    <div class="profile__fullname">{{ user.firstName }} {{ user.lastName }}</div>
                    <ProfileRating :data="[1, 2, 3]" />
                    <div class="profile__specialization">{{ GetSpetilization() }}</div>
                </div>
                <ProfileDescription :text="user.description" />
            </div>
        </div>

        <ProfileData :id="id" :type="user.profileType" :preview="preview" title="Портфолио" @show-Modal="showModal"></ProfileData>
        
    </div>

    <AddProject v-show="isModalVisible" @close="closeModal" />
</template>

<script>
import ProfileGallery from './ProfileGallery.vue';
import ProfileDescription from './ProfileDescription.vue';
import ProfileData from './ProfileData.vue';
import ProfileRating from './ProfileRating.vue';
import AddProject from '../modals/AddProject.vue';
import axios from 'axios';

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
            preview: true
        };
    },

    props: {
        user: Object,
        id: Number
    },

    methods: {
        showModal() {
            this.isModalVisible = true;
            document.body.style = "overflow:hidden"
        },
        closeModal() {
            this.isModalVisible = false;
            document.body.style = ""
        },
        EditShow() {
            this.$emit('edit_show')
        },
        GetSpetilization() {
            return this.user.profileType
        },
        async check_profile(id) {
            const router = this.$router;
            const revers = this;
            const token = localStorage.getItem('accessToken')
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };

            await axios.get('/api/auth/user',
                config
            )
                .then(function (response) {                    
                    if(response.data.id == id) {
                        revers.preview = false
                    }
                })
        }
    },
    mounted() {
        this.check_profile(this.$route.params.id)
        console.log(localStorage.getItem('id'));
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
    white-space: nowrap;
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

.add_to_project {

    position: relative;

    &:hover {
        .add_to_project-list {
            opacity: 1;
            visibility: visible;
        }
    }
}

.add_to_project-list {
    position: absolute;
    bottom: -2px;
    right: -2px;
    left: -2px;
    transform: translateY(100%);
    opacity: 0;
    visibility: hidden;
    transition: all .3s;
    z-index: 1;
    border-radius: 8px;
    background: var(--background-background-primary);
    box-shadow: 0 6px 12px 0 rgba(89, 89, 89, 0.1), 0 22px 22px 0 rgba(89, 89, 89, 0.09), 0 50px 30px 0 rgba(89, 89, 89, 0.05), 0 88px 35px 0 rgba(89, 89, 89, 0.01), 0 138px 38px 0 rgba(89, 89, 89, 0);

    label {
        padding: 12px 16px;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        line-height: 165%;
        letter-spacing: -0.02em;
        color: #27272f;

        &:hover {
            background: var(--background-background-secondary);
            color: var(--component-colors-blue-active);
        }
    }
}

.check_add {
    display: block;
    margin: 0 0 10px 0;
    cursor: pointer;
    user-select: none;
    position: relative;
}

.check_add input[type=checkbox] {
    position: absolute;
    z-index: -1;
    opacity: 0;
    display: block;
    width: 0;
    height: 0;
}

.check_add span {
    display: inline-block;
    position: relative;
    padding: 0 0 0 35px;
    line-height: 22px;
}

.check_add span:before {
    content: "";
    display: inline-block;
    width: 22px;
    height: 22px;
    position: absolute;
    left: 0;
    top: 0;
    transition: background-color 0.3s ease;
    border: 1px solid var(--colors-secondary-border-color);
    background: var(--background-background-primary);
    border-radius: 4px;
}

/* Checked */
.check_add input[type=checkbox]:checked+span:before {
    background: url(../../assets/img/icons/check.svg) no-repeat 50% 50% var(--component-colors-blue-active);
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
        min-width: 200px;
    }

    .hour-text {
        display: none;

        &.mob {
            display: inline;
        }
    }

    .profile__cart.preview {
        padding-right: 10px;
        padding-left: 10px;
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
        gap: 0;
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