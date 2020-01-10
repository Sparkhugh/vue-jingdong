<template>
<div class="cates">
  <mt-swipe :continuous='false' :auto='0' :showIndicators='false'>

    <mt-swipe-item>
      <div class="cates_item">
        <div v-for="(item, idx) in cateArr1" :key='idx'>
          <img :src="item.src" alt="cate">
          <span v-text="item.cate"></span>
        </div>
      </div>
    </mt-swipe-item>

    <mt-swipe-item>
      <div class="cates_item">
        <div v-for="(item,idx) in cateArr2" :key='idx'>
          <img :src='item.src' alt="cate">
          <span v-text='item.cate'></span>
        </div>
      </div>
    </mt-swipe-item>

  </mt-swipe>
</div>
</template>

<script>
import { cates } from '@/assets/index'
export default {
  data: function() {
    return {
      cates
    }
  },
  computed: {
    cateArr1() {
      return this.cates.slice(0, 10)
    },
    cateArr2() {
      return this.cates.slice(10)
    }
  }
}
</script>

<style lang="scss" scoped>
.cates {
  height: 4.27rem;
  .cates_item {
    height: 100%;
    width: 100%;
    overflow: hidden;
    > div {
      float: left;
      width: 20%;
      text-align: center;
      padding: .13rem 0;
      > img {
        display: inline-block;
        width: 1.07rem;
        height: 1.07rem;
      }
      > span {
        display: block;
        font-size: .32rem;
        color: #666666;
      }
    }
  }
}
</style>
