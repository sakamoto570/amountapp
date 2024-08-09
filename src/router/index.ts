import { createRouter, createWebHistory, } from 'vue-router'
import Top from '../views/Top/Top.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Top
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
