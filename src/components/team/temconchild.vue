<template>
  <div class="con">
    <img :src="newdata.images.small" alt=""><h4 class="span">{{newdata.title}}</h4>
    <p>{{newdata.group_topic.time+newdata.group_topic.title}}</p>
    <span class="spana">{{newdata.group_member+"人"}}</span>
  </div>
</template>

<script>

  export default {
    props:["newdata"]
  }
</script>

<style scoped>
  img{
    width: 50px;
    height: 50px;
  }
  .con{
    position: relative;
    padding-top: 20px;
  }
  .span{
    font-weight: 400;
    position: absolute;
    top:20%;
    left: 18%;
  }
  .spana{
    position: absolute;
    top:51%;
    left: 74%;
    color: darkgray;
  }
  p{
    width: 70%;
    margin-top: 40px;
    color: darkgray;
  }
</style>
