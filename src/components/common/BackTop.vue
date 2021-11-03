<template>
  <div class="BackTop" @click="backTop">
    <van-icon name="upgrade" />
  </div>
</template>

<script>
export default {
  name: 'BackTop',
  props: {},
  components: {},
  setup(props, { emit }) {
    // 点击回到顶部 （父组件处理业务逻辑）
    function backTop() {
      emit('backTop')
    }
    return {
      backTop
    }
  }
}
</script>

<style scoped lang="less">
.BackTop {
  position: fixed;
  z-index: 999;
  bottom: 100px;
  right: 40px;
  width: 35px;
  height: 35px;
  .van-icon-upgrade {
    font-size: 35px;
    color: red;
  }
}
</style>
