import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aves',
    name: 'aves',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AvesView.vue')
  },
  {
    path: '/aves/:id',
    name: 'ave-detalle',
    
    component: () => import(/* webpackChunkName: "about" */ '../views/AveDetalle.vue')
  },
  { path: '/:pathMatch(.*)*', name: 'not', component: NotFoundView },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
