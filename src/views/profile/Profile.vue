<template>
  <div class="Profile">
    <!-- 公共导航栏 -->
    <van-nav-bar title="个人中心" left-arrow @click-left="$router.back()" />
    <!-- 退出登录 -->
    <van-button class="login-out" round block type="primary" @click="loginOut">
      退出登录
    </van-button>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { removeItem } from '@/utils/storage'

import { getToken } from '@/utils/getToken'

export default {
  name: 'Profile',
  props: {},
  components: {},
  setup() {
    const a = getToken()
    console.log(a)
    const state = reactive({})
    // 业务逻辑
    // 退出登录
    const loginOut = () => {
      // 移除token
      removeItem('token')
    }
    return {
      ...toRefs(state),
      loginOut
    }
  }
}
</script>

<style scoped lang="less">
.login-out {
  border: 0;
  background: var(--color-nav-background);
}
</style>
