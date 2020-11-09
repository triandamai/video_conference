import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Video',
    component: () => import( '../views/Video.vue'),
    children:[
      {
        path:'/',
        redirect:'/auth'
      },
      {
        path:'/auth',
        component:()=> import('../components/Auth.vue'),
      },
      {
        path:'/main',
        component:()=>import('../components/Main.vue')
      },{
        path:'/error',
        component:()=>import('../components/Error.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
