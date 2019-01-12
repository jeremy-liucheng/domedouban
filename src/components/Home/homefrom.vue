<template>
   <div class="con">
     <div>{{mdata}}</div>
   </div>
</template>

<script>
   export default {
      props:["mdata"]
   }
</script>

<style scoped>
 .con{
   height: 40px;
   width: 35%;
   display: inline-block;
   margin:15px 20px 10px 20px ;
   text-align: center;
   line-height: 40px;
   float: left;
   background-color: #f3f3f3;
   border-radius: 5px;
 }
</style>
