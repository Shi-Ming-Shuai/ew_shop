<template>
  <div class="Home">
    <!-- 回到顶部 -->
    <BackTop v-show="isShowBackTop" @backTop="backTop" />
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
import { reactive, ref, toRefs, onMounted, onUnmounted } from 'vue'
// 请求
import { getHomeData } from '@/network/home'
// 组件
import Banner from './childCpn/Banner'
import RecommendGoods from './childCpn/RecommendGoods'
import TabControl from '@/components/content/tabControl/TabControl'
import BackTop from '@/components/common/BackTop'

export default {
  name: 'Home',
  props: {},
  components: { Banner, RecommendGoods, TabControl, BackTop },
  setup() {
    onMounted(() => {
      getHome()
      window.addEventListener('scroll', scrollToTop)
    })
    onUnmounted(() => {
      // 删除scroll事件 防止下一次又添加
      window.removeEventListener('scroll', scrollToTop)
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
    // 回到顶部 使用的数据
    const currentScrollTop = ref(0)
    const isShowBackTop = ref(false)
    // 业务逻辑
    function backTop() {
      console.log('回到顶部')
      const timer = setInterval(() => {
        const ispeed = Math.floor(-currentScrollTop.value / 5)
        document.documentElement.scrollTop = document.body.scrollTop =
          currentScrollTop.value + ispeed
        if (currentScrollTop.value === 0) {
          clearInterval(timer)
        }
      }, 16)
    }
    // 为了计算距离顶部的高度，
    function scrollToTop() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      currentScrollTop.value = scrollTop
      // 当高度大于60显示回顶部图标，小于60则隐藏
      if (currentScrollTop.value > 660) {
        isShowBackTop.value = true
      } else {
        isShowBackTop.value = false
      }
    }
    // 请求
    async function getHome() {
      const res = await getHomeData()
      // 轮播图
      state.bannerList = res.slides
      state.reGoodsList = res.goods.data
      console.log(res)
    }
    return {
      ...toRefs(state),
      backTop,
      isShowBackTop
    }
  }
}
</script>

<style lang="less">
.van-sticky {
  top: 46px !important;
}
.my-swipe .van-swipe-item {
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
