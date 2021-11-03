<template>
  <div class="Category">
    <!-- 公共导航栏 -->
    <van-nav-bar title="图书分类" left-arrow @click-left="$router.back()" />
    <!-- 分类布局 -->
    <div class="layout">
      <Menu class="menu" :categoryList="categoryList" />
      <div class="content">
        <div class="order"></div>
        <div class="goods-list"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'

// 请求
import { getCategoryGoods } from '@/network/category'
// 子组件
import Menu from './childCpn/Menu'

export default {
  name: 'Category',
  props: {},
  components: { Menu },
  setup() {
    onMounted(() => {
      getAllData()
    })
    const state = reactive({
      categoryList: [],
      goodsList: []
    })
    // 请求
    async function getAllData() {
      const res = await getCategoryGoods()
      state.categoryList = res.categories
      state.goodsList = res.goods
    }
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="less">
.layout {
  display: flex;
  .menu {
    width: 150px;
    height: calc(100vh - 46px - 50px);
    border: 1px solid #000;
  }
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    border: 1px solid pink;
    .order {
      border: 1px solid green;
      height: 50px;
    }
    .goods-list {
      flex: 1;
      border: 1px solid red;
    }
  }
}
</style>
