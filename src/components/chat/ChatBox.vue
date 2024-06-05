<template>
    <div class="chat__wrapper">
        <ChatSidebar @chat-open="chat_open" :ChatOpen="ChatOpen" class="sidebar" />
        <ChatWindow class="window" :class="{active: ChatOpen}"/>
    </div>
</template>

<script>
import ChatSidebar from './ChatSidebar.vue';
import ChatWindow from './ChatWindow.vue';
export default {
    components: {
        ChatWindow,
        ChatSidebar
    },
    data(){
        return {
            ChatOpen: false
        }
    },
    methods: {
        chat_open(data) {
            this.ChatOpen = data
        }
    }
}
</script>

<style lang="scss" scoped>
.chat__wrapper {
    display: flex;
    overflow: hidden;
    height: 100%;
    flex-grow: 1;
    border: 1px solid var(--colors-secondary-border-color);
    border-radius: 8px;
    background: var(--background-background-primary);
    position: relative;
}

.window {
    width: 72%;
    transition: all .5s;
}

.sidebar {
    width: 28%;
    transition: all .5s;
}

@media(max-width:1420px) {
    .window {
        width: 57%;
    }

    .sidebar {
        width: 43%;
    }
}

@media(max-width:990px) {
    .window, .sidebar {
        width: 100%;
    }

    .window {
        position: absolute;
        top: 0;left: 0; right: 0;bottom: 0;
        z-index: 1;
        transform: translateX(100%);

        &.active {
            transform: translateX(0);
        }
    }
}


</style>