import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import FeedReader from './components/FeedReader.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: FeedReader },
  { path: '/view', component: FeedReader }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router: router,
  render: (h) => h(App)
}).$mount('#app')
