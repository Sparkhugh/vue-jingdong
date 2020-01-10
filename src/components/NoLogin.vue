<template lang="html">
<div class="no_login">
  <div class="no_login_top">
    <span>登录后可同步账户购物车中的商品</span>
    <span @touchstart='skipToLogin'>登录</span>
  </div>
  <div class="no_login_bottom">
    <img :src="icons.noLoginIcon" alt="">
    <span>登录后可同步购物车中的商品</span>
  </div>
</div>
</template>

<script>
import { icons } from '@/assets/index'
export default {
  data: function() {
    return {
      icons
    }
  },
  methods: {
    // 跳转至登录页
    skipToLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.no_login {
  .no_login_top {
    height: 1.6rem;
    line-height: 1.6rem;
    font-size: .37rem;
    text-align: center;
    background-color: white;
    >span:nth-child(1) {
      color: #333;
    }
    >span:nth-child(2) {
      width: 1.87rem;
      height: .8rem;
      background: #f2270c;
      border-radius: .11rem;
      display: inline-block;
      vertical-align: middle;
      line-height: .8rem;
      color: white;
      text-align: center;
      margin-left: .13rem;
    }
  }
  .no_login_bottom {
    text-align: center;
    background-color: rgba(247, 247, 247, 1);
    > img {
      display: inline-block;
      width: 1.2rem;
      height: 1.2rem;
      margin-top: 1.6rem;
    }
    > span {
      display: block;
      font-size: .43rem;
      color: #333;
    }
  }
}
</style>
