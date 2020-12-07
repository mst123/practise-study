<template>
  <div class="extend">
    <h1>This is an extend page</h1>
  </div>
</template>
<script>
import Hint from '../components/extend/index'
export default {
  name: 'extend',
  mounted() {
    
    Hint({name : 'name'}).$on('results', (text) => {
      console.log(text);
    });
  },
}
</script>
