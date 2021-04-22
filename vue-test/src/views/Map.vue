<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <TitleBarRound>如果左侧显示蓝色条纹，表示插件按需引入成功</TitleBarRound>
    <title-bar-round>1111111111</title-bar-round>
    <el-button>2222222</el-button>
    <el-table-ex></el-table-ex>
    {{$data.$name}}
    <SlopScope>
      <template v-slot:header="{user}"> <!-- 解构，更加简洁 -->
      <!-- <template v-slot:header="{ user: person }"> --> <!-- 可以重命名 -->
        <!-- {{person.name2}} -->
        {{ user.name2 }}
      </template>
      <template v-slot="slotProps">  <!-- slotProps 名字随意 user是组件内部定义的键值，必须一致 -->
        {{slotProps}}-----{{ slotProps.user.name2 }}
      </template>
      <template v-slot:foot="slotProps">
        {{slotProps}}-----{{ slotProps.user.name2 }}
      </template>
    </SlopScope>
    <SlopScope >
      <template #:header> <!-- v-slot缩写 -->
        header
      </template>
      <template #default="{ user }">  <!-- 默认的不支持缩写，必须加上default -->
        body{{user}}
      </template>
      <template v-slot:foot>
        footer
      </template>
    </SlopScope>
    <select v-demo:ceshiObj1.a.b="'sd'" v-model="selected">
        <!-- 内联对象字面量 -->
      <option value="">123</option>
      <option :value="{ number: 123 }">123</option>
      <option :value="ceshiObj1">123</option>
    </select>
    <el-select v-model="selected1" placeholder="请选择">
      <el-option value="">123</el-option>
      
      <el-option :value="{ number: 123 }">123</el-option>
      <el-option :value="ceshiObj1">123</el-option>
    </el-select>
    <br /> 给data.ceshi 添加新增属性b 不具有响应式 只能通过set方法
    {{wceshi}}
    <button @click="assign">assign</button>
    <button @click="array1">array1</button>
    <button @click="array2">array2</button>
    <el-button v-for="(item, index) of arr" :key="index">{{item}}</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import SlopScope from '@/components/slotScope.vue'
import {a} from '@/components/importTest/index.js'
export default {
  name: 'Home',
  data() {
    return {
      $name: "dsfgdsfsd",
      selected: null,
      selected1: null,
      index: 1,
      arr: [1,2,3,4,5,6,7],
      ceshiObj1: {
        a: 1
      },
      wceshi: { a: 1}
    }
  },
  components: {
    SlopScope
  },
  methods: {
    assign() {
      this.wceshi = Object.assign({}, {a:1}, {b:2})
    },
    array1(){
      this.index = this.index + 1;
      this.arr[5] = this.index;
    },
    array2(){
      this.index = this.index + 1;
      this.arr = [].concat([1,2,3,4,this.index,5])
    }
  },
  mounted() {
    console.log(a);
    
  },
}
</script>
