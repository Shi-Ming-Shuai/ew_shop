<template>
  <div class="Detaile">
    <!-- 公共导航栏 -->
    <van-nav-bar title="图书详情" left-arrow @click-left="$router.back()" />
    <!-- 商品信息 -->
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { reactive, toRefs } from 'vue'
export default {
  name: 'Detaile',
  props: {},
  components: {},
  setup() {
    const route = useRoute()
    console.log(route.query)
    const state = reactive({})
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="less"></style>
