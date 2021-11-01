<template>
  <div id="app">
    <!-- 一级路由出口 -->
    <router-view />
    <!-- 底部标签栏 -->
    <TabBar />
  </div>
</template>

<script>
// 底部标签栏
import TabBar from '@/components/common/TabBar'
export default {
  name: 'App',
  components: { TabBar }
}
</script>

<style lang="less">
// 全局样式
@import '~@/assets/css/global.css';
</style>
