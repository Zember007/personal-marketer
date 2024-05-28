<template>
    <div class="profile__description">
        <div class="profile__description-title">Описание</div>
        <div class="profile__description-text">Помогаю моим клиентам: стартапам и малому бизнесу качественно выделяться
            на фоне конкурентов
            при помощи комплексного маркетинга. Руководитель интернет-проектов и маркетолог.
            В рекламе и маркетинге с 2010 года. Я работал Директором по маркетингу и руководителем проектов российских,
            так и иностранных брендов:
            E-commerce Медицина, Недвижимость, Строительство, Fashion, Финансы,
            Торгово-производственные компании и другие.
        </div>
        <a href="#" class="profile__description-more">Подробнее...</a>
    </div>
</template>

<script>
export default {
    name: "ProfileDescription"
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
}

.profile__description-more {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--component-colors-blue-active);
    background: none;
}
</style>