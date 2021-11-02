<template>
  <div class="GoodsList">
    <GoodListItem
      class="item"
      v-for="item in goodsLists"
      :key="item.id"
      :goodsInfo="item"
      @click="goDetaile(item.id)"
    />
    <!-- <p v-for="(item, i) in 50" :key="i">adawd</p> -->
  </div>
</template>

<script>
import GoodListItem from './GoodListItem'

import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
export default {
  name: 'GoodsList',
  props: {
    goodsLists: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    GoodListItem
  },
  setup() {
    const router = useRouter()
    const state = reactive({})
    // 跳转至详情
    function goDetaile(goodsId) {
      console.log(goodsId)
      router.push({
        path: '/detaile',
        query: {
          goodsId
        }
      })
    }
    return {
      ...toRefs(state),
      goDetaile
    }
  }
}
</script>

<style scoped lang="less">
.GoodsList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .item {
    margin-top: 10px;
    width: 180px;
    border: 1px solid #000;
    // &:last-child {
    //   /* 让最后一个元素的右边距自动适应，从而实现左对齐的效果。*/
    //   margin-right: auto;
    // }
  }
}
</style>
