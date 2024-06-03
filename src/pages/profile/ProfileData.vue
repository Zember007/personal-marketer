<template>
    <ProfileLayout>
        <AddProject v-show="isModalVisible" @close="closeModal" />
        <ProfileTop>
            <RouterLink to="/profile" class="route_back">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.5417 16.5999L7.10834 11.1666C6.46667 10.5249 6.46667 9.4749 7.10834 8.83324L12.5417 3.3999"
                        stroke="#242626" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>

                <span>Портфолио</span>
            </RouterLink>
        </ProfileTop>
        <div class="profile__cart">
            <ProfileData @show-Modal="showModal" title="Ваши проекты"></ProfileData>
        </div>
    </ProfileLayout>
</template>

<script>
import ProfileLayout from '../../layouts/ProfileLayout.vue'
import ProfileTop from '../../components/profile/ProfileTop.vue';
import ProfileData from '../../components/profile/ProfileData.vue';
import AddProject from '../../components/modals/AddProject.vue';
export default {
    components: {
        ProfileLayout,
        ProfileTop,
        ProfileData,
        AddProject 
    },
    data() {
        return {
            isModalVisible: false,
        };
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        }
    },
}
</script>

<style lang="scss" scoped>
.route_back {
    display: flex;
    align-items: center;
    gap: 8px;
}
.profile__cart {
    border-radius: 12px;
    background: var(--background-background-primary);
    padding: 32px 32px 70px 32px;
    display: flex;
    flex-direction: column;
    gap: 120px;
}
</style>