<template>
  <div class="Cart">
    <!-- 公共导航栏 -->
    <van-nav-bar title="购物车" left-arrow @click-left="$router.back()" />
    <CartList v-if="true" />
    <NoGoods v-else />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
// 组件
import NoGoods from './childCpn/NoGoods'
import CartList from './childCpn/CartList'
export default {
  name: 'Cart',
  props: {},
  components: { NoGoods, CartList },
  setup() {
    const state = reactive({})

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="less">
.Cart {
  background: #fff;
}
</style>
