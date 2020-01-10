<template lang="html">
<div class="scroll_good" @click="buy">
  <div>
    <img :src='item.src' alt="">
  </div>
  <div>{{item.current_price | currency}}</div>
  <div>{{item.original_price | currency}}</div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['item'],
  methods: {
    ...mapMutations(['updateOrderArr']),
    // 购买商品
    buy() {
      this.$messagebox.confirm('你确定要购买吗？').then(action=>{
        if (action === 'confirm') {
          // 构造一个商品item
          // 使用时间戳来指定商品的唯一性
          let item = {
            ...this.item,
            t: Date.now()
          }
          console.log(item)
          this.updateOrderArr({type:"insert", item: item})
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll_good {
  width: 2rem;
  box-sizing: border-box;
  padding: .07rem;
  height: 100%;
  >div:nth-child(1) {
    text-align: center;
    > img {
      display: inline-block;
      width: 1.76rem;
      height: 1.76rem;
    }
  }
  >div:nth-child(2) {
    font-size: .43rem;
    color: #e93b3d;
    font-weight: bold;
  }
  >div:nth-child(3) {
    font-size: .32rem;
    color: #999999;
  }
}
</style>
