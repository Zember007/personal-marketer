<template>
  <MainHeader @open-menu="open_menu"/>
  <MainSidebar :open="menu_action"/>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script>
import MainHeader from '../components/MainHeader.vue';
import MainSidebar from '../components/MainSidebar.vue';

export default {
  components:{
    MainHeader,
    MainSidebar
  },

  data(){
    return {
      menu_action: false
    }
  },

  methods: {
    open_menu(data){
      this.menu_action = data
    }
  },
  watch: {
    menu_action(data){
      if(data){
        document.body.style = 'overflow:hidden'
      } else {
        document.body.style = ''
      }
    }
  }
}
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