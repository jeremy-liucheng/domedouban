<template>
  <div class="con">
    <p>分类浏览</p>
    <table>
      <tr>
          <td>经典</td>
          <span class="el-icon-arrow-right"></span>
          <td>冷门佳片</td>
          <span class="el-icon-arrow-right"></span>
      </tr>
      <tr>
        <td>豆瓣高分</td>
        <span class="el-icon-arrow-right"></span>
        <td>动作</td>
        <span class="el-icon-arrow-right"></span>
      </tr>
      <tr>
        <td>喜剧</td>
        <span class="el-icon-arrow-right"></span>
        <td>爱情</td>
        <span class="el-icon-arrow-right"></span>
      </tr>
      <tr>
        <td>悬疑</td>
        <span class="el-icon-arrow-right"></span>
        <td>恐怖</td>
        <span class="el-icon-arrow-right"></span>
      </tr>
      <tr>
        <td>科幻</td>
        <span class="el-icon-arrow-right"></span>
        <td>治愈</td>
        <span class="el-icon-arrow-right"></span>
      </tr>
      <tr>
        <td>文艺</td>
        <span class="el-icon-arrow-right"></span>
        <td>成长</td>
        <span class="el-icon-arrow-right"></span>
      </tr>
      <tr>
        <td>动画</td>
        <span class="el-icon-arrow-right"></span>
        <td>华语</td>
        <span class="el-icon-arrow-right"></span>
      </tr>
      <tr>
        <td>欧美</td>
        <span class="el-icon-arrow-right"></span>
        <td>韩国</td>
        <span class="el-icon-arrow-right"></span>
      </tr>
      <tr>
        <td>日本</td>
        <span class="el-icon-arrow-right"></span>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

  p{
    margin-top: 15px;
    margin-bottom: 15px;
  }
  .con{
    padding-left: 10px;
  }
  span{
    margin-left: 75px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  td{
    color: #42bd56;
  }
  .el-icon-arrow-right{
    color: gainsboro;
  }
  tr{

    border-right: 1px solid gainsboro;
    border-top: 1px solid gainsboro;
    border-bottom: 1px solid gainsboro;
  }


</style>
