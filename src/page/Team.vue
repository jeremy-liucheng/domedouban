<template>
  <div>
    <Headerbar></Headerbar>
    <Team></Team>
    <Teamcon :mdata="teamdataa" title="租房找室友"></Teamcon>
    <Teamcon :mdata="teamdatab" title="来聊5毛钱"></Teamcon>
    <Teamcon :mdata="teamdatac" title="买卖买"></Teamcon>
    <Logo></Logo>
  </div>
</template>
<script>
  import Headerbar from "../components/headerbar.vue"
  import Team from "../components/team/team.vue"
  import Teamcon from "../components/team/teamcon.vue"
  import Logo from "../components/team/logo.vue"
  export default {
    components:{
      Headerbar,
      Team,
      Teamcon,
      Logo
    },
    data(){
      return{
        teamdataa:[],
        teamdatab:[],
        teamdatac:[]
      }
    },
    beforeCreate() {
      this.axios.get("/api/someApi").then((val=>{
        this.teamdataa=val.data.xiaozua
        this.teamdatab=val.data.xiaozub
        this.teamdatac=val.data.xiaozuc
      }))
    }
  }
</script>
