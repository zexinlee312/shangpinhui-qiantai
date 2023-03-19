import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'
import TypeNav from '@/components/typeNav'
import { requestCategory } from './api'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.component(Header.name, Header)
Vue.component(Footer.name, Footer)
Vue.component(TypeNav.name, TypeNav)

import store from './store'
import '@/mock/mockServe.js'
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
