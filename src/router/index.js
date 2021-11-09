import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import { Toast } from 'vant'

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
  }, {
    path: '/address',
    name: 'Address',
    meta: { requiresAuth: true },
    component: () => import('@/views/profile/childCpn/Address')
  }, {
    path: '/addressedit',
    name: 'Addressedit',
    meta: { requiresAuth: true },
    component: () => import('@/views/profile/childCpn/AddressEdit')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// 导航守卫 权限验证
router.beforeEach((to, from, next) => {
  // 进入页面判断是否需要登录
  const isRequiresAuth = to.meta.requiresAuth
  if (!store.state.isLogin && isRequiresAuth) {
    Toast('请先登录')
    next('/login')
  }
  next()
})

export default router
