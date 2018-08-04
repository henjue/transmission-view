// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
// const defaultHeaders = {
//   'Authorization': 'Basic YWRtaW46TUZQOU9hazZEbzhFaXR2Mw==',
//   'X-Transmission-Session-Id':
//   'CRaiIIVfVgug8vYnWkk75wyvPM1ndt6UuYzYcKfGXZ1QxyhI'
// }
// axios.defaults.baseURL = window.location.origin
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.common['Access-Control-Request-Method'] = '*'
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(iView)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
