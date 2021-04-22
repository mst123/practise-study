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

Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    console.log(binding);
    console.log(el);
    console.log(vnode);
  }
})
// v-demo:ceshiObj1.a.b="sd"
/* arg: "ceshiObj1"
def: {bind: ƒ}
expression: "sd"
modifiers: {a: true, b: true}
name: "demo"
rawName: "v-demo:ceshiObj1.a.b"
value: undefined */

import './plugins/element.js'
Vue.use(TitleBarRound)
Vue.use(table)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
console.log(Vue);