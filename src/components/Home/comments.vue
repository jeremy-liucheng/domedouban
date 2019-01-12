<template>
  <div>
    <div class="con" v-for="v in mdata">
      <div class="item">
         <p class="tittle" v-html="v.title"></p>
         <p class="text" v-html="v.content"></p>
         <p class="name">{{"by--"+v.id}}</p>
      </div>
      <div class="item-img">
          <img :src="v.image" alt="">
          <Solt :bdata="v"><p slot="slota">{{"活动来自于--"+v.subcategory_name}}</p></Solt>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>
<script>
import Solt from "./commentschild.vue"
  export default {
    props:["mdata","newbool"],
    components:{
      Solt
    },
  }
</script>

<style scoped>
  .con{
    padding-left: 10px;
  }
  .item{
      width: 60%;
      float: left;
  }
  .item-img{
      width: 30%;
      float: left;
      margin-left: 30px;
      margin-bottom: 20px;
      margin-top: 20px;
  }
  .text,.tittle{
    width: 227px;
    height: 52px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 52px;
    margin-top: 10px;
  }
  .item-img img{
    width: 87px;
    height: 120px;
  }
  .name{
    margin-top: 20px;
    color: #aaa;
  }
  .text{
    color: #aaa;
  }
  .item-img p{
    color: #aaa;
  }
 .item-img p{
   font-size: 12px;
   margin-top: 5px;
 }

</style>
