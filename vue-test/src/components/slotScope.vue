<template>
  <div class="hello">
    <slot name="header" v-bind:user="headerUser">
      {{headerUser.name1}} 
    </slot> 
    <br/>
    <slot v-bind:user="bodyUser"> <!-- 默认 --> <!-- user是作用域插槽使用时的键值 -->
      {{bodyUser.name1}} 
    </slot>
    <br/>
    <slot name="foot" v-bind:user="footUser">
      {{footUser.name1}} 
    </slot>
    <br/> 
  </div>
</template>

<script>
export default {
  name: 'scopeSlope',
  data() {
    return {
      headerUser: {
        name1: '头呵呵',
        name2: '头哈哈'
      },
      bodyUser: {
        name1: '肚呵呵',
        name2: '肚哈哈'
      },
      footUser: {
        name1: '脚呵呵',
        name2: '脚哈哈'
      }
    }
  },
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
