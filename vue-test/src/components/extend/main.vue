<!--
 * @Descripttion : 
 * @Author       : 马识途
 * @Date         : 2020-04-28 14:34:18
 * @LastEditTime : 2020-05-06 16:38:19
 * @FilePath     : \projecte:\codeFile\vue-test\src\components\extend\main.vue
 -->
<template>
  <transition name="el-message-fade">
    <div v-show="visible" class="my-msg">{{message}}</div>
  </transition>
</template>

<script  >
  export default{
    data(){
      return{
        message:'',  //需要提示用户的内容
        visible:true //线上与隐藏
      }
    },
    methods:{
      close(){
        setTimeout(()=>{
          this.$emit("results","test"); // 自定义方法         
          this.visible = false; // 隐藏元素
          this.$el.remove(); // 移除DOM
        },20000)
      },
    },
    mounted() {
      this.close();
    }
  }
</script>