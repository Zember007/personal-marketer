<template>
    <div class="task">
        <div class="task_inf">
            <span class="name">{{ task.name }}</span>
            <div class="time"><span>Добавлено {{ task.data }}</span> <strong>•</strong> <span>{{ task.time }}</span></div>
        </div>
        <button class="edit">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M7.3335 1.33325H6.00016C2.66683 1.33325 1.3335 2.66659 1.3335 5.99992V9.99992C1.3335 13.3333 2.66683 14.6666 6.00016 14.6666H10.0002C13.3335 14.6666 14.6668 13.3333 14.6668 9.99992V8.66658"
                    stroke="#242626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M10.6933 2.01326L5.43992 7.26659C5.23992 7.46659 5.03992 7.85992 4.99992 8.14659L4.71325 10.1533C4.60659 10.8799 5.11992 11.3866 5.84659 11.2866L7.85325 10.9999C8.13325 10.9599 8.52659 10.7599 8.73325 10.5599L13.9866 5.30659C14.8933 4.39992 15.3199 3.34659 13.9866 2.01326C12.6533 0.679924 11.5999 1.10659 10.6933 2.01326Z"
                    stroke="#242626" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path d="M9.93994 2.7666C10.3866 4.35993 11.6333 5.6066 13.2333 6.05993" stroke="#242626"
                    stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        task: Object
    }
}
</script>

<style lang="scss" scoped>
.task {
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    padding: 16px 24px;
    width: 100%;
    min-width: 310px;
    background: var(--background-background-primary);
    position: relative;
}

.task_inf {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.name {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.time {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: var(--text-secondary);

    display: flex;
    align-items: center;
    gap: 6px;
    
    strong {
        font-size: 20px;
        color: var(--colors-secondary-grey-secondary);
    }
}

.edit {
    position: absolute;
    top: 16px;
    right: 24px;
}
</style>