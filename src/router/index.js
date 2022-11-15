import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LevelView from '../views/LevelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/levels',
      name: 'levels',
      component: LevelView,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

export default router
