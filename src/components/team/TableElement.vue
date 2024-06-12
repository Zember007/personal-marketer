<template>
    <div class="tr" :class="{ active: ProfileActive }">
        <div class="td num_td">{{ cat.age }}</div>
        <div class="td user_td">
            <div class="user" @click="ProfileActive = !ProfileActive" :class="{ active: ProfileActive }">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="#EBEDFF" />
                    <path
                        d="M12.4199 12.6055L9.87109 20H8.33008L11.541 11.4688H12.5254L12.4199 12.6055ZM14.5527 20L11.998 12.6055L11.8867 11.4688H12.877L16.0996 20H14.5527ZM14.4297 16.8359V18.002H9.78906V16.8359H14.4297ZM20.2539 16.1445H18.0801L18.0684 15.0723H19.9668C20.2871 15.0723 20.5586 15.0254 20.7812 14.9316C21.0078 14.834 21.1797 14.6953 21.2969 14.5156C21.4141 14.332 21.4727 14.1113 21.4727 13.8535C21.4727 13.5684 21.418 13.3359 21.3086 13.1562C21.1992 12.9766 21.0312 12.8457 20.8047 12.7637C20.582 12.6816 20.2969 12.6406 19.9492 12.6406H18.5254V20H17.0547V11.4688H19.9492C20.418 11.4688 20.8359 11.5137 21.2031 11.6035C21.5742 11.6934 21.8887 11.834 22.1465 12.0254C22.4082 12.2129 22.6055 12.4512 22.7383 12.7402C22.875 13.0293 22.9434 13.373 22.9434 13.7715C22.9434 14.123 22.8594 14.4453 22.6914 14.7383C22.5234 15.0273 22.2754 15.2637 21.9473 15.4473C21.6191 15.6309 21.2109 15.7402 20.7227 15.7754L20.2539 16.1445ZM20.1895 20H17.6172L18.2793 18.834H20.1895C20.5215 18.834 20.7988 18.7793 21.0215 18.6699C21.2441 18.5566 21.4102 18.4023 21.5195 18.207C21.6328 18.0078 21.6895 17.7754 21.6895 17.5098C21.6895 17.2324 21.6406 16.9922 21.543 16.7891C21.4453 16.582 21.291 16.4238 21.0801 16.3145C20.8691 16.2012 20.5938 16.1445 20.2539 16.1445H18.6016L18.6133 15.0723H20.7637L21.0977 15.4766C21.5664 15.4922 21.9512 15.5957 22.252 15.7871C22.5566 15.9785 22.7832 16.2266 22.9316 16.5312C23.0801 16.8359 23.1543 17.1641 23.1543 17.5156C23.1543 18.0586 23.0352 18.5137 22.7969 18.8809C22.5625 19.248 22.2246 19.5273 21.7832 19.7188C21.3418 19.9062 20.8105 20 20.1895 20Z"
                        fill="#0D6EFD" />
                </svg>

                <span>{{ cat.name }}</span>

                <div class="profile-nav">
                    <img src="../../assets/img/icons/arrow-down.svg" alt="">
                </div>
            </div>
        </div>
        <div class="td profession_td" data-label="Профессия">{{ cat.breed }}</div>
        <div class="td hour_td" data-label="Почасовая ставка">{{ cat.gender }}/час</div>
        <div class="td status_td" data-label="Статус">
            <div class="status avalible">{{ cat.gender }}</div>
        </div>
        <div class="td">
            <div class="add_to_project">
                <img src="../../assets/img/icons/people-plus.svg" alt="people">
                <span>Добавить в проект</span>

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
            </div>
        </div>
        <button class="td view_td">
            <div class="view">
                <img src="../../assets/img/icons/dots.svg" alt="dots">
            </div>
        </button>
    </div>
    <div class="user_profile" :class="{ active: ProfileActive }">
        <ProfileBox :preview="true" />
    </div>
</template>

<script>
import ProfileBox from '../profile/ProfileBox.vue';
export default {
    components: {
        ProfileBox
    },
    props: {
        cat: Object
    },

    data() {
        return {
            ProfileActive: false
        }
    }
}
</script>

<style lang="scss" scoped>
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

.add_to_project {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 12px 16px;
    background: var(--background-background-secondary);
    display: inline-flex;
    align-items: center;
    gap: 8px;
    position: relative;
    cursor: pointer;

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


.user {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    justify-content: space-between;
    padding: 8px 12px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    border-radius: 800px;
    background: var(--background-background-secondary);
    width: 200px;
    cursor: pointer;

    span {
        flex-grow: 1;
    }

    .profile-nav {
        display: flex;
        align-items: center;
        transform: rotate(-90deg);
        transition: all .3s;
    }

    &.active {
        .profile-nav {
            transform: rotate(0deg);
        }
    }

}

.status {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 167%;
    letter-spacing: -0.02em;
    border-radius: 4px;
    padding: 5px 20px;
    width: 102px;
    text-align: center;

    &.avalible {
        background: #d9f9e6;
        color: #2f9461;
    }

    &.busy {
        background: #fbf2cb;
        color: #c8811a;
    }
}

.tr {
    padding: 16px 25px;
    display: grid;
    grid-template-columns: 1fr 5fr 5fr 4fr 4fr 4fr 1fr;
    align-items: center;
}

.tr {

    &:not(:last-child) {
        border-bottom: 1px solid var(--colors-secondary-border-color);
    }
}

.user_profile {
    max-height: 0;
    overflow: hidden;
    transition: max-height .5s;

    &.active {
        max-height: 100000px;
    }
}


@media(max-width: 1520px) {
    .tr {
        grid-template-columns: 0.5fr 4fr 3fr 3fr 3fr 0fr 0.5fr;
        padding: 16px 10px;
        gap: 10px;
    }

    .user {
        width: 150px;
    }



    .add_to_project {
        display: none;
    }
}

@media(max-width: 700px) {
    
    .tr {
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "user view"
            "Profession Profession"
            "hour hour"
            "status status";

        

        &:not(:last-child) {
            border: 0;
        }
    }

    .td {
        padding: 10px 12px;
    }

    .num_td {
        display: none;
    }

    .user_td {
        grid-area: user;
    }

    .status_td {
        padding: 6px 12px;
        grid-area: status;
    }

    .profession_td {
        grid-area: Profession;
    }

    .hour_td {
        grid-area: hour;
    }

    .view_td {
        grid-area: view;
    }

    .view {
        display: flex;
        justify-content: end;
    }

    .status_td,
    .profession_td,
    .hour_td {

        display: grid;
        align-items: center;
        justify-items: center;
        grid-template-columns: 1fr 1fr;

        &::before {
            justify-self: start;
            content: attr(data-label);
            font-family: var(--font-family);
            font-weight: 400;
            font-size: 14px;
            line-height: 143%;
            letter-spacing: -0.02em;
            color: var(--text-tertiary);
        }
    }


}
</style>