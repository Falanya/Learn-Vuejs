import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/backend/Login.vue'
import Layout from '@/components/backend/Layout.vue'
import Dashboard from '@/views/backend/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard.index',
      component: Dashboard,
    },
    {
      path: '/admin',
      name: 'login',
      component: Login
    },
  ]
})

export default router
