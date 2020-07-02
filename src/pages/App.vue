<template>
    <div class="main-warp"> 
        
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1"><router-link to="/">about</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/home">home</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/user">user</router-link></el-menu-item>
            </el-menu>
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