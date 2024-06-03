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

                <span>Проекты</span>
            </RouterLink>
        </ProfileTop>
        <div class="project_box">
            <SideProjects class="sidebar" :projects="projects"></SideProjects>
            <ProjectDescription />
            <ProjectTasks @task-add="task_add" />
            <ProjectDoc @doc-add="doc_add" />
            <ProjectTeam @team-add="team_add" />
        </div>
    </ProfileLayout>
    <AddDoc v-show="isDocVisible" @close="closeDoc" />
    <AddTask v-show="isTaskVisible" @close="closeTask" />
</template>

<script>
import ProfileLayout from '../layouts/ProfileLayout.vue'
import ProjectDescription from '../components/projects/ProjectDescription.vue';
import ProjectDoc from '../components/projects/ProjectDoc.vue';
import ProjectTasks from '../components/projects/ProjectTasks.vue';
import ProjectTeam from '../components/projects/ProjectTeam.vue';
import SideProjects from '../components/projects/SideProjects.vue';
import AddDoc from '../components/modals/AddDoc.vue';
import AddTask from '../components/modals/AddTask.vue';
export default {
    components: {
        AddTask,
        AddDoc,
        ProfileLayout,
        ProjectDescription,
        ProjectDoc,
        ProjectTasks,
        ProjectTeam,
        SideProjects
    },
    data() {
        return {
            projects: [
                { 'name': 'Фабрика мебели', 'active': true },
                { 'name': 'Магазин цветов' },
                { 'name': 'Сайт агентства' },
                { 'name': 'Доработка сайта' },
            ],
            isTaskVisible: false,
            isDocVisible: false,
            isTeamVisible: false
        }
    },
    methods: {
        task_add() {
            this.isTaskVisible = true;
        },

        closeTask() {
            this.isTaskVisible = false;
        },

        doc_add() {
            this.isDocVisible = true;
        },

        closeDoc() {
            this.isDocVisible = false;
        },

        team_add() {
            this.isTeamVisible = true;
        },

        closeTeam() {
            this.isTeamVisible = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.project_box {
    display: grid;
    grid: auto auto / auto auto auto;
    gap: 28px;
}

.sidebar {
    grid-row: span 2;
}

.route_back {
    display: flex;
    align-items: center;
    gap: 8px;
}
</style>