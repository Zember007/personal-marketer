<template>
    <div class="work">
        <div class="work__top">
            <div class="title"><span>Задачи в работе</span></div>
            <div class="view_all"><span>Показать все</span></div>
        </div>
        <div class="work__list">
            <TaskHistory class="task" />
            <TaskHistory class="task" />
            <TaskHistory class="task" />
            <TaskHistory class="task" />
            <TaskHistory class="task" />
        </div>
    </div>
</template>

<script>
import TaskHistory from './TaskHistory.vue'
export default {
    components: { 
        TaskHistory
    }
}
</script>

<style lang="scss" scoped>
.work {
    border-radius: 8px 8px 0 0;
    background: var(--background-background-primary);
    display: flex;
    flex-direction: column;
}

.work__top {
    border-bottom: 1px solid var(--colors-secondary-border-color);
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 115%;
    letter-spacing: -0.02em;
    color: #27272f;
}

.view_all {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
}

.work__list {
    display: flex;
    flex-direction: column;
}

.task {

    &:not(:last-child) {
        border-bottom: 1px solid var(--colors-secondary-border-color); 
    }
}
</style>