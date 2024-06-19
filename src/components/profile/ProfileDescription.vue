<template>
    <div class="profile__description">
        <div class="profile__description-title">Описание</div>
        <div class="profile__description-text">
            {{ text }}
        </div>
        <div class="profile__description-text profile__description-text-more" :class="{active:view_all}">
            {{ text }}
        </div>
        <button v-if="!view_all" @click.prevent="view_all = !view_all"  class="profile__description-more">Подробнее...</button>
    </div>
</template>

<script>
export default {
    name: "ProfileDescription",
    data() {
        return {
            view_all: false
        }
    },
    props: {
        text:String
    }
}
</script>

<style lang="scss" scoped>
.profile__description {
    max-width: 860px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.profile__description-title {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);    
}

.profile__description-text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 160%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    white-space: pre-wrap;

    &.profile__description-text-more {
        overflow: hidden;
        max-height: 0px;  
        transition: all 1.5s;

        &.active {
            max-height: 500px;   
        }
    }
}

.profile__description-more {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--component-colors-blue-active);
    background: none;
    align-self: start;
}

@media(max-width:990px) {
    .profile__description-text {
        font-size: 14px;
    }
}
</style>