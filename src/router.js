import { createWebHistory, createRouter } from 'vue-router'

import MyProfile from './pages/profile/MyProfile.vue';
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
import Blog from './pages/Blog.vue';
import BlogPost from './pages/BlogPost.vue';
import Analytics from './pages/Analytics.vue';
import NotFound from './pages/404.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/blog/post', component: BlogPost },
  { path: '/auth', component: AuthExecutor },
  { path: '/auth/verification', component: VerificationPhone },
  { path: '/login', component: AuthLogin },
  { path: '/register', component: AuthRegister },
  { path: '/profile', component: MyProfile },
  { path: '/portfolio', component: ProfileData },
  { path: '/compani', component: ProfileData },
  { path: '/projects', component: Projects },
  { path: '/tasks', component: TasksBoard }, 
  { path: '/chat', component: Chat }, 
  { path: '/team', component: Team }, 
  { path: '/balance', component: Balance },
  { path: '/analytics', component: Analytics },
  { path: '/404', component: NotFound },  
  { path: '/:catchAll(.*)', redirect: '/404' }, 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
}) 

export default router