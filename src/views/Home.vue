<template>
  <div class="Home"></div>
</template>

<script>
import { reactive, toRefs, onMounted } from 'vue'
// 请求
import { getHomeData } from '@/network/home'
export default {
  name: 'Home',
  props: {},
  components: {},
  setup() {
    onMounted(() => {
      getHome()
    })
    const state = reactive({})
    // 请求
    async function getHome() {
      const res = await getHomeData()
      console.log(res)
    }
    return {
      ...toRefs(state)
    }
  }
}
</script>

<style lang="less"></style>
