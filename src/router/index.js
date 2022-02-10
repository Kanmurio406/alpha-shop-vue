import Vue from 'vue'
import VueRouter from 'vue-router'
import AlphaShop from '../views/AlphaShop.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/alpha-shop',
  },
  {
    path: '/alpha-shop',
    name: 'alpha-shop',
    component: AlphaShop,
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  }
]

const router = new VueRouter({
  routes
})

export default router
