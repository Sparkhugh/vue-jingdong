<template lang="html">
<div class="home">

  <!-- 顶部搜索框组件 -->
  <SearchBar></SearchBar>
  <!-- 底部导航组件 -->
  <NavBar index='0'></NavBar>

  <!-- 轮播图组件 -->
  <div class="swiper_box">
    <Swiper></Swiper>
  </div>

  <div class="content">
    <!-- 分类组件 -->
    <Cates></Cates>
    <!-- 广告位组件 -->
    <Banner></Banner>
    <!-- 秒杀组件 -->
    <Skill></Skill>
    <!-- 东家小院 -->
    <div class="ad_store_wrap">
      <AdStore v-for="(item, idx) in adArr" :key='idx' :item='item'></AdStore>
    </div>
    <!-- 为你推荐 -->
    <div class="wrapper">
      <div class="rcmd_wrap">
        <div class="rcmd_wrap_title">
          <img :src="icons.rcmdIcon" alt="1">
        </div>
        <Rcmd v-for='(item, idx) in rcmdArr' :key='idx' :item='item'></Rcmd>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import SearchBar from './SearchBar.vue'
import Swiper from './Swiper.vue'
import Cates from './Cates.vue'
import Banner from './Banner.vue'
import Skill from './Skill.vue'
import AdStore from './AdStore.vue'
import Rcmd from './Rcmd.vue'

import { mapActions, mapState } from 'vuex'
import { icons } from '@/assets/index'
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
export default {
  data: function() {
    return {
      icons,
      page: 1
    }
  },
  components: {
    SearchBar,  // 顶部搜索框组件
    NavBar,     // 底部导航组件
    Swiper,     // 轮播图组件
    Cates,      // 分类导航组件
    Banner,     // 广告位组件
    Skill,      // 秒杀组件
    AdStore,    // 京东小院组件
    Rcmd        // 推荐商品组件
  },
  computed: {
    ...mapState(['adArr', 'rcmdArr'])
  },
  mounted() {
    // 实现数据缓存
    if (this.rcmdArr.length === 0) {
      this.getRcmd(this.page)
    }
    if (this.adArr.length === 0) {
      this.getAds()
    }
    // 实现滚动加载功能
    BScroll.use(Pullup)
    // let wrapper = document.querySelector('.rcmd_wrap')
    let bs = new BScroll('.wrapper', {
      // probeType: 3,
      // pullUpLoad: true,
      // scrollY: true,
      pullUpLoad: true,
      threshold: -60,
      click: true,
      tap: true
    })
    bs.on('pullingUp', ()=>{
      console.log('up')
      alert('up')
      // console.log('scroll end')
      this.page++
      this.getRcmd(this.page)
      this.timer = setTimeout(()=>{
        bs.refresh()
      },1000)
    })
    bs.on('scrollEnd', ()=>{
      console.log('scroll end')
      this.getRcmd(this.page)
    })
  },

  methods: {
    ...mapActions(['getAds', 'getRcmd'])
  },
  destoryed() {
    // 清除定时器
    this.timer = null
    clearTimeout(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding-bottom: 2.67rem;
  .swiper_box {
    width: 100%;
    height: 4.99rem;
    background: rgba(142, 74, 1, 1);
    box-sizing: border-box;
    padding-top: 1.17rem;
    text-align: center;
  }
  .content {
    background-color: rgba(246,246,246,1);
    .ad_store_wrap {
      padding: 0 0.31rem;
      margin-top: .29rem;
    }
    .wrapper {

      .rcmd_wrap {
        text-align: center;
        .rcmd_wrap_title {
          height: .93rem;
          line-height: .93rem;
          text-align: center;
          .img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
