import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/default/Home.vue'
import HomeBar from '../views/bars/HomeBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components:{
      default: Home,
      bar: HomeBar
    } 
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: {
      default: () => import(/* webpackChunkName: "login" */ '../views/default/Login.vue'),
      bar: () => import(/* webpackChunkName: "login" */ '../views/bars/HomeBar.vue')
    }
      
    
  },
  {
    path: '/dash/:id',
    name: 'Dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: {
      default: () => import(/* webpackChunkName: "dashboard" */ '../views/default/Dashboard.vue'),
      bar: () => import(/* webpackChunkName: "dashboard" */ '../views/bars/AppBar.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
