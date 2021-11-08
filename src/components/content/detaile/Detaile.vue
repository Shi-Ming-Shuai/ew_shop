<template>
  <div class="Detaile">
    <!-- 公共导航栏 -->
    <van-nav-bar title="图书详情" left-arrow @click-left="$router.back()" />
    <!-- 商品信息 -->
    <van-card
      :price="goods.price"
      :desc="goods.description"
      :title="goods.title"
      :thumb="goods.cover_url"
    >
      <template #tags>
        <van-tag plain type="danger">新书</van-tag>
        <van-tag plain type="danger">推荐</van-tag>
      </template>
      <template #footer>
        <van-button class="btn-shopping" size="small" @click="addCardClick"
          >加入购物车</van-button
        >
        <van-button class="btn-buy" size="small">立即购买</van-button>
      </template>
    </van-card>
    <!-- 标签栏 -->
    <TabControl
      :details="goods.details"
      :comments="goods.comments"
      :likeGoods="likeGoods"
    />
  </div>
</template>

<script>
import { Toast } from 'vant'
import { useRoute } from 'vue-router'
import { reactive, toRefs, onMounted } from 'vue'
// 请求
import { getDetaile } from '@/network/detaile'
import { addCart } from '@/network/cart'

// 组件
import TabControl from './childCpn/TabControl'
export default {
  name: 'Detaile',
  props: {},
  components: { TabControl },
  setup() {
    const route = useRoute()
    const { goodsId } = route.query
    console.log(goodsId)
    const state = reactive({
      goods: {},
      likeGoods: []
    })

    onMounted(() => {
      getDetaileData(goodsId)
    })
    // 请求
    async function getDetaileData(goodsId) {
      const res = await getDetaile(goodsId)
      state.goods = res.goods
      state.likeGoods = res.like_goods
      console.log(res)
    }
    // 业务逻辑
    // 加入购物车
    const addCardClick = async () => {
      try {
        await addCart(goodsId, 1)
        Toast.success('添加成功')
      } catch (e) {
        Toast('添加失败,请重试')
      }
    }
    return {
      ...toRefs(state),
      addCardClick
    }
  }
}
</script>

<style scoped lang="less">
.Detaile {
  background: #fff;
}
.van-card:not(:first-child) {
  margin-top: 0;
}
/deep/.van-card__header {
  flex-direction: column;
}
/deep/.van-card__thumb {
  width: 100%;
  height: 380px;
}
/deep/.van-card__content {
  .van-card__title,
  .van-card__desc {
    margin: 5px 0;
  }
}
.btn-shopping {
  width: 110px;
  height: 40px;
  background-color: #ff9567;
  color: #fff;
  border-radius: 5px;
}
.btn-buy {
  width: 95px;
  height: 40px;
  background-color: #ed0824;
  color: #fff;
  border-radius: 5px;
}
</style>
