// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Verify auth before router
router.beforeEach((to, from, next) => {
  if (!localStorage.token && to.path !== '/') {
    next({name: 'login'})
    delete localStorage.user_email
    delete localStorage.user_id
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
