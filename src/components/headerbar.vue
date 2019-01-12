<template>
  <div>
    <h2 @click="home()">豆瓣</h2>
    <ul>
      <li class="movie"><router-link to="/movie">电影</router-link></li>
      <li class="radio"><router-link to="/radio">广播</router-link></li>
      <li class="class"><router-link to="/team">小组</router-link></li>
      <li class="book"><router-link to="/book">图书</router-link></li>
      <li><router-link to="/login"></router-link></li>
    </ul>
  </div>
</template>
<script>
  export default {
    methods:{
      home(){
         this.$router.push("/home")
      }
    }
  }
</script>
<style scoped>
  p{
    display: inline-block;
  }
  ul,ul>li{
     display: inline-block;
   }
  a{
    text-decoration: none;
  }
  ul{
    margin-left: 70px;
  }
  li{
    margin-left: 10px;
  }
  .movie a{
    color: #2384E8;
  }
  .radio a{
    color: #9F7860;
  }
  .class a{
    color: #E4A813;
  }
  .book a{
    color: #2AB8CC;
  }
  h2{
    color: #00b600;
    display: inline-block;
    margin: 5px;
    padding: 5px;
  }
</style>

