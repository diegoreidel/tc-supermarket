import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './custom.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
