<template>
  <div>
    about
    <button @click="addBtn(1,2)">相加</button>
    {{totalNum}}
    <div @click="show(0)">time1: <span>{{chText}}</span> </div>
    <div @click="show(1)">time2: <span>{{enText}}</span> </div>
    <van-popup v-model="showPicker" round position="bottom">
      <van-picker show-toolbar title="标题" :columns="columns"  @confirm="onConfirm"
  @cancel="onCancel"
  ref="picker"
 />
    </van-popup>
  </div>
</template>

<script>
import {addFun} from '../utils/math'
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        totalNum: 0,
        showPicker: false,
        columns: [
          // 第一列
          {
            values: ['周一', '周二', '周三', '周四', '周五'],
            defaultIndex: 2,
          },
          // 第二列
          {
            values: ['上午', '下午', '晚上'],
            defaultIndex: 1,
          },
        ],
        chText:"请选择中教时间",
        enText:"请选择外教时间"

      }
    },
    methods: {
       addBtn (a, b){
         this.totalNum = addFun(a,b);
       },
       show(index){
         this.curIndex = index
         if (index == 1) {
           this.$refs.picker.setIndexes([0,1])
         }
         this.showPicker = true
       },
       onConfirm(value, index){
         console.log(value, index)
         if(this.curIndex == 0){
          this.chText = value[0]+value[1]
         }else{
           
          //  this.$refs.picker.setColumnValues(1,'下午')
           this.enText = value[0]+value[1]
         }
         this.showPicker = false
       },
       onCancel() {
      Toast('取消');
    },
    }
  }
</script>