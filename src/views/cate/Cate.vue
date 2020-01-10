<template lang="html">
<div>
  <NavBar index='1'></NavBar>

  <CateList></CateList>
  <CateGroup></CateGroup>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import CateList from './CateList.vue'
import CateGroup from './CateGroup.vue'

export default {
  components: {
    NavBar,
    CateList,
    CateGroup
  }
}
</script>

<style lang="css" scoped>
</style>
