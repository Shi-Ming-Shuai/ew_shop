<template>
  <div class="Address">
    <!-- 公共导航栏 -->
    <van-nav-bar title="地址管理" left-arrow @click-left="$router.back()" />
    <van-button type="success" round class="add-address" @click="$router.push('addressedit')"
      >添加地址</van-button
    >
    <div class="Address">地址管理</div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Address',
  props: {},
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
.Address {
  height: calc(100vh - 46px - 50px);
  background: #fff;
}
.add-address {
  position: fixed;
  bottom: 100px;
  left: 50px;
  width: 250px;
  height: 30px;
}
</style>
