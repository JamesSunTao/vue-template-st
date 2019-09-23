<template>
    <div class="main-warp"> 
         app.vue 文件
         {{num}}
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
        return {
        };
    },
    computed:{
        ...mapState(['num'])
    },
    methods: {
    }
}

</script>
<style lang='scss' scoped>
   .main-warp{
       background: olive;
   }
</style>