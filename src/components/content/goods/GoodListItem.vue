<template>
  <div class="GoodListItem">
    <div class="cover">
      <img :src="goodsInfo.cover_url" alt="" />
    </div>
    <div class="goods-info">
      <p class="title">{{ goodsInfo.title }}</p>
      <p class="count">
        <b class="price">￥{{ goodsInfo.price }}</b>
        <van-icon name="star-o" /><span>{{ goodsInfo.collects_count }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'GoodListItem',
  props: {
    goodsInfo: {
      type: Object,
      defaule() {
        return {}
      }
    }
  },
  components: {},
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="less">
.GoodListItem {
  text-align: center;
  img {
    width: 100%;
  }
  .count{
    margin-top: 5px;
    span{
      margin-left: 2px;
    }
  }
  .price{
    margin-right: 8px;
  }
  }
</style>
