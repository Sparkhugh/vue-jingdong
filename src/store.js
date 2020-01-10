import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

import constant from '@/utils/constant'

function fetch(api, callback) {
  let res = localStorage.getItem('login')

  // 显示加载中
  axios({
    method: "GET",
    url: constant.baseUrl+api,
    headers: {
      token: JSON.parse(res).token  // token传递给后端
    }
  }).then(res=>{
    let data = null
    if (res.data.err === 0) {
      data = res.data.data
    }
    callback && callback(data)
  }).catch(err=>{
    console.log('接口请求异常', err)
  }).then(()=>{
    // 总是会执行
    // 隐藏加载中
  })
}

const store = new Vuex.Store({
  state: {
    msg: 'hello',
    userinfo: {
      name: '',
      mobile: ''
    },
    skillArr: [],
    adArr: [],
    rcmdArr: [],
    orderArr: [],
    cateArr: [],  // 所有品类数据
    curCateGroup: {},   // 用于CateGroup中数据显示
  },
  mutations: {
    // 秒杀商品列表
    updateSkillArr(state, payload) {
      state.skillArr = payload
    },
    // 京东小院商品列表
    updateAdArr(state, payload) {
      state.adArr = payload
    },
    // 推荐商品列表
    updateRcmdArr(state, payload) {
      state.rcmdArr = [...state.rcmdArr, ...payload]
    },
    // 购物车列表
    updateOrderArr(state, payload) {
      // console.log(state, payload)
      switch (payload.type) {
        case 'delete':
          // 删除一个订单
          state.orderArr.map((ele,idx)=>{
            // 用时间戳来判断商品的唯一性
            if(ele.t == payload.item.t) {
              state.orderArr.splice(idx, 1)
              return
            }
          })
          break;
        case 'deleteAll':
          // 提交购物
          state.orderArr = []
          break;
        case 'insert':
          // 添加商品
          state.orderArr.push(payload.item)
          break;
        default:
      }
    },
    // 品类页面中的所有数据
    updateCateArr(state, payload) {
      state.cateArr = payload
      // CateGroup组件中的初始化数据
      state.curCateGroup = payload[0]
    },
    // 更新CateGroup组件中所需要的数据
    updateCurCateGroup(state, payload) {
      state.curCateGroup = state.cateArr[payload]
    }
  },
  actions: {
    // 获取秒杀商品列表
    getSkillGoods(store) {
      fetch('/db/goods.json', data=>{
        // console.log(data)
        store.commit('updateSkillArr', data)
      })
    },
    // 获取京东小院中的商品列表
    getAds(store) {
      fetch('/db/ads.json', data=>{
        // console.log(data)
        store.commit('updateAdArr', data)
      })
    },
    // 获取推荐商品列表，可实现分页功能
    getRcmd(store, page) {
      fetch('/db/rcmd.json', (data)=>{
        // console.log(data)
        console.log('当前页', page)
        store.commit('updateRcmdArr', data)
      })
    },
    // 获取品类页面的数据
    getCates(store) {
      fetch('/db/cates.json', (data)=>{
        console.log(data)
        store.commit('updateCateArr', data)
      })
    }
  }
})

export default store
