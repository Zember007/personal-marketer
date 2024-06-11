<template>
    <div class="select-box">
        <select class="select">
            <option disabled hidden selected>{{name}}</option>
            <option v-for="item in items"  :selected="item.active" :value="item.name">{{ item.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props:{
        name: String,
        items: Array
    }
}
</script>

<style lang="scss" scoped>
.select-box {    
    position: relative;
    background: var(--background-background-primary);
    height: 100%;
    
    &::before {
        content: "";
        background: url('../../assets/img/icons/arrow-down.svg') no-repeat;
        width: 14px;
        height: 14px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 16px;
        pointer-events: none;
    }
}

.select {
    cursor: pointer;
    width: 100%;
    height: 100%; 
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 12px 16px;
    padding-right: 40px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    background: transparent;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;

}

@media(max-width: 550px) {
    .select {
        font-size: 14px;
        padding: 12px 12px;
        padding-right: 22px;
    }

    .select-box::before {
        right: 7px;
    }
}
</style>