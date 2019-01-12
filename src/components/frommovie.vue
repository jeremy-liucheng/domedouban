<template>
  <div>
    <div>
      <p class="tittl">{{tittle}}</p>
      <p style="float: right;color: #42bd56;margin-right: 20px; margin-top: 15px; margin-bottom: 15px;display: inline-block">更多</p>
    </div>
    <div class="con-img-div">
      <Moviechild :mcdata="mdata"></Moviechild>
    </div>
  </div>
</template>

<script>
  import Moviechild from "./moviechild.vue"
  export default {
    components:{
      Moviechild
    },
    props:["mdata","tittle"]
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
