import Vue from 'vue'
import Router from 'vue-router'
import Social from './components/views/Social.vue'
import Query from './components/views/Query.vue'
import About from './components/views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'social',
      component: Social
    },
    {
      path: '/query',
      name: 'query',
      component: Query
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ],
  mode: 'history'
})
