import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Error from '../views/Error.vue'
import ToDos from '../views/ToDos.vue'
import TodoView from '../views/TodoView.vue'
import Done from '../views/Done.vue'

import {auth} from '../firebaseConfig.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  
  {
    path: '/done',
    name: 'Done',
    component: Done
    ,
    meta: { 
      requiresAuth: true}
    },

  {
    path: '/todos',
    name: 'ToDos',
    component: ToDos
    ,
    meta: { 
      requiresAuth: true}
  },
  {
    path: '/todo/:id',
    name: 'TodoView',
    component: TodoView,
    props:  route => ({ id: route.params.id }), 
    meta: { 
      requiresAuth: true}
  },

  {
    path: '/404',
    name: 'Error',
    component: Error
  }
  , 
  {
    path: '*',
    redirect: '/404',
},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/')
  } else {
    next()
  }
})

export default router
