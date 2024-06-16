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
    display: flex;
    align-items: stretch;
    min-height: 100%;
    
    &::before {
        content: "";
        background: url('../../assets/img/icons/arrow-down.svg') no-repeat;
        width: 14px;
        height: 14px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 12px;
        pointer-events: none;
    }
}

.select {
    cursor: pointer;
    width: 100%;
    min-height: 100%; 
    background: var(--background-background-primary);
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 12px 10px;
    padding-right: 26px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -2%;
    color: var(--text-primary);
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