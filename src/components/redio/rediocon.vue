<template>
  <div class="con">
    <div class="con-left">
      <img src="../../assets/images/avatar_male_30.png" alt="">
      <Fromlogin></Fromlogin>
    </div>
    <div class="clear"></div>
  </div>
</template>
<style scoped>
  img{
    width: 40px;
    height: 40px;
  }
  .con-left{
    float: left;
    color: darkgray;
    margin-top: 5%;
    margin-left: 3%;
    margin-bottom: 5%;
    width: 140px;
    position: relative;
  }
  .con{
    border-bottom: 1px solid #c3c3c3;
  }
</style>

<script>
  import Fromlogin from "../login/fromlogin"
  export default{
    components:{
      Fromlogin
    }
  }
</script>
