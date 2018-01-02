import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login'
import Dashboard from '@/components/dashboard/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
