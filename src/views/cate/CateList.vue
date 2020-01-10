<template>
<div class="cate_list">
  <div v-for="(item,index) in cateArr" :key='index' class="cate_item" :class="{'on': index == idx}" @touchstart="tap(index)">
    <span v-text='item.cate'></span>
  </div>
</div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  data: function() {
    return {
      idx: 0   // 当前索引号
    }
  },
  computed: {
    ...mapState(['cateArr'])
  },
  mounted() {
    this.getCates()
  },
  methods: {
    ...mapActions(['getCates']),
    ...mapMutations(['updateCurCateGroup']),
    // 一级品类项的点击事件, index代表一级品类的索引号
    tap(index) {
      console.log(index)
      // 更新一级品类列表的点亮样式
      this.idx = index
      // 更新CateGroup组件中所需要的数据
      this.updateCurCateGroup(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.cate_list {
  width: 2.27rem;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: rgb(248, 248, 248);
  overflow: scroll;
  padding-bottom: 1.6rem;
  .cate_item {
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: .37rem;
    text-align: center;
  }
  .cate_item.on {
    color: #e93b3d;
    background-color: rgb(255, 255, 255);
  }
}
</style>
