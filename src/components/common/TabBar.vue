<template>
  <div class="TabBar">
    <van-tabbar route active-color="#43b983" v-model="active">
      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="qr" to="/category">分类</van-tabbar-item>
      <van-tabbar-item badge="20" icon="shopping-cart-o" to="/cart"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item icon="user-o" to="/profile">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'TabBar',
  props: {},
  components: {},
  setup() {
    const active = ref(0)
    return { active }
  }
}
</script>

<style scoped lang="less">
.van-tabbar {
  background: #f6f6f6;
}
.van-tabbar-item--active {
  background: #fff;
}
</style>
