<template>
<div class="search_bar">

  <i class="fa fa-navicon"></i>

  <div class="input">
    <span class="jd">JD</span>
    <span class="line"></span>
    <i class="fa fa-search"></i>
    <input type="text" placeholder="电脑主机">
  </div>

  <span>登录</span>

</div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.search_bar{
  height: 1.17rem;
  line-height: 1.17rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  // background: rgba(228, 49, 48, 1);
  background: rgba(142, 74, 1, 1);
  z-index: 99999;
  > i {
    float: left;
    font-size: .48rem;
    width: 1.17rem;
    text-align: center;
    height: 100%;
    line-height: 1.17rem;
  }
  > div {
    float: left;
    width: 7.28rem;
    height: .8rem;
    line-height: .8rem;
    margin-top: .19rem;
    background: white;
    border-radius: .4rem;
    .jd {
      font-size: .4rem;
      float: left;
      color: rgba(228, 49, 48, 1);
      font-weight: bold;
      margin-left: .4rem;
    }
    .line {
      float: left;
      width: .03rem;
      height: .4rem;
      background-color: #ccc;
      margin-top: .2rem;
      margin-left: .2rem;
    }
    i {
      font-size: .4rem;
      color: #ccc;
      float: left;
      line-height: .8rem;
      margin-left: .2rem;
    }
    input {
      float: left;
      line-height: .8rem;
      padding: 0;
      margin: 0;
      outline: none;
      border: none;
      padding-left: .2rem;
    }
  }
  > span {
    float: right;
    font-size: .37rem;
    width: 1.55rem;
    text-align: center;
  }
}
</style>
