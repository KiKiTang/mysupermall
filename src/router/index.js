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
    component: Admin,
    children:[
      {
        path:'teacher',
        name:'admin-teacher',
        component:()=> import('../views/Admin/adminview/Tea.vue'),
      },
      {
        path: 'student',
        name: 'admin-student',
        component: () => import('../views/Admin/adminview/Stu.vue')
      },
      {
        path: 'course',
        name: 'admin-course',
        component: () => import('../views/Admin/adminview/Cou.vue')
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
