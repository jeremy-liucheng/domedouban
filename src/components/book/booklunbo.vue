<template>
  <div>
    <div>
      <p class="tittl">{{tittle}}</p>
      <p style="float: right;color: #42bd56;margin-right: 20px; margin-top: 15px; margin-bottom: 15px;display: inline-block">更多</p>
    </div>
    <div class="con-img-div">
      <Bookchild :childdata="bookdata" :nzdata="zdata" :nnum="newnum"></Bookchild>
    </div>
  </div>
</template>

<script>
  import Bookchild from "./bookchild.vue"
  export default {
    components:{
      Bookchild
    },
    data(){
      return{
      }
    },
    props:["bookdata","tittle","zdata","newnum"],
  }
</script>

<style scoped>
  .con-img-div{
    overflow: auto;
  }
  .tittl{
    margin-left: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  p{
    display: inline-block;
  }
</style>
