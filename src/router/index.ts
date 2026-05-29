import { createRouter, createWebHistory } from 'vue-router'
import DashBoard from '@/views/DashBoard.vue'
import Projects from '@/views/Projects.vue'
import Experiments from '@/views/Experiments.vue'
import Guides from '@/views/Guides.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: DashBoard },
    { path: '/Projects', component: Projects },
    { path: '/Experiments', component: Experiments },
    { path: '/Guides', component: Guides },
  ],
})

export default router
