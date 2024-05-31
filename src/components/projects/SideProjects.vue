<template>
   <div class="sidebar">
      <button v-for="(project) in projects" class="project" :class="[project.active? 'active' : '']">{{ project.name }}</button>
      <button class="add">
         <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.16669 10H13.8334" stroke="#87878D" stroke-width="1.5" stroke-linecap="round"
               stroke-linejoin="round" />
            <path d="M10.5 13.3337V6.66699" stroke="#87878D" stroke-width="1.5" stroke-linecap="round"
               stroke-linejoin="round" />
            <path
               d="M8.00002 18.3337H13C17.1667 18.3337 18.8334 16.667 18.8334 12.5003V7.50033C18.8334 3.33366 17.1667 1.66699 13 1.66699H8.00002C3.83335 1.66699 2.16669 3.33366 2.16669 7.50033V12.5003C2.16669 16.667 3.83335 18.3337 8.00002 18.3337Z"
               stroke="#87878D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
         </svg>
         <span>Добавить</span>
      </button>
   </div>
</template>

<script>
export default {
   props: {
      projects: Object
   },
}
</script>

<style lang="scss" scoped>
.sidebar {
   border: 1px solid var(--colors-secondary-border-color);
   border-radius: 8px;
   padding: 16px 8px;
   width: 160px;
   height: 100%;
   background: var(--background-background-primary);
   display: flex;
   flex-direction: column;
   gap: 12px;
}

.project {
   border-radius: 8px;
   padding: 12px 16px;
   background: none;
   font-family: var(--font-family);
   font-weight: 500;
   font-size: 14px;
   line-height: 100%;
   letter-spacing: -0.02em;
   color: var(--text-primary);
   transition: all .3s;

   &.active {
      background: #f4f4f4;
      color: var(--primary-button-color);
   }

   &:hover {
      background: #f4f4f4;
      color: var(--primary-button-color);
   }
}

.add {
   border: 1px solid var(--colors-secondary-border-color);
   border-radius: 8px;
   padding: 8px 16px;
   display: flex;
   gap: 8px;
   align-items: center;
   justify-content: center;
   font-family: var(--font-family);
   font-weight: 500;
   font-size: 14px;
   line-height: 100%;
   letter-spacing: -0.02em;
   color: var(--text-tertiary);   
}
</style>