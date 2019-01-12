<template>
  <div>
    <Headerbar></Headerbar>
    <div class="con">
      <Homefrom mdata="影院热线"></Homefrom>
      <Homefrom mdata="欧美新碟帮"></Homefrom>
      <Homefrom mdata="注册帐号"></Homefrom>
      <Homefrom mdata="登录豆瓣"></Homefrom>
    </div>
    <Comments :mdata="newdata"></Comments>
  </div>
</template>

<script>
  import Headerbar from "../components/headerbar.vue"
  import Homefrom from "../components/Home/homefrom.vue"
  import Comments from "../components/Home/comments.vue"
  export default {
    data(){
        return{
          homedata:[],
          newhomedata:[],
        }
    },
    components:{
      Headerbar,
      Homefrom,
      Comments
    },
    beforeCreate() {
      this.axios.get("/api/someApi").then((val=>{
        this.homedata=val.data.shouye
      }))
    },
    computed:{
       newdata(){
         return this.homedata.slice(0,9)
       },

    }
  }
</script>
<style>

 .con{
   padding-left: 2%;
 }
  .clear{
    clear: both;
  }
</style>
