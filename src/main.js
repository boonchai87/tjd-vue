import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'; 

Vue.config.productionTip = false

// https://forum.vuejs.org/t/global-mixins-data/33596
import globalService from './globalService'
Vue.mixin(globalService)


// login security
router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/','/register','/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if( loggedIn ){
    axios.defaults.headers.common['x-access-token'] = JSON.parse(loggedIn).token;
    //console.log(JSON.parse(loggedIn));
  }
  //console.log(loggedIn);
  //console.log(authRequired);
  //console.log(loggedIn);
  if (authRequired && !loggedIn ) {
    console.log("go to login");
    return next('/login');
  }
  next();
});


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
