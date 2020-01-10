<template lang="html">
  <div>
    <NavBar index='4'></NavBar>

    <div class="user_data">
      <div>
        <span>35</span><span>订单</span>
      </div>
      <div>
        <span>100</span><span>商品收藏</span>
      </div>
      <div>
        <span>100</span><span>店铺收藏</span>
      </div>
      <div>
        <span>100</span><span>我的足迹</span>
      </div>
    </div>

    <div class="user_data">
      <div>
        <span>35</span><span>订单</span>
      </div>
      <div>
        <span>100</span><span>商品收藏</span>
      </div>
      <div>
        <span>100</span><span>店铺收藏</span>
      </div>
      <div>
        <span>100</span><span>我的足迹</span>
      </div>
    </div>

    <div class="user_logout">
      <span @touchstart='logout'>退出登录</span>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  components: {
    NavBar
  },
  // 局部路由守卫、登录拦截
  beforeRouteEnter(to, from, next) {
    // 页面组件未实例化，无法访问this
    console.log(this)
    let res = localStorage.getItem('login')
    // 1-如果res不存在，则表示用户未登录
    if (res) {
      let isLogin = JSON.parse(res).isLogin
      // 如果isLogin不等于1，则表示用户也未登录
      if (isLogin === 1) {
        next()
      } else {
        // 跳转至登录页
        next('/login')
      }
    } else {
      // 跳转至登录页
      next('/login')
    }
  },
  methods: {
    // 退出登录
    logout() {
      // 清除localStorage中的login字段
      localStorage.removeItem('login')
      // 跳转至首页
      this.$router.replace('/home')
    }
  }
}
</script>

<style lang="scss" scoped>
.user_data {
  width: 100%;
  height: 1.87rem;
  display: flex;
  background-color: white;
  margin-bottom: .67rem;
  > div {
    flex: 1;
    text-align: center;
    > span:first-child {
      font-size: .43rem;
      color: #333333;
      display: block;
      font-weight: bold;
      line-height: 1.07rem;
      color: rgb(255, 49, 9);
    }
    > span:last-child {
      font-size: .32rem;
      color: #666666;
      display: block;
      line-height: .67rem;
    }
  }
}
.user_logout {
  margin-top: 1.07rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0 .4rem;
  > span {
    display: block;
    width: 100%;
    height: 1.33rem;
    line-height: 1.33rem;
    text-align: center;
    font-size: .4rem;
    border: 1px solid rgb(255, 49, 9);
    border-radius: .67rem;
    margin-top: .53rem;
    color: rgb(255, 49, 9);
    background-color: rgb(255, 49, 9);
    color: white;
  }
}
</style>
