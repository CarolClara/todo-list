import Vue from 'vue'
import App from './App.vue'
import '@mdi/font/css/materialdesignicons.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(Buefy)

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
