/**
 * @Descripttion : 
 * @Author       : 马识途
 * @Date         : 2020-04-28 14:34:18
 * @LastEditTime: 2020-05-06 17:05:37
 * @FilePath     : \projecte:\codeFile\vue-test\src\components\extend\index.js
*/
import Vue from 'vue';
import main from './main.vue';
let MyAlertConstructor = Vue.extend(main);
let instance;
var MyAlert=function(message){ //自定义传入的参数
  // 创建实例并且过滤参数
  instance= new MyAlertConstructor({
    template:'<p>{{firstName}} {{lastName}} aka{{alias}}</p>', //搞不进去
    data:{
      message:message
    },
    methods: {
      hha(){
        
      }
    },
  }),
    
  // 挂载实例
  console.log(instance);
  instance.$mount();
  document.body.appendChild(instance.$el)
  
  return instance;
}
console.log();

export default MyAlert;