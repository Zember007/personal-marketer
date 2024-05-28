<script setup>
import MainHeader from './components/MainHeader.vue';
import MainSidebar from './components/MainSidebar.vue';
import MyProfile from './pages/MyProfile.vue';
import ProfileEdit from './pages/ProfileEdit.vue'; 

</script>

<template>
  <MainHeader/> 
  <MainSidebar/>   
  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.main {
    padding: 32px;
    background: var(--background-background-secondary);
    margin: 67px 0 0 300px;
    display: flex;
    flex-direction: column;
    gap: 30px; 
}
</style>
