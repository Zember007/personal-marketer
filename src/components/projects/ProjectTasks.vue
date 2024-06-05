<template>
    <div class="box_wrapper">
        <div class="box">
            <div class="top">
                <div class="row">
                    <div class="title">Задачи проекта</div>
                    <button class="view_all">Показать все</button>
                </div>
                <div class="swither">
                    <div class="swither_item all">
                        <input type="radio" name="status" id="All" checked>
                        <label for="All">Все</label>
                    </div>
                    <div class="swither_item">
                        <input type="radio" name="status" id="Not_started">
                        <label for="Not_started">Не начато</label>
                    </div>
                    <div class="swither_item">
                        <input type="radio" name="status" id="In_process">
                        <label for="In_process">В процессе</label>
                    </div>
                    <div class="swither_item">
                        <input type="radio" name="status" id="In_review">
                        <label for="In_review">На проверке</label>
                    </div>
                    <div class="swither_item">
                        <input type="radio" name="status" id="Finished">
                        <label for="Finished">Завершено</label>
                    </div>
                </div>
            </div>
            <div class="task__list">
                <div class="task__list-head">
                    <div class="task__list-item">№</div>
                    <div class="task__list-item">Задача</div>
                    <div class="task__list-item">Дата завершения</div>
                    <div class="task__list-item">Статус</div>
                    <div class="task__list-item"></div>
                </div>
                <div class="task__list-body">
                    <div class="task">
                        <div class="task__list-item">
                            <div class="num">01</div>
                        </div>
                        <div class="task__list-item">
                            <div class="name">Разработка сайта</div>
                        </div>
                        <div class="task__list-item">
                            <div class="date">24 апреля 2024</div>
                        </div>
                        <div class="task__list-item">
                            <div class="status finish">Завершено</div>
                        </div>
                        <div class="task__list-item"><button class="view">
                                <svg width="4" height="20" viewBox="0 0 4 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="18" r="2" transform="rotate(-90 2 18)" fill="#87878D" />
                                    <circle cx="2" cy="10" r="2" transform="rotate(-90 2 10)" fill="#87878D" />
                                    <circle cx="2" cy="2" r="2" transform="rotate(-90 2 2)" fill="#87878D" />
                                </svg>
                            </button></div>
                    </div>
                    <div class="task">
                        <div class="task__list-item">
                            <div class="num">01</div>
                        </div>
                        <div class="task__list-item">
                            <div class="name">Разработка сайта</div>
                        </div>
                        <div class="task__list-item">
                            <div class="date">24 апреля 2024</div>
                        </div>
                        <div class="task__list-item">
                            <div class="status finish">Завершено</div>
                        </div>
                        <div class="task__list-item"><button class="view">
                                <svg width="4" height="20" viewBox="0 0 4 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="18" r="2" transform="rotate(-90 2 18)" fill="#87878D" />
                                    <circle cx="2" cy="10" r="2" transform="rotate(-90 2 10)" fill="#87878D" />
                                    <circle cx="2" cy="2" r="2" transform="rotate(-90 2 2)" fill="#87878D" />
                                </svg>
                            </button></div>
                    </div>
                    <div class="task">
                        <div class="task__list-item">
                            <div class="num">01</div>
                        </div>
                        <div class="task__list-item">
                            <div class="name">Разработка сайта</div>
                        </div>
                        <div class="task__list-item">
                            <div class="date">24 апреля 2024</div>
                        </div>
                        <div class="task__list-item">
                            <div class="status in_process">В процессе</div>
                        </div>
                        <div class="task__list-item"><button class="view">
                                <svg width="4" height="20" viewBox="0 0 4 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="18" r="2" transform="rotate(-90 2 18)" fill="#87878D" />
                                    <circle cx="2" cy="10" r="2" transform="rotate(-90 2 10)" fill="#87878D" />
                                    <circle cx="2" cy="2" r="2" transform="rotate(-90 2 2)" fill="#87878D" />
                                </svg>
                            </button></div>
                    </div>
                    <div class="task">
                        <div class="task__list-item">
                            <div class="num">01</div>
                        </div>
                        <div class="task__list-item">
                            <div class="name">Разработка сайта</div>
                        </div>
                        <div class="task__list-item">
                            <div class="date">24 апреля 2024</div>
                        </div>
                        <div class="task__list-item">
                            <div class="status fail">Отменено</div>
                        </div>
                        <div class="task__list-item"><button class="view">
                                <svg width="4" height="20" viewBox="0 0 4 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="18" r="2" transform="rotate(-90 2 18)" fill="#87878D" />
                                    <circle cx="2" cy="10" r="2" transform="rotate(-90 2 10)" fill="#87878D" />
                                    <circle cx="2" cy="2" r="2" transform="rotate(-90 2 2)" fill="#87878D" />
                                </svg>
                            </button></div>
                    </div>
                </div>
            </div>
        </div>
        <DataAdd @click-add="tack_add">Добавить задачу</DataAdd>
    </div>
