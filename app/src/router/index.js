import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import About from '@/components/About'
import Rent from '@/components/Rent'
import Selling from '@/components/Selling'
import Township from '@/components/Township'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/rent',
      name: 'Rent',
      component: Rent
    },
    {
      path: '/selling',
      name: 'Selling',
      component: Selling
    },
    {
      path: '/township',
      name: 'Township',
      component: Township
    }
  ]
})
