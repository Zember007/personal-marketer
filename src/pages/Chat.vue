<template>
    <ProfileLayout>
        <ProfileTop>
            <div v-if="ChatOpen" class="route_back" @click="close_chat">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5417 16.5999L7.10834 11.1666C6.46667 10.5249 6.46667 9.4749 7.10834 8.83324L12.5417 3.3999"
                        stroke="#242626" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
    
                <span>Чат</span>
            </div>
            <RouterLink v-else to="/profile" class="route_back">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.5417 16.5999L7.10834 11.1666C6.46667 10.5249 6.46667 9.4749 7.10834 8.83324L12.5417 3.3999"
                        stroke="#242626" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
    
                <span>Чат</span>
    
            </RouterLink>
        </ProfileTop>

        <ChatBox @chat-open="chat_open" :ChatOpen="ChatOpen"></ChatBox>
        
    </ProfileLayout>
</template>

<script>
import ProfileTop from '../components/profile/ProfileTop.vue';
import ProfileLayout from '../layouts/ProfileLayout.vue'
import ChatBox from '../components/chat/ChatBox.vue'
export default {
    components: {
        ProfileLayout,
        ProfileTop,
        ChatBox
    },
    data() {
        return {
            ChatOpen: false
        }
    },
    methods: {
        chat_open(data) {
            this.ChatOpen = data
        },
        close_chat() {
            this.ChatOpen = false
        }
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