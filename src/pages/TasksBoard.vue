<template>
    <ProfileLayout>
        <ProfileTop>
            <RouterLink to="/profile" class="route_back">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5417 16.5999L7.10834 11.1666C6.46667 10.5249 6.46667 9.4749 7.10834 8.83324L12.5417 3.3999"
                        stroke="#242626" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>

                <span>Задачи</span>
            </RouterLink>

            <SelectInput :items="projects" />
        </ProfileTop>

        <TaskKanban :tasks="tasks"></TaskKanban>

    </ProfileLayout>
</template>

<script>
import ProfileLayout from '../layouts/ProfileLayout.vue'
import ProfileTop from '../components/profile/ProfileTop.vue';
import TaskKanban from '../components/tasks/TaskKanban.vue';

export default {
    components: {
        ProfileLayout,
        ProfileTop,
        TaskKanban
    },
    data() {
        return {
            projects: [
                { 'name': 'Фабрика мебели', 'active': true },
                { 'name': 'Магазин цветов' },
                { 'name': 'Сайт агентства' },
                { 'name': 'Доработка сайта' },
            ],
            
            tasks: {
                not_started: [
                    { type: "not_started", name: "Не начато" },
                    [
                        { name: "Разработка", data: "13.04.2024", time:"13:00" },
                        { name: "Разработка", data: "13.04.2024", time:"13:01" },
                        { name: "Разработка", data: "13.04.2024", time:"13:00" },
                    ]
                ],
                in_progress: [
                    { type: "in_progress", name: "В процессе" },
                    [
                        { name: "Разработка", data: "13.04.2024", time:"13:00" },
                        { name: "Разработка", data: "13.04.2024", time:"13:00" },
                        { name: "Разработка", data: "13.04.2024", time:"13:00" },
                    ]
                ],
                in_review: [
                    { type: "in_review", name: "На проверке" },
                    [
                        { name: "Разработка", data: "13.04.2024", time:"13:00" },
                        { name: "Разработка", data: "13.04.2024", time:"13:00" },
                        { name: "Разработка", data: "13.04.2024", time:"13:00" },
                    ]
                ],
                completed: [
                    { type: "completed", name: "Завершено" },
                    [
                        { name: "Разработка", data: "13.04.2024", time:"13:00" },
                        { name: "Разработка", data: "13.04.2024", time:"13:00" },
                        { name: "Разработка", data: "13.04.2024", time:"13:00" },
                    ]
                ]
            }
        };
    }
}
</script>

<style lang="scss" scoped>
.route_back {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>