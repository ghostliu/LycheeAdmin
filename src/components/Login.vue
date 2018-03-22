<template>
  <div class="login-2018">
    <div class="login-2018-topbar">
      <a class="login-2018-topbar-logo" href="//www.lizhi98.pub">
            <img class="black" src="//img.alicdn.com/tps/TB16hl5LpXXXXXRXVXXXXXXXXXX-198-46.png">
            <img class="black" src="//img.alicdn.com/tps/TB1BQh7LpXXXXcJXFXXXXXXXXXX-198-46.gif">
      </a>

      <ul class="login-2018-link">
          <li>
              <a href="//www.lizhi98.pub">首页</a>
          </li>
      </ul>
    </div>
    <div class="login-2018-body">
        <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
          <h3 class="title">管理员登录</h3>
          <el-form-item prop="username">
            <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
          <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin" :loading="loading">登录</el-button>
          </el-form-item>
        </el-form>  
    </div>
  </div>
</template>

<script>
  import API from '../api/api_user';

  export default {
    data() {
      return {
        loading: false,
        account: {
          username: 'admin',
          pwd: '123456'
        },
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            //{ validator: validaePass }
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleLogin() {
        let that = this;
        this.$refs.AccountFrom.validate((valid) => {
          if (valid) {
            this.loading = true;
            let loginParams = {username: this.account.username, pwd: this.account.pwd};
            API.login(loginParams).then(function (result) {
              that.loading = false;
              if (result && result.id) {
                localStorage.setItem('access-user', JSON.stringify(result));
//                that.$store.commit('SET_ROUTERS', user.permissions)
//                that.$router.addRoutes(that.$store.getters.addRouters);
//                that.$router.options.routes = that.$store.getters.routers;
                that.$router.push({path: '/manage'});
              } else {
                that.$message.error({showClose: true, message: result.errmsg || '登录失败', duration: 2000});
              }
            }, function (err) {
              that.loading = false;
              that.$message.error({showClose: true, message: err.toString(), duration: 2000});
            }).catch(function (error) {
              that.loading = false;
              console.log(error);
              that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
            });
          }
        });
      }
    }
  }
</script>
<style>
  body {
    background: #1d2024;
    zoom: 1;
  }
</style>
<style lang="scss" scoped>
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 0px;
    border-radius: 0px;
    -moz-border-radius: 0px;
    background-clip: padding-box;
    margin: 160px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    /*box-shadow: 0 0 25px #cac6c6;*/

    background: -ms-linear-gradient(top, #fff, #fff); /* IE 10 */
    background: -moz-linear-gradient(top, #fff, #fff); /*火狐*/
    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(#ace), to(#00C1DE)); /*谷歌*/
    background: -webkit-linear-gradient(top, #fff, #fff); /*Safari5.1 Chrome 10+*/
    background: -o-linear-gradient(top,#fff, #fff); /*Opera 11.10+*/

    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
  .login-2018 {
    background-color: #1F2325;
    background-image: url(//gw.alicdn.com/tfs/TB1ittHRFXXXXcSXFXXXXXXXXXX-2880-1280.jpg);
    background-size: cover;
  }
  .login-2018 .login-2018-topbar {
    height: 60px;
    position: relative;
    border-bottom: 1px solid rgba(255,255,255,0.3);
  }
  .login-2018 .login-2018-topbar .login-2018-topbar-logo img {
    left: 20px;
    height: 24px;
    position: absolute;
    z-index: 1;
    top: 14px;
  }
  .login-2018 .login-2018-topbar .login-2018-topbar-logo img:first-child {
      z-index: 2;
  }
  .login-2018 .login-2018-body {
    text-align: center;
    height: 100%;
  }
  .login-2018 .login-2018-topbar .login-2018-site-switch {
      float: right;
  }
  .login-2018 .login-2018-topbar .login-2018-link {
    position: relative;
    height: 60px;
    line-height: 60px;
    color: #fff;
    cursor: default;
    font-size: 14px;
    padding: 0 25px 0 35px;
    margin: 0;
    list-style: none;
    padding-left: 10px;
    float: right;
  }
  a:link, a:visited {
      color: #fff;
  }
  a:hover {
    color:#00c1de;
  }
</style>
