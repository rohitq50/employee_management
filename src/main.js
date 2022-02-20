import Vue from 'vue'
import App from './App.vue'
import router from './router'
import RestApi from './prototype/RestAPI.js'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'

Vue.config.productionTip = false
Vue.prototype.$restApi = new RestApi();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
