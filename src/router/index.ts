import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/views/DashboardPage.vue'
import ProjectsPage from '@/views/ProjectsPage.vue'
import ExperimentsPage from '@/views/ExperimentsPage.vue'
import GuidesPage from '@/views/GuidesPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: DashboardPage },
    { path: '/Projects', component: ProjectsPage },
    { path: '/Experiments', component: ExperimentsPage },
    { path: '/Guides', component: GuidesPage },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    if (savedPosition) {
      return savedPosition
    }

    return { top: 0}

  }
})

export default router
