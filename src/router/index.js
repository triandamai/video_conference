
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path:'/',
    redirect:'/auth'
  },
  {
    path: '/home',
    name: 'Video',
    component: () => import( '../views/Video.vue'),
    children:[
      {
        path:'/',
        redirect:'/main'
      },
      {
        path:'/main',
        component:()=>import('../components/Main.vue')
      }
    ]
  },
  {
    path:'/auth',
    name:"Auth",
    component:()=> import('../views/Auth.vue'),
  },
  {
    path:'/:pathMatch(.*)*',
    name:"NotFound",
    component:()=>import('../views/Error.vue')
  }
]
 
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
