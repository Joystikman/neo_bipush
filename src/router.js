import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      meta: {
        title: 'Bipush'
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/About.vue')
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('./views/Post.vue'),
      meta: {
        title: 'Bipush'
      }
    },
    {
      path: '*', /* default route */
      redirect: '/'
    }
  ]
})
