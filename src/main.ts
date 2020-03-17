import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import FeedReader from './components/FeedReader.vue'
import FeedItemView from './components/FeedItemView.vue'

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
