import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/services/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if( to.meta.requiresAuth === true ){
    auth()?.isAuthenticated().then(value=>{
      if(value === true){
        next()
      } else {
        alert("You're not authenticated")
        router.push('/login')
      }
    })
  } else {
    next()
  }
})

export default router
