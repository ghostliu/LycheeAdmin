<template>
  <el-row class="warp">
    <el-col :span="24" class="warp-breadcrum" :loading="loading">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }"><b>首页</b></el-breadcrumb-item>
        <el-breadcrumb-item>设置</el-breadcrumb-item>
        <el-breadcrumb-item>修改密码</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>

    <el-col :span="24" class="warp-main">
      <el-form ref="form" :model="form" :rules="rules" label-width="120px">
        <el-form-item label="原密码" prop="oldPwd">
          <el-input v-model="form.oldPwd"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPwd">
          <el-input v-model="form.newPwd"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码" prop="confirmPwd">
          <el-input v-model="form.confirmPwd"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="default" @click="handleChangepwd">提交</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>
<script>
  import API from '../../api/api_user';

  export default{
    data(){
      var validatorPass = (rule,value,callback) => { 
          if (value == '') {
            callback(new Error("请输入新密码"));
          } else {
            if (this.form.confirmPwd !== '') {
              this.$refs.form.validateField('confirmPwd');
            }
            callback();
          }
      };
      var validatorPass2 = (rule,value,callback) => { 
          if (value == '') {
            callback(new Error("请再次输入密码"));
          } else if (value !== this.form.newPwd) {
            callback(new Error("两次输入的密码不一致"));
          } else {
            callback();
          }
      };
      return {
        loading:false,
        form: {
          oldPwd: '',
          newPwd: '',
          confirmPwd: ''
        },
        rules: {
          oldPwd:[
            {required:true,message:"请输入原始密码",trigger:"blur"}
          ],
          newPwd: [
            {validator:validatorPass,trigger:"blur"}
          ],
          confirmPwd: [
            {validator:validatorPass2,trigger:"blur"}
          ]
        }
      }
    },
    methods: {
      handleChangepwd() {
        let that = this;
        that.$refs.form.validate((valid) => {
          that.loading = true;
          if (valid){
            let args = {
              oldPwd: that.form.oldPwd,
              newPwd: that.form.newPwd,
              confirmPwd: that.form.confirmPwd
            }
            API.changePassword(args).then(function(result){
              that.loading = false;
              if (result && parseInt(result.errcode) === 0) {
                that.$message.success({showClose: true, message: '修改成功', duration: 2000});
                localStorage.removeItem('access-user');
                //that.$router.go('/login'); //用go刷新        
              } else {
                that.$message.error({showClose: true, message:result.errmsg, duration: 2000});
              }
            },function(err) {
              that.loading = false;
              that.$message.error({showClose: true, message: err.toString(), duration: 2000});
            }).catch(function(err){
              that.loading = false;
              that.$message.error({showClose: true, message: '请求出现异常', duration: 2000});
            });
          }
        });
      }
    }
  }
</script>
