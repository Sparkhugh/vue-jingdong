<template lang="html">
<!-- <mt-cell-swipe
  :right="[{
    content: 'Delete',
    style: { background: 'red', color: '#fff', fontSize: '0.32rem' },
    handler: deleteHandle
  }]">
</mt-cell-swipe> -->

  <div class="order_item" @touchstart='start' @touchend='end'>
    <img :src="item.src" alt="">
    <span class="oi_decs" v-text='item.desc + "89439884398439843843984389438438943843894389439843"'>desc</span>
    <span class="oi_price">{{item.current_price | currency}}</span>
    <span class="oi-time">{{item.t | time}}</span>
  </div>

</template>

<script>
import { mapMutations } from 'vuex'
import moment from 'moment'
export default {
  props: ['item'],
  data: function() {
    return {
      startTime: 0
    }
  },
  // 局部过滤器
  filters: {
    time(value) {
      return moment(value).format('MM-DD')
    }
  },
  methods: {
    ...mapMutations(['updateOrderArr']),
    start() {
      this.startTime = Date.now()
    },
    end() {
      // 用touch事件、时间戳来模拟长按事件
      if (Date.now() - this.startTime > 1000) {
        // 添加一个用户提示框
        this.$messagebox.confirm('你确定要删除这个订单吗?').then(action => {
          if(action === 'confirm') {
            // 执行删除
            console.log('删除')
            // 构造一个payload，type表示是删除一个商品
            this.updateOrderArr({type: 'delete', item: this.item})
          }
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.mint-cell-wrapper {
  padding: 0 !important;
}
.order_item {
  height: 1.6rem;
  display: block;
  width: 10rem;
  overflow: hidden;
  background: white;
  border-bottom: 1px solid #ddd;
  line-height: 1.6rem;
  // box-sizing: border-box;
  >img {
    float: left;
    width: 1.33rem;
    height: 1.33rem;
    margin-top: .13rem;
    margin-left: .27rem;
  }
  .oi_decs {
    font-size: .43rem;
    float: left;
    margin-left: .27rem;
    width: 5.33rem;
    // 超出宽度，显示省略号
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .oi_price {
    float: right;
    font-size: .53rem;
    color: rgba(242, 39, 12, 1);
    margin-right: .27rem;
  }
  .oi-time {
    font-size: .32rem;
    margin-right: .13rem;
    float: right;
  }
}
</style>
