import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { requiresAuth: false },
    component: () => import('@/views/home/Home')
  }, {
    path: '/category',
    name: 'Category',
    meta: { requiresAuth: false },
    component: () => import('@/views/category/Category')
  }, {
    path: '/cart',
    name: 'Cart',
    meta: { requiresAuth: true },
    component: () => import('@/views/cart/Cart')
  }, {
    path: '/profile',
    name: 'Profile',
    meta: { requiresAuth: false },
    component: () => import('@/views/profile/Profile')
  }, {
    path: '/detaile',
    name: 'Detaile',
    meta: { requiresAuth: false },
    component: () => import('@/components/content/detaile/Detaile')
  },
  {
    path: '/register',
    name: 'Register',
    meta: { requiresAuth: false },
    component: () => import('@/views/profile/childCpn/Register')
  }, {
    path: '/login',
    name: 'Login',
    meta: { requiresAuth: false },
    component: () => import('@/views/profile/childCpn/Login')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
