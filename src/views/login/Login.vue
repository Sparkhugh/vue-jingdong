<template>
<div class="user_login">
  <div class="ul_username">
    <input type="text" name="" value="" placeholder="请输入用户名">
  </div>
  <div class="ul_password">
    <input type="text" name="" value="" placeholder="请输入密码">
  </div>
  <div class="ul_login_btn ul_login_btn1" @touchstart='login'>登录</div>
  <div class="ul_login_btn ul_login_btn2">一键登录</div>
  <div class="ul_login_more">
    <span>短信验证码登录</span>
    <span>手机快速注册</span>
  </div>
</div>
</template>

<script>
// import { mapMutations } from 'vuex'
export default {
  methods: {
    // 登录
    login() {
      // 获取用户名、密码
      // 数据验证
      // 提交接口
      // res代表登录成功后，后端返回的数据信息，其中包括token和其它用户数据
      let res = {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        isLogin: 1
      }
      localStorage.setItem('login', JSON.stringify(res))
      this.$toast({
        message: '登录成功',
        duration: 2000
      })
      setTimeout(()=>{
        this.$router.replace('/home')
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
.user_login {
  box-sizing: border-box;
  padding: 0 0.5rem;
  background-color: white;
  input {
    border: none;
    outline: none;
    line-height: 1.33rem;
  }
  .ul_username, .ul_password {
    line-height: 1.33rem;
    border-bottom: 1px solid #eee;
    // margin-top: .53rem;
  }
  .ul_login_btn {
    height: 1.33rem;
    line-height: 1.33rem;
    text-align: center;
    font-size: .4rem;
    border: 1px solid rgb(255, 49, 9);
    border-radius: .67rem;
    margin-top: .53rem;
    color: rgb(255, 49, 9);
  }
  .ul_login_btn1 {
    background-color: rgb(255, 49, 9);
    color: white;
  }
  .ul_login_more {
    color: rgba(0,0,0,0.4);
    font-size: .37rem;
    line-height: 1.33rem;
    height: 1.33rem;
    overflow: hidden;
    > span:first-child {
      float: left;
    }
    > span:last-child {
      float: right;
    }
  }
}
</style>
