<template>
    <div class="chat__wrapper">
        <ChatSidebar @chat-open="chat_open" :ChatOpen="ChatOpen" class="sidebar" />
        <ChatWindow @isShowOffer="ShowOffer" @isShowTask="ShowTask"  :class="{active: ChatOpen}" class="chat_window"/>
        <CreateOffer v-show="isShowOffer" @close="CloseOffer"/>
        <AddTask v-show="isShowTask" @close="CloseTask"/> 
    </div>
</template>

<script>
import ChatSidebar from './ChatSidebar.vue';
import ChatWindow from './ChatWindow.vue';
import CreateOffer from '../modals/CreateOffer.vue';
import AddTask from '../modals/AddTask.vue'
export default {
    components: {
        ChatWindow,
        ChatSidebar,
        CreateOffer,
        AddTask
    },
    props: {
        ChatOpen: Boolean
    },
    data(){
        return {
            isShowOffer: false,
            isShowTask: false,
        }
    },
    methods: {
        chat_open(data) {
            this.$emit('chat-open', data)
        },
        CloseOffer() {
            this.isShowOffer = false
            document.body.style=""
        },
        CloseTask() {
            this.isShowTask = false
            document.body.style=""
        },

        ShowOffer() {
            this.isShowOffer = true
            document.body.style="overflow:hidden"
        },
        ShowTask() {
            this.isShowTask = true
            document.body.style="overflow:hidden"
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

.chat_window {
    width: 72%; 
    transition: all .5s; 
}

.sidebar {
    width: 28%;
    transition: all .5s;
}

@media(max-width:1420px) {
    .chat_window {
        width: 57%;
    }

    .sidebar {
        width: 43%;
    }
}

@media(max-width:990px) {
    .chat_window, .sidebar {
        width: 100%;
    }

    .chat_window {
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