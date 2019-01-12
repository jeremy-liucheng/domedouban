import Vue from 'vue'
import Router from 'vue-router'


import Home from '../page/Home'
import Movie from '../page/Movie'
import Radio from '../page/Radio'
import Team from '../page/Team'
import Book from '../page/Book'
import Login from '../page/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/book',
      name: 'Login',
      component: Login
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    }
  ]
})
