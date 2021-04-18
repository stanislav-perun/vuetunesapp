import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tunes from '../views/Tunes.vue'
import Ghibli from '../views/Ghibli.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },

  {
    path: '/about',
    component: About
  },

  {
    path: '/tunes',
    component: Tunes
  },

  {
    path: '/ghibli',
    component: Ghibli
  }

]

const router = new VueRouter({
  routes
})

export default router
