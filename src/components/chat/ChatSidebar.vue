<template>
    <div class="chat__sidebar">
        <SearchInput />
        <ChatUsers @chat-open="chat_open" :ChatOpen="ChatOpen"/>
    </div>
</template>

<script>
import ChatUsers from './ChatUsers.vue';
export default {
    components: {
        ChatUsers
    },

    props: {
        ChatOpen: Boolean
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
    },

    methods: {
        chat_open() {
            this.$emit('chat-open', true)
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
}

@media(max-width:1420px){
    .chat__sidebar {
        padding: 16px; 
    }
}
</style>