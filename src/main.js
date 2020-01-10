import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false


// 全局过滤器
Vue.filter('currency', function(value) {
  if (!value) return
  return "￥" + value
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
