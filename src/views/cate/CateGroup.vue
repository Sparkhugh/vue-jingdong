<template>
<div class="cate_group">

  <!-- 一层循环 -->
  <div class="cate_panel" v-for="(item,index) in curCateGroup.list" :key='index'>
    <div class="cate_panel_title" v-text='item.title'>文学</div>
    <div class="cate_panel_list">

      <!-- 二层循环 -->
      <!-- 这里的 item是外层循环中的item -->
      <div class="cate_panel_item" v-for="(item2, index2) in item.list" :key='index2'>
        <img :src="item2.img" alt="">
        <span v-text='item2.name'></span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['curCateGroup'])
  }
}
</script>

<style lang="scss" scoped>
.cate_group {
  position: fixed;
  left: 2.27rem;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgb(255, 255, 255);
  overflow: scroll;
  padding-bottom: 1.6rem;
  .cate_panel {
    > .cate_panel_title {
      color: #333333;
      font-size: .37rem;
      padding-left: .13rem;
      font-weight: bold;
      line-height: 1.2rem;
    }
    > .cate_panel_list {
      width: 100%;
      .cate_panel_item {
        display: inline-block;
        width: 33.3%;
        text-align: center;
        > img {
          display: inline-block;
          width: 1.87rem;
          height: 1.87rem;
        }
        > span {
          display: block;
          color: #333333;
          font-size: .32rem;
        }
      }
    }

  }
}
</style>
