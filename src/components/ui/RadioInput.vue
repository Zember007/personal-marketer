<template>

    <div class="form_radio-box">
        <div class="form_radio" v-for="(radio, index) in radios" :key="radio">
            <input :id="'radio-' + index" type="radio" name="radio" :value="radio">
            <label :for="'radio-' + index">{{ radio }}</label>
        </div>

        <div class="form_radio input">
            <input id="radio-index" type="radio" name="radio" value="input">
            <label for="radio-index">
                <input type="text" placeholder="Своя цена">
            </label>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        radios: Object
    }
}
</script>

<style lang="scss" scoped>
.form_radio-box{
    display: flex;
    align-items: center;
    gap: 8px;
}

.form_radio {
    margin-bottom: 10px;
}

.form_radio input[type=radio] {
    display: none;
}

.form_radio label {
    display: inline-block;
    cursor: pointer;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 16px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    transition: all .3s;
}


/* Checked */
.form_radio:not(.input) input[type=radio]:checked+label {
    background: var(--component-colors-blue-active);
    color: var(--background-background-primary);
}



.input input {
    max-width: 80px;
    background: none;
    border: 0;
    text-align: center;
}
</style>