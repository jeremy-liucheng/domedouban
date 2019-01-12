<template>
  <div>
    <p v-show="bool"><slot name="slota"></slot></p>
  </div>
</template>
<script>
  export  default {
    props:["bdata"],
    computed:{
      bool(){
        if (this.bdata.subcategory_name==null) {
          return false
        }
        return true
      }
    }
  }
</script>
