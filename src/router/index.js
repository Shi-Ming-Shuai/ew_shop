import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home')
  }, {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category/Category')
  }, {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart/Cart')
  }, {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/Profile')
  }, {
    path: '/detaile',
    name: 'Detaile',
    component: () => import('@/components/content/detaile/Detaile')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
