import Router from 'vue-router'
import MainPane from '@/components/MainPane'
import Login from '@/components/Login'
export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: MainPane
    },
    {
      path: '/',
      name: 'login',
      component: Login
    }
  ]
})
