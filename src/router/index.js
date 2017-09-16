import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/view/homepage'
import Movie from '@/view/movie'
import Book from '@/view/book'
import Broadcast from '@/view/broadcast'
import Group from '@/view/group'
import More from '@/components/more'
import Detail from '@/view/detail'

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
      component: Movie
    },
    {
      path: '/book',
      component: Book
    },
    {
      path: '/broadcast',
      component: Broadcast
    },
    {
      path: '/group',
      component: Group
    },
    {
      path: '/more/:api/:title',
      name: 'more',
      component: More
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
