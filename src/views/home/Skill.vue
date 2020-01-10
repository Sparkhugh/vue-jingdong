<template>
<div class="seckill">
  <div class="top">
    <span><img :src="icons.skillIcon" alt=""></span>
    <span>0点场</span>
    <span>02:10:47</span>
    <span>
      更多秒杀 <i class="fa fa-chevron-circle-right"></i>
    </span>
  </div>
  <div class="bottom">
    <div class="bottom_list">
      <div v-for="(item, idx) in skillArr" :key='idx'>
        <SkillGood :item='item'></SkillGood>
      </div>
    </div>

  </div>
</div>
</template>

<script>
import { icons } from '@/assets/index'
import { mapState, mapActions } from 'vuex'
import SkillGood from './SkillGood.vue'
export default {
  data: function() {
    return {
      icons
    }
  },
  components: {
    SkillGood     // 单个商品组件
  },
  computed: {
    ...mapState(['skillArr'])
  },
  mounted() {
    // 实现缓存
    if (this.skillArr.length === 0) {
      this.getSkillGoods()
    }
  },
  methods: {
    ...mapActions(['getSkillGoods'])
  }
}
</script>

<style lang='scss' scoped>
.seckill {
  background: white;
  width: 9.47rem;
  margin: 0 auto;
  height: 4.11rem;
  box-shadow: 0 1px 1px #f2f2f2;
  border-radius: .13rem;
  margin-top: .29rem;
  .top {
    height: .91rem;
    line-height: 0.91rem;
    width: 100%;
    overflow: hidden;
    >span:nth-child(1) {
      float: left;
      margin-left: .13rem;
      img {
        display: inline-block;
        width: 1.93rem;
        height: .72rem;
      }
    }
    >span:nth-child(2) {
      float: left;
      color: #232326;
      font-size: .32rem;
      font-weight: bold;
      margin: 0 .13rem;
    }
    >span:nth-child(3) {
      float: left;
      color: #232326;
      font-size: .32rem;
      padding: 0 .13rem;
      height: .53rem;
      line-height: .53rem;
      margin-top: .19rem;
      text-align: center;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: .07rem;
    }
    >span:nth-child(4) {
      float: right;
      color: #f23030;
      font-size: .32rem;
      margin: .13rem;
    }
  }
  .bottom {
    height: 3.2rem;
    overflow: scroll;
    .bottom_list {
      width: 22rem;
      height: 100%;
      >div {
        display: inline-block;
        width: 2rem;
        height: 100%;
        box-sizing: border-box;
        text-align: center;
      }
    }
  }
}
</style>
