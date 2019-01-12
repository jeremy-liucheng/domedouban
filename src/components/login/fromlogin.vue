<template>
  <div>
      <span class="span con-left"><el-button type="text" @click="open4">请先登录</el-button></span>
    <div class="con-right">
      <span class="el-icon-edit " @click="open4"><el-button type="text"></el-button></span>
      <span class="el-icon-mobile-phone " @click="open4"><el-button type="text"></el-button></span>
    </div>
    <div class="clear"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      open4() {
        const h = this.$createElement;
        this.$msgbox({
          title: '欢迎加入豆瓣',
          message: h('p', null, [
            h('input',{placeholder:"请输入账号" }, ),
            h('i', { style: 'color: #42bd56' ,}, '账号'),
            h('input', { placeholder:"请输入账号"}, ),
            h('i', { style: 'color: #42bd56' }, '密码'),
            h('input', { placeholder:"请输入账号"}, ),
            h('i', { style: 'color: #42bd56' }, '昵称'),
            h('p', { style: {"marginTop": "5%","color": "red","marginLeft": "5%"} }, '登录注册表示同意 豆瓣使用协议、隐私政策'),
            // h('buttton', { style: {"marginTop": "5%","color": "white","marginLeft": "5%","backgroundColor":"#42bd56","height":"80px"} }, '登录'),
          ]),
          showCancelButton: true,
          confirmButtonText: '登陆',
          cancelButtonText: '登陆',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = '执行中...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      }
    }
  }
</script>

<style scoped>
  .con-left{
    float: left;
    color: darkgray;
    margin-top: 5%;
    margin-left: 3%;
    margin-bottom: 5%;
    width: 140px;
    position: relative;
  }
  .con-right{
    width: 100%;
    position: absolute;
    top: 24%;
    left: 180%;
  }
  .el-icon-edit{
    width: 40px;
    font-size: 24px;
    color: darkgray;
  }
  .el-icon-mobile-phone{
    font-size: 24px;
    color: darkgray;
  }
  .span{
    position: absolute;
    top: -10%;
    left: 40%;
  }

</style>
