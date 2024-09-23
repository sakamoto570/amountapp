import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Top from '../views/Top/Top.vue'
import Input from '@/views/Input/InputPage.vue'
import Setteing from '@/views/Setting/Account_Setting.vue'
import Login from '@/views/Login/Login.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login
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
  {
    path: '/setting',
    name: 'setting',
    component: Setteing
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
