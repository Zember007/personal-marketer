import { createMemoryHistory, createRouter } from 'vue-router'

import MyProfile from './pages/profile/MyProfile.vue';
import ProfileEdit from './pages/profile/ProfileEdit.vue'; 
import AuthExecutor from './pages/auth/AuthExecutor.vue'; 
import AuthLogin from './pages/auth/AuthLogin.vue'; 
import AuthRegister from './pages/auth/AuthRegister.vue'; 
import VerificationPhone from './pages/auth/VerificationPhone.vue';

const routes = [
  { path: '/', component: AuthExecutor },
  { path: '/auth/verification', component: VerificationPhone },
  { path: '/login', component: AuthLogin },
  { path: '/register', component: AuthRegister },
  { path: '/profile', component: MyProfile },
  { path: '/profile/edit', component: ProfileEdit },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
}) 

export default router