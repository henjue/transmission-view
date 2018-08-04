// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueRouter from 'vue-router'
import router from './configs/router'
import Ajax from './configs/ajax'
Vue.config.productionTip = false
Vue.use(Ajax, {})
Vue.use(VueRouter)
Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
