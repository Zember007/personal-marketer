<template>
    <div class="chat__wrapper">
        <ChatSidebar />
        <ChatWindow class="window"/>
    </div>
</template>

<script>
import ChatSidebar from './ChatSidebar.vue';
import ChatWindow from './ChatWindow.vue';
export default {
    components: {
        ChatWindow,
        ChatSidebar
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
}

.window {
    flex-grow: 1;
}
</style>