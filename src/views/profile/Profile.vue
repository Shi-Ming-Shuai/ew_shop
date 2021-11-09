<template>
  <div class="Profile">
    <!-- 公共导航栏 -->
    <van-nav-bar title="个人中心" left-arrow @click-left="$router.back()" />
    <van-cell title="地址管理" is-link to="address" />
    <!-- 退出登录 -->
    <van-button class="login-out" round block type="primary" @click="loginOut">
      退出登录
    </van-button>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { reactive, toRefs } from 'vue'
import { removeItem } from '@/utils/storage'

export default {
  name: 'Profile',
  props: {},
  components: {},
  setup() {
    const store = useStore()

    const state = reactive({})
    // 业务逻辑
    // 退出登录
    const loginOut = () => {
      // 移除token
      removeItem('token')
      store.commit('changeLogin', false)
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
