import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需引入测试
import { TitleBarRound, table } from 'pie-sl-ganshu-com';

import {
  Table
} from 'element-ui';

Vue.use(Table);

import './plugins/element.js'
Vue.use(TitleBarRound)
Vue.use(table)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
