<template>
  <div class="NoGoods">
    <div class="bg-img"></div>
    <p>购物车空空如也</p>
    <van-button size="small" @click="goHome">前往选购</van-button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { reactive, toRefs } from 'vue'
export default {
  name: 'NoGoods',
  props: {},
  components: {},
  setup() {
    const router = useRouter()
    const state = reactive({})
    // 业务逻辑
    const goHome = () => {
      router.push('/')
    }
    return {
      ...toRefs(state),
      goHome
    }
  }
}
</script>

<style scoped lang="less">
.NoGoods {
  height: calc(100vh - 46px - 50px);
  text-align: center;
  p {
    margin-bottom: 20px;
  }
  .bg-img {
    margin: 0 auto;
    width: 250px;
    height: 220px;
    background: url('https://img1.baidu.com/it/u=1495549002,2092677697&fm=26&fmt=auto')
      no-repeat center;
    background-size: 100%;
  }
}
</style>
