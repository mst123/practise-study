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
    <div v-bind:test="ceshiProp" class="prop"></div>
    <div v-bind.prop:test="ceshiProp" class="prop"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import SlopScope from '@/components/slotScope.vue'
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
  beforeCreate() {
    console.log("beforeCreate");
    console.log(this);
  },
  created() {
    console.log("created");
    console.log(this);
  },
  beforeMount() {
    console.log("beforeMount");
    console.log(this);
  },
  mounted() {
    console.log("mounted");
    console.log(this);
  }
}
</script>
<style lang="scss" scoped>
  .prop{
    height: 200px;
    width: 200px;
    background: red;
  }
</style>