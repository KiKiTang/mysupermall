import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/Admin/Admin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component:()=>import('../views/Login/Login.vue')
  },
  {
    path: '/student',
    name: 'student',
    component:()=>import('../views/Student/Student.vue')
  },
  {
    path: '/teacher',
    name: 'teacher',
    component:()=>import('../views/Teacher/Teacher.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component:Admin,
    children:[
      {
        path:'/admin/teacher',
        name:'teacher',
        component:()=>('../views/Admin/adminview/Tea.vue'),
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
