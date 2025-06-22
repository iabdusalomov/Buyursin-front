import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import ProductPage from "@/views/ProductPage.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
    meta: { hideForAuth: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage,
    meta: { hideForAuth: true }
  },
  {
    path: '/forgot-password',
    name: 'ForgotPassword',
    component: ForgotPassword,
    meta: { hideForAuth: true }
  },
  {
    path: '/product/1',
    name: 'Product Page',
    component: ProductPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 