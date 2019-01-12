<template>
  <div>
    <Headerbar></Headerbar>
    <Fromredio></Fromredio>
    <Rediocon></Rediocon>
  </div>
</template>

<script>
  import Headerbar from "../components/headerbar.vue"
  import Fromredio from "../components/redio/fromrediom.vue"
  import Rediocon from "../components/redio/rediocon.vue"
  export default {
    components:{
      Headerbar,
      Fromredio,Rediocon
    }
  }
</script>
