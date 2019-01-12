<template>
  <div>
    <Headerbar></Headerbar>
    <Frommovie :mdata="moviedataone" tittle="热门影院"></Frommovie>
    <Frommovie :mdata="moviedatatow" tittle="免费在线观影"></Frommovie>
    <Frommovie :mdata="moviedatathere" tittle="新片速递"></Frommovie>
    <Faxian :tittlea="tittleaa" :tittleb="tittleab"></Faxian>
    <Fenlei></Fenlei>
    <Logo></Logo>
  </div>
</template>

<script>
  import Headerbar from "../components/headerbar.vue"
  import Frommovie from "../components/frommovie.vue"
  import Faxian from "../components/faxianhaodianyin.vue"
  import Fenlei from "../components/fenleiliulan.vue"
  import Logo from "../components/logo.vue"
  export default {
    components:{
      Headerbar,
      Frommovie,
      Faxian,
      Fenlei,
      Logo
    },
    data(){
      return {
        moviedata:[],
        faxianhaodianyindata:[]
      }
    },
    beforeCreate() {
      this.axios.get("/api/someApi").then((val=>{
        this.moviedata=val.data.movie
        this.faxianhaodianyindata=val.data.faxianhaodianying
      }))
    },
    computed:{
       moviedataone(){
          return this.moviedata.slice(0,8)
       },
      moviedatatow(){
         return this.moviedata.slice(9,17)
      },
      moviedatathere(){
         return this.moviedata.slice(18,26)
      },
      tittleaa(){
        return this.faxianhaodianyindata.slice(0,4)
      },
      tittleab(){
        return this.faxianhaodianyindata.slice(5,10)
      }
    }
  }
</script>
