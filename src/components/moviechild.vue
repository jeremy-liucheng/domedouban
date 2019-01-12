<template>
  <div class="con">
    <div class="item" v-for="v in mcdata">
      <img :src="v.images.large" alt="">
      <div class="tittle">
        <p>{{v.title}}</p>
      </div>
      <div class="xinxin">
        <el-rate
          v-model="v.rating.average"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </div>
    </div>

    <div class="clear"></div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        value5: 3.7
      }
    },
    props:["mcdata"],
    updated() {
        var ospan=document.getElementsByClassName("el-rate__icon")
        var odiv=document.getElementsByClassName("el-rate__text")
        for(var i=0;i<ospan.length;i++){
           ospan[i].style.fontSize=10+"px"
           ospan[i].style.marginRight=0+"px"
        }
    },
  }
</script>

<style scoped>
  img{
    width: 100px;
    height: 142px;
  }
  .con{
    width: 1000px;
  }
   .item{
     float: left;
     margin-right: 10px;
     margin-left: 10px;
     margin-top: 10px;
   }
  .clear{
    clear: both;
  }
  p{
    font-size: 14px;
  }
  .tittle>p{
    text-align: center;
    width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .el-rate{
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
  }



</style>
