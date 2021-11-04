<template>
  <div class="Category">
    <!-- 公共导航栏 -->
    <van-nav-bar title="图书分类" left-arrow @click-left="$router.back()" />
    <!-- 分类布局 -->
    <div class="layout">
      <Menu class="menu" :categoryList="categoryList" @menuClick="menuClick" />
      <GoodsList
        class="content"
        :goodsList="goodsList.data"
        @tabClick="tabClick"
      />
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, ref } from 'vue'

// 请求
import { getCategoryGoods } from '@/network/category'
// 子组件
import Menu from './childCpn/Menu'
import GoodsList from './childCpn/GoodsList'

export default {
  name: 'Category',
  props: {},
  components: { Menu, GoodsList },
  setup() {
    onMounted(() => {
      getAllData()
    })
    // 分类的id 排序的类型
    const categoryId = ref(0)
    const orderType = ref('sales')
    const state = reactive({
      categoryList: [],
      goodsList: []
    })
    // 请求
    async function getAllData(categoryId, type = orderType.value) {
      const res = await getCategoryGoods({
        category_id: categoryId,
        [type]: 1
      })
      state.categoryList = res.categories
      state.goodsList = res.goods
    }
    // 业务逻辑
    // 菜单分类被点击
    function menuClick(id) {
      categoryId.value = id
      getAllData(categoryId.value, orderType.value)
    }
    // 商品排序被点击
    function tabClick(type) {
      // 保存下标，配合一级菜单id 用于请求 对应排序商品数据
      orderType.value = type
      getAllData(categoryId.value, orderType.value)
    }
    return {
      ...toRefs(state),
      tabClick,
      menuClick
    }
  }
}
</script>

<style scoped lang="less">
.layout {
  display: flex;
  .menu {
    width: 130px;
    height: calc(100vh - 46px - 50px);
  }
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>