</template>

<script>
import DataAdd from '../DataAdd.vue'
export default {
    components: {
        DataAdd
    },
    methods: {
        tack_add() {
            this.$emit('task-add')
        }
    }
}
</script>

<style lang="scss" scoped>
.box_wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.box {
    border-radius: 8px;
    border: 1px solid var(--colors-secondary-border-color);
    height: 100%;
    background: var(--background-background-primary);
    width: 100%;
    height: 100%;
}

.top {
    padding: 20px 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.row {
    display: flex;
    justify-content: space-between;
}

.title {
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 115%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.view_all {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
}

.swither {
    display: flex;
    gap: 8px;
}

.swither_item {}

.swither_item input[type=radio] {
    width: 0;
    height: 0;
}

.swither_item {
    label {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border: 1px solid var(--colors-secondary-border-color);
        border-radius: 800px;
        background: var(--background-background-secondary);
        padding: 7px 0;
        width: 100px;
        font-family: var(--font-family);
        font-weight: 500;
        font-size: 14px;
        line-height: 100%;
        letter-spacing: -0.02em;
        color: var(--text-tertiary);
        transition: all .3s;

    }

    &.all label {
        width: 68px;
    }
}


/* Checked */
.swither_item input[type=radio]:checked+label {
    background: var(--icons-active);
    color: var(--background-background-primary);
}

.task__list {
    display: flex;
    flex-direction: column;
}

.task__list-head {
    border-top: 1px solid var(--colors-secondary-border-color);
    padding: 16px 24px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
    display: grid;
    grid: 1fr / 1fr 4fr 3fr 2fr 1fr;
    align-items: center;
}

.task {
    border-top: 1px solid var(--colors-secondary-border-color);
    padding: 16px 24px;
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: -0.02em;
    color: var(--text-tertiary);
    display: grid;
    grid: 1fr / 1fr 4fr 3fr 2fr 1fr;
    align-items: center;
}

.task__list-body {
    display: flex;
    flex-direction: column;
}

.num {}

.name {
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 143%;
    letter-spacing: -0.02em;
    color: var(--text-primary);
}

.date {}

.status {

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 4px 20px;
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 12px;
    line-height: 167%;
    letter-spacing: -0.02em;

    &.finish {
        background: #d9f9e6;
        color: var(--green-primary-green-900);
    }

    &.in_process {
        background: #fbf2cb;
        color: var(--green-primary-green-700);
    }

    &.fail {
        background: #fde9e9;
        color: var(--red-primary-red-900);
    }
}

.view {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
}

@media(max-width:700px) {
    .task__list-head {
        display: none;
    }

    .task {
        grid: 1fr / 1fr 2fr 0fr 2fr 1fr;
    }

    .date {
        display: none;
    }

    .swither_item {
        label {
            font-size: 12px;
            width: 90px;
        }

        &.all label {
            width: 60px;
        }
    }

    .swither{
        max-width: 75vw;
        overflow-x: auto;
    }
}

@media(max-width:550px){
    .swither{
        max-width: 82vw;
        overflow-x: auto;
    }

    .task {
        grid: 1fr / 0.5fr 2fr 0fr 2fr 0.5fr;
    }

    .name {
        font-size: 12px;
    }
}
</style>