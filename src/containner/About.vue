<template>
    <div> 
        this is about page
        <button @click='add1'>加法</button>
        {{num}}
    </div>
</template>

<script>
// import utils from '../../dist/js'
// import examples from '../../dist/js/example'
// import {add, jian} from '../../dist/js/example'
import {add} from 'jsdk-st'
export default {
    name:'About',
    data () {
        return {
           num:0
        };
    },
    methods: {
      add1(){
          console.log(add)
          this.num = add(1,2)
      }
    }
}

</script>
<style lang='scss' scoped>
       div{
           height:500px;
           width:100%;
           background:gray;
       }
</style>