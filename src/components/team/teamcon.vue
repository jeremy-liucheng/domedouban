<template>
  <div class="con">
    <h4>{{title}}</h4>
    <Teamchild v-for="v in mdata" :newdata="v"></Teamchild>
    <p>更多相关小组</p>
  </div>
</template>

<script>
  import Teamchild from "./temconchild.vue"
  export default {
    components:{
      Teamchild
    },
    props:["mdata","title"]
  }
</script>

<style scoped>
  h4{
    margin: 10px 10px;
    font-weight: 400;
  }
  p{
    width: 100%;
    text-align: center;
    color:#42bd56 ;
    margin-top: 20px;
  }

</style>
