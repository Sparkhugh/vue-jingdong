<template lang="html">
<div class="cate_ad">

  <div class="cate_ad_top_a" v-if="item.type === 1">
    <div v-text='item.list[0].title'>萌宝日记</div>
    <div v-text='item.list[0].desc'>吾家有宝初成长</div>
  </div>
  <div class="cate_ad_top_b" v-else>
    <div>
      <div v-text='item.list[0].title'>男得好货</div>
      <div v-text='item.list[0].desc'>高颜值好货</div>
    </div>
    <div>
      <div v-text='item.list[1].title'>男得好货</div>
      <div v-text='item.list[1].desc'>高颜值好货</div>
    </div>
  </div>

  <div class="cate_ad_bottom">
    <div>
      <img :src="item.list[0].src" alt="">
    </div>
    <div>
      <img :src="item.list[1].src" alt="">
    </div>
  </div>
</div>
</template>

<script>
export default {
  // props: ['type', 'item'],
  props: ['item'],
  mounted() {
    // console.log(this)
  }
}
</script>

<style lang="scss" scoped>
.cate_ad {
  background-color: white;
  width: 4.69rem;
  height: 3.2rem;
  padding: .19rem;
  box-sizing: border-box;
  overflow: hidden;
  display: inline-block;
  margin: 0;
  .cate_ad_top_a {
    text-align: left;
    >div:first-child {
      font-size: .43rem;
      color: rgba(25, 123, 251, 1);
    }
    >div:nth-child(2) {
      color: #666771;
      font-size: .32rem;
    }
  }
  .cate_ad_top_b {
    display: flex;
    text-align: left;
    > div {
      flex: 1;
      > div:nth-child(1) {
        display: block;
        font-size: .43rem;
        color: black;
      }
      > div:nth-child(2) {
        font-size: .32rem;
        color: #666771;
      }
    }
  }
  .cate_ad_bottom {
    display: flex;
    > div {
      flex: 1;
      text-align: center;
      vertical-align: middle;
      height: 100%;
      > img {
        width: 1.6rem;
        height: 1.6rem;
        display: inline-block;
        margin-top: .19rem;
      }
    }
  }
}
</style>
