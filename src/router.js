import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      //component: Home
      component: function () { 
        return import('./views/Home.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import( './views/About.vue')
      }
    },
    {
        path: '/testVuex',
        name: 'testVuex',
        component: function(){
          return import('./views/TestVuex.vue')
        }
    },
    {
        path: '/testLifeCycle',
        name: 'testLifeCycle',
        component: function () {
          return import('./views/TestLifeCycle.vue')
        }
    },
    {
        path: '/testAxios',
        name: 'testAxios',
        component: function () {
          return import('./views/TestAxios.vue')
        }
    },
    {
      path: '/retrive',
      name: 'retrive',
      component: function () {
        return import('./views/retrive.vue')
      }
    },
    {
        path: '/login',
        name: 'login',
        component: function () {
          return import('./views/Login.vue')
        }
    },
    {
      path: '/register',
      name: 'register',
      component: function () {
        return import('./views/Register.vue')
      }
     },
     {
      path: '/movieList',
      name: 'movieList',
      component: function () {
        return import('./views/movieList.vue')
      }
     },
     {
      path: '/movieEdit',
      name: 'movieEdit',
      component: function () {
        return import('./views/movieEdit.vue')
      }
     },
     // otherwise redirect to home
     { path: '*', redirect: '/' }
  ]
})

