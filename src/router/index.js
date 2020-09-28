import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Register from '../views/auth/Register.vue'
import Lock from '../views/auth/Lock.vue'
import Login from '../views/auth/Login.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'
import NotFound from '../views/error/404.vue'
import InternalServerError from '../views/error/500.vue'

const routes = [
  { // not found handler
    path: '/404',
    name: 'NotFoundScreen',
    component: NotFound
  }, // not found handler
  { // server error handler
    path: '/500',
    name: 'InternalServerErrorScreen',
    component: InternalServerError
  }, // server error handler
  {
    path: '/',
    name: 'HomeScreen',
    component: Home
  },
  {
    path: '/register',
    name: 'RegisterScreen',
    component: Register
  },
  {
    path: '/lock',
    name: 'LockScreen',
    component: Lock
  },
  {
    path: '/login',
    name: 'LoginScreen',
    component: Login
  },
  {
    path: '/forgot-password',
    name: 'ForgotPasswordScreen',
    component: ForgotPassword
  },
  {
    path: '/reset-password',
    name: 'ResetPasswordScreen',
    component: ResetPassword
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/About.vue')
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
