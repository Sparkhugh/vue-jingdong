<template>
<div class="rcmd">
  <div><img :src="item.src" alt="1912"></div>
  <div v-text='item.desc'></div>
  <div>
    <span>{{item.current_price | currency}}</span>
    <span>看相似</span>
  </div>
</div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang='scss' scoped>
.rcmd {
  width: 4.67rem;
  height: 7.07rem;
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  background: white;
  padding: .13rem;
  margin: 0 .07rem;
  >div:nth-child(1) {
    img {
      display: inline-block;
      width: 4.67rem;
      height: 4.67rem;
    }
  }
  >div:nth-child(2) {
    font-size: #232326;
    font-size: .35rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-align: left;
    line-height: .48rem;
  }
  >div:nth-child(3) {
    height: .8rem;
    width: 100%;
    line-height: .8rem;
    margin-top: .16rem;
    >span:nth-child(1) {
      float: left;
      color: #f23030;
      font-weight: bold;
      font-size: .43rem;
    }
    >span:nth-child(2) {
      float: right;
      color: #686868;
      font-size: .32rem;
      height: .64rem;
      line-height: .64rem;
      border: 1px solid #686868;
      padding: 0 .13rem;
      border-radius: .07rem;
    }
  }
}
</style>
