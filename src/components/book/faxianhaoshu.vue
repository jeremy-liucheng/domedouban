<template>
  <div>
    <p>发现好书</p>
    <div class="con">
      <div class="spana">
        <p v-for="v in newgooddata" class="titlea">{{v.title}}</p>
      </div>
      <div class="spanb">
        <p v-for="v in newgooddatab" class="titleb">{{v.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:["newgooddata","newgooddatab"],
    updated() {

      var ospan=document.getElementsByClassName("titlea")
      var ospanb=document.getElementsByClassName("titleb")

      for(var i=0;i<3;i++){
        ospan[i].style.borderColor=this.newgooddata[i].color
        ospan[i].style.color=this.newgooddata[i].color
      }
      for(var k=0;k<3;k++){
        ospanb[k].style.borderColor=this.newgooddatab[k].color
        ospanb[k].style.color=this.newgooddatab[k].color
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
