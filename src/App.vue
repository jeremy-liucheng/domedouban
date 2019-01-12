<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  beforeCreate() {
    this.$router.push("/home")
  },
}
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
  a{
    text-decoration: none;
  }
  .el-message-box{
    width: 80%;
    height: 300px;
    margin-top: -20%;
    margin-left: -10%;
  }
  .el-message-box__title{
    text-align: center;
    color: #42bd56;
    font-size: 25px;
    margin-top: 10px;
  }
  input{
    width: 80%;
    height: 30px;
    margin-top: 10px;
  }

  .el-message-box__message i{
    margin-left: 10px;
  }
  .el-button--primary{
    display: none;
  }
  .el-button--default{
    width: 100%;
    background-color: #42bd56;
    color: white;
    border-radius: 5px;
  }
  .el-message-box__message{
    margin-top: -10px;
  }
  input{
    border: 1px solid darkgray;
    border-radius: 5px;
  }
  .el-message-box{
    border-radius: 12px;
  }

</style>
