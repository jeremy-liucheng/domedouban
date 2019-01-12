<template>
  <div>
    <p>发现新电影</p>
    <div class="con">
      <div class="spana">
          <p v-for="v in tittlea" class="titlea">{{v.title}}</p>
      </div>
      <div class="spanb">
         <p v-for="v in tittleb" class="titleb">{{v.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:["tittlea","tittleb"],
    updated() {
      var ospan=document.getElementsByClassName("titlea")
      var ospanb=document.getElementsByClassName("titleb")

      for(var i=0;i<4;i++){
          ospan[i].style.borderColor=this.tittlea[i].color
          ospan[i].style.color=this.tittlea[i].color
      }
      for(var i=0;i<4;i++){
          ospanb[i].style.borderColor=this.tittleb[i].color
          ospanb[i].style.color=this.tittleb[i].color
      }
    },
  }
</script>

<style scoped>
  .spana{
    width: 1000px;;
  }
  .spanb{
    width: 1000px;;
  }
  .titlea,.titleb{
    display: inline-block;
    margin: 10px;
    padding: 5px;
    border: 1px solid;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 10px;
  }
  .con{
    overflow: auto;
  }
  p{
    margin-left: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>
