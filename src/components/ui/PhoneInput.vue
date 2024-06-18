<template>
    <label class="label">
        <span>{{ label }}</span>
        <input :disabled="disabled" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" v-mask="'+7 ### ### ## ##'" placeholder="+7 XXX XXX XX XX" type="text" :class="{warn : error}" class="input">
    </label>
</template>

<script>
export default {
    props: {
        label: String,
        modelValue: String,
        error: Boolean,
        disabled: Boolean
    }
}
</script>

<style lang="scss" scoped>
.input {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 16px;
    min-width: 340px;

    &.warn {
        border: 1px solid var(--colors-secondary-border-color-error);
    }
}

.label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

@media(max-width:550px) {
    .input {
        min-width: 0;
    }
}
</style>