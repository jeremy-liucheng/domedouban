<template>
  <div class="con">
    <div class="item" v-for="(v,index) in childdata">
      <img  alt="">
      <div class="tittle">
        <p>{{v.title}}</p>
      </div>
      <div class="xinxin">
          <span class="spanaa">暂无评分</span>
          <p class="p">
           <el-rate
             v-model="num[index]"
             disabled
             show-score
             text-color="#ff9900"
             score-template="{value}">
           </el-rate>
         </p>
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>


<script>
  export default {
    props:["childdata","data","nzdata","nnum"],
    data(){
       return{
         num:[],
         // ndata:0
       }
    },
    beforeUpdate() {
      var ospan=document.getElementsByClassName("el-rate__icon");
      for(var i=0;i<ospan.length;i++){
        ospan[i].style.fontSize=10+"px";
        ospan[i].style.marginRight=0+"px"
      }
      for(var k=0;k<this.childdata.length;k++){
        this.num.push(Number(this.childdata[k].rating.average))
      }
    },
    updated(){
      var odiv=document.getElementsByClassName("p")
      var ospana=document.getElementsByClassName("spanaa")
      console.log(this.nnum)
      for (var k=0;k<30;k++){
        if(this.nnum[k]==0){
          odiv[k].style.display="none"
          ospana[k].style.display="block"
        }else {
          odiv[k].style.display="block"
          ospana[k].style.display="none"
        }
      }
    },
  }
</script>

<style scoped>
  img{
    display: inline-block;
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
  .spanaa{
    margin-left: 7%;
  }

</style>
