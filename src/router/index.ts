import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Top from '../views/Top/Top.vue'
import Input from '@/views/Input/InputPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Top
  },
  {
    path: '/input',
    name: 'input',
    component: Input
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
