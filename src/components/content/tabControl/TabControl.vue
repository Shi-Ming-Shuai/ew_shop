<template>
  <div class="TabControl">
    <van-tabs sticky v-model:active="activeIndex" @click-tab="switchTab">
      <van-tab v-for="(item, i) in tabList" :key="i" :title="item.title">
        <!-- 上拉加载 -->
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <!-- 商品列表 tab具有懒加载 点击才展示第二个tab数据 -->
          <GoodsList :goodsLists="goodsLists[i]" />
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from 'vue'
// 请求
import { getHomeData } from '@/network/home'
// 组件
import GoodsList from '@/components/content/goods/GoodsList'
export default {
  name: 'TabControl',
  props: {
    tabList: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  components: { GoodsList },
  setup(props) {
    // 当前所在标签下标 请求分页页数
    const activeIndex = ref(0)
    const currentPage = ref(1)

    const state = reactive({
      goodsLists: [] // [], [], [] 存放tab对应的三组数据
    })
    // 生命周期
    onMounted(() => {
      getTabData()
    })

    // 请求对应标签内容
    async function getTabData(type = 'sales', page = 1, index = 0) {
      const res = await getHomeData({
        [type]: 1,
        page
      })
      const data = res.goods.data
      if (data.length < 1) {
        return true
      }
      if (page === 1) {
        // 将商品数组存入商品列表中
        state.goodsLists[index] = data
      } else {
        state.goodsLists[index].push(...data)
      }
    }
    // 切换标签
    function switchTab({ name }) {
      activeIndex.value = name
      finished.value = false
      const type = props.tabList[name].type
      getTabData(type, 1, name)
    }
    // 上拉加载状态
    const loading = ref(false)
    const finished = ref(false)

    // 上拉加载
    async function onLoad() {
      const type = props.tabList[activeIndex.value].type
      const page = ++currentPage.value
      console.log('到达底部')
      // 异步请求数据
      const status = await getTabData(type, page, activeIndex.value)
      // 加载状态结束
      loading.value = false
      // 全部加载完成  停止下拉加载
      status && (finished.value = true)
    }
    return {
      ...toRefs(state),
      activeIndex,
      loading,
      finished,
      switchTab,
      onLoad
    }
  }
}
</script>

<style scoped lang="less">
.TabControl {
  background: #fff;
}
</style>
