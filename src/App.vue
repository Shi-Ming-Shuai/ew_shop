<template>
  <div>
    <!-- 一级路由出口 -->
    <!-- transition而keep-alive现在必须使用内部的RouterView通过v-slotAPI： -->
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive :exclude="['Detaile']">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
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
#app {
  padding-top: 46px;
  padding-bottom: 50px;
}
</style>
