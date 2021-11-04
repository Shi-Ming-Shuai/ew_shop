<template>
  <div class="GoodsList">
    <van-tabs duration="0.3" v-model:active="activeIndex" @click-tab="tabClick">
      <van-tab v-for="item in tabList" :key="item.type" :title="item.title">
        <!-- tab 对应内容 -->
        <div class="list">
          <GoodsListItem
            v-for="item in goodsList"
            :key="item.id"
            :goodsItem="item"
            @click="goDetaile(item.id)"
          />
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref, reactive, toRefs } from 'vue'
// 组件
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  props: {
    goodsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: { GoodsListItem },
  setup(props, { emit }) {
    const router = useRouter()
    const activeIndex = ref(0)
    const state = reactive({
      tabList: [
        { title: '销量排序', type: 'sales' },
        { title: '价格排序', type: 'price' },
        { title: '评论排序', type: 'comments_count' }
      ]
    })
    // 业务逻辑
    function tabClick(i) {
      // 通知父组件请求对应二级菜单数据
      emit('tabClick', state.tabList[i.name].type)
    }
    // 跳转至详情
    function goDetaile(goodsId) {
      router.push({
        path: '/detaile',
        query: {
          goodsId
        }
      })
    }
    return { activeIndex, ...toRefs(state), tabClick, goDetaile }
  }
}
</script>

<style scoped lang="less">
.list {
  height: calc(100vh - 46px - 50px - 44px);
  overflow-y: auto;
  background: #fff;
}
</style>
