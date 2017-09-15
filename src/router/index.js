import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/view/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: Homepage
    },
    {
      path: '/movie',
      name: 'movie',
      component: require('../view/movie')
    },
    {
      path: '/book',
      component: require('../view/book')
    },
    {
      path: '/broadcast',
      component: require('../view/broadcast')
    },
    {
      path: '/group',
      component: require('../view/group')
    }
  ]
})
