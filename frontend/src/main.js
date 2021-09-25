import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'
import './config/msgs'
import './config/axios'
import './config/mq'

Vue.config.productionTip = false

//TEMPORARIO

//require('axios').defaults.header.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IlRoaWFnbyIsImVtYWlsIjoidGhpYWdva29pYW1hQGdtYWlsLmNvbSIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjI1NDQzOTMxLCJleHAiOjE2MjU3MDMxMzF9.JdQeMGB0Btnl6W5NLctbbsWkeuyDpiRliMfxVqQkQn8'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')