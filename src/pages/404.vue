<template>
    <AuthLayout>
        <div class="not_found-box">
            <div class="inf">
                <div class="title">
                    Мы не нашли такой страницы :(
                </div>
                <div class="text">
                    Похоже, что страница, которую вы ищете, больше не существует. <br>
                    Возможно, она была перемещена, удалена
                    или вы допустили опечатку в URL.
                </div>
                <RouterLink to="/"><PrimaryButton>Вернуться на главную</PrimaryButton></RouterLink>
            </div>
            <img class="" src="../assets/img/404.svg" alt="">
        </div>
    </AuthLayout>
</template>

<script setup>
import AuthLayout from '../layouts/AuthLayout.vue';
</script>

<style lang="scss" scoped>
.not_found-box {
    max-width: 900px;
    position: relative;

    img {
        max-width: 100%;
    }
}

.title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 60px;
    line-height: 100%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--grey-primary-grey-900);
}

.text {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    line-height: 120%;
    letter-spacing: -0.02em;
    text-align: center;
    color: var(--text-secondary);
}

.inf {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24PX;
    padding: 0 10px;
}

@media(max-width:990px) {
    .inf {
        position: static;
        transform: translate(0,0); 
    }

    .title  {font-size: 40px;}
    .text {font-size: 20px;}

    .not_found-box {
        display: flex;
        flex-direction: column;        
        padding-top: 140px;
    }
}

@media(max-width:600px) {

    .inf {
        transform: translateY(200px); 
    }

    .title  {font-size: 24px;}
    .text {font-size: 16px;}

    .not_found-box {
        display: flex;
        flex-direction: column;        
        padding-top: 0px;
        margin-top: -100px;
    }
}
</style>