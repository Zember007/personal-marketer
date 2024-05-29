<template>
  <MainHeader />
  <MainSidebar />
  <main class="main">
    <slot></slot>
  </main>
</template>

<script setup>
import MainHeader from '../components/MainHeader.vue';
import MainSidebar from '../components/MainSidebar.vue';
</script>

<style lang="scss" scoped>
.main {
  padding: 32px;
  background: var(--background-background-secondary);
  margin: 67px 0 0 300px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

@media(max-width:990px) {
  .main {
    margin-left: 70px;
    padding: 10px;
  }
}

@media(max-width:550px) {
  .main {
    margin-left: 0;
  }
}
</style>