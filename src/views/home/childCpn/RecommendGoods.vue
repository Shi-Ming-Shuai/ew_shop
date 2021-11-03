<template>
  <div class="RecommendGoods">
    <div
      class="goods-item"
      v-for="item in reGoodsList"
      :key="item.id"
      @click="goDetaile(item.id)"
    >
      <img v-lazy="item.cover_url" alt="" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'RecommendGoods',
  props: {
    reGoodsList: {
      type: Array,
      defult() {
        return []
      }
    }
  },
  components: {},
  setup() {
    const router = useRouter()

    // 路由跳转 图书详情
    function goDetaile(goodsId) {
      router.push({
        path: '/detaile',
        query: {
          goodsId
        }
      })
    }
    return { goDetaile }
  }
}
</script>

<style scoped lang="less">
.RecommendGoods {
  margin: 4px 4px 10px 4px;
  padding: 10px 0;
  display: flex;
  background: #fff;
  overflow-x: auto;
}
.goods-item {
  width: 60px;
  margin: 0 20px;
  flex-shrink: 0; //宽度为 width设置的宽度
  text-align: center;
  img {
    margin-bottom: 5px;
    width: 60px;
    height: 70px;
  }
  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}
</style>
