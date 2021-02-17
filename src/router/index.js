import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/views/Index.vue'


const routes = [
  {
    path: '/',
    name: 'index',
    component: IndexPage
  },
  {
    path:'/test',
    name:'test',
    component:()=> import ('../views/Test.vue')
  },
  {
    path:'/result',
    name:'result',
    component:()=> import ('../views/Result.vue')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
