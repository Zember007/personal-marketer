<template>
    <ProfileLayout>
        <div class="project_box">
            <SideProjects class="sidebar" :projects="projects"></SideProjects>
            <ProjectDescription />
            <ProjectTasks @task-add="task_add"/>
            <ProjectDoc  @doc-add="doc_add"/>
            <ProjectTeam @team-add="team_add"/>
        </div>
    </ProfileLayout>
</template>

<script>
import ProfileLayout from '../layouts/ProfileLayout.vue'
import ProjectDescription from '../components/projects/ProjectDescription.vue';
import ProjectDoc from '../components/projects/ProjectDoc.vue';
import ProjectTasks from '../components/projects/ProjectTasks.vue';
import ProjectTeam from '../components/projects/ProjectTeam.vue';
import SideProjects from '../components/projects/SideProjects.vue';
export default {
    components: {
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
            ]
        }
    },
    methods: {
        task_add() {
            console.log('task');
        },

        doc_add() {
            console.log('doc');
        },

        team_add() {
            console.log('team');
        }
    }
}
</script>

<style lang="scss" scoped>
.project_box{
    display: grid;
    grid: auto auto   / auto auto auto;
    gap: 28px;
}

.sidebar {
    grid-row: span 2;
}
</style>