<template>
    <div class="verf_code">
        <input maxlength="1" :class="[warn ? 'error' : '']" @input="code_input" type="text" name="code" id="0">
        <input maxlength="1" :class="[warn ? 'error' : '']" @input="code_input" type="text" name="code" id="1">
        <input maxlength="1" :class="[warn ? 'error' : '']" @input="code_input" type="text" name="code" id="2">
        <input maxlength="1" :class="[warn ? 'error' : '']" @input="code_input" type="text" name="code" id="3">
    </div>
</template>

<script>
export default {
    data() {
        return {
            pincode: []
        }
    },

    props: {
        modelValue: String,
        warn: Boolean
    },

    methods: {
        code_input(event) {
            this.pincode[event.target.id] = event.target.value
            if (event.target.value == '') {
                var last_input = document.getElementById(`${Number(event.target.id) - 1}`)
                if (last_input) {
                    last_input.focus()
                }
            } else {
                var next_input = document.getElementById(`${Number(event.target.id) + 1}`)
                if (next_input) {
                    next_input.focus()
                }
            }

            if(event.target.id) {
                var data = ''
                this.pincode.forEach(el => {
                    data += el
                })

                this.$emit('update:modelValue', data)
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.verf_code {
    display: flex;
    justify-content: center;
    gap: 12px;
}

.error {
    border: 1px solid var(--colors-secondary-border-color-error);
}

input {
    border: 1px solid var(--colors-secondary-border-color-secondary);
    border-radius: 8px;
    padding: 8px;
    width: 48px;
    height: 52px;
    background: var(--background-background-primary);
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 20px;
    letter-spacing: -0.02em;
    color: var(--text-secondary);
    text-align: center;
}
</style>