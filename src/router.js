import { createMemoryHistory, createRouter } from 'vue-router'

import MyProfile from './pages/MyProfile.vue';
import ProfileEdit from './pages/ProfileEdit.vue'; 

const routes = [
  { path: '/', component: MyProfile },
  { path: '/edit', component: ProfileEdit },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
}) 

export default router