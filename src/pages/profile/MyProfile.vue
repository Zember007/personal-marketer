<template>

    <ProfileLayout>
        
        <ProfileTop>
            С возвращением, Алексей!
        </ProfileTop>

        <ProfileBox/>
        
    </ProfileLayout>
</template>

<script>
import ProfileLayout from '../../layouts/ProfileLayout.vue'
import ProfileTop from '../../components/profile/ProfileTop.vue';
import ProfileBox from '../../components/profile/ProfileBox.vue'


export default {
    components: {
        ProfileLayout,
        ProfileTop,
        ProfileBox
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
</style>