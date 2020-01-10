<template>
<div class="banner">
  <img :src='ads.ad1' alt="ad">
  <img :src='ads.ad2' alt="ad">
  <img :src='ads.ad3' alt="ad">
</div>
</template>

<script>

import { ads } from '@/assets/index'
export default {
  data: function() {
    return {
      ads
    }
  }
}

</script>

<style lang='scss' scoped>
.banner {
  width: 100%;
  height: 2.67rem;
  overflow: hidden;
  img {
    float: left;
    width: 33.333%;
    height: 100%;
  }
}
</style>
