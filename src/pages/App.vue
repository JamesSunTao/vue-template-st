<template>
    <div class="main-warp"> 
        <router-link to="/">about页面</router-link><br/>
        <router-link to="/home">home页面</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name:'App',
    data () {
        return {
            activeIndex2: '1'
        };
    },
    methods: {

    }
}

</script>
<style lang='scss' scoped>
   .main-warp{
     
   }
</style>