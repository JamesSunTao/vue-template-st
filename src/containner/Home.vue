<template>
    <div> <el-row class="tac">
  <el-col :span="6">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item>
            <i class="el-icon-menu"></i>
            <span slot="title"><router-link to="/home/home1">home1</router-link></span>
        </el-menu-item>
        <el-menu-item>
            <i class="el-icon-document"></i>
            <span slot="title"><router-link to="/home/home2">home2</router-link></span>
        </el-menu-item>
        <el-menu-item>
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/home/home3">home3</router-link></span>
        </el-menu-item>
        </el-menu>
        </el-col>
        <el-col :span="12">
         <router-view></router-view>
        </el-col>
</el-row>
    </div>
</template>

<script>
export default {
    name:'Home',
    data () {
        return {

        };
    },

    methods: {

    }
}

</script>
<style lang='scss' scoped>

</style>