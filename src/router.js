import { createWebHistory, createRouter } from 'vue-router'

import MyProfile from './pages/profile/MyProfile.vue';
import ProfileEdit from './pages/profile/ProfileEdit.vue'; 
import ProfileData from './pages/profile/ProfileData.vue'; 
import AuthExecutor from './pages/auth/AuthExecutor.vue'; 
import AuthLogin from './pages/auth/AuthLogin.vue'; 
import AuthRegister from './pages/auth/AuthRegister.vue'; 
import VerificationPhone from './pages/auth/VerificationPhone.vue';
import Projects from './pages/Projects.vue';
import TasksBoard from './pages/TasksBoard.vue'; 
import Chat from './pages/Chat.vue';
import Team from './pages/Team.vue';
import Balance from './pages/Balance.vue';
import Home from './pages/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/auth', component: AuthExecutor },
  { path: '/auth/verification', component: VerificationPhone },
  { path: '/login', component: AuthLogin },
  { path: '/register', component: AuthRegister },
  { path: '/profile', component: MyProfile },
  { path: '/portfolio', component: ProfileData },
  { path: '/compani', component: ProfileData },
  { path: '/profile/edit', component: ProfileEdit },
  { path: '/projects', component: Projects },
  { path: '/tasks', component: TasksBoard }, 
  { path: '/chat', component: Chat }, 
  { path: '/team', component: Team }, 
  { path: '/balance', component: Balance },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
}) 

export default router