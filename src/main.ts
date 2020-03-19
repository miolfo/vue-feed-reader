import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import FeedReader from './components/FeedReader.vue'
import FeedItemView from './components/FeedItemView.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: FeedReader },
  { path: '/item/:id', component: FeedItemView }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router: router,
  render: (h) => h(App)
}).$mount('#app')
