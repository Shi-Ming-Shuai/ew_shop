<template>
  <div class="Cart">
    <h1>购物车</h1>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  name: 'Cart',
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

<style scoped lang="less"></style>
