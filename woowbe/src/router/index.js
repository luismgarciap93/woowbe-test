import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login.vue'
import business from '../views/business.vue'
import store from '../views/store.vue'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/business',
    name: 'business',
    component: business
  },
  {
    name: 'store',
    path: '/store',
    component: store
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
