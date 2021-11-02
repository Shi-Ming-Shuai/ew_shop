<template>
  <div class="Home">
    <!-- 公共导航栏 -->
    <van-nav-bar title="图书兄弟" left-arrow @click-left="$router.back()" />
    <!-- 轮播图 -->
    <Banner :bannerList="bannerList" />
    <!-- 推荐商品 -->
    <RecommendGoods :reGoodsList="reGoodsList" />
    <!-- 选项卡 -->
    <TabControl :tabList="tabList" />
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
// 请求
import { getHomeData } from '@/network/home'
// 组件
import Banner from './childCpn/Banner'
import RecommendGoods from './childCpn/RecommendGoods'
import TabControl from '@/components/content/tabControl/TabControl'

export default {
  name: 'Home',
  props: {},
  components: { Banner, RecommendGoods, TabControl },
  setup() {
    onMounted(() => {
      getHome()
    })
    const state = reactive({
      bannerList: [],
      reGoodsList: [],
      tabList: [
        { title: '畅销', type: 'sales' },
        { title: '新书', type: 'new' },
        { title: '推荐', type: 'recommend' }
      ]
    })
    // 请求
    async function getHome() {
      const res = await getHomeData()
      // 轮播图
      state.bannerList = res.slides
      state.reGoodsList = res.goods.data
      console.log(res)
    }
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="less">
.my-swipe .van-swipe-item {
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
