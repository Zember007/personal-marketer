import { createWebHistory, createRouter } from 'vue-router'

import MyProfile from './pages/profile/MyProfile.vue';
import ProfileEdit from './pages/profile/ProfileEdit.vue'; 
import AuthExecutor from './pages/auth/AuthExecutor.vue'; 
import AuthLogin from './pages/auth/AuthLogin.vue'; 
import AuthRegister from './pages/auth/AuthRegister.vue'; 
import VerificationPhone from './pages/auth/VerificationPhone.vue';
import Projects from './pages/Projects.vue';

const routes = [
  { path: '/f', component: AuthExecutor },
  { path: '/auth/verification', component: VerificationPhone },
  { path: '/login', component: AuthLogin },
  { path: '/register', component: AuthRegister },
  { path: '/profile', component: MyProfile },
  { path: '/profile/edit', component: ProfileEdit },
  { path: '/', component: Projects },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
}) 

export default router