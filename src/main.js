import Vue from 'vue'
import axios from 'axios'
// import mock from '../mock/$mock'
import App from './App.vue'
import router from './router'
import store from './store'

// mock()
const baseURL = process.env.NODE_ENV === 'production' ? 'productionURL' : 'https://google.com/v1'
Vue.prototype.$axios = axios.create({ baseURL })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
