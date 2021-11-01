<template>
  <div class="TabBar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">分类</van-tabbar-item>
      <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'TabBar',
  props: {},
  components: {},
  setup() {
    const active = ref(0)
    return { active }
  }
}
</script>

<style scoped lang="less"></style>
