<template>
    <div class="checkbox_box">
        <input type="checkbox" class="custom-checkbox" id="checkbox" name="happy" value="yes">
        <label for="checkbox"></label>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.checkbox_box{
    height: 24px;
    width: 24px;
    padding: 0.5px;
    background: #FFF;
    border: 1px solid #27272f;
    border-radius: 8px;    
}
.custom-checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.custom-checkbox+label {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    width: 100%; 
    height: 100%;
}

.custom-checkbox+label::before {
    content: '';
    display: block;
    width: 100%; 
    height: 100%;
    flex-shrink: 0;
    flex-grow: 0;    
    border-radius: 8px;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    transition: all .3s;
}

.custom-checkbox:checked+label::before {
    border-color: #27272f;
    background-color: #27272f;
    background-image: url("../../assets/img/icons/check.svg");
}
</style>