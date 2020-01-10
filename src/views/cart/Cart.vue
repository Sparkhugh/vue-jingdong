<template>
  <div class="cart">
    <div v-if="isLogin">
      <div v-if="orderArr.length > 0">
        <OrderItem v-for="(item, idx) in orderArr" :key='idx' :item='item'></OrderItem>
      </div>
      <div v-else class="cart_no_data">
        <img :src="icons.noDataIcon" alt="">
        <span>购物车暂无商品</span>
      </div>

      <div class="cart_submit">
        <div>
          <span>共计：</span>
          <span class="cart_submit_red" v-text='orderArr.length'></span>
        </div>
        <div>
          <span>总价：</span>
          <span class="cart_submit_red" v-text='total'></span>
        </div>
        <div @touchstart='submit'>提交</div>
      </div>

    </div>
    <div v-else>
      <NoLogin></NoLogin>
    </div>

    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import NoLogin from '@/components/NoLogin.vue'
import OrderItem from './OrderItem.vue'
import { icons } from '@/assets/index'
import { mapState, mapMutations } from 'vuex'
export default {
  data: function() {
    return {
      icons
    }
  },
  components: {
    NavBar,
    NoLogin,
    OrderItem
  },
  computed: {
    ...mapState(['orderArr']),
    // 计算总价格
    total() {
      let t = 0
      this.orderArr.map((ele)=>{
        t += ele.current_price
      })
      return t
    },
    // 判断用户是否登录了
    isLogin() {
      let res = localStorage.getItem('login')
      return res && (JSON.parse(res).isLogin === 1)
    }
  },
  methods: {
    ...mapMutations(['updateOrderArr']),
    submit() {
      this.updateOrderArr({type: 'deleteAll'})
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  box-sizing: border-box;
  padding: .27rem 0;
  .cart_no_data {
    text-align: center;
    padding-top: .67rem;
    img {
      width: 3.89rem;
      height: 2.56rem;
    }
    span {
      display: block;
      font-size: .56rem;
      color: #333;
    }
  }
  .cart_submit {
    font-size: .45rem;
    box-sizing: border-box;
    padding-left: .27rem;
    line-height: 1.6rem;
    height: 1.6rem;
    width: 100%;
    overflow: hidden;
    background: white;
    position: fixed;
    bottom: 1.47rem;
    left: 0;
    right: 0;
    >div:nth-child(1) {
      float: left;
    }
    >div:nth-child(2) {
      float: left;
      margin-left: .27rem;
    }
    >div:nth-child(3) {
      float: right;
      width: 2.67rem;
      background-color: rgb(242, 39, 12);
      color: white;
      text-align: center;
    }
    .cart_submit_red {
      color: rgb(242, 39, 12);
      font-weight: bold;
    }
  }
}
</style>
