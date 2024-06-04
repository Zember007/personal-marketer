<template>
    <div class="chat__sidebar">
        <SearchInput />
        <ChatUsers/>
    </div>
</template>

<script>
import ChatUsers from './ChatUsers.vue';
export default {
    components: {
        ChatUsers
    },

    data(){
        return {
            chats:[
                {
                    'name': 'Борис Алаев',
                    'last_message': 'Вы видели претензию от Ани?',
                }
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
.chat__sidebar {
    padding: 16px 28px;
    border: 1px solid var(--colors-secondary-border-color);
    display: flex;
    flex-direction: column;
    gap:16px;
    background: var(--background-background-primary);
    width: 400px;    
}
</style>