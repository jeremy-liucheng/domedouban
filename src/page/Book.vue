<template>
  <div>
    <Headerbar></Headerbar>
    <Booklunbo :bookdata="bookdataone" tittle="最受关注图书|虚构类" :zdata="bookdata" :newnum="dnum"></Booklunbo>
    <Booklunbo :bookdata="bookdatatow" tittle="最受关注图书|非虚构类"></Booklunbo>
    <Booklunbo :bookdata="bookdatathere" tittle="豆瓣直树"></Booklunbo>
    <Fxianhaoshu :newgooddata="goodbooknoe" :newgooddatab="goodbooktow"></Fxianhaoshu>
    <Fenleiliulanhaoshu></Fenleiliulanhaoshu>
    <Logo></Logo>
  </div>
</template>
<script>
  import Headerbar from "../components/headerbar.vue"
  import Booklunbo from "../components/book/booklunbo.vue"
  import Fxianhaoshu from "../components/book/faxianhaoshu.vue"
  import Fenleiliulanhaoshu from "../components/book/fenleiliulanhaoshu.vue"
  import Logo from "../components/book/logo.vue"
  export default {
    components:{
      Headerbar,
      Booklunbo,
      Fxianhaoshu,
      Fenleiliulanhaoshu,
      Logo
    },
    data(){
      return{
        data:[],
        bookdata:[],
        dnum:[]
      }
    },
    beforeCreate() {
      this.axios.get("/api/someApi").then((val=>{
        this.data=val.data.books;
        this.bookdata=val.data.goodBook;
      }))
    },
    beforeUpdate(){
      for(var i=0;i<this.data.length;i++){
        this.dnum.push(Number(this.data[i].rating.average))
      }
    },
    computed:{
      bookdataone(){
        return this.data.slice(0,8)
      },
      bookdatatow(){
        return this.data.slice(8,16)
      },
      bookdatathere(){
        return this.data.slice(16,24)
      },
      goodbooknoe(){
        return this.bookdata.slice(0,3)
      },
      goodbooktow(){
        return this.bookdata.slice(4,7)
      },
    }
  }
</script>
