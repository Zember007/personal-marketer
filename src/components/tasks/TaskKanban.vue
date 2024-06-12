<template>
    <div class="tasks_box">
        <div v-for="(category, index) in tasks" class="tasks_column" :class="category[0].type">
            <div class="tasks_column-head">
                <span>{{ category[0].name }}</span>
                <div class="count">
                    {{ category[1].length }}
                </div>
            </div>
            <DataAdd @click-add="task_add">Добавить задачу</DataAdd>
            <draggable :id="category[0].type" class="tasks-list" v-model="tasks[index][1]" item-key="id" group="tasks"
                @start="" @end="">
                <template #item="{ element }">
                    <TaskCart :task="element" />
                </template>
            </draggable>
        </div>
    </div>
    <AddTask v-show="isTaskVisible" @close="closeTask" />

</template>

<script>
import draggable from "vuedraggable";
import TaskCart from "./TaskCart.vue"
import DataAdd from "../DataAdd.vue"
import AddTask from "../modals/AddTask.vue"
export default {

    components: {
        draggable,
        TaskCart,
        DataAdd,
        AddTask
    },

    data() {
        return {
            isTaskVisible: false,
        }
    },

    props: {
        tasks: Object
    },

    methods: {
        task_add() {
            this.isTaskVisible = true;
            document.body.style="overflow:hidden"
        },

        closeTask() {
            this.isTaskVisible = false;
            document.body.style=""
        },
    }

}
</script>

<style lang="scss" scoped>
.tasks_column,
.tasks-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
}

.tasks_box {
    display: flex;
    gap: 24px;
    height: 100%;
    overflow-x: auto;
}

.tasks_column-head {
    border-radius: 8px;
    padding: 20px 24px;
    width: 100%;
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 115%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
    display: flex;
    gap: 8px;
    align-items: center;


}

.count {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 11px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: #27272f;
    background: #e1e1e1;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.not_started {
    .tasks_column-head {
        background: #fbf2cb;
    }
}

.in_progress {


    .tasks_column-head {
        color: var(--background-background-primary);
        background: var(--blue-primary-blue-900);
    }

    .count {
        background: var(--background-background-primary);
        color: #27272f;
    }
}

.in_review {
    .tasks_column-head {
        background: #fffcac;
    }
}

.completed {
    .tasks_column-head {
        background: #d9f9e6;
    }
}
</style>